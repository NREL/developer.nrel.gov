var nested_input_definitions = {
  "Scenario": {
    "webtool_uuid": {
      "type": "str",
      "description": "The unique ID of a scenario created by the REopt Lite Webtool. Note that this ID can be shared by several REopt Lite API Scenarios (for example when users select a 'Resilience' analysis more than one REopt API Scenario is created)."
    },
    "description": {
      "type": "str",
      "description": "An optional user defined description to describe the scenario and run"
    },
    "timeout_seconds": {
      "default": 295,
      "max": 295,
      "type": "float",
      "description": "The number of seconds allowed before the optimization times out",
      "min": 1
    },
    "Site": {
      "Generator": {
        "pbi_years": {
          "default": 0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Duration of production-based incentives from installation date",
          "min": 0
        },
        "macrs_bonus_pct": {
          "default": 0,
          "max": 1,
          "type": "float",
          "description": "Percent of upfront project costs to depreciate under MACRS",
          "min": 0
        },
        "om_cost_us_dollars_per_kwh": {
          "default": 0.0,
          "max": 1000.0,
          "type": "float",
          "description": "diesel generator per unit production (variable) operations and maintenance costs in $/kWh",
          "min": 0
        },
        "max_kw": {
          "default": 1000000000.0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Maximum diesel generator size constraint for optimization. Set to zero to disable gen",
          "min": 0
        },
        "pbi_max_us_dollars": {
          "default": 0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Maximum rebate allowed under utility production-based incentives",
          "min": 0
        },
        "state_ibi_pct": {
          "default": 0,
          "max": 1,
          "type": "float",
          "description": "Percent of upfront project costs to discount under state investment based incentives",
          "min": 0
        },
        "fuel_intercept_gal_per_hr": {
          "default": 0,
          "max": 10,
          "type": "float",
          "description": "Generator fuel consumption curve y-intercept in gallons per hour.",
          "min": 0
        },
        "generator_only_runs_during_grid_outage": {
          "default": true,
          "type": "bool",
          "description": "If there is existing diesel generator, must specify whether it should run only during grid outage or all the time in the bau case."
        },
        "utility_rebate_max_us_dollars": {
          "default": 0,
          "max": 10000000000.0,
          "type": "float",
          "description": "Maximum rebate allowed under utility rebates",
          "min": 0
        },
        "installed_cost_us_dollars_per_kw": {
          "default": 500,
          "max": 100000.0,
          "type": "float",
          "description": "Installed diesel generator cost in $/kW",
          "min": 0
        },
        "utility_ibi_max_us_dollars": {
          "default": 0,
          "max": 10000000000.0,
          "type": "float",
          "description": "Maximum rebate allowed under utility investment based incentives",
          "min": 0
        },
        "fuel_avail_gal": {
          "default": 660,
          "max": 1000000000.0,
          "type": "float",
          "description": "On-site generator fuel available in gallons.",
          "min": 0
        },
        "min_turn_down_pct": {
          "default": 0,
          "max": 1,
          "type": "float",
          "description": "Minimum generator loading in percent of capacity (size_kw).",
          "min": 0
        },
        "pbi_system_max_kw": {
          "default": 0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Maximum system size for which production-based incentives apply",
          "min": 0
        },
        "utility_ibi_pct": {
          "default": 0,
          "max": 1,
          "type": "float",
          "description": "Percent of upfront project costs to discount under utility investment based incentives",
          "min": 0
        },
        "state_ibi_max_us_dollars": {
          "default": 0,
          "max": 10000000000.0,
          "type": "float",
          "description": "Maximum rebate allowed under state investment based incentives",
          "min": 0
        },
        "diesel_fuel_cost_us_dollars_per_gallon": {
          "default": 3,
          "max": 100.0,
          "type": "float",
          "description": "diesel cost in $/gallon",
          "min": 0
        },
        "fuel_slope_gal_per_kwh": {
          "default": 0.076,
          "max": 10,
          "type": "float",
          "description": "Generator fuel burn rate in gallons/kWh.",
          "min": 0
        },
        "state_rebate_us_dollars_per_kw": {
          "default": 0,
          "max": 1000000000.0,
          "type": "float",
          "description": "State rebates based on installed capacity",
          "min": 0
        },
        "macrs_option_years": {
          "default": 0,
          "type": "int",
          "description": "MACRS schedule for financial analysis. Set to zero to disable",
          "restrict_to": [
            0,
            5,
            7
          ]
        },
        "state_rebate_max_us_dollars": {
          "default": 0,
          "max": 10000000000.0,
          "type": "float",
          "description": "Maximum rebate allowed under state rebates",
          "min": 0
        },
        "federal_itc_pct": {
          "default": 0,
          "max": 1,
          "type": "float",
          "description": "Percent federal capital cost incentive",
          "min": 0
        },
        "pbi_us_dollars_per_kwh": {
          "default": 0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Production-based incentive value",
          "min": 0
        },
        "existing_kw": {
          "default": 0,
          "max": 100000.0,
          "type": "float",
          "description": "Existing diesel generator size",
          "min": 0
        },
        "om_cost_us_dollars_per_kw": {
          "default": 10,
          "max": 1000.0,
          "type": "float",
          "description": "Annual diesel generator fixed operations and maintenance costs in $/kW",
          "min": 0
        },
        "utility_rebate_us_dollars_per_kw": {
          "default": 0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Utility rebates based on installed capacity",
          "min": 0
        },
        "min_kw": {
          "default": 0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Minimum diesel generator size constraint for optimization",
          "min": 0
        },
        "macrs_itc_reduction": {
          "default": 0,
          "max": 1,
          "type": "float",
          "description": "Percent of the full ITC that depreciable basis is reduced by",
          "min": 0
        },
        "federal_rebate_us_dollars_per_kw": {
          "default": 0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Federal rebate based on installed capacity",
          "min": 0
        },
        "generator_sells_energy_back_to_grid": {
          "default": false,
          "type": "bool",
          "description": "If there is existing diesel generator, must specify whether it should run only during grid outage or all the time in the bau case."
        }
      },
      "LoadProfile": {
        "critical_load_pct": {
          "default": 0.5,
          "max": 1,
          "type": "float",
          "description": "Critical load factor is multiplied by the typical load to determine the critical load that must be met during an outage. Value must be between zero and one, inclusive.",
          "min": 0
        },
        "outage_start_hour": {
          "max": 8759,
          "type": "int",
          "description": "Hour of year that grid outage starts. Must be less than outage_end.",
          "min": 0
        },
        "outage_end_hour": {
          "max": 8759,
          "type": "int",
          "description": "Hour of year that grid outage ends. Must be greater than outage_start.",
          "min": 0
        },
        "monthly_totals_kwh": {
          "replacement_sets": [
            [
              "loads_kw"
            ],
            [
              "doe_reference_name",
              "monthly_totals_kwh"
            ],
            [
              "annual_kwh",
              "doe_reference_name"
            ],
            [
              "doe_reference_name"
            ]
          ],
          "type": "list_of_float",
          "description": "Array (length of 12) of total monthly energy consumption used to scale simulated building load profile.",
          "depends_on": [
            "doe_reference_name"
          ]
        },
        "year": {
          "default": 2018,
          "max": 9999,
          "type": "int",
          "description": "Year of Custom Load Profile. If a custom load profile is uploaded via the loads_kw parameter, it is important that this year correlates with the load profile so that weekdays/weekends are determined correctly for the utility rate tariff. If a DOE Reference Building profile (aka 'simulated' profile) is used, the year is set to 2017 since the DOE profiles start on a Sunday.",
          "min": 1
        },
        "loads_kw": {
          "replacement_sets": [
            [
              "loads_kw"
            ],
            [
              "doe_reference_name",
              "monthly_totals_kwh"
            ],
            [
              "annual_kwh",
              "doe_reference_name"
            ],
            [
              "doe_reference_name"
            ]
          ],
          "type": "list_of_float",
          "description": "Typical load over all hours in one year. Must be hourly (8,760 samples), 30 minute (17,520 samples), or 15 minute (35,040 samples)."
        },
        "outage_is_major_event": {
          "default": true,
          "type": "bool",
          "description": "Boolean value for if outage is a major event, which affects the avoided_outage_costs_us_dollars. If True, the avoided outage costs are calculated for a single outage occurring in the first year of the analysis_years. If False, the outage event is assumed to be an average outage event that occurs every year of the analysis period. In the latter case, the avoided outage costs for one year are escalated and discounted using the escalation_pct and offtaker_discount_pct to account for an annually recurring outage. (Average outage durations for certain utility service areas can be estimated using statistics reported on EIA form 861.)"
        },
        "critical_loads_kw_is_net": {
          "default": false,
          "type": "bool",
          "description": "If there is existing PV, must specify whether provided load is the net load after existing PV or not."
        },
        "loads_kw_is_net": {
          "default": true,
          "type": "bool",
          "description": "If there is existing PV, must specify whether provided load is the net load after existing PV or not."
        },
        "annual_kwh": {
          "type": "float",
          "description": "Annual energy consumption used to scale simulated building load profile, if <b><small>monthly_totals_kwh</b></small> is not provided.",
          "min": 1,
          "max": 1000000000000.0,
          "depends_on": [
            "doe_reference_name"
          ],
          "replacement_sets": [
            [
              "loads_kw"
            ],
            [
              "doe_reference_name",
              "monthly_totals_kwh"
            ],
            [
              "annual_kwh",
              "doe_reference_name"
            ],
            [
              "doe_reference_name"
            ]
          ]
        },
        "doe_reference_name": {
          "replacement_sets": [
            [
              "loads_kw"
            ],
            [
              "doe_reference_name",
              "monthly_totals_kwh"
            ],
            [
              "annual_kwh",
              "doe_reference_name"
            ],
            [
              "doe_reference_name"
            ]
          ],
          "type": "str",
          "description": "Simulated load profile from DOE <a href='https: //energy.gov/eere/buildings/commercial-reference-buildings' target='blank'>Commercial Reference Buildings</a>",
          "restrict_to": [
            "FastFoodRest",
            "FullServiceRest",
            "Hospital",
            "LargeHotel",
            "LargeOffice",
            "MediumOffice",
            "MidriseApartment",
            "Outpatient",
            "PrimarySchool",
            "RetailStore",
            "SecondarySchool",
            "SmallHotel",
            "SmallOffice",
            "StripMall",
            "Supermarket",
            "Warehouse",
            "FlatLoad"
          ]
        },
        "critical_loads_kw": {
          "type": "list_of_float",
          "description": "Critical load during an outage period. Must be hourly (8,760 samples), 30 minute (17,520 samples), or 15 minute (35,040 samples)."
        }
      },
      "roof_squarefeet": {
        "max": 1000000000.0,
        "type": "float",
        "description": "Area of roof in square feet available for PV siting",
        "min": 0
      },
      "Storage": {
        "total_rebate_us_dollars_per_kw": {
          "default": 0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Rebate based on installed power capacity",
          "min": 0
        },
        "max_kwh": {
          "default": 1000000,
          "type": "float",
          "description": "Maximum battery energy storage capacity constraint for optimization. Set to zero to disable Storage",
          "min": 0
        },
        "rectifier_efficiency_pct": {
          "default": 0.96,
          "max": 1,
          "type": "float",
          "description": "Battery rectifier efficiency",
          "min": 0
        },
        "total_itc_pct": {
          "default": 0.0,
          "max": 1,
          "type": "float",
          "description": "Total investment tax credit in percent applied toward capital costs",
          "min": 0
        },
        "min_kw": {
          "default": 0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Minimum battery power capacity size constraint for optimization",
          "min": 0
        },
        "max_kw": {
          "default": 1000000,
          "max": 1000000000.0,
          "type": "float",
          "description": "Maximum battery power capacity size constraint for optimization. Set to zero to disable storage",
          "min": 0
        },
        "replace_cost_us_dollars_per_kw": {
          "default": 410,
          "max": 10000.0,
          "type": "float",
          "description": "Battery power capacity replacement cost at time of replacement year",
          "min": 0
        },
        "replace_cost_us_dollars_per_kwh": {
          "default": 200,
          "max": 10000.0,
          "type": "float",
          "description": "Battery energy capacity replacement cost at time of replacement year",
          "min": 0
        },
        "min_kwh": {
          "default": 0,
          "type": "float",
          "description": "Minimum battery energy storage capacity constraint for optimization",
          "min": 0
        },
        "installed_cost_us_dollars_per_kw": {
          "default": 840,
          "max": 10000.0,
          "type": "float",
          "description": "Total upfront battery power capacity costs (e.g. inverter and balance of power systems)",
          "min": 0
        },
        "battery_replacement_year": {
          "default": 10,
          "max": 75,
          "type": "float",
          "description": "Number of years from start of analysis period to replace battery",
          "min": 0
        },
        "installed_cost_us_dollars_per_kwh": {
          "default": 420,
          "max": 10000.0,
          "type": "float",
          "description": "Total upfront battery costs",
          "min": 0
        },
        "inverter_efficiency_pct": {
          "default": 0.96,
          "max": 1,
          "type": "float",
          "description": "Battery inverter efficiency",
          "min": 0
        },
        "macrs_itc_reduction": {
          "default": 0.5,
          "max": 1,
          "type": "float",
          "description": "Percent of the ITC value by which depreciable basis is reduced",
          "min": 0
        },
        "canGridCharge": {
          "default": true,
          "type": "bool",
          "description": "Flag to set whether the battery can be charged from the grid, or just onsite generation"
        },
        "macrs_bonus_pct": {
          "default": 0,
          "max": 1,
          "type": "float",
          "description": "Percent of upfront project costs to depreciate under MACRS in year one in addtion to scheduled depreciation",
          "min": 0
        },
        "inverter_replacement_year": {
          "default": 10,
          "max": 75,
          "type": "float",
          "description": "Number of years from start of analysis period to replace inverter",
          "min": 0
        },
        "macrs_option_years": {
          "default": 7,
          "type": "int",
          "description": "Duration over which accelerated depreciation will occur. Set to zero by default",
          "restrict_to": [
            0,
            5,
            7
          ]
        },
        "internal_efficiency_pct": {
          "default": 0.975,
          "max": 1,
          "type": "float",
          "description": "Battery inherent efficiency independent of inverter and rectifier",
          "min": 0
        },
        "soc_min_pct": {
          "default": 0.2,
          "max": 1,
          "type": "float",
          "description": "Minimum allowable battery state of charge",
          "min": 0
        },
        "soc_init_pct": {
          "default": 0.5,
          "max": 1,
          "type": "float",
          "description": "Battery state of charge at first hour of optimization",
          "min": 0
        }
      },
      "land_acres": {
        "max": 1000000.0,
        "type": "float",
        "description": "Land area in acres available for PV panel siting",
        "min": 0
      },
      "address": {
        "type": "str",
        "description": "A user defined address as optional metadata (street address, city, state or zip code)"
      },
      "PV": {
        "pbi_years": {
          "default": 1,
          "max": 100,
          "type": "float",
          "description": "Duration of production-based incentives from installation date",
          "min": 0
        },
        "macrs_bonus_pct": {
          "default": 0,
          "max": 1,
          "type": "float",
          "description": "Percent of upfront project costs to depreciate in year one in addition to scheduled depreciation",
          "min": 0
        },
        "state_rebate_us_dollars_per_kw": {
          "default": 0,
          "max": 1000000000.0,
          "type": "float",
          "description": "State rebate based on installed capacity",
          "min": 0
        },
        "max_kw": {
          "default": 1000000000.0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Maximum PV size constraint for optimization. Set to zero to disable PV",
          "min": 0
        },
        "azimuth": {
          "default": 180,
          "max": 360,
          "type": "float",
          "description": "PV azimuth angle",
          "min": 0
        },
        "state_rebate_max_us_dollars": {
          "default": 10000000000.0,
          "max": 10000000000.0,
          "type": "float",
          "description": "Maximum state rebate",
          "min": 0
        },
        "gcr": {
          "default": 0.4,
          "max": 0.99,
          "type": "float",
          "description": "PV ground cover ratio (photovoltaic array area : total ground area).",
          "min": 0.01
        },
        "federal_itc_pct": {
          "default": 0.26,
          "max": 1,
          "type": "float",
          "description": "Percentage of capital costs that are credited towards federal taxes",
          "min": 0
        },
        "pbi_max_us_dollars": {
          "default": 1000000000.0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Maximum annual value of production-based incentives",
          "min": 0
        },
        "pbi_us_dollars_per_kwh": {
          "default": 0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Production-based incentive value",
          "min": 0
        },
        "module_type": {
          "default": 0,
          "type": "int",
          "description": "PV module type (0: Standard; 1: Premium; 2: Thin Film)",
          "restrict_to": [
            0,
            1,
            2
          ]
        },
        "dc_ac_ratio": {
          "default": 1.2,
          "max": 2,
          "type": "float",
          "description": "PV DC-AC ratio",
          "min": 0
        },
        "array_type": {
          "default": 1,
          "type": "int",
          "description": "PV Watts array type (0: Ground Mount Fixed (Open Rack); 1: Rooftop, Fixed; 2: Ground Mount 1-Axis Tracking; 3 : 1-Axis Backtracking; 4: Ground Mount, 2-Axis Tracking)",
          "restrict_to": [
            0,
            1,
            2,
            3,
            4
          ]
        },
        "state_ibi_pct": {
          "default": 0,
          "max": 1,
          "type": "float",
          "description": "Percentage of capital costs offset by state incentives",
          "min": 0
        },
        "utility_rebate_max_us_dollars": {
          "default": 10000000000.0,
          "max": 10000000000.0,
          "type": "float",
          "description": "Maximum utility rebate",
          "min": 0
        },
        "utility_ibi_max_us_dollars": {
          "default": 10000000000.0,
          "max": 10000000000.0,
          "type": "float",
          "description": "Maximum dollar value of utility percentage-based capital cost incentive",
          "min": 0
        },
        "installed_cost_us_dollars_per_kw": {
          "default": 1600,
          "max": 100000.0,
          "type": "float",
          "description": "Installed PV cost in $/kW",
          "min": 0
        },
        "existing_kw": {
          "default": 0,
          "max": 100000.0,
          "type": "float",
          "description": "Existing PV size",
          "min": 0
        },
        "om_cost_us_dollars_per_kw": {
          "default": 16,
          "max": 1000.0,
          "type": "float",
          "description": "Annual PV operations and maintenance costs in $/kW",
          "min": 0
        },
        "utility_rebate_us_dollars_per_kw": {
          "default": 0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Utility rebate based on installed capacity",
          "min": 0
        },
        "min_kw": {
          "default": 0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Minimum PV size constraint for optimization",
          "min": 0
        },
        "tilt": {
          "default": 0.537,
          "max": 90,
          "type": "float",
          "description": "PV system tilt",
          "min": 0
        },
        "losses": {
          "default": 0.14,
          "max": 0.99,
          "type": "float",
          "description": "PV system performance losses",
          "min": 0
        },
        "macrs_itc_reduction": {
          "default": 0.5,
          "max": 1,
          "type": "float",
          "description": "Percent of the ITC value by which depreciable basis is reduced",
          "min": 0
        },
        "degradation_pct": {
          "default": 0.005,
          "max": 1,
          "type": "float",
          "description": "Annual rate of degradation in PV energy production",
          "min": 0
        },
        "federal_rebate_us_dollars_per_kw": {
          "default": 0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Federal rebates based on installed capacity",
          "min": 0
        },
        "inv_eff": {
          "default": 0.96,
          "max": 0.995,
          "type": "float",
          "description": "PV inverter efficiency",
          "min": 0.9
        },
        "pbi_system_max_kw": {
          "default": 1000000000.0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Maximum system size eligible for production-based incentive",
          "min": 0
        },
        "macrs_option_years": {
          "default": 5,
          "type": "int",
          "description": "Duration over which accelerated depreciation will occur. Set to zero to disable",
          "restrict_to": [
            0,
            5,
            7
          ]
        },
        "radius": {
          "default": 0,
          "type": "float",
          "description": "Radius to use when searching for the closest climate data station. Use zero to use the closest station regardless of the distance",
          "min": 0
        },
        "utility_ibi_pct": {
          "default": 0,
          "max": 1,
          "type": "float",
          "description": "Percentage of capital costs offset by utility incentives",
          "min": 0
        },
        "state_ibi_max_us_dollars": {
          "default": 10000000000.0,
          "max": 10000000000.0,
          "type": "float",
          "description": "Maximum dollar value of state percentage-based capital cost incentive",
          "min": 0
        }
      },
      "Wind": {
        "pbi_years": {
          "default": 1,
          "max": 1000000000.0,
          "type": "float",
          "description": "Duration of production-based incentives from installation date",
          "min": 0
        },
        "macrs_bonus_pct": {
          "default": 0,
          "max": 1,
          "type": "float",
          "description": "Percent of upfront project costs to depreciate under MACRS",
          "min": 0
        },
        "max_kw": {
          "default": 0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Maximum wind power capacity constraint for optimization. Set to zero to disable Wind. Enabled by default",
          "min": 0
        },
        "pbi_max_us_dollars": {
          "default": 1000000000.0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Maximum rebate allowed under utility production-based incentives",
          "min": 0
        },
        "wind_meters_per_sec": {
          "type": "list_of_float",
          "description": "Data downloaded from Wind ToolKit for modeling wind turbine."
        },
        "state_ibi_pct": {
          "default": 0,
          "max": 1,
          "type": "float",
          "description": "Percent of upfront project costs to discount under state investment based incentives",
          "min": 0
        },
        "utility_rebate_max_us_dollars": {
          "default": 10000000000.0,
          "max": 10000000000.0,
          "type": "float",
          "description": "Maximum rebate allowed under utility rebates",
          "min": 0
        },
        "installed_cost_us_dollars_per_kw": {
          "default": 3013,
          "max": 100000.0,
          "type": "float",
          "description": "Total upfront installed costs in US dollars/kW. Determined by size_class. For the 'large' (>2MW) size_class the cost is $1,874/kW. For the 'medium commercial' size_class the cost is $4,111/kW. For the 'small commercial' size_class the cost is $4,989/kW and for the 'residential' size_class the cost is $10,792/kW ",
          "min": 0
        },
        "utility_ibi_max_us_dollars": {
          "default": 10000000000.0,
          "max": 10000000000.0,
          "type": "float",
          "description": "Maximum rebate allowed under utility investment based incentives",
          "min": 0
        },
        "pressure_atmospheres": {
          "type": "list_of_float",
          "description": "Data downloaded from Wind ToolKit for modeling wind turbine."
        },
        "pbi_system_max_kw": {
          "default": 1000000000.0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Maximum system size for which production-based incentives apply",
          "min": 0
        },
        "utility_ibi_pct": {
          "default": 0,
          "max": 1,
          "type": "float",
          "description": "Percent of upfront project costs to discount under utility investment based incentives",
          "min": 0
        },
        "state_ibi_max_us_dollars": {
          "default": 10000000000.0,
          "max": 10000000000.0,
          "type": "float",
          "description": "Maximum rebate allowed under state investment based incentives",
          "min": 0
        },
        "wind_direction_degrees": {
          "type": "list_of_float",
          "description": "Data downloaded from Wind ToolKit for modeling wind turbine."
        },
        "size_class": {
          "type": "str",
          "description": "Turbine size-class. One of [residential, commercial, medium, large]",
          "restrict_to": "['residential', 'commercial', 'medium', 'large']"
        },
        "state_rebate_us_dollars_per_kw": {
          "default": 0,
          "max": 1000000000.0,
          "type": "float",
          "description": "State rebates based on installed capacity",
          "min": 0
        },
        "macrs_option_years": {
          "default": 5,
          "type": "int",
          "description": "MACRS schedule for financial analysis. Set to zero to disable",
          "restrict_to": [
            0,
            5,
            7
          ]
        },
        "state_rebate_max_us_dollars": {
          "default": 10000000000.0,
          "max": 10000000000.0,
          "type": "float",
          "description": "Maximum rebate allowed under state rebates",
          "min": 0
        },
        "federal_itc_pct": {
          "default": 0.26,
          "max": 1,
          "type": "float",
          "description": "Percent federal capital cost incentive",
          "min": 0
        },
        "temperature_celsius": {
          "type": "list_of_float",
          "description": "Data downloaded from Wind ToolKit for modeling wind turbine."
        },
        "pbi_us_dollars_per_kwh": {
          "default": 0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Production-based incentive value",
          "min": 0
        },
        "om_cost_us_dollars_per_kw": {
          "default": 40,
          "max": 1000.0,
          "type": "float",
          "description": "Total annual operations and maintenance costs for wind",
          "min": 0
        },
        "utility_rebate_us_dollars_per_kw": {
          "default": 0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Utility rebates based on installed capacity",
          "min": 0
        },
        "min_kw": {
          "default": 0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Minimum wind power capacity constraint for optimization",
          "min": 0
        },
        "macrs_itc_reduction": {
          "default": 0.5,
          "max": 1,
          "type": "float",
          "description": "Percent of the full ITC that depreciable basis is reduced by",
          "min": 0
        },
        "federal_rebate_us_dollars_per_kw": {
          "default": 0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Federal rebate based on installed capacity",
          "min": 0
        }
      },
      "Financial": {
        "escalation_pct": {
          "default": 0.023,
          "max": 1,
          "type": "float",
          "description": "Annual nominal utility electricity cost escalation rate",
          "min": -1
        },
        "offtaker_discount_pct": {
          "default": 0.083,
          "max": 1,
          "type": "float",
          "description": "Nominal host discount rate",
          "min": 0
        },
        "value_of_lost_load_us_dollars_per_kwh": {
          "default": 100,
          "max": 1000000.0,
          "type": "float",
          "description": "Value placed on unmet site load during grid outages. Units are US dollars per unmet kilowatt-hour. The value of lost load (VoLL) is used to determine the avoided outage costs by multiplying VoLL [$/kWh] with the average number of hours that the critical load can be met by the energy system (determined by simulating outages occuring at every hour of the year), and multiplying by the mean critical load.",
          "min": 0
        },
        "analysis_years": {
          "default": 25,
          "max": 75,
          "type": "int",
          "description": "Analysis period",
          "min": 1
        },
        "microgrid_upgrade_cost_pct": {
          "default": 0.3,
          "max": 1,
          "type": "float",
          "description": "Additional cost, in percent of non-islandable capital costs, to make a distributed energy system islandable from the grid and able to serve critical loads. Includes all upgrade costs such as additional laber and critical load panels.",
          "min": 0
        },
        "offtaker_tax_pct": {
          "default": 0.26,
          "max": 1,
          "type": "float",
          "description": "Host tax rate",
          "min": 0
        },
        "om_cost_escalation_pct": {
          "default": 0.025,
          "max": 1,
          "type": "float",
          "description": "Annual nominal O&M cost escalation rate",
          "min": -1
        }
      },
      "longitude": {
        "max": 180,
        "required": true,
        "type": "float",
        "description": "The approximate longitude of the site in decimal degrees",
        "min": -180
      },
      "ElectricTariff": {
        "add_blended_rates_to_urdb_rate": {
          "default": false,
          "type": "bool",
          "description": "Set to 'true' to add the monthly blended energy rates and demand charges to the URDB rate schedule. Otherwise, blended rates will only be considered if a URDB rate is not provided. "
        },
        "wholesale_rate_us_dollars_per_kwh": {
          "default": 0,
          "type": [
            "float",
            "list_of_float"
          ],
          "description": "Price of electricity sold back to the grid in absence of net metering or above net metering limit. The total annual kWh that can be compensated under this rate is restricted to the total annual site-load in kWh. Can be a scalar value, which applies for all-time, or an array with time-sensitive values. If an array is input then it must have a length of 8760, 17520, or 35040. The inputed array values are up/down-sampled using mean values to match the Scenario time_steps_per_hour.",
          "min": 0
        },
        "interconnection_limit_kw": {
          "default": 100000000.0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Limit on system capacity size that can be interconnected to the grid",
          "min": 0
        },
        "wholesale_rate_above_site_load_us_dollars_per_kwh": {
          "default": 0,
          "type": [
            "float",
            "list_of_float"
          ],
          "description": "Price of electricity sold back to the grid above the site load, regardless of net metering.  Can be a scalar value, which applies for all-time, or an array with time-sensitive values. If an array is input then it must have a length of 8760, 17520, or 35040. The inputed array values are up/down-sampled using mean values to match the Scenario time_steps_per_hour.",
          "min": 0
        },
        "urdb_response": {
          "replacement_sets": [
            [
              "urdb_response"
            ],
            [
              "blended_monthly_demand_charges_us_dollars_per_kw",
              "blended_monthly_rates_us_dollars_per_kwh"
            ],
            [
              "blended_annual_demand_charges_us_dollars_per_kw",
              "blended_annual_rates_us_dollars_per_kwh"
            ],
            [
              "urdb_label"
            ],
            [
              "urdb_utility_name",
              "urdb_rate_name"
            ]
          ],
          "type": "dict",
          "description": "Utility rate structure from <a href='https: //openei.org/services/doc/rest/util_rates/?version=3' target='blank'>Utility Rate Database API</a>"
        },
        "blended_annual_demand_charges_us_dollars_per_kw": {
          "replacement_sets": [
            [
              "urdb_response"
            ],
            [
              "blended_monthly_demand_charges_us_dollars_per_kw",
              "blended_monthly_rates_us_dollars_per_kwh"
            ],
            [
              "blended_annual_demand_charges_us_dollars_per_kw",
              "blended_annual_rates_us_dollars_per_kwh"
            ],
            [
              "urdb_label"
            ],
            [
              "urdb_utility_name",
              "urdb_rate_name"
            ]
          ],
          "type": "float",
          "description": "Annual blended demand rates (annual demand charge cost in $ divided by annual peak demand in kW)",
          "depends_on": [
            "blended_annual_rates_us_dollars_per_kwh"
          ]
        },
        "blended_annual_rates_us_dollars_per_kwh": {
          "replacement_sets": [
            [
              "urdb_response"
            ],
            [
              "blended_monthly_demand_charges_us_dollars_per_kw",
              "blended_monthly_rates_us_dollars_per_kwh"
            ],
            [
              "blended_annual_demand_charges_us_dollars_per_kw",
              "blended_annual_rates_us_dollars_per_kwh"
            ],
            [
              "urdb_label"
            ],
            [
              "urdb_utility_name",
              "urdb_rate_name"
            ]
          ],
          "type": "float",
          "description": "Annual blended energy rate (total annual energy in kWh divided by annual cost in $)",
          "depends_on": [
            "blended_annual_demand_charges_us_dollars_per_kw"
          ]
        },
        "net_metering_limit_kw": {
          "default": 0,
          "max": 1000000000.0,
          "type": "float",
          "description": "System size above which net metering is not allowed",
          "min": 0
        },
        "blended_monthly_demand_charges_us_dollars_per_kw": {
          "replacement_sets": [
            [
              "urdb_response"
            ],
            [
              "blended_monthly_demand_charges_us_dollars_per_kw",
              "blended_monthly_rates_us_dollars_per_kwh"
            ],
            [
              "blended_annual_demand_charges_us_dollars_per_kw",
              "blended_annual_rates_us_dollars_per_kwh"
            ],
            [
              "urdb_label"
            ],
            [
              "urdb_utility_name",
              "urdb_rate_name"
            ]
          ],
          "type": "list_of_float",
          "description": "Array (length of 12) of blended demand charges (demand charge cost in $ divided by monthly peak demand in kW)",
          "depends_on": [
            "blended_monthly_rates_us_dollars_per_kwh"
          ]
        },
        "urdb_utility_name": {
          "replacement_sets": [
            [
              "urdb_response"
            ],
            [
              "blended_monthly_demand_charges_us_dollars_per_kw",
              "blended_monthly_rates_us_dollars_per_kwh"
            ],
            [
              "blended_annual_demand_charges_us_dollars_per_kw",
              "blended_annual_rates_us_dollars_per_kwh"
            ],
            [
              "urdb_label"
            ],
            [
              "urdb_utility_name",
              "urdb_rate_name"
            ]
          ],
          "type": "str",
          "description": "Name of Utility from  <a href='https: //openei.org/wiki/Utility_Rate_Database' target='blank'>Utility Rate Database</a>",
          "depends_on": [
            "urdb_rate_name"
          ]
        },
        "urdb_label": {
          "replacement_sets": [
            [
              "urdb_response"
            ],
            [
              "blended_monthly_demand_charges_us_dollars_per_kw",
              "blended_monthly_rates_us_dollars_per_kwh"
            ],
            [
              "blended_annual_demand_charges_us_dollars_per_kw",
              "blended_annual_rates_us_dollars_per_kwh"
            ],
            [
              "urdb_label"
            ],
            [
              "urdb_utility_name",
              "urdb_rate_name"
            ]
          ],
          "type": "str",
          "description": "Label attribute of utility rate structure from <a href='https: //openei.org/services/doc/rest/util_rates/?version=3' target='blank'>Utility Rate Database API</a>"
        },
        "urdb_rate_name": {
          "replacement_sets": [
            [
              "urdb_response"
            ],
            [
              "blended_monthly_demand_charges_us_dollars_per_kw",
              "blended_monthly_rates_us_dollars_per_kwh"
            ],
            [
              "blended_annual_demand_charges_us_dollars_per_kw",
              "blended_annual_rates_us_dollars_per_kwh"
            ],
            [
              "urdb_label"
            ],
            [
              "urdb_utility_name",
              "urdb_rate_name"
            ]
          ],
          "type": "str",
          "description": "Name of utility rate from  <a href='https: //openei.org/wiki/Utility_Rate_Database' target='blank'>Utility Rate Database</a>",
          "depends_on": [
            "urdb_utility_name"
          ]
        },
        "blended_monthly_rates_us_dollars_per_kwh": {
          "replacement_sets": [
            [
              "urdb_response"
            ],
            [
              "blended_monthly_demand_charges_us_dollars_per_kw",
              "blended_monthly_rates_us_dollars_per_kwh"
            ],
            [
              "blended_annual_demand_charges_us_dollars_per_kw",
              "blended_annual_rates_us_dollars_per_kwh"
            ],
            [
              "urdb_label"
            ],
            [
              "urdb_utility_name",
              "urdb_rate_name"
            ]
          ],
          "type": "list_of_float",
          "description": "Array (length of 12) of blended energy rates (total monthly energy in kWh divided by monthly cost in $)",
          "depends_on": [
            "blended_monthly_demand_charges_us_dollars_per_kw"
          ]
        }
      },
      "latitude": {
        "max": 90,
        "required": true,
        "type": "float",
        "description": "The approximate latitude of the site in decimal degrees",
        "min": -90
      }
    },
    "time_steps_per_hour": {
      "default": 1,
      "type": "int",
      "description": "The number of time steps per hour in the REopt simulation",
      "restrict_to": [
        1,
        2,
        4
      ]
    },
    "user_uuid": {
      "type": "str",
      "description": "The assigned unique ID of a signed in REOpt user"
    }
  }
}




