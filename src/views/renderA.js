import RenderB from "./renderB.js";
import CompB from "./compB.vue";
export default {
  name: "renderA",
  render: function(h) {
    const fun = function() {
      return { template: `<div>啦啦啦啦啦啦啦</div>` };
    };
    return h("div", [
      this.$slots.default,
      h("h1", "Hello world!"),
      h(CompB),
      h(RenderB),
      h(() => {
        return RenderB;
      }),
      h(fun()),
      h(function() {
        return "h1";
      }, "h1h1h1h1h1h1h1"),
      h("span", ["文本", h("div", this.$slots.slotA)]),
    ]);
  },
  mounted() {},
};
