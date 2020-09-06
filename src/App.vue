<template>
  <div id="app">
    <navBar></navBar>
  </div>
  <div>
    <mainPage></mainPage>
  </div>
</template>

<script>
import navBar from './components/navBar.vue'
import mainPage from './components/mainPage.vue'

export default {
  name: 'App',
  components: {
    navBar,
    mainPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}
</style>
