---
title: Installs Show API
summary: Returns install data for a specified install ID.
url: GET /api/open_pv/v2/installs/show
disqus: true

---

# {{title}} <span class="url">({{url}})</span>
{{summary}}

<ul id="toc"></ul>

## Request URL

<pre>{{url}}<em>?parameters</em></pre>

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
      <th class="doc-parameter-name" scope="row">id</th>
      <td class="doc-parameter-required">Yes</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field"><strong>Type:</strong> string</div>
        <div class="doc-parameter-value-field"><strong>Default:</strong> None</div>
      </td>
      <td class="doc-parameter-description">
        <p>Id of the install stored in the system.</p>
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
        List of install data specific to the install id specified.
      </td>
    </tr>
  </tbody>
</table>

## Examples

### JSON Output Format

<pre>GET https://developer.nrel.gov/api/open_pv/v2/installs/show?api_key=DEMO_KEY&id=4c2a3ab619cd1b5d3d0000bb</pre>

```json
{
  "inputs":{
    "api_key":"DEMO_KEY",
    "id":"4c2a3ab619cd1b5d3d0000bb"
  },
  "metadata":{
    "version":"2.0.0",
    "resultset":{
      "count": 1
    }
  },
  "warnings":[],
  "errors":[],
  "status": 200,
  "result":{
    "date_installed" : 1308700800,
    "pkgId" : 1,
    "zipcode" : "92067",
    "user_id" : [
      1234
    ],
    "lon" : -117.226457,
    "_id" : "4c2a3ab619cd1b5d3d0000bb",
    "size_kw" : 10,
    "is_zip_level" : true,
    "address1" : "",
    "install_type" : "Residential",
    "updated" : 1410796872,
    "city" : "Rancho Santa Fe",
    "incentive_amount" : 1366,
    "state" : "CA",
    "cost_per_watt" : 4000000,
    "type" : "uir",
    "organization_id" : 1,
    "installer" : "Home Energy Systems",
    "cost" : 40000,
    "lat" : 33.0176773,
    "extra_data" : "extra data",
    "created" : 1410796193
  }
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
    <tr>
      <th class="doc-parameter-name" scope="row">404</th>
      <td class="doc-parameter-description">Not Found: When the id specified does not match any install id's in the system.</td>
    </tr>
  </tbody>
</table>
