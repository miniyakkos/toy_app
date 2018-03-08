Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'grocery_lists#index'

  namespace :api do
    namespace :v1 do
      resources :grocery_lists
    end
  end
end
