Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      get "books", to: "books#books"
      resources :authors do
        resources :books
      end
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
