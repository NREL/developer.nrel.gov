require "capistrano_nrel_ext/recipes/branches"

# Set the servers for this stage.
role :app, "devstage-int.nrel.gov", "devstage-int2.nrel.gov"
role :web, "devstage-int.nrel.gov", "devstage-int2.nrel.gov"

# Set the base path for deployment.
set :deploy_to_base, "/srv/developer"

# Set the accessible web domain for this site.
set :base_domain, "devstage.nrel.gov"
set :base_domain_aliases, ["devstage-int.nrel.gov", "devstage-int2.nrel.gov"]

# Production-ready deployments should exclude git data.
set :copy_exclude, [".git"]

# Set the Rails environment.
set :rails_env, "staging"

default_environment["SWAGGER_HOST"] = "http://lawsandincentives.devstage.nrel.gov"
default_environment['API_HOST'] = 'http://transinclaw.devstage.nrel.gov/api'