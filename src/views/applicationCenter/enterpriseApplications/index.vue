<template>
	<div class="my-application margin-lr-xs">
		<!-- 我的企业应用 -->
		<div v-if="$route.path == '/application/enterpriseApplications'">
			<ul>
				<li v-for="item in myApplyList" :key="item.id" v-if="item.applied">
					<div class="apply-title-box">
						<div class="apply-title">
							<img src="@/assets/img/application/biaoqian.png" alt="">
							<span class="apply-info">
								<div>{{ item.appName }}</div>
								<div :class="item.isEnable?'green':'red'">状态：<i v-if="item.isEnable==1">正常</i><i v-if="item.isEnable==0">停用</i></div>
							</span>
						</div>
						<div class="start-use-btn">
							<el-button size="small" type="primary" @click="handleStartUse(item.appId)">
								开始使用
								<!-- {{ item.useFlag == '0' ? '尚未获得权限' : '' }}  -->
							</el-button>
						</div>
					</div>
					<div class="start-date">
						开始日期:<span>{{ item.initiateTimeEpp }}</span>
					</div>
					<div class="expiration-date" >过期时间:<span :class="item.classA ? 'red' : '' ">{{ item.expireTimeEpp }}</span><span :class="item.classA ? 'red' : '' ">{{item.showState}}</span></div>
					<div class="my-apply-btns">
						<el-button size="small" type="text" @click="handleApplyStatus(item)">点击查看应用状态
						</el-button>
						<!-- <el-button v-if="authType/1===1&&item.appName!=='SupplyX·TS 工单系统'" size="small" type="text" @click="handleUserSetting(item)">用户设定</el-button> -->
						<!-- <el-button @click="handleJumpUserList(item)"
						               size="small"
						               v-if="item.userListBtn"
						               type="text">用户列表
						    </el-button> -->
						<!-- <el-button v-if="item.purBtn" size="small" type="text" @click="handleSupplier(item)">邀请供应商</el-button> -->
						<el-button v-if="item.supBtn" size="small" type="text" @click="handleEnter(item)">关联采购商
						</el-button>
					</div>
				</li>
			</ul>
		</div>
		<router-view />
	</div>
</template>

<script>
	import {
		getAuthType
	} from '@/utils/auth'

	export default {
		name: '',
		data() {
			return {
				myApplyList: [],
				type: this.$store.getters.type,
				code: '',
				authType: 0
			}
		},
		mounted() {
			this.getMyAppData()
			this.authType = getAuthType()
			// console.log(typeof this.authType)
		},
		methods: {
			// 应用状态
			handleApplyStatus(item) {
				this.$router.push({
					path: '/application/enterpriseApplications/applicationStatus',
					query: {
						params: JSON.stringify(item)
					}
				})
			},
			// 开始使用
			handleStartUse(appId) {
				const token = this.$store.getters.token
				// location.href = this.$lesUiPath.enterAppRun + "?appId=" + appId + '&token=' + token
				window.open(this.$lesUiPath.enterAppRun + '?appId=' + appId + '&token=' + token)
			},
			// 用户设定
			handleUserSetting(item) {
				this.$router.push({
					path: '/application/enterpriseApplications/applicationSetting',
					query: {
						params: JSON.stringify(item)
					}
				})
			},
			// 用户列表
			handleJumpUserList(item) {
				this.$router.push({
					path: '/application/rightsManagement',
					query: {
						params: item.appId
					}
				})
			},
			// 角色列表
			handleJumpRoleList(item) {

			},
			// 邀请供应商
			handleSupplier() {
				this.$router.push({
					path: '/application/enterpriseApplications/enterpriseCode',
					query: {
						params: this.code
					}
				})
			},
			// 关联采购商
			handleEnter() {
				this.$router.push({
					path: '/application/enterpriseApplications/linkSupplier'
				})
			},
			getMyAppData() {
				this.$api.post(this.$lesUiPath.enterAppFindList, {
					page: 1,
					length: 1000
				}).then(result => {
					if (result.code == 0) {
						let currentTime = new Date();
						result.data.enterApps.map(el=> {
							el.classA = false
							if(el.expireTimeEpp){
								let gettime = el.expireTimeEpp.replace(/\-/g, "\/");
								gettime = new Date(Date.parse(gettime))
								if(gettime > currentTime){
									el.showState = ""
								}else if(gettime < currentTime){
									el.showState = "过期"
									el.classA = true
								}
							}
						})
						this.myApplyList = result.data.enterApps
						this.code = result.data.enterprise.invCode
					}
				})
			}

		}
	}
</script>

<style lang="scss" scoped>
	.red {
		color: #d0021b;
	}
	.my-application {
		overflow: hidden;
		text-align: left;

		ul {
			overflow: hidden;

			&>li {
				border: 1px solid rgba(0, 0, 0, 0.1);
				border-radius: 8px;
				background-color: #fff;
				padding: 10px 20px;
				box-sizing: border-box;
				width: 49.5%;
				height: 192px;
				float: left;
				margin-bottom: 10px;

				.apply-title-box {
					border-bottom: 2px solid rgba(0, 0, 0, 0.1);
					overflow: hidden;

					.apply-title {
						// float: left;
						display: inline-block;
						vertical-align: middle;
						overflow: hidden;
						padding: 10px 0;
						width: 74%;

						&>img {
							width: 32px;
							margin-right: 8px;
							vertical-align: middle;
						}

						&>span,
						i {
							font-weight: bold;
							font-size: 18px;
							font-style: normal;

							i {
								margin-right: 5px;
								line-height: 22px;
							}
						}

						.apply-info {
							text-align: left;
							display: inline-block;
							vertical-align: middle;

							&>div:last-child {
								font-size: 12px;
								font-weight: normal;

								&>i {
									font-weight: normal;
									font-size: 12px;
								}
							}

							.green {
								color: rgb(121, 149, 79);
							}

							.red {
								color: #d0021b;
							}
						}
					}

					.start-use-btn {
						text-align: right;
						display: inline-block;
					}
				}

				.start-date {
					margin-top: 16px;
				}

				.start-date,
				.expiration-date {
					line-height: 30px;
					font-size: 14px;

					&>span {
						margin-left: 10px;
					}
				}

				.my-apply-btns {
					&>button:first-child {
						//margin-right: 24px;
					}

					.el-button+.el-button {
						width: 20%;
					}

					// margin-top: 20px;
				}
			}

			&>li:nth-child(2n) {
				margin-left: 1%;
			}
		}
	}
</style>
