
var nested_input_definitions = {

  "Scenario": {
    "timeout_seconds": {
      "type": "float",
      "min": 1,
      "max": 295,
      "default": 295,
      "description": "The number of seconds allowed before the optimization times out"
    },
    "user_id": {
      "type": "str",
      "description": "Not currently used"
    },
    "time_steps_per_hour": {
      "type": "int",
      "min": 1,
      "max": 1,
      "default": 1,
      "description": "The number of time steps per hour in the REopt simulation"
    },

    "Site": {
      "latitude": {
        "type": "float",
        "min": -180,
        "max": 180,
        "required": true,
        "description": "The approximate latitude of the site in decimal degrees"
      },
      "longitude": {
        "type": "float",
        "min": -180,
        "max": 180,
        "required": true,
        "description": "The approximate longitude of the site in decimal degrees"
      },
      "land_acres": {
        "type": "float",
        "min": 0,
        "max": 1e6,
        "description": "Land area in acres available for PV panel siting"
      },
      "roof_squarefeet": {
        "type": "float",
        "min": 0,
        "max": 1e9,
        "description": "Area of roof in square feet available for PV siting"
      },

      "Financial": {
        "om_cost_escalation_pct": {
          "type": "float",
          "min": -1,
          "max": 1,
          "default": 0.025,
          "description": "Annual nominal O&M cost escalation rate"
        },
        "escalation_pct": {
          "type": "float",
          "min": -1,
          "max": 1,
          "default": 0.026,
          "description": "Annual nominal utility electricity cost escalation rate"
        },
        "offtaker_tax_pct": {
          "type": "float",
          "min": -1,
          "max": 1,
          "default": 0.4,
          "description": "Host tax rate"
        },
        "offtaker_discount_pct": {
          "type": "float",
          "min": -1,
          "max": 1,
          "default": 0.081,
          "description": "Nominal host discount rate"
        },
        "analysis_years": {
          "type": "int",
          "min": 0,
          "max": 75,
          "default": 20,
          "description": "Analysis period"
        }
      },

      "LoadProfile": {
        "doe_reference_name": {
          "type": "str",
          "restrict_to": ["FastFoodRest", "FullServiceRest", "Hospital", "LargeHotel", "LargeOffice", "MediumOffice", "MidriseApartment", "Outpatient", "PrimarySchool", "RetailStore", "SecondarySchool", "SmallHotel", "SmallOffice", "StripMall", "Supermarket", "Warehouse"],
          "replacement_sets": [
            ["loads_kw"],
            ["doe_reference_name", "annual_kwh"],
            ["doe_reference_name", "monthly_totals_kwh"]
          ],
          "depends_on": ["annual_kwh or monthly_totals_kwh"],
          "description": "Simulated load profile from DOE <a href='https: //energy.gov/eere/buildings/commercial-reference-buildings' target='blank'>Commercial Reference Buildings</a>"
        },
        "annual_kwh": {
          "type": "float",
          "min": 0,
          "max": 1e12,
          "replacement_sets": [
            ["loads_kw"],
            ["doe_reference_name", "monthly_totals_kwh"],
            ["annual_kwh", "doe_reference_name"]
          ],
          "depends_on": ["doe_reference_name"],
          "description": "Annual energy consumption used to scale simulated building load profile, if <b><small>monthly_totals_kwh</b></small> is not provided."
        },
        "year": {
          "type": "int",
          "min": 1,
          "max": 9999,
          "default": 2018,
          "description": "Year of Custom Load Profile. If a custom load profile is uploaded via the loads_kw parameter, it is important that this year correlates with the load profile so that weekdays/weekends are determined correctly for the utility rate tariff"
        },
        "monthly_totals_kwh": {
          "type": "list of floats",
          "replacement_sets": [
            ["loads_kw"],
            ["doe_reference_name", "monthly_totals_kwh"],
            ["annual_kwh", "doe_reference_name"]
          ],
          "depends_on": ["doe_reference_name"],
          "description": "Array (length of 12) of total monthly energy consumption used to scale simulated building load profile."
        },
        "loads_kw": {
          "type": "list of floats",
          "replacement_sets": [
            ["loads_kw"],
            ["doe_reference_name", "monthly_totals_kwh"],
            ["annual_kwh", "doe_reference_name"]
          ],
          "description": "Hourly load over all hours in one year"
        },
        "outage_start_hour": {
          "type": "int",
          "min": 0,
          "max": 8759,
          "description": "Hour of year that grid outage starts. Must be less than outage_end"
        },
        "outage_end_hour": {
          "type": "int",
          "min": 0,
          "max": 8759,
          "description": "Hour of year that grid outage ends. Must be greater than outage_start"
        },
        "critical_load_pct": {
          "type": "float",
          "min": 0,
          "max": 1,
          "default": 0.5,
          "description": "Critical load factor is multiplied by the typical load to determine the critical load that must be met during an outage. Value must be between zero and one, inclusive"
        }
      },

      "ElectricTariff": {
        "urdb_utilty_name": {
          "type": "str",
          "replacement_sets": [
            ["urdb_response"],
            ["blended_monthly_demand_charges_us_dollars_per_kw", "blended_monthly_rates_us_dollars_per_kwh"],
            ["urdb_label"],
            ["urdb_utilty_name", "urdb_rate_name"]
          ],
          "depends_on": ["urdb_rate_name"],
          "description": "Name of Utility from  <a href='https: //openei.org/wiki/Utility_Rate_Database' target='blank'>Utility Rate Database</a>"
        },
        "urdb_rate_name": {
          "type": "str",
          "replacement_sets": [
            ["urdb_response"],
            ["blended_monthly_demand_charges_us_dollars_per_kw", "blended_monthly_rates_us_dollars_per_kwh"],
            ["urdb_label"],
            ["urdb_utilty_name", "urdb_rate_name"]
          ],
          "depends_on": ["urdb_utilty_name"],
          "description": "Name of utility rate from  <a href='https: //openei.org/wiki/Utility_Rate_Database' target='blank'>Utility Rate Database</a>"
        },
        "blended_monthly_rates_us_dollars_per_kwh": {
          "type": "list of floats",
          "replacement_sets": [
            ["urdb_response"],
            ["blended_monthly_demand_charges_us_dollars_per_kw", "blended_monthly_rates_us_dollars_per_kwh"],
            ["urdb_label"],
            ["urdb_utilty_name", "urdb_rate_name"]
          ],
          "depends_on": ["blended_monthly_demand_charges_us_dollars_per_kw"],
          "description": "Array (length of 12) of blended energy rates (total monthly energy in kWh divided by monthly cost in $)"
        },
        "blended_monthly_demand_charges_us_dollars_per_kw": {
          "type": "list of floats",
          "replacement_sets": [
            ["urdb_response"],
            ["blended_monthly_demand_charges_us_dollars_per_kw", "blended_monthly_rates_us_dollars_per_kwh"],
            ["urdb_label"],
            ["urdb_utilty_name", "urdb_rate_name"]
          ],
          "depends_on": ["blended_monthly_rates_us_dollars_per_kwh"],
          "description": "Array (length of 12) of blended demand charges (demand charge cost in $ divided by monthly peak demand in kW)"
        },
        "net_metering_limit_kw": {
          "type": "float",
          "min": 0,
          "max": 1e9,
          "default": 0,
          "description": "System size above which net metering is not allowed"
        },
        "interconnection_limit_kw": {
          "type": "float",
          "min": 0,
          "max": 1e9,
          "default": 100000000,
          "description": "Limit on system capacity size that can be interconnected to the grid"
        },
        "wholesale_rate_us_dollars_per_kwh": {
          "type": "float",
          "min": 0,
          "default": 0,
          "description": "Price of electricity sold back to the grid in absence of net metering"
        },
        "urdb_response": {
          "type": "dict",
          "replacement_sets": [
            ["urdb_response"],
            ["blended_monthly_demand_charges_us_dollars_per_kw", "blended_monthly_rates_us_dollars_per_kwh"],
            ["urdb_label"],
            ["urdb_utilty_name", "urdb_rate_name"]
          ],
          "description": "Utility rate structure from <a href='https: //openei.org/services/doc/rest/util_rates/?version=3' target='blank'>Utility Rate Database API</a>"
        },
        "urdb_label": {
          "type": "str",
          "replacement_sets": [
            ["urdb_response"],
            ["blended_monthly_demand_charges_us_dollars_per_kw", "blended_monthly_rates_us_dollars_per_kwh"],
            ["urdb_label"],
            ["urdb_utilty_name", "urdb_rate_name"]
          ],
          "description": "Label attribute of utility rate structure from <a href='https: //openei.org/services/doc/rest/util_rates/?version=3' target='blank'>Utility Rate Database API</a>"
        }
      },

      "Wind": {
        "min_kw": {
          "type": "float",
          "min": 0,
          "max": 1e9,
          "default": 0,
          "description": "Minimum wind power capacity constraint for optimization"
        },
        "max_kw": {
          "type": "float",
          "min": 0,
          "max": 1e9,
          "default": 0,
          "description": "Maximum wind power capacity constraint for optimization. Set to zero to disable Wind. Disabled by default"
        },
        "installed_cost_us_dollars_per_kw": {
          "type": "float",
          "min": 0,
          "max": 1e5,
          "default": 2000,
          "description": "Total upfront installed costs"
        },
        "om_cost_us_dollars_per_kw": {
          "type": "float",
          "min": 0,
          "max": 1e3,
          "default": 35,
          "description": "Total annual operations and maintenance costs"
        },
        "macrs_option_years": {
          "type": "int",
          "restrict_to": [0, 5, 7],
          "default": 5,
          "description": "MACRS schedule for financial analysis. Set to zero to disable"
        },
        "macrs_bonus_pct": {
          "type": "float",
          "min": 0,
          "max": 1,
          "default": 0.5,
          "description": "Percent of upfront project costs to depreciate under MACRS"
        },
        "macrs_itc_reduction": {
          "type": "float",
          "min": 0,
          "max": 1,
          "default": 0.5,
          "description": "Percent of the full ITC that depreciable basis is reduced by"
        },
        "federal_itc_pct": {
          "type": "float",
          "min": 0,
          "max": 1,
          "default": 0.3,
          "description": "Percent federal capital cost incentive"
        },
        "state_ibi_pct": {
          "type": "float",
          "min": 0,
          "max": 1,
          "default": 0,
          "description": "Percent of upfront project costs to discount under state investment based incentives"
        },
        "state_ibi_max_us_dollars": {
          "type": "float",
          "min": 0,
          "max": 1e10,
          "default": 10000000000,
          "description": "Maximum rebate allowed under state investment based incentives"
        },
        "utility_ibi_pct": {
          "type": "float",
          "min": 0,
          "max": 1,
          "default": 0,
          "description": "Percent of upfront project costs to discount under utility investment based incentives"
        },
        "utility_ibi_max_us_dollars": {
          "type": "float",
          "min": 0,
          "max": 1e10,
          "default": 10000000000,
          "description": "Maximum rebate allowed under utility investment based incentives"
        },
        "federal_rebate_us_dollars_per_kw": {
          "type": "float",
          "min": 0,
          "max": 1e9,
          "default": 0,
          "description": "Federal rebate based on installed capacity"
        },
        "state_rebate_us_dollars_per_kw": {
          "type": "float",
          "min": 0,
          "max": 1e9,
          "default": 0,
          "description": "State rebates based on installed capacity"
        },
        "state_rebate_max_us_dollars": {
          "type": "float",
          "min": 0,
          "max": 1e10,
          "default": 10000000000,
          "description": "Maximum rebate allowed under state rebates"
        },
        "utility_rebate_us_dollars_per_kw": {
          "type": "float",
          "min": 0,
          "max": 1e9,
          "default": 0,
          "description": "Utility rebates based on installed capacity"
        },
        "utility_rebate_max_us_dollars": {
          "type": "float",
          "min": 0,
          "max": 1e10,
          "default": 10000000000,
          "description": "Maximum rebate allowed under utility rebates"
        },
        "pbi_us_dollars_per_kwh": {
          "type": "float",
          "min": 0,
          "max": 1e9,
          "default": 0,
          "description": "Production-based incentive value"
        },
        "pbi_max_us_dollars": {
          "type": "float",
          "min": 0,
          "max": 1e9,
          "default": 1e9,
          "description": "Maximum rebate allowed under utility production-based incentives"
        },
        "pbi_years": {
          "type": "float",
          "min": 0,
          "max": 1e9,
          "default": 1,
          "description": "Duration of production-based incentives from installation date"
        },
        "pbi_system_max_kw": {
          "type": "float",
          "min": 0,
          "max": 1e9,
          "default": 1e9,
          "description": "Maximum system size for which production-based incentives apply"
        }
      },

      "PV": {
        "min_kw": {
          "type": "float",
          "min": 0,
          "max": 1e9,
          "default": 0,
          "description": "Minimum PV size constraint for optimization"
        },
        "max_kw": {
          "type": "float",
          "min": 0,
          "max": 1e9,
          "default": 1e9,
          "description": "Maximum PV size constraint for optimization. Set to zero to disable PV"
        },
        "installed_cost_us_dollars_per_kw": {
          "type": "float",
          "min": 0,
          "max": 1e5,
          "default": 2000,
          "description": "Installed PV cost in $/kW"
        },
        "om_cost_us_dollars_per_kw": {
          "type": "float",
          "min": 0,
          "max": 1e3,
          "default": 16,
          "description": "Annual PV operations and maintenance costs in $/kW"
        },
        "macrs_option_years": {
          "type": "int",
          "restrict_to": [0, 5, 7],
          "default": 5,
          "description": "Duration over which accelerated depreciation will occur. Set to zero to disable"
        },
        "macrs_bonus_pct": {
          "type": "float",
          "min": 0,
          "max": 1,
          "default": 0.5,
          "description": "Percent of upfront project costs to depreciate in year one in addition to scheduled depreciation"
        },
        "macrs_itc_reduction": {
          "type": "float",
          "min": 0,
          "max": 1,
          "default": 0.5,
          "description": "Percent of the ITC value by which depreciable basis is reduced"
        },
        "federal_itc_pct": {
          "type": "float",
          "min": 0,
          "max": 1,
          "default": 0.3,
          "description": "Percentage of capital costs that are credited towards federal taxes"
        },
        "state_ibi_pct": {
          "type": "float",
          "min": 0,
          "max": 1,
          "default": 0,
          "description": "Percentage of capital costs offset by state incentives"
        },
        "state_ibi_max_us_dollars": {
          "type": "float",
          "min": 0,
          "max": 1e10,
          "default": 10000000000,
          "description": "Maximum dollar value of state percentage-based capital cost incentive"
        },
        "utility_ibi_pct": {
          "type": "float",
          "min": 0,
          "max": 1,
          "default": 0,
          "description": "Percentage of capital costs offset by utility incentives"
        },
        "utility_ibi_max_us_dollars": {
          "type": "float",
          "min": 0,
          "max": 1e10,
          "default": 10000000000,
          "description": "Maximum dollar value of utility percentage-based capital cost incentive"
        },
        "federal_rebate_us_dollars_per_kw": {
          "type": "float",
          "min": 0,
          "max": 1e9,
          "default": 0,
          "description": "Federal rebates based on installed capacity"
        },
        "state_rebate_us_dollars_per_kw": {
          "type": "float",
          "min": 0,
          "max": 1e9,
          "default": 0,
          "description": "State rebate based on installed capacity"
        },
        "state_rebate_max_us_dollars": {
          "type": "float",
          "min": 0,
          "max": 1e10,
          "default": 10000000000,
          "description": "Maximum state rebate"
        },
        "utility_rebate_us_dollars_per_kw": {
          "type": "float",
          "min": 0,
          "max": 1e9,
          "default": 0,
          "description": "Utility rebate based on installed capacity"
        },
        "utility_rebate_max_us_dollars": {
          "type": "float",
          "min": 0,
          "max": 1e10,
          "default": 10000000000,
          "description": "Maximum utility rebate"
        },
        "pbi_us_dollars_per_kwh": {
          "type": "float",
          "min": 0,
          "max": 1e9,
          "default": 0,
          "description": "Production-based incentive value"
        },
        "pbi_max_us_dollars": {
          "type": "float",
          "min": 0,
          "max": 1e9,
          "default": 1e9,
          "description": "Maximum annual value of production-based incentives"
        },
        "pbi_years": {
          "type": "float",
          "min": 0,
          "max": 100,
          "default": 1,
          "description": "Duration of production-based incentives from installation date"
        },
        "pbi_system_max_kw": {
          "type": "float",
          "min": 0,
          "max": 1e9,
          "default": 1e9,
          "description": "Maximum system size eligible for production-based incentive"
        },
        "degradation_pct": {
          "type": "float",
          "min": 0,
          "max": 1,
          "default": 0.005,
          "description": "Annual rate of degradation in PV energy production"
        },
        "azimuth": {
          "type": "float",
          "min": 0,
          "max": 360,
          "default": 180,
          "description": "PV azimuth angle"
        },
        "losses": {
          "type": "float",
          "min": 0,
          "max": 0.99,
          "default": 0.14,
          "description": "PV system performance losses"
        },
        "array_type": {
          "type": "int",
          "restrict_to": [0, 1, 2, 3, 4],
          "default": 0,
          "description": "PV Watts array type (0: Ground Mount Fixed (Open Rack); 1: Rooftop, Fixed; 2: Ground Mount 1-Axis Tracking; 3 : 1-Axis Backtracking; 4: Ground Mount, 2-Axis Tracking)"
        },
        "module_type": {
          "type": "int",
          "restrict_to": [0, 1, 2],
          "default": 0,
          "description": "PV module type (0: Standard; 1: Premium; 2: Thin Film)"
        },
        "gcr": {
          "type": "float",
          "min": 0.01,
          "max": 0.99,
          "default": 0.4,
          "description": "PV ground cover ratio (photovoltaic array area : total ground area)."
        },
        "dc_ac_ratio": {
          "type": "float",
          "min": 0,
          "max": 2,
          "default": 1.1,
          "description": "PV DC-AC ratio"
        },
        "inv_eff": {
          "type": "float",
          "min": 0.9,
          "max": 0.995,
          "default": 0.96,
          "description": "PV inverter efficiency"
        },
        "radius": {
          "type": "float",
          "min": 0,
          "default": 0,
          "description": "Radius to use when searching for the closest climate data station. Use zero to use the closest station regardless of the distance"
        },
        "tilt": {
          "type": "float",
          "min": 0,
          "max": 90,
          "default": "Site latitude",
          "description": "PV system tilt"
        }
      },

      "Storage":{
          "min_kw":                               {  "type": "float", "min": 0, "max": 1e9, "default": 0,
                                                      "description":"Minimum battery power capacity size constraint for optimization"  },
          "max_kw":                               {"type": "float", "min": 0, "max": 1e9, "default": 1000000,
                                                      "description":"Maximum battery power capacity size constraint for optimization. Set to zero to disable storage"  },
          "min_kwh":                              {"type": "float", "min": 0, "default": 0,
                                                      "description":"Minimum battery energy storage capacity constraint for optimization" },
          "max_kwh":                              {"type": "float", "min": 0, "default": 1000000,
                                                      "description":"Maximum battery energy storage capacity constraint for optimization. Set to zero to disable Storage" },
          "internal_efficiency_pct":              {"type": "float", "min": 0, "max": 1, "default": 0.975,
                                                      "description":"Battery inherent efficiency independent of inverter and rectifier" },
          "inverter_efficiency_pct":              {"type": "float", "min": 0, "max": 1, "default": 0.96,
                                                      "description":"Battery inverter efficiency" },
          "rectifier_efficiency_pct":             {"type": "float", "min": 0, "max": 1, "default": 0.96,
                                                      "description":"Battery rectifier efficiency" },
          "soc_min_pct":                          {"type": "float", "min": 0, "max": 1, "default": 0.2,
                                                      "description":"Minimum allowable battery state of charge" },
          "soc_init_pct":                         {"type": "float", "min": 0, "max": 1, "default": 0.5,
                                                      "description":"Battery state of charge at first hour of optimization" },
          "canGridCharge":                        {"type": "bool", "default": true,
                                                      "description":"Flag to set whether the battery can be charged from the grid, or just onsite generation" },
          "installed_cost_us_dollars_per_kw":     {"type": "float", "min": 0, "max": 1e4, "default": 1000,
                                                      "description":"Total upfront battery power capacity costs (e.g. inverter and balance of power systems)" },
          "installed_cost_us_dollars_per_kwh":    {"type": "float", "min": 0, "max": 1e4, "default": 500,
                                                      "description":"Total upfront battery costs" },
          "replace_cost_us_dollars_per_kw":       {"type": "float", "min": 0, "max": 1e4, "default": 460,
                                                      "description":"Battery power capacity replacement cost at time of replacement year" },
          "replace_cost_us_dollars_per_kwh":      {"type": "float", "min": 0, "max": 1e4, "default": 230,
                                                      "description":"Battery energy capacity replacement cost at time of replacement year" },
          "inverter_replacement_year":            {"type": "float", "min": 0, "max": 75, "default": 10,
                                                       "description":"Number of years from start of analysis period to replace inverter"  },
          "battery_replacement_year":             {"type": "float", "min": 0, "max": 75, "default": 10,
                                                      "description":"Number of years from start of analysis period to replace battery"  },
          "macrs_option_years":                   {"type": "int", "restrict_to": [0,5,7], "default": 7,
                                                      "description":"Duration over which accelerated depreciation will occur. Set to zero by default"},
          "macrs_bonus_pct":                      {"type": "float", "min": 0, "max": 1, "default": 0.5,
                                                      "description":"Percent of upfront project costs to depreciate under MACRS in year one in addtion to scheduled depreciation" },
          "macrs_itc_reduction":                  {"type": "float", "min": 0, "max": 1, "default": 0.5,
                                                      "description":"Percent of the ITC value by which depreciable basis is reduced" },
          "total_itc_pct":                        {"type": "float", "min": 0, "max": 1, "default": 0.0,
                                                      "description":"Total investment tax credit in percent applied toward capital costs" },
          "total_rebate_us_dollars_per_kw":       {"type": "float", "min": 0, "max": 1e9, "default": 0,
                                                      "description":"Rebate based on installed power capacity" }
        }
      }

    }
  }



