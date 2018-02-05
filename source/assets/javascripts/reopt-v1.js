
var nested_input_definitions = {
  "Scenario": {
    "user_id": {
      "type": "str",
      "description": "Not currently used"
    },
    "time_steps_per_hour": {
      "default": 1,
      "max": 1,
      "type": "int",
      "description": "The number of time steps per hour in the REopt simulation",
      "min": 1
    },
    "timeout_seconds": {
      "default": 295,
      "max": 295,
      "type": "float",
      "description": "The number of seconds allowed before the optimization times out",
      "min": 1,
      "units": "seconds"
    },
    "Site": {
      "LoadProfile": {
        "loads_kw": {
          "replacement_sets": [
            ["loads_kw"],
            ["doe_reference_name", "monthly_totals_kwh"],
            ["annual_kwh", "doe_reference_name"]
          ],
          "type": "list of floats",
          "description": "Hourly load over all hours in one year",
          "units": "kW"
        },
        "outage_end_hour": {
          "max": 8759,
          "type": "int",
          "description": "Hour of year that grid outage ends. Must be greater than outage_start",
          "min": 0
        },
        "monthly_totals_kwh": {
          "replacement_sets": [
            ["loads_kw"],
            ["doe_reference_name", "monthly_totals_kwh"],
            ["annual_kwh", "doe_reference_name"]
          ],
          "type": "list of floats",
          "description": "Array (length of 12) of total monthly energy consumption used to scale simulated building load profile.",
          "depends_on": ["doe_reference_name"],
          "units": "kWh"
        },
        "year": {
          "default": 2018,
          "max": 9999,
          "type": "int",
          "description": "Year of Custom Load Profile. If a custom load profile is uploaded via the loads_kw parameter, it is important that this year correlates with the load profile so that weekdays/weekends are determined correctly for the utility rate tariff",
          "min": 1
        },
        "annual_kwh": {
          "type": "float",
          "description": "Annual energy consumption used to scale simulated building load profile, if <b><small>monthly_totals_kwh</b></small> is not provided.",
          "min": 0,
          "max": 1000000000000.0,
          "depends_on": ["doe_reference_name"],
          "replacement_sets": [
            ["loads_kw"],
            ["doe_reference_name", "monthly_totals_kwh"],
            ["annual_kwh", "doe_reference_name"]
          ],
          "units": "kWh"
        },
        "doe_reference_name": {
          "replacement_sets": [
            ["loads_kw"],
            ["doe_reference_name", "annual_kwh"],
            ["doe_reference_name", "monthly_totals_kwh"]
          ],
          "depends_on": ["annual_kwh or monthly_totals_kwh"],
          "type": "str",
          "description": "Simulated load profile from DOE <a href='https: //energy.gov/eere/buildings/commercial-reference-buildings' target='blank'>Commercial Reference Buildings</a>",
          "restrict_to": ["FastFoodRest", "FullServiceRest", "Hospital", "LargeHotel", "LargeOffice", "MediumOffice", "MidriseApartment", "Outpatient", "PrimarySchool", "RetailStore", "SecondarySchool", "SmallHotel", "SmallOffice", "StripMall", "Supermarket", "Warehouse", "FlatLoad"]
        },
        "critical_load_pct": {
          "default": 0.5,
          "max": 1,
          "type": "float",
          "description": "Critical load factor is multiplied by the typical load to determine the critical load that must be met during an outage. Value must be between zero and one, inclusive",
          "min": 0,
          "units": "%"
        },
        "outage_start_hour": {
          "max": 8759,
          "type": "int",
          "description": "Hour of year that grid outage starts. Must be less than outage_end",
          "min": 0
        }
      },
      "Storage": {
        "total_rebate_us_dollars_per_kw": {
          "default": 0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Rebate based on installed power capacity",
          "min": 0,
          "units": "$/kW"
        },
        "max_kwh": {
          "default": 1000000,
          "type": "float",
          "description": "Maximum battery energy storage capacity constraint for optimization. Set to zero to disable Storage",
          "min": 0,
          "units": "kWh"
        },
        "rectifier_efficiency_pct": {
          "default": 0.96,
          "max": 1,
          "type": "float",
          "description": "Battery rectifier efficiency",
          "min": 0,
          "units": "%"
        },
        "total_itc_pct": {
          "default": 0.0,
          "max": 1,
          "type": "float",
          "description": "Total investment tax credit in percent applied toward capital costs",
          "min": 0,
          "units": "%"
        },
        "min_kw": {
          "default": 0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Minimum battery power capacity size constraint for optimization",
          "min": 0,
          "units": "kW"
        },
        "max_kw": {
          "default": 1000000,
          "max": 1000000000.0,
          "type": "float",
          "description": "Maximum battery power capacity size constraint for optimization. Set to zero to disable storage",
          "min": 0,
          "units": "kW"
        },
        "replace_cost_us_dollars_per_kw": {
          "default": 460,
          "max": 10000.0,
          "type": "float",
          "description": "Battery power capacity replacement cost at time of replacement year",
          "min": 0,
          "units": "$/kW"
        },
        "replace_cost_us_dollars_per_kwh": {
          "default": 230,
          "max": 10000.0,
          "type": "float",
          "description": "Battery energy capacity replacement cost at time of replacement year",
          "min": 0,
          "units": "$/kWh"
        },
        "min_kwh": {
          "default": 0,
          "type": "float",
          "description": "Minimum battery energy storage capacity constraint for optimization",
          "min": 0,
          "units": "kWh"
        },
        "installed_cost_us_dollars_per_kw": {
          "default": 1000,
          "max": 10000.0,
          "type": "float",
          "description": "Total upfront battery power capacity costs (e.g. inverter and balance of power systems)",
          "min": 0,
          "units": "$/kW"
        },
        "battery_replacement_year": {
          "default": 10,
          "max": 75,
          "type": "float",
          "description": "Number of years from start of analysis period to replace battery",
          "min": 0
        },
        "installed_cost_us_dollars_per_kwh": {
          "default": 500,
          "max": 10000.0,
          "type": "float",
          "description": "Total upfront battery costs",
          "min": 0,
          "units": "$/kWh"
        },
        "inverter_efficiency_pct": {
          "default": 0.96,
          "max": 1,
          "type": "float",
          "description": "Battery inverter efficiency",
          "min": 0,
          "units": "%"
        },
        "macrs_itc_reduction": {
          "default": 0.5,
          "max": 1,
          "type": "float",
          "description": "Percent of the ITC value by which depreciable basis is reduced",
          "min": 0,
          "units": "%"
        },
        "canGridCharge": {
          "default": true,
          "type": "bool",
          "description": "Flag to set whether the battery can be charged from the grid, or just onsite generation"
        },
        "macrs_bonus_pct": {
          "default": 0.4,
          "max": 1,
          "type": "float",
          "description": "Percent of upfront project costs to depreciate under MACRS in year one in addtion to scheduled depreciation",
          "min": 0,
          "units": "%"
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
          "restrict_to": [0, 5, 7]
        },
        "internal_efficiency_pct": {
          "default": 0.975,
          "max": 1,
          "type": "float",
          "description": "Battery inherent efficiency independent of inverter and rectifier",
          "min": 0,
          "units": "%"
        },
        "soc_min_pct": {
          "default": 0.2,
          "max": 1,
          "type": "float",
          "description": "Minimum allowable battery state of charge",
          "min": 0,
          "units": "%"
        },
        "soc_init_pct": {
          "default": 0.5,
          "max": 1,
          "type": "float",
          "description": "Battery state of charge at first hour of optimization",
          "min": 0,
          "units": "%"
        }
      },
      "Financial": {
        "escalation_pct": {
          "default": 0.026,
          "max": 1,
          "type": "float",
          "description": "Annual nominal utility electricity cost escalation rate",
          "min": -1,
          "units": "%"
        },
        "offtaker_tax_pct": {
          "default": 0.4,
          "max": 1,
          "type": "float",
          "description": "Host tax rate",
          "min": 0,
          "units": "%"
        },
        "offtaker_discount_pct": {
          "default": 0.081,
          "max": 1,
          "type": "float",
          "description": "Nominal host discount rate",
          "min": 0,
          "units": "%"
        },
        "om_cost_escalation_pct": {
          "default": 0.025,
          "max": 1,
          "type": "float",
          "description": "Annual nominal O&M cost escalation rate",
          "min": -1,
          "units": "%"
        },
        "analysis_years": {
          "default": 20,
          "max": 75,
          "type": "int",
          "description": "Analysis period",
          "min": 0
        }
      },
      "land_acres": {
        "max": 1000000.0,
        "type": "float",
        "description": "Land area in acres available for PV panel siting",
        "min": 0,
        "units": "acres"
      },
      "roof_squarefeet": {
        "max": 1000000000.0,
        "type": "float",
        "description": "Area of roof in square feet available for PV siting",
        "min": 0,
        "units": "square feet"
      },
      "latitude": {
        "max": 90,
        "required": true,
        "type": "float",
        "description": "The approximate latitude of the site in decimal degrees",
        "min": -90,
        "units": "degrees"
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
          "default": 0.4,
          "max": 1,
          "type": "float",
          "description": "Percent of upfront project costs to depreciate in year one in addition to scheduled depreciation",
          "min": 0,
          "units": "%"
        },
        "max_kw": {
          "default": 1000000000.0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Maximum PV size constraint for optimization. Set to zero to disable PV",
          "min": 0,
          "units": "kW"
        },
        "pbi_max_us_dollars": {
          "default": 1000000000.0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Maximum annual value of production-based incentives",
          "min": 0,
          "units": "$"
        },
        "radius": {
          "default": 0,
          "type": "float",
          "description": "Radius to use when searching for the closest climate data station. Use zero to use the closest station regardless of the distance",
          "min": 0
        },
        "state_ibi_pct": {
          "default": 0,
          "max": 1,
          "type": "float",
          "description": "Percentage of capital costs offset by state incentives",
          "min": 0,
          "units": "%"
        },
        "utility_rebate_max_us_dollars": {
          "default": 10000000000.0,
          "max": 10000000000.0,
          "type": "float",
          "description": "Maximum utility rebate",
          "min": 0,
          "units": "$"
        },
        "installed_cost_us_dollars_per_kw": {
          "default": 2000,
          "max": 100000.0,
          "type": "float",
          "description": "Installed PV cost in $/kW",
          "min": 0,
          "units": "$/kW"
        },
        "utility_ibi_max_us_dollars": {
          "default": 10000000000.0,
          "max": 10000000000.0,
          "type": "float",
          "description": "Maximum dollar value of utility percentage-based capital cost incentive",
          "min": 0,
          "units": "$"
        },
        "tilt": {
          "default": "Site latitude",
          "max": 90,
          "type": "float",
          "description": "PV system tilt",
          "min": 0
        },
        "gcr": {
          "default": 0.4,
          "max": 0.99,
          "type": "float",
          "description": "PV ground cover ratio (photovoltaic array area : total ground area).",
          "min": 0.01
        },
        "pbi_system_max_kw": {
          "default": 1000000000.0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Maximum system size eligible for production-based incentive",
          "min": 0,
          "units": "kW"
        },
        "utility_ibi_pct": {
          "default": 0,
          "max": 1,
          "type": "float",
          "description": "Percentage of capital costs offset by utility incentives",
          "min": 0,
          "units": "%"
        },
        "state_ibi_max_us_dollars": {
          "default": 10000000000.0,
          "max": 10000000000.0,
          "type": "float",
          "description": "Maximum dollar value of state percentage-based capital cost incentive",
          "min": 0,
          "units": "$"
        },
        "state_rebate_us_dollars_per_kw": {
          "default": 0,
          "max": 1000000000.0,
          "type": "float",
          "description": "State rebate based on installed capacity",
          "min": 0,
          "units": "$/kW"
        },
        "macrs_option_years": {
          "default": 5,
          "type": "int",
          "description": "Duration over which accelerated depreciation will occur. Set to zero to disable",
          "restrict_to": [0, 5, 7]
        },
        "state_rebate_max_us_dollars": {
          "default": 10000000000.0,
          "max": 10000000000.0,
          "type": "float",
          "description": "Maximum state rebate",
          "min": 0,
          "units": "$"
        },
        "dc_ac_ratio": {
          "default": 1.1,
          "max": 2,
          "type": "float",
          "description": "PV DC-AC ratio",
          "min": 0
        },
        "federal_itc_pct": {
          "default": 0.3,
          "max": 1,
          "type": "float",
          "description": "Percentage of capital costs that are credited towards federal taxes",
          "min": 0,
          "units": "%"
        },
        "degradation_pct": {
          "default": 0.005,
          "max": 1,
          "type": "float",
          "description": "Annual rate of degradation in PV energy production",
          "min": 0,
          "units": "%"
        },
        "module_type": {
          "default": 0,
          "type": "int",
          "description": "PV module type (0: Standard; 1: Premium; 2: Thin Film)",
          "restrict_to": [0, 1, 2]
        },
        "array_type": {
          "default": 0,
          "type": "int",
          "description": "PV Watts array type (0: Ground Mount Fixed (Open Rack); 1: Rooftop, Fixed; 2: Ground Mount 1-Axis Tracking; 3 : 1-Axis Backtracking; 4: Ground Mount, 2-Axis Tracking)",
          "restrict_to": [0, 1, 2, 3, 4]
        },
        "pbi_us_dollars_per_kwh": {
          "default": 0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Production-based incentive value",
          "min": 0,
          "units": "kWh"
        },
        "om_cost_us_dollars_per_kw": {
          "default": 16,
          "max": 1000.0,
          "type": "float",
          "description": "Annual PV operations and maintenance costs in $/kW",
          "min": 0,
          "units": "kW"
        },
        "utility_rebate_us_dollars_per_kw": {
          "default": 0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Utility rebate based on installed capacity",
          "min": 0,
          "units": "kW"
        },
        "min_kw": {
          "default": 0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Minimum PV size constraint for optimization",
          "min": 0,
          "units": "kW"
        },
        "losses": {
          "default": 0.14,
          "max": 0.99,
          "type": "float",
          "description": "PV system performance losses",
          "min": 0,
          "units": "%"
        },
        "macrs_itc_reduction": {
          "default": 0.5,
          "max": 1,
          "type": "float",
          "description": "Percent of the ITC value by which depreciable basis is reduced",
          "min": 0,
          "units": "%"
        },
        "federal_rebate_us_dollars_per_kw": {
          "default": 0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Federal rebates based on installed capacity",
          "min": 0,
          "units": "$/kW"
        },
        "inv_eff": {
          "default": 0.96,
          "max": 0.995,
          "type": "float",
          "description": "PV inverter efficiency",
          "min": 0.9,
          "units": "%"
        },
        "azimuth": {
          "default": 180,
          "max": 360,
          "type": "float",
          "description": "PV azimuth angle",
          "min": 0,
          "units": "degrees"
        }
      },
      "ElectricTariff": {
        "wholesale_rate_us_dollars_per_kwh": {
          "default": 0,
          "type": "float",
          "description": "Price of electricity sold back to the grid in absence of net metering",
          "min": 0,
          "units": "$/kWh"
        },
        "net_metering_limit_kw": {
          "default": 0,
          "max": 1000000000.0,
          "type": "float",
          "description": "System size above which net metering is not allowed",
          "min": 0,
          "units": "kW"
        },
        "blended_monthly_rates_<br>us_dollars_per_kwh": {
          "replacement_sets": [
            ["urdb_response"],
            ["blended_monthly_demand_charges_us_dollars_per_kw", "blended_monthly_rates_us_dollars_per_kwh"],
            ["urdb_label"],
            ["urdb_utilty_name", "urdb_rate_name"]
          ],
          "type": "list of floats",
          "description": "Array (length of 12) of blended energy rates (total monthly energy in kWh divided by monthly cost in $)",
          "depends_on": ["blended_monthly_demand_charges_us_dollars_per_kw"],
          "units": "$/kWh"
        },
        "interconnection_limit_kw": {
          "default": 100000000.0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Limit on system capacity size that can be interconnected to the grid",
          "min": 0,
          "units": "kW"
        },
        "blended_monthly_demand_<br>charges_us_dollars_per_kw": {
          "replacement_sets": [
            ["urdb_response"],
            ["blended_monthly_demand_charges_us_dollars_per_kw", "blended_monthly_rates_us_dollars_per_kwh"],
            ["urdb_label"],
            ["urdb_utilty_name", "urdb_rate_name"]
          ],
          "type": "list of floats",
          "description": "Array (length of 12) of blended demand charges (demand charge cost in $ divided by monthly peak demand in kW)",
          "depends_on": ["blended_monthly_rates_us_dollars_per_kwh"],
          "units": "$/kW"
        },
        "urdb_label": {
          "replacement_sets": [
            ["urdb_response"],
            ["blended_monthly_demand_charges_us_dollars_per_kw", "blended_monthly_rates_us_dollars_per_kwh"],
            ["urdb_label"],
            ["urdb_utilty_name", "urdb_rate_name"]
          ],
          "type": "str",
          "description": "Label attribute of utility rate structure from <a href='https: //openei.org/services/doc/rest/util_rates/?version=3' target='blank'>Utility Rate Database API</a>"
        },
        "urdb_rate_name": {
          "replacement_sets": [
            ["urdb_response"],
            ["blended_monthly_demand_charges_us_dollars_per_kw", "blended_monthly_rates_us_dollars_per_kwh"],
            ["urdb_label"],
            ["urdb_utilty_name", "urdb_rate_name"]
          ],
          "type": "str",
          "description": "Name of utility rate from  <a href='https: //openei.org/wiki/Utility_Rate_Database' target='blank'>Utility Rate Database</a>",
          "depends_on": ["urdb_utilty_name"]
        },
        "urdb_response": {
          "replacement_sets": [
            ["urdb_response"],
            ["blended_monthly_demand_charges_us_dollars_per_kw", "blended_monthly_rates_us_dollars_per_kwh"],
            ["urdb_label"],
            ["urdb_utilty_name", "urdb_rate_name"]
          ],
          "type": "dict",
          "description": "Utility rate structure from <a href='https: //openei.org/services/doc/rest/util_rates/?version=3' target='blank'>Utility Rate Database API</a>"
        },
        "urdb_utilty_name": {
          "replacement_sets": [
            ["urdb_response"],
            ["blended_monthly_demand_charges_us_dollars_per_kw", "blended_monthly_rates_us_dollars_per_kwh"],
            ["urdb_label"],
            ["urdb_utilty_name", "urdb_rate_name"]
          ],
          "type": "str",
          "description": "Name of Utility from  <a href='https: //openei.org/wiki/Utility_Rate_Database' target='blank'>Utility Rate Database</a>",
          "depends_on": ["urdb_rate_name"]
        }
      },
      "Wind": {
        "pbi_us_dollars_per_kwh": {
          "default": 0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Production-based incentive value",
          "min": 0,
          "units": "$/kWh"
        },
        "installed_cost_us_dollars_per_kw": {
          "default": 2000,
          "max": 100000.0,
          "type": "float",
          "description": "Total upfront installed costs",
          "min": 0,
          "units": "$/kW"
        },
        "macrs_bonus_pct": {
          "default": 0.4,
          "max": 1,
          "type": "float",
          "description": "Percent of upfront project costs to depreciate under MACRS",
          "min": 0,
          "units": "%"
        },
        "om_cost_us_dollars_per_kw": {
          "default": 35,
          "max": 1000.0,
          "type": "float",
          "description": "Total annual operations and maintenance costs",
          "min": 0,
          "units": "$/kW"
        },
        "utility_rebate_us_dollars_per_kw": {
          "default": 0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Utility rebates based on installed capacity",
          "min": 0,
          "units": "$/kW"
        },
        "min_kw": {
          "default": 0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Minimum wind power capacity constraint for optimization",
          "min": 0,
          "units": "kW"
        },
        "pbi_years": {
          "default": 1,
          "max": 1000000000.0,
          "type": "float",
          "description": "Duration of production-based incentives from installation date",
          "min": 0
        },
        "max_kw": {
          "default": 0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Maximum wind power capacity constraint for optimization. Set to zero to disable Wind. Disabled by default",
          "min": 0,
          "units": "kW"
        },
        "state_rebate_us_dollars_per_kw": {
          "default": 0,
          "max": 1000000000.0,
          "type": "float",
          "description": "State rebates based on installed capacity",
          "min": 0,
          "units": "$/kW"
        },
        "macrs_itc_reduction": {
          "default": 0.5,
          "max": 1,
          "type": "float",
          "description": "Percent of the full ITC that depreciable basis is reduced by",
          "min": 0,
          "units": "%"
        },
        "federal_itc_pct": {
          "default": 0.3,
          "max": 1,
          "type": "float",
          "description": "Percent federal capital cost incentive",
          "min": 0,
          "units": "%"
        },
        "pbi_max_us_dollars": {
          "default": 1000000000.0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Maximum rebate allowed under utility production-based incentives",
          "min": 0,
          "units": "$"
        },
        "federal_rebate_us_dollars_per_kw": {
          "default": 0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Federal rebate based on installed capacity",
          "min": 0,
          "units": "$/kW"
        },
        "state_rebate_max_us_dollars": {
          "default": 10000000000.0,
          "max": 10000000000.0,
          "type": "float",
          "description": "Maximum rebate allowed under state rebates",
          "min": 0,
          "units": "$"
        },
        "pbi_system_max_kw": {
          "default": 1000000000.0,
          "max": 1000000000.0,
          "type": "float",
          "description": "Maximum system size for which production-based incentives apply",
          "min": 0,
          "units": "kW"
        },
        "macrs_option_years": {
          "default": 5,
          "type": "int",
          "description": "MACRS schedule for financial analysis. Set to zero to disable",
          "restrict_to": [0, 5, 7]
        },
        "state_ibi_pct": {
          "default": 0,
          "max": 1,
          "type": "float",
          "description": "Percent of upfront project costs to discount under state investment based incentives",
          "min": 0,
          "units": "%"
        },
        "utility_rebate_max_us_dollars": {
          "default": 10000000000.0,
          "max": 10000000000.0,
          "type": "float",
          "description": "Maximum rebate allowed under utility rebates",
          "min": 0,
          "units": "$"
        },
        "utility_ibi_pct": {
          "default": 0,
          "max": 1,
          "type": "float",
          "description": "Percent of upfront project costs to discount under utility investment based incentives",
          "min": 0,
          "units": "%"
        },
        "state_ibi_max_us_dollars": {
          "default": 10000000000.0,
          "max": 10000000000.0,
          "type": "float",
          "description": "Maximum rebate allowed under state investment based incentives",
          "min": 0,
          "units": "$"
        },
        "utility_ibi_max_us_dollars": {
          "default": 10000000000.0,
          "max": 10000000000.0,
          "type": "float",
          "description": "Maximum rebate allowed under utility investment based incentives",
          "min": 0,
          "units": "$"
        }
      },
      "longitude": {
        "max": 180,
        "required": true,
        "type": "float",
        "description": "The approximate longitude of the site in decimal degrees",
        "min": -180,
        "units": "degrees"
      }
    }
  }
}




