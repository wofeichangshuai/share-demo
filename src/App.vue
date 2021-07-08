<template>
  <div id="app">
    <!-- <render-a>
      render a
      <div slot="slotA">slotA</div>
    </render-a> -->
    <!-- <comp-a /> -->
    <render-c />
  </div>
</template>

<script>
import CompA from "@/views/test1/compA.vue";
import RenderA from "@/views/test1/renderA";
import RenderC from "@/views/test1/renderC";
export default {
  name: "app",
  components: {
    CompA,
    RenderA,
    RenderC,
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
