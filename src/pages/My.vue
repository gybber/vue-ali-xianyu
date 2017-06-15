<template>
	<div class="wrapper">
		<div class="top" v-if="login">
			<div class="loginhead">
				<div class="flex border">
					<div class="flexprimary">
						<div class="name">{{username}}</div>
						<div class="somedesc">虽然没挣到钱，但在闲鱼开心就好</div>
					</div>
					<div class="useravatar" >
						<img :src="url" alt="" class="avatar" @click="loadImg">
						<input hidden type="file" accept="image/jpeg,image/jpg,image/png" capture="camera" @change="fileInput" >
					</div>
				</div>
				<div class="flex">
					<div class="numbox">
						<span class="num">{{starnum}}</span>
						<span class="numname">被赞数</span>
					</div>
					<div class="numbox">
						<span class="num">{{focusnum}}</span>
						<span class="numname">关注数</span>
					</div>
					<div class="numbox">
						<span class="num">{{fannum}}</span>
						<span class="numname">粉丝数</span>
					</div>
				</div>
			</div>
			<div class="open flex">
					<div class="flexprimary">
						<p class="openvip">开通闲鱼号！</p>
						<p class="tipinfo">就可以看到sei关注你啦</p>
					</div>
					<button class="on">开通</button>
			</div>
		</div>
		<div v-else class="head">
			<div class="welcome">
				欢迎来到闲鱼
			</div>
			<button class="login" @click="tologin">马上登录</button>
			<div class="animate"></div>
		</div>
		<div class="list">
			<ul class="itemlist">
				<li class="item item1" @click="fabu">我发布的<span class="number" v-if="login">{{fabunum}}</span></li>
				<li class="item item2">我卖出的<span class="number" v-if="login">{{sellnum}}</span></li>
				<li class="item item3" @click="buy">我买到的<span class="number" v-if="login">{{buynum}}</span></li>
				<li class="item item4">我赞过的<span class="number" v-if="login">{{likenum}}</span></li>
				<li class="item item5">我的拍卖</li>
				<li class="item item6">我的鱼贝<span class="number" v-if="login">{{money}}</span></li>
			</ul>
		</div>
		<div class="list" v-if="login">
			<ul class="itemlist">
				<li class="item item8">我的公益</li>
				<li class="item item9">闲鱼Family</li>
				<li class="item item10">帮助与反馈</li>
			</ul>
		</div>
		<div class="list">
			<ul class="itemlist">
				<li class="item item7">设置</li>
			</ul>
		</div>
		<div class="buttonwrap">
			<button class="logout" v-if="login" @click="logout">退出登录</button>
		</div>
		<div class="block"></div>
		<NavBottom ></NavBottom>
	</div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
