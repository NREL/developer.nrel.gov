import domready from 'domready';

// Generate a table of contents with JavaScript based on page headers.
//
// Kramdown's toc plugin won't quite work for all of our use-cases, since not
// all of our pages render all of their headers as Markdown, since some may be
// raw HTML. So this renders it based on the resulting page, however it was
// generated.
domready(() => {
  // Only apply this if the special `#toc` element is found on the page to
  // insert into.
  const tocEl = document.getElementById('toc');
  if (tocEl) {
    // Generate a new root list element to inject onto the page.
    const listEl = document.createElement('ul');

    // Loop over all h2s and h3s to insert as TOC links.
    let parentListEl = listEl;
    let previousHeaderEl;
    let previousListItemEl;
    document.querySelectorAll('main h2, main h3').forEach((headerEl) => {
      // If the header on the page is missing IDs, dynamically generate them. Our Markdown content should have auto-generated IDs already, but raw HTML headers may be missing them.
      //
      // This is mostly for parity with the old jQuery plugin we used:
      // https://github.com/NREL/developer.nrel.gov/blob/060b09858ed90cc40de083100d8016d097f62339/assets/javascripts/_vendor/jquery.tableofcontents.js#L224-L228
      if (!headerEl.id) {
        headerEl.id = headerEl.innerText.toLowerCase().replace(/[^a-z0-9 -]/gi, '').replace(/ /gi, '-').substr(0, 50);
      }

      // Figure out nesting level for the TOC.
      if (previousHeaderEl) {
        if (headerEl.tagName > previousHeaderEl.tagName) {
          const nestedListEl = document.createElement('ul')
          previousListItemEl.appendChild(nestedListEl);
          parentListEl = nestedListEl;
        } else if (headerEl.tagName < previousHeaderEl.tagName) {
          parentListEl = parentListEl.parentElement.parentElement;
        }
      }

      // Generate the link.
      const listItemLinkEl = document.createElement('a');
      listItemLinkEl.href = `#${headerEl.id}`;
      listItemLinkEl.innerText = headerEl.innerText;

      // Generate the list item with the link inside.
      const listItemEl = document.createElement('li');
      listItemEl.appendChild(listItemLinkEl)

      // Add the list item to the list.
      parentListEl.appendChild(listItemEl);
      previousHeaderEl = headerEl;
      previousListItemEl = listItemEl;
    });

    if (listEl.firstChild) {
      tocEl.hidden = false;
      tocEl.appendChild(listEl);
    }
  }
});
