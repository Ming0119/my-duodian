<template>
  <div class="app-main">
    <main class="main">
      <router-view></router-view>
    </main>
    <footer class="footer">
      <Footer/>
    </footer>
  </div>
</template>
<script>
import Footer from '@/components/Footer'
export default {
  components:{
    Footer
  }
}
</script>
<style lang="scss">
.app-main{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.main{
  flex: 1;
  overflow: auto;
}

.footer{
  width: 100%;
  height: 1.2rem;
  border-top: 1px solid #ccc;
}
</style>