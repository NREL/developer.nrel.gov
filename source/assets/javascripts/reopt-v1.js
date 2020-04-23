var nested_input_definitions = {
  "Scenario": {
    "timeout_seconds": {
      "type": "float",
      "min": 1,
      "max": 420,
      "default": 420,
      "description": "The number of seconds allowed before the optimization times out"
    },
    "user_uuid": {
      "type": "str",
      "description": "The assigned unique ID of a signed in REOpt user"
    },
    "description": {
      "type": "str",
      "description": "An optional user defined description to describe the scenario and run"
    },
    "time_steps_per_hour": {
      "type": "int",
      "restrict_to": [1,2,4],
      "default": 1,
      "description": "The number of time steps per hour in the REopt simulation"
    },
    "webtool_uuid": {
      "type": "str",
      "description": "The unique ID of a scenario created by the REopt Lite Webtool. Note that this ID can be shared by several REopt Lite API Scenarios (for example when users select a 'Resilience' analysis more than one REopt API Scenario is created)."
    },
    "Site": {
      "latitude": {
        "type": "float",
        "min": -90,
        "max": 90,
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
      "address": {
        "type": "str",
        "description": "A user defined address as optional metadata (street address, city, state or zip code)"
      },
      "land_acres": {
        "type": "float",
        "min": 0,
        "max": 1000000.0,
        "description": "Land area in acres available for PV panel siting"
      },
      "roof_squarefeet": {
        "type": "float",
        "min": 0,
        "max": 1000000000.0,
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
          "default": 0.023,
          "description": "Annual nominal utility electricity cost escalation rate"
        },
        "offtaker_tax_pct": {
          "type": "float",
          "min": 0,
          "max": 1,
          "default": 0.26,
          "description": "Energy offtaker tax rate. In single ownership model the offtaker is also the generation owner."
        },
        "offtaker_discount_pct": {
          "type": "float",
          "min": 0,
          "max": 1,
          "default": 0.083,
          "description": "Nominal energy offtaker discount rate. In single ownership model the offtaker is also the generation owner."
        },
        "two_party_ownership": {
          "default": false,
          "type": "bool",
          "description": "Specify if ownership model is direct ownership or two party. In two party model the offtaker does not purcharse the generation technologies, but pays the generation owner for energy from the generator(s)."
        },
        "owner_tax_pct": {
          "type": "float",
          "min": 0,
          "max": 1,
          "default": 0.26,
          "description": "Generation owner tax rate. Used for two party financing model. In two party ownership model the offtaker does not own the generator(s)."
        },
        "owner_discount_pct": {
          "type": "float",
          "min": 0,
          "max": 1,
          "default": 0.083,
          "description": "Nominal generation owner discount rate. Used for two party financing model. In two party ownership model the offtaker does not own the generator(s)."
        },
        "analysis_years": {
          "type": "int",
          "min": 1,
          "max": 75,
          "default": 25,
          "description": "Analysis period"
        },
        "value_of_lost_load_us_dollars_per_kwh": {
          "type": "float",
          "min": 0,
          "max": 1000000.0,
          "default": 100,
          "description": "Value placed on unmet site load during grid outages. Units are US dollars per unmet kilowatt-hour. The value of lost load (VoLL) is used to determine the avoided outage costs by multiplying VoLL [$/kWh] with the average number of hours that the critical load can be met by the energy system (determined by simulating outages occuring at every hour of the year), and multiplying by the mean critical load."
        },
        "microgrid_upgrade_cost_pct": {
          "type": "float",
          "min": 0,
          "max": 1,
          "default": 0.3,
          "description": "Additional cost, in percent of non-islandable capital costs, to make a distributed energy system islandable from the grid and able to serve critical loads. Includes all upgrade costs such as additional laber and critical load panels."
        }
      },
      "LoadProfile": {
        "doe_reference_name": {
          "type": "str",
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
          "description": "Simulated load profile from DOE <a href='https: //energy.gov/eere/buildings/commercial-reference-buildings' target='blank'>Commercial Reference Buildings</a>"
        },
        "annual_kwh": {
          "type": "float",
          "min": 1,
          "max": 1000000000000.0,
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
          "depends_on": [
            "doe_reference_name"
          ],
          "description": "Annual energy consumption used to scale simulated building load profile, if <b><small>monthly_totals_kwh</b></small> is not provided."
        },
        "year": {
          "type": "int",
          "min": 1,
          "max": 9999,
          "default": 2019,
          "description": "Year of Custom Load Profile. If a custom load profile is uploaded via the loads_kw parameter, it is important that this year correlates with the load profile so that weekdays/weekends are determined correctly for the utility rate tariff. If a DOE Reference Building profile (aka 'simulated' profile) is used, the year is set to 2017 since the DOE profiles start on a Sunday."
        },
        "monthly_totals_kwh": {
          "type": "list_of_float",
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
          "depends_on": [
            "doe_reference_name"
          ],
          "description": "Array (length of 12) of total monthly energy consumption used to scale simulated building load profile."
        },
        "loads_kw": {
          "type": "list_of_float",
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
          "description": "Typical load over all hours in one year. Must be hourly (8,760 samples), 30 minute (17,520 samples), or 15 minute (35,040 samples). All non-net load values must be greater than or equal to zero."
        },
        "critical_loads_kw": {
          "type": "list_of_float",
          "description": "Critical load during an outage period. Must be hourly (8,760 samples), 30 minute (17,520 samples), or 15 minute (35,040 samples). All non-net load values must be greater than or equal to zero."
        },
        "loads_kw_is_net": {
          "default": true,
          "type": "bool",
          "description": "If there is existing PV, must specify whether provided load is the net load after existing PV or not."
        },
        "critical_loads_kw_is_net": {
          "default": false,
          "type": "bool",
          "description": "If there is existing PV, must specify whether provided load is the net load after existing PV or not."
        },
        "outage_start_hour": {
          "type": "int",
          "min": 0,
          "max": 8759,
          "depends_on": [
            "outage_end_hour"
          ],
          "description": "Hour of year that grid outage starts. Must be less than outage_end."
        },
        "outage_end_hour": {
          "type": "int",
          "min": 0,
          "max": 8759,
          "depends_on": [
            "outage_start_hour"
          ],
          "description": "Hour of year that grid outage ends. Must be greater than outage_start."
        },
        "critical_load_pct": {
          "type": "float",
          "min": 0,
          "max": 1,
          "default": 0.5,
          "description": "Critical load factor is multiplied by the typical load to determine the critical load that must be met during an outage. Value must be between zero and one, inclusive."
        },
        "outage_is_major_event": {
          "type": "bool",
          "default": true,
          "description": "Boolean value for if outage is a major event, which affects the avoided_outage_costs_us_dollars. If True, the avoided outage costs are calculated for a single outage occurring in the first year of the analysis_years. If False, the outage event is assumed to be an average outage event that occurs every year of the analysis period. In the latter case, the avoided outage costs for one year are escalated and discounted using the escalation_pct and offtaker_discount_pct to account for an annually recurring outage. (Average outage durations for certain utility service areas can be estimated using statistics reported on EIA form 861.)"
        }
      },
      "ElectricTariff": {
        "urdb_utility_name": {
          "type": "str",
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
          "depends_on": [
            "urdb_rate_name"
          ],
          "description": "Name of Utility from  <a href='https: //openei.org/wiki/Utility_Rate_Database' target='blank'>Utility Rate Database</a>"
        },
        "urdb_rate_name": {
          "type": "str",
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
          "depends_on": [
            "urdb_utility_name"
          ],
          "description": "Name of utility rate from  <a href='https: //openei.org/wiki/Utility_Rate_Database' target='blank'>Utility Rate Database</a>"
        },
        "add_blended_rates_to_urdb_rate": {
          "type": "bool",
          "default": false,
          "description": "Set to 'true' to add the monthly blended energy rates and demand charges to the URDB rate schedule. Otherwise, blended rates will only be considered if a URDB rate is not provided. "
        },
        "blended_monthly_rates_us_dollars_per_kwh": {
          "type": "list_of_float",
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
          "depends_on": [
            "blended_monthly_demand_charges_us_dollars_per_kw"
          ],
          "description": "Array (length of 12) of blended energy rates (total monthly energy in kWh divided by monthly cost in $)"
        },
        "blended_monthly_demand_charges_us_dollars_per_kw": {
          "type": "list_of_float",
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
          "depends_on": [
            "blended_monthly_rates_us_dollars_per_kwh"
          ],
          "description": "Array (length of 12) of blended demand charges (demand charge cost in $ divided by monthly peak demand in kW)"
        },
        "blended_annual_rates_us_dollars_per_kwh": {
          "type": "float",
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
          "depends_on": [
            "blended_annual_demand_charges_us_dollars_per_kw"
          ],
          "description": "Annual blended energy rate (total annual energy in kWh divided by annual cost in $)"
        },
        "blended_annual_demand_charges_us_dollars_per_kw": {
          "type": "float",
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
          "depends_on": [
            "blended_annual_rates_us_dollars_per_kwh"
          ],
          "description": "Annual blended demand rates (annual demand charge cost in $ divided by annual peak demand in kW)"
        },
        "net_metering_limit_kw": {
          "type": "float",
          "min": 0,
          "max": 1000000000.0,
          "default": 0,
          "description": "System size above which net metering is not allowed"
        },
        "interconnection_limit_kw": {
          "type": "float",
          "min": 0,
          "max": 1000000000.0,
          "default": 100000000.0,
          "description": "Limit on system capacity size that can be interconnected to the grid"
        },
        "wholesale_rate_us_dollars_per_kwh": {
          "type": [
            "float",
            "list_of_float"
          ],
          "min": 0,
          "default": 0,
          "description": "Price of electricity sold back to the grid in absence of net metering or above net metering limit. The total annual kWh that can be compensated under this rate is restricted to the total annual site-load in kWh. Can be a scalar value, which applies for all-time, or an array with time-sensitive values. If an array is input then it must have a length of 8760, 17520, or 35040. The inputed array values are up/down-sampled using mean values to match the Scenario time_steps_per_hour."
        },
        "wholesale_rate_above_site_load_us_dollars_per_kwh": {
          "type": [
            "float",
            "list_of_float"
          ],
          "min": 0,
          "default": 0,
          "description": "Price of electricity sold back to the grid above the site load, regardless of net metering.  Can be a scalar value, which applies for all-time, or an array with time-sensitive values. If an array is input then it must have a length of 8760, 17520, or 35040. The inputed array values are up/down-sampled using mean values to match the Scenario time_steps_per_hour."
        },
        "urdb_response": {
          "type": "dict",
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
          "description": "Utility rate structure from <a href='https: //openei.org/services/doc/rest/util_rates/?version=3' target='blank'>Utility Rate Database API</a>"
        },
        "urdb_label": {
          "type": "str",
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
          "description": "Label attribute of utility rate structure from <a href='https: //openei.org/services/doc/rest/util_rates/?version=3' target='blank'>Utility Rate Database API</a>"
        }
      },
      "Wind": {
        "size_class": {
          "type": "str",
          "restrict_to": ['residential', 'commercial', 'medium', 'large'],
          "description": "Turbine size-class. One of [residential, commercial, medium, large]"
        },
        "wind_meters_per_sec": {
          "type": "list_of_float",
          "description": "Data downloaded from Wind ToolKit for modeling wind turbine."
        },
        "wind_direction_degrees": {
          "type": "list_of_float",
          "description": "Data downloaded from Wind ToolKit for modeling wind turbine."
        },
        "temperature_celsius": {
          "type": "list_of_float",
          "description": "Data downloaded from Wind ToolKit for modeling wind turbine."
        },
        "pressure_atmospheres": {
          "type": "list_of_float",
          "description": "Data downloaded from Wind ToolKit for modeling wind turbine."
        },
        "min_kw": {
          "type": "float",
          "min": 0,
          "max": 1000000000.0,
          "default": 0,
          "description": "Minimum wind power capacity constraint for optimization"
        },
        "max_kw": {
          "type": "float",
          "min": 0,
          "max": 1000000000.0,
          "default": 0,
          "description": "Maximum wind power capacity constraint for optimization. Set to zero to disable Wind. Enabled by default"
        },
        "installed_cost_us_dollars_per_kw": {
          "type": "float",
          "min": 0,
          "max": 100000.0,
          "default": 3013,
          "description": "Total upfront installed costs in US dollars/kW. Determined by size_class. For the 'large' (>2MW) size_class the cost is $1,874/kW. For the 'medium commercial' size_class the cost is $4,111/kW. For the 'small commercial' size_class the cost is $4,989/kW and for the 'residential' size_class the cost is $10,792/kW "
        },
        "om_cost_us_dollars_per_kw": {
          "type": "float",
          "min": 0,
          "max": 1000.0,
          "default": 40,
          "description": "Total annual operations and maintenance costs for wind"
        },
        "macrs_option_years": {
          "type": "int",
          "restrict_to": [
            0,
            5,
            7
          ],
          "default": 5,
          "description": "MACRS schedule for financial analysis. Set to zero to disable"
        },
        "macrs_bonus_pct": {
          "type": "float",
          "min": 0,
          "max": 1,
          "default": 1,
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
          "default": 0.26,
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
          "max": 10000000000.0,
          "default": 10000000000.0,
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
          "max": 10000000000.0,
          "default": 10000000000.0,
          "description": "Maximum rebate allowed under utility investment based incentives"
        },
        "federal_rebate_us_dollars_per_kw": {
          "type": "float",
          "min": 0,
          "max": 1000000000.0,
          "default": 0,
          "description": "Federal rebate based on installed capacity"
        },
        "state_rebate_us_dollars_per_kw": {
          "type": "float",
          "min": 0,
          "max": 1000000000.0,
          "default": 0,
          "description": "State rebates based on installed capacity"
        },
        "state_rebate_max_us_dollars": {
          "type": "float",
          "min": 0,
          "max": 10000000000.0,
          "default": 10000000000.0,
          "description": "Maximum rebate allowed under state rebates"
        },
        "utility_rebate_us_dollars_per_kw": {
          "type": "float",
          "min": 0,
          "max": 1000000000.0,
          "default": 0,
          "description": "Utility rebates based on installed capacity"
        },
        "utility_rebate_max_us_dollars": {
          "type": "float",
          "min": 0,
          "max": 10000000000.0,
          "default": 10000000000.0,
          "description": "Maximum rebate allowed under utility rebates"
        },
        "pbi_us_dollars_per_kwh": {
          "type": "float",
          "min": 0,
          "max": 1000000000.0,
          "default": 0,
          "description": "Production-based incentive value"
        },
        "pbi_max_us_dollars": {
          "type": "float",
          "min": 0,
          "max": 1000000000.0,
          "default": 1000000000.0,
          "description": "Maximum rebate allowed under utility production-based incentives"
        },
        "pbi_years": {
          "type": "float",
          "min": 0,
          "max": 1000000000.0,
          "default": 1,
          "description": "Duration of production-based incentives from installation date"
        },
        "pbi_system_max_kw": {
          "type": "float",
          "min": 0,
          "max": 1000000000.0,
          "default": 1000000000.0,
          "description": "Maximum system size for which production-based incentives apply"
        },
        "prod_factor_series_kw": {
          "type": "list_of_float",
          "description": "Optional user-defined production factors. Entries have units of kWh/kW, representing the energy (kWh) output of a 1 kW system in each time step. Must be hourly (8,760 samples), 30 minute (17,520 samples), or 15 minute (35,040 samples)."
        }
      },
      "PV": {
        "pv_name": {
          "type": "str",
          "description": "Site name/description"
        },
        "existing_kw": {
          "type": "float",
          "min": 0,
          "max": 100000.0,
          "default": 0,
          "description": "Existing PV size"
        },
        "min_kw": {
          "type": "float",
          "min": 0,
          "max": 1000000000.0,
          "default": 0,
          "description": "Minimum PV size constraint for optimization"
        },
        "max_kw": {
          "type": "float",
          "min": 0,
          "max": 1000000000.0,
          "default": 1000000000.0,
          "description": "Maximum PV size constraint for optimization. Set to zero to disable PV"
        },
        "installed_cost_us_dollars_per_kw": {
          "type": "float",
          "min": 0,
          "max": 100000.0,
          "default": 1600,
          "description": "Installed PV cost in $/kW"
        },
        "om_cost_us_dollars_per_kw": {
          "type": "float",
          "min": 0,
          "max": 1000.0,
          "default": 16,
          "description": "Annual PV operations and maintenance costs in $/kW"
        },
        "macrs_option_years": {
          "type": "int",
          "restrict_to": [
            0,
            5,
            7
          ],
          "default": 5,
          "description": "Duration over which accelerated depreciation will occur. Set to zero to disable"
        },
        "macrs_bonus_pct": {
          "type": "float",
          "min": 0,
          "max": 1,
          "default": 1,
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
          "default": 0.26,
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
          "max": 10000000000.0,
          "default": 10000000000.0,
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
          "max": 10000000000.0,
          "default": 10000000000.0,
          "description": "Maximum dollar value of utility percentage-based capital cost incentive"
        },
        "federal_rebate_us_dollars_per_kw": {
          "type": "float",
          "min": 0,
          "max": 1000000000.0,
          "default": 0,
          "description": "Federal rebates based on installed capacity"
        },
        "state_rebate_us_dollars_per_kw": {
          "type": "float",
          "min": 0,
          "max": 1000000000.0,
          "default": 0,
          "description": "State rebate based on installed capacity"
        },
        "state_rebate_max_us_dollars": {
          "type": "float",
          "min": 0,
          "max": 10000000000.0,
          "default": 10000000000.0,
          "description": "Maximum state rebate"
        },
        "utility_rebate_us_dollars_per_kw": {
          "type": "float",
          "min": 0,
          "max": 1000000000.0,
          "default": 0,
          "description": "Utility rebate based on installed capacity"
        },
        "utility_rebate_max_us_dollars": {
          "type": "float",
          "min": 0,
          "max": 10000000000.0,
          "default": 10000000000.0,
          "description": "Maximum utility rebate"
        },
        "pbi_us_dollars_per_kwh": {
          "type": "float",
          "min": 0,
          "max": 1000000000.0,
          "default": 0,
          "description": "Production-based incentive value"
        },
        "pbi_max_us_dollars": {
          "type": "float",
          "min": 0,
          "max": 1000000000.0,
          "default": 1000000000.0,
          "description": "Maximum annual value in present terms of production-based incentives"
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
          "max": 1000000000.0,
          "default": 1000000000.0,
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
          "restrict_to": [
            0,
            1,
            2,
            3,
            4
          ],
          "default": 1,
          "description": "PV Watts array type (0: Ground Mount Fixed (Open Rack); 1: Rooftop, Fixed; 2: Ground Mount 1-Axis Tracking; 3 : 1-Axis Backtracking; 4: Ground Mount, 2-Axis Tracking)"
        },
        "module_type": {
          "type": "int",
          "restrict_to": [
            0,
            1,
            2
          ],
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
          "default": 1.2,
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
          "description": "Radius, in miles, to use when searching for the closest climate data station. Use zero to use the closest station regardless of the distance"
        },
        "tilt": {
          "type": "float",
          "min": 0,
          "max": 90,
          "default": 0.537,
          "description": "PV system tilt"
        },
        "location": {
          "type": "str",
          "restrict_to": ['roof', 'ground', 'both'],
          "default": "both",
          "description": "Where PV can be deployed. One of [roof, ground, both] with default as both"
        },
        "prod_factor_series_kw": {
          "type": "list_of_float",
          "description": "Optional user-defined production factors. Entries have units of kWh/kW, representing the energy (kWh) output of a 1 kW system in each time step. Must be hourly (8,760 samples), 30 minute (17,520 samples), or 15 minute (35,040 samples)."
        }
      },
      "Storage": {
        "min_kw": {
          "type": "float",
          "min": 0,
          "max": 1000000000.0,
          "default": 0,
          "description": "Minimum battery power capacity size constraint for optimization"
        },
        "max_kw": {
          "type": "float",
          "min": 0,
          "max": 1000000000.0,
          "default": 1000000,
          "description": "Maximum battery power capacity size constraint for optimization. Set to zero to disable storage"
        },
        "min_kwh": {
          "type": "float",
          "min": 0,
          "default": 0,
          "description": "Minimum battery energy storage capacity constraint for optimization"
        },
        "max_kwh": {
          "type": "float",
          "min": 0,
          "default": 1000000,
          "description": "Maximum battery energy storage capacity constraint for optimization. Set to zero to disable Storage"
        },
        "internal_efficiency_pct": {
          "type": "float",
          "min": 0,
          "max": 1,
          "default": 0.975,
          "description": "Battery inherent efficiency independent of inverter and rectifier"
        },
        "inverter_efficiency_pct": {
          "type": "float",
          "min": 0,
          "max": 1,
          "default": 0.96,
          "description": "Battery inverter efficiency"
        },
        "rectifier_efficiency_pct": {
          "type": "float",
          "min": 0,
          "max": 1,
          "default": 0.96,
          "description": "Battery rectifier efficiency"
        },
        "soc_min_pct": {
          "type": "float",
          "min": 0,
          "max": 1,
          "default": 0.2,
          "description": "Minimum allowable battery state of charge"
        },
        "soc_init_pct": {
          "type": "float",
          "min": 0,
          "max": 1,
          "default": 0.5,
          "description": "Battery state of charge at first hour of optimization"
        },
        "canGridCharge": {
          "type": "bool",
          "default": true,
          "description": "Flag to set whether the battery can be charged from the grid, or just onsite generation"
        },
        "installed_cost_us_dollars_per_kw": {
          "type": "float",
          "min": 0,
          "max": 10000.0,
          "default": 840,
          "description": "Total upfront battery power capacity costs (e.g. inverter and balance of power systems)"
        },
        "installed_cost_us_dollars_per_kwh": {
          "type": "float",
          "min": 0,
          "max": 10000.0,
          "default": 420,
          "description": "Total upfront battery costs"
        },
        "replace_cost_us_dollars_per_kw": {
          "type": "float",
          "min": 0,
          "max": 10000.0,
          "default": 410,
          "description": "Battery power capacity replacement cost at time of replacement year"
        },
        "replace_cost_us_dollars_per_kwh": {
          "type": "float",
          "min": 0,
          "max": 10000.0,
          "default": 200,
          "description": "Battery energy capacity replacement cost at time of replacement year"
        },
        "inverter_replacement_year": {
          "type": "float",
          "min": 0,
          "max": 75,
          "default": 10,
          "description": "Number of years from start of analysis period to replace inverter"
        },
        "battery_replacement_year": {
          "type": "float",
          "min": 0,
          "max": 75,
          "default": 10,
          "description": "Number of years from start of analysis period to replace battery"
        },
        "macrs_option_years": {
          "type": "int",
          "restrict_to": [
            0,
            5,
            7
          ],
          "default": 7,
          "description": "Duration over which accelerated depreciation will occur. Set to zero by default"
        },
        "macrs_bonus_pct": {
          "type": "float",
          "min": 0,
          "max": 1,
          "default": 1,
          "description": "Percent of upfront project costs to depreciate under MACRS in year one in addtion to scheduled depreciation"
        },
        "macrs_itc_reduction": {
          "type": "float",
          "min": 0,
          "max": 1,
          "default": 0.5,
          "description": "Percent of the ITC value by which depreciable basis is reduced"
        },
        "total_itc_pct": {
          "type": "float",
          "min": 0,
          "max": 1,
          "default": 0.0,
          "description": "Total investment tax credit in percent applied toward capital costs"
        },
        "total_rebate_us_dollars_per_kw": {
          "type": "float",
          "min": 0,
          "max": 1000000000.0,
          "default": 0,
          "description": "Rebate based on installed power capacity"
        }
      },
      "Generator": {
        "existing_kw": {
          "type": "float",
          "min": 0,
          "max": 100000.0,
          "default": 0,
          "description": "Existing diesel generator size"
        },
        "min_kw": {
          "type": "float",
          "min": 0,
          "max": 1000000000.0,
          "default": 0,
          "description": "Minimum diesel generator size constraint for optimization"
        },
        "max_kw": {
          "type": "float",
          "min": 0,
          "max": 1000000000.0,
          "default": 1000000000.0,
          "description": "Maximum diesel generator size constraint for optimization. Set to zero to disable gen"
        },
        "installed_cost_us_dollars_per_kw": {
          "type": "float",
          "min": 0,
          "max": 100000.0,
          "default": 500,
          "description": "Installed diesel generator cost in $/kW"
        },
        "om_cost_us_dollars_per_kw": {
          "type": "float",
          "min": 0,
          "max": 1000.0,
          "default": 10,
          "description": "Annual diesel generator fixed operations and maintenance costs in $/kW"
        },
        "om_cost_us_dollars_per_kwh": {
          "type": "float",
          "min": 0,
          "max": 1000.0,
          "default": 0.0,
          "description": "diesel generator per unit production (variable) operations and maintenance costs in $/kWh"
        },
        "diesel_fuel_cost_us_dollars_per_gallon": {
          "type": "float",
          "min": 0,
          "max": 100.0,
          "default": 3,
          "description": "diesel cost in $/gallon"
        },
        "fuel_slope_gal_per_kwh": {
          "type": "float",
          "min": 0,
          "max": 10,
          "default": 0.076,
          "description": "Generator fuel burn rate in gallons/kWh."
        },
        "fuel_intercept_gal_per_hr": {
          "type": "float",
          "min": 0,
          "max": 10,
          "default": 0,
          "description": "Generator fuel consumption curve y-intercept in gallons per hour."
        },
        "fuel_avail_gal": {
          "type": "float",
          "min": 0,
          "max": 1000000000.0,
          "default": 660,
          "description": "On-site generator fuel available in gallons."
        },
        "min_turn_down_pct": {
          "type": "float",
          "min": 0,
          "max": 1,
          "default": 0,
          "description": "Minimum generator loading in percent of capacity (size_kw)."
        },
        "generator_only_runs_during_grid_outage": {
          "default": true,
          "type": "bool",
          "description": "If there is existing diesel generator, must specify whether it should run only during grid outage or all the time in the bau case."
        },
        "generator_sells_energy_back_to_grid": {
          "default": false,
          "type": "bool",
          "description": "If there is existing diesel generator, must specify whether it should run only during grid outage or all the time in the bau case."
        },
        "macrs_option_years": {
          "type": "int",
          "restrict_to": [
            0,
            5,
            7
          ],
          "default": 0,
          "description": "MACRS schedule for financial analysis. Set to zero to disable"
        },
        "macrs_bonus_pct": {
          "type": "float",
          "min": 0,
          "max": 1,
          "default": 1,
          "description": "Percent of upfront project costs to depreciate under MACRS"
        },
        "macrs_itc_reduction": {
          "type": "float",
          "min": 0,
          "max": 1,
          "default": 0,
          "description": "Percent of the full ITC that depreciable basis is reduced by"
        },
        "federal_itc_pct": {
          "type": "float",
          "min": 0,
          "max": 1,
          "default": 0,
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
          "max": 10000000000.0,
          "default": 0,
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
          "max": 10000000000.0,
          "default": 0,
          "description": "Maximum rebate allowed under utility investment based incentives"
        },
        "federal_rebate_us_dollars_per_kw": {
          "type": "float",
          "min": 0,
          "max": 1000000000.0,
          "default": 0,
          "description": "Federal rebate based on installed capacity"
        },
        "state_rebate_us_dollars_per_kw": {
          "type": "float",
          "min": 0,
          "max": 1000000000.0,
          "default": 0,
          "description": "State rebates based on installed capacity"
        },
        "state_rebate_max_us_dollars": {
          "type": "float",
          "min": 0,
          "max": 10000000000.0,
          "default": 0,
          "description": "Maximum rebate allowed under state rebates"
        },
        "utility_rebate_us_dollars_per_kw": {
          "type": "float",
          "min": 0,
          "max": 1000000000.0,
          "default": 0,
          "description": "Utility rebates based on installed capacity"
        },
        "utility_rebate_max_us_dollars": {
          "type": "float",
          "min": 0,
          "max": 10000000000.0,
          "default": 0,
          "description": "Maximum rebate allowed under utility rebates"
        },
        "pbi_us_dollars_per_kwh": {
          "type": "float",
          "min": 0,
          "max": 1000000000.0,
          "default": 0,
          "description": "Production-based incentive value"
        },
        "pbi_max_us_dollars": {
          "type": "float",
          "min": 0,
          "max": 1000000000.0,
          "default": 0,
          "description": "Maximum rebate allowed under utility production-based incentives"
        },
        "pbi_years": {
          "type": "float",
          "min": 0,
          "max": 1000000000.0,
          "default": 0,
          "description": "Duration of production-based incentives from installation date"
        },
        "pbi_system_max_kw": {
          "type": "float",
          "min": 0,
          "max": 1000000000.0,
          "default": 0,
          "description": "Maximum system size for which production-based incentives apply"
        }
      }
    }
  }
}



