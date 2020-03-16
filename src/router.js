import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Chat from "./views/Chat.vue";
import About from "./views/About.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/Chat",
      name: "chat",
      component: Chat
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
