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

Version 5 is an alternate version of the PVWatts API which uses the pvwattsv5 model from SAM.

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
          <strong>Range:</strong> <i>0 to 50</i>
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
              <td>Fixed OR</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Fixed Roof</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>1-Axis</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Backtracked</td>
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
          <strong>Range:</strong> <i>0 to 360</i>
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
          <strong>Default:</strong> tmy3
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
      <td class="doc-parameter-description">Information about the climate data used in the simulation.</td>
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
      <td class="doc-parameter-description">Monthly plane of array irradiance values.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">dc_monthly</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of decimal</td>
      <td class="doc-parameter-description">Monthly DC array output.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">ac_monthly</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of decimal</td>
      <td class="doc-parameter-description">Monthly AC system output.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">ac_annual</th>
      <td class="doc-parameter-value"><strong>Type:</strong> decimal</td>
      <td class="doc-parameter-description">Annual AC system output.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">solrad_monthly</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of decimal</td>
      <td class="doc-parameter-description">Monthly solar radiation values.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">solrad_annual</th>
      <td class="doc-parameter-value"><strong>Type:</strong> decimal</td>
      <td class="doc-parameter-description">Annual solar radiation values.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">ac</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of decimal</td>
      <td class="doc-parameter-description">Hourly AC system output (only when timeframe=hourly)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">poa</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of decimal</td>
      <td class="doc-parameter-description">Hourly plane of array irradiance (only when timeframe=hourly)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">dn</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of decimal</td>
      <td class="doc-parameter-description">Hourly beam normal irradiance (only when timeframe=hourly)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">dc</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of decimal</td>
      <td class="doc-parameter-description">Hourly DC array output (only when timeframe=hourly)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">df</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of decimal</td>
      <td class="doc-parameter-description">Hourly diffuse irradiance (only when timeframe=hourly)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">tamb</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of decimal</td>
      <td class="doc-parameter-description">Hourly ambient temperature (only when timeframe=hourly)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">tcell</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of decimal</td>
      <td class="doc-parameter-description">Hourly module temperature (only when timeframe=hourly)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">wspd</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of decimal</td>
      <td class="doc-parameter-description">Hourly windspeed (only when timeframe=hourly)</td>
    </tr>
  </tbody>
</table>

## Examples

### JSON Output Format

<pre>GET <a href="http://developer.nrel.gov/api/pvwatts/v5.json?api_key=DEMO_KEY&amp;lat=40&amp;lon=-105&amp;system_capacity=4&amp;azimuth=180&amp;tilt=40&amp;array_type=1&amp;module_type=1&amp;losses=10">/api/pvwatts/v5.json?api_key=DEMO_KEY&amp;lat=40&amp;lon=-105&amp;system_capacity=4&amp;azimuth=180&amp;tilt=40&amp;array_type=1&amp;module_type=1&amp;losses=10</a></pre>

```json
{
  "inputs" : {
    "api_key" : "lsadjflasdjf",
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
    "build" : "Mac OS X 64 bit GNU/C++ Apr  9 2014 11:55:48"
  },
  "station_info" : {
    "lat" : 40.130001068115234,
    "lon" : -105.23999786376953,
    "elev" : 1689.0,
    "tz" : -7.0,
    "location" : "724699",
    "city" : "\"BROOMFIELD/JEFFCO [BOULDER - SURFRAD]\"",
    "state" : "CO",
    "solar_resource_file" : "724699.csv",
    "distance" : 24977
  },
  "outputs" : {
    "ac_monthly" : [ 470.2303161621094, 465.5809020996094, 580.62158203125, 603.9180908203125, 611.4985961914062, 570.1835327148438, 566.8073120117188, 577.284912109375, 573.3583374023438, 547.8502197265625, 460.4353942871094, 458.83514404296875 ],
    "poa_monthly" : [ 135.77903747558594, 136.01702880859375, 172.07330322265625, 181.0430450439453, 185.826904296875, 177.51197814941406, 179.44775390625, 182.2056121826172, 179.2454376220703, 167.3966064453125, 135.13946533203125, 131.20938110351562 ],
    "solrad_monthly" : [ 4.379969120025635, 4.85775089263916, 5.550751686096191, 6.034768104553223, 5.994416236877441, 5.9170660972595215, 5.788637161254883, 5.877600193023682, 5.974847793579102, 5.399890422821045, 4.504648685455322, 4.232560634613037 ],
    "dc_monthly" : [ 491.10845947265625, 487.4883728027344, 608.0339965820312, 631.3754272460938, 639.8583984375, 596.713623046875, 593.491943359375, 603.8831176757812, 599.4382934570312, 572.0927734375, 480.9988098144531, 478.9504089355469 ],
    "ac_annual" : 6486.60498046875,
    "solrad_annual" : 5.376075744628906
  }
}
```

### XML Output Format

