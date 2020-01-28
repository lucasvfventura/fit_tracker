require 'test_helper'

class DashboardControllerTest < ActionDispatch::IntegrationTest
  include Devise::Test::IntegrationHelpers
  
  setup do
    @lucas = users(:lucas)
    sign_in(@lucas)
  end

  test "should get index" do
    get dashboard_index_url
    assert_response :success
  end

end
