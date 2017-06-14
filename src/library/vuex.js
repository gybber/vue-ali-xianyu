import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 返回唯一的一个Store实例 状态仓库
const store = new Vuex.Store({
	// 状态
	state: {
		isLogin: false,
		userinfo: {}
	}
})
export default store