<template>
  <div class="enterprise margin-lr-xs">
    <!-- <LeftNav /> -->
    <PageTitle :isShowBreadcrub="false" />
    <div style=""
         class="enterprise-views">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "enterprise",
  components: {
    LeftNav: reslove => require(["@/components/LeftNav/index.vue"], reslove),
    PageTitle: reslove => require(["@/components/PageTitle.vue"], reslove)
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.enterprise {
  // height: calc(100vh - 240px);
  .enterprise-views {
    // margin-left: 210px;
    background-color: #fff;
    // height: calc(100vh - 292px);
    // height: calc(100% - 52px);
    // height: 100%;
  }
}
</style>
