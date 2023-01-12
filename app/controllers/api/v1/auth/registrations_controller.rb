# frozen_string_literal: true

class Api::V1::Auth::RegistrationsController < Devise::RegistrationsController
  respond_to :json

  private

  def respond_with(resource, _options = {})
    if resource.persisted?
      render(
        json: {
          status: {
            code: 200,
            message: 'Signed up successfully',
            data: UserSerializer.new(resource)
          }
        },
        status: :ok
      )
    else
      Rails.logger.debug(resource.errors.full_messages)
      render(
        json: {
          message: 'User could not be created successfull',
          errors: resource.errors.full_messages,
          status: :unprocessable_entity
        }
      )
    end
  end

  def sign_up_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end
end
