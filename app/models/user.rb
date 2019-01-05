class User < ApplicationRecord
  has_many :posts
  has_many :comics, through: :users_comic
has_secure_password
 validates :username, presence: true

 def to_token_payload
     {
         sub: id,
         username: username
     }
 end


end
