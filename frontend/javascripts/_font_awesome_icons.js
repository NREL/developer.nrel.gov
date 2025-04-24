import { faComments } from '@fortawesome/free-solid-svg-icons/faComments';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { library, dom } from '@fortawesome/fontawesome-svg-core';

library.add(
  faComments,
  faMagnifyingGlass,
  faGithub,
);

dom.watch();