var nested_output_definitions = {
  "inputs": {},
  "messages": {
    "error": {
      "description": "Error generated by simulation",
      "type": "str"
    },
    "warnings": {
      "description": "Warnings generated by simulation",
      "type": "list of string"
    }
  },
  "outputs": {
    "Scenario": {
      "Site": {
        "ElectricTariff": {
          "total_demand_cost_bau_us_dollars": {
            "description": "Business as usual total lifecycle utility demand cost over the analysis period, after-tax",
            "type": "float",
            "units": "$"
          },
          "total_demand_cost_us_dollars": {
            "description": "Optimal total lifecycle utility demand cost over the analysis period, after-tax",
            "type": "float",
            "units": "$"
          },
          "total_energy_cost_bau_us_dollars": {
            "description": "Business as usual total utility energy cost over the lifecycle, after-tax",
            "type": "float",
            "units": "$"
          },
          "total_energy_cost_us_dollars": {
            "description": "Total utility energy cost over the lifecycle, after-tax",
            "type": "float",
            "units": "$"
          },
          "total_fixed_cost_bau_us_dollars": {
            "description": "Business as usual total utility fixed cost over the lifecycle, after-tax",
            "type": "float",
            "units": "$"
          },
          "total_fixed_cost_us_dollars": {
            "description": "Total utility fixed cost over the lifecycle, after-tax",
            "type": "float",
            "units": "$"
          },
          "total_min_charge_adder_bau_us_dollars": {
            "description": "Business as usual total utility minimum charge adder",
            "type": "float",
            "units": "$"
          },
          "total_min_charge_adder_us_dollars": {
            "description": "Total utility minimum charge adder",
            "type": "float",
            "units": "$"
          },
          "year_one_bill_bau_us_dollars": {
            "description": "Business as usual year one total utility bill",
            "type": "float",
            "units": "$"
          },
          "year_one_bill_us_dollars": {
            "description": "Optimal year one total utility bill",
            "type": "float",
            "units": "$"
          },
          "year_one_demand_cost_bau_us_dollars": {
            "description": "Business as usual year one utility demand cost",
            "type": "float",
            "units": "$"
          },
          "year_one_demand_cost_series_us_dollars_per_kw": {
            "description": "Year one hourly demand costs",
            "type": "list of float",
            "units": "$/kW"
          },
          "year_one_demand_cost_us_dollars": {
            "description": "Optimal year one utility demand cost",
            "type": "float",
            "units": "$"
          },
          "year_one_energy_cost_bau_us_dollars": {
            "description": "Business as usual year one utility energy cost",
            "type": "float",
            "units": "$"
          },
          "year_one_energy_cost_series_us_dollars_per_kwh": {
            "description": "Year one hourly energy costs",
            "type": "list of float",
            "units": "$/kWh"
          },
          "year_one_energy_cost_us_dollars": {
            "description": "Optimal year one utility energy cost",
            "type": "float",
            "units": "$"
          },
          "year_one_energy_supplied_kwh": {
            "description": "Year one hourly time series of power from grid to load",
            "type": "float",
            "units": "kWh"
          },
          "year_one_export_benefit_us_dollars": {
            "description": "Optimal year one value of exported energy",
            "type": "float",
            "units": "$"
          },
          "year_one_fixed_cost_bau_us_dollars": {
            "description": "Business as usual year one utility fixed cost",
            "type": "float",
            "units": "$"
          },
          "year_one_fixed_cost_us_dollars": {
            "description": "Optimal year one utility fixed cost",
            "type": "float",
            "units": "$"
          },
          "year_one_min_charge_adder_bau_us_dollars": {
            "description": "Business as usual year one utility minimum charge adder",
            "type": "float",
            "units": "$"
          },
          "year_one_min_charge_adder_us_dollars": {
            "description": "Optimal year one utility minimum charge adder",
            "type": "float",
            "units": "$"
          },
          "year_one_to_battery_series_kw": {
            "description": "Year one hourly time series of power from grid to battery",
            "type": "list of float",
            "units": "kW"
          },
          "year_one_to_load_series_kw": {
            "description": "Year one hourly time series of power from grid to load",
            "type": "list of float",
            "units": "kW"
          }
        },
        "Financial": {
          "lcc_bau_us_dollars": {
            "description": "Business as usual lifecycle cost",
            "type": "float",
            "units": "$"
          },
          "lcc_us_dollars": {
            "description": "Optimal lifecycle cost",
            "type": "float",
            "units": "$"
          },
          "net_capital_costs_plus_om_us_dollars": {
            "description": "Optimal capital cost plus present value of operations and maintenance over anlaysis period",
            "type": "float",
            "units": "$"
          },
          "npv_us_dollars": {
            "description": "Net Present Value (NPV) of savings realized by the project",
            "type": "float",
            "units": "$"
          }
        },
        "LoadProfile": {
          "year_one_electric_load_series_kw": {
            "description": "Year one hourly time series of electric load",
            "type": "list of float",
            "units": "kW"
          }
        },
        "PV": {
          "average_yearly_energy_exported_kwh": {
            "description": "Average annual energy exported by the PV system",
            "type": "float",
            "units": "kWh"
          },
          "average_yearly_energy_produced_kwh": {
            "description": "Average annual energy produced by the PV system over one year",
            "type": "float",
            "units": "kWh"
          },
          "size_kw": {
            "description": "Optimal PV system size",
            "type": "float",
            "units": "kW"
          },
          "year_one_energy_produced_kwh": {
            "description": "Year one energy produced by the PV system",
            "type": "float",
            "units": "kWh"
          },
          "year_one_power_production_series_kw": {
            "description": "Year one PV power production time series",
            "type": "list of float",
            "units": "kW"
          },
          "year_one_to_battery_series_kw": {
            "description": "Year one hourly time series of PV charging the battery",
            "type": "list of float",
            "units": "kW"
          },
          "year_one_to_grid_series_kw": {
            "description": "Year one hourly time series of PV exporting to grid",
            "type": "list of float",
            "units": "kW"
          },
          "year_one_to_load_series_kw": {
            "description": "Year one hourly time series of PV serving load",
            "type": "list of float",
            "units": "kW"
          }
        },
        "Storage": {
          "size_kw": {
            "description": "Optimal battery power capacity",
            "type": "float",
            "units": "kW"
          },
          "size_kwh": {
            "description": "Optimal battery energy capacity",
            "type": "float",
            "units": "kWh"
          },
          "year_one_soc_series_pct": {
            "description": "Year one hourly time series of battery state of charge",
            "type": "list of float",
            "units": "%"
          },
          "year_one_to_grid_series_kw": {
            "description": "Year one hourly time series of battery exporting to grid",
            "type": "list of float",
            "units": "kW"
          },
          "year_one_to_load_series_kw": {
            "description": "Year one hourly time series of battery serving load",
            "type": "list of float",
            "units": "kW"
          }
        },
        "Wind": {
          "average_yearly_energy_exported_kwh": {
            "description": "Average annual energy exported by the wind system",
            "type": "float",
            "units": "kWh"
          },
          "average_yearly_energy_produced_kwh": {
            "description": "Average energy produced by the wind system over one year",
            "type": "float",
            "units": "kWh"
          },
          "size_kw": {
            "description": "Recommended wind system size",
            "type": "float",
            "units": "kW"
          },
          "year_one_energy_produced_kwh": {
            "description": "Wind energy produced in year one",
            "type": "float",
            "units": "kWh"
          },
          "year_one_power_production_series_kw": {
            "description": "Hourly wind resource",
            "type": "list of float",
            "units": "kW"
          },
          "year_one_to_battery_series_kw": {
            "description": "Year one wind to battery time series",
            "type": "list of float",
            "units": "kW"
          },
          "year_one_to_grid_series_kw": {
            "description": "Year one wind to grid time series",
            "type": "list of float",
            "units": "kW"
          },
          "year_one_to_load_series_kw": {
            "description": "Year one wind to load time series",
            "type": "list of float",
            "units": "kW"
          }
        }
      },
      "api_version": {
        "type": "str",
        "description": "The current release number of the REopt Lite API"
      },
      "status": {
        "description": "A message about the state of the optimization task and an errors that may occur",
        "type": "str"
      },
      "uuid": {
        "description": "A unique id for the optimization task",
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