(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c3f2a42e"],{"2c1d":function(a,t,e){"use strict";e.r(t);var p=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"apply-details"},[e("div",{staticClass:"apply-introduction"},[e("div",{staticClass:"apply-title"},[e("span",[e("i",[a._v("SupplyX")]),a._v(a._s(a.appDetail.appName))]),e("div",{staticClass:"apply-btns"},[a.applied||1!=a.type?a._e():e("el-button",{attrs:{size:"small",type:"primary"},on:{click:a.handleApply}},[a._v("立即申请 ")]),a.applied&&1==a.type?e("el-button",{attrs:{disabled:"",size:"small",type:"primary"}},[a._v("已申请 ")]):a._e(),e("el-button",{attrs:{size:"small"},on:{click:a.handleJumpAppStore}},[a._v("返回商城 ")])],1)]),e("div",{staticClass:"app-describe"},[e("p",[a._v(" "+a._s(a.appDetail.appIntroduce)+" ")])])]),e("div",{staticClass:"tab"},[e("el-tabs",{model:{value:a.activeName,callback:function(t){a.activeName=t},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"产品详情",name:"first"}},[a._v(a._s(a.appDetail.appDetails))]),e("el-tab-pane",{attrs:{label:"使用说明",name:"second"}},[a._v(a._s(a.appDetail.appExplain))]),e("el-tab-pane",{attrs:{label:"成功案例",name:"third"}},[a._v(a._s(a.appDetail.appCase))])],1)],1)])},i=[],s={name:"apply-details",data:function(){return{params:this.$route.query.params,appDetail:{},activeName:"first",applied:"",type:this.$store.getters.type}},created:function(){this.getAppDetail()},methods:{getAppDetail:function(){var a=this,t={id:this.params};this.$api.post(this.$lesUiPath.appDetail,t).then((function(t){if(0!=t.code)return a.$message.error(t.msg);a.appDetail=t.data,a.applied=t.data.applied}))},handleApply:function(){var a=this,t={id:this.params};this.$api.post(this.$lesUiPath.appApply,t).then((function(t){if(0!=t.code)return a.$message.error(t.msg);t.data.appName=a.appDetail.appName,a.$router.push({path:"/application/appStore/apply",query:{params:t.data}})}))},handleJumpAppStore:function(){this.$router.push({path:"/application/appStore"})}}},l=s,n=(e("7780"),e("2877")),r=Object(n["a"])(l,p,i,!1,null,"95a3e7f2",null);t["default"]=r.exports},"6b3c":function(a,t,e){},7780:function(a,t,e){"use strict";var p=e("6b3c"),i=e.n(p);i.a}}]);