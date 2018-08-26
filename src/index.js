import tabs from './components/tabs.vue'
import tab from './components/tab.vue'

// Install the components
export function install (Vue) {
  Vue.component('k-tabs', tabs)
  Vue.component('k-tab', tab)
  /* -- Add more components here -- */
}

// Expose the components
export {
  tabs,
  tab,
}

/* -- Plugin definition & Auto-install -- */
/* You shouldn't have to modify the code below */

// Plugin
const plugin = {
  /* eslint-disable no-undef */
  version: VERSION,
  install,
}

export default plugin

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}
