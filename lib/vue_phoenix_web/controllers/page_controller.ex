defmodule VuePhoenixWeb.PageController do
  use VuePhoenixWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
