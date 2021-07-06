import RenderB from "./renderB.js";
import CompB from "./compB.vue";
export default {
  name: "renderA",
  render: function(h) {
    return h("div", [
      this.$slots.default,
      h("h1", "Hello world!"),
      h(CompB),
      h(function() {
        return "h1";
      }, "h1h1h1h1h1h1h1"),
      h("span", ["文本", h("div", this.$slots.slotA)]),
      h(RenderB),
    ]);
  },
  mounted() {},
};
