<template>
  <!-- 面包屑 -->
  <div class="breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item
        v-for="item in routeArr"
        :key="item.path"
        :to="{ path: item.path }"
        >{{ item.title }}</el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {}
  },
  props: {
    routeArr: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="" scoped></style>
