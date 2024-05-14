<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <TemplateFun/>
    <VueCookies/>
  </div>
</template>

<script>
import TemplateFun from "./components/TemplateFun";
import VueCookies from "./components/VueCookies"

export default {
  name: 'App',
  components: {
    TemplateFun, VueCookies
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
  margin-top: 60px;
}
</style>
