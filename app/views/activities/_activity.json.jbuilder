json.extract! activity, :id, :description, :duration, :category, :effort, :file, :user_id, :created_at, :updated_at, :activity_data
json.url activity_url(activity, format: :json)
