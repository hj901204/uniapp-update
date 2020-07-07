(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09017484"],{"2f0d":function(e,t,r){"use strict";var a=r("bbed"),s=r.n(a);s.a},"7c0f":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"user-form"},[r("el-form",{ref:"ruleForm",attrs:{model:e.userForm,"label-width":"100px",size:"small",rules:e.rules}},[r("el-form-item",{attrs:{label:"姓名:",prop:"name"}},[e.isAdd?r("el-input",{staticStyle:{width:"50%"},attrs:{maxlength:"15",autocomplete:"new-password",placeholder:"请输入用户名称"},model:{value:e.userForm.name,callback:function(t){e.$set(e.userForm,"name",t)},expression:"userForm.name"}}):e._e(),e.isAdd?e._e():r("span",[e._v(e._s(e.userForm.name))])],1),r("el-form-item",{attrs:{label:"手机号码:",prop:"mobilePhone"}},[e.isAdd?r("el-input",{staticStyle:{width:"50%"},attrs:{type:"tel",autocomplete:"new-password",placeholder:"请输入用户手机号"},model:{value:e.userForm.mobilePhone,callback:function(t){e.$set(e.userForm,"mobilePhone",t)},expression:"userForm.mobilePhone"}}):e._e(),e.isAdd?e._e():r("span",[e._v(e._s(e.userForm.mobilePhone))])],1),e.isAdd?r("el-form-item",{attrs:{label:"图形验证码:",prop:"graphImage"}},[r("div",{staticClass:"graphFrom"},[r("el-input",{staticClass:"graphInput",staticStyle:{width:"50%"},attrs:{autocomplete:"new-password",maxlength:"4",placeholder:"请输入图形验证码"},on:{input:e.aaa},model:{value:e.userForm.graphImage,callback:function(t){e.$set(e.userForm,"graphImage",t)},expression:"userForm.graphImage"}}),r("div",{staticClass:"graphImage",on:{click:e.changeCode}},[r("identify",{staticClass:"identify",attrs:{identifyCode:e.identifyCode}})],1)],1)]):e._e(),e.isAdd?r("el-form-item",{attrs:{label:"短信验证码:",prop:"code"}},[r("div",{staticClass:"graphFrom"},[r("el-input",{staticClass:"graphInput",staticStyle:{width:"50%"},attrs:{autocomplete:"new-password",placeholder:"请输入短信验证码"},model:{value:e.userForm.code,callback:function(t){e.$set(e.userForm,"code",t)},expression:"userForm.code"}}),r("div",{staticClass:"graphImage"},[r("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.validCode}},[e._v(e._s(e.btnContent))])],1)],1)]):e._e(),r("el-form-item",{attrs:{label:"登陆密码:",prop:"password"}},[r("el-input",{staticStyle:{width:"50%","margin-right":"10px"},attrs:{type:"password",autocomplete:"new-password",maxlength:"30",placeholder:"输入密码，最少6个字符"},model:{value:e.userForm.password,callback:function(t){e.$set(e.userForm,"password",t)},expression:"userForm.password"}})],1),r("el-form-item",{attrs:{label:"所属部门:",prop:"departId"}},[r("el-select",{staticStyle:{width:"50%"},attrs:{placeholder:"请选择"},model:{value:e.userForm.departId,callback:function(t){e.$set(e.userForm,"departId",t)},expression:"userForm.departId"}},e._l(e.departOptions,(function(e){return r("el-option",{key:e.departId,attrs:{label:e.departName,value:e.departId}})})),1)],1),r("el-form-item",{attrs:{label:"应用权限:"}},[r("el-checkbox",{on:{change:e.handleCheckBox},model:{value:e.userForm.isEnable,callback:function(t){e.$set(e.userForm,"isEnable",t)},expression:"userForm.isEnable"}},[e._v("允许访问系统 ")])],1)],1),r("div",{staticClass:"edit-btn"},[r("el-button",{attrs:{size:"small"},on:{click:e.handleBack}},[e._v("返回 ")]),r("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.handleSave}},[e._v("保存 ")])],1)],1)},s=[],i=(r("d81d"),r("b0c0"),{name:"user-form",props:{isShowResetBtn:{type:Boolean,default:!1},userForm:{type:Object,default:function(){}},formRef:{type:String,default:""},isAdd:{type:Boolean,default:!0}},data:function(){return{btnContent:"获取验证码",time:60,timer:"cloak",identifyCode:"m6a8",identifyCodes:"123456789abcdefghjkmnpqrstuvwxyz",isFormDisabled:!0,defaultProps:{value:"id",label:"name",children:"children"},rules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}],password:[{required:!0,message:"请输入登陆密码",trigger:"blur"}],departId:[{required:!0,message:"请选择部门",trigger:"change"}],mobilePhone:[{required:!0,message:"请输入手机号码",trigger:"blur"}],graphImage:[{required:!0,message:"请输入图形验证码",trigger:"blur"}],code:[{required:!0,message:"请输入短信验证码",trigger:"blur"}]},departOptions:[]}},mounted:function(){this.getDepartTree(),this.identifyCode="",this.makeCode(this.identifyCodes,4),console.log(this.identifyCode),console.log(this.userForm)},components:{identify:function(e){return r.e("chunk-3c5f4188").then(function(){var t=[r("2a2d")];e.apply(null,t)}.bind(this)).catch(r.oe)}},methods:{validCode:function(){var e=this;if(0===this.userForm.graphImage.length)return this.$message.warning("请先输入图形验证码");if(this.identifyCode!==this.userForm.graphImage)return this.changeCode(),this.$message.warning("图形验证码错误");if(!this.userForm.mobilePhone)return this.$message.warning("请先输入手机号码");var t={};t.mobile=this.userForm.mobilePhone,this.canClick=!0,this.getTimeOut(),this.$api.post(this.$lesUiPath.code,t).then((function(t){return 0==t.code?e.$message.success("短信验证码发送成功"):e.$message.error(t.msg)}))},getTimeOut:function(){var e=this;this.cloak=setInterval((function(){e.time--,e.time>0?e.btnContent=e.time+"s后重新发送":e.time<=0&&(window.clearInterval(e.cloak),e.btnContent="重新发送",e.time=60,e.canClick=!1)}),1e3)},aaa:function(e){console.log(e)},changeCode:function(){this.identifyCode="",this.makeCode(this.identifyCodes,4)},randomNum:function(e,t){return t+=1,Math.floor(Math.random()*(t-e)+e)},makeCode:function(e,t){for(var r=0;r<t;r++)this.identifyCode+=e[this.randomNum(0,e.length-1)]},handleBack:function(){this.$emit("handleBack")},handleResetPsd:function(){this.userForm.password=""},handleSave:function(){var e=this;this.$refs["ruleForm"].validate((function(t){if(!t)return!1;e.$emit("handleSave")}))},getNode:function(e){var t=e[e.length-1];this.userForm.departId=t},handleCheckBox:function(e){this.userForm.isEnable=1==e},getDepartTree:function(){var e=this;this.$api.post(this.$lesUiPath.departFindDepartList,{}).then((function(t){0==t.code&&(e.departOptions=t.data,e.departOptions.map((function(e){e.departId=e.id,e.departName=e.name})))}))},getTreeData:function(e){for(var t=0;t<e.length;t++)e[t].children.length<1?e[t].children=void 0:this.getTreeData(e[t].children);return e}}}),o=i,n=(r("2f0d"),r("2877")),l=Object(n["a"])(o,a,s,!1,null,"76a8ca5e",null);t["default"]=l.exports},bbed:function(e,t,r){}}]);