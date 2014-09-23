---
title: Uploads Commit API
summary: Takes array of JSON data representing install data, verifies the validity of the data, creates an uploads record and one install record for each install and returns JSON array of the install data by row.
url: POST /api/open_pv/v2/uploads/commit
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
      <th class="doc-parameter-name" scope="row">userId</th>
      <td class="doc-parameter-required">Yes</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field"><strong>Type:</strong> integer</div>
        <div class="doc-parameter-value-field"><strong>Default:</strong> None</div>
      </td>
      <td class="doc-parameter-description">
        <p>Valid OpenPV web application user ID</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">orgId</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field"><strong>Type:</strong> integer</div>
        <div class="doc-parameter-value-field"><strong>Default:</strong> None</div>
      </td>
      <td class="doc-parameter-description">
        <p>Valid OpenPV web application organization ID</p>
      </td>
    </tr>
		<tr>
			<th class="doc-parameter-name" scope="row">data</th>
			<td class="doc-parameter-required">Yes</td>
			<td class="doc-parameter-value">
			  <div class="doc-parameter-value-field"><strong>Type:</strong> collection</div>
			  <div class="doc-parameter-value-field"><strong>Default:</strong> None</div>
			  <div class="doc-parameter-value-field"><strong>Options:</strong> None</div>
			</td>
			<td class="doc-parameter-description">
			  <p>A JSON array of hashes, each hash represents a single install data record. The following are the minimum required key/values in each hash. You can include additional optional key/values of your own.</p>
			  <table border="0" cellpadding="0" cellspacing="0" class="doc-parameter-options">
			    <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">rowId</th>
              <td>Integer</td>
              <td>Zero based record number</td>
            </tr>
            <tr>
              <th scope="row">cost</th>
              <td>Float</td>
              <td>Dollar amount of the install</td>
            </tr>
            <tr>
              <th scope="row">address1</th>
              <td>String</td>
              <td>Street address of the install</td>
            </tr>
            <tr>
              <th scope="row">city</th>
              <td>String</td>
              <td>Name of city</td>
            </tr>
            <tr>
              <th scope="row">state</th>
              <td>String</td>
              <td>Two letter state abbreviation uppercase</td>
            </tr>
            <tr>
              <th scope="row">zipcode</th>
              <td>String</td>
              <td>Postal code of the install address</td>
            </tr>
            <tr>
              <th scope="row">date_installed</th>
              <td>String</td>
              <td>YYYY-MM-DD date representation of the install</td>
            </tr>
            <tr>
              <th scope="row">size_kw</th>
              <td>Float</td>
              <td>Size of install in kw</td>
            </tr>
            <tr>
              <th scope="row">installer</th>
              <td>String</td>
              <td>Name of the company that did the installation</td>
            </tr>
            <tr>
              <th scope="row">incentive_amount</th>
              <td>Float</td>
              <td>How much money was given as an incentive for the install</td>
            </tr>
            <tr>
              <th scope="row">install_type</th>
              <td>String</td>
              <td>Either a value of Residential or Commercial</td>
            </tr>
          </tbody>
			  </table>
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
        List of installs with the same data that was passed in.
      </td>
    </tr>
  </tbody>
</table>

## Examples

### JSON Output Format

<pre>POST https://developer.nrel.gov/api/open_pv/v2/uploads/commit?api_key=DEMO_KEY&data=[{"rowId":0,"cost":39632,"city":"Rancho Santa Fe","zipcode":"92067","state":"CA","date_installed":"2011-06-22","address1":"","size_kw":7.848,"installer":"Home Energy Systems","incentive_amount":1366,"install_type":"Residential"}...]</pre>

```json
{
  "inputs":{
    "api_key":"DEMO_KEY",
    "userId" : 1,
    "orgId" : 1,
    "data" : "[{\"rowId\" : 0,\"cost\" : 39632, \"city\" : \"Rancho Santa Fe\", \"zipcode\" : \"92067\", \"state\" : \"CA\", \"date_installed\" : \"2011-06-22\", \"address1\" : \"\", \"size_kw\" : 7.848, \"installer\" : \"Home Energy Systems\", \"incentive_amount\" : 1366, \"install_type\" : \"Residential\"}, {\"rowId\" : 1, \"cost\" : 56058.18, \"city\" : \"Rancho Santa Fe\", \"zipcode\" : \"92067\", \"state\" : \"CA\", \"date_installed\" : \"2011-06-27\", \"address1\" : \"\", \"size_kw\" : 8.279999999999999, \"installer\" : \"HelioPower, Inc.\", \"incentive_amount\" : 13334, \"install_type\" : \"Residential\"}]"
  },
  "metadata":{
    "version":"2.0.0",
    "resultset":{
      "count":2
    }
  },
  "warnings":[],
  "errors":[],
  "status": 201,
  "result":[
    {
      "rowId" : 0,
      "cost" : 39632, 
      "address1" : "", 
      "city" : "Rancho Santa Fe", 
      "state" : "CA", 
      "zipcode" : "92067", 
      "date_installed" : "2011-06-22", 
      "size_kw" : 7.848, 
      "installer" : "Home Energy Systems", 
      "incentive_amount" : 1366, 
      "install_type" : "Residential"
    },
    {
      "rowId" : 1, 
      "cost" : 56058.18, 
      "address1" : "", 
      "city" : "Rancho Santa Fe", 
      "state" : "CA", 
      "zipcode" : "92067", 
      "date_installed" : "2011-06-27", 
      "size_kw" : 8.279999999999999, 
      "installer" : "HelioPower, Inc.", 
      "incentive_amount" : 13334, 
      "install_type" : "Residential"
    }
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
    <tr>
      <th class="doc-parameter-name" scope="row">422</th>
      <td class="doc-parameter-description">Unprocessable Entity: When data JSON is invalid.</td>
    </tr>
  </tbody>
</table>
