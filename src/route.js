import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home";
import About from "@/views/About";
import Error from "@/views/Error";
import CoinDetail from "@/views/CoinDetail";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      name: "about",
      path: "/about",
      component: About
    },
    {
      name: "Coin-Detail",
      path: "/coin/:id",
      component: CoinDetail
    },
    {
      name: "Error",
      path: "*",
      component: Error
    }
  ]
});
