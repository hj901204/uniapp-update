<template>
  <div id="container-line" />
</template>
<script>
export default {
  data() {
    return {
      data: [
        { week: "星期一", value: 3 },
        { week: "星期二", value: 4 },
        { week: "星期三", value: 5 },
        { week: "星期四", value: 7 },
        { week: "星期五", value: 10 },
        { week: "星期六", value: 6 },
        { week: "星期日", value: 7 }
      ]
    }
  },
  mounted() {
    this.handleChart()
  },
  methods: {
    handleChart() {
      const chart = new G2.Chart({
        container: "container-line",
        height: 400,
        width: 600,
        title: true
      })

      chart.source(this.data)

      chart.scale("value", {
        min: 0
      })
      chart.scale("week", {
        range: [0, 1]
      })
      chart.scale("week", {
        alias: "近7日用户登陆数量"
      })
      chart.axis("week", {
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
      chart.line().position("week*value")
      chart
        .point()
        .position("week*value")
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

<style></style>
