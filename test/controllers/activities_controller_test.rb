require 'test_helper'

class ActivitiesControllerTest < ActionDispatch::IntegrationTest
  include Devise::Test::IntegrationHelpers
  
  setup do
    @lucas = users(:lucas)
    sign_in(@lucas)

    @activity = activities(:one)
    file = Rails.root.join('test', 'fixtures', 'files', @activity.file)
    @activity.activity_file.attach(io: File.open(file), filename: @activity.file)
  end

  test "should get index" do
    get activities_url, as: :json
    assert_response :success
  end

  test "should create activity" do
    assert_difference('Activity.count') do

      upload = fixture_file_upload(Rails.root.join('test', 'fixtures', 'files', @activity.file), 'tcx')
      post activities_url, params: { activity: { description: @activity.description, effort: @activity.effort, user_id: @activity.user_id }, activity_file: upload }
    end

    assert_response 201
  end

  test "should show activity" do
    get activity_url(@activity), as: :json
    assert_response :success
  end

  test "should update activity" do
    patch activity_url(@activity), params: { activity: { category: @activity.category, description: @activity.description, duration: @activity.duration, effort: @activity.effort, file: @activity.file, user_id: @activity.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy activity" do
    assert_difference('Activity.count', -1) do
      delete activity_url(@activity), as: :json
    end

    assert_response 204
  end
end
