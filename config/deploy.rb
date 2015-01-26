# config valid only for current version of Capistrano
lock "3.3.5"

set :application, "static-site"
set :repo_url, "https://github.com/NREL/api-umbrella-static-site.git"
set :branch, "master"

# Default deploy_to directory is /var/www/my_app
set :deploy_to, "/opt/api-umbrella/embedded/apps/static-site"

# Default value for :scm is :git
# set :scm, :git

# Default value for :format is :pretty
# set :format, :pretty

# Default value for :log_level is :debug
set :log_level, :info

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# set :linked_files, %w{config/database.yml}

# Default value for linked_dirs is []
# set :linked_dirs, %w(bin log tmp/pids tmp/cache tmp/sockets vendor/bundle public/system)

# Default value for default_env is {}
fetch(:default_env).merge!({
  "PATH" => "/opt/api-umbrella/bin:/opt/api-umbrella/embedded/bin:$PATH",
})

set :ssh_options, {
  :forward_agent => true,
}

namespace :middleman do
  desc "Build and compile the website using middleman"
  task :build do
    on roles(:web) do
      within release_path do
        execute "bundle", "exec", "middleman", "build"
      end
    end
  end

  before "deploy:updated", "middleman:build"
end

namespace :deploy do

  desc "Restart application"
  task :restart do
    on roles(:app), :in => :sequence, :wait => 5 do
      # Your restart mechanism here, for example:
      # execute :touch, release_path.join("tmp/restart.txt")
    end
  end

  after :publishing, :restart

  after :restart, :clear_cache do
    on roles(:web), :in => :groups, :limit => 3, :wait => 10 do
      # Here we can do anything such as:
      # within release_path do
      #   execute :rake, "cache:clear"
      # end
    end
  end

end
