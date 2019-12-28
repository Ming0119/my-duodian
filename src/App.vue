<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import url('./assets/css/reset.scss');
@import url('./assets/iconfont/iconfont.css');
html{
  font-size: calc(100/750*100vw);
}
body,html{
  overflow: hidden;
}
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 14px;
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
