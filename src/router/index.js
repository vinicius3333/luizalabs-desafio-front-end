import Vue from "vue";
import VueRouter from "vue-router";

const Home = () =>
  import(/* webpackChunkName: "Home" */ "../views/Home/Home.vue");
const Wishlist = () =>
  import(/* webpackChunkName: "Wishlist" */ "../views/Wishlist/Wishlist.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/wishlist",
    name: "Wishlist",
    component: Wishlist,
  },
  {
    path: "*",
    redirect: { name: "Home" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
