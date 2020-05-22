<template>
  <!-- 我的企业信息 -->
  <div class="my-corporate-info">
    <div class="my-corporate-title">
      <h3>反馈速度</h3>
    </div>
    <div class="detail-info">
      <div style="display:flex;margin:10px 0">
        <div class="box">
          <div class="boxFont">平均我的反应速度</div>
          <div class="boxTime">{{ enterAvgTime || '--' }}</div>
        </div>
        <div class="box">
          <div class="boxFont">平均响应我的反应速度</div>
          <div class="boxTime">{{ cusAvgTime || '--' }}</div>
        </div>
      </div>
      <div>
        <vxe-table
          border="outer"
          style="text-algin:center"
          highlight-hover-row
          max-height="350px"
          :data="billAvgCostList">
          <vxe-table-column type="seq" title="排名" width="80"></vxe-table-column>
          <vxe-table-column field="billType" title="模块"></vxe-table-column>
          <vxe-table-column field="avgTime" title="平均用时"></vxe-table-column>
          <vxe-table-column field="enterName" title="企业名称" show-overflow></vxe-table-column>
        </vxe-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-corporate-info",
  props:{
    billAvgCostList: { type:Array, default: () => []},
    enterName: { type:String, default:''},
  },
  data () {
    return {
      //type: this.$store.getters.type,
      enterAvglist:[],
      cusAvglist:[],
      enterAvgTime:'',
      cusAvgTime:''
    }
  },
  mounted () {
    this.handleTime();
  },
  methods: {
    handleToJump () {
      this.$router.push({ path: "/enterprise/enterpriseInfo/basicInfo" })
    },
    //计算反馈时间
    handleTime(){
      this.enterAvglist = []
      this.cusAvglist = []
      this.billAvgCostList.map(item => {
        if(item.enterName == this.enterName){
          this.enterAvglist.push(item)
        }else{
          this.cusAvglist.push(item)
        }
      })
      if(this.enterAvglist.length != 0){
        let enterTime = this.enterAvglist.reduce((prev, cur) => {
          return parseInt((cur.cost + prev)) 
        },0)
        this.timeStamp(enterTime/this.enterAvglist.length,1)
      }
      if(this.cusAvglist.length != 0){
        let cusTime = this.cusAvglist.reduce((prev, cur) => {
          return parseInt((cur.cost + prev))
        },0)
        this.timeStamp(cusTime/this.cusAvglist.length,2)
      }
    },
    timeStamp(time,val){
      var day = parseInt(time / 60 / 24);
      var hour = parseInt(time / 60 % 24);
      var min = parseInt(time % 60);
      time = "";
      if (day > 0) {
          time = day + "天";
      }
      if (hour > 0) {
          time += hour + "小时";
      }
      if (min > 0) {
          time += parseFloat(min) + "分钟";
      }
      if(val == 1){
        this.enterAvgTime = time
      }else if(val == 2){
        this.cusAvgTime = time
      }
      //三元运算符 传入的分钟数不够一分钟 默认为0分钟，else return 运算后的StatusMinute 
      return time == "" ? "0分钟": time;
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
