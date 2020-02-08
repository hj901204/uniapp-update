<template>
  <div class="edit-btns">
    <el-button type="primary" plain v-if="!isShowEditBtn" @click="handleEdit"
      >修改</el-button
    >
    <el-button
      type="primary"
      plain
      v-if="isShowEditBtn"
      @click="handleSave(formRef)"
      >保存</el-button
    >
  </div>
</template>

<script>
export default {
  name: "edit-btns",
  props: {
    formRef: { type: String, default: "" }
  },
  data() {
    return {
      isShowEditBtn: false
    }
  },
  methods: {
    // 编辑
    handleEdit() {
      this.isShowEditBtn = true
      this.$emit("handleEdit")
    },
    //保存
    handleSave(formRef) {
      this.isShowEditBtn = false
      this.$emit("handleSave", formRef)
    }
  }
}
</script>

<style lang="scss" scoped>
.edit-btns {
  text-align: right;
}
</style>
