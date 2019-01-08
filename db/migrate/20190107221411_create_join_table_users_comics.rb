class CreateJoinTableUsersComics < ActiveRecord::Migration[5.2]
  def change
    create_join_table :users, :comics do |t|
      # t.index [:user_id, :comic_id]
      # t.index [:comic_id, :user_id]
    end
  end
end
