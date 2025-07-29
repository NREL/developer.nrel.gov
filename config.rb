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

  def alt_fuel_stations_access_details
    @_access_details ||= make_request("access-details")
  end

  def alt_fuel_stations_access_types
    @_access_types ||= loader.fetch("access_types")
  end

  def alt_fuel_stations_cng_fill_types
    @_cng_fill_types ||= loader.fetch("cng_fill_types_by_country").fetch("all")
  end

  def alt_fuel_stations_cng_psis
    @_cng_psis ||= loader.fetch("cng_psis_by_country").fetch("all")
  end

  def alt_fuel_stations_cng_vehicle_classes
    @_cng_vehicle_classes ||= loader.fetch("vehicle_class_options")
  end

  def alt_fuel_stations_countries
    @_countries = loader.fetch("countries")
  end

  def alt_fuel_stations_electric_connectors
    @_electric_connectors ||= loader.fetch("electric_connectors_by_country").fetch("all")
  end

  def alt_fuel_stations_electric_levels
    @_electric_levels ||= loader.fetch("electric_levels_by_country").fetch("all")
  end

  def alt_fuel_stations_ethanol_blends
    @_ethanol_blends ||= loader.fetch("ethanol_blends")
  end

  def alt_fuel_stations_ev_networks
    @_ev_networks ||= loader.fetch("electric_networks_by_country").fetch("all")
  end

  def alt_fuel_stations_facility_types
    @_facility_types ||= make_request("facility-types")
  end

  def alt_fuel_stations_federal_agencies
    @_federal_agencies ||= loader.fetch("federal_agencies")
  end

  def alt_fuel_stations_fuels
    @_fuels ||= loader.fetch("fuels")
  end

  def alt_fuel_stations_funding_sources
    @_funding_sources ||= loader.fetch("funding_sources")
  end

  def alt_fuel_stations_geocode_statuses
    @_geocode_statuses ||= make_request("geocode-statuses")
  end

  def alt_fuel_stations_hy_pressures
    @_hy_pressures ||= loader.fetch("hy_pressure")
  end

  def alt_fuel_stations_hy_standards
    @_hy_standards ||= loader.fetch("hy_standards")
  end

  def lng_vehicle_classes
    @_lng_vehicle_classes ||= loader.fetch("vehicle_class_options")
  end

  def alt_fuel_stations_lpg_nozzle_types
    @_lpg_nozzle_types ||= loader.fetch("lpg_nozzle_types")
  end

  def alt_fuel_stations_owner_types
    @_owner_types ||= loader.fetch("owner_types_by_country").fetch("all")
  end

  def alt_fuel_stations_payment_methods
    @_payment_methods ||= loader.fetch("payment_methods_by_country").fetch("all")
  end

  def alt_fuel_stations_renewable_sources
    @_renewable_sources ||= loader.fetch("renewable_sources")
  end

  def alt_fuel_stations_status_types
    @_status_types ||= loader.fetch("status_types")
  end

  def vehicle_classes
    @_vehicle_classes ||= loader.fetch("vehicle_class_options")
  end

  private

  def loader
    @_loader ||= make_request("locator/loader")
  end

  def make_request(path, params = {country: "all", api_key: ENV["DOCS_API_KEY"]})
    MultiJson.load(RestClient.get("https://developer.nrel.gov/api/alt-fuel-stations/v1/#{path}.json", params: params))
  end
end

# Set default API key for local development.
if !ENV["DOCS_API_KEY"] || ENV["DOCS_API_KEY"].to_s.empty?
  ENV["DOCS_API_KEY"] = "Rr247zstse9kbndOttzlhKIKnS04mW7UUXIplAqd"
end

activate :alias
