defmodule VuePhoenix.Repo do
  use Ecto.Repo,
    otp_app: :vue_phoenix,
    adapter: Ecto.Adapters.Postgres
end
