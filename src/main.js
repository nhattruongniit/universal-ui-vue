import Vue from "vue";
import App from "./App.vue";

// styles
import "@/styles/theme.css";
import "@/styles/index.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
