import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from './store'

import "@babel/polyfill";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import router from "./router";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
Vue.config.productionTip = false;


new Vue({
  vuetify,
  router,
  Toast,
  store,
  render: (h) => h(App),
}).$mount("#app");
