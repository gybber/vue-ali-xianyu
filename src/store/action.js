export default {
	setShow: ({commit}, bool) => {
		commit('setShow', bool)
	},
	setCurindex: ({ commit }, index) => {
		commit('setCurindex', index)
	},
	showNav: ({ commit }) => {
		commit('showNav')
	},
	hideNav: ({ commit }) => {
		commit('hideNav')
	},
	hasLogin: ({ commit }) => {
		if(window.localStorage.getItem('username') != null && window.localStorage.getItem('password') != null) {
			commit('hasLogin')
		}else {
			console.log('没有登录')
		}	
	},
	noLogin: ({ commit }) => {
		if(window.localStorage.getItem('username') == null && window.localStorage.getItem('password') == null){
			commit('noLogin')
		}
	},
	setUsername: ({ commit }, username) => {
		commit('setUsername', username)
	},
	setStarnum: ({ commit }) => {
		commit('setStarnum')
	},
	setFocusnum: ({ commit }) => {
		commit('setFocusnum')
	},
	setFannum: ({ commit }) => {
		commit('setFannum')
	},
	setFabunum: ({ commit }) => {
		commit('setFabunum')
	},
	setSellnum: ({ commit }) => {
		commit('setSellnum')
	},
	setBuynum: ({ commit }) => {
		commit('setBuynum')
	},
	setLikenum: ({ commit }) => {
		commit('setLikenum')
	},
	cutLikenum: ({ commit }) => {
		commit('cutLikenum')
	},
	cutStarnum: ({ commit }) => {
		commit('cutStarnum')
	},
	cutFocusnum: ({ commit }) => {
		commit('cutFocusnum')
	},
	cutFannum: ({ commit }) => {
		commit('cutFannum')
	},
	cutFabunum: ({ commit }) => {
		commit('cutFabunum')
	},
	cutSellnum: ({ commit }) => {
		commit('cutSellnum')
	},
	cutBuynum: ({ commit }) => {
		commit('cutBuynum')
	},
	setPrice: ({ commit}, price) => {
		commit('setImgurl', price)
	},
	setImgurl: ({commit}, imgurl) => {
		commit('setImgurl', imgurl)
	},
	setGoodstitle: ({ commit }, goodstitle) => {
		commit('setGoodstitle', goodstitle)
	},
	setGoodsinfo: ({ commit }, goodsinfo) => {
		commit('setGoodsinfo', goodsinfo)
	},
	setKind: ({ commit }, kind) => {
		commit('setKind', kind)
	},
	setPrimecost: ({ commit }, primecost) => {
		commit('setPrimecost', primecost)
	},
	setFreight: ({ commit}, freight) => {
		commit('setFreight', freight)
	},
	setNews: ({ commit }, news) => {
		commit('setNews', news)
	},
	setAddr: ( { commit }, addr) => {
		commit('setAddr', addr)
	},
	setBuyinfo: ({commit}, info) => {
		commit('setBuyinfo', info)
	},
	cutBuyinfo: ({commit}, index) => {
		commit('cutBuyinfo', index)
	},
	setFabuinfo: ({commit}, info) => {
		commit('setFabuinfo', info)
	},
	cutFabuinfo: ({commit}, index) => {
		commit('cutFabuinfo', index)
	},
	setReceive: ({commit}, obj ) => {
		commit('setReceive', obj)
	},
	setDel: ({commit}, obj) => {
		commit('setDel', obj)
	},
	setUserinfo: ({commit}, userinfo) =>{
		commit('setUserinfo', userinfo)
	}

}