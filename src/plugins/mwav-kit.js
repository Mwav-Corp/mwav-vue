// Optional, since every component import their Bootstrap functionality
// the following line is not necessary
// import 'bootstrap'
import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import "@/assets/css/styles.css";

export default {
    install(Vue) {
        Vue.use(BootstrapVue3);
    }
}