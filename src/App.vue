<template>
    <div id="app" :class="$route.path != '/login' ? 'app' : ''">
        <HeaderNav/>
        <div :class="$route.path == '/login' || $route.path == '/findPassword' ? 'views views-height' : 'views'">
            <LeftNav v-if="$route.path !== '/login'
                     && $route.path !== '/findPassword'
                     && $route.path !== '/error'
                     && $route.path !== '/forbidden'
                     && $route.path !== '/register'
                     && $route.path !== '/register/firstStep'
                     && $route.path !== '/register/lastStep'"/>
            <div style="width:100%">
                <Layout v-if="$route.path !== '/login'
                     && $route.path !== '/findPassword'
                     && $route.path !== '/error'
                     && $route.path !== '/forbidden'
                     && $route.path !== '/register'
                     && $route.path !== '/register/firstStep'
                     && $route.path !== '/register/lastStep'"
                />
                <router-view/>
            </div>
            <!-- 页脚 -->
        </div>
        <PageFooter v-if="$route.path !== '/login'"/>
    </div>
</template>
<script>
  export default {
    components: {
      LeftNav: reslove => require(['@/components/LeftNav/index.vue'], reslove),
      Layout: reslove => require(['./views/layout/index.vue'], reslove),
      HeaderNav: reslove => require(['@/components/Header'], reslove),
      PageFooter: reslove => require(['@/components/PageFooter'], reslove)
    },
    data() {
      return {}
    },
    methods: {},
    computed: {}
  }
</script>

<style lang="scss">
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100%;
        overflow: auto;
    }

    .app {
        background-color: rgb(241, 242, 245);
        position: relative;
        min-height: 100%;
        height: auto !important; /* 页脚向下推送，浏览器自动计算高度 */
    }

    html,
    body {
        width: 100%;
        height: 100%;
    }

    .views {
        width: 100%;
        margin: 0 auto;
        margin-bottom: 120px;
        display: flex;
    }

    .views-height {
        width: 100%;
        height: 100%;
        margin-bottom: 0;
        position: relative;
    }
</style>
