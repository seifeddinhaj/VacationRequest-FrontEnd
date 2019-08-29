class AddBalanceToUser < ActiveRecord::Migration[5.2]
  def change
    change_table :users do |t|
      t.column :balance, :integer
    end
  
  end
end
