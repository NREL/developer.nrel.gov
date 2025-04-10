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
  name: :webpack,
  command: build? ? "pnpm run build" : "pnpm run start",
  source: "tmp/webpack-dist",
  latency: 1
activate :directory_indexes
activate :syntax

set :css_dir, "assets/stylesheets"
set :js_dir, "assets/javascripts"
set :fonts_dir, "assets/fonts"
set :images_dir, "assets/images"

set :markdown_engine, :kramdown
set :markdown, {
  :input => "GFM",
  :smart_quotes => ["apos", "apos", "quot", "quot"],
}

# Reload the browser automatically whenever files change
configure :development do
  if(ENV["MIDDLEMAN_LIVERELOAD_PORT"] && ENV["MIDDLEMAN_LIVERELOAD_JS_HOST"])
    activate :livereload, :port => ENV["MIDDLEMAN_LIVERELOAD_PORT"], :js_host => ENV["MIDDLEMAN_LIVERELOAD_JS_HOST"]
  else
    activate :livereload
  end
end

###
# Helpers
###

# Methods defined in the helpers block are available in templates
helpers do
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

  def access_details
    @_access_details ||= make_request("access-details")
  end

  def cng_fill_types
    @_cng_fill_types ||= make_request("cng-fill-types")
  end

  def cng_psis
    @_cng_psis ||= make_request("cng-psis")
  end

  def cng_vehicle_classes
    @_cng_vehicle_classes ||= make_request("cng-vehicle-classes")
  end

  def electric_connectors
    @_electric_connectors ||= make_request("electric-connectors")
  end

  def electric_levels
    @_electric_levels ||= make_request("electric-levels")
  end

  def ethanol_blends
    @_ethanol_blends ||= make_request("ethanol-blends")
  end

  def ev_networks
    @_ev_networks ||= make_request("electric-networks")
  end

  def facility_types
    @_facility_types ||= make_request("facility-types")
  end

  def federal_agencies
    @_federal_agencies ||= make_request("federal-agencies")
  end

  def fuels
    @_fuels ||= make_request("fuels")
  end

  def geocode_statuses
    @_geocode_statuses ||= make_request("geocode-statuses")
  end

  def hy_pressures
    @_hy_pressures ||= make_request("hy-pressures")
  end

  def hy_standards
    @_hy_standards ||= make_request("hy-standards")
  end

  def lng_vehicle_classes
    @_lng_vehicle_classes ||= make_request("lng-vehicle-classes")
  end

  def loader
    @_loader ||= make_request("locator/loader")
  end

  def lpg_nozzle_types
    @_lpg_nozzle_types ||= make_request("lpg-nozzle-types")
  end

  def owner_types
    @_owner_types ||= make_request("owner-types")
  end

  def payment_methods
    @_payment_methods ||= make_request("payment-methods")
  end

  def renewable_sources
    @_renewable_sources ||= make_request("renewable-sources")
  end

  def vehicle_classes
    # NOTE: CHANGE THIS TO NON-CNG ENDPOINT ONCE PR 484 IS DEPLOYED TO PRODUCTION
    @_vehicle_classes ||= make_request("cng-vehicle-classes")
  end

  private

  def make_request(path, params = {country: "all", api_key: ENV["DOCS_API_KEY"]})
    MultiJson.load(RestClient.get("https://developer.nrel.gov/api/alt-fuel-stations/v1/#{path}.json", params: params))
  end
end

# Build-specific configuration
configure :build do
  # Minify CSS on build
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  activate :asset_hash, :ignore => [
    # Don't cache-bust the Swagger throbber.gif, since it's a hardcoded path.
    %r{throbber.gif},
  ]
end

# Set default API key for local development.
if !ENV["DOCS_API_KEY"] || ENV["DOCS_API_KEY"].to_s.empty?
  ENV["DOCS_API_KEY"] = "Rr247zstse9kbndOttzlhKIKnS04mW7UUXIplAqd"
end

activate :alias
