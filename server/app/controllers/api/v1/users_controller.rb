# frozen_string_literal: true

class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user!
  def index
    render(
      json: {
        status: 200,
        message: 'Valid session'
      }, status: :ok
    )
  end
end
