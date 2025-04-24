require "vite_padrino/tag_helpers"

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page "/*.xml", layout: false
page "/*.json", layout: false
page "/*.txt", layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

page "/404.html", :directory_index => false

# General configuration

activate :external_pipeline,
  name: :vite,
  command: build? ? "bundle exec vite build --clobber" : "pnpm exec vite build --watch --mode development",
  source: "tmp/vite",
  latency: 1
activate :directory_indexes
activate :syntax

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

set :css_dir, "assets/stylesheets"
set :js_dir, "assets/javascripts"
set :fonts_dir, "assets/fonts"
set :images_dir, "assets/images"


set :markdown_engine, :kramdown
set :markdown, {
  :input => "GFM",
  :smart_quotes => ["apos", "apos", "quot", "quot"],
}

###
# Helpers
###

# Methods defined in the helpers block are available in templates
helpers VitePadrino::TagHelpers
helpers do
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

# Build-specific configuration
configure :build do
  # Enable cache buster
  # activate :asset_hash, :ignore => [
  #   # Don't cache-bust the Swagger throbber.gif, since it's a hardcoded path.
  #   %r{throbber.gif},
  # ]
end

# Set default API key for local development.
if !ENV["DOCS_API_KEY"] || ENV["DOCS_API_KEY"].to_s.empty?
  ENV["DOCS_API_KEY"] = "Rr247zstse9kbndOttzlhKIKnS04mW7UUXIplAqd"
end

activate :alias