var nested_output_definitions = {

  "Scenario": {
    "uuid": {
      "type": "str",
      "description": "Unique id",
      "units": "none"
    },
    "api_version": {
      "type": "str"
    },
    "status": {
      "type": "str",
      "description": "Problem Status",
      "units": "none"
    },

    "Site": {

      "LoadProfile": {
        "year_one_electric_load_series_kw": {
          "type": "list of floats",
          "description": "Year one hourly time series of electric load",
          "units": "kW"
        }
      },

      "Financial": {
        "lcc_us_dollars": {
          "type": "float",
          "description": "Optimal lifecycle cost",
          "units": "dollars"
        },
        "lcc_bau_us_dollars": {
          "type": "float",
          "description": "Business as usual lifecycle cost",
          "units": "dollars"
        },
        "npv_us_dollars": {
          "type": "float",
          "description": "Net present value of savings realized by the project",
          "units": "dollars"
        },
        "net_capital_costs_plus_om_us_dollars": {
          "type": "float",
          "description": "Optimal capital cost plus present value of operations and maintenance over anlaysis period",
          "units": "$"
        }
      },

      "PV": {
        "size_kw": {
          "type": "float",
          "description": "Optimal PV system size",
          "units": "kW"
        },
        "average_yearly_energy_produced_kwh": {
          "type": "float",
          "description": "Average annual energy produced by the PV system over one year",
          "units": "kWh"
        },
        "average_yearly_energy_exported_kwh": {
          "type": "float",
          "description": "Average annual energy exported by the PV system",
          "units": "kWh"
        },
        "year_one_energy_produced_kwh": {
          "type": "float",
          "description": "Year one energy produced by the PV system",
          "units": "kWh"
        },
        "year_one_power_production_series_kw": {
          "type": "list of floats",
          "description": "Year one PV power production time series",
          "units": "kW"
        },
        "year_one_to_battery_series_kw": {
          "type": "list of floats",
          "description": "Year one hourly time series of PV charging",
          "units": "kW"
        },
        "year_one_to_load_series_kw": {
          "type": "list of floats",
          "description": "Year one hourly time series of PV serving load",
          "units": "kW"
        },
        "year_one_to_grid_series_kw": {
          "type": "list of floats",
          "description": "Year one hourly time series of PV exporting to grid",
          "units": "kW"
        }
      },

      "Wind": {
        "size_kw": {
          "type": "float",
          "description": "Recommended wind system size",
          "units": "kW"
        },
        "average_yearly_energy_produced_kwh": {
          "type": "float",
          "description": "Average energy produced by the wind system over one year",
          "units": "kWh"
        },
        "average_yearly_energy_exported_kwh": {
          "type": "float",
          "description": "Average annual energy exported by the wind system",
          "units": "kWh"
        },
        "year_one_energy_produced_kwh": {
          "type": "float",
          "description": "Wind energy produced in year one",
          "units": "kWh"
        },
        "year_one_power_production_series_kw": {
          "type": "list of floats",
          "description": "Hourly wind resource",
          "units": "kW"
        },
        "year_one_to_battery_series_kw": {
          "type": "list of floats",
          "description": "Year one wind to battery time series",
          "units": "kW"
        },
        "year_one_to_load_series_kw": {
          "type": "list of floats",
          "description": "Year one wind to load time series",
          "units": "kW"
        },
        "year_one_to_grid_series_kw": {
          "type": "list of floats",
          "description": "Year one wind to grid time series",
          "units": "kW"
        }
      },

      "Storage": {
        "size_kw": {
          "type": "float",
          "description": "Optimal battery power capacity",
          "units": "kW"
        },
        "size_kwh": {
          "type": "float",
          "description": "Optimal battery energy capacity",
          "units": "kWh"
        },
        "year_one_to_load_series_kw": {
          "type": "list of floats",
          "description": "Year one hourly time series of battery serving load",
          "units": "kW"
        },
        "year_one_to_grid_series_kw": {
          "type": "list of floats",
          "description": "Year one hourly time series of battery exporting to grid",
          "units": "kW"
        },
        "year_one_soc_series_pct": {
          "type": "list of floats",
          "description": "Year one hourly time series of battery state of charge",
          "units": "%"
        }
      },

      "ElectricTariff": {
        "year_one_energy_cost_us_dollars": {
          "type": "float",
          "description": "Optimal year one utility energy cost",
          "units": "$"
        },
        "year_one_demand_cost_us_dollars": {
          "type": "float",
          "description": "Optimal year one utility demand cost",
          "units": "$"
        },
        "year_one_fixed_cost_us_dollars": {
          "type": "float",
          "description": "Optimal year one utility fixed cost",
          "units": "$"
        },
        "year_one_min_charge_adder_us_dollars": {
          "type": "float",
          "description": "Optimal year one utility minimum charge adder",
          "units": "$"
        },
        "year_one_energy_cost_bau_us_dollars": {
          "type": "float",
          "description": "Business as usual year one utility energy cost",
          "units": "$"
        },
        "year_one_demand_cost_bau_us_dollars": {
          "type": "float",
          "description": "Business as usual year one utility demand cost",
          "units": "$"
        },
        "year_one_fixed_cost_bau_us_dollars": {
          "type": "float",
          "description": "Business as usual year one utility fixed cost",
          "units": "$"
        },
        "year_one_min_charge_adder_bau_us_dollars": {
          "type": "float",
          "description": "Business as usual year one utility minimum charge adder",
          "units": "$"
        },
        "total_energy_cost_us_dollars": {
          "type": "float",
          "description": "Total utility energy cost over the lifecycle, after-tax",
          "units": "$"
        },
        "total_demand_cost_us_dollars": {
          "type": "float",
          "description": "Optimal total lifecycle utility demand cost over the analysis period, after-tax",
          "units": "$"
        },
        "total_fixed_cost_us_dollars": {
          "type": "float",
          "description": "Total utility fixed cost over the lifecycle, after-tax",
          "units": "$"
        },
        "total_min_charge_adder_us_dollars": {
          "type": "float",
          "description": "Total utility minimum charge adder",
          "units": "$"
        },
        "total_energy_cost_bau_us_dollars": {
          "type": "float",
          "description": "Business as usual total utility energy cost over the lifecycle, after-tax",
          "units": "$"
        },
        "total_demand_cost_bau_us_dollars": {
          "type": "float",
          "description": "Business as usual total lifecycle utility demand cost over the analysis period, after-tax",
          "units": "$"
        },
        "total_fixed_cost_bau_us_dollars": {
          "type": "float",
          "description": "Business as usual total utility fixed cost over the lifecycle, after-tax",
          "units": "$"
        },
        "total_min_charge_adder_bau_us_dollars": {
          "type": "float",
          "description": "Business as usual total utility minimum charge adder",
          "units": "$"
        },
        "year_one_bill_us_dollars": {
          "type": "float",
          "description": "Optimal year one total utility bill",
          "units": "$"
        },
        "year_one_bill_bau_us_dollars": {
          "type": "float",
          "description": "Business as usual year one total utility bill",
          "units": "$"
        },
        "year_one_export_benefit_us_dollars": {
          "type": "float",
          "description": "Optimal year one value of exported energy",
          "units": "$"
        },
        "year_one_energy_cost_series_us_dollars_per_kwh": {
          "type": "list of floats",
          "description": "Year one hourly energy costs",
          "units": "$/kWh"
        },
        "year_one_demand_cost_series_us_dollars_per_kw": {
          "type": "list of floats",
          "description": "Year one hourly demand costs",
          "units": "$/kW"
        },
        "year_one_to_load_series_kw": {
          "type": "list of floats",
          "description": "Year one grid to load time series",
          "units": "kW"
        },
        "year_one_to_battery_series_kw": {
          "type": "list of floats",
          "description": "Year one hourly time series of power from grid to battery",
          "units": "kW"
        },
        "year_one_energy_supplied_kwh": {
          "type": "float",
          "description": "Year one hourly time series of power from grid to load",
          "units": "kWh"
        }
      }
    }
  }
}