var nested_output_definitions = {
    "Scenario": {
      "run_uuid": {
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
      "Profile": {
        "pre_setup_scenario_seconds": {
          "type": "float",
          "description": "Time spent before setting up scenario",
          "units": "seconds"
        },
        "setup_scenario_seconds": {
          "type": "float",
          "description": "Time spent setting up scenario",
          "units": "seconds"
        },
        "reopt_seconds": {
          "type": "float",
          "description": "Time spent solving scenario",
          "units": "seconds"
        },
        "reopt_bau_seconds": {
          "type": "float",
          "description": "Time spent solving base-case scenario",
          "units": "seconds"
        },
        "parse_run_outputs_seconds": {
          "type": "float",
          "description": "Time spent parsing outputs",
          "units": "seconds"
        }
      },
      "Site": {
        "LoadProfile": {
          "year_one_electric_load_series_kw": {
            "type": "list_of_float",
            "description": "Year one hourly time series of electric load",
            "units": "kW"
          },
          "critical_load_series_kw": {
            "type": "list_of_float",
            "description": "Hourly critical load for outage simulator. Values are either uploaded by user, or determined from typical load (either uploaded or simulated) and critical_load_pct.",
            "units": "kW"
          },
          "annual_calculated_kwh": {
            "type": "'float'",
            "description": "Annual energy consumption calculated by summing up 8760 load profile",
            "units": "kWh"
          },
          "resilience_check_flag": {
            "type": "boolean",
            "description": "BAU resilience check status for existing system"
          },
          "sustain_hours": {
            "type": "int",
            "description": "Number of hours the existing system can sustain with resilience check",
            "units": "hours"
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
            "description": "Capital cost for all technologies plus present value of operations and maintenance over anlaysis period",
            "units": "$"
          },
          "net_om_us_dollars_bau": {
            "type": "float",
            "description": "Business-as-usual present value of operations and maintenance over anlaysis period",
            "units": "$"
          },
          "avoided_outage_costs_us_dollars": {
            "type": "float",
            "description": "Avoided outage costs are determined using the Value of Lost Load [$/kWh], multiplied by the average critical load in kW (determined using critical_load_pct), the average hours that the critical load is sustained (determined by simulating outages starting at every hour of the year), and a present worth factor that accounts for cost growth with escalation_pct over the analysis_years and discounts the avoided costs to present value using offtaker_discount_pct.  Note that the use of a present worth factor presumes that the outage period and the microgrid's ability to meet the critical load is the same each year in the analysis_years. If outage_is_major_event is set to True, then the present worth factor is set to 1, which assumes that only one outage occurs in the analysis_years.",
            "units": "$"
          },
          "net_capital_costs": {
            "type": "float",
            "description": "Net capital costs for all technologies, in present value, including replacement costs and incentives.",
            "units": "$"
          },
          "microgrid_upgrade_cost_us_dollars": {
            "type": "float",
            "description": "Cost in US dollars to make a distributed energy system islandable from the grid. Determined by multiplying the total capital costs of resultant energy systems from REopt (such as PV and Storage system) with the input value for microgrid_upgrade_cost_pct (which defaults to 0.30)."
          },
          "initial_capital_costs": {
            "type": "float",
            "description": "Up-front capital costs for all technologies, in present value, excluding replacement costs and incentives.",
            "units": "$"
          },
          "initial_capital_costs_after_incentives": {
            "type": "float",
            "description": "Up-front capital costs for all technologies, in present value, excluding replacement costs, including incentives.",
            "units": "$"
          },
          "replacement_costs": {
            "type": "float",
            "description": "Net replacement costs for all technologies, in future value, excluding incentives.",
            "units": "$"
          }
        },
        "PV": {
          "pv_name": {
            "type": "str",
            "description": "Site name/description"
          },
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
          "average_yearly_energy_produced_bau_kwh": {
            "type": "float",
            "description": "Average annual energy produced by the existing PV system over one year",
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
            "type": "list_of_float",
            "description": "Year one PV power production time series",
            "units": "kW"
          },
          "year_one_to_battery_series_kw": {
            "type": "list_of_float",
            "description": "Year one hourly time series of PV charging",
            "units": "kW"
          },
          "year_one_to_load_series_kw": {
            "type": "list_of_float",
            "description": "Year one hourly time series of PV serving load",
            "units": "kW"
          },
          "year_one_to_grid_series_kw": {
            "type": "list_of_float",
            "description": "Year one hourly time series of PV exporting to grid",
            "units": "kW"
          },
          "existing_pv_om_cost_us_dollars": {
            "type": "float",
            "description": "Lifetime O&M cost for existing PV system.",
            "units": "$"
          },
          "station_latitude": {
            "type": "float",
            "description": "The latitude of the station used for weather resource data",
            "units": "degrees"
          },
          "station_longitude": {
            "type": "float",
            "description": "The longitude of the station used for weather resource data",
            "units": "degrees"
          },
          "station_distance_km": {
            "type": "float",
            "description": "The distance from the weather resource station from the input site",
            "units": "km"
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
            "type": "list_of_float",
            "description": "Hourly wind resource",
            "units": "kW"
          },
          "year_one_to_battery_series_kw": {
            "type": "list_of_float",
            "description": "Year one wind to battery time series",
            "units": "kW"
          },
          "year_one_to_load_series_kw": {
            "type": "list_of_float",
            "description": "Year one wind to load time series",
            "units": "kW"
          },
          "year_one_to_grid_series_kw": {
            "type": "list_of_float",
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
            "type": "list_of_float",
            "description": "Year one hourly time series of battery serving load",
            "units": "kW"
          },
          "year_one_to_grid_series_kw": {
            "type": "list_of_float",
            "description": "Year one hourly time series of battery exporting to grid",
            "units": "kW"
          },
          "year_one_soc_series_pct": {
            "type": "list_of_float",
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
          "total_export_benefit_us_dollars": {
            "type": "float",
            "description": "Total export benefit cost over the lifecycle, after-tax",
            "units": "$"
          },
          "total_export_benefit_bau_us_dollars": {
            "type": "float",
            "description": "BAU export benefit cost over the lifecycle, after-tax",
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
          "year_one_export_benefit_bau_us_dollars": {
            "type": "float",
            "description": "BAU year one value of exported energy",
            "units": "$"
          },
          "year_one_energy_cost_series_us_dollars_per_kwh": {
            "type": "list_of_float",
            "description": "Year one hourly energy costs",
            "units": "$/kWh"
          },
          "year_one_demand_cost_series_us_dollars_per_kw": {
            "type": "list_of_float",
            "description": "Year one hourly demand costs",
            "units": "$/kW"
          },
          "year_one_to_load_series_kw": {
            "type": "list_of_float",
            "description": "Year one grid to load time series",
            "units": "kW"
          },
          "year_one_to_battery_series_kw": {
            "type": "list_of_float",
            "description": "Year one hourly time series of power from grid to battery",
            "units": "kW"
          },
          "year_one_energy_supplied_kwh": {
            "type": "float",
            "description": "Year one energy supplied from grid to load",
            "units": "kWh"
          },
          "year_one_energy_supplied_kwh_bau": {
            "type": "float",
            "description": "Year one energy supplied from grid to load in the business-as-usual scenario",
            "units": "kWh"
          }
        },
        "Generator": {
          "size_kw": {
            "type": "float",
            "description": "Optimal diesel generator system size",
            "units": "kW"
          },
          "fuel_used_gal": {
            "type": "float",
            "description": "Generator fuel used to meet critical load during grid outage.",
            "units": "US gallons"
          },
          "fuel_used_gal_bau": {
            "type": "float",
            "description": "Generator fuel used to meet critical load during grid outage in bau case.",
            "units": "US gallons"
          },
          "average_yearly_energy_produced_kwh": {
            "type": "float",
            "description": "Average annual energy produced by the diesel generator over one year",
            "units": "kWh"
          },
          "average_yearly_energy_exported_kwh": {
            "type": "float",
            "description": "Average annual energy exported by the diesel generator",
            "units": "kWh"
          },
          "year_one_energy_produced_kwh": {
            "type": "float",
            "description": "Year one energy produced by the diesel generator",
            "units": "kWh"
          },
          "year_one_power_production_series_kw": {
            "type": "list_of_float",
            "description": "Year one diesel generator power production time series",
            "units": "kW"
          },
          "year_one_to_battery_series_kw": {
            "type": "list_of_float",
            "description": "Year one hourly time series of diesel generator charging",
            "units": "kW"
          },
          "year_one_to_load_series_kw": {
            "type": "list_of_float",
            "description": "Year one generator to load time series.",
            "units": "kW"
          },
          "year_one_to_grid_series_kw": {
            "type": "list_of_float",
            "description": "Year one hourly time series of diesel generator exporting to grid",
            "units": "kW"
          },
          "existing_gen_total_fixed_om_cost_us_dollars": {
            "type": "float",
            "description": "Lifetime fixed O&M cost for existing diesel generator system in bau case.",
            "units": "$"
          },
          "existing_gen_total_variable_om_cost_us_dollars": {
            "type": "float",
            "description": "Lifetime variable (based on kwh produced) O&M cost for existing diesel generator system.",
            "units": "$"
          },
          "existing_gen_year_one_variable_om_cost_us_dollars": {
            "type": "float",
            "description": "Year one variable (based on kwh produced) O&M cost for existing diesel generator system.",
            "units": "$"
          },
          "total_fixed_om_cost_us_dollars": {
            "type": "float",
            "description": "Total lifecycle fixed (based on kW capacity) O&M cost for existing + recommended diesel generator system.",
            "units": "$"
          },
          "total_variable_om_cost_us_dollars": {
            "type": "float",
            "description": "Total lifecycle variable (based on kWh produced) O&M cost for existing + recommended diesel generator system",
            "units": "$"
          },
          "year_one_variable_om_cost_us_dollars": {
            "type": "float",
            "description": "Year one variable (based on kwh produced) O&M cost for existing + recommended diesel generator system",
            "units": "$"
          },
          "year_one_fixed_om_cost_us_dollars": {
            "type": "float",
            "description": "Year one fixed (based on kW capacity) O&M cost for existing + recommended diesel generator system.",
            "units": "$"
          },
          "total_fuel_cost_us_dollars": {
            "type": "float",
            "description": "Total lifecycle fuel cost for existing + newly recommended diesel generator system",
            "units": "$"
          },
          "year_one_fuel_cost_us_dollars": {
            "type": "float",
            "description": "Year one fuel cost for existing + newly recommended diesel generator system",
            "units": "$"
          },
          "existing_gen_total_fuel_cost_us_dollars": {
            "type": "float",
            "description": "Total lifecycle fuel cost for existing diesel generator system",
            "units": "$"
          },
          "existing_gen_year_one_fuel_cost_us_dollars": {
            "type": "float",
            "description": "Year one fuel cost for existing diesel generator system",
            "units": "$"
          }
        }
      }
    }
  }

var special_cases = {'PV': "<b>Note:</b> PV accepts a set of key value pairs or a list of key value pairs formatted accoring to this template to account for multiple roof aspects or siting considerations (i.e roof vs ground) each with their own costs and technoeconomic parameters.<br><br>"}


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

  return $("<td  style='word-break: break-word;'>").append($("<span>").html(text))
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
    attributeTable = $('<table>').prop({'class':'table table-striped doc-parameters'})
    
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
  var output = $('<h5 class="card-header" role="tab">')
  output.append($('<div>').html(
    $('<a data-toggle="collapse" data-parent="'+key_name+'Row" href="#'+key_name+'_collapsecontainer" aria-expanded="true" aria-controls="'+key_name+table_name+'_collapsecontainer">').html(key_name))
  )
  return output
}


var buildObjectRow = function(table_name, key_name, definition_dictionary, indent) {
  output = $('<div class="row">')
  output_col = $('<div class="col offset-'+indent.toString()+' col-'+(12-indent).toString()+'">')
  
  var object_panel = $('<div class="card" role="tablist" id="'+key_name+table_name+'_panel">')

  var objectTableNameRow = objectHeaderRow(table_name,key_name)
  object_panel.append(objectTableNameRow)

  var collapse_container = $('<div id="'+key_name+table_name+'_collapsecontainer" class="card-body" role="tabpanel" aria-labelledby="'+key_name+'_collapsebutton">')
  
  var objectSubTableAttributeRow = $('<div class="row">')

  var objectSubTableAttributeRow = $('<div class="row">')
  
  if (Object.keys(special_cases).includes(key_name)){
    var attributeRowSpecialCase = $('<div class="row">')
    attributeRowSpecialCase.append($('<div class="col col-12">').html(special_cases[key_name]))
    collapse_container.append(attributeRowSpecialCase)
  }
  
  var attributeRowName = $('<div class="col col-12">').html('<b><span class="text-secondary">Attributes</span></b><br><br>')
  objectSubTableAttributeRow.append(attributeRowName)
  collapse_container.append(objectSubTableAttributeRow)
  
  var attributeTable = buildAttributeTable(definition_dictionary,table_name)
  var attributeRowSpacer = $('<div class="col col-1">').attr('style','max-width:3%')
  var attributeRowContent = $('<div class="col col-11">').html(attributeTable)
  objectSubTableAttributeRow.append(attributeRowSpacer)
  objectSubTableAttributeRow.append(attributeRowContent)
  collapse_container.append(objectSubTableAttributeRow)


  var objectSubTableSubdirectoryRow = $('<div class="row">')
  var attributeRowName = $('<div class="col col-12">').html('<b><span class="text-secondary">Sub Directories</span></b><br><br>')
  objectSubTableSubdirectoryRow.append(attributeRowName)
  
  var subdirectoryRowContent= $('<div class="col offset-1 col-10">').html(subDirectoriesCell(definition_dictionary,table_name))
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
  try {
  var defKeys = Object.keys(input_definitions)
  var subdirectories = []
  } catch {
    debugger
  }
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
