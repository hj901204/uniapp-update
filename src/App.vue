<template>
  <div id="app">
    <div class="views">
      <HeaderNav />
      <router-view />
    </div>
  </div>
</template>
<script>
import HeaderNav from "./components/Header"
export default {
  components: { HeaderNav },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.views {
  width: 1200px;
  margin: 0 auto;
}
</style>
