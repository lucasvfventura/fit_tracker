json.extract! activity, :id, :description, :duration, :category, :effort, :file, :user_id, :created_at, :updated_at
json.calories @calories
json.distance @distance
json.url activity_url(activity, format: :json)
