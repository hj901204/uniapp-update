(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53f9919a"],{3357:function(t,e,i){},6394:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"my-corporate-info"},[t._m(0),i("div",{staticClass:"detail-info"},[i("div",{staticStyle:{display:"flex",margin:"10px 0"}},[i("div",{staticClass:"box"},[i("div",{staticClass:"boxFont"},[t._v("平均我的反应速度")]),i("div",{staticClass:"boxTime"},[t._v(t._s(t.enterAvgTime||"--"))])]),i("div",{staticClass:"box"},[i("div",{staticClass:"boxFont"},[t._v("平均响应我的反应速度")]),i("div",{staticClass:"boxTime"},[t._v(t._s(t.cusAvgTime||"--"))])])]),i("div",[i("vxe-table",{staticStyle:{"text-algin":"center"},attrs:{border:"outer","highlight-hover-row":"","max-height":"350px",data:t.billAvgCostList}},[i("vxe-table-column",{attrs:{type:"seq",title:"排名",width:"80"}}),i("vxe-table-column",{attrs:{field:"billType",title:"模块"}}),i("vxe-table-column",{attrs:{field:"avgTime",title:"平均用时"}}),i("vxe-table-column",{attrs:{field:"enterName",title:"企业名称","show-overflow":""}})],1)],1)])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"my-corporate-title"},[i("h3",[t._v("反馈速度")])])}],n=(i("d81d"),i("13d5"),{name:"my-corporate-info",props:{billAvgCostList:{type:Array,default:function(){return[]}},enterName:{type:String,default:""}},data:function(){return{enterAvglist:[],cusAvglist:[],enterAvgTime:"",cusAvgTime:""}},mounted:function(){this.handleTime()},methods:{handleToJump:function(){this.$router.push({path:"/enterprise/enterpriseInfo/basicInfo"})},handleTime:function(){var t=this;if(this.enterAvglist=[],this.cusAvglist=[],this.billAvgCostList.map((function(e){e.enterName==t.enterName?t.enterAvglist.push(e):t.cusAvglist.push(e)})),0!=this.enterAvglist.length){var e=this.enterAvglist.reduce((function(t,e){return parseInt(e.cost+t)}),0);this.timeStamp(e/this.enterAvglist.length,1)}if(0!=this.cusAvglist.length){var i=this.cusAvglist.reduce((function(t,e){return parseInt(e.cost+t)}),0);this.timeStamp(i/this.cusAvglist.length,2)}},timeStamp:function(t,e){var i=parseInt(t/60/24),s=parseInt(t/60%24),a=parseInt(t%60);return t="",i>0&&(t=i+"天"),s>0&&(t+=s+"小时"),a>0&&(t+=parseFloat(a)+"分钟"),1==e?this.enterAvgTime=t:2==e&&(this.cusAvgTime=t),""==t?"0分钟":t},drawChart:function(){var t=new G2.Chart({container:"chart1",height:50,width:100,title:!0}),e=[{daydate:"2020.04.02",daycount:"30"},{daydate:"2020.04.12",daycount:"10"}];t.source(e),t.animate(!0),t.scale("daycount",{min:0}),t.tooltip({crosshairs:{type:"line"}}),t.line().position("daydate*daycount"),t.area().position("year*value"),t.point().position("daydate*daycount").size(4).shape("circle").style({stroke:"#fff",lineWidth:1}),t.render()}}}),r=n,l=(i("dbfa"),i("2877")),o=Object(l["a"])(r,s,a,!1,null,"2db05c82",null);e["default"]=o.exports},dbfa:function(t,e,i){"use strict";var s=i("3357"),a=i.n(s);a.a}}]);