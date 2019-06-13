var nested_input_definitions = {
  "Scenario": {
    "Site": {
      "ElectricTariff": {
        "add_blended_rates_to_urdb_rate": {
          "default": false,
          "description": "Set to 'true' to add the monthly blended energy rates and demand charges to the URDB rate schedule. Otherwise, blended rates will only be considered if a URDB rate is not provided. ",
          "type": "bool"
        },
        "blended_annual_demand_charges_us_dollars_per_kw": {
          "depends_on": [
            "blended_annual_rates_us_dollars_per_kwh"
          ],
          "description": "Annual blended demand rates (annual demand charge cost in $ divided by annual peak demand in kW)",
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
          "type": "float"
        },
        "blended_annual_rates_us_dollars_per_kwh": {
          "depends_on": [
            "blended_annual_demand_charges_us_dollars_per_kw"
          ],
          "description": "Annual blended energy rate (total annual energy in kWh divided by annual cost in $)",
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
          "type": "float"
        },
        "blended_monthly_demand_charges_us_dollars_per_kw": {
          "depends_on": [
            "blended_monthly_rates_us_dollars_per_kwh"
          ],
          "description": "Array (length of 12) of blended demand charges (demand charge cost in $ divided by monthly peak demand in kW)",
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
          "type": "list_of_float"
        },
        "blended_monthly_rates_us_dollars_per_kwh": {
          "depends_on": [
            "blended_monthly_demand_charges_us_dollars_per_kw"
          ],
          "description": "Array (length of 12) of blended energy rates (total monthly energy in kWh divided by monthly cost in $)",
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
          "type": "list_of_float"
        },
        "interconnection_limit_kw": {
          "default": 100000000.0,
          "description": "Limit on system capacity size that can be interconnected to the grid",
          "max": 1000000000.0,
          "min": 0,
          "type": "float"
        },
        "net_metering_limit_kw": {
          "default": 0,
          "description": "System size above which net metering is not allowed",
          "max": 1000000000.0,
          "min": 0,
          "type": "float"
        },
        "urdb_label": {
          "description": "Label attribute of utility rate structure from <a href='https: //openei.org/services/doc/rest/util_rates/?version=3' target='blank'>Utility Rate Database API</a>",
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
          "type": "str"
        },
        "urdb_rate_name": {
          "depends_on": [
            "urdb_utility_name"
          ],
          "description": "Name of utility rate from  <a href='https: //openei.org/wiki/Utility_Rate_Database' target='blank'>Utility Rate Database</a>",
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
          "type": "str"
        },
        "urdb_response": {
          "description": "Utility rate structure from <a href='https: //openei.org/services/doc/rest/util_rates/?version=3' target='blank'>Utility Rate Database API</a>",
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
          "type": "dict"
        },
        "urdb_utility_name": {
          "depends_on": [
            "urdb_rate_name"
          ],
          "description": "Name of Utility from  <a href='https: //openei.org/wiki/Utility_Rate_Database' target='blank'>Utility Rate Database</a>",
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
          "type": "str"
        },
        "wholesale_rate_above_site_load_us_dollars_per_kwh": {
          "default": 0,
          "description": "Price of electricity sold back to the grid above the site load, regardless of net metering",
          "min": 0,
          "type": "float"
        },
        "wholesale_rate_us_dollars_per_kwh": {
          "default": 0,
          "description": "Price of electricity sold back to the grid in absence of net metering or above net metering limit, restricted to total site load",
          "min": 0,
          "type": "float"
        }
      },
      "Financial": {
        "analysis_years": {
          "default": 20,
          "description": "Analysis period",
          "max": 75,
          "min": 1,
          "type": "int"
        },
        "escalation_pct": {
          "default": 0.026,
          "description": "Annual nominal utility electricity cost escalation rate",
          "max": 1,
          "min": -1,
          "type": "float"
        },
        "microgrid_upgrade_cost_pct": {
          "default": 0.3,
          "description": "Additional cost, in percent of non-islandable capital costs, to make a distributed energy system islandable from the grid and able to serve critical loads. Includes all upgrade costs such as additional laber and critical load panels.",
          "max": 1,
          "min": 0,
          "type": "float"
        },
        "offtaker_discount_pct": {
          "default": 0.081,
          "description": "Nominal host discount rate",
          "max": 1,
          "min": 0,
          "type": "float"
        },
        "offtaker_tax_pct": {
          "default": 0.26,
          "description": "Host tax rate",
          "max": 1,
          "min": 0,
          "type": "float"
        },
        "om_cost_escalation_pct": {
          "default": 0.025,
          "description": "Annual nominal O&M cost escalation rate",
          "max": 1,
          "min": -1,
          "type": "float"
        },
        "value_of_lost_load_us_dollars_per_kwh": {
          "default": 100,
          "description": "Value placed on unmet site load during grid outages. Units are US dollars per unmet kilowatt-hour. The value of lost load (VoLL) is used to determine the avoided outage costs by multiplying VoLL [$/kWh] with the average number of hours that the critical load can be met by the energy system (determined by simulating outages occuring at every hour of the year), and multiplying by the mean critical load.",
          "max": 1000000.0,
          "min": 0,
          "type": "float"
        }
      },
      "Generator": {
        "diesel_fuel_cost_us_dollars_per_gallon": {
          "default": 20,
          "description": "diesel cost in $/gallon",
          "max": 100.0,
          "min": 0,
          "type": "float"
        },
        "existing_kw": {
          "default": 0,
          "description": "Existing diesel generator size",
          "max": 100000.0,
          "min": 0,
          "type": "float"
        },
        "federal_itc_pct": {
          "default": 0,
          "description": "Percent federal capital cost incentive",
          "max": 1,
          "min": 0,
          "type": "float"
        },
        "federal_rebate_us_dollars_per_kw": {
          "default": 0,
          "description": "Federal rebate based on installed capacity",
          "max": 1000000000.0,
          "min": 0,
          "type": "float"
        },
        "fuel_avail_gal": {
          "default": 0,
          "description": "On-site generator fuel available in gallons.",
          "max": 1000000000.0,
          "min": 0,
          "type": "float"
        },
        "fuel_intercept_gal_per_hr": {
          "default": 0,
          "description": "Generator fuel consumption curve y-intercept in gallons per hour.",
          "max": 10,
          "min": 0,
          "type": "float"
        },
        "fuel_slope_gal_per_kwh": {
          "default": 0,
          "description": "Generator fuel burn rate in gallons/kWh.",
          "max": 10,
          "min": 0,
          "type": "float"
        },
        "generator_only_runs_during_grid_outage": {
          "default": true,
          "description": "If there is existing diesel generator, must specify whether it should run only during grid outage or all the time in the bau case.",
          "type": "bool"
        },
        "generator_sells_energy_back_to_grid": {
          "default": false,
          "description": "If there is existing diesel generator, must specify whether it should run only during grid outage or all the time in the bau case.",
          "type": "bool"
        },
        "installed_cost_us_dollars_per_kw": {
          "default": 2500,
          "description": "Installed diesel generator cost in $/kW",
          "max": 100000.0,
          "min": 0,
          "type": "float"
        },
        "macrs_bonus_pct": {
          "default": 0,
          "description": "Percent of upfront project costs to depreciate under MACRS",
          "max": 1,
          "min": 0,
          "type": "float"
        },
        "macrs_itc_reduction": {
          "default": 0,
          "description": "Percent of the full ITC that depreciable basis is reduced by",
          "max": 1,
          "min": 0,
          "type": "float"
        },
        "macrs_option_years": {
          "default": 0,
          "description": "MACRS schedule for financial analysis. Set to zero to disable",
          "restrict_to": [
            0,
            5,
            7
          ],
          "type": "int"
        },
        "max_kw": {
          "default": 1000000000.0,
          "description": "Maximum diesel generator size constraint for optimization. Set to zero to disable gen",
          "max": 1000000000.0,
          "min": 0,
          "type": "float"
        },
        "min_kw": {
          "default": 0,
          "description": "Minimum diesel generator size constraint for optimization",
          "max": 1000000000.0,
          "min": 0,
          "type": "float"
        },
        "min_turn_down_pct": {
          "default": 0.3,
          "description": "Minimum generator loading in percent of capacity (size_kw).",
          "max": 1,
          "min": 0,
          "type": "float"
        },
        "om_cost_us_dollars_per_kw": {
          "default": 50,
          "description": "Annual diesel generator fixed operations and maintenance costs in $/kW",
          "max": 1000.0,
          "min": 0,
          "type": "float"
        },
        "om_cost_us_dollars_per_kwh": {
          "default": 20,
          "description": "diesel generator per unit production (variable) operations and maintenance costs in $/kWh",
          "max": 1000.0,
          "min": 0,
          "type": "float"
        },
        "pbi_max_us_dollars": {
          "default": 0,
          "description": "Maximum rebate allowed under utility production-based incentives",
          "max": 1000000000.0,
          "min": 0,
          "type": "float"
        },
        "pbi_system_max_kw": {
          "default": 0,
          "description": "Maximum system size for which production-based incentives apply",
          "max": 1000000000.0,
          "min": 0,
          "type": "float"
        },
        "pbi_us_dollars_per_kwh": {
          "default": 0,
          "description": "Production-based incentive value",
          "max": 1000000000.0,
          "min": 0,
          "type": "float"
        },
        "pbi_years": {
          "default": 0,
          "description": "Duration of production-based incentives from installation date",
          "max": 1000000000.0,
          "min": 0,
          "type": "float"
        },
        "state_ibi_max_us_dollars": {
          "default": 0,
          "description": "Maximum rebate allowed under state investment based incentives",
          "max": 10000000000.0,
          "min": 0,
          "type": "float"
        },
        "state_ibi_pct": {
          "default": 0,
          "description": "Percent of upfront project costs to discount under state investment based incentives",
          "max": 1,
          "min": 0,
          "type": "float"
        },
        "state_rebate_max_us_dollars": {
          "default": 0,
          "description": "Maximum rebate allowed under state rebates",
          "max": 10000000000.0,
          "min": 0,
          "type": "float"
        },
        "state_rebate_us_dollars_per_kw": {
          "default": 0,
          "description": "State rebates based on installed capacity",
          "max": 1000000000.0,
          "min": 0,
          "type": "float"
        },
        "utility_ibi_max_us_dollars": {
          "default": 0,
          "description": "Maximum rebate allowed under utility investment based incentives",
          "max": 10000000000.0,
          "min": 0,
          "type": "float"
        },
        "utility_ibi_pct": {
          "default": 0,
          "description": "Percent of upfront project costs to discount under utility investment based incentives",
          "max": 1,
          "min": 0,
          "type": "float"
        },
        "utility_rebate_max_us_dollars": {
          "default": 0,
          "description": "Maximum rebate allowed under utility rebates",
          "max": 10000000000.0,
          "min": 0,
          "type": "float"
        },
        "utility_rebate_us_dollars_per_kw": {
          "default": 0,
          "description": "Utility rebates based on installed capacity",
          "max": 1000000000.0,
          "min": 0,
          "type": "float"
        }
      },
      "LoadProfile": {
        "annual_kwh": {
          "depends_on": [
            "doe_reference_name"
          ],
          "description": "Annual energy consumption used to scale simulated building load profile, if <b><small>monthly_totals_kwh</b></small> is not provided.",
          "max": 1000000000000.0,
          "min": 1,
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
          "type": "float"
        },
        "critical_load_pct": {
          "default": 0.5,
          "description": "Critical load factor is multiplied by the typical load to determine the critical load that must be met during an outage. Value must be between zero and one, inclusive.",
          "max": 1,
          "min": 0,
          "type": "float"
        },
        "critical_loads_kw": {
          "description": "Critical load during an outage period. Must be hourly (8,760 samples), 30 minute (17,520 samples), or 15 minute (35,040 samples).",
          "type": "list_of_float"
        },
        "critical_loads_kw_is_net": {
          "default": false,
          "description": "If there is existing PV, must specify whether provided load is the net load after existing PV or not.",
          "type": "bool"
        },
        "doe_reference_name": {
          "description": "Simulated load profile from DOE <a href='https: //energy.gov/eere/buildings/commercial-reference-buildings' target='blank'>Commercial Reference Buildings</a>",
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
          ],
          "type": "str"
        },
        "loads_kw": {
          "description": "Typical load over all hours in one year. Must be hourly (8,760 samples), 30 minute (17,520 samples), or 15 minute (35,040 samples).",
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
          "type": "list_of_float"
        },
        "loads_kw_is_net": {
          "default": true,
          "description": "If there is existing PV, must specify whether provided load is the net load after existing PV or not.",
          "type": "bool"
        },
        "monthly_totals_kwh": {
          "depends_on": [
            "doe_reference_name"
          ],
          "description": "Array (length of 12) of total monthly energy consumption used to scale simulated building load profile.",
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
          "type": "list_of_float"
        },
        "outage_end_hour": {
          "description": "Hour of year that grid outage ends. Must be greater than outage_start.",
          "max": 8759,
          "min": 0,
          "type": "int"
        },
        "outage_is_major_event": {
          "default": true,
          "description": "Boolean value for if outage is a major event, which affects the avoided_outage_costs_us_dollars. If True, the avoided outage costs are calculated for a single outage occurring in the first year of the analysis_years. If False, the outage event is assumed to be an average outage event that occurs every year of the analysis period. In the latter case, the avoided outage costs for one year are escalated and discounted using the escalation_pct and offtaker_discount_pct to account for an annually recurring outage. (Average outage durations for certain utility service areas can be estimated using statistics reported on EIA form 861.)",
          "type": "bool"
        },
        "outage_start_hour": {
          "description": "Hour of year that grid outage starts. Must be less than outage_end.",
          "max": 8759,
          "min": 0,
          "type": "int"
        },
        "year": {
          "default": 2018,
          "description": "Year of Custom Load Profile. If a custom load profile is uploaded via the loads_kw parameter, it is important that this year correlates with the load profile so that weekdays/weekends are determined correctly for the utility rate tariff. If a DOE Reference Building profile (aka 'simulated' profile) is used, the year is set to 2017 since the DOE profiles start on a Sunday.",
          "max": 9999,
          "min": 1,
          "type": "int"
        }
      },
      "PV": {
        "array_type": {
          "default": 1,
          "description": "PV Watts array type (0: Ground Mount Fixed (Open Rack); 1: Rooftop, Fixed; 2: Ground Mount 1-Axis Tracking; 3 : 1-Axis Backtracking; 4: Ground Mount, 2-Axis Tracking)",
          "restrict_to": [
            0,
            1,
            2,
            3,
            4
          ],
          "type": "int"
        },
        "azimuth": {
          "default": 180,
          "description": "PV azimuth angle",
          "max": 360,
          "min": 0,
          "type": "float"
        },
        "dc_ac_ratio": {
          "default": 1.1,
          "description": "PV DC-AC ratio",
          "max": 2,
          "min": 0,
          "type": "float"
        },
        "degradation_pct": {
          "default": 0.005,
          "description": "Annual rate of degradation in PV energy production",
          "max": 1,
          "min": 0,
          "type": "float"
        },
        "existing_kw": {
          "default": 0,
          "description": "Existing PV size",
          "max": 100000.0,
          "min": 0,
          "type": "float"
        },
        "federal_itc_pct": {
          "default": 0.3,
          "description": "Percentage of capital costs that are credited towards federal taxes",
          "max": 1,
          "min": 0,
          "type": "float"
        },
        "federal_rebate_us_dollars_per_kw": {
          "default": 0,
          "description": "Federal rebates based on installed capacity",
          "max": 1000000000.0,
          "min": 0,
          "type": "float"
        },
        "gcr": {
          "default": 0.4,
          "description": "PV ground cover ratio (photovoltaic array area : total ground area).",
          "max": 0.99,
          "min": 0.01,
          "type": "float"
        },
        "installed_cost_us_dollars_per_kw": {
          "default": 2000,
          "description": "Installed PV cost in $/kW",
          "max": 100000.0,
          "min": 0,
          "type": "float"
        },
        "inv_eff": {
          "default": 0.96,
          "description": "PV inverter efficiency",
          "max": 0.995,
          "min": 0.9,
          "type": "float"
        },
        "losses": {
          "default": 0.14,
          "description": "PV system performance losses",
          "max": 0.99,
          "min": 0,
          "type": "float"
        },
        "macrs_bonus_pct": {
          "default": 0,
          "description": "Percent of upfront project costs to depreciate in year one in addition to scheduled depreciation",
          "max": 1,
          "min": 0,
          "type": "float"
        },
        "macrs_itc_reduction": {
          "default": 0.5,
          "description": "Percent of the ITC value by which depreciable basis is reduced",
          "max": 1,
          "min": 0,
          "type": "float"
        },
        "macrs_option_years": {
          "default": 5,
          "description": "Duration over which accelerated depreciation will occur. Set to zero to disable",
          "restrict_to": [
            0,
            5,
            7
          ],
          "type": "int"
        },
        "max_kw": {
          "default": 1000000000.0,
          "description": "Maximum PV size constraint for optimization. Set to zero to disable PV",
          "max": 1000000000.0,
          "min": 0,
          "type": "float"
        },
        "min_kw": {
          "default": 0,
          "description": "Minimum PV size constraint for optimization",
          "max": 1000000000.0,
          "min": 0,
          "type": "float"
        },
        "module_type": {
          "default": 0,
          "description": "PV module type (0: Standard; 1: Premium; 2: Thin Film)",
          "restrict_to": [
            0,
            1,
            2
          ],
          "type": "int"
        },
        "om_cost_us_dollars_per_kw": {
          "default": 16,
          "description": "Annual PV operations and maintenance costs in $/kW",
          "max": 1000.0,
          "min": 0,
          "type": "float"
        },
        "pbi_max_us_dollars": {
          "default": 1000000000.0,
          "description": "Maximum annual value of production-based incentives",
          "max": 1000000000.0,
          "min": 0,
          "type": "float"
        },
        "pbi_system_max_kw": {
          "default": 1000000000.0,
          "description": "Maximum system size eligible for production-based incentive",
          "max": 1000000000.0,
          "min": 0,
          "type": "float"
        },
        "pbi_us_dollars_per_kwh": {
          "default": 0,
          "description": "Production-based incentive value",
          "max": 1000000000.0,
          "min": 0,
          "type": "float"
        },
        "pbi_years": {
          "default": 1,
          "description": "Duration of production-based incentives from installation date",
          "max": 100,
          "min": 0,
          "type": "float"
        },
        "radius": {
          "default": 0,
          "description": "Radius to use when searching for the closest climate data station. Use zero to use the closest station regardless of the distance",
          "min": 0,
          "type": "float"
        },
        "state_ibi_max_us_dollars": {
          "default": 10000000000.0,
          "description": "Maximum dollar value of state percentage-based capital cost incentive",
          "max": 10000000000.0,
          "min": 0,
          "type": "float"
        },
        "state_ibi_pct": {
          "default": 0,
          "description": "Percentage of capital costs offset by state incentives",
          "max": 1,
          "min": 0,
          "type": "float"
        },
        "state_rebate_max_us_dollars": {
          "default": 10000000000.0,
          "description": "Maximum state rebate",
          "max": 10000000000.0,
          "min": 0,
          "type": "float"
        },
        "state_rebate_us_dollars_per_kw": {
          "default": 0,
          "description": "State rebate based on installed capacity",
          "max": 1000000000.0,
          "min": 0,
          "type": "float"
        },
        "tilt": {
          "default": 0.537,
          "description": "PV system tilt",
          "max": 90,
          "min": 0,
          "type": "float"
        },
        "utility_ibi_max_us_dollars": {
          "default": 10000000000.0,
          "description": "Maximum dollar value of utility percentage-based capital cost incentive",
          "max": 10000000000.0,
          "min": 0,
          "type": "float"
        },
        "utility_ibi_pct": {
          "default": 0,
          "description": "Percentage of capital costs offset by utility incentives",
          "max": 1,
          "min": 0,
          "type": "float"
        },
        "utility_rebate_max_us_dollars": {
          "default": 10000000000.0,
          "description": "Maximum utility rebate",
          "max": 10000000000.0,
          "min": 0,
          "type": "float"
        },
        "utility_rebate_us_dollars_per_kw": {
          "default": 0,
          "description": "Utility rebate based on installed capacity",
          "max": 1000000000.0,
          "min": 0,
          "type": "float"
        }
      },
      "Storage": {
        "battery_replacement_year": {
          "default": 10,
          "description": "Number of years from start of analysis period to replace battery",
          "max": 75,
          "min": 0,
          "type": "float"
        },
        "canGridCharge": {
          "default": true,
          "description": "Flag to set whether the battery can be charged from the grid, or just onsite generation",
          "type": "bool"
        },
        "installed_cost_us_dollars_per_kw": {
          "default": 1000,
          "description": "Total upfront battery power capacity costs (e.g. inverter and balance of power systems)",
          "max": 10000.0,
          "min": 0,
          "type": "float"
        },
        "installed_cost_us_dollars_per_kwh": {
          "default": 500,
          "description": "Total upfront battery costs",
          "max": 10000.0,
          "min": 0,
          "type": "float"
        },
        "internal_efficiency_pct": {
          "default": 0.975,
          "description": "Battery inherent efficiency independent of inverter and rectifier",
          "max": 1,
          "min": 0,
          "type": "float"
        },
        "inverter_efficiency_pct": {
          "default": 0.96,
          "description": "Battery inverter efficiency",
          "max": 1,
          "min": 0,
          "type": "float"
        },
        "inverter_replacement_year": {
          "default": 10,
          "description": "Number of years from start of analysis period to replace inverter",
          "max": 75,
          "min": 0,
          "type": "float"
        },
        "macrs_bonus_pct": {
          "default": 0,
          "description": "Percent of upfront project costs to depreciate under MACRS in year one in addtion to scheduled depreciation",
          "max": 1,
          "min": 0,
          "type": "float"
        },
        "macrs_itc_reduction": {
          "default": 0.5,
          "description": "Percent of the ITC value by which depreciable basis is reduced",
          "max": 1,
          "min": 0,
          "type": "float"
        },
        "macrs_option_years": {
          "default": 7,
          "description": "Duration over which accelerated depreciation will occur. Set to zero by default",
          "restrict_to": [
            0,
            5,
            7
          ],
          "type": "int"
        },
        "max_kw": {
          "default": 1000000,
          "description": "Maximum battery power capacity size constraint for optimization. Set to zero to disable storage",
          "max": 1000000000.0,
          "min": 0,
          "type": "float"
        },
        "max_kwh": {
          "default": 1000000,
          "description": "Maximum battery energy storage capacity constraint for optimization. Set to zero to disable Storage",
          "min": 0,
          "type": "float"
        },
        "min_kw": {
          "default": 0,
          "description": "Minimum battery power capacity size constraint for optimization",
          "max": 1000000000.0,
          "min": 0,
          "type": "float"
        },
        "min_kwh": {
          "default": 0,
          "description": "Minimum battery energy storage capacity constraint for optimization",
          "min": 0,
          "type": "float"
        },
        "rectifier_efficiency_pct": {
          "default": 0.96,
          "description": "Battery rectifier efficiency",
          "max": 1,
          "min": 0,
          "type": "float"
        },
        "replace_cost_us_dollars_per_kw": {
          "default": 460,
          "description": "Battery power capacity replacement cost at time of replacement year",
          "max": 10000.0,
          "min": 0,
          "type": "float"
        },
        "replace_cost_us_dollars_per_kwh": {
          "default": 230,
          "description": "Battery energy capacity replacement cost at time of replacement year",
          "max": 10000.0,
          "min": 0,
          "type": "float"
        },
        "soc_init_pct": {
          "default": 0.5,
          "description": "Battery state of charge at first hour of optimization",
          "max": 1,
          "min": 0,
          "type": "float"
        },
        "soc_min_pct": {
          "default": 0.2,
          "description": "Minimum allowable battery state of charge",
          "max": 1,
          "min": 0,
          "type": "float"
        },
        "total_itc_pct": {
          "default": 0.0,
          "description": "Total investment tax credit in percent applied toward capital costs",
          "max": 1,
          "min": 0,
          "type": "float"
        },
        "total_rebate_us_dollars_per_kw": {
          "default": 0,
          "description": "Rebate based on installed power capacity",
          "max": 1000000000.0,
          "min": 0,
          "type": "float"
        }
      },
      "Wind": {
        "federal_itc_pct": {
          "default": 0.3,
          "description": "Percent federal capital cost incentive",
          "max": 1,
          "min": 0,
          "type": "float"
        },
        "federal_rebate_us_dollars_per_kw": {
          "default": 0,
          "description": "Federal rebate based on installed capacity",
          "max": 1000000000.0,
          "min": 0,
          "type": "float"
        },
        "installed_cost_us_dollars_per_kw": {
          "default": 3013,
          "description": "Total upfront installed costs in US dollars/kW. Determined by size_class. For the 'large' (>2MW) size_class the cost is $1,874/kW. For the 'medium commercial' size_class the cost is $4,111/kW. For the 'small commercial' size_class the cost is $4,989/kW and for the 'residential' size_class the cost is $10,792/kW ",
          "max": 100000.0,
          "min": 0,
          "type": "float"
        },
        "macrs_bonus_pct": {
          "default": 0,
          "description": "Percent of upfront project costs to depreciate under MACRS",
          "max": 1,
          "min": 0,
          "type": "float"
        },
        "macrs_itc_reduction": {
          "default": 0.5,
          "description": "Percent of the full ITC that depreciable basis is reduced by",
          "max": 1,
          "min": 0,
          "type": "float"
        },
        "macrs_option_years": {
          "default": 5,
          "description": "MACRS schedule for financial analysis. Set to zero to disable",
          "restrict_to": [
            0,
            5,
            7
          ],
          "type": "int"
        },
        "max_kw": {
          "default": 1000000000.0,
          "description": "Maximum wind power capacity constraint for optimization. Set to zero to disable Wind. Enabled by default",
          "max": 1000000000.0,
          "min": 0,
          "type": "float"
        },
        "min_kw": {
          "default": 0,
          "description": "Minimum wind power capacity constraint for optimization",
          "max": 1000000000.0,
          "min": 0,
          "type": "float"
        },
        "om_cost_us_dollars_per_kw": {
          "default": 35,
          "description": "Total annual operations and maintenance costs for wind",
          "max": 1000.0,
          "min": 0,
          "type": "float"
        },
        "pbi_max_us_dollars": {
          "default": 1000000000.0,
          "description": "Maximum rebate allowed under utility production-based incentives",
          "max": 1000000000.0,
          "min": 0,
          "type": "float"
        },
        "pbi_system_max_kw": {
          "default": 1000000000.0,
          "description": "Maximum system size for which production-based incentives apply",
          "max": 1000000000.0,
          "min": 0,
          "type": "float"
        },
        "pbi_us_dollars_per_kwh": {
          "default": 0,
          "description": "Production-based incentive value",
          "max": 1000000000.0,
          "min": 0,
          "type": "float"
        },
        "pbi_years": {
          "default": 1,
          "description": "Duration of production-based incentives from installation date",
          "max": 1000000000.0,
          "min": 0,
          "type": "float"
        },
        "pressure_atmospheres": {
          "description": "Data downloaded from Wind ToolKit for modeling wind turbine.",
          "type": "list_of_float"
        },
        "size_class": {
          "description": "Turbine size-class. One of [residential, commercial, medium, large]",
          "restrict_to": ['residential', 'commercial', 'medium', 'large'],
          "type": "str"
        },
        "state_ibi_max_us_dollars": {
          "default": 10000000000.0,
          "description": "Maximum rebate allowed under state investment based incentives",
          "max": 10000000000.0,
          "min": 0,
          "type": "float"
        },
        "state_ibi_pct": {
          "default": 0,
          "description": "Percent of upfront project costs to discount under state investment based incentives",
          "max": 1,
          "min": 0,
          "type": "float"
        },
        "state_rebate_max_us_dollars": {
          "default": 10000000000.0,
          "description": "Maximum rebate allowed under state rebates",
          "max": 10000000000.0,
          "min": 0,
          "type": "float"
        },
        "state_rebate_us_dollars_per_kw": {
          "default": 0,
          "description": "State rebates based on installed capacity",
          "max": 1000000000.0,
          "min": 0,
          "type": "float"
        },
        "temperature_celsius": {
          "description": "Data downloaded from Wind ToolKit for modeling wind turbine.",
          "type": "list_of_float"
        },
        "utility_ibi_max_us_dollars": {
          "default": 10000000000.0,
          "description": "Maximum rebate allowed under utility investment based incentives",
          "max": 10000000000.0,
          "min": 0,
          "type": "float"
        },
        "utility_ibi_pct": {
          "default": 0,
          "description": "Percent of upfront project costs to discount under utility investment based incentives",
          "max": 1,
          "min": 0,
          "type": "float"
        },
        "utility_rebate_max_us_dollars": {
          "default": 10000000000.0,
          "description": "Maximum rebate allowed under utility rebates",
          "max": 10000000000.0,
          "min": 0,
          "type": "float"
        },
        "utility_rebate_us_dollars_per_kw": {
          "default": 0,
          "description": "Utility rebates based on installed capacity",
          "max": 1000000000.0,
          "min": 0,
          "type": "float"
        },
        "wind_direction_degrees": {
          "description": "Data downloaded from Wind ToolKit for modeling wind turbine.",
          "type": "list_of_float"
        },
        "wind_meters_per_sec": {
          "description": "Data downloaded from Wind ToolKit for modeling wind turbine.",
          "type": "list_of_float"
        }
      },
      "address": {
        "description": "A user defined address as optional metadata (street address, city, state or zip code)",
        "type": "str"
      },
      "land_acres": {
        "description": "Land area in acres available for PV panel siting",
        "max": 1000000.0,
        "min": 0,
        "type": "float"
      },
      "latitude": {
        "description": "The approximate latitude of the site in decimal degrees",
        "max": 90,
        "min": -90,
        "required": true,
        "type": "float"
      },
      "longitude": {
        "description": "The approximate longitude of the site in decimal degrees",
        "max": 180,
        "min": -180,
        "required": true,
        "type": "float"
      },
      "roof_squarefeet": {
        "description": "Area of roof in square feet available for PV siting",
        "max": 1000000000.0,
        "min": 0,
        "type": "float"
      }
    },
    "description": {
      "description": "An optional user defined description to describe the scenario and run",
      "type": "str"
    },
    "time_steps_per_hour": {
      "default": 1,
      "description": "The number of time steps per hour in the REopt simulation",
      "max": 4,
      "min": 1,
      "type": "int"
    },
    "timeout_seconds": {
      "default": 295,
      "description": "The number of seconds allowed before the optimization times out",
      "max": 295,
      "min": 1,
      "type": "float"
    },
    "user_uuid": {
      "description": "The assigned unique ID of a signed in REOpt user",
      "type": "str"
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
