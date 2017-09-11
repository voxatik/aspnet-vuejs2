require('./bootstrap');

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

window.Vue = Vue;
Vue.use(BootstrapVue);

Vue.component('example', require('./components/Example.vue'));

new Vue({
    el: '#app'
})