source "https://rubygems.org"

# For faster file watcher updates on Windows:
gem "wdm", "~> 0.1.0", platforms: [:mswin, :mingw]

# Windows does not come with time zone data
gem "tzinfo-data", platforms: [:mswin, :mingw, :jruby]

# Middleman Gems
gem "middleman", "~> 4.2.1"
gem "middleman-livereload", "~> 3.4.6"

# Environment specific config with environment variables
gem "dotenv", "~> 2.2.1"

# Syntax highlighting
gem "middleman-syntax", "~> 3.0.0"

# Deploy to GitHub Pages
gem "middleman-gh-pages", "~> 0.3.1"

# Assets
gem "middleman-sprockets", "~> 4.1.0"

# Bootstrap
gem "bootstrap-sass", "~> 3.3.7"

# Icons
gem "font-awesome-sass", "~> 4.7.0"

# Redirects
gem "middleman-alias", "~> 0.0.9"

# JSON validation
gem "multi_json", "~> 1.12.1"

source "https://rails-assets.org" do
  # Swagger UI - Patched version with IE console fixes.
  gem "rails-assets-GUI--swagger-ui", "2.0.3.patch1"

  # jQuery
  gem "rails-assets-jquery", "~> 1.11.2"

  # Add back in $.browser for our older Swagger version with the newer jQuery
  # version (we can't easily downgrade jQuery since Bootstrap 3 depends on this
  # newer version).
  # We should revisit this whenever we upgrade the Swagger UI library again.
  gem "rails-assets-jquery.browser", "~> 0.0.7"

  # Programmatic bootstrap modals
  gem "rails-assets-bootbox", "~> 4.4.0"

  # Form validation
  gem "rails-assets-parsleyjs", "~> 2.7.2"
end
