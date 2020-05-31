<template>
  <button
    @click="btnClick"
    class="bg-transparent hover:bg-green-500 text-green-700font-semibold hover:text-white py-2 px-2 border border-green-500 hover:border-transparent rounded"
  >
    <beat-loader :loading="isLoading" :color="'#68d391'" :size="8" />
    <slot name="btnName"></slot>
  </button>
</template>

<script>
export default {
  name: "PxButton",
  props: ["isLoading"],
  methods: {
    btnClick() {
      this.$emit("custom-click");
    }
  }
};
</script>

<style></style>
