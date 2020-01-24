class ActivitiesController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_activity, only: [:show, :update, :destroy]

  # GET /activities
  # GET /activities.json
  def index
    @activities = Activity.all
  end

  # GET /activities/1
  # GET /activities/1.json
  def show
    @activity.activity_file.open do |file|
      doc = File.open(file) { |f| Nokogiri::XML(f) }
      doc.remove_namespaces!

      @calories = doc.xpath("//Calories").inject(0) { |sum, c| sum + c.text.to_f() }

      @distance = doc.xpath("//Lap/DistanceMeters").inject(0) { |sum, c| sum + c.text.to_f() }
    end
  end

  # POST /activities
  # POST /activities.json
  def create
    file = params["activity_file"]
    user = User.all()[0]
    @activity = Activity.create!(user: user, description: params["description"], activity_file: params["activity_file"], file: file.original_filename)
  end

  # PATCH/PUT /activities/1
  # PATCH/PUT /activities/1.json
  def update
    if @activity.update(activity_params)
      render :show, status: :ok, location: @activity
    else
      render json: @activity.errors, status: :unprocessable_entity
    end
  end

  # DELETE /activities/1
  # DELETE /activities/1.json
  def destroy
    @activity.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_activity
      @activity = Activity.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def activity_params
      params.require(:activity).permit(:description, :duration, :category, :effort, :file, :user_id)
    end

end
