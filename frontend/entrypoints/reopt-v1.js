var nested_input_definitions = {
  "Scenario": {
    "timeout_seconds": {
      "type": "int",
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
      "restrict_to": [1, 2, 4],
      "default": 1,
      "description": "The number of time steps per hour in the REopt simulation"
    },
    "webtool_uuid": {
      "type": "str",
      "description": "The unique ID of a scenario created by the REopt Lite Webtool. Note that this ID can be shared by several REopt Lite API Scenarios (for example when users select a 'Resilience' analysis more than one REopt API Scenario is created)."
    },
    "optimality_tolerance_bau": {
      "type": "float",
      "min": 1e-05,
      "max": 10.0,
      "default": 0.001,
      "description": "The threshold for the difference between the solution's objective value and the best possible value at which the solver terminates"
    },
    "optimality_tolerance_techs": {
      "type": "float",
      "min": 1e-05,
      "max": 10.0,
      "default": 0.001,
      "description": "The threshold for the difference between the solution's objective value and the best possible value at which the solver terminates"
    },
    "use_decomposition_model": {
      "type": "bool",
      "default": false,
      "description": "Toggle to use the decomposition model/algorithm"
    },
    "optimality_tolerance_decomp_subproblem": {
      "type": "float",
      "min": 1e-05,
      "max": 10.0,
      "default": 0.02,
      "description": "The threshold for the difference between the decomposition subproblem solution's objective value and the best possible value at which the solver terminates"
    },
    "timeout_decomp_subproblem_seconds": {
      "type": "int",
      "min": 1,
      "max": 10000,
      "default": 120,
      "description": "The number of seconds allowed before the decomposition subproblem optimization times out"
    },
    "add_soc_incentive": {
      "type": "bool",
      "default": true,
      "description": "If True, then a small incentive to keep the battery's state of charge high is added to the objective of the optimization."
    },
    "Site": {
      "latitude": {
        "type": "float",
        "min": -90.0,
        "max": 90.0,
        "required": true,
        "description": "The approximate latitude of the site in decimal degrees"
      },
      "longitude": {
        "type": "float",
        "min": -180.0,
        "max": 180.0,
        "required": true,
        "description": "The approximate longitude of the site in decimal degrees"
      },
      "address": {
        "type": "str",
        "description": "A user defined address as optional metadata (street address, city, state or zip code)"
      },
      "land_acres": {
        "type": "float",
        "min": 0.0,
        "max": 1000000.0,
        "description": "Land area in acres available for PV panel siting"
      },
      "roof_squarefeet": {
        "type": "float",
        "min": 0.0,
        "max": 1000000000.0,
        "description": "Area of roof in square feet available for PV siting"
      },
      "outdoor_air_temp_degF": {
        "type": "list_of_float",
        "default": [],
        "description": "Hourly outdoor air temperature (dry-bulb)."
      },
      "elevation_ft": {
        "type": "float",
        "min": 0.0,
        "max": 15000.0,
        "default": 0.0,
        "description": "Site elevation (above sea sevel), units of feet"
      },
      "Financial": {
        "om_cost_escalation_pct": {
          "type": "float",
          "min": -1.0,
          "max": 1.0,
          "default": 0.025,
          "description": "Annual nominal O&M cost escalation rate"
        },
        "escalation_pct": {
          "type": "float",
          "min": -1.0,
          "max": 1.0,
          "default": 0.023,
          "description": "Annual nominal utility electricity cost escalation rate"
        },
        "boiler_fuel_escalation_pct": {
          "type": "float",
          "min": -1.0,
          "max": 1.0,
          "default": 0.034,
          "description": "Annual nominal boiler fuel cost escalation rate"
        },
        "chp_fuel_escalation_pct": {
          "type": "float",
          "min": -1,
          "max": 1,
          "default": 0.034,
          "description": "Annual nominal chp fuel cost escalation rate"
        },
        "offtaker_tax_pct": {
          "type": "float",
          "min": 0.0,
          "max": 0.999,
          "default": 0.26,
          "description": "Host tax rate"
        },
        "offtaker_discount_pct": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 0.083,
          "description": "Nominal energy offtaker discount rate. In single ownership model the offtaker is also the generation owner."
        },
        "third_party_ownership": {
          "default": false,
          "type": "bool",
          "description": "Specify if ownership model is direct ownership or two party. In two party model the offtaker does not purcharse the generation technologies, but pays the generation owner for energy from the generator(s)."
        },
        "owner_tax_pct": {
          "type": "float",
          "min": 0,
          "max": 0.999,
          "default": 0.26,
          "description": "Generation owner tax rate. Used for two party financing model. In two party ownership model the offtaker does not own the generator(s)."
        },
        "owner_discount_pct": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
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
          "min": 0.0,
          "max": 1000000.0,
          "default": 100.0,
          "description": "Value placed on unmet site load during grid outages. Units are US dollars per unmet kilowatt-hour. The value of lost load (VoLL) is used to determine the avoided outage costs by multiplying VoLL [$/kWh] with the average number of hours that the critical load can be met by the energy system (determined by simulating outages occuring at every hour of the year), and multiplying by the mean critical load."
        },
        "microgrid_upgrade_cost_pct": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 0.3,
          "description": "Additional cost, in percent of non-islandable capital costs, to make a distributed energy system islandable from the grid and able to serve critical loads. Includes all upgrade costs such as additional laber and critical load panels."
        }
      },
      "LoadProfile": {
        "doe_reference_name": {
          "type": ["str", "list_of_str"],
          "restrict_to": ["FastFoodRest", "FullServiceRest", "Hospital", "LargeHotel", "LargeOffice", "MediumOffice", "MidriseApartment", "Outpatient", "PrimarySchool", "RetailStore", "SecondarySchool", "SmallHotel", "SmallOffice", "StripMall", "Supermarket", "Warehouse", "FlatLoad", "FlatLoad_24_5", "FlatLoad_16_7", "FlatLoad_16_5", "FlatLoad_8_7", "FlatLoad_8_5"],
          "replacement_sets": [
            ["loads_kw"],
            ["doe_reference_name", "monthly_totals_kwh"],
            ["annual_kwh", "doe_reference_name"],
            ["doe_reference_name"]
          ],
          "description": "Simulated load profile from DOE <a href='https://energy.gov/eere/buildings/commercial-reference-buildings' target='blank'>Commercial Reference Buildings</a>"
        },
        "annual_kwh": {
          "type": "float",
          "min": 1.0,
          "max": 100000000.0,
          "replacement_sets": [
            ["loads_kw"],
            ["doe_reference_name", "monthly_totals_kwh"],
            ["annual_kwh", "doe_reference_name"],
            ["doe_reference_name"]
          ],
          "depends_on": ["doe_reference_name"],
          "description": "Annual site energy consumption from electricity, in kWh, used to scale simulated default building load profile for the site's climate zone"
        },
        "percent_share": {
          "type": ["float", "list_of_float"],
          "min": 1.0,
          "max": 100.0,
          "default": 100.0,
          "description": "Percentage share of the types of building for creating hybrid simulated building and campus profiles."
        },
        "year": {
          "type": "int",
          "min": 1,
          "max": 9999,
          "default": 2020,
          "description": "Year of Custom Load Profile. If a custom load profile is uploaded via the loads_kw parameter, it is important that this year correlates with the load profile so that weekdays/weekends are determined correctly for the utility rate tariff. If a DOE Reference Building profile (aka 'simulated' profile) is used, the year is set to 2017 since the DOE profiles start on a Sunday."
        },
        "monthly_totals_kwh": {
          "type": "list_of_float",
          "min": 0.0,
          "max": 100000000.0,
          "replacement_sets": [
            ["loads_kw"],
            ["doe_reference_name", "monthly_totals_kwh"],
            ["annual_kwh", "doe_reference_name"],
            ["doe_reference_name"]
          ],
          "depends_on": ["doe_reference_name"],
          "description": "Monthly site energy consumption from electricity series (an array 12 entries long), in kWh, used to scale simulated default building load profile for the site's climate zone"
        },
        "loads_kw": {
          "type": "list_of_float",
          "replacement_sets": [
            ["loads_kw"],
            ["doe_reference_name", "monthly_totals_kwh"],
            ["annual_kwh", "doe_reference_name"],
            ["doe_reference_name"]
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
          "depends_on": ["outage_end_hour"],
          "description": "Hour of year that grid outage starts. Must be less than outage_end."
        },
        "outage_end_hour": {
          "type": "int",
          "min": 0,
          "max": 8759,
          "depends_on": ["outage_start_hour"],
          "description": "Hour of year that grid outage ends. Must be greater than outage_start."
        },
        "outage_start_time_step": {
          "type": "int",
          "min": 1,
          "max": 35040,
          "depends_on": ["outage_end_time_step"],
          "description": "Time step that grid outage starts. Must be less than outage_end."
        },
        "outage_end_time_step": {
          "type": "int",
          "min": 1,
          "max": 35040,
          "depends_on": ["outage_start_time_step"],
          "description": "Time step that grid outage ends. Must be greater than outage_start."
        },
        "critical_load_pct": {
          "type": "float",
          "min": 0.0,
          "max": 2.0,
          "default": 0.5,
          "description": "Critical load factor is multiplied by the typical load to determine the critical load that must be met during an outage. Value must be between zero and one, inclusive."
        },
        "outage_is_major_event": {
          "type": "bool",
          "default": true,
          "description": "Boolean value for if outage is a major event, which affects the avoided_outage_costs_us_dollars. If True, the avoided outage costs are calculated for a single outage occurring in the first year of the analysis_years. If False, the outage event is assumed to be an average outage event that occurs every year of the analysis period. In the latter case, the avoided outage costs for one year are escalated and discounted using the escalation_pct and offtaker_discount_pct to account for an annually recurring outage. (Average outage durations for certain utility service areas can be estimated using statistics reported on EIA form 861.)"
        }
      },
      "LoadProfileBoilerFuel": {
        "doe_reference_name": {
          "type": ["str", "list_of_str"],
          "restrict_to": ["FastFoodRest", "FullServiceRest", "Hospital", "LargeHotel", "LargeOffice", "MediumOffice", "MidriseApartment", "Outpatient", "PrimarySchool", "RetailStore", "SecondarySchool", "SmallHotel", "SmallOffice", "StripMall", "Supermarket", "Warehouse", "FlatLoad", "FlatLoad_24_5", "FlatLoad_16_7", "FlatLoad_16_5", "FlatLoad_8_7", "FlatLoad_8_5"],
          "description": "Building type to use in selecting a simulated load profile from DOE <a href='https://energy.gov/eere/buildings/commercial-reference-buildings' target='blank'>Commercial Reference Buildings</a>. By default, the doe_reference_name of the LoadProfile is used."
        },
        "annual_mmbtu": {
          "type": "float",
          "min": 0.0,
          "max": 100000000.0,
          "description": "Annual electric chiller electric consumption, in mmbtu, used to scale simulated default boiler load profile for the site's climate zone"
        },
        "monthly_mmbtu": {
          "type": "list_of_float",
          "min": 0.0,
          "max": 100000000.0,
          "description": "Monthly boiler energy consumption series (an array 12 entries long), in mmbtu, used to scale simulated default electric boiler load profile for the site's climate zone"
        },
        "loads_mmbtu_per_hour": {
          "type": "list_of_float",
          "description": "Typical boiler fuel load for all hours in one year."
        },
        "percent_share": {
          "type": ["float", "list_of_float"],
          "min": 1.0,
          "max": 100.0,
          "description": "Percentage share of the types of building for creating hybrid simulated building and campus profiles."
        }
      },
      "LoadProfileChillerThermal": {
        "doe_reference_name": {
          "type": ["str", "list_of_str"],
          "restrict_to": ["FastFoodRest", "FullServiceRest", "Hospital", "LargeHotel", "LargeOffice", "MediumOffice", "MidriseApartment", "Outpatient", "PrimarySchool", "RetailStore", "SecondarySchool", "SmallHotel", "SmallOffice", "StripMall", "Supermarket", "Warehouse", "FlatLoad", "FlatLoad_24_5", "FlatLoad_16_7", "FlatLoad_16_5", "FlatLoad_8_7", "FlatLoad_8_5"],
          "description": "Building type to use in selecting a simulated load profile from DOE <a href='https://energy.gov/eere/buildings/commercial-reference-buildings' target='blank'>Commercial Reference Buildings</a>. By default, the doe_reference_name of the LoadProfile is used."
        },
        "loads_ton": {
          "type": "list_of_float",
          "description": "Typical electric chiller load for all hours in one year."
        },
        "annual_tonhour": {
          "type": "float",
          "min": 0.0,
          "max": 100000000.0,
          "description": "Annual electric chiller energy consumption, in ton-hours, used to scale simulated default electric chiller load profile for the site's climate zone"
        },
        "monthly_tonhour": {
          "type": "list_of_float",
          "min": 0.0,
          "max": 100000000.0,
          "description": "Monthly electric chiller energy consumption series (an array 12 entries long), in ton-hours, used to scale simulated default electric chiller load profile for the site's climate zone"
        },
        "annual_fraction": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "description": "Annual electric chiller energy consumption scalar (i.e. fraction of total electric load, used to scale simulated default electric chiller load profile for the site's climate zone"
        },
        "monthly_fraction": {
          "type": "list_of_float",
          "min": 0.0,
          "max": 100000000.0,
          "description": "Monthly electric chiller energy consumption scalar series (i.e. 12 fractions of total electric load by month), used to scale simulated default electric chiller load profile for the site's climate zone."
        },
        "loads_fraction": {
          "type": "list_of_float",
          "min": 0.0,
          "max": 100000000.0,
          "description": "Typical electric chiller load proporion of electric load series (unit is a percent) for all time steps in one year."
        },
        "percent_share": {
          "type": ["float", "list_of_float"],
          "min": 1.0,
          "max": 100.0,
          "description": "Percentage share of the types of building for creating hybrid simulated building and campus profiles."
        },
        "chiller_cop": {
          "type": "float",
          "min:": 0.0,
          "max:": 20.0,
          "description": "Existing electric chiller system coefficient of performance - conversion of electricity to usable cooling thermal energy"
        }
      },
      "ElectricTariff": {
        "urdb_utility_name": {
          "type": "str",
          "replacement_sets": [
            ["urdb_response"],
            ["blended_monthly_demand_charges_us_dollars_per_kw", "blended_monthly_rates_us_dollars_per_kwh"],
            ["blended_annual_demand_charges_us_dollars_per_kw", "blended_annual_rates_us_dollars_per_kwh"],
            ["urdb_label"],
            ["urdb_utility_name", "urdb_rate_name"],
            ["tou_energy_rates_us_dollars_per_kwh"]
          ],
          "depends_on": ["urdb_rate_name"],
          "description": "Name of Utility from  <a href='https://openei.org/wiki/Utility_Rate_Database' target='blank'>Utility Rate Database</a>"
        },
        "urdb_rate_name": {
          "type": "str",
          "replacement_sets": [
            ["urdb_response"],
            ["blended_monthly_demand_charges_us_dollars_per_kw", "blended_monthly_rates_us_dollars_per_kwh"],
            ["blended_annual_demand_charges_us_dollars_per_kw", "blended_annual_rates_us_dollars_per_kwh"],
            ["urdb_label"],
            ["urdb_utility_name", "urdb_rate_name"],
            ["tou_energy_rates_us_dollars_per_kwh"]
          ],
          "depends_on": ["urdb_utility_name"],
          "description": "Name of utility rate from  <a href='https://openei.org/wiki/Utility_Rate_Database' target='blank'>Utility Rate Database</a>"
        },
        "add_blended_rates_to_urdb_rate": {
          "type": "bool",
          "default": false,
          "description": "Set to 'true' to add the monthly blended energy rates and demand charges to the URDB rate schedule. Otherwise, blended rates will only be considered if a URDB rate is not provided. "
        },
        "blended_monthly_rates_us_dollars_per_kwh": {
          "type": "list_of_float",
          "replacement_sets": [
            ["urdb_response"],
            ["blended_monthly_demand_charges_us_dollars_per_kw", "blended_monthly_rates_us_dollars_per_kwh"],
            ["blended_annual_demand_charges_us_dollars_per_kw", "blended_annual_rates_us_dollars_per_kwh"],
            ["urdb_label"],
            ["urdb_utility_name", "urdb_rate_name"],
            ["tou_energy_rates_us_dollars_per_kwh"]
          ],
          "depends_on": ["blended_monthly_demand_charges_us_dollars_per_kw"],
          "description": "Array (length of 12) of blended energy rates (total monthly energy in kWh divided by monthly cost in $)"
        },
        "blended_monthly_demand_charges_us_dollars_per_kw": {
          "type": "list_of_float",
          "replacement_sets": [
            ["urdb_response"],
            ["blended_monthly_demand_charges_us_dollars_per_kw", "blended_monthly_rates_us_dollars_per_kwh"],
            ["blended_annual_demand_charges_us_dollars_per_kw", "blended_annual_rates_us_dollars_per_kwh"],
            ["urdb_label"],
            ["urdb_utility_name", "urdb_rate_name"],
            ["tou_energy_rates_us_dollars_per_kwh"]
          ],
          "depends_on": ["blended_monthly_rates_us_dollars_per_kwh"],
          "description": "Array (length of 12) of blended demand charges (demand charge cost in $ divided by monthly peak demand in kW)"
        },
        "blended_annual_rates_us_dollars_per_kwh": {
          "type": "float",
          "replacement_sets": [
            ["urdb_response"],
            ["blended_monthly_demand_charges_us_dollars_per_kw", "blended_monthly_rates_us_dollars_per_kwh"],
            ["blended_annual_demand_charges_us_dollars_per_kw", "blended_annual_rates_us_dollars_per_kwh"],
            ["urdb_label"],
            ["urdb_utility_name", "urdb_rate_name"],
            ["tou_energy_rates_us_dollars_per_kwh"]
          ],
          "depends_on": ["blended_annual_demand_charges_us_dollars_per_kw"],
          "description": "Annual blended energy rate (total annual energy in kWh divided by annual cost in $)"
        },
        "blended_annual_demand_charges_us_dollars_per_kw": {
          "type": "float",
          "replacement_sets": [
            ["urdb_response"],
            ["blended_monthly_demand_charges_us_dollars_per_kw", "blended_monthly_rates_us_dollars_per_kwh"],
            ["blended_annual_demand_charges_us_dollars_per_kw", "blended_annual_rates_us_dollars_per_kwh"],
            ["urdb_label"],
            ["urdb_utility_name", "urdb_rate_name"],
            ["tou_energy_rates_us_dollars_per_kwh"]
          ],
          "depends_on": ["blended_annual_rates_us_dollars_per_kwh"],
          "description": "Annual blended demand rates (annual demand charge cost in $ divided by annual peak demand in kW)"
        },
        "add_tou_energy_rates_to_urdb_rate": {
          "type": "bool",
          "default": false,
          "description": "Set to 'true' to add the tou  energy rates to the URDB rate schedule. Otherwise, tou energy rates will only be considered if a URDB rate is not provided. "
        },
        "tou_energy_rates_us_dollars_per_kwh": {
          "type": "list_of_float",
          "replacement_sets": [
            ["urdb_response"],
            ["blended_monthly_demand_charges_us_dollars_per_kw", "blended_monthly_rates_us_dollars_per_kwh"],
            ["blended_annual_demand_charges_us_dollars_per_kw", "blended_annual_rates_us_dollars_per_kwh"],
            ["urdb_label"],
            ["urdb_utility_name", "urdb_rate_name"],
            ["tou_energy_rates_us_dollars_per_kwh"]
          ],
          "description": "Time-of-use energy rates, provided by user. Must be an array with length equal to number of timesteps per year. Hourly or 15 minute rates allowed."
        },
        "net_metering_limit_kw": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 0.0,
          "description": "Upper limit on the total capacity of technologies that can participate in net metering agreement."
        },
        "interconnection_limit_kw": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 100000000.0,
          "description": "Limit on system capacity size that can be interconnected to the grid"
        },
        "wholesale_rate_us_dollars_per_kwh": {
          "type": ["float", "list_of_float"],
          "min": 0.0,
          "default": 0.0,
          "description": "Price of electricity sold back to the grid in absence of net metering or above net metering limit. The total annual kWh that can be compensated under this rate is restricted to the total annual site-load in kWh. Can be a scalar value, which applies for all-time, or an array with time-sensitive values. If an array is input then it must have a length of 8760, 17520, or 35040. The inputed array values are up/down-sampled using mean values to match the Scenario time_steps_per_hour."
        },
        "wholesale_rate_above_site_load_us_dollars_per_kwh": {
          "type": ["float", "list_of_float"],
          "min": 0.0,
          "default": 0.0,
          "description": "Price of electricity sold back to the grid above the site load, regardless of net metering.  Can be a scalar value, which applies for all-time, or an array with time-sensitive values. If an array is input then it must have a length of 8760, 17520, or 35040. The inputed array values are up/down-sampled using mean values to match the Scenario time_steps_per_hour."
        },
        "urdb_response": {
          "type": "dict",
          "replacement_sets": [
            ["urdb_response"],
            ["blended_monthly_demand_charges_us_dollars_per_kw", "blended_monthly_rates_us_dollars_per_kwh"],
            ["blended_annual_demand_charges_us_dollars_per_kw", "blended_annual_rates_us_dollars_per_kwh"],
            ["urdb_label"],
            ["urdb_utility_name", "urdb_rate_name"],
            ["tou_energy_rates_us_dollars_per_kwh"]
          ],
          "description": "Utility rate structure from <a href='https://openei.org/services/doc/rest/util_rates/?version=3' target='blank'>Utility Rate Database API</a>"
        },
        "urdb_label": {
          "type": "str",
          "replacement_sets": [
            ["urdb_response"],
            ["blended_monthly_demand_charges_us_dollars_per_kw", "blended_monthly_rates_us_dollars_per_kwh"],
            ["blended_annual_demand_charges_us_dollars_per_kw", "blended_annual_rates_us_dollars_per_kwh"],
            ["urdb_label"],
            ["urdb_utility_name", "urdb_rate_name"],
            ["tou_energy_rates_us_dollars_per_kwh"]
          ],
          "description": "Label attribute of utility rate structure from <a href='https://openei.org/services/doc/rest/util_rates/?version=3' target='blank'>Utility Rate Database API</a>"
        },
        "emissions_factor_series_lb_CO2_per_kwh": {
          "type": ["list_of_float", "float"],
          "description": "Carbon Dioxide emissions factor over all hours in one year. Can be provided as either a single constant fraction that will be applied across all timesteps, or an annual timeseries array at an hourly (8,760 samples), 30 minute (17,520 samples), or 15 minute (35,040 samples) resolution."
        },
        "chp_standby_rate_us_dollars_per_kw_per_month": {
          "type": "float",
          "min": 0.0,
          "max": 1000.0,
          "default": 0.0,
          "description": "Standby rate charged to CHP based on CHP electric power size"
        },
        "chp_does_not_reduce_demand_charges": {
          "type": "bool",
          "default": false,
          "description": "Boolean indicator if CHP does not reduce demand charges"
        }
      },
      "FuelTariff": {
        "existing_boiler_fuel_type": {
          "type": "str",
          "default": "natural_gas",
          "restrict_to": ["natural_gas", "landfill_bio_gas", "propane", "diesel_oil"],
          "description": "Boiler fuel type one of (natural_gas, landfill_bio_gas, propane, diesel_oil)"
        },
        "boiler_fuel_blended_annual_rates_us_dollars_per_mmbtu": {
          "type": "float",
          "default": 0.0,
          "description": "Single/scalar blended fuel rate for the entire year"
        },
        "boiler_fuel_blended_monthly_rates_us_dollars_per_mmbtu": {
          "type": "list_of_float",
          "default": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
          "description": "Array (length of 12) of blended fuel rates (total monthly energy in mmbtu divided by monthly cost in $)"
        },
        "chp_fuel_type": {
          "type": "str",
          "default": "natural_gas",
          "restrict_to": ["natural_gas", "landfill_bio_gas", "propane", "diesel_oil"],
          "description": "Boiler fuel type (natural_gas, landfill_bio_gas, propane, diesel_oil)"
        },
        "chp_fuel_blended_annual_rates_us_dollars_per_mmbtu": {
          "type": "float",
          "default": 0.0,
          "description": "Single/scalar blended fuel rate for the entire year"
        },
        "chp_fuel_blended_monthly_rates_us_dollars_per_mmbtu": {
          "type": "list_of_float",
          "default": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
          "description": "Array (length of 12) of blended fuel rates (total monthly energy in mmbtu divided by monthly cost in $)"
        }
      },
      "Wind": {
        "size_class": {
          "type": "str",
          "restrict_to": ["residential", "commercial", "medium", "large", null],
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
          "min": 0.0,
          "max": 1000000000.0,
          "default": 0.0,
          "description": "Minimum wind power capacity constraint for optimization"
        },
        "max_kw": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 0.0,
          "description": "Maximum wind power capacity constraint for optimization. Set to zero to disable Wind. Enabled by default"
        },
        "installed_cost_us_dollars_per_kw": {
          "type": "float",
          "min": 0.0,
          "max": 100000.0,
          "default": 3013.0,
          "description": "Total upfront installed costs in US dollars/kW. Determined by size_class. For the 'large' (>2MW) size_class the cost is $1,874/kW. For the 'medium commercial' size_class the cost is $4,111/kW. For the 'small commercial' size_class the cost is $4,989/kW and for the 'residential' size_class the cost is $10,792/kW "
        },
        "om_cost_us_dollars_per_kw": {
          "type": "float",
          "min": 0.0,
          "max": 1000.0,
          "default": 40.0,
          "description": "Total annual operations and maintenance costs for wind"
        },
        "macrs_option_years": {
          "type": "int",
          "restrict_to": [0, 5, 7],
          "default": 5,
          "description": "MACRS schedule for financial analysis. Set to zero to disable"
        },
        "macrs_bonus_pct": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 0.0,
          "description": "Percent of upfront project costs to depreciate under MACRS"
        },
        "macrs_itc_reduction": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5,
          "description": "Percent of the full ITC that depreciable basis is reduced by"
        },
        "federal_itc_pct": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 0.26,
          "description": "Percent federal capital cost incentive"
        },
        "state_ibi_pct": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 0.0,
          "description": "Percent of upfront project costs to discount under state investment based incentives"
        },
        "state_ibi_max_us_dollars": {
          "type": "float",
          "min": 0.0,
          "max": 10000000000.0,
          "default": 10000000000.0,
          "description": "Maximum rebate allowed under state investment based incentives"
        },
        "utility_ibi_pct": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 0.0,
          "description": "Percent of upfront project costs to discount under utility investment based incentives"
        },
        "utility_ibi_max_us_dollars": {
          "type": "float",
          "min": 0.0,
          "max": 10000000000.0,
          "default": 10000000000.0,
          "description": "Maximum rebate allowed under utility investment based incentives"
        },
        "federal_rebate_us_dollars_per_kw": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 0.0,
          "description": "Federal rebate based on installed capacity"
        },
        "state_rebate_us_dollars_per_kw": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 0.0,
          "description": "State rebates based on installed capacity"
        },
        "state_rebate_max_us_dollars": {
          "type": "float",
          "min": 0.0,
          "max": 10000000000.0,
          "default": 10000000000.0,
          "description": "Maximum rebate allowed under state rebates"
        },
        "utility_rebate_us_dollars_per_kw": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 0.0,
          "description": "Utility rebates based on installed capacity"
        },
        "utility_rebate_max_us_dollars": {
          "type": "float",
          "min": 0.0,
          "max": 10000000000.0,
          "default": 10000000000.0,
          "description": "Maximum rebate allowed under utility rebates"
        },
        "pbi_us_dollars_per_kwh": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 0.0,
          "description": "Production-based incentive value"
        },
        "pbi_max_us_dollars": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 1000000000.0,
          "description": "Maximum rebate allowed under utility production-based incentives"
        },
        "pbi_years": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 1,
          "description": "Duration of production-based incentives from installation date"
        },
        "pbi_system_max_kw": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 1000000000.0,
          "description": "Maximum system size for which production-based incentives apply"
        },
        "prod_factor_series_kw": {
          "type": "list_of_float",
          "description": "Optional user-defined production factors. Entries have units of kWh/kW, representing the energy (kWh) output of a 1 kW system in each time step. Must be hourly (8,760 samples), 30 minute (17,520 samples), or 15 minute (35,040 samples)."
        },
        "can_net_meter": {
          "type": "bool",
          "default": true,
          "description": "True/False for if technology has option to participate in net metering agreement with utility. Note that a technology can only participate in either net metering or wholesale rates (not both)."
        },
        "can_wholesale": {
          "type": "bool",
          "default": true,
          "description": "True/False for if technology has option to export energy that is compensated at the wholesale_rate_us_dollars_per_kwh. Note that a technology can only participate in either net metering or wholesale rates (not both)."
        },
        "can_export_beyond_site_load": {
          "type": "bool",
          "default": true,
          "description": "True/False for if technology can export energy beyond the annual site load (and be compensated for that energy at the wholesale_rate_above_site_load_us_dollars_per_kwh)."
        },
        "can_curtail": {
          "type": "bool",
          "default": true,
          "description": "True/False for if technology can curtail energy produced."
        }
      },
      "PV": {
        "pv_name": {
          "type": "str",
          "description": "Site name/description"
        },
        "existing_kw": {
          "type": "float",
          "min": 0.0,
          "max": 100000.0,
          "default": 0.0,
          "description": "Existing PV size"
        },
        "min_kw": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 0.0,
          "description": "Minimum PV size constraint for optimization"
        },
        "max_kw": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 1000000000.0,
          "description": "Maximum PV size constraint for optimization. Set to zero to disable PV"
        },
        "installed_cost_us_dollars_per_kw": {
          "type": "float",
          "min": 0.0,
          "max": 100000.0,
          "default": 1600.0,
          "description": "Installed PV cost in $/kW"
        },
        "om_cost_us_dollars_per_kw": {
          "type": "float",
          "min": 0.0,
          "max": 1000.0,
          "default": 16.0,
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
          "min": 0.0,
          "max": 1.0,
          "default": 1.0,
          "description": "Percent of upfront project costs to depreciate in year one in addition to scheduled depreciation"
        },
        "macrs_itc_reduction": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5,
          "description": "Percent of the ITC value by which depreciable basis is reduced"
        },
        "federal_itc_pct": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 0.26,
          "description": "Percentage of capital costs that are credited towards federal taxes"
        },
        "state_ibi_pct": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 0.0,
          "description": "Percentage of capital costs offset by state incentives"
        },
        "state_ibi_max_us_dollars": {
          "type": "float",
          "min": 0.0,
          "max": 10000000000.0,
          "default": 10000000000.0,
          "description": "Maximum dollar value of state percentage-based capital cost incentive"
        },
        "utility_ibi_pct": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 0.0,
          "description": "Percentage of capital costs offset by utility incentives"
        },
        "utility_ibi_max_us_dollars": {
          "type": "float",
          "min": 0.0,
          "max": 10000000000.0,
          "default": 10000000000.0,
          "description": "Maximum dollar value of utility percentage-based capital cost incentive"
        },
        "federal_rebate_us_dollars_per_kw": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 0.0,
          "description": "Federal rebates based on installed capacity"
        },
        "state_rebate_us_dollars_per_kw": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 0.0,
          "description": "State rebate based on installed capacity"
        },
        "state_rebate_max_us_dollars": {
          "type": "float",
          "min": 0.0,
          "max": 10000000000.0,
          "default": 10000000000.0,
          "description": "Maximum state rebate"
        },
        "utility_rebate_us_dollars_per_kw": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 0.0,
          "description": "Utility rebate based on installed capacity"
        },
        "utility_rebate_max_us_dollars": {
          "type": "float",
          "min": 0.0,
          "max": 10000000000.0,
          "default": 10000000000.0,
          "description": "Maximum utility rebate"
        },
        "pbi_us_dollars_per_kwh": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 0.0,
          "description": "Production-based incentive value"
        },
        "pbi_max_us_dollars": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 1000000000.0,
          "description": "Maximum annual value in present terms of production-based incentives"
        },
        "pbi_years": {
          "type": "float",
          "min": 0.0,
          "max": 100.0,
          "default": 1.0,
          "description": "Duration of production-based incentives from installation date"
        },
        "pbi_system_max_kw": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 1000000000.0,
          "description": "Maximum system size eligible for production-based incentive"
        },
        "degradation_pct": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 0.005,
          "description": "Annual rate of degradation in PV energy production"
        },
        "azimuth": {
          "type": "float",
          "min": 0.0,
          "max": 360.0,
          "default": 180.0,
          "description": "PV azimuth angle"
        },
        "losses": {
          "type": "float",
          "min": 0.0,
          "max": 0.99,
          "default": 0.14,
          "description": "PV system performance losses"
        },
        "array_type": {
          "type": "int",
          "restrict_to": [0, 1, 2, 3, 4],
          "default": 1,
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
          "min": 0.0,
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
          "min": 0.0,
          "default": 0.0,
          "description": "Radius, in miles, to use when searching for the closest climate data station. Use zero to use the closest station regardless of the distance"
        },
        "tilt": {
          "type": "float",
          "min": 0.0,
          "max": 90.0,
          "default": 0.537,
          "description": "PV system tilt"
        },
        "location": {
          "type": "str",
          "restrict_to": ["roof", "ground", "both"],
          "default": "both",
          "description": "Where PV can be deployed. One of [roof, ground, both] with default as both"
        },
        "prod_factor_series_kw": {
          "type": "list_of_float",
          "description": "Optional user-defined production factors. Entries have units of kWh/kW, representing the energy (kWh) output of a 1 kW system in each time step. Must be hourly (8,760 samples), 30 minute (17,520 samples), or 15 minute (35,040 samples)."
        },
        "can_net_meter": {
          "type": "bool",
          "default": true,
          "description": "True/False for if technology has option to participate in net metering agreement with utility. Note that a technology can only participate in either net metering or wholesale rates (not both)."
        },
        "can_wholesale": {
          "type": "bool",
          "default": true,
          "description": "True/False for if technology has option to export energy that is compensated at the wholesale_rate_us_dollars_per_kwh. Note that a technology can only participate in either net metering or wholesale rates (not both)."
        },
        "can_export_beyond_site_load": {
          "type": "bool",
          "default": true,
          "description": "True/False for if technology can export energy beyond the annual site load (and be compensated for that energy at the wholesale_rate_above_site_load_us_dollars_per_kwh)."
        },
        "can_curtail": {
          "type": "bool",
          "default": true,
          "description": "True/False for if technology can curtail energy produced."
        }
      },
      "Storage": {
        "min_kw": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 0.0,
          "description": "Minimum battery power capacity size constraint for optimization"
        },
        "max_kw": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 1000000.0,
          "description": "Maximum battery power capacity size constraint for optimization. Set to zero to disable storage"
        },
        "min_kwh": {
          "type": "float",
          "min": 0.0,
          "default": 0.0,
          "description": "Minimum battery energy storage capacity constraint for optimization"
        },
        "max_kwh": {
          "type": "float",
          "min": 0.0,
          "default": 1000000.0,
          "description": "Maximum battery energy storage capacity constraint for optimization. Set to zero to disable Storage"
        },
        "internal_efficiency_pct": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 0.975,
          "description": "Battery inherent efficiency independent of inverter and rectifier"
        },
        "inverter_efficiency_pct": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 0.96,
          "description": "Battery inverter efficiency"
        },
        "rectifier_efficiency_pct": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 0.96,
          "description": "Battery rectifier efficiency"
        },
        "soc_min_pct": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 0.2,
          "description": "Minimum allowable battery state of charge"
        },
        "soc_init_pct": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
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
          "min": 0.0,
          "max": 10000.0,
          "default": 840.0,
          "description": "Total upfront battery power capacity costs (e.g. inverter and balance of power systems)"
        },
        "installed_cost_us_dollars_per_kwh": {
          "type": "float",
          "min": 0.0,
          "max": 10000.0,
          "default": 420.0,
          "description": "Total upfront battery costs"
        },
        "replace_cost_us_dollars_per_kw": {
          "type": "float",
          "min": 0.0,
          "max": 10000.0,
          "default": 410.0,
          "description": "Battery power capacity replacement cost at time of replacement year"
        },
        "replace_cost_us_dollars_per_kwh": {
          "type": "float",
          "min": 0.0,
          "max": 10000.0,
          "default": 200.0,
          "description": "Battery energy capacity replacement cost at time of replacement year"
        },
        "inverter_replacement_year": {
          "type": "float",
          "min": 0.0,
          "max": 75,
          "default": 10.0,
          "description": "Number of years from start of analysis period to replace inverter"
        },
        "battery_replacement_year": {
          "type": "float",
          "min": 0.0,
          "max": 75,
          "default": 10.0,
          "description": "Number of years from start of analysis period to replace battery"
        },
        "macrs_option_years": {
          "type": "int",
          "restrict_to": [0, 5, 7],
          "default": 7.0,
          "description": "Duration over which accelerated depreciation will occur. Set to zero by default"
        },
        "macrs_bonus_pct": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 1.0,
          "description": "Percent of upfront project costs to depreciate under MACRS in year one in addtion to scheduled depreciation"
        },
        "macrs_itc_reduction": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5,
          "description": "Percent of the ITC value by which depreciable basis is reduced"
        },
        "total_itc_pct": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 0.0,
          "description": "Total investment tax credit in percent applied toward capital costs"
        },
        "total_rebate_us_dollars_per_kw": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 0.0,
          "description": "Rebate based on installed power capacity"
        },
        "total_rebate_us_dollars_per_kwh": {
          "type": "float",
          "min": 0,
          "max": 1000000000.0,
          "default": 0,
          "description": "Rebate based on installed energy capacity"
        }
      },
      "Generator": {
        "existing_kw": {
          "type": "float",
          "min": 0.0,
          "max": 100000.0,
          "default": 0.0,
          "description": "Existing diesel generator size"
        },
        "min_kw": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 0.0,
          "description": "Minimum diesel generator size constraint for optimization"
        },
        "max_kw": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 1000000000.0,
          "description": "Maximum diesel generator size constraint for optimization. Set to zero to disable gen"
        },
        "installed_cost_us_dollars_per_kw": {
          "type": "float",
          "min": 0.0,
          "max": 100000.0,
          "default": 500.0,
          "description": "Installed diesel generator cost in $/kW"
        },
        "om_cost_us_dollars_per_kw": {
          "type": "float",
          "min": 0.0,
          "max": 1000.0,
          "default": 10.0,
          "description": "Annual diesel generator fixed operations and maintenance costs in $/kW"
        },
        "om_cost_us_dollars_per_kwh": {
          "type": "float",
          "min": 0.0,
          "max": 1000.0,
          "default": 0.0,
          "description": "diesel generator per unit production (variable) operations and maintenance costs in $/kWh"
        },
        "diesel_fuel_cost_us_dollars_per_gallon": {
          "type": "float",
          "min": 0.0,
          "max": 100.0,
          "default": 3.0,
          "description": "diesel cost in $/gallon"
        },
        "fuel_slope_gal_per_kwh": {
          "type": "float",
          "min": 0.0,
          "max": 10,
          "default": 0.076,
          "description": "Generator fuel burn rate in gallons/kWh."
        },
        "fuel_intercept_gal_per_hr": {
          "type": "float",
          "min": 0.0,
          "max": 10,
          "default": 0.0,
          "description": "Generator fuel consumption curve y-intercept in gallons per hour."
        },
        "fuel_avail_gal": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 660.0,
          "description": "On-site generator fuel available in gallons."
        },
        "min_turn_down_pct": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 0.0,
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
          "restrict_to": [0, 5, 7],
          "default": 0,
          "description": "MACRS schedule for financial analysis. Set to zero to disable"
        },
        "macrs_bonus_pct": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 1.0,
          "description": "Percent of upfront project costs to depreciate under MACRS"
        },
        "macrs_itc_reduction": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 0.0,
          "description": "Percent of the full ITC that depreciable basis is reduced by"
        },
        "federal_itc_pct": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 0.0,
          "description": "Percent federal capital cost incentive"
        },
        "state_ibi_pct": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 0.0,
          "description": "Percent of upfront project costs to discount under state investment based incentives"
        },
        "state_ibi_max_us_dollars": {
          "type": "float",
          "min": 0.0,
          "max": 10000000000.0,
          "default": 0.0,
          "description": "Maximum rebate allowed under state investment based incentives"
        },
        "utility_ibi_pct": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 0.0,
          "description": "Percent of upfront project costs to discount under utility investment based incentives"
        },
        "utility_ibi_max_us_dollars": {
          "type": "float",
          "min": 0.0,
          "max": 10000000000.0,
          "default": 0.0,
          "description": "Maximum rebate allowed under utility investment based incentives"
        },
        "federal_rebate_us_dollars_per_kw": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 0.0,
          "description": "Federal rebate based on installed capacity"
        },
        "state_rebate_us_dollars_per_kw": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 0.0,
          "description": "State rebates based on installed capacity"
        },
        "state_rebate_max_us_dollars": {
          "type": "float",
          "min": 0.0,
          "max": 10000000000.0,
          "default": 0.0,
          "description": "Maximum rebate allowed under state rebates"
        },
        "utility_rebate_us_dollars_per_kw": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 0.0,
          "description": "Utility rebates based on installed capacity"
        },
        "utility_rebate_max_us_dollars": {
          "type": "float",
          "min": 0.0,
          "max": 10000000000.0,
          "default": 0.0,
          "description": "Maximum rebate allowed under utility rebates"
        },
        "pbi_us_dollars_per_kwh": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 0.0,
          "description": "Production-based incentive value"
        },
        "pbi_max_us_dollars": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 0.0,
          "description": "Maximum rebate allowed under utility production-based incentives"
        },
        "pbi_years": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 0.0,
          "description": "Duration of production-based incentives from installation date"
        },
        "pbi_system_max_kw": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 0.0,
          "description": "Maximum system size for which production-based incentives apply"
        },
        "emissions_factor_lb_CO2_per_gal": {
          "type": "float",
          "description": "Pounds of carbon dioxide emitted per gallon of fuel burned"
        },
        "can_net_meter": {
          "type": "bool",
          "default": false,
          "description": "True/False for if technology has option to participate in net metering agreement with utility. Note that a technology can only participate in either net metering or wholesale rates (not both)."
        },
        "can_wholesale": {
          "type": "bool",
          "default": false,
          "description": "True/False for if technology has option to export energy that is compensated at the wholesale_rate_us_dollars_per_kwh. Note that a technology can only participate in either net metering or wholesale rates (not both)."
        },
        "can_export_beyond_site_load": {
          "type": "bool",
          "default": false,
          "description": "True/False for if technology can export energy beyond the annual site load (and be compensated for that energy at the wholesale_rate_above_site_load_us_dollars_per_kwh)."
        },
        "can_curtail": {
          "type": "bool",
          "default": false,
          "description": "True/False for if technology can curtail energy produced."
        }
      },
      "CHP": {
        "prime_mover": {
          "type": "str",
          "description": "CHP prime mover type (recip_engine, micro_turbine, combustion_turbine, fuel_cell)"
        },
        "size_class": {
          "type": "int",
          "restrict_to": [0, 1, 2, 3, 4, 5, 6],
          "description": "CHP size class for using appropriate default inputs"
        },
        "min_kw": {
          "type": "float",
          "min": 0.0,
          "max": 100000000.0,
          "description": "Minimum CHP size (based on electric) constraint for optimization"
        },
        "max_kw": {
          "type": "float",
          "min": 0.0,
          "max": 100000000.0,
          "description": "Maximum CHP size (based on electric) constraint for optimization. Set to zero to disable CHP"
        },
        "min_allowable_kw": {
          "type": "float",
          "min": 0.0,
          "max": 100000000.0,
          "description": "Minimum CHP size (based on electric) that still allows the model to choose zero (e.g. no CHP system)"
        },
        "installed_cost_us_dollars_per_kw": {
          "type": ["float", "list_of_float"],
          "min": 0.0,
          "max": 100000.0,
          "description": "Installed CHP system cost in $/kW (based on rated electric power)"
        },
        "tech_size_for_cost_curve": {
          "type": ["float", "list_of_float"],
          "min": 0.0,
          "max": 10000000000.0,
          "description": "Size of CHP systems corresponding to installed cost input points"
        },
        "om_cost_us_dollars_per_kw": {
          "type": "float",
          "min": 0.0,
          "max": 10000.0,
          "description": "Annual CHP fixed operations and maintenance costs in $/kw-yr"
        },
        "om_cost_us_dollars_per_kwh": {
          "type": "float",
          "min": 0.0,
          "max": 1000.0,
          "description": "CHP non-fuel variable operations and maintenance costs in $/kwh"
        },
        "om_cost_us_dollars_per_hr_per_kw_rated": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "description": "CHP non-fuel variable operations and maintenance costs in $/hr/kw_rated"
        },
        "elec_effic_full_load": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "description": "Electric efficiency of CHP prime-mover at full-load, HHV-basis"
        },
        "elec_effic_half_load": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "description": "Electric efficiency of CHP prime-mover at half-load, HHV-basis"
        },
        "min_turn_down_pct": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "description": "Minimum CHP electric loading in percent of capacity (size_kw)."
        },
        "thermal_effic_full_load": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "description": "CHP fraction of fuel energy converted to hot-thermal energy at full electric load"
        },
        "thermal_effic_half_load": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "description": "CHP fraction of fuel energy converted to hot-thermal energy at half electric load"
        },
        "use_default_derate": {
          "type": "bool",
          "default": true,
          "description": "Boolean indicator if CHP derates per the default parameters, otherwise no derate is modeled"
        },
        "max_derate_factor": {
          "type": "float",
          "min": 0.1,
          "max": 1.5,
          "description": "Maximum derate factor; the y-axis value of the 'flat' part of the derate curve, on the left"
        },
        "derate_start_temp_degF": {
          "type": "float",
          "min": 0.0,
          "max": 150.0,
          "description": "The outdoor air temperature at which the power starts to derate, units of degrees F"
        },
        "derate_slope_pct_per_degF": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "description": "Derate slope as a percent/fraction of rated power per degree F"
        },
        "chp_unavailability_periods": {
          "type": "list_of_dict",
          "description": "CHP unavailability periods for scheduled and unscheduled maintenance, list of dictionaries with keys of ['month', 'start_week_of_month', 'start_day_of_week', 'start_hour', 'duration_hours'] all values are one-indexed and start_day_of_week uses 1 for Monday, 7 for Sunday"
        },
        "macrs_option_years": {
          "type": "int",
          "restrict_to": [0, 5, 7],
          "default": 5,
          "description": "MACRS schedule for financial analysis. Set to zero to disable"
        },
        "macrs_bonus_pct": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 1.0,
          "description": "Percent of upfront project costs to depreciate under MACRS"
        },
        "macrs_itc_reduction": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5,
          "description": "Percent of the full ITC that depreciable basis is reduced by"
        },
        "federal_itc_pct": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 0.1,
          "description": "Percent federal capital cost incentive"
        },
        "state_ibi_pct": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 0.0,
          "description": "Percent of upfront project costs to discount under state investment based incentives"
        },
        "state_ibi_max_us_dollars": {
          "type": "float",
          "min": 0.0,
          "max": 10000000000.0,
          "default": 10000000000.0,
          "description": "Maximum rebate allowed under state investment based incentives"
        },
        "utility_ibi_pct": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 0.0,
          "description": "Percent of upfront project costs to discount under utility investment based incentives"
        },
        "utility_ibi_max_us_dollars": {
          "type": "float",
          "min": 0.0,
          "max": 10000000000.0,
          "default": 10000000000.0,
          "description": "Maximum rebate allowed under utility investment based incentives"
        },
        "federal_rebate_us_dollars_per_kw": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 0.0,
          "description": "Federal rebate based on installed capacity"
        },
        "state_rebate_us_dollars_per_kw": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 0.0,
          "description": "State rebates based on installed capacity"
        },
        "state_rebate_max_us_dollars": {
          "type": "float",
          "min": 0.0,
          "max": 10000000000.0,
          "default": 10000000000.0,
          "description": "Maximum rebate allowed under state rebates"
        },
        "utility_rebate_us_dollars_per_kw": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 0.0,
          "description": "Utility rebates based on installed capacity"
        },
        "utility_rebate_max_us_dollars": {
          "type": "float",
          "min": 0.0,
          "max": 10000000000.0,
          "default": 10000000000.0,
          "description": "Maximum rebate allowed under utility rebates"
        },
        "pbi_us_dollars_per_kwh": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 0.0,
          "description": "Production-based incentive value"
        },
        "pbi_max_us_dollars": {
          "type": "float",
          "min": 0.0,
          "max": 10000000000.0,
          "default": 10000000000.0,
          "description": "Maximum rebate allowed under utility production-based incentives"
        },
        "pbi_years": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 1.0,
          "description": "Duration of production-based incentives from installation date"
        },
        "pbi_system_max_kw": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 1000000000.0,
          "description": "Maximum system size for which production-based incentives apply"
        },
        "emissions_factor_lb_CO2_per_mmbtu": {
          "type": "float",
          "description": "Average carbon dioxide emissions factor"
        },
        "can_net_meter": {
          "type": "bool",
          "default": false,
          "description": "True/False for if technology has option to participate in net metering agreement with utility. Note that a technology can only participate in either net metering or wholesale rates (not both)."
        },
        "can_wholesale": {
          "type": "bool",
          "default": false,
          "description": "True/False for if technology has option to export energy that is compensated at the wholesale_rate_us_dollars_per_kwh. Note that a technology can only participate in either net metering or wholesale rates (not both)."
        },
        "can_export_beyond_site_load": {
          "type": "bool",
          "default": false,
          "description": "True/False for if technology can export energy beyond the annual site load (and be compensated for that energy at the wholesale_rate_above_site_load_us_dollars_per_kwh)."
        },
        "can_curtail": {
          "type": "bool",
          "default": false,
          "description": "True/False for if technology can curtail energy produced."
        },
        "cooling_thermal_factor": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "description": "Knockdown factor on absorption chiller COP based on the CHP prime_mover not being able to produce as high of temp/pressure hot water/steam"
        }
      },
      "ColdTES": {
        "min_gal": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 0.0,
          "description": "Minimum TES volume (energy) size constraint for optimization"
        },
        "max_gal": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 0.0,
          "description": "Maximum TES volume (energy) size constraint for optimization. Set to zero to disable storage"
        },
        "internal_efficiency_pct": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 0.999999,
          "description": "Thermal losses due to mixing from thermal power entering or leaving tank"
        },
        "soc_min_pct": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 0.1,
          "description": "Minimum allowable TES thermal state of charge"
        },
        "soc_init_pct": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5,
          "description": "TES thermal state of charge at first hour of optimization"
        },
        "installed_cost_us_dollars_per_gal": {
          "type": "float",
          "min": 0.0,
          "max": 1000.0,
          "default": 1.5,
          "description": "Thermal energy-based cost of TES (e.g. volume of the tank)"
        },
        "thermal_decay_rate_fraction": {
          "type": "float",
          "min": 0.0,
          "max": 0.1,
          "default": 0.0004,
          "description": "Thermal loss (gain) rate as a fraction of energy storage capacity, per hour (frac*energy_capacity/hr = kw_thermal)"
        },
        "om_cost_us_dollars_per_gal": {
          "type": "float",
          "min": 0.0,
          "max": 1000.0,
          "default": 0.0,
          "description": "Yearly fixed O&M cost dependent on storage energy size"
        },
        "macrs_option_years": {
          "type": "int",
          "restrict_to": [0, 5, 7],
          "default": 0,
          "description": "MACRS schedule for financial analysis. Set to zero to disable"
        },
        "macrs_bonus_pct": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 0.0,
          "description": "Percent of upfront project costs to depreciate under MACRS"
        }
      },
      "HotTES": {
        "min_gal": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 0.0,
          "description": "Minimum TES volume (energy) size constraint for optimization"
        },
        "max_gal": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 0.0,
          "description": "Maximum TES volume (energy) size constraint for optimization. Set to zero to disable storage"
        },
        "internal_efficiency_pct": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 0.999999,
          "description": "Thermal losses due to mixing from thermal power entering or leaving tank"
        },
        "soc_min_pct": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 0.1,
          "description": "Minimum allowable TES thermal state of charge"
        },
        "soc_init_pct": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5,
          "description": "TES thermal state of charge at first hour of optimization"
        },
        "installed_cost_us_dollars_per_gal": {
          "type": "float",
          "min": 0.0,
          "max": 1000.0,
          "default": 1.5,
          "description": "Thermal energy-based cost of TES (e.g. volume of the tank)"
        },
        "thermal_decay_rate_fraction": {
          "type": "float",
          "min": 0.0,
          "max": 0.1,
          "default": 0.0004,
          "description": "Thermal loss rate as a fraction of energy storage capacity, per hour (frac*energy_capacity/hr = kw_thermal)"
        },
        "om_cost_us_dollars_per_gal": {
          "type": "float",
          "min": 0.0,
          "max": 1000.0,
          "default": 0.0,
          "description": "Yearly fixed O&M cost dependent on storage energy size"
        },
        "macrs_option_years": {
          "type": "int",
          "restrict_to": [0, 5, 7],
          "default": 0,
          "description": "MACRS schedule for financial analysis. Set to zero to disable"
        },
        "macrs_bonus_pct": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 0.0,
          "description": "Percent of upfront project costs to depreciate under MACRS"
        }
      },
      "Boiler": {
        "min_mmbtu_per_hr": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 0.0,
          "description": "Minimum thermal power size - keep to 0 as we are not sizing this"
        },
        "max_mmbtu_per_hr": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "description": "Maximum thermal power size - arbitrary large number to exceed max boiler load input"
        },
        "max_thermal_factor_on_peak_load": {
          "type": "float",
          "min": 1.0,
          "max": 5.0,
          "default": 1.25,
          "description": "Factor on peak thermal LOAD which the boiler can supply"
        },
        "existing_boiler_production_type_steam_or_hw": {
          "type": "str",
          "description": "Boiler thermal production type, hot water or steam",
          "restrict_to": ["hot_water", "steam"]
        },
        "boiler_efficiency": {
          "type": "float",
          "min:": 0.0,
          "max:": 1.0,
          "description": "Existing boiler system efficiency - conversion of fuel to usable heating thermal energy. Default value depends on existing_boiler_production_steam_or_hw input"
        },
        "installed_cost_us_dollars_per_mmbtu_per_hr": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 0.0,
          "description": "Thermal power-based cost - set to zero because we are not costing this"
        },
        "emissions_factor_lb_CO2_per_mmbtu": {
          "type": "float",
          "description": "Pounds of carbon dioxide emitted per gallon of fuel burned"
        }
      },
      "ElectricChiller": {
        "min_kw": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 0.0,
          "description": "Minimum electric power size - keep to 0 as we are not sizing this"
        },
        "max_kw": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "description": "Maximum electric power size - arbitrary large number to exceed max chiller load input"
        },
        "max_thermal_factor_on_peak_load": {
          "type": "float",
          "min": 1.0,
          "max": 5.0,
          "default": 1.25,
          "description": "Factor on peak thermal LOAD which the electric chiller can supply"
        },
        "installed_cost_us_dollars_per_kw": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 0.0,
          "description": "Electric power-based cost - set to zero because we are not costing this"
        }
      },
      "AbsorptionChiller": {
        "min_ton": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 0.0,
          "description": "Minimum thermal power size constraint for optimization"
        },
        "max_ton": {
          "type": "float",
          "min": 0.0,
          "max": 1000000000.0,
          "default": 0.0,
          "description": "Maximum thermal power size constraint for optimization. Set to zero to disable absorption chl"
        },
        "chiller_cop": {
          "type": "float",
          "min:": 0.0,
          "max:": 20.0,
          "description": "Absorption chiller system coefficient of performance - conversion of hot thermal power input to usable cooling thermal energy output"
        },
        "chiller_elec_cop": {
          "type": "float",
          "min:": 0.0,
          "max:": 100.0,
          "default": 14.1,
          "description": "Absorption chiller electric consumption CoP from cooling tower heat rejection - conversion of electric power input to usable cooling thermal energy output"
        },
        "installed_cost_us_dollars_per_ton": {
          "type": "float",
          "min": 0.0,
          "max": 20000.0,
          "description": "Thermal power-based cost of absorption chiller (3.5 to 1 ton to kwt)"
        },
        "om_cost_us_dollars_per_ton": {
          "type": "float",
          "min": 0.0,
          "max": 1000.0,
          "description": "Yearly fixed O&M cost on a thermal power (ton) basis"
        },
        "macrs_option_years": {
          "type": "int",
          "restrict_to": [0, 5, 7],
          "default": 0,
          "description": "MACRS schedule for financial analysis. Set to zero to disable"
        },
        "macrs_bonus_pct": {
          "type": "float",
          "min": 0.0,
          "max": 1.0,
          "default": 0.0,
          "description": "Percent of upfront project costs to depreciate under MACRS"
        }
      }
    }
  }
}



