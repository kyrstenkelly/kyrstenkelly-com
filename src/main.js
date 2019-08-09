// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import VueProgressiveImage from 'vue-progressive-image';
import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/styles/shared.scss'

export default function (Vue, { router, head, isClient }) {
  Vue.config.productionTip = false
  Vue.use(VueProgressiveImage);

  Vue.component('Layout', DefaultLayout)
}
