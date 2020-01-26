class ChangeActivityDurationType < ActiveRecord::Migration[6.0]
  def change
    change_column :activities, :duration, :float
  end
end