<pre>GET <a href="http://developer.nrel.gov/api/pvwatts/v5.xml?api_key=DEMO_KEY&amp;lat=40&amp;lon=-105&amp;system_capacity=4&amp;azimuth=180&amp;tilt=40&amp;array_type=1&amp;module_type=1&amp;losses=10">/api/pvwatts/v5.xml?api_key=DEMO_KEY&amp;lat=40&amp;lon=-105&amp;system_capacity=4&amp;azimuth=180&amp;tilt=40&amp;array_type=1&amp;module_type=1&amp;losses=10</a></pre>

```xml
<?xml version="1.0" encoding="UTF-8"?>
<response>
  <inputs>
    <api-key>lsadjflasdjf</api-key>
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
  <version>0.0.1</version>
  <ssc-info>
    <version type="integer">34</version>
    <build>Mac OS X 64 bit GNU/C++ Apr  9 2014 11:55:48</build>
  </ssc-info>
  <station-info>
    <lat type="float">40.130001068115234</lat>
    <lon type="float">-105.23999786376953</lon>
    <elev type="float">1689.0</elev>
    <tz type="float">-7.0</tz>
    <location>724699</location>
    <city>"BROOMFIELD/JEFFCO [BOULDER - SURFRAD]"</city>
    <state>CO</state>
    <solar-resource-file>724699.csv</solar-resource-file>
    <distance type="integer">24977</distance>
  </station-info>
  <outputs>
    <ac-monthly type="array">
      <ac-monthly type="float">470.2303161621094</ac-monthly>
      <ac-monthly type="float">465.5809020996094</ac-monthly>
      <ac-monthly type="float">580.62158203125</ac-monthly>
      <ac-monthly type="float">603.9180908203125</ac-monthly>
      <ac-monthly type="float">611.4985961914062</ac-monthly>
      <ac-monthly type="float">570.1835327148438</ac-monthly>
      <ac-monthly type="float">566.8073120117188</ac-monthly>
      <ac-monthly type="float">577.284912109375</ac-monthly>
      <ac-monthly type="float">573.3583374023438</ac-monthly>
      <ac-monthly type="float">547.8502197265625</ac-monthly>
      <ac-monthly type="float">460.4353942871094</ac-monthly>
      <ac-monthly type="float">458.83514404296875</ac-monthly>
    </ac-monthly>
    <poa-monthly type="array">
      <poa-monthly type="float">135.77903747558594</poa-monthly>
      <poa-monthly type="float">136.01702880859375</poa-monthly>
      <poa-monthly type="float">172.07330322265625</poa-monthly>
      <poa-monthly type="float">181.0430450439453</poa-monthly>
      <poa-monthly type="float">185.826904296875</poa-monthly>
      <poa-monthly type="float">177.51197814941406</poa-monthly>
      <poa-monthly type="float">179.44775390625</poa-monthly>
      <poa-monthly type="float">182.2056121826172</poa-monthly>
      <poa-monthly type="float">179.2454376220703</poa-monthly>
      <poa-monthly type="float">167.3966064453125</poa-monthly>
      <poa-monthly type="float">135.13946533203125</poa-monthly>
      <poa-monthly type="float">131.20938110351562</poa-monthly>
    </poa-monthly>
    <solrad-monthly type="array">
      <solrad-monthly type="float">4.379969120025635</solrad-monthly>
      <solrad-monthly type="float">4.85775089263916</solrad-monthly>
      <solrad-monthly type="float">5.550751686096191</solrad-monthly>
      <solrad-monthly type="float">6.034768104553223</solrad-monthly>
      <solrad-monthly type="float">5.994416236877441</solrad-monthly>
      <solrad-monthly type="float">5.9170660972595215</solrad-monthly>
      <solrad-monthly type="float">5.788637161254883</solrad-monthly>
      <solrad-monthly type="float">5.877600193023682</solrad-monthly>
      <solrad-monthly type="float">5.974847793579102</solrad-monthly>
      <solrad-monthly type="float">5.399890422821045</solrad-monthly>
      <solrad-monthly type="float">4.504648685455322</solrad-monthly>
      <solrad-monthly type="float">4.232560634613037</solrad-monthly>
    </solrad-monthly>
    <dc-monthly type="array">
      <dc-monthly type="float">491.10845947265625</dc-monthly>
      <dc-monthly type="float">487.4883728027344</dc-monthly>
      <dc-monthly type="float">608.0339965820312</dc-monthly>
      <dc-monthly type="float">631.3754272460938</dc-monthly>
      <dc-monthly type="float">639.8583984375</dc-monthly>
      <dc-monthly type="float">596.713623046875</dc-monthly>
      <dc-monthly type="float">593.491943359375</dc-monthly>
      <dc-monthly type="float">603.8831176757812</dc-monthly>
      <dc-monthly type="float">599.4382934570312</dc-monthly>
      <dc-monthly type="float">572.0927734375</dc-monthly>
      <dc-monthly type="float">480.9988098144531</dc-monthly>
      <dc-monthly type="float">478.9504089355469</dc-monthly>
    </dc-monthly>
    <ac-annual type="float">6486.60498046875</ac-annual>
    <solrad-annual type="float">5.376075744628906</solrad-annual>
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
