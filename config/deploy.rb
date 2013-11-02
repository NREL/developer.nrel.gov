# Setup our multi-stage environments.
require "capistrano/ext/multistage"

require "capistrano_nrel_ext/recipes/defaults"
require "capistrano_nrel_ext/recipes/gem_bundler"
require "capistrano_nrel_ext/recipes/nanoc"
require "capistrano_nrel_ext/recipes/nginx"
require "capistrano_nrel_ext/recipes/redhat"

# Set the application being deployed.
set :application, "developer.nrel.gov"

# Deploy from git.
set :scm, "git"
set :repository, "git@github.nrel.gov:Technology-Deployment/developer.nrel.gov.git"
set :git_enable_submodules, true

# Use the deploying user's local SSH keys for git access.
ssh_options[:forward_agent] = true
