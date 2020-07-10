import './_font_awesome_icons';

window.jQuery = window.$ = require('jquery');
require('popper.js');
require('bootstrap/dist/js/bootstrap');
require('./_vendor/jquery.tableofcontents');

$(document).ready(function() {
  $('#toc').tableOfContents(document.body, {
    startLevel: 2,
    depth: 2
  });
});
