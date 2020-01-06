json.array!(@users) do |user|
    json.email user.email
end