var tableParameterCell = function(name) {
  return $("<td>").append($("<small>").html($('<b>').html(name)))
}

var tableRequiredCell = function(def) {
  var text

  if ( def.hasOwnProperty("required") ) {
    if ( Boolean(def["required"]) ){
      text="Yes"
    }

  } else if (def.hasOwnProperty("depends_on") || def.hasOwnProperty("replacement_sets")) {
      text="Depends"
  } else {
      text = "No"
  }
  return $("<td>").append($("<em>").html(text))
}

var tableValueCell = function(def) {
  var output = $("<small>")
  if ( def.hasOwnProperty("type") ) {
    var type_string = $("<span>").html(" <strong class='doc-parameters-value-field'>Type: </strong>"+def["type"])
    output.append(type_string).append($('<br>'))
  }

  if ( def.hasOwnProperty("min") ) {
    var min_string = $("<span>").html("  <strong class='doc-parameters-value-field'>Min Value: </strong>"+def["min"])
    output.append(min_string)
  }
  
  if ( def.hasOwnProperty("max") ) {
    var max_string = $("<span>").html(" <br> <strong class='doc-parameters-value-field'>Max Value: </strong>"+def["max"])
    output.append(max_string)
  }

  if ( def.hasOwnProperty("default") ) {
    var default_string = $("<span>").html(" <br> <strong class='doc-parameters-value-field'>Default: </strong>"+def["default"])
    output.append(default_string)
  }

  if ( def.hasOwnProperty("restrict_to") ) {
    var options_string = $("<span>").html(" <br> <strong class='doc-parameters-value-field'>Options: </strong> <em>"+def["restrict_to"].join(', ')+"</em>")
    output.append(options_string)
  }


  return $("<td>").append($('<div>').append(output))
}

