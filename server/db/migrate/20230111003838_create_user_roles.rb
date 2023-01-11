class CreateUserRoles < ActiveRecord::Migration[7.0]
  def change
    create_table :user_roles do |t|
      t.belongs_to :role, forgin_key: true
      t.belongs_to :user, forgin_key: true
      t.timestamps
    end

    add_index :user_roles, %i[role_id user_id], unique: true
  end
end
