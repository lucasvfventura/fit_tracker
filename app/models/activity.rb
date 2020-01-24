class Activity < ApplicationRecord
  belongs_to :user
  has_one_attached :activity_file
end
