<template>
  <div class="tree">
    <!-- 树-组件 -->
    <el-tree :data="treeData" :props="defaultProps">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span>
          <el-button type="text" size="mini" @click="() => edit(data)">
            <i class="el-icon-edit"></i>
          </el-button>
          <el-button type="text" size="mini" @click="() => add(node, data)">
            <i class="el-icon-circle-plus-outline"></i>
          </el-button>
          <el-button type="text" size="mini" @click="() => remove(node, data)">
            <i class="el-icon-delete"></i>
          </el-button>
        </span>
      </span>
    </el-tree>
  </div>
</template>

<script>
export default {
  name: "tree",
  props: {
    treeData: { type: Array, default: () => [] }
  },
  data() {
    return {
      defaultProps: {
        children: "children",
        label: "label"
      }
    }
  },
  methods: {
    //   编辑
    edit(data) {
      console.log(data)
    },
    //删除
    remove() {},
    //新建
    add() {}
  }
}
</script>

<style lang="scss" scoped>
.tree {
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
}
</style>
