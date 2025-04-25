export default function ApiKeyFormPlugin() {
  return {
    wrapComponents: {
      // Inject our custom api key form onto the page below the info container.
      InfoContainer: (Original, { React }) => (props) => {
        const demoApiKey = 'DEMO_KEY';

        return React.createElement('div', null,
          React.createElement(Original, props),
          React.createElement('div', { class: 'api-key-form text-end'},
            React.createElement('div', { class: 'row align-items-center justify-content-end'},
              React.createElement('label', { for: 'api_key_input', class: 'col-auto col-form-label m-0' }, 'API Key'),
              React.createElement('div', { class: 'col-auto' },
                React.createElement('input', { type: 'text', class: 'form-control', id: 'api_key_input', value: demoApiKey })
              )
            ),
            React.createElement('p', { class: 'fst-italic text-secondary lh-base' },
              'For higher rate limits, ',
              React.createElement('a', { href: '/signup/' }, 'signup for your own API key'),
              '.',
              React.createElement('br'),
              'See ',
              React.createElement('a', { href: '/docs/api-key/' }, 'API key usage'),
              ' for more information.'
            )
          )
        )
      },
    },

    statePlugins: {
      spec: {
        wrapActions: {
          // Prior to executing an request, update the authorization based
          // on the current key entered into the global api key form.
          execute: function(origAction, { authActions }) {
            return function() {
              const apiKey = document.getElementById('api_key_input').value;
              if (apiKey) {
                authActions.authorize({
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
                    name: 'ApiKeyQueryAuth',
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
