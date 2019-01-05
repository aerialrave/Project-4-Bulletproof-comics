class UsersComicsController < ApplicationController
  before_action :set_users_comic, only: [:show, :update, :destroy]

  # GET /users_comics
  def index
    @users_comics = UsersComic.all

    render json: @users_comics
  end

  # GET /users_comics/1
  def show
    render json: @users_comic
  end

  # POST /users_comics
  def create
    @users_comic = UsersComic.new(users_comic_params)

    if @users_comic.save
      render json: @users_comic, status: :created, location: @users_comic
    else
      render json: @users_comic.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users_comics/1
  def update
    if @users_comic.update(users_comic_params)
      render json: @users_comic
    else
      render json: @users_comic.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users_comics/1
  def destroy
    @users_comic.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_users_comic
      @users_comic = UsersComic.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def users_comic_params
      params.require(:users_comic).permit(:user_id, :comic_id)
    end
end
