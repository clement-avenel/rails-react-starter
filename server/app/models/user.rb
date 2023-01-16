# frozen_string_literal: true

class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: self

  has_one :user_role, dependent: :destroy

  delegate :role, to: :user_role

  validates :first_name, :last_name, presence: true
  validates :email, presence: true, uniqueness: true

  def admin?
    role.name == Role::ADMIN_ROLE
  end

  def user?
    role.name == Role::USER_ROLE
  end

  def self.authenticate(username, password)
    user = User.find_for_authentication(username:)
    user&.valid_password?(password) ? user : nil
  end
end
