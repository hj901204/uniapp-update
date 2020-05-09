<template>
  <div class="help-page">
    <!-- <LeftNav /> -->
    <div>
      帮助
    </div>
  </div>
</template>

<script>
export default {
  name: "helpPage",
  data() {
    return {}
  },
  components:{
    LeftNav: reslove => require(["@/components/LeftNav/index.vue"], reslove),
  }
}
</script>

<style lang="" scoped></style>
