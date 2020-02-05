<template>
  <div class="page-title">
    <h2 class="title">{{ $route.meta.title }}</h2>
    <Breadcrumb style="float:right;padding-top:20px" />
  </div>
</template>

<script>
export default {
  name: "page-title",
  components: {
    Breadcrumb: resolve => require(["./Breadcrumb/index"], resolve)
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.page-title {
  overflow: hidden;
  margin-bottom: 20px;
  border-bottom: 2px solid black;
  .title {
    float: left;
    line-height: 50px;
    font-size: 18px;
    text-align: left;
    font-weight: bold;
  }
  .breadcrumb {
  }
}
</style>
