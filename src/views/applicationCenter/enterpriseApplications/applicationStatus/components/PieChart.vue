<template>
  <div id="container-pie" />
</template>

<script>
export default {
  name: "pie-chart",
  data () {
    return {
      data: [
        { item: "用户一", count: 40, percent: 0.4 },
        { item: "用户二", count: 21, percent: 0.21 },
        { item: "用户三", count: 17, percent: 0.17 },
        { item: "用户四", count: 13, percent: 0.13 },
        { item: "用户五", count: 9, percent: 0.09 }
      ]
    }
  },
  mounted () {
    this.handleChart()
  },
  methods: {
    handleChart () {
      const chart = new G2.Chart({
        container: "container-pie",
        forceFit: true,
        // width: 250,
        height: 400
      })
      chart.source(this.data, {
        percent: {
          formatter: val => {
            val = val * 100 + "%"
            return val
          }
        }
      })

      chart.coord("theta")
      chart.tooltip({
        showTitle: false
      })
      chart
        .intervalStack()
        .position("percent")
        .color("item")
        .label("percent", {
          offset: -40,
          // autoRotate: false,
          textStyle: {
            textAlign: "center",
            shadowBlur: 2,
            shadowColor: "rgba(0, 0, 0, .45)",
            fill: "#fff"
          }
        })
        .tooltip("item*percent", (item, percent) => {
          percent = percent * 100 + "%"
          return {
            name: item,
            value: percent
          }
        })
        .style({
          lineWidth: 1,
          stroke: "#fff"
        })
      chart.render()
    }
  }
}
</script>

<style lang="scss" scoped>
.pie-chart {
}
</style>
