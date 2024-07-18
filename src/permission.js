/*
    路由守卫
*/

//配置路由全局前置守卫导航------
import router from '@/router'
import store from '@/store'
router.beforeEach((to, from, next) => {
    //首先  判断进入的路由界面是否需要登录  不需要登录直接进入
    if (to.matched.some(ele => ele.meta.isLogin)) {//需要登录
        //然后 判断是否已经登录了  token值是否存在
        if (store.state.login.userinfo.token) {//登录过了   可以查看页面了
            //继续  判断当前存储的vuex里面是否已经有动态导航了 如果没有菜单导航 需要获取菜单导航
            if(store.state.menu.dyMenuList.length){//没有导航
                //获取导航
                store.dispatch('menu/getMenuList')
            }
            next()
        } else {//没有登录---去登录
            next('/login')
        }
    } else {//不需要登录
        next()
    }
})