var replacementSetList = function(list, name) {

  var output = $('<ul>')
  for (var i=0;i<list.length;i++){
    if (list[i].indexOf(name) < 0){
      output.append($('<li class="text-wrap">').html( '<b><small>' + list[i].join('</b></small> and <b><small>') + '</small></b>' ))
    }
  }
  
  return output.html()
}


var tableDescriptionCell = function(name, def) {
  var text
  if ( def.hasOwnProperty("description") ) {
      text=def['description']
  } else {
    text = ""
  }

  if ( def.hasOwnProperty("depends_on") ) {
    text = text + "<br><br><p>Requires a valid entry for <b><small>" + def['depends_on'] + "</small></b> as well.</p>"  
  }

  if ( def.hasOwnProperty("replacement_sets") ) {
    if (!def.hasOwnProperty("depends_on")){
      text = text + "<br><br>"
    }
    text = text + "<p>Can be replaced by one of the following attribute sets: " + replacementSetList(def['replacement_sets'],name )
  }

  return $("<td  style='word-wrap: break-word;'>").append($("<span>").html(text))
}


var buildAttributeTableRow = function(name, def,tableColumns){
  var row = $("<tr>")
  
  for (var i=0;i<tableColumns.length;i++){
    if (tableColumns[i]==='Parameter') {
      row.append(tableParameterCell(name))
    }
    else if (tableColumns[i]==='Required') {
      row.append(tableRequiredCell(def))
    }
    else if (tableColumns[i]==='Value') {
      row.append(tableValueCell(def))
    }
    else if (tableColumns[i]==='Description') {
      row.append(tableDescriptionCell(name, def))
    }
    else {
      row.append($('<td>'))
      alert('No cell template for ' + tableColumns[i])
    }
  }

  return row
}

