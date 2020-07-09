import Vue from 'vue'
import App from './App.vue'
import ChartPlugin from '@/plugins/chartPlugin.js'

Vue.config.productionTip = false

// install();
// calls `MyPlugin.install(Vue)`
Vue.use(ChartPlugin);


new Vue({
  render: h => h(App),
}).$mount('#app')
