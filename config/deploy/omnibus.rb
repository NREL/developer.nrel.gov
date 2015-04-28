role :app, ["#{ENV["USER"]}@localhost"]
role :web, ["#{ENV["USER"]}@localhost"]

set :keep_releases, 1
