<template>
  <div class>
    <px-assets-table v-bind:assets="assets"></px-assets-table>
  </div>
</template>

<script>
import api from "@/api";
import PxAssetsTable from "@/components/PxAssetsTable";
export default {
  name: "Home",
  components: {
    PxAssetsTable
  },
  created() {
    api.getAssets().then(assets => (this.assets = assets));
  },
  data() {
    return {
      assets: []
    };
  }
};
</script>

<style></style>
