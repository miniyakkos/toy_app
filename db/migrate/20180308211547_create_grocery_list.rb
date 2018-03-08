class CreateGroceryList < ActiveRecord::Migration[5.1]
  def change
    create_table :grocery_lists do |t|
      t.string :name
    end
  end
end