var buildAttributeTableHeader = function(head, columns){
  for (var i=0;i<columns.length;i++){
      var width
      if (columns[i]==='Value'){
        width = '4%'
      } else if (columns[i]==='Description'){
        width ='8%'
      } else {
        width = '1%'
      }

      var columnName = $("<th width='"+width+"'>").html(columns[i])
      head.append(columnName)
    }
    return head
}


var sortAttributeTableRows = function (def){
  var all_keys = Object.keys(def) 
  var req_keys = []
  var dep_keys = []
  var other_keys = []

  for (var i=0;i<all_keys.length;i++){
    var req = false
    
    if ( def[all_keys[i]].hasOwnProperty("required") ) {
      if (Boolean(def[all_keys[i]]['required'])){
        req_keys.push(all_keys[i])
        req = true
      }
    }

    if ( def[all_keys[i]].hasOwnProperty("depends_on") || def[all_keys[i]].hasOwnProperty("replacement_sets") ) {
        dep_keys.push(all_keys[i])
        req = true      
    }
    
    if (req===false){
      other_keys.push(all_keys[i])
    }
  }
  return req_keys.sort().concat(dep_keys.sort()).concat(other_keys.sort())
}

var buildAttributeTable = function(definition_dictionary, table_name) {
  var attributeTable 
  var keys = Object.keys(definition_dictionary)
  var attributes  = []
  
  for (i=0;i<keys.length; i++ ){
   
    if (keys[i][0]===keys[i][0].toLowerCase()) {
      attributes.push(keys[i])
    }
  }


  if (attributes.length == 0  ){
    attributeTable = $('<div>').html('This directory has no attributes<br><br>')
  } else {
    var def_keys = sortAttributeTableRows(definition_dictionary)
    var attributeTableHead = $("<thead>")
    var attributeTableBody = $("<tbody>")
    attributeTable = $('<table>').prop({'class':'table table-striped row doc-parameters'})
    
    if (table_name=='inputs') {
      var tableColumns = ["Parameter","Required","Value","Description"]
    } else {
      var tableColumns = ["Parameter","Value","Description"]
    }
    
    attributeTableHead = buildAttributeTableHeader(attributeTableHead,tableColumns)
    attributeTable = attributeTable.append(attributeTableHead)

    for (var i=0;i<attributes.length;i++){
      attributeTableBody.append(buildAttributeTableRow( attributes[i], definition_dictionary[attributes[i]],tableColumns)) 
    }

    attributeTable = attributeTable.append(attributeTableBody)
  }

  return attributeTable
}

