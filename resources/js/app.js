import Vue from 'vue'
import Buefy from 'buefy'
import App from './components/App'

const isDev = process.env.NODE_ENV !== 'production'
Vue.config.devtools = isDev
Vue.config.performance = isDev
Vue.config.productionTip = isDev

Vue.use(Buefy)

const app = new Vue({
    el: '#app',
    render: h => h(App),
})
