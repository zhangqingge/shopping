/* 
    存储当前登录信息

*/
export default {
    namespaced: true,
    state: {
        userinfo: {//用户信息
            username: '',
            token: '',
        },
    },
    mutations: {
        //登录设置信息

        //退出清空数据
        setUser(state, payload) {
            state.userinfo = payload;
        },
        removeUser(state, payload) {
            state.userinfo = {
                username: '',
                token: '',
            }
        }
    }
}