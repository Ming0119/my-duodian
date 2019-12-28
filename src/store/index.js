import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
  state: {
    cartListArr:JSON.parse(localStorage.getItem('cart'))||[]
  },
  mutations: {
    toCart(state, item) { // 第一个参数代表仓库数据 第二个参数 用户提交的数据
      // 去重逻辑
      let goods = state.cartListArr.find(val => val.spId == item.spId)
      if (goods) {
        goods.data.skuType ++
      } else {
        state.cartListArr.push(item)
      }
    },
    Remove(state,index){
        
      if (state.cartListArr[index].data.skuType<=1) {
        if (window.confirm('您确定要删除吗')) {
          state.cartListArr.splice(index,1)
          return
        }
      }else{
        state.cartListArr[index].data.skuType--;
      }
    },
    Add(state,item){
      item.data.skuType++;
    }
  },
  actions: {
  },
  modules: {
  },
  getters:{
    getTotalPrice(state) {
      return state.cartListArr.reduce((prev, next) => {
        return prev += next.data.skuType * next.data.price / 100
      }, 0)
    }
  }
})

store.subscribe((mutations,state)=>{
 localStorage.setItem('cart',JSON.stringify(state.cartListArr));
})

export default store;