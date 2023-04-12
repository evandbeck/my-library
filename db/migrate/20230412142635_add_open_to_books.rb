class AddOpenToBooks < ActiveRecord::Migration[7.0]
  def change
    add_column :books, :open, :boolean
  end
end
