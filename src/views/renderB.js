export default {
  name: "RenderB",
  render: function(h) {
    // const fun = function() {
    //   return { template: `<div>啦啦啦啦啦啦啦</div>` };
    // };
    // return h(fun());
    return h({ template: "<div>啦啦啦啦啦啦啦</div>" });
    // return h("div", "renderB");
  },
};