import {Toast} from 'mint-ui'
import NavBottom from '@/components/NavBottom'
export default {
	components: {
			NavBottom
	},
	data () {
		return {
			url: ''
		}
	},
	mounted () {
		this.$store.dispatch('setCurindex', 1)
			console.log(this.$store.state.mutation.curindex)
		let username = window.localStorage.getItem('username')
		this.$store.dispatch('setUsername', username)
		this.isLogin = this.$store.state.mutation.isLogin
		console.log(window.localStorage.getItem('useravatar'))
        this.url = window.localStorage.getItem('useravatar')
		console.log(this.isLogin)
		
	},
	computed: mapGetters(['login','starnum','focusnum','fannum','username','fabunum','sellnum','buynum','money','likenum']),
	methods: {
		tologin () {
			this.$router.push({path:'/login'})
		},
		logout () {
			window.localStorage.clear()
			this.$store.dispatch('noLogin')
            this.$router.push({path: '/my'});
		},
		fabu () {
			if(!this.isLogin){
				Toast('请先登录再查看')
			}else{
				this.$router.push({path: '/fabu'})
			}

		},
		buy () {
			if(!this.isLogin){
				Toast('请先登录再查看')
			}else{
				this.$router.push({path: '/order'})
			}
			
		},
		loadImg () {
		     let vm = this;
		     let add = document.querySelector('input[type=file]')
		     add.click()

		     return false;
		},
		fileInput (e) {
		     var files = e.target.files
		     console.log(files)
		     if(!files.length) return;
		     this.createImage(files, e);
		},
	   	createImage (files, e) {
		     let vm = this;
		     // lrz图片先压缩在加载、
		     this.lrz(files[0], { width: 480 }).then(function(rst) {
		      vm.url = rst.base64;
		      window.localStorage.setItem('useravatar',vm.url)
		      return rst;
		     }).always(function() {
		     // 清空文件上传控件的值
		     e.target.value = null;
		     });

		},
	}
}
</script>
<style lang="css" scoped>
* {
	margin: 0;
	padding: 0;
}
ul,li {
	list-style: none;
}
.wrapper {
	width: 100%;
	min-height: 48rem;
	background-color: #f3f3f3;
}
.buttonwrap {
	width: 100%;
}
.logout {
	display: block;
	width: 95%;
	font-size: 1.3rem;
	margin: 1rem auto;
	height: 4rem;
	outline: none;
	border: none;
	background-color: red;
	color: white;
}
.top{
	width: 100%;
}
.head {
	position: relative;
	width: 100%;
	height: 10rem;
	background-color: #fff;
}
.loginhead {
	width: 100%;
	height: 15rem;
	background-color: #fff;
	padding: 0 1.2rem;
	box-sizing: border-box;
}
.open {
	width: 100%;
	height: 6rem;
	margin-bottom: 1rem;
	margin-top: 1rem;
	padding: 0 1.2rem;
	box-sizing: border-box;
	background-color: #ffda44;
}
.openvip {
	font-size: 1.6rem;
	font-weight: 600;
	margin-bottom: .4rem;
}
.tipinfo {
	font-size: 1.2rem;
}
.on{
	border: none;
	width: 7rem;
	height: 2.8rem;
	box-sizing: border-box;
	border: 1px solid #333;
	outline: none;

	background-color: transparent;
}
.flex {
	display: -webkit-flex;
	display: flex;
	align-items: center;
	flex-direction: row;
}
.border {
	border-bottom: 1px solid #f8f8d8;
	height: 10rem;
}
.border:after {
	content: '';
	display: inline-block;
	height: .8rem;
	width: .8rem;
	border-width: 2px 2px 0 0;
	border-color:#999;
	border-style: solid;
	transform: rotate(45deg);
	position: absolute;
	right: 1rem;
}
.flexprimary {
	flex:1;
}
.flexprimary .name{
	font-size: 2rem;
	font-weight: 600;
	margin-bottom: .4rem;
} 
.flexprimary .somedesc{
	font-size: 1.2rem;
	color: #888;
}
.useravatar {
	width: 5rem;
	height: 5rem;
	background-color: #f9f9f9;
	border-radius: 50%;
	margin-right: 1.5rem;
	display: -webkit-flex;
	display: flex;
	align-items: center;
	justify-content: center;
}
.useravatar img{
	width: 100%;
	border-radius: 50%;
}
.numbox {
	flex: 1;
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 50px;
}
.num {
	color: #000;
	font-weight: 600;
	font-size: 1.3rem;
	margin-bottom: .2rem;
}
.numname {
	color: #888;
	font-size: 1.3rem;
}
.block {
	height: 55px;	
}
.head .animate {
	position: absolute;
	bottom: 0;
	right: 3rem;
	width: 15.6rem;
	height: 100%;
	background:#fff url('../assets/images/fish.png') no-repeat;
	background-position: 100% 100%;
}
.head .welcome {
	margin-left: 1.2rem;
	margin-top: 2rem;
	font-size: 2rem;
	font-weight: 600;
}
.head .login {
	margin-top: 1rem;
	margin-left: 1.2rem;
	width: 8rem;
	height: 3.6rem;
	background-color: #ffda44;
	outline: none;
	border: none;
}
.list {
	margin-top: 1rem;
	width: 100%;	
	height: auto;
	background-color: #fff;
	font-size: 1.4rem;	
}
.item {
	padding: 1.2rem 3.5rem;
	border: 1px solid #f8f8f8;
	box-sizing: border-box;
	position: relative;
	background-repeat: no-repeat;
	background-size: 2rem 2rem;
	background-position: 1rem 1rem;
}
.number {
	position: absolute;
	right: 3rem;
	color: #888;
}
.item:last-child {
	border-bottom: none;
}
.item:after {
	content: '';
	display: inline-block;
	height: .8rem;
	width: .8rem;
	border-width: 2px 2px 0 0;
	border-color:#999;
	border-style: solid;
	transform: rotate(45deg);
	position: absolute;
	right: 1rem;
	top: 1.5rem;
}
.item1 {
	background-image: url('../assets/images/book.png')
}
.item2 {
	background-image: url('../assets/images/发送.png')
}
.item3 {
	background-image: url('../assets/images/我收到的.png')
}
.item4 {
	background-image: url('../assets/images/收到评价.png')
}
.item5 {
	background-image: url('../assets/images/拍卖.png')
}
.item6 {
	background-image: url('../assets/images/撒鱼币.png')
}
.item7 {
	background-image: url('../assets/images/设置.png')
}
.item8 {
	background-image: url('../assets/images/爱心_.png')
}
.item9 {
	background-image: url('../assets/images/闲鱼.png')
}
.item10 {
	background-image: url('../assets/images/帮助.png')
}
</style>