require 'test_helper'

class UsersComicsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @users_comic = users_comics(:one)
  end

  test "should get index" do
    get users_comics_url, as: :json
    assert_response :success
  end

  test "should create users_comic" do
    assert_difference('UsersComic.count') do
      post users_comics_url, params: { users_comic: { comic_id: @users_comic.comic_id, user_id: @users_comic.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show users_comic" do
    get users_comic_url(@users_comic), as: :json
    assert_response :success
  end

  test "should update users_comic" do
    patch users_comic_url(@users_comic), params: { users_comic: { comic_id: @users_comic.comic_id, user_id: @users_comic.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy users_comic" do
    assert_difference('UsersComic.count', -1) do
      delete users_comic_url(@users_comic), as: :json
    end

    assert_response 204
  end
end
