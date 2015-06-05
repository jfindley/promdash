class AddKindToServer < ActiveRecord::Migration
  def change
    add_column :servers, :kind, :string, default: 'prometheus'
  end
end
