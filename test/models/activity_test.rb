require 'test_helper'

class ActivityTest < ActiveSupport::TestCase
  test "activity required fields" do
    activty = Activity.new
    assert activty.invalid?
    assert activty.errors[:duration].any?
    assert activty.errors[:category].any?
    assert activty.errors[:file].any?
    assert activty.errors[:activity_file].any?
    assert activty.errors[:user].any?
  end
end
