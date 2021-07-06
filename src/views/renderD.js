export default {
  name: "RenderD",
  functional: true,
  render: function(h, context) {
    console.log("RenderD context", context);
    return h("div", ["Render D"]);
  },
};
