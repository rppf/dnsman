import Vue from 'vue'
import Buefy from 'buefy'
import App from './components/App'
import router from './router';

const isDev = process.env.NODE_ENV !== 'production'
Vue.config.devtools = isDev
Vue.config.performance = isDev
Vue.config.productionTip = isDev

Vue.use(Buefy);

const app = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
    render: h => h(App),
})
