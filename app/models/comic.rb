class Comic < ApplicationRecord
  has_many :users, through: :users_comic

end
