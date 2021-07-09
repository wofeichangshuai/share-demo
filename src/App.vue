<template>
  <div id="app">
    <!-- <render-a>
      render a
      <div slot="slotA">slotA</div>
    </render-a> -->
    <!-- <comp-a /> -->
    <!-- <render-c /> -->

    <render-a/>
    <!-- <render-c>
      ssssssssssssssss
      <div slot="footer">footer slot</div>
      </render-c> -->
  </div>
</template>

<script>
import RenderA from '@/views/test2/renderA.js'
import RenderC from '@/views/test2/renderC.js'
import CompA from "@/views/test2/compA.vue";
// import RenderA from "@/views/test1/renderA";
// import RenderC from "@/views/test1/renderC";
export default {
  name: "app",
  components: {
    CompA,
    RenderA,
    RenderC,
    // RenderA,
    // RenderC,
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
