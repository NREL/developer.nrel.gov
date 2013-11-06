# Set the servers for this stage.
role :app, "devprod-int.nrel.gov"
role :web, "devprod-int.nrel.gov"

# Set the base path for deployment.
set :deploy_to_base, "/srv/data"

# Set the accessible web domain for this site.
set :base_domain, "developer.nrel.gov"
set :base_domain_aliases, ["devprod-int.nrel.gov"]

# Production-ready deployments should exclude git data.
set :copy_exclude, [".git"]

# Set the Rails environment.
set :rails_env, "production"

ENV["SWAGGER_HOST"] = "http://developer.nrel.gov"
