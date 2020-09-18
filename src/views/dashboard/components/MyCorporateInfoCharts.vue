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
import { toDecimal } from '@/utils/validate'

  export default {
    name: 'my-corporate-info',
    props: ['countAppUseAnalyseList'],
    data() {
      return {
          applyuseData:this.countAppUseAnalyseList
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
                padding: [10, 100, 10, -100]
            });
            let that = this;
            let total = 0
            that.applyuseData.map(v=>{
                total+=v.NUM
            })
            that.applyuseData.map(v=>{
                v.percent = toDecimal((v.NUM/total)*100)
            })
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
                html: '<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;">累积使用<br><span style="color:#8c8c8c;font-size:20px">'+total+'</span></div>',
                alignX: 'middle',
                alignY: 'middle'
            });
            const interval = chart.intervalStack()
                .position('percent')
                .color('SYSNAME')
                .tooltip('SYSNAME*percent', (item, percent) => {
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
                    let percent, NUM
                    that.applyuseData.map(x => {
                        if (x.SYSNAME == val) {
                            percent = x.percent
                            NUM = x.NUM
                        }
                    })
                    return `${val} ` +'  |   ' +`${percent + '%'}` +'           '+ ` ${NUM}`
                },
                position: 'right-center',
                offsetX: -130
            })
            chart.render();                  
                
            
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
