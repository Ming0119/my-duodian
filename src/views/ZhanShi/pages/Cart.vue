<template>
  <div class="cart_box">
    <p>总价：{{Math.round(getTotalPrice)}}.00</p>
    <template>
     
      <ul class="goods_item" v-for="(item,index) in getGoodsData"
      :key="index">
        <template v-if="item.sort!=39 && item.sort !=47">
          <li>
            <img :src="item.imageUrl">
            {{item.data.name}}
          </li>
           <li>
            <span class="removeItem" @click="Remove(index)">-</span>
            <span> {{item.data.skuType}} </span>
            <span class="add" @click="Add(item)">+</span>
          </li>
        </template>
      </ul>
    </template>
  </div>
</template>
<script>
export default {
  computed: {
    getGoodsData(){
      return this.$store.state.cartListArr
    },
    getTotalPrice() {
      return this.$store.getters.getTotalPrice
    }
  },
  created() {
  },
  methods: {
    
    Remove(index){
      this.$store.commit('Remove',index);
    },
    Add(item){
      this.$store.commit('Add',item);
    }
  },
}
</script>
<style lang="scss">
  .cart_box {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    p{
      margin-left: 27px;
      height: 50px;
      width: 100%;
      line-height: 50px;
      font-size: 25px;
      text-align: center;
    }
    .goods_item {
      width: 100%; 
      display: flex;
      padding: 10px;
      li {
        &:nth-child(1) {
          flex:4;
          img {
            width: calc(1.05rem *2);
            height: calc(1.05rem *2);
          }
        }
        &:nth-child(2) {
          flex:6;
          // height: calc(.36rem *2);
          text-align: center;
          // line-height: calc(.36rem *2);
          color: #21292b;
          font-size: 14px;
          span {
            display: inline-block;
            width: .6rem;
            height: .6rem;
            border: 1px solid lightsalmon;
            text-align: center;
            line-height: .6rem;
            font-size: 25px;
            margin-top: 49px;
            margin-right: 16px;
            margin-left: 5px;
          }
        }
      }
    }
  }
</style>