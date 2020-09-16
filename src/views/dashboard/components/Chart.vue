<template>
  <div id="container"/>
</template>
<script>
export default {
  data() {
    return {
      loginData: []
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
          this.loginData = result.data
          chart.source(this.loginData)
          chart.animate(true) 
          chart.scale("daycount", {
            min: 0
          })

          // chart.tooltip({
          //   crosshairs: {
          //     type: "line"
          //   }
            
          // })
          chart.tooltip({
                showTitle: false,
                itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>数据<span style="margin-left:20px;">{value}</span></li>'
            });
          chart.line().position("num*daycount")
          chart
            .point()
            .position("num*daycount")
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
