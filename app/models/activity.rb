class Activity < ApplicationRecord
  belongs_to :user
  has_one_attached :fit_file
end
