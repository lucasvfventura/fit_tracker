json.extract! activity, :id, :description, :duration, :category, :effort, :file, :user_id, :created_at, :updated_at
json.calories @activity_data[:calories]
json.distance @activity_data[:distance]
json.url activity_url(activity, format: :json)
