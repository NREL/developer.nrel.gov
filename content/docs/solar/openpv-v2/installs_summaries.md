---
title: Installs Summaries API
summary: Returns a list of install summary data filtered by optional parameters and the result bucketed by install size (kw) 0 - 2, 2 - 4, 4 - 10, 10 - 25 and 25+. Results are caches for one day.
url: GET /api/open_pv/v2/installs/summaries
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
        List of install summary data filtered by optional parameters and the result bucketed by install size (kw) 0 - 2, 2 - 4, 4 - 10, 10 - 25 and 25+.
      </td>
    </tr>
  </tbody>
</table>

## Examples

### JSON Output Format

<pre>GET https://developer.nrel.gov/api/open_pv/v2/installs/summaries?api_key=DEMO_KEY</pre>

```json
{
  "inputs":{
    "api_key":"DEMO_KEY"
  },
  "metadata":{
    "version":"2.0.0",
    "resultset":{}
  },
  "status":200,
  "result":{
    "capacity_classes":{
      "0-2":{
        "cost":0,
        "cost_cap_weight":0,
        "cost_last_year":0,
        "cost_cap_weight_last_year":0,
        "total":0,"total_with_cost":0,
        "total_last_year":0,
        "total_with_cost_last_year":0,
        "capacity":0
      },
      "2-4":{
        "cost":0,
        "cost_cap_weight":0,
        "cost_last_year":0,
        "cost_cap_weight_last_year":0,
        "total":0,
        "total_with_cost":0,
        "total_last_year":0,
        "total_with_cost_last_year":0,
        "capacity":0
      },
      "4-10":{
        "cost":5.915,
        "cost_cap_weight":5.937647350787939,
        "cost_last_year":5.915,
        "cost_cap_weight_last_year":5.937647350787939,
        "total":4,"total_with_cost":2,
        "total_last_year":2,
        "total_with_cost_last_year":2,
        "capacity":16.118
      },
      "10-25":{
        "cost":0,
        "cost_cap_weight":0,
        "cost_last_year":0,
        "cost_cap_weight_last_year":0,
        "total":0,
        "total_with_cost":0,
        "total_last_year":0,
        "total_with_cost_last_year":0,
        "capacity":0
      },
      "25+":{
        "cost":0,
        "cost_cap_weight":0,
        "cost_last_year":0,
        "cost_cap_weight_last_year":0,
        "total":0,
        "total_with_cost":0,
        "total_last_year":0,
        "total_with_cost_last_year":0,
        "capacity":0
      }
    },
    "capacity_by_year":{
      "2014":0.016118}
    ,
    "cost_by_year":{
      "2014":5.915
    },
    "cost_by_year_cap_weight":{
      "2014":5.937647350787939
    },
    "installs_by_year":{
      "2014":2
    },
    "total_capacity":0.016117999999999997,
    "total_installs":2,
    "total_installs_with_cost":2,
    "total_installs_last_year":2,
    "total_installs_with_cost_last_year":2,
    "avg_cost_pw":5.915,
    "avg_cost_pw_last_year":5.915,
    "avg_cost_cap_weight_last_year":5.937647350787939,
    "avg_cost_cap_weight":5.937647350787939
  }
}
```

<h2 id="rate-limits">Rate Limits</h2>

[Standard rate limits](/docs/rate-limits) apply. No more than 1,000 requests may be made in any hour.

<h2 id="errors">Errors</h2>

[Standard errors](/docs/errors) may be returned.