<template>
  <div class="">
    <!-- <LeftNav /> -->
    <!-- <PageTitle :isShowBreadcrub="false" style="padding-left:10px;" /> -->
    <div style="padding-left:210px;">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
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
