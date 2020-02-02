require 'rails_helper'

RSpec.describe "ActivitiesControllers", type: :request do
  include Devise::Test::IntegrationHelpers

  fixtures :activities
  fixtures :users
  
  before(:example) do
    @lucas = users(:lucas)
    sign_in(@lucas)

    @activity = activities(:one)
    file = Rails.root.join('test', 'fixtures', 'files', @activity.file)
    @activity.activity_file.attach(io: File.open(file), filename: @activity.file)
  end

  it "should get index" do
    get activities_url, as: :json
    expect(response).to have_http_status(:success)
  end

  it "should create activity" do
    count = Activity.count

    upload = fixture_file_upload(Rails.root.join('test', 'fixtures', 'files', @activity.file), 'tcx')
    post activities_url, params: { activity: { description: @activity.description, effort: @activity.effort, user_id: @activity.user_id }, activity_file: upload }

    expect(response).to have_http_status(:created)
    expect(Activity.count).to be(count +1)
  end

  it "should show activity" do
    get activity_url(@activity), as: :json
    expect(response).to have_http_status(:success)
  end

  it "should update activity" do
    patch activity_url(@activity), params: { activity: { category: @activity.category, description: @activity.description, duration: @activity.duration, effort: @activity.effort, file: @activity.file, user_id: @activity.user_id } }, as: :json
    expect(response).to have_http_status(:success)
  end

  it "should destroy activity" do
    count = Activity.count
    delete activity_url(@activity), as: :json

    expect(Activity.count).to be(count -1)
  end
end
