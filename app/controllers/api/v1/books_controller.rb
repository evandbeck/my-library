class Api::V1::BooksController < ApplicationController
  before_action :set_book, only: %i[ show update destroy ]

  # GET /books
  def index
    @books = Book.all

    render json: @books
  end

  # GET /books/1
  def show
    render json: @book
  end

  # POST /books
  def create
    @book = Book.new(book_params)

    if @book.save
      render json: @book, status: :created
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /books/1
  def update
    if @book.update(book_params)
      render json: @book
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  # DELETE /books/1
  def destroy
    @book.destroy
  end

  # Custom Actions
  def reading
    @books = Book.where("open = true")

    render json: @books
  end

  def read
    @books = Book.where("read = true")

    render json: @books
  end

  def owned
    @books = Book.where("own = true")

    render json: @books
  end

  def wishlist
    @books = Book.where("own = false")

    render json: @books
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_book
      @book = Book.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def book_params
      params.require(:book).permit(:title, :description, :read, :rating, :own, :open, :author_id)
    end
end
