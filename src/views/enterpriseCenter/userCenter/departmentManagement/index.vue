<template>
  <div class="department-management">
    <Tree :treeData="treeData" class="tree" />
    <Table :tableHead="tableHead" :tableData="tableData" class="table-box" />
  </div>
</template>

<script>
export default {
  name: "department-management",
  components: {
    Tree: resolve => require(["@/components/Tree"], resolve),
    Table: resolve => require(["@/components/Table"], resolve)
  },
  data() {
    return {
      treeData: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ],
      tableHead: [
        {
          fieldNo: "name",
          fieldName: "姓名",
          id: 1
        },
        {
          fieldNo: "email",
          fieldName: "邮件",
          id: 2,
          width: 300
        }
      ],
      tableData: [
        {
          name: "木村文乃",
          email: "fumino.kimura@gocdata.com"
        },
        {
          name: "溜溜",
          email: "liuliu.kimura@gocdata.com"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.department-management {
  overflow: hidden;
  text-align: left;
  padding: 10px;
  .tree {
    width: 35%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    float: left;
    height: 500px;
    overflow: auto;
  }
  .table-box {
    float: right;
    width: 63%;
  }
}
</style>
