class AddAddresseUser < ActiveRecord::Migration[5.2]
  def change
    change_table :users do |t|
      ## Trackable
      t.column :adresse, :string

    end
  end
end
