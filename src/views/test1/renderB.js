import CompC from './compC'
export default {
  name: "RenderB",
  components: {CompC},
  render: function(h) {
    // return h(CompC);
    // return h('h1',[h(CompC)]);
    // var domFun = function() {
    //   return CompC;
    // };
    // return h(domFun());
    var fun = function(){
      return 'div'
    }
    return h(fun(),{class:'fun'},[h(CompC)])
  },
};
