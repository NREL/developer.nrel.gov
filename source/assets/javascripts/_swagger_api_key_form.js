function ApiKeyFormPlugin() {
  return {
    statePlugins: {
      spec: {
        wrapActions: {
          // After the spec has been fetched and the page is being
          // rendered, inject our custom api key form onto the page.
          updateResolved: function(origAction, system) {
            return function() {
              var origReturn = origAction.apply(undefined, arguments);

              if($('#api_key_input').length === 0) {
                var demoApiKey = 'DEMO_KEY';
                $('.swagger-ui .information-container').after('<div class="api-key-form"><div class="form-inline"><div class="form-group"><label for="api_key_input">API Key</label><input type="text" class="form-control" id="api_key_input" value="' + demoApiKey + '"></div></div><p>For higher rate limits, <a href="/signup/">signup for your own API key</a>.<br>See <a href="/docs/api-key/">API key usage</a> for more information.</p></div>');
              }

              return origReturn;
            }
          },

          // Prior to executing an request, update the authorization based
          // on the current key entered into the global api key form.
          execute: function(origAction, system) {
            return function() {
              var apiKey = $('#api_key_input').val();
              if(apiKey) {
                window.ui.authActions.authorize({
                  api_key: {
                    name: 'api_key',
                    value: apiKey,
                    schema: {
                      type: 'apiKey',
                      in: 'query',
                      name: 'api_key',
                    },
                  },
                  ApiKeyQueryAuth: {
                    name: 'api_key',
                    value: apiKey,
                    schema: {
                      type: 'apiKey',
                      in: 'query',
                      name: 'api_key',
                    },
                  },
                })
              }

              return origAction.apply(undefined, arguments);
            }
          },
        },
      },
    },
  }
}
