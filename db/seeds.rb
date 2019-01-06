# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

##destroy all block
Post.destroy_all
Comic.destroy_all
User.destroy_all


## User seed creation

@gabriel = User.create!(
username: "Zslash",
password: "q",
password_confirmation: "q"
)

@hank = User.create!(
username: "Bullet",
password: "bullet",
password_confirmation: "bullet"
)

## Comic seed creation
 @action = Comic.create!(
   title: "Action Comics"

 )

 @doom = Comic.create!(
   title: "Doom Patrol"

 )


## Posts to comics seed creation

@post1 = @gabriel.posts.create!(body: "This comic is awesome", comic_id: @action.id)
@post2 = @hank.posts.create!(body: "I like the art", comic_id: @doom.id)
##associating posts to comics
# @action.posts << @post1

@doom.posts << @post2
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?