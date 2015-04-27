---
title: Installs Summaries API
summary: Returns a list of install summary data filtered by optional parameters.
url: GET /api/solar/open_pv/installs/summaries
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
      <th class="doc-parameter-name" scope="row">county</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field"><strong>Type:</strong> string</div>
        <div class="doc-parameter-value-field"><strong>Default:</strong> None</div>
      </td>
      <td class="doc-parameter-description">
        <p>Name of county to filter by</p>
      </td>
    </tr>
		<tr>
      <th class="doc-parameter-name" scope="row">state</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field"><strong>Type:</strong> string</div>
        <div class="doc-parameter-value-field"><strong>Default:</strong> None</div>
      </td>
      <td class="doc-parameter-description">
        <p>Two uppercase character state code to filter by</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">zipcode</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field"><strong>Type:</strong> string</div>
        <div class="doc-parameter-value-field"><strong>Default:</strong> None</div>
      </td>
      <td class="doc-parameter-description">
        <p>Postal code to filter by</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">minsize</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field"><strong>Type:</strong> float</div>
        <div class="doc-parameter-value-field"><strong>Default:</strong> None</div>
      </td>
      <td class="doc-parameter-description">
        <p>Floating point number for the minimum size in kw for an install to filter by</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">maxsize</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field"><strong>Type:</strong> float</div>
        <div class="doc-parameter-value-field"><strong>Default:</strong> None</div>
      </td>
      <td class="doc-parameter-description">
        <p>Floating point number for the maximum size in kw for an install to filter by</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">mindate</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field"><strong>Type:</strong> string</div>
        <div class="doc-parameter-value-field"><strong>Default:</strong> None</div>
      </td>
      <td class="doc-parameter-description">
        <p>Date string in the format YYYY-MM-DD for the minimum date installed to filter by</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">maxdate</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field"><strong>Type:</strong> string</div>
        <div class="doc-parameter-value-field"><strong>Default:</strong> None</div>
      </td>
      <td class="doc-parameter-description">
        <p>Date string in the format YYYY-MM-DD for the maximum date installed to filter by</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">user_id</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field"><strong>Type:</strong> integer</div>
        <div class="doc-parameter-value-field"><strong>Default:</strong> None</div>
      </td>
      <td class="doc-parameter-description">
        <p>Valid OpenPV web application user ID to filter by</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">organization_id</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field"><strong>Type:</strong> integer</div>
        <div class="doc-parameter-value-field"><strong>Default:</strong> None</div>
      </td>
      <td class="doc-parameter-description">
        <p>Valid OpenPV web application organization ID to filter by</p>
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
        List of install summary data filtered by optional parameters.
      </td>
    </tr>
  </tbody>
</table>

## Examples

### JSON Output Format

<pre>GET https://developer.nrel.gov/api/solar/open_pv/installs/summaries?api_key=DEMO_KEY&state=CA&minsize=10&maxsize=100</pre>

```json
{
  "inputs": {
    "state": "CA",
    "minsize": "10",
    "maxsize": "100"
  },
  "metadata": {
    "version": "2.0.0",
    "resultset": {}
  },
  "status": 200,
  "result": {
    "avg_cost_cap_weight": 6.329,
    "avg_cost_pw": 6.322,
    "best_avg_cost_pw": 4.065,
    "total_capacity": 443.6257,
    "total_installs": 23471,
    "total_installs_with_cost": 22235
  }
}
```

<h2 id="rate-limits">Rate Limits</h2>

[Standard rate limits](/docs/rate-limits) apply. No more than 1,000 requests may be made in any hour.

<h2 id="errors">Errors</h2>

[Standard errors](/docs/errors) may be returned.
