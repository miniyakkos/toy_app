module Api
  module V1
    class GroceryListsController < ApplicationController
      def index
        @groceries = GroceryList.all
        render json: { groceries: @groceries }
      end

      def show
      end

    # def create
    # end
    end
  end
end
