<template>
  <div>
     <template v-for="item in listArr">
       <!-- 轮播图 -->
       <template v-if="item.sort===1">
         <Swiper :key="item.sort" :list="item.dataList"/>
       </template>
       <template v-if="item.sort===8 || item.sort===9">
         <IconBox :key="item.sort" :list="item.dataList"/>
       </template>
     </template>
     <template>
         <GouWuChe :gouwuList="dataArr"/>
      </template>
  </div>
</template>

<script>
// @ is an alias to /src
import Swiper from '@/components/Swiper.vue'
import IconBox from '@/components/IconBox'
import GouWuChe from '@/components/GouWuChe'
export default {
  name: 'home',
  data() {
    return {
      listArr:[],
      dataArr:[]
    }
  },
  components: {
    Swiper,
    IconBox,
    GouWuChe
  },
  created() {
    this.getData();
  },
  methods: {
    getData(){
      this.$http.get('/api/list').then(res=>{
        this.listArr=res.data.list.pageModules;
      })
      this.$http.get('/api/render').then(res=>{
        this.dataArr=res.data.list.pageModules;
      })
    }
  }
}
</script>
