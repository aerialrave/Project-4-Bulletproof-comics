class ComicsController < ApiController
  before_action :set_comic, only: [:show, :update, :destroy]

  # GET /comics
  def index
    @comics = Comic.all

    render json: @comics.to_json(include: {posts: {include: :user} })
  end

  # GET /comics/
  def show
    render json: @comic.to_json(include: {posts: {include: :user} })
  end

  # POST /comics
  def create
    @comic = Comic.new(comic_params)

    if @comic.save
      render json: @comic, status: :created, location: @comic
    else
      render json: @comic.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comics/1
  def update
    if @comic.update(comic_params)
      render json: @comic
    else
      render json: @comic.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comics/1
  def destroy
    @comic.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comic
      @comic = Comic.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def comic_params
      params.require(:comic).permit(:title, :title_img_url)
    end
end
