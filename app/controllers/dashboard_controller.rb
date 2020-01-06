class DashboardController < ApplicationController
  before_action :authenticate_user!

  def index
  end

  def list_users
    @users = User.all
  end
end
