import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Chat from "./views/Chat.vue";
import About from "./views/About.vue";
import Index from "./views/Index.vue";
import Meeting_schedule from "./views/Meeting_schedule.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: Index,
    },
    {
      path: "/Home",
      name: "home",
      component: Home,
    },
    {
      path: "/Chat",
      name: "chat",
      component: Chat,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/Meeting_schedule",
      name: "schedule",
      component: Meeting_schedule,
    },
  ],
});
