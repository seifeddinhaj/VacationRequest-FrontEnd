class CreateRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :requests do |t|
      t.date :startDate
      t.date :endDate
      t.string :reason
      t.boolean :treated
      t.boolean :accepted
      t.integer :user_id

      t.timestamps
    end
  end
end
