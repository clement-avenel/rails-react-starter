# frozen_string_literal: true

class Role < ApplicationRecord
  has_many :user_role, dependent: destroy

  public_constant ADMIN_ROLE = 'Admin'
  public_constant USER_ROLE = 'User'

  validates :name, uniqueness: true
end