var subDirectoriesCell = function (definition_dictionary,table_name){
  var def_keys = Object.keys(definition_dictionary)
  var subdirectories = []
  for (var i=0;i<def_keys.length;i++){
    if (def_keys[i][0]===def_keys[i][0].toUpperCase()){
      subdirectories.push($('<button type="button" data-target="#'+def_keys[i]+table_name+'_panel" class="btn btn-primary btn-sml scroll_button">').html(def_keys[i]).prop('outerHTML'))
    }
  }
  if (subdirectories.length>0){
     return subdirectories.join(' ')
       
  } else {
    return 'None'
  }
}

var objectHeaderRow = function(table_name, key_name){
  var output = $('<div class="panel-heading" role="tab">')
  output.append($('<h5 class="panel-title">').html(
    $('<a data-toggle="collapse" data-parent="'+key_name+'Row" href="#'+key_name+'_collapsecontainer" aria-expanded="true" aria-controls="'+key_name+table_name+'_collapsecontainer">').html(key_name))
  )
  return output
}


var buildObjectRow = function(table_name, key_name, definition_dictionary, indent) {
  output = $('<div class="row">')
  output_col = $('<div class="col col-xs-offset-'+indent.toString()+' col-xs-'+(12-indent).toString()+'">')
  
  var object_panel = $('<div class="panel panel-default" role="tablist" id="'+key_name+table_name+'_panel">')

  var objectTableNameRow = objectHeaderRow(table_name,key_name)
  object_panel.append(objectTableNameRow)

  var collapse_container = $('<div id="'+key_name+table_name+'_collapsecontainer" class="panel-collapse collapse in panel-body" role="tabpanel" aria-labelledby="'+key_name+'_collapsebutton">')
  
  var objectSubTableAttributeRow = $('<div class="row">')
  var attributeRowName = $('<div class="col col-xs-12">').html('<b><span class="text-secondary">Attributes</span></b><br><br>')
  objectSubTableAttributeRow.append(attributeRowName)
  collapse_container.append(objectSubTableAttributeRow)
  
  var attributeTable = buildAttributeTable(definition_dictionary,table_name)
  var attributeRowSpacer = $('<div class="col col-xs-1 ">').attr('style','width:3%')
  var attributeRowContent = $('<div class="col col-xs-offset-0.5 col-xs-11">').html(attributeTable)
  objectSubTableAttributeRow.append(attributeRowSpacer)
  objectSubTableAttributeRow.append(attributeRowContent)
  collapse_container.append(objectSubTableAttributeRow)


  var objectSubTableSubdirectoryRow = $('<div class="row">')
  var attributeRowName = $('<div class="col col-xs-12">').html('<b><span class="text-secondary">Sub Directories</span></b><br><br>')
  objectSubTableSubdirectoryRow.append(attributeRowName)
  
  var subdirectoryRowContent= $('<div class="col col-xs-offset-1 col-xs-10">').html(subDirectoriesCell(definition_dictionary,table_name))
  objectSubTableSubdirectoryRow.append(subdirectoryRowContent)
  collapse_container.append(objectSubTableSubdirectoryRow)

  object_panel.append(collapse_container)
  
  object_panel.append($('<div class="row">').html("<br>"))

  output.append(output_col.html(object_panel))
  return output
}


