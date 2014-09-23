---
title: Installs Clear Cache API
summary: Clears all summary and rankings caches.
url: GET /api/open_pv/v2/installs/clear_cache
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
  </tbody>
</table>

## Examples

### JSON Output Format

<pre>GET https://developer.nrel.gov/api/open_pv/v2/installs/clear_cache?api_key=DEMO_KEY</pre>

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
}
```

<h2 id="rate-limits">Rate Limits</h2>

[Standard rate limits](/docs/rate-limits) apply. No more than 1,000 requests may be made in any hour.

<h2 id="errors">Errors</h2>

[Standard errors](/docs/errors) may be returned.
