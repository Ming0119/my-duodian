<template>
  <ul class="ul">
    <li v-for="(item,index) in list" :key="index">
      <img :src="item.imageUrl">
      <span>{{item.remark}}</span>
    </li>
  </ul>
</template>
<script>
export default {
  props:{
    list:Array
  }
}
</script>
<style lang="scss">
.ul{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  li{
    width: 20%;
    height: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
    }
    span{
      color: #888;
      font-size: 12px;
    }
  }
}
</style>