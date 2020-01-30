require 'rails_helper'

RSpec.describe Activity, type: :model do
  it "shouldn't allow and empty activity" do
    empty_activity = Activity.new
    expect(empty_activity.valid?).to be false
    puts empty_activity.errors[:duration]
    expect(empty_activity.errors[:duration]).to_not be_nil
    expect(empty_activity.errors[:duration]).to include("can't be blank")
    expect(empty_activity.errors[:file]).to_not be_nil
    expect(empty_activity.errors[:file]).to include("can't be blank")
    expect(empty_activity.errors[:category]).to_not be_nil
    expect(empty_activity.errors[:category]).to include("can't be blank")
    expect(empty_activity.errors[:activity_file]).to_not be_nil
    expect(empty_activity.errors[:activity_file]).to include("can't be blank")
    expect(empty_activity.errors[:user]).to_not be_nil
    expect(empty_activity.errors[:user]).to include("can't be blank")
  end

  it "shouldn't allow for non numeric duration" do
    empty_activity = Activity.new
    empty_activity.duration = "test"
    expect(empty_activity.valid?).to be false
    expect(empty_activity.errors[:duration]).to_not be_nil
    expect(empty_activity.errors[:duration]).to include("is not a number")
  end

  it "shouldn't allow for negative duration" do
    empty_activity = Activity.new
    empty_activity.duration = -2
    expect(empty_activity.valid?).to be false
    expect(empty_activity.errors[:duration]).to_not be_nil
    expect(empty_activity.errors[:duration]).to include("must be greater than 0")
  end

  it "should only allow TCX files" do

    invalid_activity = Activity.new file: 'activity_1.xml'

    expect(invalid_activity.valid?).to be false
    expect(invalid_activity.errors[:file]).to_not be_nil
    expect(invalid_activity.errors[:file]).to be_an_instance_of(Array)
    expect(invalid_activity.errors[:file]).to include("Only tcx files are accepted")

    valid_activity = Activity.new file: 'activity_1.tcx'

    expect(valid_activity.valid?).to be false
    expect(valid_activity.errors[:file]).to be_an_instance_of(Array)
    expect(valid_activity.errors[:file].length).to be 0
    expect(valid_activity.errors[:file]).to_not include("Only tcx files are accepted")
  end

  it "shouldn't only files bigger than 8MB" do

    invalid_activity = Activity.new activity_file: upload = fixture_file_upload(Rails.root.join('spec', 'fixtures', 'files', 'invalid_activity_1.tcx'), 'tcx')

    expect(invalid_activity.valid?).to be false
    expect(invalid_activity.activity_file).to_not be_nil
    expect(invalid_activity.activity_file.attached?).to be true
    expect(invalid_activity.errors[:activity_file]).to_not be_nil
    expect(invalid_activity.errors[:activity_file]).to be_an_instance_of(Array)
    expect(invalid_activity.errors[:activity_file]).to include("Maximum file size allowed is 8MB")

  end
end
