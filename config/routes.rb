Rails.application.routes.draw do
  resources :monuments, except: :index
  root to: "monuments#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
