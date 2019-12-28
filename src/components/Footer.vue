<template>
  <div class="app-footer">
    <template v-for="(item,index) in listArr">
      <router-link :key="index" :to="item.path">
        <i class="iconfont" :class="item.icon"></i>
        <span>{{item.name}}</span>
      </router-link>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listArr: [
        {
          name: '配送到家',
          icon: 'icon-home2',
          path: '/phome'
        },
        {
          name: '分类',
          icon: 'icon-fenlei',
          path: '/fenlei'
        },
        {
          name: '会员',
          icon: 'icon-huiyuan',
          path: '/vip'
        },
        {
          name: '购物车',
          icon: 'icon-gouwuche',
          path: '/cart'
        },        {
          name: '我的',
          icon: 'icon-profile',
          path: '/mine'
        }
      ]
    }
  },
}
</script>
<style lang="scss">
.app-footer{
  width: 100%;
  height: 1.2rem;
  display: flex;
  a{
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    color:#000;
    &.router-link-exact-active {
      color: orange;
    }
    i{
      font-size: 25px;
      margin-top: 5px;
      margin-bottom: 4px;
    }
  }
}
</style>