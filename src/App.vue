<template>
  <main>
    <px-header :link="links"></px-header>
    <router-view class="container px-5 sm:px-20 oy-20 flex justify-center"></router-view>
  </main>
</template>

<script>
import PxHeader from "@/components/PxHeader";

export default {
  name: "App",
  components: {
    PxHeader
  },
  data() {
    return {
      links: [
        {
          title: "BTC",
          to: { name: "Coin-Detail", params: { id: "bitcoin" } }
        },
        {
          title: "ETH",
          to: { name: "Coin-Detail", params: { id: "ethereum" } }
        },
        {
          title: "XRP",
          to: { name: "Coin-Detail", params: { id: "ripple" } }
        }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
