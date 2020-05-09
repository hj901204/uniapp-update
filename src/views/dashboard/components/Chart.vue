<template>
  <div id="container" />
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
        height: 300,
        width: 800,
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
          // chart.scale("daydate", {
          //   alias: ""
          // })
          // chart.axis("daydate", {
          //   title: {
          //     textStyle: {
          //       fontSize: 14, // 文本大小
          //       textAlign: "center", // 文本对齐方式
          //       fill: "#3A3E51" // 文本颜色
          //     }
          //   }
          // })

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
