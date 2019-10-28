use Mix.Config

# Configure your database
config :vue_phoenix, VuePhoenix.Repo,
  username: "postgres",
  password: "postgres",
  database: "vue_phoenix_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :vue_phoenix, VuePhoenixWeb.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn
