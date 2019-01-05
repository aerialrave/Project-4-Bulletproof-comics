class User < ApplicationRecord
  has_many :posts
  has_and_belongs_to_many :comics 
has_secure_password
 validates :username, presence: true

 def to_token_payload
     {
         sub: id,
         username: username
     }
 end


end
