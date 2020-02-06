<template>
  <div id="app">
    <div class="views">
      <Layout />
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  components: {
    Layout: reslove => require(["./views/layout/index.vue"], reslove)
  },
  data() {
    return {}
  },
  methods: {},
  computed: {}
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
html,
body {
  width: 100%;
  height: 100%;
}
.views {
  width: 79.2%;
  margin: 0 auto;
  height: 100%;
}
</style>