var nested_output_definitions = {
  "inputs": {},
  "messages": {
    "error": {
      "type": "str",
      "description": "Error generated by simulation"
    },
    "warnings": {
      "type": "list of 'str'",
      "description": "Warnings generated by simulation"
    }
  },
  "outputs": {
    "Scenario": {
      "status": {
        "units": "none",
        "type": "str",
        "description": "Problem Status"
      },
      "Profile": {
        "reopt_bau_seconds": {
          "units": "seconds",
          "type": "float",
          "description": "Time spent solving base-case scenario"
        },
        "parse_run_outputs_seconds": {
          "units": "seconds",
          "type": "float",
          "description": "Time spent parsing outputs"
        },
        "setup_scenario_seconds": {
          "units": "seconds",
          "type": "float",
          "description": "Time spent setting up scenario"
        },
        "reopt_seconds": {
          "units": "seconds",
          "type": "float",
          "description": "Time spent solving scenario"
        },
        "pre_setup_scenario_seconds": {
          "units": "seconds",
          "type": "float",
          "description": "Time spent before setting up scenario"
        }
      },
      "run_uuid": {
        "units": "none",
        "type": "str",
        "description": "Unique id"
      },
      "Site": {
        "PV": {
          "year_one_to_load_series_kw": {
            "units": "kW",
            "type": "list of 'float'",
            "description": "Year one hourly time series of PV serving load"
          },
          "average_yearly_energy_exported_kwh": {
            "units": "kWh",
            "type": "float",
            "description": "Average annual energy exported by the PV system"
          },
          "year_one_power_production_series_kw": {
            "units": "kW",
            "type": "list of 'float'",
            "description": "Year one PV power production time series"
          },
          "station_latitude": {
            "units": "degrees",
            "type": "float",
            "description": "The latitude of the station used for weather resource data"
          },
          "existing_pv_om_cost_us_dollars": {
            "units": "$",
            "type": "float",
            "description": "Lifetime O&M cost for existing PV system."
          },
          "year_one_energy_produced_kwh": {
            "units": "kWh",
            "type": "float",
            "description": "Year one energy produced by the PV system"
          },
          "year_one_to_battery_series_kw": {
            "units": "kW",
            "type": "list of 'float'",
            "description": "Year one hourly time series of PV charging"
          },
          "year_one_to_grid_series_kw": {
            "units": "kW",
            "type": "list of 'float'",
            "description": "Year one hourly time series of PV exporting to grid"
          },
          "station_longitude": {
            "units": "degrees",
            "type": "float",
            "description": "The longitude of the station used for weather resource data"
          },
          "size_kw": {
            "units": "kW",
            "type": "float",
            "description": "Optimal PV system size"
          },
          "average_yearly_energy_produced_kwh": {
            "units": "kWh",
            "type": "float",
            "description": "Average annual energy produced by the PV system over one year"
          },
          "station_distance_km": {
            "units": "km",
            "type": "float",
            "description": "The distance from the weather resource station from the input site"
          }
        },
        "Generator": {
          "year_one_to_battery_series_kw": {
            "units": "kW",
            "type": "list of 'float'",
            "description": "Year one hourly time series of diesel generator charging"
          },
          "year_one_to_load_series_kw": {
            "units": "kW",
            "type": "list of 'float'",
            "description": "Year one generator to load time series."
          },
          "size_kw": {
            "units": "kW",
            "type": "float",
            "description": "Optimal diesel generator system size"
          },
          "year_one_energy_produced_kwh": {
            "units": "kWh",
            "type": "float",
            "description": "Year one energy produced by the diesel generator"
          },
          "fuel_used_gal": {
            "units": "US gallons",
            "type": "float",
            "description": "Generator fuel used to meet critical load during grid outage."
          },
          "average_yearly_energy_produced_kwh": {
            "units": "kWh",
            "type": "float",
            "description": "Average annual energy produced by the diesel generator over one year"
          },
          "year_one_power_production_series_kw": {
            "units": "kW",
            "type": "list of 'float'",
            "description": "Year one diesel generator power production time series"
          },
          "average_yearly_energy_exported_kwh": {
            "units": "kWh",
            "type": "float",
            "description": "Average annual energy exported by the diesel generator"
          },
          "year_one_to_grid_series_kw": {
            "units": "kW",
            "type": "list of 'float'",
            "description": "Year one hourly time series of diesel generator exporting to grid"
          },
          "existing_gen_om_cost_us_dollars": {
            "units": "$",
            "type": "float",
            "description": "Lifetime O&M cost for existing diesel generator system."
          }
        },
        "LoadProfile": {
          "critical_load_series_kw": {
            "units": "kW",
            "type": "list of 'float'",
            "description": "Hourly critical load for outage simulator. Values are either uploaded by user, or determined from typical load (either uploaded or simulated) and critical_load_pct."
          },
          "annual_calculated_kwh": {
            "units": "kWh",
            "type": "float",
            "description": "Annual energy consumption calculated by summing up 8760 load profile"
          },
          "year_one_electric_load_series_kw": {
            "units": "kW",
            "type": "list of 'float'",
            "description": "Year one hourly time series of electric load"
          }
        },
        "Storage": {
          "year_one_soc_series_pct": {
            "units": "%",
            "type": "list of 'float'",
            "description": "Year one hourly time series of battery state of charge"
          },
          "year_one_to_load_series_kw": {
            "units": "kW",
            "type": "list of 'float'",
            "description": "Year one hourly time series of battery serving load"
          },
          "size_kw": {
            "units": "kW",
            "type": "float",
            "description": "Optimal battery power capacity"
          },
          "size_kwh": {
            "units": "kWh",
            "type": "float",
            "description": "Optimal battery energy capacity"
          },
          "year_one_to_grid_series_kw": {
            "units": "kW",
            "type": "list of 'float'",
            "description": "Year one hourly time series of battery exporting to grid"
          }
        },
        "ElectricTariff": {
          "year_one_to_load_series_kw": {
            "units": "kW",
            "type": "list of 'float'",
            "description": "Year one grid to load time series"
          },
          "year_one_demand_cost_bau_us_dollars": {
            "units": "$",
            "type": "float",
            "description": "Business as usual year one utility demand cost"
          },
          "year_one_energy_cost_us_dollars": {
            "units": "$",
            "type": "float",
            "description": "Optimal year one utility energy cost"
          },
          "total_energy_cost_us_dollars": {
            "units": "$",
            "type": "float",
            "description": "Total utility energy cost over the lifecycle, after-tax"
          },
          "year_one_fixed_cost_bau_us_dollars": {
            "units": "$",
            "type": "float",
            "description": "Business as usual year one utility fixed cost"
          },
          "total_fixed_cost_us_dollars": {
            "units": "$",
            "type": "float",
            "description": "Total utility fixed cost over the lifecycle, after-tax"
          },
          "year_one_energy_cost_bau_us_dollars": {
            "units": "$",
            "type": "float",
            "description": "Business as usual year one utility energy cost"
          },
          "total_min_charge_adder_bau_us_dollars": {
            "units": "$",
            "type": "float",
            "description": "Business as usual total utility minimum charge adder"
          },
          "year_one_bill_us_dollars": {
            "units": "$",
            "type": "float",
            "description": "Optimal year one total utility bill"
          },
          "year_one_demand_cost_series_us_dollars_per_kw": {
            "units": "$/kW",
            "type": "list of 'float'",
            "description": "Year one hourly demand costs"
          },
          "year_one_demand_cost_us_dollars": {
            "units": "$",
            "type": "float",
            "description": "Optimal year one utility demand cost"
          },
          "year_one_min_charge_adder_bau_us_dollars": {
            "units": "$",
            "type": "float",
            "description": "Business as usual year one utility minimum charge adder"
          },
          "year_one_bill_bau_us_dollars": {
            "units": "$",
            "type": "float",
            "description": "Business as usual year one total utility bill"
          },
          "year_one_fixed_cost_us_dollars": {
            "units": "$",
            "type": "float",
            "description": "Optimal year one utility fixed cost"
          },
          "total_energy_cost_bau_us_dollars": {
            "units": "$",
            "type": "float",
            "description": "Business as usual total utility energy cost over the lifecycle, after-tax"
          },
          "total_demand_cost_us_dollars": {
            "units": "$",
            "type": "float",
            "description": "Optimal total lifecycle utility demand cost over the analysis period, after-tax"
          },
          "year_one_energy_cost_series_us_dollars_per_kwh": {
            "units": "$/kWh",
            "type": "list of 'float'",
            "description": "Year one hourly energy costs"
          },
          "year_one_export_benefit_us_dollars": {
            "units": "$",
            "type": "float",
            "description": "Optimal year one value of exported energy"
          },
          "total_min_charge_adder_us_dollars": {
            "units": "$",
            "type": "float",
            "description": "Total utility minimum charge adder"
          },
          "total_export_benefit_us_dollars": {
            "units": "$",
            "type": "float",
            "description": "Total export benefit cost over the lifecycle, after-tax"
          },
          "year_one_to_battery_series_kw": {
            "units": "kW",
            "type": "list of 'float'",
            "description": "Year one hourly time series of power from grid to battery"
          },
          "total_demand_cost_bau_us_dollars": {
            "units": "$",
            "type": "float",
            "description": "Business as usual total lifecycle utility demand cost over the analysis period, after-tax"
          },
          "year_one_min_charge_adder_us_dollars": {
            "units": "$",
            "type": "float",
            "description": "Optimal year one utility minimum charge adder"
          },
          "year_one_energy_supplied_kwh": {
            "units": "kWh",
            "type": "float",
            "description": "Year one hourly time series of power from grid to load"
          },
          "total_fixed_cost_bau_us_dollars": {
            "units": "$",
            "type": "float",
            "description": "Business as usual total utility fixed cost over the lifecycle, after-tax"
          }
        },
        "Financial": {
          "lcc_us_dollars": {
            "units": "dollars",
            "type": "float",
            "description": "Optimal lifecycle cost"
          },
          "net_capital_costs": {
            "units": "$",
            "type": "float",
            "description": "Capital cost for all technologies."
          },
          "lcc_bau_us_dollars": {
            "units": "dollars",
            "type": "float",
            "description": "Business as usual lifecycle cost"
          },
          "npv_us_dollars": {
            "units": "dollars",
            "type": "float",
            "description": "Net present value of savings realized by the project"
          },
          "microgrid_upgrade_cost_us_dollars": {
            "type": "float",
            "description": "Cost in US dollars to make a distributed energy system islandable from the grid. Determined by multiplying the total capital costs of resultant energy systems from REopt (such as PV and Storage system) with the input value for microgrid_upgrade_cost_pct (which defaults to 0.30)."
          },
          "avoided_outage_costs_us_dollars": {
            "units": "$",
            "type": "float",
            "description": "Avoided outage costs are determined using the Value of Lost Load [$/kWh], multiplied by the average critical load in kW (determined using critical_load_pct), the average hours that the critical load is sustained (determined by simulating outages starting at every hour of the year), and a present worth factor that accounts for cost growth with escalation_pct over the analysis_years and discounts the avoided costs to present value using offtaker_discount_pct.  Note that the use of a present worth factor presumes that the outage period and the microgrid's ability to meet the critical load is the same each year in the analysis_years. If outage_is_major_event is set to True, then the present worth factor is set to 1, which assumes that only one outage occurs in the analysis_years."
          },
          "net_capital_costs_plus_om_us_dollars": {
            "units": "$",
            "type": "float",
            "description": "Capital cost for all technologies plus present value of operations and maintenance over anlaysis period"
          }
        },
        "Wind": {
          "year_one_to_battery_series_kw": {
            "units": "kW",
            "type": "list of 'float'",
            "description": "Year one wind to battery time series"
          },
          "year_one_to_load_series_kw": {
            "units": "kW",
            "type": "list of 'float'",
            "description": "Year one wind to load time series"
          },
          "size_kw": {
            "units": "kW",
            "type": "float",
            "description": "Recommended wind system size"
          },
          "year_one_energy_produced_kwh": {
            "units": "kWh",
            "type": "float",
            "description": "Wind energy produced in year one"
          },
          "average_yearly_energy_produced_kwh": {
            "units": "kWh",
            "type": "float",
            "description": "Average energy produced by the wind system over one year"
          },
          "year_one_power_production_series_kw": {
            "units": "kW",
            "type": "list of 'float'",
            "description": "Hourly wind resource"
          },
          "average_yearly_energy_exported_kwh": {
            "units": "kWh",
            "type": "float",
            "description": "Average annual energy exported by the wind system"
          },
          "year_one_to_grid_series_kw": {
            "units": "kW",
            "type": "list of 'float'",
            "description": "Year one wind to grid time series"
          }
        }
      },
      "api_version": {
        "type": "str"
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

  if ( def.hasOwnProperty("units") ) {
    var options_string = $("<span>").html(" <br> <strong class='doc-parameters-value-field'>Units: </strong> "+def["units"])
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
    if (all_keys[i]===all_keys[i].toLowerCase()) {
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

    for (var i=0;i<def_keys.length;i++){
      attributeTableBody.append(buildAttributeTableRow( def_keys[i], definition_dictionary[def_keys[i]],tableColumns)) 
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
    
    if (key_name[0]===key_name[0].toUpperCase()){
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
  recursiveBuildReadTable(nested_output_definitions['outputs'],-1,outputDefTable)

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
