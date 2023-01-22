# frozen_string_literal: true

class Role < ApplicationRecord
  has_many :user_role, dependent: :destroy

  ADMIN_ROLE = 'Admin'
  USER_ROLE = 'User'

  public_constant :ADMIN_ROLE
  public_constant :USER_ROLE

  validates :name, uniqueness: true
end
