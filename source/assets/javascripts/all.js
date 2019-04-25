//= require jquery/jquery.js
//= require popper
//= require bootstrap
//= require _vendor/jquery.tableofcontents.js
//= require swagger-ui/swagger-ui-bundle
//= require swagger-ui/swagger-ui-standalone-preset
//= require _swagger_api_key_form

$(document).ready(function() {
  $('#toc').tableOfContents(document.body, {
    startLevel: 2,
    depth: 2
  });
});
