<template>
	<div class="base-info">
		<div class="base-form">
			<div class="Business-img">
				<img v-image-preview :src="baseInfo.picUrl" />
			</div>
			<ul>
				<li>
					<div class="form-field">企业名称:</div>
					<div class="form-val">{{baseInfo.enterName?baseInfo.enterName:"--"}}</div>
				</li>
				<li v-show="showed">
					<div class="form-field">联系人:</div>
					<div class="form-val">{{baseInfo.liaisonMan?baseInfo.liaisonMan:"--"}}</div>
				</li>
				<li v-show="showed">
					<div class="form-field">联系电话:</div>
					<div class="form-val">{{baseInfo.telNum?baseInfo.telNum:"--"}}</div>
				</li>
				<li v-show="showed">
					<div class="form-field">地址:</div>
					<div class="form-val">{{baseInfo.enterAddress?baseInfo.enterAddress:"--"}}</div>
				</li>
				<li v-show="showed">
					<div class="form-field">联系邮件:</div>
					<div class="form-val">{{baseInfo.enterMail?baseInfo.enterMail:"--"}}</div>
				</li>
				<li v-show="!showed">
					<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
						<el-form-item label="联系人:" prop="liaisonMan">
							<el-input size="mini" v-model="ruleForm.liaisonMan"></el-input>
						</el-form-item>
						<el-form-item label="联系电话:" prop="telNum">
							<el-input size="mini" v-model="ruleForm.telNum"></el-input>
						</el-form-item>
						<el-form-item label="地址:" prop="enterAddress">
							<el-input size="mini" v-model="ruleForm.enterAddress"></el-input>
						</el-form-item>
						<el-form-item label="联系邮件:" prop="enterMail">
							<el-input size="mini" v-model="ruleForm.enterMail"></el-input>
						</el-form-item>
					</el-form>
				</li>
				<li>
					<div class="form-field">企业类型:</div>
					<div class="form-val">{{baseInfo.enterMold?baseInfo.enterMold:"--"}}</div>
				</li>
				<li>
					<div class="form-field">统一信用代码:</div>
					<div class="form-val">{{baseInfo.enterTax?baseInfo.enterTax:"--"}}</div>
				</li>
				<li>
					<div class="form-field">法人代表:</div>
					<div class="form-val">{{baseInfo.enterLegalRepresent?baseInfo.enterLegalRepresent:"--"}}</div>
				</li>
				<li>
					<div class="form-field">注册资本:</div>
					<div class="form-val">{{baseInfo.enterCapital?baseInfo.enterCapital:"--"}}</div>
				</li>
				<li>
					<div class="form-field">注册时间:</div>
					<div class="form-val">{{baseInfo.enterDate?baseInfo.enterDate:"--"}}</div>
				</li>
				<li>
					<div class="form-field">经营许可范围:</div>
					<div class="form-val">{{baseInfo.businessLicense?baseInfo.businessLicense:"--"}}</div>
				</li>
			</ul>
			<div class="btns" v-if="isAdmin == '1'">
				<el-button v-show="showed" type="primary" size="small" @click="editEnterpriseInfor">编辑企业信息</el-button>
				<el-button v-show="!showed" type="primary" size="small" @click="saveEnterpriseInfor">确认提交</el-button>
				<el-button v-show="!showed" size="small" @click="goback">返回</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	import { validateEmail } from '@/utils/validate'
	import { getAuthType } from '@/utils/auth.js'
	export default {
		name: "base-info",
		data() {
			return {
				isAdmin:getAuthType(),
				message: "",
				baseInfo: {},
				dialogVisibleEv: false,
				showed: true,
				ruleForm: {
					liaisonMan: '',
					telNum: '',
					enterAddress: '',
					enterMail: '',
				},
				rules: {
					telNum: [{
							required: false,
							min: 11,
							max: 11,
							message: '请输入正确的联系电话',
							trigger: 'blur'
						}
						// 	{
						// 	required: false,
						// 	// pattern: /(^1[3|4|5|6|7|8|9]\d{9}$)|(^09\d{8}$)/,

						// 	message: '请输入正确的联系电话',
						// 	trigger: 'blur'
						// }, 
					],
					enterMail: [{
						required: false,
						pattern: /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/,
						message: '请输入正确的邮件地址',
						trigger: 'blur'
					}],
				}
			}
		},
		created() {
			this.getEnterData()
		},
		methods: {
			// 查询数据
			getEnterData() {
				this.$api.post(this.$lesUiPath.queryEnterprise).then(result => {
					if (result.code == 0) {
						this.baseInfo = result.data
						this.ruleForm.liaisonMan = this.baseInfo.liaisonMan
						this.ruleForm.telNum = this.baseInfo.telNum
						this.ruleForm.enterAddress = this.baseInfo.enterAddress
						this.ruleForm.enterMail = this.baseInfo.enterMail
						this.showed = true
					}
				})
			},

			// 编辑企业信息
			editEnterpriseInfor() {
				this.showed = false;
				// this.ruleForm = {};
				
			},

			// 保存编辑企业信息
			saveEnterpriseInfor() {
				let params = {
					id: this.baseInfo.id,
					liaisonMan: this.ruleForm.liaisonMan,
					telNum: this.ruleForm.telNum,
					enterAddress: this.ruleForm.enterAddress,
					enterMail: this.ruleForm.enterMail
				}
				this.$api.post(this.$lesUiPath.updateEnterprise, params).then(result => {
					if (result.code == 0) {
						this.getEnterData();
					}
				})
			},

			// 返回
			goback() {
				this.getEnterData();
			},
		}
	}
</script>

<style lang="scss" scoped>
	.base-info {
		text-align: left;

		.base-form {
			background-color: #fff;
			padding: 20px;
			border: 1px solid rgba(0, 0, 0, 0.1);
			position: relative;

			.Business-img {
				position: absolute;
				top: 20px;
				right: 20px;
				width: 154px;
				height: 112px;
				overflow: hidden;
				text-align: center;
				img {
					height: 100%;
				}
			}

			.Business-img:hover {
				cursor: pointer;
			}

			&>ul {
				&>li {
					line-height: 40px;
					font-size: 14px;

					.form-field {
						display: inline-block;
						font-weight: bold;
						// margin-right: 10px;
						width: 110px;
						text-align: right;
						vertical-align: top;
					}

					.form-val {
						display: inline-block;
						width: 80%;
					}

					.copyBtn {
						margin-left: 20px;
					}
				}

				.invitation-code {
					border-bottom: 1px solid rgba(0, 0, 0, 0.1);
					margin-bottom: 20px;
					padding-bottom: 10px;

					.form-field {
						font-size: 16px;
					}
				}
			}
		}


	}

	.inblock {
		display: inline-block;
	}

	.form-val {
		margin-left: 8px;
	}

	/deep/.el-input {
		width: 200px;
	}

	/deep/.el-form-item {
		margin-bottom: 8px;
	}

	/deep/.el-form-item__label {
		font-weight: 600;
		color: #2c3e50;
		width: 120px !important;
	}

	/deep/.el-form-item__error {
		top: 90%;
		left: 20px;
	}
</style>
