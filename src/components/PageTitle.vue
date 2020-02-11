<template>
  <div class="page-title">
    <h2 class="title">{{ $route.meta.title }}</h2>
    <Breadcrumb style="float:right;padding-top:20px" v-if="isShowBreadcrub" />
  </div>
</template>

<script>
export default {
  name: "page-title",
  components: {
    Breadcrumb: resolve => require(["./Breadcrumb/index"], resolve)
  },
  props: {
    isShowBreadcrub: { type: Boolean, default: true }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.page-title {
  overflow: hidden;
  background-color: #fff;
  border-radius: 8px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  .title {
    float: left;
    line-height: 50px;
    font-size: 18px;
    text-align: left;
    font-weight: bold;
    padding-left: 16px;
  }
  .breadcrumb {
  }
}
</style>
