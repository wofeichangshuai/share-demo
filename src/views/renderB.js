export default {
  name: "RenderB",
  render: function(h) {
    // var domFun = function() {
    //   return {
    //     template: `<div>谈笑风生</div>`,
    //   };
      // return { render: (h)=>h('div',`<div>啦啦啦啦啦啦啦</div>`)}
    // };
    // return h(domFun());
    // return h({ render: (h)=>h('div',`<div>啦啦啦啦啦啦啦</div>`)});
    
    // return h(fun());         
    return h({ template: "<div>啦啦啦啦啦啦啦</div>" });
    // return h("div", "renderB");
  },
};
