class CreateCardActivities < ActiveRecord::Migration
  def change
    create_table :card_activities do |t|
      t.integer :user_id
      t.integer :card_id
      t.string :activity

      t.timestamps null: false
    end
  end
end
