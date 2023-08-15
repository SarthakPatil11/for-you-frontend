<template>
  <div id="app">
    <router-view></router-view>
    <!-- <home /> -->
  </div>
</template>

<script>
// import home from './components/ForYou/home.vue'

export default {
  name: 'App',
  components: {
    // home,
  } ,
  mounted () {
    console.log('"ddddd"')
    const isToken = localStorage.getItem("access_token")
    console.log("ddd , ff" , isToken)
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: cursive;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  overflow: overlay;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0);
}

::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.396);
  border-radius: 30px;
}
</style>
