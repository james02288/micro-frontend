import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vueaxios from "vue-axios";
import axios from "axios";

Vue.config.productionTip = false;
Vue.use(vueaxios, axios);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
