(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,n){e.exports=n("56d7")},"0f9a":function(e,t,n){"use strict";n.r(t);n("b0c0"),n("d3b7"),n("25f0"),n("498a");var r=n("7ded"),a=n("5f72"),i=n("5f87"),o={user:"",code:"",token:Object(i["b"])(),name:Object(i["c"])(),type:"",introduction:"",roles:[],menus:void 0,elements:void 0,permissionMenus:void 0,setting:{articlePlatform:[]}},s={SET_CODE:function(e,t){e.code=t},SET_TOKEN:function(e,t){e.token=t},SET_AUTHTYPE:function(e,t){e.type=t},SET_INTRODUCTION:function(e,t){e.introduction=t},SET_SETTING:function(e,t){e.setting=t},SET_NAME:function(e,t){e.name=t},SET_ROLES:function(e,t){e.roles=t},SET_PERMISSION_MENUS:function(e,t){e.permissionMenus=t},SET_MENUS:function(e,t){e.menus=t},SET_ELEMENTS:function(e,t){e.elements=t}},c={LoginByUsername:function(e,t){var n=e.commit,o=t.username.trim(),s=t.password;return new Promise((function(e,t){Object(r["a"])(o,s).then((function(t){if(0==t.code){var r=t.data.token,o=t.data.authType.toString(),s="";s=t.data.name,n("SET_TOKEN",r),n("SET_NAME",s),Object(i["h"])(r),Object(i["i"])(s),Object(i["g"])(o),e()}else Object(a["Message"])({message:t.msg,type:"error"})})).catch((function(e){t(e)}))}))},getInfo:function(e){var t=e.commit,n=(e.state,Object(i["a"])());t("SET_AUTHTYPE",n)},LogOut:function(e){var t=e.commit,n=e.state;return new Promise((function(e,r){n.token;t("SET_TOKEN",""),t("SET_NAME",""),t("SET_AUTHTYPE",""),Object(i["e"])(),Object(i["f"])(),Object(i["d"])(),e()}))}};t["default"]={namespaced:!0,state:o,mutations:s,actions:c}},"0feb":function(e,t,n){},2017:function(e,t,n){"use strict";var r=n("cafe"),a=n.n(r);a.a},"31c2":function(e,t,n){"use strict";n.r(t);n("a4d3"),n("4de4"),n("4160"),n("c975"),n("45fc"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("159b");var r=n("ade3"),a=n("a18c");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){return!t.meta||!t.meta.role||e.some((function(e){return t.meta.role.indexOf(e)>=0}))}function c(e,t){var n=[];return e.forEach((function(e){var r=o({},e);s(t,r)&&(r.children&&(r.children=c(r.children,t)),n.push(r))})),n}var u={routes:[],addRoutes:[]},l={SET_ROUTES:function(e,t){e.routes=t}},p={generateRoutes:function(e,t){var n=e.commit;return new Promise((function(e){var r=c(a["a"],t);n("SET_ROUTES",r),e(r)}))}};t["default"]={namespaced:!0,state:u,mutations:l,actions:p}},4360:function(e,t,n){"use strict";n("13d5"),n("d3b7"),n("ac1f"),n("5319"),n("ddb0");var r=n("5880"),a=n.n(r),i=(n("b0c0"),{token:function(e){return e.user.token},type:function(e){return e.user.type},name:function(e){return e.user.name},introduction:function(e){return e.user.introduction},roles:function(e){return e.user.roles},setting:function(e){return e.user.setting},permission_routes:function(e){return e.permission.routes},addRoutes:function(e){return e.permission.addRoutes},permissionMenus:function(e){return e.user.permissionMenus},errorLogs:function(e){return e.errorLog.logs},menus:function(e){return e.user.menus},elements:function(e){return e.user.elements}}),o=i,s=n("c653"),c=s.keys().reduce((function(e,t){var n=t.replace(/^\.\/(.*)\.\w+$/,"$1"),r=s(t);return e[n]=r.default,e}),{}),u=new a.a.Store({modules:c,getters:o});t["a"]=u},"4b60":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("8bbf"),a=n.n(r),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:"/login"!=e.$route.path?"app":"",attrs:{id:"app"}},[n("HeaderNav"),n("div",{class:"/login"==e.$route.path||"/findPassword"==e.$route.path?"views views-height":"views"},["/login"!==e.$route.path&&"/findPassword"!==e.$route.path&&"/forbidden"!==e.$route.path&&"/register"!==e.$route.path&&"/register/firstStep"!==e.$route.path&&"/register/lastStep"!==e.$route.path?n("LeftNav"):e._e(),n("div",{staticStyle:{width:"100%"}},["/login"!==e.$route.path&&"/findPassword"!==e.$route.path&&"/forbidden"!==e.$route.path&&"/register"!==e.$route.path&&"/register/firstStep"!==e.$route.path&&"/register/lastStep"!==e.$route.path?n("Layout"):e._e(),n("router-view")],1)],1),"/login"!==e.$route.path?n("PageFooter"):e._e()],1)},o=[],s={components:{LeftNav:function(e){return n.e("chunk-bff31812").then(function(){var t=[n("7466")];e.apply(null,t)}.bind(this)).catch(n.oe)},Layout:function(e){return n.e("chunk-6f2869de").then(function(){var t=[n("162e")];e.apply(null,t)}.bind(this)).catch(n.oe)},HeaderNav:function(e){return n.e("chunk-eb97902e").then(function(){var t=[n("0418")];e.apply(null,t)}.bind(this)).catch(n.oe)},PageFooter:function(e){return n.e("chunk-8fd32ea4").then(function(){var t=[n("ccb6")];e.apply(null,t)}.bind(this)).catch(n.oe)}},data:function(){return{}},methods:{},computed:{}},c=s,u=(n("5c0b"),n("2877")),l=Object(u["a"])(c,i,o,!1,null,null,null),p=l.exports,d=n("a18c"),m=n("4360"),f=(n("c975"),n("96cf"),n("1da1")),b=n("323e"),h=n.n(b),g=(n("a5d8"),n("5f87"));h.a.configure({showSpinner:!1});var v=["/login","/forbidden","/findPassword","/register","/register/firstStep","/register/secondStep","/register/thirdStep","/register/fourthStep","/register/lastStep"];d["b"].beforeEach(function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(h.a.start(),!Object(g["b"])()){e.next=17;break}if(console.log(t.path),-1===v.indexOf(t.path)){e.next=8;break}r({path:"/"}),h.a.done(),e.next=15;break;case 8:if(""!==m["a"].getters.type){e.next=13;break}return e.next=11,m["a"].dispatch("user/getInfo",{}).then(Object(f["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m["a"].dispatch("permission/generateRoutes",[m["a"].getters.type]);case 2:t=e.sent,Object(d["c"])(),d["b"].addRoutes(t),r();case 6:case"end":return e.stop()}}),e)}))));case 11:e.next=15;break;case 13:r(),h.a.done();case 15:e.next=18;break;case 17:-1!==v.indexOf(t.path)?r():(r("/login"),h.a.done());case 18:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()),d["b"].afterEach((function(){h.a.done()}));n("5a8b"),n("be35"),n("b20f"),n("c695");var y=n("cf75"),w=n.n(y),k=(n("5d37"),n("b775")),S={get:"page",add:"add",update:"update",del:"delete",details:"details",export:"export",custom:"custom"},_={install:function(e){function t(e){}t.prototype.get=function(e,t){return Object(k["a"])({url:e,method:"get",params:t})},t.prototype.post=function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(k["a"])({url:t,method:"post",data:n,params:r});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),t.prototype.update=function(e,t){return Object(k["a"])({url:e,method:"put",data:t})},t.prototype.delete=function(e,t){return Object(k["a"])({url:e,method:"delete"})},t.prototype.findList=function(e,t){return Object(k["a"])({url:e+S.get,method:"post",data:t})},t.prototype.custom=function(e,t){return Object(k["a"])({url:e+S.custom,method:"post",data:t})},t.prototype.addData=function(e,t){return Object(k["a"])({url:e+S.add,method:"post",data:t})},t.prototype.updateData=function(e,t){return Object(k["a"])({url:e+S.update,method:"post",data:t})},t.prototype.delData=function(e,t){return Object(k["a"])({url:e+S.del,method:"post",data:t})},t.prototype.getById=function(e,t){return Object(k["a"])({url:e+S.details,method:"post",data:t})},t.prototype.export=function(e,t){return Object(k["a"])({url:e+S.export,method:"post",data:t,responseType:"blob"})},e.prototype.$api=new t}},C="/supplyx",O=C+"/system/login",x=C+"/enterprise/register",E=C+"/h/code/register",T=C+"/system/forgot",$=C+"/h/code/forgot",I=C+"/h/vcode",j=C+"/app/findList",A=C+"/app/detail",F=C+"/app/apply",L=C+"/enterprise/findEnt",P=C+"/enterprise/update",R=C+"/user/admin",M=C+"/user/upd",U=C+"/sms/findList",N=C+"/sms/delete",D=C+"/enterprise/findEnt",z=C+"/enteruser/findCount",q=C+"/log/daysaction",B=C+"/log/visits",H=C+"/enterApp/findAppMessage",Z=C+"/enterApp/apply",Q=C+"/application/run",V=C+"/log/daystopten",W=C+"/enterAppUser/findList",X=C+"/enterAppUser/appUser",Y=C+"/enterAppUser/add",J=C+"/enterAppUser/remove",K=C+"/enterAppUser/edit",G=C+"/enteruser/findUserList",ee=C+"/user/add",te=C+"/depart/findDepartList",ne=C+"/user/upd",re=C+"/enteruser/remove",ae=C+"/sms/findList",ie=C+"/sms/delete",oe=C+"/sms/read",se=C+"/depart/",ce=C+"/depart/tree",ue=C+"/wxqr/getInvitationORShareLimitQr",le={install:function(e){e.prototype.$lesUiPath={login:O,enterpriseRegister:x,depart:se,departTree:ce,appStore:j,appDetail:A,appApply:F,enterpriseBasicInfo:L,editEnterpriseBasicInfo:P,adminInfo:R,editAdminInfo:M,systemInfo:U,delSystemInfo:N,enterAppFindList:H,enterpriseFindEnt:D,enteruserFindCount:z,activeUserLeaderboard:V,enterAppUserFindList:W,enterAppUserAppUser:X,enteruserFindUserList:G,enteruserAdd:ee,enteruserUpdate:ne,departFindDepartList:te,enteruserRemove:re,smsFindList:ae,smsDelete:ie,smsRead:oe,enterAppUserAdd:Y,enterAppUserRemove:J,enterAppUserEdit:K,enteruserLogin:q,enterAppRun:Q,code:E,password:T,forgetCode:$,enteruserVisit:B,supLinkEnter:Z,checkCode:I,createOrderQr:ue}}},pe={install:function(e){e.prototype.$global={confirmConfig:{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1},dateTime:function(e){var t=new Date(e),n=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()+" "+(t.getHours()<10?"0"+t.getHours():t.getHours())+":"+(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":"+(t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds());return n}}}},de=n("7f1a"),me=n.n(de);a.a.config.productionTip=!1,a.a.use(me.a),a.a.use(_),a.a.use(le),a.a.use(pe),a.a.use(w.a),a.a.prototype.$XModal=w.a.modal,new a.a({router:d["b"],store:m["a"],render:function(e){return e(p)}}).$mount("#app")},5880:function(e,t){e.exports=Vuex},"5a8b":function(e,t,n){},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"5f72":function(e,t){e.exports=ELEMENT},"5f87":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"h",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"c",(function(){return p})),n.d(t,"i",(function(){return d})),n.d(t,"f",(function(){return m})),n.d(t,"a",(function(){return f})),n.d(t,"g",(function(){return b})),n.d(t,"d",(function(){return h}));var r=n("a78e"),a=n.n(r),i="srm-token",o="userName",s="authType";function c(){return a.a.get(i)}function u(e){return a.a.set(i,e)}function l(){return a.a.remove(i)}function p(){return a.a.get(o)}function d(e){return a.a.set(o,e)}function m(){return a.a.remove(o)}function f(){return a.a.get(s)}function b(e){return a.a.set(s,e)}function h(){return a.a.remove(s)}},"61f7":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return o}));n("c975");function r(e,t,n){var r=/^[\u0391-\uFFE5A-Za-z]+$/;if(t)return r.test(t)?n():n(new Error("只允许输入中文或字母"))}function a(e,t,n){var r=/^[A-Za-z0-9]+$/;if(t)return r.test(t)?n():n(new Error("只允许输入数字或字母"))}function i(e,t,n){var r=/^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;if(t)return r.test(t)?n(new Error("不允许邮箱注册")):n()}function o(e,t,n){var r=/(^1[3|4|5|7|8|9]\d{9}$)|(^09\d{8}$)/,a=/^0\d{2,3}-?\d{7,8}$/;if(t)if(11==t.length){if(r.test(t))return n()}else{if(13!=t.length||-1==t.indexOf("-"))return n(new Error("请输入正确联系电话"));if(a.test(t))return n()}}},"6f71":function(e,t,n){},7023:function(e,t,n){e.exports=n.p+"static/img/QR-code.c3bd67c8.jpg"},7269:function(e,t,n){e.exports=n.p+"static/img/guanbi.e50b8084.png"},"7ded":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("b775");function a(e,t){var n={username:e,password:t};return Object(r["a"])({url:"/supplyx/system/login",method:"post",data:n})}},"841f":function(e,t,n){e.exports=n.p+"static/img/mini_code.b5941086.jpg"},8568:function(e,t,n){"use strict";n.r(t);n("c975");var r=void 0,a={judgePath:""},i={handleJudgePath:function(e){return function(){var e=["/login","/forbidden","/findPassword","/register","/register/firstStep","/register/secondStep","/register/thirdStep","/register/fourthStep","/register/lastStep"],t=r.$route.path;return-1==e.indexOf(t)}}};t["default"]={namespaced:!0,state:a,getters:i}},"8aa3":function(e,t,n){e.exports=n.p+"static/img/guanbi-2.fcc8151c.png"},"8b11":function(e,t,n){},"8bbf":function(e,t){e.exports=Vue},"9c0c":function(e,t,n){},a18c:function(e,t,n){"use strict";n("d3b7");var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-container"},[e._m(0),n("div",{staticClass:"login-box"},[n("div",{staticClass:"login-background"},[n("div",{staticClass:"login-main"},[n("div",{staticClass:"login-title"},[e._v("Supply X 供应链协同平台")]),n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"label-position":"left"}},[n("el-form-item",{attrs:{prop:"username"}},[n("p",{staticStyle:{"text-align":"left",height:"20px","line-height":"20px","margin-bottom":"10px",color:"#7e7e7e"}},[e._v(" 账户密码登录 ")]),n("el-input",{staticClass:"username",attrs:{type:"text",autocomplete:"new-password",placeholder:"输入手机号或者管理员账号",maxlength:"30","prefix-icon":"el-icon-user"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username","string"===typeof t?t.trim():t)},expression:"loginForm.username"}}),n("el-tooltip",{staticClass:"tooltip",attrs:{effect:"dark",content:"请使用手机号码或企业账号登陆",placement:"top"}},[n("i",{staticClass:"el-icon-question account-prompt",staticStyle:{"font-size":"22px","vertical-align":"middle"}})])],1),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{attrs:{type:"password",autocomplete:"new-password",placeholder:"请输入密码",maxlength:"30","prefix-icon":"el-icon-lock"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin("loginForm")}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password","string"===typeof t?t.trim():t)},expression:"loginForm.password"}})],1)],1),n("div",{staticClass:"forgetpsd"},[n("router-link",{attrs:{to:"/findPassword"}},[e._v("管理员忘记密码")])],1),n("el-button",{staticClass:"login-button",attrs:{type:"primary"},on:{click:function(t){return e.handleLogin("loginForm")}}},[e._v("登陆 ")]),n("div",{staticClass:"register-forgetpsd"},[n("div",{staticClass:"register"},[n("router-link",{attrs:{to:"/register"}},[e._v("我还没有账号，我要注册")])],1)])],1)])]),e._m(1)])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"appletQr"},[r("div",{staticClass:"appletQr_box"},[r("div",{staticClass:"qr_code"},[r("p",[r("img",{attrs:{src:n("7023"),alt:""}}),r("span",[e._v("公众号")])])]),r("div",{staticClass:"qr_code"},[r("p",[r("img",{attrs:{src:n("841f"),alt:""}}),r("span",[e._v("小程序")])])]),r("div",{staticClass:"appletQr_text"},[r("p",[e._v("让供需关系易如反掌")]),r("p",[e._v("推荐使用小程序操作，无需下载快速便捷")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"company-info-box"},[n("div",{staticClass:"company-info"},[n("span",[e._v("谷器数据"),n("span",[e._v("@2020")])]),n("span",{staticStyle:{display:"inline-block",margin:"0 10px"}},[e._v("联系电话：400-0530-512")]),n("span",[e._v("Email：marketing@zkyda.com")])])])}],i=(n("7ded"),{name:"",data:function(){return{loginForm:{},loginRules:{username:[],password:[{required:!0,trigger:"blur",message:"密码不能为空"}]}}},methods:{handleLogin:function(e){var t=this;this.$refs[e].validate((function(n){if(!n)return!1;t.loading=!0,t.$store.dispatch("user/LoginByUsername",t[e]).then((function(){var e={acpath:"/system/login"};localStorage.clear(),t.$api.post(t.$lesUiPath.enterAppFindList,e).then((function(e){console.log(e),0==e.code&&(localStorage.setItem("appNum",e.data.statisticList[0]?e.data.statisticList[0].appNum:""),localStorage.setItem("enterName",e.data.enterprise.enterName),localStorage.setItem("eid",e.data.enterprise.id),localStorage.setItem("xid",e.data.enterprise.xid),localStorage.setItem("visitCount",e.data.statisticList[0]?e.data.statisticList[0].visits:""),localStorage.setItem("count",e.data.statisticList[0]?e.data.statisticList[0].userNum:""),t.$router.push({path:"/"}))}))})).catch((function(e){t.loading=!1}))}))}}}),o=i,s=(n("2017"),n("2877")),c=Object(s["a"])(o,r,a,!1,null,null,null),u=c.exports,l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"content"},[e._m(0),n("div",{staticClass:"font"},[e._v("账号异常")]),n("div",{staticClass:"fontType"},[e._v("您的账号可能发生以下情况，请拨打官方热线寻求帮助")]),e._m(1),n("div",{staticClass:"return"},[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.handleBack}},[e._v("返回登录")])],1)])])},p=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("img",{staticClass:"forbiddenImg",attrs:{src:n("7269"),alt:""}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"type"},[r("div",{staticClass:"title"},[e._v("您提交的内容有如下错误:")]),r("ul",[r("li",[r("img",{staticClass:"liImg",attrs:{src:n("8aa3"),alt:""}}),r("span",{staticStyle:{"vertical-align":"super"}},[e._v("你的企业账号已被停用")])]),r("li",[r("img",{staticClass:"liImg",attrs:{src:n("8aa3"),alt:""}}),r("span",{staticStyle:{"vertical-align":"super"}},[e._v("你的个人账号被停用")])]),r("li",[r("img",{staticClass:"liImg",attrs:{src:n("8aa3"),alt:""}}),r("span",{staticStyle:{"vertical-align":"super"}},[e._v("没有关联的企业")])])])])}],d={name:"",data:function(){return{}},methods:{handleBack:function(){this.$router.push({path:"/login"})}}},m=d,f=(n("edd2"),Object(s["a"])(m,l,p,!1,null,null,null)),b=f.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticStyle:{"padding-left":"210px"}},[n("div",{staticStyle:{display:"flex"}},[e.update?n("MyCorporateInfo",{staticStyle:{width:"65%",margin:"10px"},attrs:{billAvgCostList:e.billAvgCostList,enterName:e.enterName}}):e._e(),n("MyCorporateApplication",{staticStyle:{width:"32%",margin:"10px"},attrs:{list:e.list,code:e.code,cusSupStatistic:e.cusSupStatistic}})],1),n("EnterpriseUserInfo",{staticStyle:{margin:"10px"}})],1)])},g=[],v=(n("d81d"),{name:"",data:function(){return{list:[],code:"",enterName:"",cusSupStatistic:{},billAvgCostList:[],update:!0}},components:{MyCorporateInfo:function(e){return n.e("chunk-53f9919a").then(function(){var t=[n("6394")];e.apply(null,t)}.bind(this)).catch(n.oe)},MyCorporateApplication:function(e){return n.e("chunk-9071680c").then(function(){var t=[n("919c")];e.apply(null,t)}.bind(this)).catch(n.oe)},EnterpriseUserInfo:function(e){return n.e("chunk-70fbc3ed").then(function(){var t=[n("6797")];e.apply(null,t)}.bind(this)).catch(n.oe)}},mounted:function(){this.getMyApplication()},methods:{getMyApplication:function(){var e=this;this.update=!1;var t={acpath:"/system/login"};this.$api.post(this.$lesUiPath.enterAppFindList,t).then((function(t){0==t.code&&(e.list=t.data.enterApps,e.code=t.data.enterprise.invCode,e.enterName=t.data.enterprise.enterName,e.cusSupStatistic=t.data.cusSupStatisticList[0]||{},console.log(t.data.cusSupStatisticList[0],"dsdadasdadas"),e.billAvgCostList=t.data.billAvgCostList,0!=t.data.appCount&&(console.log(t.data.enterApps,"enterApps"),t.data.enterApps.map((function(e){"E5CD4719"==e.appId&&(localStorage.setItem("enterpriseId",e.tsAppId),localStorage.setItem("enterpriseAppId",e.appId)),"E5CD4720"==e.appId&&(localStorage.setItem("supplierId",e.tsAppId),localStorage.setItem("supplierAppId",e.appId))}))),e.$nextTick((function(){e.update=!0})))}))}}}),y=v,w=(n("af54"),Object(s["a"])(y,h,g,!1,null,null,null)),k=w.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"password-container"},[n("div",{staticClass:"content"},[n("div",{staticClass:"title"},[e._v(e._s(1==e.active?"找回密码":"重置密码")),n("span",{staticClass:"border"})]),1==e.active?n("div",{staticClass:"form"},[n("el-form",{ref:"mobileForm",attrs:{model:e.mobileForm,rules:e.mobileRules,size:"small","hide-required-asterisk":""}},[n("el-form-item",{attrs:{prop:"mobile",label:"管理员手机","label-width":"90px"}},[n("el-input",{model:{value:e.mobileForm.mobile,callback:function(t){e.$set(e.mobileForm,"mobile",t)},expression:"mobileForm.mobile"}})],1),n("el-form-item",{attrs:{prop:"code",label:"验证码","label-width":"90px"}},[n("el-input",{attrs:{maxlength:"6"},model:{value:e.mobileForm.code,callback:function(t){e.$set(e.mobileForm,"code",t)},expression:"mobileForm.code"}},[n("template",{staticStyle:{color:"white","background-color":"#4A90E2","border-color":"#4A90E2"},slot:"append"},[n("el-button",{attrs:{size:"small",disabled:e.canClick,type:"primary"},on:{click:e.validCode}},[e._v(e._s(e.btnContent))])],1)],2)],1)],1),n("div",{staticClass:"btns"},[n("el-button",{attrs:{size:"small"},on:{click:e.handleBack}},[e._v("返 回")]),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.next}},[e._v("下一步")])],1)],1):e._e(),2==e.active?n("div",{staticClass:"form"},[n("el-form",{ref:"passwordForm",attrs:{model:e.passwordForm,rules:e.passwordRules,size:"small","hide-required-asterisk":""}},[n("el-form-item",{attrs:{prop:"name",label:"登录密码","label-width":"90px"}},[n("span",{staticStyle:{float:"left"}},[e._v(e._s(e.passwordForm.name+"***"))])]),n("el-form-item",{attrs:{prop:"password",label:"登录密码","label-width":"90px"}},[n("el-input",{attrs:{type:"password",maxlength:"30"},model:{value:e.passwordForm.password,callback:function(t){e.$set(e.passwordForm,"password",t)},expression:"passwordForm.password"}})],1),n("el-form-item",{attrs:{prop:"confirmPassWord",label:"确认密码","label-width":"90px"}},[n("el-input",{attrs:{type:"password",maxlength:"30"},model:{value:e.passwordForm.confirmPassWord,callback:function(t){e.$set(e.passwordForm,"confirmPassWord",t)},expression:"passwordForm.confirmPassWord"}})],1)],1),n("div",{staticClass:"btns"},[n("el-button",{attrs:{size:"small"},on:{click:e.handleReturn}},[e._v("返 回")]),n("el-button",{attrs:{type:"primary",size:"small",loading:e.loading},on:{click:e.handleSure}},[e._v("提交并返回登录页")])],1)],1):e._e()])])},_=[],C=(n("b0c0"),n("61f7")),O={name:"",data:function(){var e=this,t=function(t,n,r){""===n?r(new Error("请再次输入密码")):n!==e.passwordForm.password?r(new Error("两次输入密码不一致!")):r()};return{mobileForm:{},mobileRules:{mobile:[{required:!0,message:"请输入管理员手机号码",trigger:"blur"},{validator:C["d"].bind(this),message:"请输入正确联系电话",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]},active:"1",passwordForm:{},passwordRules:{password:[{required:!0,message:"30个长度以内的英文数字的组合",trigger:"blur"},{validator:C["c"].bind(this),message:"请输入30个长度以内的英文数字的组合",trigger:"blur"}],confirmPassWord:[{required:!0,message:"再次输入密码",trigger:"blur"},{validator:t,message:"两次密码输入不一致",trigger:"blur"}]},loading:!1,btnContent:"获取验证码",canClick:!1,time:60,timer:"cloak"}},methods:{handleBack:function(){this.$router.push({path:"/login"})},handleReturn:function(){this.active=1},next:function(){var e=this;this.passwordForm={},this.loading=!1,this.$refs["mobileForm"].validate((function(t){t&&e.$api.post(e.$lesUiPath.checkCode,e.mobileForm).then((function(t){if(0!=t.code)return e.$message.error(t.msg);e.active=2}))}))},validCode:function(){var e=this;if(!this.mobileForm.mobile)return this.$message.warning("请先输入手机号码");var t={};t.mobile=this.mobileForm.mobile,this.canClick=!0,this.getTimeOut(),this.$api.post(this.$lesUiPath.forgetCode,t).then((function(t){if(0!=t.code)return e.$message.error(t.msg);e.passwordForm.name=t.data}))},getTimeOut:function(){var e=this;this.cloak=setInterval((function(){e.time--,e.time>0?e.btnContent=e.time+"s后重新发送":e.time<=0&&(window.clearInterval(e.cloak),e.btnContent="重新发送",e.time=60,e.canClick=!1)}),1e3)},handleSure:function(){var e=this;this.$refs["passwordForm"].validate((function(t){if(t){e.loading=!0;var n=Object.assign(e.mobileForm,e.passwordForm);delete n.name,e.$api.post(e.$lesUiPath.password,n).then((function(t){if(e.loading=!1,0!=t.code)return e.$message.error(t.data);e.$message.success("操作成功"),e.$router.push({path:"/login"})}))}}))}}},x=O,E=(n("e2f4"),Object(s["a"])(x,S,_,!1,null,null,null)),T=E.exports,$=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},I=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"help-page"},[n("div",[e._v(" 帮助 ")])])}],j={name:"helpPage",data:function(){return{}},components:{LeftNav:function(e){return n.e("chunk-bff31812").then(function(){var t=[n("7466")];e.apply(null,t)}.bind(this)).catch(n.oe)}}},A=j,F=Object(s["a"])(A,$,I,!1,null,"6700da4a",null),L=F.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[n("div",{staticStyle:{"padding-left":"210px"}},[n("router-view")],1)])},R=[],M={components:{LeftNav:function(e){return n.e("chunk-bff31812").then(function(){var t=[n("7466")];e.apply(null,t)}.bind(this)).catch(n.oe)},PageTitle:function(e){return n.e("chunk-00b8604d").then(function(){var t=[n("89dd")];e.apply(null,t)}.bind(this)).catch(n.oe)}},data:function(){return{}}},U=M,N=Object(s["a"])(U,P,R,!1,null,"5cda26cc",null),D=N.exports,z={path:"/application",component:D,name:"applicaApplicationCentertion",meta:{title:"应用中心",breadcrumbTitle:"应用中心",breadcrumb:!0,path:"/application",leftNav:!0,icon:"el-icon-my-shangcheng"},redirect:"/application/appStore",children:[{path:"appStore",component:function(){return n.e("chunk-0ed4cecb").then(n.bind(null,"405e"))},name:"appStore",meta:{title:"应用商城",breadcrumbTitle:"应用商城",breadcrumb:!0,path:"/application/appStore",isOnlyRoute:!0},children:[{path:"applicationDetails",component:function(){return n.e("chunk-c3f2a42e").then(n.bind(null,"2c1d"))},name:"applicationDetails",meta:{title:"应用详情",breadcrumbTitle:"应用详情",breadcrumb:!0,path:"/application/appStore/applicationDetails"}},{path:"apply",component:function(){return n.e("chunk-0f602e96").then(n.bind(null,"cd69"))},name:"apply",meta:{title:"应用申请",breadcrumbTitle:"应用申请",breadcrumb:!0,path:"/application/appStore/apply"}}]},{path:"enterpriseApplications",component:function(){return n.e("chunk-2207d648").then(n.bind(null,"e2ff"))},name:"enterpriseApplications",meta:{title:"我的企业应用",breadcrumbTitle:"我的企业应用",breadcrumb:!0,path:"/application/enterpriseApplications",isOnlyRoute:!0},children:[{path:"applicationStatus",component:function(){return n.e("chunk-563ea4d5").then(n.bind(null,"4550"))},name:"applicationStatus",meta:{title:"应用状态",breadcrumbTitle:"应用状态",breadcrumb:!0,path:"/application/enterpriseApplications/applicationStatus"},children:[{path:"Renew",component:function(){return n.e("chunk-5d5bf7ea").then(n.bind(null,"bb7b"))},name:"Renew",meta:{title:"应用续费",breadcrumbTitle:"应用续费",breadcrumb:!0,path:"/application/enterpriseApplications/applicationStatus/Renew"}}]},{path:"applicationSetting",component:function(){return n.e("chunk-2717837e").then(n.bind(null,"7cf0"))},name:"applicationSetting",meta:{title:"用户设定",breadcrumbTitle:"用户设定",breadcrumb:!0,path:"/application/enterpriseApplications/applicationSetting"}},{path:"enterpriseCode",component:function(){return n.e("chunk-1616916c").then(n.bind(null,"8038"))},name:"enterpriseCode",meta:{title:"邀请供应商",breadcrumbTitle:"邀请供应商",breadcrumb:!0,path:"/application/enterpriseApplications/enterpriseCode"}},{path:"linkSupplier",component:function(){return n.e("chunk-0e03976a").then(n.bind(null,"0d26"))},name:"linkSupplier",meta:{title:"关联采购商",breadcrumbTitle:"关联采购商",breadcrumb:!0,path:"/application/enterpriseApplications/linkSupplier"}}]}]},q=z,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"enterprise"},[n("PageTitle",{staticStyle:{"margin-left":"210px"},attrs:{isShowBreadcrub:!1}}),n("div",{staticClass:"enterprise-views"},[n("router-view")],1)],1)},H=[],Z={name:"enterprise",components:{LeftNav:function(e){return n.e("chunk-bff31812").then(function(){var t=[n("7466")];e.apply(null,t)}.bind(this)).catch(n.oe)},PageTitle:function(e){return n.e("chunk-00b8604d").then(function(){var t=[n("89dd")];e.apply(null,t)}.bind(this)).catch(n.oe)}},data:function(){return{}}},Q=Z,V=(n("da6d"),Object(s["a"])(Q,B,H,!1,null,"4019b650",null)),W=V.exports,X={path:"/enterprise",component:W,name:"EnterpriseCenter",meta:{title:"企业中心",breadcrumbTitle:"企业中心",breadcrumb:!0,role:["1","2"],icon:"el-icon-my-qiye"},redirect:"/enterprise/enterpriseInfo/basicInfo",children:[{path:"enterpriseInfo",component:function(){return n.e("chunk-2d0e22f8").then(n.bind(null,"7e2f"))},name:"enterpriseInfo",redirect:"/enterprise/enterpriseInfo/basicInfo",meta:{title:"企业信息",breadcrumbTitle:"企业信息",breadcrumb:!0,path:"/enterprise/enterpriseInfo",role:["1","2"]},children:[{path:"basicInfo",component:function(){return n.e("chunk-8c74fff0").then(n.bind(null,"e717"))},name:"basicInfo",meta:{title:"企业基本信息",breadcrumbTitle:"企业基本信息",breadcrumb:!0,path:"/enterprise/enterpriseInfo/basicInfo",icon:"el-icon-my-dian",role:["1","2"]}},{path:"adminInfo",component:function(){return n.e("chunk-412463dc").then(n.bind(null,"4af6"))},name:"adminInfo",meta:{title:"管理员信息",breadcrumbTitle:"管理员信息",breadcrumb:!0,path:"/enterprise/enterpriseInfo/adminInfo",icon:"el-icon-my-dian",role:["1"]}}]},{path:"messageCenter",component:function(){return n.e("chunk-e8c37748").then(n.bind(null,"9353"))},name:"messageCenter",redirect:"/enterprise/messageCenter/systemInfo",meta:{title:"消息中心",breadcrumbTitle:"消息中心",breadcrumb:!0,path:"/enterprise/messageCenter",role:["1","2"]},children:[{path:"systemInfo",component:function(){return n.e("chunk-36ff7e1a").then(n.bind(null,"085d"))},name:"systemInfo",meta:{title:"系统信息",breadcrumbTitle:"系统信息",breadcrumb:!0,path:"/enterprise/messageCenter/systemInfo",icon:"el-icon-my-dian",role:["1","2"]}},{path:"applyInfo",component:function(){return n.e("chunk-56bb3b66").then(n.bind(null,"9aaf"))},name:"applyInfo",meta:{title:"应用信息",breadcrumbTitle:"应用信息",breadcrumb:!0,path:"/enterprise/messageCenter/applyInfo",icon:"el-icon-my-dian",role:["1","2"]}}]},{path:"userCenter",component:function(){return n.e("chunk-2a327f82").then(n.bind(null,"dcdc"))},name:"userCenter",redirect:"/enterprise/userCenter/userManagement",meta:{title:"用户中心",breadcrumbTitle:"用户中心",breadcrumb:!0,path:"/enterprise/userCenter",role:["1","2"]},children:[{path:"userManagement",component:function(){return n.e("chunk-154dfb8a").then(n.bind(null,"a7b8"))},name:"userManagement",meta:{title:"用户管理",breadcrumbTitle:"用户管理",breadcrumb:!0,path:"/enterprise/userCenter/userManagement",icon:"el-icon-my-dian",role:["1","2"]}},{path:"departmentManagement",component:function(){return n.e("chunk-415a99a1").then(n.bind(null,"263c"))},name:"departmentManagement",meta:{title:"部门管理",breadcrumbTitle:"部门管理",breadcrumb:!0,path:"/enterprise/userCenter/departmentManagement",icon:"el-icon-my-dian",role:["1","2"]}}]}]},Y=X;n.d(t,"a",(function(){return J})),n.d(t,"c",(function(){return ee}));var J=[{path:"/",redirect:"/dashboard",meta:{title:"首页",breadcrumbTitle:"首页",breadcrumb:!0}},{path:"/dashboard",component:k,name:"dashboard",meta:{title:"首页",breadcrumbTitle:"首页",breadcrumb:!0,icon:"el-icon-s-home"}},q,Y,{path:"/help",component:L,name:"Help",meta:{title:"帮助中心",breadcrumbTitle:"帮助中心",breadcrumb:!0,icon:"el-icon-collection-tag"}},{path:"/login",name:"login",component:u,meta:{title:"登陆",breadcrumbTitle:"登陆",breadcrumb:!0}},{path:"/forbidden",name:"forbidden",component:b,meta:{title:"禁用",breadcrumbTitle:"禁用",breadcrumb:!0}},{path:"/findPassword",name:"findPassword",component:T,meta:{title:"找回密码",breadcrumbTitle:"找回密码",breadcrumb:!0}},{path:"/register",name:"register",meta:{title:"企业注册流程",breadcrumbTitle:"注册",breadcrumb:!0},component:function(){return n.e("chunk-3635eab5").then(n.bind(null,"d5c2"))},children:[{path:"firstStep",name:"firstStep",meta:{title:"填写详细信息",showRoute:!1,breadcrumb:!1},component:function(){return n.e("chunk-2fa3bcda").then(n.bind(null,"88a6"))}},{path:"secondStep",name:"secondStep",meta:{title:"注册信息提交结果",showRoute:!1,breadcrumb:!1},component:function(){return n.e("chunk-88d2c994").then(n.bind(null,"fde8"))}},{path:"thirdStep",name:"thirdStep",meta:{title:"获得企业ID和管理账号",showRoute:!1,breadcrumb:!1},component:function(){return n.e("chunk-687c17f0").then(n.bind(null,"042c"))}},{path:"fourthStep",name:"fourthStep",meta:{title:"登陆访问系统",showRoute:!1,breadcrumb:!1},component:function(){return n.e("chunk-6bde322c").then(n.bind(null,"668b"))}},{path:"lastStep",name:"lastStep",meta:{title:"完成",showRoute:!1,breadcrumb:!1},component:function(){return n.e("chunk-765db0eb").then(n.bind(null,"95ad"))}}]}],K=function(){return new VueRouter({routes:J})},G=K();function ee(){var e=new VueRouter;G.matcher=e.matcher}t["b"]=G},af54:function(e,t,n){"use strict";var r=n("8b11"),a=n.n(r);a.a},b20f:function(e,t,n){e.exports={theme:"#4A90E2"}},b775:function(e,t,n){"use strict";n("d3b7");var r=n("5f72"),a=n("4360"),i=n("5f87"),o=axios.create({timeout:3e4});o.interceptors.request.use((function(e){return a["a"].getters.token?e.headers["X-Access-Token"]=Object(i["b"])():e.headers["X-Access-Token"]="Basic dnVlOnZ1ZQ==",e}),(function(e){Promise.reject(e)})),o.interceptors.response.use((function(e){var t=e.data;if(1==t.code){var n="";return n=t.data?t.data:t.msg,Object(r["Message"])({message:n,type:"error",duration:5e3}),Promise.reject("error")}return 40401==t.code?(Object(r["Message"])({message:t.msg,type:"error",duration:5e3}),a["a"].dispatch("user/LogOut").then((function(){location.reload()})),Promise.reject("error")):40102!=t.code&&40103!=t.code&&40109!=t.code?t:void(40102==t.code||40109==t.code?window.location.href="/#/forbidden":(Object(r["Message"])({message:t.msg,type:"error",duration:5e3}),Object(i["e"])(),removeUserName(),window.location.href=t.data.url))}),(function(e){if(e&&e.response)switch(e.response.status){case 400:e.message="请求错误(400)";break;case 401:e.message="未授权，请重新登录(401)";break;case 403:e.message="拒绝访问(403)";break;case 404:e.message="请求出错(404)";break;case 408:e.message="请求超时(408)";break;case 500:e.message="服务器错误(500)";break;case 501:e.message="服务未实现(501)";break;case 502:e.message="网络错误(502)";break;case 503:e.message="服务不可用(503)";break;case 504:e.message="网络超时(504)";break;case 505:e.message="HTTP版本不受支持(505)";break;default:e.message="连接出错(".concat(err.response.status,")!")}else e.message="连接服务器失败!";return Object(r["Message"])({message:e.message,type:"error",duration:5e3}),Promise.resolve(e)})),t["a"]=o},be35:function(e,t,n){},c653:function(e,t,n){var r={"./permission.js":"31c2","./user.js":"0f9a","./utils.js":"8568"};function a(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id="c653"},cafe:function(e,t,n){},da6d:function(e,t,n){"use strict";var r=n("0feb"),a=n.n(r);a.a},e2f4:function(e,t,n){"use strict";var r=n("4b60"),a=n.n(r);a.a},edd2:function(e,t,n){"use strict";var r=n("6f71"),a=n.n(r);a.a}},[[0,"runtime","chunk-libs"]]]);