<template>
 <swiper :swiperOption="swiperOption">
    <swiper-slide v-for="(item,index) in list" :key="index">
      <img :src="item.imageUrl">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
// require styles
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  props:{
    list:Array
  },
  data() {
    return {
      swiperOption: {
        autoplay:true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style lang="scss">
.swiper-container{
  width: 100%;
  height: 3rem;
  img{
    width: 100%;
    height: 100%;
  }
}
</style>