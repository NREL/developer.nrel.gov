---
title: PVWatts (Version 5)
summary: NREL's PVWatts calculates the energy production of grid-connected photovoltaic
  (PV) energy systems. This service estimates the performance of hypothetical residential
  and small commercial PV installations.
url: GET /api/pvwatts/v5
disqus: true

---

# {{title}} <span class="url">({{url}})</span>
{{summary}}

PVWatts Version 5 is a major update to the PVWatts Version 1 algorithms that were used in previous versions of the PVWatts web services V1-V4. Full technical details can be found in: Dobos, A. P. PVWatts Version 5 Manual. NREL/TP-6A20-62641, 2014, forthcoming.

<ul id="toc"></ul>

## Request URL

<pre>GET /api/pvwatts/v5<em>.format?parameters</em></pre>

## Request Parameters

<table border="0" cellpadding="0" cellspacing="0" class="doc-parameters">
  <thead>
    <tr>
      <th class="doc-parameters-name" scope="col">Parameter</th>
      <th class="doc-parameters-required" scope="col">Required</th>
      <th class="doc-parameters-value" scope="col">Value</th>
      <th class="doc-parameters-description" scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="doc-parameter-name" scope="row">format</th>
      <td class="doc-parameter-required">Yes</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
        <div class="doc-parameter-value-field">
          <strong>Options:</strong> <em>json</em>, <em>xml</em>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>The output response format.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">api_key</th>
      <td class="doc-parameter-required">Yes</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Your developer API key. See <a href="/docs/api-key/">API keys</a> for more information.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">system_capacity</th>
      <td class="doc-parameter-required">Yes</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
        <div class="doc-parameter-value-field">
          <strong>Range:</strong> <i>0.05</i> to <em>500000</em>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Nameplate capacity (kW).</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">module_type</th>
      <td class="doc-parameter-required">Yes</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> integer
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
        <div class="doc-parameter-value-field">
          <strong>Options:</strong> <i>0, 1, 2</i>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Module type.</p>
        <table border="0" cellpadding="0" cellspacing="0" class="doc-parameter-options">
          <thead>
            <tr>
              <th scope="col">Option</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">0</th>
              <td>Standard</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Premium</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Thin film</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">losses</th>
      <td class="doc-parameter-required">Yes</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
        <div class="doc-parameter-value-field">
          <strong>Range:</strong> <i>-5 to 99</i>
        </div>
      </td>
      <td class="doc-parameter-description">System losses.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">array_type</th>
      <td class="doc-parameter-required">Yes</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> integer
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
        <div class="doc-parameter-value-field">
          <strong>Options:</strong> <i>0, 1, 2, 3, 4</i>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Module type.</p>
        <table border="0" cellpadding="0" cellspacing="0" class="doc-parameter-options">
          <thead>
            <tr>
              <th scope="col">Option</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">0</th>
              <td>Fixed - Open Rack</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Fixed - Roof Mounted</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>1-Axis</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>1-Axis Backtracking</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>2-Axis</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">tilt</th>
      <td class="doc-parameter-required">Yes</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
        <div class="doc-parameter-value-field">
          <strong>Range:</strong> <i>0 to 90</i>
        </div>
      </td>
      <td class="doc-parameter-description">Tilt angle (degrees).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">azimuth</th>
      <td class="doc-parameter-required">Yes</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
        <div class="doc-parameter-value-field">
          <strong>Min:</strong> <i>0</i>
        </div>
        <div class="doc-parameter-value-field">
          <strong>Max:</strong> <i>< 360</i>
        </div>
      </td>
      <td class="doc-parameter-description">Azimuth angle (degrees).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">address</th>
      <td class="doc-parameter-required">Depends</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>The address to use (lat/lon returned by Google's geocoding service). Required if lat/lon or file_id not specified.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">lat</th>
      <td class="doc-parameter-required">Depends</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
        <div class="doc-parameter-value-field">
          <strong>Range:</strong> <i>-90 to 90</i>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>The latitude for the location to use. Required if address or file_id not specified.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">lon</th>
      <td class="doc-parameter-required">Depends</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
        <div class="doc-parameter-value-field">
          <strong>Range:</strong> <i>-180 to 180</i>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>The longitude for the location to use. Required if address or file_id not specified.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">file_id</th>
      <td class="doc-parameter-required">Depends</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> none
        </div>
      </td>
      <td class="doc-parameter-description">
        An identifier provided by the <a href="/doc/api/solar/data_query/v1">solar data query</a> web service to specify the climate data file to use. Required if lat/lon or address not specified.
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">dataset</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> tmy2
        </div>
        <div class="doc-parameter-value-field">
          <strong>Options:</strong> <i>tmy2, tmy3, intl</i>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>The climate dataset to use. Should not be passed in if using file_id to specify the climate data file.</p>
        <table border="0" cellpadding="0" cellspacing="0" class="doc-parameter-options">
          <thead>
            <tr>
              <th scope="col">Option</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">tmy2</th>
              <td>
                <p>TMY2 station data (see <a href="http://rredc.nrel.gov/solar/old_data/nsrdb/1961-1990/tmy2/State.html" target="_blank">Typical Meteorological Year, version 2</a>)</p>
              </td>
            </tr>
            <tr>
              <th scope="row">tmy3</th>
              <td>
                <p>TMY3 station data (see <a href="http://rredc.nrel.gov/solar/old_data/nsrdb/1991-2005/tmy3/by_USAFN.html">Typical Meteorological Year version 3</a>)</p>
              </td>
            </tr>
            <tr>
              <th scope="row">intl</th>
              <td>
                <p>International station data</p>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">radius</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> integer
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> 100
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>The search radius to use when searching for the closest climate data station (miles). Pass in radius=0 to use the closest station regardless of the distance.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">timeframe</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> monthly
        </div>
        <div class="doc-parameter-value-field">
          <strong>Options:</strong> <i>monthly, hourly</i>
        </div>
      </td>
      <td class="doc-parameter-description">Granularity of the output response.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">dc_ac_ratio</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> 1.1
        </div>
        <div class="doc-parameter-value-field">
          <strong>Range:</strong> <span style="font-style: italic">must be positive</span>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>DC to AC ratio.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">gcr</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> 0.4
        </div>
        <div class="doc-parameter-value-field">
          <strong>Range:</strong> <span style="font-style: italic">0 - 3</span>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Ground coverage ratio.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">inv_eff</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> 96
        </div>
        <div class="doc-parameter-value-field">
          <strong>Range:</strong> <span style="font-style: italic">90 - 99.5</span>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Inverter efficiency at rated power.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">callback</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Return the data using <a href="http://en.wikipedia.org/wiki/JSONP">JSONP</a> and the given callback function (only applicable when using the <em>json</em> format).</p>
      </td>
    </tr>
  </tbody>
</table>

## Response Fields

The response is composed of service-related informational fields and the results of the PVWatts simulation.

<table border="0" cellpadding="0" cellspacing="0" class="doc-parameters">
  <thead>
    <tr>
      <th class="doc-parameters-name" scope="col">Field</th>
      <th class="doc-parameters-value" scope="col">Value</th>
      <th class="doc-parameters-description" scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="doc-parameter-name" scope="row">inputs</th>
      <td class="doc-parameter-value"><strong>Type:</strong> collection</td>
      <td class="doc-parameter-description">The input parameters received in the request.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">errors</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of strings</td>
      <td class="doc-parameter-description">Any error messages resulting from the request.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">warnings</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of strings</td>
      <td class="doc-parameter-description">Any warning messages resulting from the request.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">version</th>
      <td class="doc-parameter-value"><strong>Type:</strong> string</td>
      <td class="doc-parameter-description">The current version of the web service.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">ssc_info</th>
      <td class="doc-parameter-value"><strong>Type:</strong> collection</td>
      <td class="doc-parameter-description">Information about the SSC library.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">station_info</th>
      <td class="doc-parameter-value"><strong>Type:</strong> collection</td>
      <td class="doc-parameter-description">Information about the climate data used in the simulation. (see <a href="#station-info-fields">station info fields</a> for more detail)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">outputs</th>
      <td class="doc-parameter-value"><strong>Type:</strong> collection</td>
      <td class="doc-parameter-description">
        The data outputs from the simulation. (see <a href="#output-fields">output fields</a> for more detail)
      </td>
    </tr>
  </tbody>
</table>
<br>

### Station Info Fields

<table border="0" cellpadding="0" cellspacing="0" class="doc-parameters">
  <thead>
    <tr>
      <th class="doc-parameters-name" scope="col">Field</th>
      <th class="doc-parameters-value" scope="col">Value</th>
      <th class="doc-parameters-description" scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="doc-parameter-name" scope="row">lat</th>
      <td class="doc-parameter-value"><strong>Type:</strong> decimal</td>
      <td class="doc-parameter-description">Latitude of the climate station.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">lon</th>
      <td class="doc-parameter-value"><strong>Type:</strong> decimal</td>
      <td class="doc-parameter-description">Longitude of the climate station.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">elev</th>
      <td class="doc-parameter-value"><strong>Type:</strong> decimal</td>
      <td class="doc-parameter-description">Elevation of the climate station. (meters)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">tz</th>
      <td class="doc-parameter-value"><strong>Type:</strong> decimal</td>
      <td class="doc-parameter-description">Timezone offset from GMT.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">location</th>
      <td class="doc-parameter-value"><strong>Type:</strong> string</td>
      <td class="doc-parameter-description">ID of the climate station.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">city</th>
      <td class="doc-parameter-value"><strong>Type:</strong> string</td>
      <td class="doc-parameter-description">City where climate station is located.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">state</th>
      <td class="doc-parameter-value"><strong>Type:</strong> string</td>
      <td class="doc-parameter-description">State where climate station is located.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">solar_resource_file</th>
      <td class="doc-parameter-value"><strong>Type:</strong> string</td>
      <td class="doc-parameter-description">Solar resource filename.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">distance</th>
      <td class="doc-parameter-value"><strong>Type:</strong> integer</td>
      <td class="doc-parameter-description">Distance between the input location and the climate station. (meters)</td>
    </tr>
  </tbody>
</table>
<br>

### Output Fields

<table border="0" cellpadding="0" cellspacing="0" class="doc-parameters">
  <thead>
    <tr>
      <th class="doc-parameters-name" scope="col">Field</th>
      <th class="doc-parameters-value" scope="col">Value</th>
      <th class="doc-parameters-description" scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="doc-parameter-name" scope="row">poa_monthly</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of decimal</td>
      <td class="doc-parameter-description">Monthly plane of array irradiance values. (kWh/m2)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">dc_monthly</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of decimal</td>
      <td class="doc-parameter-description">Monthly DC array output. (kWhdc)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">ac_monthly</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of decimal</td>
      <td class="doc-parameter-description">Monthly AC system output. (kWhac)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">ac_annual</th>
      <td class="doc-parameter-value"><strong>Type:</strong> decimal</td>
      <td class="doc-parameter-description">Annual AC system output. (kWhac)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">solrad_monthly</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of decimal</td>
      <td class="doc-parameter-description">Monthly solar radiation values. (kWh/m2/day)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">solrad_annual</th>
      <td class="doc-parameter-value"><strong>Type:</strong> decimal</td>
      <td class="doc-parameter-description">Annual solar radiation values. (kWh/m2/day)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">ac</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of decimal</td>
      <td class="doc-parameter-description">Hourly AC system output (only when timeframe=hourly). (Wac)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">poa</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of decimal</td>
      <td class="doc-parameter-description">Hourly plane of array irradiance (only when timeframe=hourly). (W/m2)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">dn</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of decimal</td>
      <td class="doc-parameter-description">Hourly beam normal irradiance (only when timeframe=hourly). (W/m2)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">dc</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of decimal</td>
      <td class="doc-parameter-description">Hourly DC array output (only when timeframe=hourly). (Wdc)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">df</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of decimal</td>
      <td class="doc-parameter-description">Hourly diffuse irradiance (only when timeframe=hourly). (W/m2)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">tamb</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of decimal</td>
      <td class="doc-parameter-description">Hourly ambient temperature (only when timeframe=hourly). (C)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">tcell</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of decimal</td>
      <td class="doc-parameter-description">Hourly module temperature (only when timeframe=hourly) (C)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">wspd</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of decimal</td>
      <td class="doc-parameter-description">Hourly windspeed (only when timeframe=hourly). (m/s)</td>
    </tr>
  </tbody>
</table>

## Examples

### JSON Output Format

<pre>GET <a href="http://developer.nrel.gov/api/pvwatts/v5.json?api_key=DEMO_KEY&amp;lat=40&amp;lon=-105&amp;system_capacity=4&amp;azimuth=180&amp;tilt=40&amp;array_type=1&amp;module_type=1&amp;losses=10">/api/pvwatts/v5.json?api_key=DEMO_KEY&amp;lat=40&amp;lon=-105&amp;system_capacity=4&amp;azimuth=180&amp;tilt=40&amp;array_type=1&amp;module_type=1&amp;losses=10</a></pre>

```json
{
  "inputs" : {
    "lat" : "40",
    "lon" : "-105",
    "system_capacity" : "4",
    "azimuth" : "180",
    "tilt" : "40",
    "array_type" : "1",
    "module_type" : "1",
    "losses" : "10"
  },
  "errors" : [ ],
  "warnings" : [ ],
  "version" : "1.0.0",
  "ssc_info" : {
    "version" : 34,
    "build" : "Unix 64 bit GNU/C++ Feb 19 2014 11:40:21"
  },
  "station_info" : {
    "lat" : 40.016666412353516,
    "lon" : -105.25,
    "elev" : 1634.0,
    "tz" : -7.0,
    "location" : "94018",
    "city" : "BOULDER",
    "state" : "CO",
    "solar_resource_file" : "94018.tm2",
    "distance" : 21235
  },
  "outputs" : {
    "ac_monthly" : [ 474.2408142089844, 465.6669921875, 628.282470703125, 602.544677734375, 610.743896484375, 591.1350708007812, 595.8433227539062, 610.0640869140625, 597.9025268554688, 574.707275390625, 471.6990661621094, 458.9857177734375 ],
    "poa_monthly" : [ 136.04103088378906, 136.04443359375, 185.7895965576172, 181.16891479492188, 185.77963256835938, 182.52105712890625, 187.89971923828125, 193.35572814941406, 187.40081787109375, 175.5979461669922, 137.59872436523438, 131.25526428222656 ],
    "solrad_monthly" : [ 4.388420581817627, 4.858729839324951, 5.993212699890137, 6.038963794708252, 5.992891311645508, 6.084035396575928, 6.061281204223633, 6.237281322479248, 6.246694087982178, 5.664449691772461, 4.5866241455078125, 4.2340407371521 ],
    "dc_monthly" : [ 495.09564208984375, 487.5823669433594, 657.702880859375, 629.8565063476562, 638.9706420898438, 618.6126708984375, 623.68994140625, 637.5205688476562, 624.635009765625, 599.9056396484375, 492.5662841796875, 479.1076354980469 ],
    "ac_annual" : 6681.81640625,
    "solrad_annual" : 5.5322184562683105
  }
}
```

### XML Output Format

<pre>GET <a href="http://developer.nrel.gov/api/pvwatts/v5.xml?api_key=DEMO_KEY&amp;lat=40&amp;lon=-105&amp;system_capacity=4&amp;azimuth=180&amp;tilt=40&amp;array_type=1&amp;module_type=1&amp;losses=10">/api/pvwatts/v5.xml?api_key=DEMO_KEY&amp;lat=40&amp;lon=-105&amp;system_capacity=4&amp;azimuth=180&amp;tilt=40&amp;array_type=1&amp;module_type=1&amp;losses=10</a></pre>

```xml
<?xml version="1.0" encoding="UTF-8"?>
<response>
    <inputs>
        <lat>40</lat>
        <lon>-105</lon>
        <system-capacity>4</system-capacity>
        <azimuth>180</azimuth>
        <tilt>40</tilt>
        <array-type>1</array-type>
        <module-type>1</module-type>
        <losses>10</losses>
    </inputs>
    <errors type="array"/>
    <warnings type="array"/>
    <version>1.0.0</version>
    <ssc-info>
        <version type="integer">34</version>
        <build>Unix 64 bit GNU/C++ Feb 19 2014 11:40:21</build>
    </ssc-info>
    <station-info>
        <lat type="float">40.016666412353516</lat>
        <lon type="float">-105.25</lon>
        <elev type="float">1634.0</elev>
        <tz type="float">-7.0</tz>
        <location>94018</location>
        <city>BOULDER</city>
        <state>CO</state>
        <solar-resource-file>94018.tm2</solar-resource-file>
        <distance type="integer">21235</distance>
    </station-info>
    <outputs>
        <ac-monthly type="array">
            <ac-monthly type="float">474.2408142089844</ac-monthly>
            <ac-monthly type="float">465.6669921875</ac-monthly>
            <ac-monthly type="float">628.282470703125</ac-monthly>
            <ac-monthly type="float">602.544677734375</ac-monthly>
            <ac-monthly type="float">610.743896484375</ac-monthly>
            <ac-monthly type="float">591.1350708007812</ac-monthly>
            <ac-monthly type="float">595.8433227539062</ac-monthly>
            <ac-monthly type="float">610.0640869140625</ac-monthly>
            <ac-monthly type="float">597.9025268554688</ac-monthly>
            <ac-monthly type="float">574.707275390625</ac-monthly>
            <ac-monthly type="float">471.6990661621094</ac-monthly>
            <ac-monthly type="float">458.9857177734375</ac-monthly>
        </ac-monthly>
        <poa-monthly type="array">
            <poa-monthly type="float">136.04103088378906</poa-monthly>
            <poa-monthly type="float">136.04443359375</poa-monthly>
            <poa-monthly type="float">185.7895965576172</poa-monthly>
            <poa-monthly type="float">181.16891479492188</poa-monthly>
            <poa-monthly type="float">185.77963256835938</poa-monthly>
            <poa-monthly type="float">182.52105712890625</poa-monthly>
            <poa-monthly type="float">187.89971923828125</poa-monthly>
            <poa-monthly type="float">193.35572814941406</poa-monthly>
            <poa-monthly type="float">187.40081787109375</poa-monthly>
            <poa-monthly type="float">175.5979461669922</poa-monthly>
            <poa-monthly type="float">137.59872436523438</poa-monthly>
            <poa-monthly type="float">131.25526428222656</poa-monthly>
        </poa-monthly>
        <solrad-monthly type="array">
            <solrad-monthly type="float">4.388420581817627</solrad-monthly>
            <solrad-monthly type="float">4.858729839324951</solrad-monthly>
            <solrad-monthly type="float">5.993212699890137</solrad-monthly>
            <solrad-monthly type="float">6.038963794708252</solrad-monthly>
            <solrad-monthly type="float">5.992891311645508</solrad-monthly>
            <solrad-monthly type="float">6.084035396575928</solrad-monthly>
            <solrad-monthly type="float">6.061281204223633</solrad-monthly>
            <solrad-monthly type="float">6.237281322479248</solrad-monthly>
            <solrad-monthly type="float">6.246694087982178</solrad-monthly>
            <solrad-monthly type="float">5.664449691772461</solrad-monthly>
            <solrad-monthly type="float">4.5866241455078125</solrad-monthly>
            <solrad-monthly type="float">4.2340407371521</solrad-monthly>
        </solrad-monthly>
        <dc-monthly type="array">
            <dc-monthly type="float">495.09564208984375</dc-monthly>
            <dc-monthly type="float">487.5823669433594</dc-monthly>
            <dc-monthly type="float">657.702880859375</dc-monthly>
            <dc-monthly type="float">629.8565063476562</dc-monthly>
            <dc-monthly type="float">638.9706420898438</dc-monthly>
            <dc-monthly type="float">618.6126708984375</dc-monthly>
            <dc-monthly type="float">623.68994140625</dc-monthly>
            <dc-monthly type="float">637.5205688476562</dc-monthly>
            <dc-monthly type="float">624.635009765625</dc-monthly>
            <dc-monthly type="float">599.9056396484375</dc-monthly>
            <dc-monthly type="float">492.5662841796875</dc-monthly>
            <dc-monthly type="float">479.1076354980469</dc-monthly>
        </dc-monthly>
        <ac-annual type="float">6681.81640625</ac-annual>
        <solrad-annual type="float">5.5322184562683105</solrad-annual>
    </outputs>
</response>
```

## Rate Limits

[Standard rate limits](/docs/rate-limits) apply. No more than 1,000 requests may be made in any hour. No more than 10,000 requests may be made in any day.

## Errors

[Standard errors](/docs/errors) may be returned. In addition, the following service-specific errors may be returned:

<table border="0" cellpadding="0" cellspacing="0" class="doc-parameters">
  <thead>
    <tr>
      <th class="doc-parameters-name" scope="col">HTTP Status Code</th>
      <th class="doc-parameters-required" scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="doc-parameter-name" scope="row">422</th>
      <td class="doc-parameter-description">Unprocessable Entity - One or more parameters did not pass validation, or a parameter may be missing. Check the errors section of the response to see how the request should be modified to address the error.</td>
    </tr>
  </tbody>
</table>
