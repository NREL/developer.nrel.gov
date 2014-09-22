---
title: Map Features Zip Codes API
summary: Returns a collection for map features scaled at the zip code level.
url: /api/open_pv/v2/map_features/zipcodes
method: GET
---

# {{title}} <span class="url">({{url}})</span>
{{summary}}

<ul id="toc"></ul>

## Request URL

<pre>{{method}} {{url}}<em>?parameters</em></pre>

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
			<th class="doc-parameter-name" scope="row">api_key</th>
			<td class="doc-parameter-required">Yes</td>
			<td class="doc-parameter-value">
			  <div class="doc-parameter-value-field"><strong>Type:</strong> string</div>
			  <div class="doc-parameter-value-field"><strong>Default:</strong> None</div>
			</td>
			<td class="doc-parameter-description">
			  <p>Your developer API key. See <a href="/doc/api-key">API keys</a> for more information.</p>
			</td>
		</tr>
		<tr>
      <th class="doc-parameter-name" scope="row">state</th>
      <td class="doc-parameter-required">Yes</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field"><strong>Type:</strong> string</div>
        <div class="doc-parameter-value-field"><strong>Default:</strong> None</div>
      </td>
      <td class="doc-parameter-description">
        <p>Two uppercase character state code</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">county</th>
      <td class="doc-parameter-required">Yes</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field"><strong>Type:</strong> string</div>
        <div class="doc-parameter-value-field"><strong>Default:</strong> None</div>
      </td>
      <td class="doc-parameter-description">
        <p>Name of the county</p>
      </td>
    </tr>
	</tbody>
</table>

## Response Fields

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
      <th class="doc-parameter-name" scope="row">metadata</th>
      <td class="doc-parameter-value"><strong>Type:</strong> collection</td>
      <td class="doc-parameter-description">The meta data about the response such as version of the API and resultset which is a collection of it's own that has the result size count</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">status</th>
      <td class="doc-parameter-value"><strong>Type:</strong> string</td>
      <td class="doc-parameter-description">The HTTP status code of the response</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">warnings</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of strings</td>
      <td class="doc-parameter-description">Present only when any warning messages resulting from the request.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">errors</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of strings</td>
      <td class="doc-parameter-description">Present only when any error messages resulting from the request.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">result</th>
      <td class="doc-parameter-value"><strong>Type:</strong> collection</td>
      <td class="doc-parameter-description">
        A list of map features scaled at the zip code level
      </td>
    </tr>
  </tbody>
</table>

## Examples

### JSON Output Format

<pre>GET https://developer.nrel.gov/api/open_pv/v2/map_features/zipcodes?api_key=DEMO_KEY&state=CO&county=Denver</pre>

```json
{
  "inputs":{
    "api_key":"DEMO_KEY",
    "state":"CO",
    "county":"Denver"
  },
  "metadata":{
    "version":"2.0.0",
    "resultset":{
      "count": 44
    }
  },
  "warnings":[],
  "errors":[],
  "status": 200,
  "result": [
    {
      "point" : {
        "lon" : -104.93146368718914,
        "lat" : 39.704567338534666
      },
      "encPolyline" : {
        "levels" : "BBABBAB@AABBBBABBBBBBAAAABAB",
        "points" : "qfhqFjfo_SyHXuWIaPA{NNqWEy]K?a@Ccw@A{j@?mMtH?fh@j@bDg@P@lEL`GkBje@c@tK~A|H^dL@D~X@dRDpa@C~EBd[mJAiJ@",
        "numLevels" : 4,
        "zoomFactor" : 32
      },
      "attributes" : {
        "county" : "Denver",
        "name" : "80246",
        "state" : "CO",
        "scale" : "zipcode"
      }
    },
    {
      "point" : {
        "lon" : -104.96120246856067,
        "lat" : 39.642017088915914
      },
      "encPolyline" : {
        "levels" : "BBBBABBBBBBBAABBBBBBBBBBBBBBBBAB@BBAAABBBBBBBBBBBBBBBAAAAAAAABBAAABAAAABABBBAB",
        "points" : "odaqFzxs_S@mDiFWDkV|\\An@BnAeLnAyFSyFh@PBOpNN@oz@Fq\\@iw@|k@^Asy@lEaGjDdGp`@b@nl@P_AbP}EhCErFhJtIoAlObOvSwAvJtDtQhYg@CtGk@fy@Dxy@?Lj@~rAF`YC|EBvQFnVvNeAjFqH~@pA|DSvDyHXR~EqCJhFAzMdJJ?fQc]WkYEGLsDAuOEgJE_a@Kml@Q}`@MyYKyFAsRCIIeMAil@EyIEQ?@sFCgFAwi@?wN?sMvC@tEAFi\\x`@H@qJ@uP",
        "numLevels" : 4,
        "zoomFactor" : 32
      },
      "attributes" : {
        "county" : "Denver",
        "name" : "80113",
        "state" : "CO",
        "scale" : "zipcode"
      }
    },
    .
    .
    .
  ]
}
```

<h2 id="rate-limits">Rate Limits</h2>

[Standard rate limits](/docs/rate-limits) apply. No more than 1,000 requests may be made in any hour.

<h2 id="errors">Errors</h2>

[Standard errors](/docs/errors) may be returned. In addition, the following service-specific errors may be returned:
                                                
<table border="0" cellpadding="0" cellspacing="0" class="doc-parameters">
  <thead>
    <tr>
      <th class="doc-parameters-name" scope="col" style="width: 100px;">HTTP Status Code</th>
      <th class="doc-parameters-required" scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="doc-parameter-name" scope="row">400</th>
      <td class="doc-parameter-description">Bad Request: When required parameters are missing.</td>
    </tr>
  </tbody>
</table>
