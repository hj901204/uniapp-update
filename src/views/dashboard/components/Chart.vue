<template>
  <div id="container"/>
</template>
<script>
export default {
  data() {
    return {
      loginData: [
        {daydate:'1日',daycount:0},
        {daydate:'2日',daycount:0},
        {daydate:'2020-09-03',daycount:0},
        {daydate:'2020-09-04',daycount:0},
        {daydate:'5日',daycount:0},
        {daydate:'6日',daycount:0},
        {daydate:'7日',daycount:0},
      ]
    }
  },
  mounted() {
    this.handleChart()
  },
  methods: {
    handleChart() {

      const chart = new G2.Chart({
        container: "container",
        forceFit: true,
        animate: false,
        height: 350,
        title: true
      })

      let obj = {
        acpath:"/system/login",
        days:"7"
      }

      this.$api.post(this.$lesUiPath.enteruserLogin, obj).then(result => {
        if (result.code == 0) {
          result.data.map(v=>{
            if(this.loginData.findIndex(val=>val.daydate==v.daydate)!=-1){
              let len = this.loginData.findIndex(val=>val.daydate==v.daydate)
              this.loginData[len]={...this.loginData[len],daycount:v.daycount}
            }
          })
          chart.source(this.loginData)
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
      })
    }
  }
}
</script>

<style></style>
