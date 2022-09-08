import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    component: () => import("../views/BooksView"),
  },
  // {
  //   path: "/listado",
  //   name: "listado",
  //   component: () => import("../components/ListadoTickets"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

export default router;
