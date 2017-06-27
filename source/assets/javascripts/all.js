//= require jquery/jquery.js
//= require _vendor/jquery.tableofcontents.js
//= require swagger-ui/swagger-ui-bundle
//= require swagger-ui/swagger-ui-standalone-preset

$(document).ready(function() {
  $('#toc').tableOfContents(document.body, {
    startLevel: 2,
    depth: 2
  });
});
