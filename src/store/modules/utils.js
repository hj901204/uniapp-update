const state = {
  judgePath: ""
}
const getters = {
  handleJudgePath: state => () => {
    let paths = [
      "/login",
      "/register",
      "/register/firstStep",
      "/register/secondStep",
      "/register/thirdStep",
      "/register/fourthStep"
    ]
    let routePath = this.$route.path
    if (paths.indexOf(routePath) != -1) {
      return false
    }
    return true
  }
}
export default {
  namespaced: true,
  state,
  getters
}
