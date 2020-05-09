<template>
  <!-- 我的企业信息 -->
  <div class="my-corporate-info">
    <div class="my-corporate-title">
      <h3>反馈速度</h3>
    </div>
    <div class="detail-info">
      <div style="display:flex">
        <div class="box">
          <div class="boxFont">平均我的反应速度</div>
          <div class="boxTime">30分钟</div>
          <div id="chart1"></div>
        </div>
        <div class="box">
          <div class="boxFont">平均响应我的反应速度</div>
          <div class="boxTime">50分钟</div>
          <div id="chart2"></div>
        </div>
      </div>
      <div>
        <vxe-table
          border="outer"
          style="text-algin:center"
          :data="tableData">
          <vxe-table-column field="index" title="排名"></vxe-table-column>
          <vxe-table-column field="component" title="模块"></vxe-table-column>
          <vxe-table-column field="time" title="平均用时"></vxe-table-column>
          <vxe-table-column field="name" title="企业名称" show-overflow></vxe-table-column>
        </vxe-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-corporate-info",
  data () {
    return {
      myEnterpriseData: {},
      type: this.$store.getters.type,
      tableData: [
        {index:'1',component:'采购订单',time:'20分钟',name:'我的企业'}
      ],
    }
  },
  mounted () {
    this.getMyEnterpriseData()
    //this.drawChart();
  },
  methods: {
    handleToJump () {
      this.$router.push({ path: "/enterprise/enterpriseInfo/basicInfo" })
    },
    //我的企业信息查询
    getMyEnterpriseData () {
      localStorage.clear();
      this.$api.post(this.$lesUiPath.enterpriseFindEnt, {}).then(result => {
        if (result.code == 0) {
          // console.log(result.data)
          this.myEnterpriseData = result.data
          localStorage.setItem('enterName', result.data.enterName);
          localStorage.setItem('xid', result.data.xid);
        }
      })

    },

    drawChart(){
      const chart = new G2.Chart({
        container: "chart1",
        height: 50,
        width: 100,
        title: true,
      })
      let data = [
        {daydate:'2020.04.02',daycount:'30'},
        {daydate:'2020.04.12',daycount:'10'}
      ]
      chart.source(data)
          chart.animate(true) 
          chart.scale("daycount", {
            min: 0
          })
      chart.tooltip({
            crosshairs: {
              type: "line"
            }
          })
      chart.line().position("daydate*daycount")
      chart.area().position('year*value');
      chart
        .point()
        .position("daydate*daycount")
        .size(4)
        .shape("circle")
        .style({
          stroke: "#fff",
          lineWidth: 1
        })
      chart.render()
    }

  }
}
</script>

<style lang="scss" scoped>
.my-corporate-info {
  background-color: #fff;
  overflow: hidden;
  padding: 16px;
  .my-corporate-title {
    overflow: hidden;
    border-bottom: 2px solid #f1f2f5;
    & > h3 {
      float: left;
      line-height: 40px;
      font-size: 18px;
    }
    .edit-btn {
      float: right;
    }
  }
  .detail-info {
    margin-top: 16px;
    & > h4,
    .corporate-id {
      font-weight: bold;
    }
    & > h4 {
      margin-bottom: 8px;
    }
    .corporate-id {
      margin-left: 20px;
    }
    & > p {
      line-height: 24px;
      font-size: 14px;
    }
  }
  .box{
    width: 48%;
    margin: 10px;
    text-align: left;
    .boxFont{
      font-size: 14px;
      color: #00000073;
    }
    .boxTime{
      font-size: 18px;
      font-weight: 500;
      margin:10px;
    }
  }
}
</style>
