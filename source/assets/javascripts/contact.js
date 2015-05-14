//= require bootstrap/button.js
//= require bootstrap/modal.js
//= require parsleyjs.js
//= require bootbox.js
//= require _vendor/jquery.iecors.js

var defaults = {};
var options = $.extend({}, defaults, nrelContactOptions || {});

if(!options.apiKey) {
  alert('nrelContactOptions.apiKey must be set');
}

var form = $("#nrel_contact_form");
form.parsley();
form.submit(function(event) {
  var submit = $(this).find('button');
  submit.button('loading');

  event.preventDefault();

  $.ajax({
    url: 'http://developer.nrel.gov/api/contactor/v1.json?api_key=' + options.apiKey,
    type: 'POST',
    data: $(this).serialize(),
    dataType: 'json',
  }).done(function(response) {
    bootbox.alert('Thanks for sending your message. We\'ll be in touch.', function() {
      form.trigger('reset');
    });
  }).fail(function(xhr, message, error) {
    if(typeof(Rollbar) != 'undefined') {
      Rollbar.error('Unexpected contact sending failure', { error: error, message: message, response: xhr.responseText  });
    }

    bootbox.alert('Sending your message unexpectedly failed.<br>Please try again or <a href="' + options.issuesUrl + '">file an issue</a> for assistance.');
  }).always(function() {
    submit.button('reset');
  });
});