var nested_output_definitions = {
  "Scenario": {
    "run_uuid": {
      "type": "str",
      "description": "Uniqueid",
      "units": "none"
    },
    "api_version": {
      "type": "str"
    },
    "status": {
      "type": "str",
      "description": "ProblemStatus",
      "units": "none"
    },
    "lower_bound": {
      "type": "float",
      "description": "Lowerboundofoptimalcase"
    },
    "optimality_gap": {
      "type": "float",
      "description": "Finaloptimizationgapachievedintheoptimalcase"
    },
    "Profile": {
      "pre_setup_scenario_seconds": {
        "type": "float",
        "description": "Timespentbeforesettingupscenario",
        "units": "seconds"
      },
      "setup_scenario_seconds": {
        "type": "float",
        "description": "Timespentsettingupscenario",
        "units": "seconds"
      },
      "reopt_seconds": {
        "type": "float",
        "description": "Timespentsolvingscenario",
        "units": "seconds"
      },
      "reopt_bau_seconds": {
        "type": "float",
        "description": "Timespentsolvingbase-casescenario",
        "units": "seconds"
      },
      "parse_run_outputs_seconds": {
        "type": "float",
        "description": "Timespentparsingoutputs",
        "units": "seconds"
      }
    },
    "Site": {
      "year_one_emissions_lb_C02": {
        "type": "int",
        "description": "Totalequivalentpoundsofcarbondioxideemittedfromthesiteinthefirstyear.",
        "units": "lbCO2"
      },
      "year_one_emissions_bau_lb_C02": {
        "type": "int",
        "description": "TotalequivalentpoundsofcarbondioxideemittedfromthesiteuseinthefirstyearintheBAUcase.",
        "units": "lbCO2"
      },
      "renewable_electricity_energy_pct": {
        "type": "float",
        "description": "Portionofelectrictrityusethatisderivedfromon-siterenewableresourcegenerationinyearone.CalculatedastotalPVandWindgenerationinyearone(includingexports),dividedbythetotalannualloadinyearone.",
        "units": "%"
      },
      "LoadProfile": {
        "year_one_electric_load_series_kw": {
          "type": "list_of_float",
          "description": "Yearonehourlytimeseriesofelectricload",
          "units": "kW"
        },
        "critical_load_series_kw": {
          "type": "list_of_float",
          "description": "Hourlycriticalloadforoutagesimulator.Valuesareeitheruploadedbyuser,ordeterminedfromtypicalload(eitheruploadedorsimulated)andcritical_load_pct.",
          "units": "kW"
        },
        "annual_calculated_kwh": {
          "type": "float",
          "description": "Annualenergyconsumptioncalculatedbysummingup8760loadprofile",
          "units": "kWh"
        },
        "resilience_check_flag": {
          "type": "boolean",
          "description": "BAUresiliencecheckstatusforexistingsystem"
        },
        "sustain_hours": {
          "type": "int",
          "description": "Numberofhourstheexistingsystemcansustainwithresiliencecheck",
          "units": "hours"
        },
        "bau_sustained_time_steps": {
          "type": "int",
          "description": "Numberoftimestepstheexistingsystemcansustainthecriticalload",
          "units": "timesteps"
        }
      },
      "LoadProfileBoilerFuel": {
        "year_one_boiler_fuel_load_series_mmbtu_per_hr": {
          "type": "list_of_float",
          "description": "Yearonehourlytimeseriesofboilerfuelload",
          "units": "mmbtu_per_hr"
        },
        "year_one_boiler_thermal_load_series_mmbtu_per_hr": {
          "type": "list_of_float",
          "description": "Yearonehourlytimeseriesofboilerthermalload",
          "units": "mmbtu_per_hr"
        },
        "annual_calculated_boiler_fuel_load_mmbtu_bau": {
          "type": "float",
          "description": "Annualboilerfuelconsumptioncalculatedbysummingup8760boilerfuelloadprofileinbusiness-as-usualcase.",
          "units": "mmbtu"
        }
      },
      "LoadProfileChillerThermal": {
        "year_one_chiller_electric_load_series_kw": {
          "type": "list_of_float",
          "description": "Yearonehourlytimeseriesofchillerelectricload",
          "units": "kW"
        },
        "year_one_chiller_thermal_load_series_ton": {
          "type": "list_of_float",
          "description": "Yearonehourlytimeseriesofelectricchillerthermalload",
          "units": "Ton"
        },
        "year_one_chiller_electric_load_series_kw_bau": {
          "type": "list_of_float",
          "description": "Yearonehourlytimeseriesofchillerelectricloadinbusiness-as-usualcase.",
          "units": "kW"
        },
        "annual_calculated_kwh_bau": {
          "type": "float",
          "description": "Annualchillerelectricconsumptioncalculatedbysummingup8760electricloadprofileinbusiness-as-usualcase.",
          "units": "kWh"
        }
      },
      "Financial": {
        "lcc_us_dollars": {
          "type": "float",
          "description": "Optimallifecyclecost",
          "units": "dollars"
        },
        "lcc_bau_us_dollars": {
          "type": "float",
          "description": "Businessasusuallifecyclecost",
          "units": "dollars"
        },
        "npv_us_dollars": {
          "type": "float",
          "description": "Netpresentvalueofsavingsrealizedbytheproject",
          "units": "dollars"
        },
        "net_capital_costs_plus_om_us_dollars": {
          "type": "float",
          "description": "Capitalcostforalltechnologiespluspresentvalueofoperationsandmaintenanceoveranlaysisperiod",
          "units": "$"
        },
        "net_om_us_dollars_bau": {
          "type": "float",
          "description": "Business-as-usualpresentvalueofoperationsandmaintenanceoveranlaysisperiod",
          "units": "$"
        },
        "net_capital_costs": {
          "type": "float",
          "description": "Netcapitalcostsforalltechnologies,inpresentvalue,includingreplacementcostsandincentives.",
          "units": "$"
        },
        "microgrid_upgrade_cost_us_dollars": {
          "type": "float",
          "description": "CostinUSdollarstomakeadistributedenergysystemislandablefromthegrid.DeterminedbymultiplyingthetotalcapitalcostsofresultantenergysystemsfromREopt(suchasPVandStoragesystem)withtheinputvalueformicrogrid_upgrade_cost_pct(whichdefaultsto0.30)."
        },
        "initial_capital_costs": {
          "type": "float",
          "description": "Up-frontcapitalcostsforalltechnologies,inpresentvalue,excludingreplacementcostsandincentives.",
          "units": "$"
        },
        "initial_capital_costs_after_incentives": {
          "type": "float",
          "description": "Up-frontcapitalcostsforalltechnologies,inpresentvalue,excludingreplacementcosts,includingincentives.",
          "units": "$"
        },
        "replacement_costs": {
          "type": "float",
          "description": "Netreplacementcostsforalltechnologies,infuturevalue,excludingincentives.",
          "units": "$"
        },
        "om_and_replacement_present_cost_after_tax_us_dollars": {
          "type": "float",
          "description": "NetO&Mandreplacementcostsinpresentvalue,after-tax.",
          "units": "$"
        },
        "total_om_costs_us_dollars": {
          "type": "float",
          "description": "Totaloperationsandmaintenancecostoveranalysisperiod.",
          "units": "$"
        },
        "year_one_om_costs_us_dollars": {
          "type": "float",
          "description": "Yearoneoperationsandmaintenancecostaftertax.",
          "units": "$"
        },
        "year_one_om_costs_before_tax_us_dollars": {
          "type": "float",
          "description": "Yearoneoperationsandmaintenancecostbeforetax.",
          "units": "$"
        },
        "simple_payback_years": {
          "type": "float",
          "description": "Numberofyearsuntilthecumulativeannualcashflowturnspositive.Ifthecashflowbecomesnegativeagainafterbecomingpositive(i.e.duetobatteryrepalcementcosts)thensimplepaybackisincreasedbythenumberofyearsthatthecashflowisnegativebeyondthebreak-evenyear.",
          "units": "$"
        },
        "irr_pct": {
          "type": "float",
          "description": "internalRateofReturnofthecost-optimalsystem.Intwo-partycasesthedeveloperdiscountrateisusedinplaceoftheofftakerdiscountrate.",
          "units": "%"
        },
        "net_present_cost_us_dollars": {
          "type": "float",
          "description": "Presentvalueofthetotalcostsincurredbythethird-partyowningandoperatingthedistributedenergyresourceassets.",
          "units": "$"
        },
        "annualized_payment_to_third_party_us_dollars": {
          "type": "float",
          "description": "Theannualizedamountthehostwillpaytothethird-partyowneroverthelifeoftheproject.",
          "units": "$"
        },
        "offtaker_annual_free_cashflow_series_us_dollars": {
          "type": "float",
          "description": "Annualfreecashflowforthehostintheoptimalcaseforallanalysisyears,includingyear0.Futureyearshavenotbeendiscountedtoaccountforthetimevalueofmoney.",
          "units": "$"
        },
        "offtaker_discounted_annual_free_cashflow_series_us_dollars": {
          "type": "float",
          "description": "Annualdiscountedfreecashflowforthehostintheoptimalcaseforallanalysisyears,includingyear0.Futureyearshavebeendiscountedtoaccountforthetimevalueofmoney.",
          "units": "$"
        },
        "offtaker_annual_free_cashflow_series_bau_us_dollars": {
          "type": "float",
          "description": "Annualfreecashflowforthehostinthebusiness-as-usualcaseforallanalysisyears,includingyear0.Futureyearshavenotbeendiscountedtoaccountforthetimevalueofmoney.Onlycalcualtedinthenon-third-partycase.",
          "units": "$"
        },
        "offtaker_discounted_annual_free_cashflow_series_bau_us_dollars": {
          "type": "float",
          "description": "Annualdiscountedfreecashflowforthehostinthebusiness-as-usualcaseforallanalysisyears,includingyear0.Futureyearshavebeendiscountedtoaccountforthetimevalueofmoney.Onlycalcualtedinthenon-third-partycase.",
          "units": "$"
        },
        "developer_annual_free_cashflow_series_bau_us_dollars": {
          "type": "float",
          "description": "Annualfreecashflowforthedeveloperinthebusiness-as-usualthirdpartycaseforallanalysisyears,includingyear0.Futureyearshavenotbeendiscountedtoaccountforthetimevalueofmoney.Onlycalcualtedinthethird-partycase.",
          "units": "$"
        }
      },
      "PV": {
        "pv_name": {
          "type": "str",
          "description": "Sitename/description"
        },
        "size_kw": {
          "type": "float",
          "description": "OptimalPVsystemsize",
          "units": "kW"
        },
        "average_yearly_energy_produced_kwh": {
          "type": "float",
          "description": "AverageannualenergyproducedbythePVsystemoveroneyear",
          "units": "kWh"
        },
        "average_yearly_energy_produced_bau_kwh": {
          "type": "float",
          "description": "AverageannualenergyproducedbytheexistingPVsystemoveroneyear",
          "units": "kWh"
        },
        "average_yearly_energy_exported_kwh": {
          "type": "float",
          "description": "AverageannualenergyexportedbythePVsystem",
          "units": "kWh"
        },
        "year_one_energy_produced_kwh": {
          "type": "float",
          "description": "YearoneenergyproducedbythePVsystem",
          "units": "kWh"
        },
        "year_one_energy_produced_bau_kwh": {
          "type": "float",
          "description": "YearoneenergyproducedbythePVsystemintheBAUcase",
          "units": "kWh"
        },
        "year_one_power_production_series_kw": {
          "type": "list_of_float",
          "description": "YearonePVpowerproductiontimeseries",
          "units": "kW"
        },
        "year_one_to_battery_series_kw": {
          "type": "list_of_float",
          "description": "YearonehourlytimeseriesofPVcharging",
          "units": "kW"
        },
        "year_one_to_load_series_kw": {
          "type": "list_of_float",
          "description": "YearonehourlytimeseriesofPVservingload",
          "units": "kW"
        },
        "year_one_to_grid_series_kw": {
          "type": "list_of_float",
          "description": "YearonehourlytimeseriesofPVexportingtogrid",
          "units": "kW"
        },
        "existing_pv_om_cost_us_dollars": {
          "type": "float",
          "description": "LifetimeO&McostforexistingPVsystem.",
          "units": "$"
        },
        "station_latitude": {
          "type": "float",
          "description": "Thelatitudeofthestationusedforweatherresourcedata",
          "units": "degrees"
        },
        "station_longitude": {
          "type": "float",
          "description": "Thelongitudeofthestationusedforweatherresourcedata",
          "units": "degrees"
        },
        "station_distance_km": {
          "type": "float",
          "description": "Thedistancefromtheweatherresourcestationfromtheinputsite",
          "units": "km"
        },
        "year_one_curtailed_production_series_kw": {
          "type": "list_of_float",
          "description": "YearonePVpowercurtailedduringoutagetimeseries",
          "units": "kW"
        }
      },
      "Wind": {
        "size_kw": {
          "type": "float",
          "description": "Recommendedwindsystemsize",
          "units": "kW"
        },
        "average_yearly_energy_produced_kwh": {
          "type": "float",
          "description": "Averageenergyproducedbythewindsystemoveroneyear",
          "units": "kWh"
        },
        "average_yearly_energy_exported_kwh": {
          "type": "float",
          "description": "Averageannualenergyexportedbythewindsystem",
          "units": "kWh"
        },
        "year_one_energy_produced_kwh": {
          "type": "float",
          "description": "Windenergyproducedinyearone",
          "units": "kWh"
        },
        "year_one_power_production_series_kw": {
          "type": "list_of_float",
          "description": "Hourlywindresource",
          "units": "kW"
        },
        "year_one_to_battery_series_kw": {
          "type": "list_of_float",
          "description": "Yearonewindtobatterytimeseries",
          "units": "kW"
        },
        "year_one_to_load_series_kw": {
          "type": "list_of_float",
          "description": "Yearonewindtoloadtimeseries",
          "units": "kW"
        },
        "year_one_to_grid_series_kw": {
          "type": "list_of_float",
          "description": "Yearonewindtogridtimeseries",
          "units": "kW"
        },
        "year_one_curtailed_production_series_kw": {
          "type": "list_of_float",
          "description": "YearoneWindpowercurtailedduringoutagetimeseries",
          "units": "kW"
        }
      },
      "Storage": {
        "size_kw": {
          "type": "float",
          "description": "Optimalbatterypowercapacity",
          "units": "kW"
        },
        "size_kwh": {
          "type": "float",
          "description": "Optimalbatteryenergycapacity",
          "units": "kWh"
        },
        "year_one_to_load_series_kw": {
          "type": "list_of_float",
          "description": "Yearonehourlytimeseriesofbatteryservingload",
          "units": "kW"
        },
        "year_one_to_grid_series_kw": {
          "type": "list_of_float",
          "description": "Yearonehourlytimeseriesofbatteryexportingtogrid",
          "units": "kW"
        },
        "year_one_soc_series_pct": {
          "type": "list_of_float",
          "description": "Yearonehourlytimeseriesofbatterystateofcharge",
          "units": "%"
        }
      },
      "ElectricTariff": {
        "year_one_energy_cost_us_dollars": {
          "type": "float",
          "description": "Optimalyearoneutilityenergycost",
          "units": "$"
        },
        "year_one_demand_cost_us_dollars": {
          "type": "float",
          "description": "Optimalyearoneutilitydemandcost",
          "units": "$"
        },
        "year_one_fixed_cost_us_dollars": {
          "type": "float",
          "description": "Optimalyearoneutilityfixedcost",
          "units": "$"
        },
        "year_one_min_charge_adder_us_dollars": {
          "type": "float",
          "description": "Optimalyearoneutilityminimumchargeadder",
          "units": "$"
        },
        "year_one_energy_cost_bau_us_dollars": {
          "type": "float",
          "description": "Businessasusualyearoneutilityenergycost",
          "units": "$"
        },
        "year_one_demand_cost_bau_us_dollars": {
          "type": "float",
          "description": "Businessasusualyearoneutilitydemandcost",
          "units": "$"
        },
        "year_one_fixed_cost_bau_us_dollars": {
          "type": "float",
          "description": "Businessasusualyearoneutilityfixedcost",
          "units": "$"
        },
        "year_one_min_charge_adder_bau_us_dollars": {
          "type": "float",
          "description": "Businessasusualyearoneutilityminimumchargeadder",
          "units": "$"
        },
        "total_energy_cost_us_dollars": {
          "type": "float",
          "description": "Totalutilityenergycostoverthelifecycle,after-tax",
          "units": "$"
        },
        "total_demand_cost_us_dollars": {
          "type": "float",
          "description": "Optimaltotallifecycleutilitydemandcostovertheanalysisperiod,after-tax",
          "units": "$"
        },
        "total_fixed_cost_us_dollars": {
          "type": "float",
          "description": "Totalutilityfixedcostoverthelifecycle,after-tax",
          "units": "$"
        },
        "total_min_charge_adder_us_dollars": {
          "type": "float",
          "description": "Totalutilityminimumchargeadder",
          "units": "$"
        },
        "total_energy_cost_bau_us_dollars": {
          "type": "float",
          "description": "Businessasusualtotalutilityenergycostoverthelifecycle,after-tax",
          "units": "$"
        },
        "total_demand_cost_bau_us_dollars": {
          "type": "float",
          "description": "Businessasusualtotallifecycleutilitydemandcostovertheanalysisperiod,after-tax",
          "units": "$"
        },
        "total_fixed_cost_bau_us_dollars": {
          "type": "float",
          "description": "Businessasusualtotalutilityfixedcostoverthelifecycle,after-tax",
          "units": "$"
        },
        "total_export_benefit_us_dollars": {
          "type": "float",
          "description": "Totalexportbenefitcostoverthelifecycle,after-tax",
          "units": "$"
        },
        "total_export_benefit_bau_us_dollars": {
          "type": "float",
          "description": "BAUexportbenefitcostoverthelifecycle,after-tax",
          "units": "$"
        },
        "total_min_charge_adder_bau_us_dollars": {
          "type": "float",
          "description": "Businessasusualtotalutilityminimumchargeadder",
          "units": "$"
        },
        "year_one_bill_us_dollars": {
          "type": "float",
          "description": "Optimalyearonetotalutilitybill",
          "units": "$"
        },
        "year_one_bill_bau_us_dollars": {
          "type": "float",
          "description": "Businessasusualyearonetotalutilitybill",
          "units": "$"
        },
        "year_one_export_benefit_us_dollars": {
          "type": "float",
          "description": "Optimalyearonevalueofexportedenergy",
          "units": "$"
        },
        "year_one_export_benefit_bau_us_dollars": {
          "type": "float",
          "description": "BAUyearonevalueofexportedenergy",
          "units": "$"
        },
        "year_one_energy_cost_series_us_dollars_per_kwh": {
          "type": "list_of_float",
          "description": "Yearonehourlyenergycosts",
          "units": "$/kWh"
        },
        "year_one_demand_cost_series_us_dollars_per_kw": {
          "type": "list_of_float",
          "description": "Yearonehourlydemandcosts",
          "units": "$/kW"
        },
        "year_one_to_load_series_kw": {
          "type": "list_of_float",
          "description": "Yearonegridtoloadtimeseries",
          "units": "kW"
        },
        "year_one_to_load_series_bau_kw": {
          "type": "list_of_float",
          "description": "YearonegridtoloadtimeseriesintheBAUcase",
          "units": "kW"
        },
        "year_one_to_battery_series_kw": {
          "type": "list_of_float",
          "description": "Yearonehourlytimeseriesofpowerfromgridtobattery",
          "units": "kW"
        },
        "year_one_energy_supplied_kwh": {
          "type": "float",
          "description": "Yearoneenergysuppliedfromgridtoload",
          "units": "kWh"
        },
        "year_one_energy_supplied_kwh_bau": {
          "type": "float",
          "description": "Yearoneenergysuppliedfromgridtoloadinthebusiness-as-usualscenario",
          "units": "kWh"
        },
        "year_one_emissions_lb_C02": {
          "type": "int",
          "description": "Totalequivalentpoundsofcarbondioxideemittedfromutilityelectricityuseinthefirstyear.CalculatedfromEPAAVERTregionhourlygridemissionsfactorseriesforthecontinentalUS.InAKandHI,thebestavailabledataareEPAeGRIDannualaverages.",
          "units": "lbCO2"
        },
        "year_one_emissions_bau_lb_C02": {
          "type": "int",
          "description": "TotalequivalentpoundsofcarbondioxideemittedfromBAUutilityelectricityuseinthefirstyear.CalculatedbydefaultfromhourlyemissionsestimatesexceptinAKandHI.",
          "units": "lbCO2"
        },
        "year_one_chp_standby_cost_us_dollars": {
          "type": "float",
          "description": "Year1standbychargecostincurredbyCHP",
          "units": "$"
        },
        "total_chp_standby_cost_us_dollars": {
          "type": "float",
          "description": "TotallifecyclestandbychargecostincurredbyCHP",
          "units": "$"
        },
        "emissions_region": {
          "type": "str",
          "description": "Descriptionofregionforemissions_factor_series_lb_CO2_per_kwh.FilledbydefaultwiththeEPAAVERTregionofthesite."
        }
      },
      "FuelTariff": {
        "total_boiler_fuel_cost_us_dollars": {
          "type": "float",
          "description": "Totalboilerfuelcostoverthelifecycle,after-tax",
          "units": "$"
        },
        "year_one_boiler_fuel_cost_us_dollars": {
          "type": "float",
          "description": "Yearoneboilerfuelcost,before-tax",
          "units": "$"
        },
        "year_one_boiler_fuel_cost_bau_us_dollars": {
          "type": "float",
          "description": "Yearonebauboilerfuelcost,before-tax",
          "units": "$"
        },
        "total_chp_fuel_cost_us_dollars": {
          "type": "float",
          "description": "Totalchpfuelcostoverthelifecycle,after-tax",
          "units": "$"
        },
        "year_one_chp_fuel_cost_us_dollars": {
          "type": "float",
          "description": "Yearonechpfuelcost,before-tax",
          "units": "$"
        },
        "total_boiler_fuel_cost_bau_us_dollars": {
          "type": "float",
          "description": "Businessasusualtotalboilerfuelcostoverthelifecycle,after-tax",
          "units": "$"
        }
      },
      "Generator": {
        "size_kw": {
          "type": "float",
          "description": "Optimaldieselgeneratorsystemsize",
          "units": "kW"
        },
        "fuel_used_gal": {
          "type": "float",
          "description": "Generatorfuelusedtomeetcriticalloadduringgridoutage.",
          "units": "USgallons"
        },
        "fuel_used_gal_bau": {
          "type": "float",
          "description": "Generatorfuelusedtomeetcriticalloadduringgridoutageinbaucase.",
          "units": "USgallons"
        },
        "average_yearly_energy_produced_kwh": {
          "type": "float",
          "description": "Averageannualenergyproducedbythedieselgeneratoroveroneyear",
          "units": "kWh"
        },
        "average_yearly_energy_exported_kwh": {
          "type": "float",
          "description": "Averageannualenergyexportedbythedieselgenerator",
          "units": "kWh"
        },
        "year_one_energy_produced_kwh": {
          "type": "float",
          "description": "Yearoneenergyproducedbythedieselgenerator",
          "units": "kWh"
        },
        "year_one_power_production_series_kw": {
          "type": "list_of_float",
          "description": "Yearonedieselgeneratorpowerproductiontimeseries",
          "units": "kW"
        },
        "year_one_to_battery_series_kw": {
          "type": "list_of_float",
          "description": "Yearonehourlytimeseriesofdieselgeneratorcharging",
          "units": "kW"
        },
        "year_one_to_load_series_kw": {
          "type": "list_of_float",
          "description": "Yearonegeneratortoloadtimeseries.",
          "units": "kW"
        },
        "year_one_to_grid_series_kw": {
          "type": "list_of_float",
          "description": "Yearonehourlytimeseriesofdieselgeneratorexportingtogrid",
          "units": "kW"
        },
        "existing_gen_total_fixed_om_cost_us_dollars": {
          "type": "float",
          "description": "LifetimefixedO&Mcostforexistingdieselgeneratorsysteminbaucase.",
          "units": "$"
        },
        "existing_gen_total_variable_om_cost_us_dollars": {
          "type": "float",
          "description": "Lifetimevariable(basedonkwhproduced)O&Mcostforexistingdieselgeneratorsystem.",
          "units": "$"
        },
        "existing_gen_year_one_variable_om_cost_us_dollars": {
          "type": "float",
          "description": "Yearonevariable(basedonkwhproduced)O&Mcostforexistingdieselgeneratorsystem.",
          "units": "$"
        },
        "total_fixed_om_cost_us_dollars": {
          "type": "float",
          "description": "Totallifecyclefixed(basedonkWcapacity)O&Mcostforexisting+recommendeddieselgeneratorsystem.",
          "units": "$"
        },
        "total_variable_om_cost_us_dollars": {
          "type": "float",
          "description": "Totallifecyclevariable(basedonkWhproduced)O&Mcostforexisting+recommendeddieselgeneratorsystem",
          "units": "$"
        },
        "year_one_variable_om_cost_us_dollars": {
          "type": "float",
          "description": "Yearonevariable(basedonkwhproduced)O&Mcostforexisting+recommendeddieselgeneratorsystem",
          "units": "$"
        },
        "year_one_fixed_om_cost_us_dollars": {
          "type": "float",
          "description": "Yearonefixed(basedonkWcapacity)O&Mcostforexisting+recommendeddieselgeneratorsystem.",
          "units": "$"
        },
        "total_fuel_cost_us_dollars": {
          "type": "float",
          "description": "Totallifecyclefuelcostforexisting+newlyrecommendeddieselgeneratorsystem",
          "units": "$"
        },
        "year_one_fuel_cost_us_dollars": {
          "type": "float",
          "description": "Yearonefuelcostforexisting+newlyrecommendeddieselgeneratorsystem",
          "units": "$"
        },
        "existing_gen_total_fuel_cost_us_dollars": {
          "type": "float",
          "description": "Totallifecyclefuelcostforexistingdieselgeneratorsystem",
          "units": "$"
        },
        "existing_gen_year_one_fuel_cost_us_dollars": {
          "type": "float",
          "description": "Yearonefuelcostforexistingdieselgeneratorsystem",
          "units": "$"
        },
        "year_one_emissions_lb_C02": {
          "type": "int",
          "description": "Totalequivalentpoundsofcarbondioxideemittedfromgeneratoruseinthefirstyear.",
          "units": "lbCO2"
        },
        "year_one_emissions_bau_lb_C02": {
          "type": "int",
          "description": "TotalequivalentpoundsofcarbondioxideemittedfromBAUgeneratoruseinthefirstyear.",
          "units": "lbCO2"
        }
      },
      "CHP": {
        "size_kw": {
          "type": "float",
          "description": "OptimalCHPprime-moverratedelectricsize",
          "units": "kW"
        },
        "year_one_fuel_used_mmbtu": {
          "type": "float",
          "description": "CHPfuelusedoveroneyear",
          "units": "MMBtu"
        },
        "year_one_electric_energy_produced_kwh": {
          "type": "float",
          "description": "YearoneelectricenergyproducedbyCHP",
          "units": "kWh"
        },
        "year_one_thermal_energy_produced_mmbtu": {
          "type": "float",
          "description": "YearonethermalenergyproducedbyCHP",
          "units": "MMBtu/hr"
        },
        "year_one_electric_production_series_kw": {
          "type": "list_of_float",
          "description": "YearoneCHPelectricproductiontimeseries",
          "units": "kW"
        },
        "year_one_to_battery_series_kw": {
          "type": "list_of_float",
          "description": "YearonehourlytimeseriesofCHPchargingbattery",
          "units": "kW"
        },
        "year_one_to_load_series_kw": {
          "type": "list_of_float",
          "description": "YearoneCHPtoelectricloadtimeseries.",
          "units": "kW"
        },
        "year_one_to_grid_series_kw": {
          "type": "list_of_float",
          "description": "YearonehourlytimeseriesofCHPexportingtogrid",
          "units": "kW"
        },
        "year_one_thermal_to_load_series_mmbtu_per_hour": {
          "type": "list_of_float",
          "description": "YearonehourlytimeseriesofCHPthermaltohotthermalload",
          "units": "MMBtu/hr"
        },
        "year_one_thermal_to_tes_series_mmbtu_per_hour": {
          "type": "list_of_float",
          "description": "YearonehourlytimeseriesofCHPthermaltoHotTES",
          "units": "MMBtu/hr"
        },
        "year_one_thermal_to_waste_series_mmbtu_per_hour": {
          "type": "list_of_float",
          "description": "YearonehourlytimeseriesofCHPthermaltowasteheat",
          "units": "MMBtu/hr"
        },
        "year_one_emissions_lb_C02": {
          "type": "int",
          "description": "TotalequivalentpoundsofcarbondioxideemittedfromCHPfuelsconsumedonsiteuseinthefirstyear.",
          "units": "hours"
        },
        "year_one_emissions_bau_lb_C02": {
          "type": "int",
          "description": "TotalequivalentpoundsofcarbondioxideemittedfromCHPfuelsconsumedonsiteuseinthefirstyearintheBAUcase.",
          "units": "hours"
        }
      },
      "Boiler": {
        "year_one_boiler_fuel_consumption_series_mmbtu_per_hr": {
          "type": "list_of_float",
          "description": "Yearonehourlytimeseriesofboilerfuelconsumption",
          "units": "MMBtu/hr"
        },
        "year_one_boiler_thermal_production_series_mmbtu_per_hr": {
          "type": "list_of_float",
          "description": "Yearonehourlytimeseriesofboilerthermalproduction",
          "units": "MMBtu/hr"
        },
        "year_one_boiler_fuel_consumption_mmbtu": {
          "type": "float",
          "description": "Annualaverageboilerfuelconsumption",
          "units": "MMBtu"
        },
        "year_one_boiler_thermal_production_mmbtu": {
          "type": "float",
          "description": "Annualaverageboilerthermalproduction",
          "units": "MMBtu"
        },
        "year_one_thermal_to_load_series_mmbtu_per_hour": {
          "type": "list_of_float",
          "description": "YearonehourlytimeseriesofCHPthermaltohotthermalload",
          "units": "MMBtu/hr"
        },
        "year_one_thermal_to_tes_series_mmbtu_per_hour": {
          "type": "list_of_float",
          "description": "YearonehourlytimeseriesofCHPthermaltoHotTES",
          "units": "MMBtu/hr"
        },
        "year_one_emissions_lb_C02": {
          "type": "int",
          "description": "Totalequivalentpoundsofcarbondioxideemittedfromboilerfuelsconsumedonsiteuseinthefirstyear.",
          "units": "hours"
        },
        "year_one_emissions_bau_lb_C02": {
          "type": "int",
          "description": "TotalequivalentpoundsofcarbondioxideemittedfromboilerfuelsconsumedonsiteuseinthefirstyearintheBAUcase.",
          "units": "hours"
        }
      },
      "ElectricChiller": {
        "year_one_electric_chiller_thermal_to_load_series_ton": {
          "type": "list_of_float",
          "description": "Yearonehourlytimeseriesofelectricchillerthermaltocoolingload",
          "units": "Ton"
        },
        "year_one_electric_chiller_thermal_to_tes_series_ton": {
          "type": "list_of_float",
          "description": "YearonehourlytimeseriesofelectricchillerthermaltocoldTES",
          "units": "Ton"
        },
        "year_one_electric_chiller_electric_consumption_series_kw": {
          "type": "list_of_float",
          "description": "Yearonehourlytimeseriesofchillerelectricconsumption",
          "units": "kW"
        },
        "year_one_electric_chiller_electric_consumption_kwh": {
          "type": "float",
          "description": "Yearonechillerelectricconsumption",
          "units": "kWh"
        },
        "year_one_electric_chiller_thermal_production_tonhr": {
          "type": "float",
          "description": "Yearonechillerthermalproduction",
          "units": "TonHr"
        }
      },
      "AbsorptionChiller": {
        "size_ton": {
          "type": "float",
          "description": "Optimalabsorptionchillerratedcoolingpowersize",
          "units": "Ton"
        },
        "year_one_absorp_chl_thermal_to_load_series_ton": {
          "type": "list_of_float",
          "description": "Yearonehourlytimeseriesofabsorptionchillerthermalproduction",
          "units": "Ton"
        },
        "year_one_absorp_chl_thermal_to_tes_series_ton": {
          "type": "list_of_float",
          "description": "Yearonehourlytimeseriesofabsorptionchillerthermalproduction",
          "units": "Ton"
        },
        "year_one_absorp_chl_thermal_consumption_series_mmbtu_per_hr": {
          "type": "list_of_float",
          "description": "Yearonehourlytimeseriesofabsorptionchillerthermalconsumption",
          "units": "MMBtu/hr"
        },
        "year_one_absorp_chl_thermal_consumption_mmbtu": {
          "type": "float",
          "description": "Yearonechillerthermalconsumption",
          "units": "MMBtu"
        },
        "year_one_absorp_chl_thermal_production_tonhr": {
          "type": "float",
          "description": "Yearonechillerthermalproduction",
          "units": "TonHr"
        },
        "year_one_absorp_chl_electric_consumption_series_kw": {
          "type": "list_of_float",
          "description": "Yearonehourlytimeseriesofabsorptionchillerelectricconsumption",
          "units": "kW"
        },
        "year_one_absorp_chl_electric_consumption_kwh": {
          "type": "float",
          "description": "Yearonechillerelectricconsumption(coolingtowerheatrejectionfans/pumps)",
          "units": "kWh"
        }
      },
      "ColdTES": {
        "size_gal": {
          "type": "float",
          "description": "OptimalcoldTESpowercapacity",
          "units": "Ton"
        },
        "year_one_thermal_from_cold_tes_series_ton": {
          "type": "list_of_float",
          "description": "YearonehourlytimeseriesofTESservingcoolingthermalload",
          "units": "Ton"
        },
        "year_one_cold_tes_soc_series_pct": {
          "type": "list_of_float",
          "description": "YearonehourlytimeseriesofcoldTESstateofcharge",
          "units": "%"
        }
      },
      "HotTES": {
        "size_gal": {
          "type": "float",
          "description": "OptimalhotTESpowercapacity",
          "units": "MMBtu/hr"
        },
        "year_one_thermal_from_hot_tes_series_mmbtu_per_hr": {
          "type": "list_of_float",
          "description": "YearonehourlytimeseriesofTESservinghotthermalload",
          "units": "MMBtu/hr"
        },
        "year_one_hot_tes_soc_series_pct": {
          "type": "list_of_float",
          "description": "YearonehourlytimeseriesofhotTESstateofcharge",
          "units": "%"
        }
      }
    }
  }
}

