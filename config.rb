require "vite_padrino/tag_helpers"

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:

# With no layout
page "/*.xml", layout: false
page "/*.json", layout: false
page "/*.txt", layout: false

# Disable directory index paths for the 404 page.
page "/404.html", :directory_index => false

# General configuration

# Use Vite for assets.
if build?
  # In build mode, force the Vite Ruby integration into production mode so the
  # tag helpers know where to look for the built assets.
  ENV["RACK_ENV"] = "production"
end
activate :external_pipeline,
  name: :vite,
  command: build? ? "bundle exec vite build --clobber" : "pnpm exec vite build --watch --mode development",
  source: "tmp/vite",
  latency: 1
# Middleman's file watcher seems to trigger on directory changes when watching
# the vite build directory. So ignore directory changes to avoid it throwing
# errors in local development.
module MiddlemanWatcherViteDirectoryFix
  def file_contents_include_binary_bytes?(filename)
    if File.directory?(filename)
      true
    else
      super
    end
  end
end
Middleman::Util.singleton_class.send(:prepend, MiddlemanWatcherViteDirectoryFix)

activate :directory_indexes
activate :syntax

set :markdown_engine, :kramdown
set :markdown, {
  :input => "GFM",
  :smart_quotes => ["apos", "apos", "quot", "quot"],
}

###
# Helpers
###

# Middleman is largely compatible with Padrino helpers, so use the Padrino
# helpers for `vite_*` helpers.
helpers VitePadrino::TagHelpers

# Methods defined in the helpers block are available in templates
helpers do
  # Vite's Padrino's helpers just pass `asset_path` a single path, but
  # Middleman's `asset_path` expects 2 arguments to give the type and then the
  # path. So patch for compatibility.
  def asset_path(*args)
    if args.length == 1
      super(File.extname(args.first).delete_prefix(".").to_sym, args.first)
    else
      super(*args)
    end
  end

  def breadcrumbs_trail
    page = current_page
    trail = [page]

    while(page = page.parent)
      unless(page.data.disable_in_breadcrumbs_trail)
        trail << page
      end
    end

    trail.reverse
  end
end

# Set default API key for local development.
if !ENV["DOCS_API_KEY"] || ENV["DOCS_API_KEY"].to_s.empty?
  ENV["DOCS_API_KEY"] = "Rr247zstse9kbndOttzlhKIKnS04mW7UUXIplAqd"
end

activate :alias
