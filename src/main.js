import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import DefaultLayout from '~/layouts/Default.vue';

import '~/assets/styles/shared.scss';
import 'prismjs/themes/prism-okaidia.css';

export default function (Vue, { router, head, isClient }) {
  library.add(faChevronLeft);
  Vue.component('font-awesome-icon', FontAwesomeIcon);
  Vue.component('Layout', DefaultLayout);
}
