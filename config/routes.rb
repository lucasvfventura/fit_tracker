Rails.application.routes.draw do
  resources :activities
  devise_for :users
  get 'dashboard/index'
  get 'dashboard/list_users'
  root 'dashboard#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
