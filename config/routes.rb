Rails.application.routes.draw do

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  scope '/api' do
    resources :posts do
      collection do
        get '/mine' => 'post#mine'
      end
    end
    post 'user_token' => 'user_token#create'
    resources :comics
    resources :users
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
