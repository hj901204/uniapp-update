<template>
  <div class="enterprise">
    <LeftNav />
    <PageTitle :isShowBreadcrub="false" style="padding-left:210px;" />
    <div style="padding-left:210px;">
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
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
