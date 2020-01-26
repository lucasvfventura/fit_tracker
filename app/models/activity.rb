class Activity < ApplicationRecord
  belongs_to :user
  has_one_attached :activity_file

  validates :duration, :category, :file, :activity_file, :user, presence: true
  validates :file, format: {with: /.*\.tcx/, message: "Only tcx files are accepted"}
  validate :max_file_size
 
  def max_file_size
    # Only allow files smaller than 8MB
    if activity_file.attached? && activity_file.blob.byte_size > 8_000_000
      errors.add(:activity_file, "Maximum file size allowed is 8MB")
    end
  end
  
  after_initialize do
    unless self.duration.present? and self.category.present?
      doc = read_tcx_file()

      self.duration = doc.xpath("//Lap/TotalTimeSeconds").inject(0) { |sum, c| sum + c.text().to_f() }
      self.category = doc.xpath("//Activity/@Sport").text
    end
  end

  def activity_data()
    doc = read_tcx_file()

    return ({
      calories: (doc.xpath("//Calories").inject(0) { |sum, c| sum + c.text.to_f()} ),
      distance: (doc.xpath("//Lap/DistanceMeters").inject(0) { |sum, c| sum + c.text.to_f() })
    })
  end

  private

  def read_tcx_file()
    doc = nil

    if self.activity_file.present? and self.activity_file.attached?
      self.activity_file.open do |act_file|
        doc = File.open(act_file) { |f| Nokogiri::XML(f) }
      end
    elsif self.attachment_changes['activity_file'].attachable
      doc = File.open(self.attachment_changes['activity_file'].attachable) { |f| Nokogiri::XML(f) }
    end
    doc.remove_namespaces!
    return doc
  end
end
