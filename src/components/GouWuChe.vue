<template>
  <div class="goods-box">
    <div v-for="(item,index) in gouwuList" :key="index" class="box">
      <div v-for="(it,i) in item.dataList" :key="i">
        <template v-if="it.data">
          <img :src="it.imageUrl"><br/>
          <div class="zi">
            <span>{{it.data.name}}</span>
          </div>
          <div class="bottom">
            <template v-if="it.data.price">
              <span class="price">￥{{it.data.price/100}}</span>
              <button class="btn" @click="bindAddClick(it)">+</button>
            </template>
            <template v-else>
              <span class="price">￥{{it.data.promotionPrice/100}}</span>
              <button class="btn" @click="bindAddClick(it)">+</button>
            </template>
        </div>
        </template>
        <template v-else>
          <img :src="it.imageUrl" class="nodataImg">
        </template>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  props:{
    gouwuList:Array
  },
  mounted() {
    // console.log(this.gouwuList);
    this.gouwuList.forEach(item=>{
      console.log(item.dataList,'list----------------');
      item.dataList.forEach(it=>{
        // console.log(it.data);
        
      })
    })
  },
  methods: {
    bindAddClick(item){
      this.$store.commit('toCart',item);
    }
  }
}
</script>
<style  lang="scss">
.goods-box{
  width: 100%;
  display: flex;
  flex-direction: column;
  .box{
    width: 100%;
    height: 4.5rem;
    display: flex;
    flex-wrap: wrap;
    div{
      width: 33.3%;
      height: 3.5rem;
      img{
        width: 77%;
      }
      .zi{
        width: 100%;
        height: .9rem;
        span{
          font-size: 12px;
          color: #ccc;
        }
      }
      .bottom{
        width: 100%;
        height: 1rem;
        display: flex;
        .price{
          color: orange;
          margin-left: 11px;
          margin-top: 11px;
          font-size: 18px;
        }
        button{
          width: .5rem;
          height: .5rem;
          margin-left: 22px;
          margin-top: 11px;
          background: white;
          border: 1px solid orange;
          color: orange;
        }
      }
    }
  }
}
.nodataImg{
  width: 300% !important;
  height: 3rem !important;
}
</style>