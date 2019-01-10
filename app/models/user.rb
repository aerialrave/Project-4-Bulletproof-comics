class User < ApplicationRecord
  has_many :posts, dependent: :destroy
  has_and_belongs_to_many :comics
has_secure_password
 validates :username, presence: true, uniqueness:true

 def to_token_payload
     {
         sub: id,
         username: username
     }
 end

 def self.from_token_request(request)
   username = request.params["auth"] && request.params["auth"]["username"]
   self.find_by(username: username)
 end

end
