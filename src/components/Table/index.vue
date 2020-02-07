<template>
  <!-- 表格组件 -->
  <div class="table-component">
    <el-table show-header :data="tableData" border style="width: 100%" fit>
      <el-table-column
        type="index"
        width="50"
        label="#"
        align="center"
      ></el-table-column>

      <el-table-column
        v-for="item in tableHead"
        :key="item.id"
        :prop="item.fieldNo"
        :label="item.fieldName"
        align="center"
        :width="item.width ? item.width : ''"
      >
      </el-table-column>

      <el-table-column
        fixed="right"
        label="操作"
        width="200"
        align="center"
        v-if="isShowOperation"
      >
        <template slot-scope="scope">
          <el-button
            @click="handleStop(scope.row)"
            type="primary"
            plain
            size="small"
            v-if="scope.row.isDisabled ? false : true"
            >禁用
          </el-button>
          <el-button
            @click="handleStart(scope.row)"
            type="primary"
            plain
            size="small"
            v-if="scope.row.isDisabled ? true : false"
            >启用
          </el-button>
          <el-button type="danger" size="small" plain>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "table-component",
  props: {
    tableHead: { type: Array, default: () => [] },
    tableData: { type: Array, default: () => [] },
    isShowOperation: { type: Boolean, default: false }
  },
  data() {
    return {
      isStart: true,
      isStop: false
    }
  },
  methods: {
    // 禁用
    handleStop(row) {
      this.$emit("handleStop", row)
    },
    //启用
    handleStart(row) {
      this.$emit("handleStart", row)
    }
  }
}
</script>

<style lang="scss" scoped>
.table-component {
}
</style>