var special_cases_inputs = {
    'Scenario':'<b>Scenario</b> attributes controls high-level optimization settings, such as resolution and time out duration. These types of controls are useful because <b>REopt Lite</b> optimizations are computationally intensive and problem complexity increases exponentially with dimensionality. For example, particularly challenging problems are likely to include: sub-hourly time resolutions, a large number of candidate technologies, the use of tiered electric tariffs.<br><br>',
    'Site':'<b>Site</b> attributes are used to localize and constrain the optimization problem spatially. Additionally, site coordinates are used to look up wind and solar resource, as well as grid emissions factors. Also note that aside from coordinates, <button type="button" data-target="#ElectricTariffinputs_panel" class="btn btn-secondary btn-sm scroll_button">ElectricTariff</button> and <button type="button" data-target="#LoadProfileinputs_panel" class="btn btn-secondary btn-sm scroll_button">LoadProfile</button> parameters are required at a minimum to run an optimization.<br><br>',
    'Financial':'<b>REopt Lite</b> optimizations use one year’s worth of load and electric tariff data along with these key financial parameters to optimize across the financial life of the project. Through these financial settings you can choose to differentiate between site host ownership or third-party project ownership (i.e., using a DER project developer). Third-party owners are expected to build and operate new and existing assets, but they are not responsible for the cost of generator fuel. Third-party owners recuperate a profit aligned with their discount rate, though they may deliver cheaper overall energy to the site if they can take advantage of certain tax benefits. Note, certain outputs are ownership-dependent (i.e., irr_pct is relevant to the third-party owner and not the host in third-party scenarios). The format of the <b>Proforma</b> will also change based on ownership arrangement. <br><br>',
    'ElectricTariff':'ElectricTariff attributes define the value of energy throughout the year. Tariffs can be defined simply as blended annual or monthly rates, or more precisely through linkage with the <a href="https://openei.org/wiki/Utility_Rate_Database" target="_blank"> Utility Rate Database</a> (URDB). Custom URDB-formatted tariffs at hourly or sub-hourly resolutions are accepted by the API. <br><br>',
    'LoadProfile':'<b>LoadProfile</b> attributes define the site electric load and may reflect aggregations of independent loads behind a single meter. For resilience runs, an outage may also be specified during which the critical load (typically a fraction of total load) must be met. Defining an outage may result in ‘infeasible’ solutions if there are not sufficient candidate technologies (i.e., it may not be possible to meet a 24-hour outage with solar PV alone).<br><br>',
    'PV': '<b>PV</b> attributes define the costs and performance of one or more solar photovoltaic systems. By default, <b>PV</b> is considered with <button type="button" data-target="#Storageinputs_panel" class="btn btn-secondary btn-sm scroll_button">Storage</button> as candidate technologies. Solar resource data by default is sourced from the <a href="https://developer.nrel.gov/docs/solar/pvwatts/v6/" target="_blank">PVWatts API</a>. By default, production factors are sourced from PVWatts. However, custom production factors can be used in place of these PVWatts profiles by providing a <em>prod_factor_series_kw</em> timeseries (a powerflow array at the resolutions of the scenario\'s <em>time_steps_per_hour</em> setting). <b> Note:</b> PV accepts a set of key value pairs or a list of key value pairs formatted accoring to this template to account for multiple roof aspects or siting considerations (i.e roof vs ground) each with their own costs and technoeconomic parameters. Set max_kw to 0 to remove this technology from candidate technologies.<br><br>',
    'Storage':'<b>Storage</b> attributes define the costs and performance of battery storage. By default, <b>Storage</b> is considered with <button type="button" data-target="#PVinputs_panel" class="btn btn-secondary btn-sm scroll_button">PV</button> as candidate technologies. Set <em>max_kw</em> to 0 to remove this technology from candidate technologies. <br><br>',
    'Wind':'<b>Wind</b> attributes define the costs and performance of distributed wind generation. By default, <b>Wind</b> is not considered as a candidate technology. When activated, wind resource data is by default sourced from <a href="https://developer.nrel.gov/docs/wind/wind-toolkit/wtk-srw-download/"" target="_blank">Wind Toolkit Data</a>. Set <em>max_kw</em> to a large number (i.e. 1000000) to add this technology as a candidate technology.<br><br>',
    'Generator':'<b>Generator</b> attributes define the costs and performance of diesel generation. By default, <button type="button" data-target="#Storageinputs_panel" class="btn btn-secondary btn-sm scroll_button">Storage</button> is not considered in the optimization. When it is specified as a candidate, default settings would restrict it from running outside an outage as specified in <button type="button" data-target="#LoadProfileinputs_panel" class="btn btn-secondary btn-sm scroll_button">LoadProfile</button> attributes (though it can be configured otherwise). Set <em>max_kw</em> to a large number (i.e. 1000000) to add this technology as a candidate technology.<br><br>',
    'LoadProfileBoilerFuel':'<b>LoadProfileBoilerFuel</b> attributes define the site’s business-as-usual <button type="button" data-target="#Boilerinputs_panel" class="btn btn-secondary btn-sm scroll_button">Boiler</button> fuel consumption for serving the heating load. This load is not evaluated by default. This load may be served by <b>Boiler</b> (business-as-usual), <button type="button" data-target="#CHPinputs_panel" class="btn btn-secondary btn-sm scroll_button">CHP</button>, and <button type="button" data-target="#HotTESinputs_panel" class="btn btn-secondary btn-sm scroll_button">HotTES</button> technologies. <button type="button" data-target="#AbsorptionChillerinputs_panel" class="btn btn-secondary btn-sm scroll_button">AbsorptionChiller</button> adds to the gross heating load due to its thermal consumption. This load and the supplying technologies are not affected by a grid outage in a resilience scenario.<br><br>',
    'LoadProfileChillerThermal':'<b>LoadProfileChillerThermal</b> attributes define the site’s business-as-usual <button type="button" data-target="#ElectricChillerinputs_panel" class="btn btn-secondary btn-sm scroll_button">ElectricChiller</button> thermal production for serving the cooling load, and this cooling load propagates as a subset of the total electric load (<button type="button" data-target="#LoadProfileinputs_panel" class="btn btn-secondary btn-sm scroll_button">LoadProfile</button>) by converting the thermal production to an electric consumption using the <b>LoadProfileChillerThermal</b> <em>chiller_cop</em>. This load is not evaluated explicitly by default. This load may be served by <b>ElectricChiller</b> (business-as-usual), <button type="button" data-target="#AbsorptionChillerinputs_panel" class="btn btn-secondary btn-sm scroll_button">AbsorptionChiller</button>, and <button type="button" data-target="#ColdTESinputs_panel" class="btn btn-secondary btn-sm scroll_button">ColdTES</button>. This load may be entered as a thermal load to be met by cooling technologies or by a fraction of the total electric load <b>LoadProfile</b> which is served by the <b>ElectricChiller</b> in the business-as-usual scenario. The cost of electricity for meeting the cooling load mirrors the <b>ElectricTariff</b>. In a resilience scenario, this load is zeroed out during the specified grid outage period because it is assumed the specified critical load is the entire critical load.<br><br>',
    'FuelTariff':'The <b>FuelTariff</b> attributes define the price of fuel for the <button type="button" data-target="#Boilerinputs_panel" class="btn btn-secondary btn-sm scroll_button">Boiler</button> and <button type="button" data-target="#CHPinputs_panel" class="btn btn-secondary btn-sm scroll_button">CHP</button> technologies, and these are required inputs if the <button type="button" data-target="#LoadProfileBoilerFuelinputs_panel" class="btn btn-secondary btn-sm scroll_button">LoadProfileBoilerFuel</button> is input. The price of fuel may be input as annual or monthly values.<br><br>',
    'Boiler':'The <b>Boiler</b> attributes define the technology which conventionally serves <button type="button" data-target="#LoadProfileBoilerFuelinputs_panel" class="btn btn-secondary btn-sm scroll_button">LoadProfileBoilerFuel</button> (if specified) in the business-as-usual scenario. It is assumed to exist at the site to meet the existing load, with no installed cost or O&M costs. An important <b>Boiler</b> attribute for scenarios which consider <button type="button" data-target="#CHPinputs_panel" class="btn btn-secondary btn-sm scroll_button">CHP</button> and <button type="button" data-target="#AbsorptionChillerinputs_panel" class="btn btn-secondary btn-sm scroll_button">AbsorptionChiller</button> technologies is <em>existing_boiler_production_type_steam_or_hw</em> - this attribute influences the default <b>Boiler</b> <em>boiler_efficiency</em>, <b>CHP</b> <em>thermal_effic_full_load</em>, and several of the <b>AbsorptionChiller</b> cost and performance attributes.<br><br>',
    'ElectricChiller':'The <b>ElectricChiller</b> attributes define the technology which conventionally serves the <button type="button" data-target="#LoadProfileChillerThermalinputs_panel" class="btn btn-secondary btn-sm scroll_button">LoadProfileChillerThermal</button> (if specified) in the business-as-usual scenario. This is assumed exist at the site to meet the existing load, and to have no installed cost or O&M costs.<br><br>',
    'CHP':'The <b>CHP</b> attributes define the technology which produces both electric and thermal energy to serve the <button type="button" data-target="#LoadProfileinputs_panel" class="btn btn-secondary btn-sm scroll_button">LoadProfile</button> and <button type="button" data-target="#LoadProfileBoilerFuelinputs_panel" class="btn btn-secondary btn-sm scroll_button">LoadProfileBoilerFuel</button> and consumes fuel at the price defined in <button type="button" data-target="#FuelTariffinputs_panel" class="btn btn-secondary btn-sm scroll_button">FuelTariff</button>. By default, <b>CHP</b> is not considered as a candidate technology. Specify a <em>prime_mover</em> orset <em>max_kw</em> to a large number (i.e. 1000000) to add this technology as a candidate technology. There are four <em>prime_mover</em> options and 4-6 <em>size_class</em> options for each <em>prime_mover</em> that determine the default cost and performance parameters. In order to use the provided default cost and performance parameters (even if modifying some of them), a <em>prime_mover</em> must be input; if not, all input parameters which do not have default values must be explicitly passed. The default <em>size_class</em> for all <em>prime_mover</em> inputs is 0, and in default cases average cost and performance for all <em>size_class</em> parameters are used.<br><br>',
    'AbsorptionChiller':'The <b>AbsorptionChiller</b> attributes define the technology which produces cold thermal energy to meet the <button type="button" data-target="#LoadProfileChillerThermalinputs_panel" class="btn btn-secondary btn-sm scroll_button">LoadProfileChillerThermal</button> and consumes hot thermal energy. By default, <b>AbsorptionChiller</b> is not considered as a candidate technology. Input a <b>LoadProfileChillerThermal</b> and <b>AbsorptionChiller</b> with a <em>max_ton</em> set to a large number (i.e. 1000000) to add as a candidate technology. As described in the <button type="button" data-target="#Boilerinputs_panel" class="btn btn-secondary btn-sm scroll_button">Boiler</button> section, the default cost and performance parameters are affected by the <b>Boiler</b> <em>existing_boiler_production_type_steam_or_hw</em> attribute.<br><br>',
    'ColdTES':'The <b>ColdTES</b> attributes define the storage technology which stores chilled water produced by the <button type="button" data-target="#ElectricChillerinputs_panel" class="btn btn-secondary btn-sm scroll_button">ElectricChiller</button> and/or <button type="button" data-target="#AbsorptionChillerinputs_panel" class="btn btn-secondary btn-sm scroll_button">AbsorptionChiller</button> to decouple the timing of those technologies serving the <button type="button" data-target="#LoadProfileChillerThermalinputs_panel" class="btn btn-secondary btn-sm scroll_button">LoadProfileChillerThermal</button>. By default, <b>ColdTES</b> is not considered as a candidate storage technology. Specify a <b>LoadProfileChillerThermal</b> and <b>ColdTES</b> <em>max_gal</em> attribute to a large number (i.e. 1000000) to add <b>ColdTES</b> as a candidate storage technology.  Cost is based on the size (volume, in gallons) of the storage tank. Thermal loss is based on the thermal energy storage capacity (volume converted to energy based on the assumed temperature difference of the cooling loop).<br><br>',
    'HotTES':'The <b>HotTES</b> attributes define the storage technology which stores hot water produced by <button type="button" data-target="#CHPinputs_panel" class="btn btn-secondary btn-sm scroll_button">CHP</button> (also <button type="button" data-target="#Boilerinputs_panel" class="btn btn-secondary btn-sm scroll_button">Boiler</button> but not typically relevant because the <button type="button" data-target="#FuelTariffinputs_panel" class="btn btn-secondary btn-sm scroll_button">FuelTariff</button> has no time-of-use charge structure), and it serves the <button type="button" data-target="#LoadProfileBoilerFuelinputs_panel" class="btn btn-secondary btn-sm scroll_button">LoadProfileBoilerFuel</button> (plus any thermal consumption from <button type="button" data-target="#AbsorptionChillerinputs_panel" class="btn btn-secondary btn-sm scroll_button">AbsorptionChiller</button>). By default, <b>HotTES</b> is not considered as a candidate storage technology. Specify a <b>LoadProfileBoilerFuel</b> and <b>HotTES</b> with <em>max_gal</em> set to a large number (i.e. 1000000) to add <b>HotTES</b> as a candidate storage technology.  This technology is not applicable if the <b>Boiler</b> <em>existing_boiler_production_type_steam_or_hw</em> attribute is set to “steam”. Cost is based on the size (volume, in gallons) of the storage tank. Thermal loss is based on the thermal energy storage capacity (volume converted to energy based on the assumed temperature difference of the cooling loop).<br><br>'
}

