# frozen_string_literal: true

class Api::V1::Auth::RegistrationsController < Devise::RegistrationsController
  respond_to :json

  private

  def respond_with(resource, _opts = {})
    if resource.persisted?
      render(
        json: {
          status: { code: 200, message: 'Signed up sucessfully.' },
          data: resource
        },
        status: :ok
      )
    else
      render(
        json: {
          status: { message: "User couldn't be created successfully. #{resource.errors.full_messages.to_sentence}" }
        },
        status: :unprocessable_entity
      )
    end
  end

  def sign_up_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end
end
