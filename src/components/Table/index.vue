<template>
  <!-- 表格组件 -->
  <div class="table-component">
    <el-table size="small"
              show-header
              highlight-current-row
              :data="tableData"
              stripe
              style="width: 100%"
              fit
              :height="maxHeight"
              :max-height="maxHeight"
              @selection-change="getSelection"
              :header-row-style="{ color: '#4a90e2' }">
      <el-table-column v-if="isShowSelection"
                       type="selection"
                       align="center"
                       width="45" />
      <el-table-column type="index"
                       width="50"
                       label="#"
                       align="center"></el-table-column>

      <el-table-column v-for="item in tableHead"
                       :key="item.id"
                       :prop="item.fieldNo"
                       :label="item.fieldName"
                       align="center"
                       :width="item.width ? item.width : ''">
      </el-table-column>

      <el-table-column fixed="right"
                       label="操作"
                       width="160"
                       align="center"
                       v-if="isShowOperation">
        <template slot-scope="scope">
          <div v-if="isShowStopBtns"
               style="display:inline-block;margin:0 10px">
            <el-button @click="handleStop(scope.row)"
                       type="primary"
                       plain
                       size="mini"
                       v-if="scope.row.isEnable ? false : true">禁用
            </el-button>
            <el-button @click="handleStart(scope.row)"
                       type="primary"
                       plain
                       size="mini"
                       v-if="scope.row.isEnable ? true : false">启用
            </el-button>
          </div>
          <el-button @click="handleEdit(scope.row)"
                     type="primary"
                     plain
                     size="small"
                     v-if="isShowEditBtn">编辑
          </el-button>
          <el-button type="danger"
                     size="mini"
                     plain
                     v-if="isShowDeleteBtn"
                     @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="
                     tablePagination">
      <el-pagination small
                     v-show="isShowPage"
                     :page-sizes="[10, 20, 30, 40]"
                     :current-page="currentPage"
                     :page-size="currentSize"
                     class="pagination"
                     align="right"
                     :total="total"
                     background
                     layout="total, sizes, prev, pager, next, jumper"
                     @size-change="sizeChange"
                     @current-change="currentChange" />
    </div>
  </div>
</template>

<script>
export default {
  name: "table-component",
  props: {
    tableHead: { type: Array, default: () => [] },
    tableData: { type: Array, default: () => [] },
    isShowOperation: { type: Boolean, default: false },
    isShowEditBtn: { type: Boolean, default: false },
    isShowStopBtns: { type: Boolean, default: false },
    isShowDeleteBtn: { type: Boolean, default: false },
    isShowSelection: { type: Boolean, default: false },
    isShowPage: { type: Boolean, default: true },
    currentPage: { type: Number, default: 1 },
    currentSize: { type: Number, default: 10 },
    total: { type: Number, default: 0 },
    maxHeight: { type: Number, default: document.body.clientHeight - 420 }
  },
  data () {
    return {}
  },
  methods: {
    // 禁用
    handleStop (row) {
      this.$emit("handleStop", row)
    },
    //启用
    handleStart (row) {
      this.$emit("handleStart", row)
    },
    //编辑
    handleEdit (row) {
      this.$emit("handleEdit", row)
    },
    //删除
    handleDelete (row) {
      this.$emit("handleDelete", row)
    },
    // 分页
    sizeChange (val) {
      this.$emit("sizeChange", val)
    },
    currentChange (val) {
      this.$emit("currentChange", val)
    },
    // 勾选表格
    getSelection (val) {
      this.$emit("getSelection", val);
    },
  }
}
</script>

<style lang="scss">
.table-component {
  // .el-table__body tr.current-row > td {
  //   background-color: #b3cff4;
  // }
  .tablePagination {
    padding: 16px 16px 10px 16px;
  }
}
</style>
