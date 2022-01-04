# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    @ranking_items = Item.week_ranking()
  end

  def latest
    @latest_items = Item.all.order(created_at: :desc).page(params[:page]).per(10)
  end

  def about
  end

  def markdown_example
  end

  def contact
  end
end
