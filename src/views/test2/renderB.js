
export default{
  props:['value'],
  render:function(h){
    return h('h1',{
      on:{
        '!click':function(){
          alert(111)
        }
      }
    },[this.value])
  }
}