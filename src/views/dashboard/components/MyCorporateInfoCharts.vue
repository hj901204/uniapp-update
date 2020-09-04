<template>
    <div class="my-corporate-info">
        <div class="my-corporate-title">
            <h3>应用使用分析</h3>
        </div>
        <div class="detail-info">
            <div id="applyuseChart"></div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'my-corporate-info',
    props: {
      
    },
    data() {
      return {
          applyuseData:[]
      }
    },
    mounted() {
        this.applyuseDataChart()
    },
    methods: {
        applyuseDataChart(data) {
            const chart = new G2.Chart({
                container: 'applyuseChart',
                forceFit: true,
                height: 300,
                animate: false,
                padding: [10, 100, 10, -100]
            });
            this.$api.post(this.$lesUiPath.materialTypeAnalysis, data).then(res=>{
                if(res.code == 0 && res.data.data[0] && res.data.data[0].length){
                    let that = this;
                    res.data.data.map(v=>{
                        v.percent = toDecimal((v.qty/res.data.total)*100)
                    })
                    that.applyuseData = res.data.data
                    chart.source(that.applyuseData, {
                        percent: {
                            formatter: val => {
                                val = val + '%';
                                return val;
                            }
                        }
                    });
                    chart.coord('theta', {
                        radius: 0.85,
                        innerRadius: 0.75
                    });
                
                    chart.tooltip({
                        showTitle: false,
                        itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}  {value}</li>'
                    });
                    // 辅助文本
                    chart.guide().html({
                        position: [ '50%', '50%' ],
                        html: '<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;">采购分类<br><span style="color:#8c8c8c;font-size:20px">'+res.data.total+'</span></div>',
                        alignX: 'middle',
                        alignY: 'middle'
                    });
                    const interval = chart.intervalStack()
                        .position('percent')
                        .color('mtrTypeName')
                        .tooltip('mtrTypeName*percent', (item, percent) => {
                            percent = percent + '%';
                            return {
                                name: item,
                                value: percent
                            };
                        })
                        .style({
                            lineWidth: 1,
                            stroke: '#fff'
                        });
                    chart.legend({
                        itemFormatter(val) {
                        let percent, qty
                        that.applyuseData.map(x => {
                            if (x.mtrTypeName == val) {
                                percent = x.percent
                                qty = x.qty
                            }
                        })
                        return `${val} ` +'  |   ' +`${percent + '%'}` +'           '+ ` ${qty}`
                    },
                    position: 'right-center',
                    offsetX: -130
                })
                    chart.render();                  
                }
            })
        },
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
        }

        
    }
</style>
