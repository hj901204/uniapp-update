<template>
  <div class="page-title">
    <h2 class="title">{{ $route.meta.title }}</h2>
  </div>
</template>

<script>
export default {
  name: "page-title",
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.page-title {
  margin-bottom: 20px;
  .title {
    line-height: 50px;
    font-size: 18px;
    border-bottom: 2px solid black;
    text-align: left;
    font-weight: bold;
  }
}
</style>
