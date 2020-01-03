class CreateActivities < ActiveRecord::Migration[6.0]
  def change
    create_table :activities do |t|
      t.text :description
      t.time :duration
      t.string :category
      t.integer :effort
      t.string :file
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
