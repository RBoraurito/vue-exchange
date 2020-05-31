<template>
  <div class>
    <bounce-loader
      :loading="isLoading"
      :color="'#68d391'"
      :size="100"
      class="my-10"
    />
    <px-assets-table
      v-show="!isLoading"
      v-bind:assets="assets"
    ></px-assets-table>
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
    this.isLoading = true;
    api
      .getAssets()
      .then(assets => (this.assets = assets))
      .finally(() => (this.isLoading = false));
  },
  data() {
    return {
      isLoading: true,
      assets: []
    };
  }
};
</script>

<style></style>
