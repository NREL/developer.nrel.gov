//= require jquery/jquery.js
//= require jquery.browser/jquery.browser.js
//= require _vendor/jquery.tableofcontents.js
//= require swagger-ui/lib/object-assign-pollyfill.js
//= require swagger-ui/lib/jquery.slideto.min.js
//= require swagger-ui/lib/jquery.wiggle.min.js
//= require swagger-ui/lib/jquery.ba-bbq.min.js
//= require swagger-ui/lib/handlebars-4.0.5.js
//= require swagger-ui/lib/lodash.min.js
//= require swagger-ui/lib/backbone-min.js
//= require swagger-ui/swagger-ui.js
//= require swagger-ui/lib/highlight.9.1.0.pack.js
//= require swagger-ui/lib/highlight.9.1.0.pack_extended.js
//= require swagger-ui/lib/jsoneditor.min.js
//= require swagger-ui/lib/marked.js
//= require swagger-ui/lib/swagger-oauth.js

$(document).ready(function() {
  $('#toc').tableOfContents(document.body, {
    startLevel: 2,
    depth: 2
  });
});
