import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Schedule from "../views/Schedule.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/schedule",
    name: "Schedule",
    component: Schedule
  }

  // {
  //   path: "/time",
  //   name: "Time",
  //   component: () => import(/* webpackChunkName: "time" */ "../views/Time.vue")
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
