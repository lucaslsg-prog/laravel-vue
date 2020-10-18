
require('./bootstrap');

window.Vue = require('vue');
import { BootstrapVue } from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import store from './store'

Vue.use(BootstrapVue)
Vue.use(VueSweetalert2);


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('form-contato', require('./components/FormContato.vue').default);
Vue.component('table-contato', require('./components/TableContato.vue').default);

const app = new Vue({
    store,
    el: '#app',
});
