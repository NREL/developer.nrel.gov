import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faComments } from '@fortawesome/free-solid-svg-icons/faComments';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons/faSquareFacebook';
import { faThreads } from '@fortawesome/free-brands-svg-icons/faThreads';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import { library, dom } from '@fortawesome/fontawesome-svg-core';

library.add(
  faBars,
  faComments,
  faGithub,
  faInstagram,
  faLinkedin,
  faMagnifyingGlass,
  faSquareFacebook,
  faThreads,
  faXTwitter,
  faXmark,
  faYoutube,
);

dom.watch();
