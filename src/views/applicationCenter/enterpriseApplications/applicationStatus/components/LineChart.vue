<template>
  <div id="container-line" />
</template>
<script>
export default {
  data () {
    return {
      accessdata: []
    }
  },
  mounted () {
    this.handleChart()
  },
  methods: {
    handleChart () {
      const chart = new G2.Chart({
        container: "container-line",
        height: 400,
        width: 800,
        forceFit: true,
        title: true
      })

      let obj = {
        acpath:"/application/run",
        days:"10"
      }

      this.$api.post(this.$lesUiPath.enteruserLogin, obj).then(result => {
        if (result.code == 0) {
          this.accessdata = result.data
          chart.source(this.accessdata)

          chart.scale("daycount", {
            min: 0
          })
          // chart.scale("daydate", {
          //   range: [0, 1]
          // })
          chart.scale("daydate", {
            alias: "近"+obj.days+"日用户登陆数量"
          })
          chart.axis("daydate", {
            title: {
              textStyle: {
                fontSize: 14, // 文本大小
                textAlign: "center", // 文本对齐方式
                fill: "#3A3E51" // 文本颜色
              }
            }
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