var tableParameterCell = function(name, def) {
  
  
  var rtext

  if ( def.hasOwnProperty("required") ) {
    if ( Boolean(def["required"]) ){
      rtext="Required"
    }

  } else if (def.hasOwnProperty("depends_on") || def.hasOwnProperty("replacement_sets")) {
      rtext="Required, replacement(s) available"
  } else {
      rtext = ""
  }
  
  var required_text = $("<div style='color:red'>").append($('<small>').html($('<b>').html(rtext)))
  
  var value_text = $("<small>")
  if ( def.hasOwnProperty("type") ) {
    var type_string = $("<span>").html(" <strong class='doc-parameters-value-field'>Type: </strong>"+def["type"])
    value_text.append(type_string).append($('<br>'))
  }

  if ( def.hasOwnProperty("min") ) {
    var min_string = $("<span>").html("  <strong class='doc-parameters-value-field'>Min Value: </strong>"+def["min"])
    value_text.append(min_string).append($('<br>'))
  }
  
  if ( def.hasOwnProperty("max") ) {
    var max_string = $("<span>").html(" <strong class='doc-parameters-value-field'>Max Value: </strong>"+def["max"])
    value_text.append(max_string).append($('<br>'))
  }

  if ( def.hasOwnProperty("default") ) {
    var default_string = $("<span>").html(" <strong class='doc-parameters-value-field'>Default: </strong>"+def["default"])
    value_text.append(default_string).append($('<br>'))
  }

  if ( def.hasOwnProperty("restrict_to") ) {
    var options_string = $("<span>").html(" <strong class='doc-parameters-value-field'>Options: </strong> <em>"+def["restrict_to"].join(', ')+"</em>")
    value_text.append(options_string).append($('<br>'))
  }

  if ( def.hasOwnProperty("units") ) {
    var options_string = $("<span>").html(" <strong class='doc-parameters-value-field'>Units: </strong> "+def["units"])
    value_text.append(options_string).append($('<br>'))
  }


  var pcell = $("<div>")
  pcell = pcell.append($("<div>").html($('<b>').html(name))).append($('<br>')).append(required_text).append(value_text)
  return $("<td>").append(pcell)
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
      text='<br>' + def['description']
  } else {
    text = '<br>'
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
      row.append(tableParameterCell(name, def))
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
        width ='70%'
      } else {
        width = '30%'
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
    if (all_keys[i][0]===all_keys[i][0].toLowerCase()) {
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
      var tableColumns = ["Parameter","Description"]
    } else {
      var tableColumns = ["Parameter","Description"]
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
      subdirectories.push($('<button style="margin-bottom: 5px" type="button" data-target="#'+def_keys[i]+table_name+'_panel" class="btn btn-primary btn-primary-spacing btn-sml scroll_button">').html(def_keys[i]).prop('outerHTML'))
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


var buildObjectRow = function(table_name, key_name, definition_dictionary, indent, special_cases) {
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
  
  var attributeRowName = $('<div class="col col-12">').html('<span><b>Expand Attributes Table:</b> <a class=" btn btn-secondary btn-sm" aria-expanded="false" aria-controls="collapseAttr_'+ key_name + '" href="#collapseAttr_'+ key_name + '" data-toggle="collapse">+/-</a><br><br></span>')
  objectSubTableAttributeRow.append(attributeRowName)
  collapse_container.append(objectSubTableAttributeRow)
  
  var attributeTable = buildAttributeTable(definition_dictionary,table_name)
  var attributeRowSpacer = $('<div class="col col-1">').attr('style','max-width:3%')
  var attributeRowContent = $('<div style="width:100%;" class="collapse" id="collapseAttr_'+ key_name +'" class="col col-11">').html(attributeTable)
  objectSubTableAttributeRow.append(attributeRowContent)
  objectSubTableAttributeRow.append(attributeRowSpacer)
  
  collapse_container.append(objectSubTableAttributeRow)

  var subdirectoryRowContent_result = subDirectoriesCell(definition_dictionary,table_name)

  if (subdirectoryRowContent_result !== "None") {
    var subdirectoryRowContent= $('<div class="col offset-1 col-10">').html(subdirectoryRowContent_result)  
    var objectSubTableSubdirectoryRow = $('<div class="row">')
    var attributeRowName = $('<div class="col col-12">').html('<b><span class="text-secondary">Sub Directories</span></b><br><br>')
    objectSubTableSubdirectoryRow.append(attributeRowName)
    objectSubTableSubdirectoryRow.append(subdirectoryRowContent)
    collapse_container.append(objectSubTableSubdirectoryRow)

  }
  
   

  object_panel.append(collapse_container)
  
  object_panel.append($('<div class="row">').html("<br>"))

  output.append(output_col.html(object_panel))
  return output
}


var recursiveBuildReadTable = function(input_definitions, indent, table, special_cases){

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
      table.append(buildObjectRow(table_name, key_name, next_object_defintion, indent, special_cases))
      recursiveBuildReadTable(next_object_defintion,indent+indent_adder,table, special_cases)   
  }
}

$(document).ready(function() {

  var inputDefTable = $('<div id ="inputs" class="container">')
  var outputDefTable = $('<div id ="ouputs" class="container">')
  
  recursiveBuildReadTable(nested_input_definitions,-1,inputDefTable, special_cases_inputs)
  recursiveBuildReadTable(nested_output_definitions,-1,outputDefTable, {})

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
