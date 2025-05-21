import signupOverrideStyles from '@/stylesheets/_signup_overrides.scss?inline';

// The signup form exist in a shadow DOM, but in order to make a few basic
// color things match our template, we'll wait for the shadow DOM to be
// initialized and then inject some custom overrides into the shadow DOM to
// customize the styles slightly.
const observer = new MutationObserver(() => {
  const signupEl = document.querySelector('.api-umbrella-signup-embed-content-container');
  if (signupEl && signupEl.shadowRoot) {
    observer.disconnect();

    const styleSheet = new CSSStyleSheet();
    styleSheet.replaceSync(signupOverrideStyles);
    signupEl.shadowRoot.adoptedStyleSheets.push(styleSheet);
  }
});
observer.observe(document.body, {
  subtree: true,
  childList: true,
});
