import CompB from './compB.vue'
import RenderB from './renderB'
export default{
  components:{CompB,
  RenderB},
  render:function(h){
    // const arr = Array.apply(null,{length:20}.map(()=>{
    //   return h('h4',[myParagraphVNode])
    // }))
  //   const arr =Array.apply(null, { length: 20 }).map(function () {
  //     return h('p', 'hi')
  //   })
  //   var myParagraphVNode = h('p', 'hi')
  //   return h('h1',
  //   ['renderA',
  //   h(CompB),
  //   arr
  // ])
  // if (this.items.length) {
  //   return h('ul', this.items.map(function (item) {
  //     return h('li', item.name)
  //   }))
  // } else {
  //   return h('p', 'No items found.')
  // }

    const self = this;
    return h('div',
    [h('input',{
      domProps:{
        innerHTML:'ssss'
      },
      attrs:{
        value: self.value,
        id: 'inp'
      },
      on:{
        // input:function(event){
        //   self.value = event.target.value
        // }
      }

    })
      ,
  h(RenderB,{
        props:{
          value:self.value
        }
      })
      ])
    

  },
  data(){
    return{
      items:[{name:'a'},{name:'b'},{name:'c'},{name:'d'},],
      value: 12
    }
  }
}