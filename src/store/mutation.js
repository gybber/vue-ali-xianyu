import getters from './getter.js';
const state = {
	isShow: true,
	isNavShow: true,
	isLogin: false,
	username: '',
	starnum: 0,
	focusnum: 0,
	fannum: 0,
	fabunum: 0,
	sellnum: 0,
	buynum: 0,
	money: 0,
	likenum: 0,
	goodstitle: '',
	goodsinfo: '',
	imgUrl: '',
	price: '',
	kind: '',
	primecost: '',
	freight: '',
	news: '',
	addr: {},
	buyinfo: [],
	curindex: 0,
	fabuinfo: [],
	show: true,
	userinfo: {}
}
const mutations = {
	setShow: (state, bool) =>{
		state.show = bool
	},
	setCurindex: (state, index) => {
		state.curindex = index
	},
	showNav: (state) => {
		state.isNavShow = true
	},
	hideNav: (state) => {
		state.isNavShow = false
	},
	hasLogin: (state) => {
		state.isLogin = true
	},
	noLogin: (state) => {
		state.isLogin = false
	},
	setUsername: (state, username) => {
		state.username = username
	},
	setStarnum: (state) => {
		console.log('加')
		state.starnum = state.starnum +1
	},
	cutStarnum: (state) => {
		console.log('减')
		state.starnum --
	},
	setFocusnum: (state) => {
		state.focusnum ++
	},
	cutFocusnum: (state) => {
		state.focusnum --
	},
	setFannum: (state) => {
		state.fannum ++
	},
	cutFannum: (state) => {
		state.fannum --
	},
	setFabunum: (state) => {
		state.fabunum ++
	},
	cutFabunum: (state) => {
		state.fabunum --
	},
	setSellnum: (state) => {
		state.sellnum ++
	},
	cutSellnum: (state) => {
		state.sellnum --
	},
	setBuynum: (state) => {
		state.buynum ++
	},
	cutBuynum: (state) => {
		state.buynum --
	},
	setLikenum: (state) => {
		state.likenum ++
	},
	cutLikenum: (state) => {
		state.likenum --
	},
	setGoodstilte: (state, goodstitle) => {
		state.goodstitle = goodstitle
	},
	setGoodsinfo: (state, goodsinfo) => {
		state.goodsinfo = goodsinfo
	},
	setImgurl: (state, imgurl) => {
		state.imgurl = imgurl
	},
	setPrice: (state, price) => {
		state.price = price
	},
	setKind: (state, showkind) => {
		state.showkind == showkind
	},
	setPrimecost: (state, primecost) => {
		state.primecost = primecost
	},
	setFreight: (state, freight) => {
		state.freight = freight
	},
	setNews: (state, news) => {
		state.news = news
	},
	setAddr: (state, addr) => {
		state.addr = addr
	},
	setBuyinfo: (state, info) => {
		state.buyinfo.push(info)
		console.log(state.buyinfo)
	},
	cutBuyinfo: (state, index) => {
		state.buyinfo.splice(index,1)
		state.buynum--
		console.log(state.buyinfo)
	},
	setFabuinfo: (state, info) => {
		state.fabuinfo.push(info)
		console.log(state.fabuinfo)
	},
	cutFabuinfo: (state, index) => {
		state.fabuinfo.splice(index,1)
		state.fabunum--
		console.log(state.fabuinfo)
	},
	setReceive: (state, obj) => {
		console.log(obj.receive,obj.index)
		console.log(state.buyinfo[obj.index].receive)
		state.buyinfo[obj.index].receive = obj.receive
		console.log(state.buyinfo[obj.index].receive)
	},
	setDel: (state, obj) => {
		console.log(state.buyinfo[obj.index])
		state.buyinfo[obj.index].del = obj.del
		console.log(state.buyinfo[obj.index].del)
	},
	setUserinfo: (state, userinfo) =>{
		window.localStorage.setItem('useravatar',userinfo.avatar)
		state.userinfo = userinfo
		console.log(state.userinfo)
	}

}
export default {
	getters,
	state,
	mutations
}