var recursiveBuildReadTable = function(input_definitions, indent, table){

  var indent_adder = 1

  if (indent < 0) {
    indent_adder = 0    
  }

  var defKeys = Object.keys(input_definitions)
  var subdirectories = []
    
  for (var i=0;i<defKeys.length;i++){

    var key_name = defKeys[i]
    
    if (key_name[0]===key_name[0].toUpperCase() && key_name!= 'Wind' ){
      subdirectories.push(key_name)
    }
  }
  subdirectories = subdirectories.sort()

  for (var i=0;i<subdirectories.length;i++){
      var key_name = subdirectories[i]
      var next_object_defintion = input_definitions[key_name]
      var table_name =  table.attr('id')
      table.append(buildObjectRow(table_name, key_name, next_object_defintion, indent))
      recursiveBuildReadTable(next_object_defintion,indent+indent_adder,table)   
  }
}

$(document).ready(function() {

  var inputDefTable = $('<div id ="inputs" class="container">')
  var outputDefTable = $('<div id ="ouputs" class="container">')
  
  recursiveBuildReadTable(nested_input_definitions,-1,inputDefTable)
  recursiveBuildReadTable(nested_output_definitions,-1,outputDefTable)
  
  $('#input_definition_table').html(inputDefTable.prop('outerHTML'))
  $('#output_definition_table').html(outputDefTable.prop('outerHTML'))

  $('#toc li a').on('click', function(event){
             
            event.preventDefault();
            
            $('html, body').stop().animate({
                   scrollTop: $($(this).attr('href')).offset().top
                },1000);
          })
       

  $('.scroll_button').on('click', function(event) {

         var target = $(this.getAttribute('href'));
         
         target = $(this.getAttribute('data-target'));
          
         if( target.length ) {
               event.preventDefault();
               $('html, body').stop().animate({
                   scrollTop: target.offset().top
               },1000);
           }
         });
   })