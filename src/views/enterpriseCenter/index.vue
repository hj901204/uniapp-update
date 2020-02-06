<template>
  <div class="enterprise">
    <LeftNav />
    <PageTitle :isShowBreadcrub="false" style="padding-left:10px;" />
    <router-view />
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

<style lang="" scoped></style>
