<template>
  <div class="message-center">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "message-center",
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.message-center {
  height: 100%;
  background-color: #f1f2f5;
  overflow: auto;
}
</style>
