<template>
  <div id="app">
    <render-a>
      render a
      <div slot="slotA">slotA</div>
    </render-a>
    <comp-a />
  </div>
</template>

<script>
import CompA from "@/views/compA.vue";
import RenderA from "@/views/renderA";
export default {
  name: "app",
  components: {
    CompA,
    RenderA,
  },
  mounted() {},
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
