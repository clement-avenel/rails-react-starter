# frozen_string_literal: true

class Api::V1::Auth::SessionsController < Devise::SessionsController
  respond_to :json

  private

  def respond_with(_resource, _options = {})
    render(json: {
      status: { code: 200, message: 'User signed in successfully', data: UserSerializer.new(current_user) }
    }, status: :ok
    )
  end

  def respond_to_on_destroy
    jwt_payload = JWT.decode(request.headers['Authorization'].split(' ')[1],
                             Rails.application.credentials.secret_key_base
                            )
    Rails.logger.debug(jwt_payload.first)
    current_user = User.find_by(jti: jwt_payload.first['jti'])
    if current_user
      render(json: {
        status: 200,
        message: 'Signed out successfully'
      }, status: :ok
      )
    else
      render(json: {
        status: 401,
        message: 'User has no active session'
      }, status: :unauthorized
      )
    end
  end

  def sign_in_params
    params.require(:user).permit(:email, :password)
  end
end
