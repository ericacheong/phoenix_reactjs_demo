defmodule PhoenixReactjsDemoWeb.PageController do
  use PhoenixReactjsDemoWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
