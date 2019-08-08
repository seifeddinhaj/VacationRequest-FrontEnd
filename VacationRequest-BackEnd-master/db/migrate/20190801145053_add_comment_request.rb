class AddCommentRequest < ActiveRecord::Migration[5.2]
  def change
    change_table :requests do |t|
      ## Trackable
      t.column :comment, :string

    end
  end
end
