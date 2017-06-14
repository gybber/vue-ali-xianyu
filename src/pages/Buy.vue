<template>
	<div class="wrap">
		<div class="head">
			<div class="back" @click="util.comBack">
				<img  src="../assets/images/返回.png" alt="">
			</div>
			<div class="title">宝贝详情</div>
		</div>
		<div class="block"></div>
		<div class="goods">
			<div class="good_top">
				<div class="good_top-avatar">
					<img :src="news.avatar" alt="" class="avatar">
				</div>
				<div class="good_top-info">
					<div class="username">{{news.name}}</div>
					<div class="ta">{{news.time}}{{news.add}}</div>
				</div>
				<div class="good_top-price">
					<div class="price">{{news.price}}</div>
				</div>
			</div>
			<div class="good_desc">
				<p class="desc">{{news.desc}}</p>
			</div>
			<div class="good_img">
				<img :src="news.img" alt="">
			</div>
		</div>
		<div class="messagebox">
			<p class="msg">留言</p>
			<div class="conment" v-if="message == ''">
				<img src="../assets/images/yu.png" alt="" class="bg">
				<p class="nomsg">还没有人留言，还不快来抢沙发</p>
			</div>
			<div class="conment" v-else>
				<p class="hasmsg">{{message}}</p>
			</div>
		</div>
		<div class="block"></div>
		<div class="fixedbottom">
			<div class="message" @click="msg">
				<img src="../assets/images/留言.png" alt="">
				<input type="text" hidden class="hidden">
			    <span class="leabmsg">留言</span>
			</div>
			<div class="givestar" @click="star">
				<img src="../assets/images/赞.png" alt="" v-if="show">
				<img src="../assets/images/赞1.png" alt="" v-else>
				<span class="star">点赞</span>
			</div>
			<div class="buy" @click="buy">我想要</div>
		</div>
	</div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default {
	data () {
		return {
			news: '',
			message: '',
			show: true,
			isLogin: ''
		}
	},
	mounted () {
		this.isLogin = this.$store.state.mutation.isLogin
		// console.log(this.isLogin)
		document.documentElement.scrollTop = document.body.scrollTop = 0
		this.news= this.$store.state.mutation.news
		this.show = this.$store.state.mutation.show
	},
	methods: {
		msg () {

		},
		star () {
			this.show = !this.show
			// console.log(this.show)
			// this.$store.dispatch('setShow', this.show)
			// if(this.show) {
			// 	this.$store.dispatch('cutLikenum')

			// }else {
			// 	this.$store.dispatch('setLikenum')
			// }
	
		},
		buy () {
			if(this.isLogin){
				this.$router.push({path:'/chat'})
			}else {
				this.$router.push({path: '/login'})
			}
			
		}
	}
}
</script>
<style lang="css" scoped>
.wrap {
	width: 100%;
	height: 100%;
	background-color: #f7f7f7;
}
.head {
	width: 100%;
	height: 4.4rem;
	display: -webkit-flex;
	display: flex;
	align-items: center;
	background-color: #f7f7f7;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
}
.back img{
	width: 3rem;
	height: 3rem;
}
.title {
	flex: 1;
	text-align: center;
	font-size: 1.6rem;
	font-weight: 700;
}
.block{
	height: 4.4rem;
}
.goods {
	width: 100%;
	min-height: 100%;
	padding: 1.5rem 1.2rem;
	box-sizing: border-box;
	background-color: #fff;
}
.good_top {
	width: 100%;
	height: 6rem;
	display: -webkit-flex;
	display: flex;
	align-items: center;
}
.good_top-avatar {
	width: 5rem;
	height: 5rem;
}
.good_top-avatar .avatar {
	width: 5rem;
	height: 5rem;
	border-radius: 50%;
}
.good_top-info {
	margin-left: 1rem;
	flex: 1;
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
}
.good_top-info .username {
	color: #000;
	font-size: 1.4rem;
	font-weight: 600;
	margin-bottom: .3rem;
}
.good_top-info .ta {
	color: #777;
	font-size: 1.3rem;
}
.good_top-price .price{
	color: red;
	font-size: 1.3rem;
}
.good_desc {
	width: 100%;
}
.desc {
	font-size: 1.4rem;
	color: #000;
	line-height: 1.6;
}
.good_img {
	width: 100%;
	margin-top: 1.2rem;
}
.good_img img {
	width: 100%;
}
.messagebox {
	margin-top: 1rem;
	background-color: #fff;
	padding: 1rem 1.2rem;
}
.messagebox .msg {
	font-size: 1.4rem;
	color: #000;
	font-weight: 600;
	height: 4rem;
	line-height: 4rem;
	border-bottom: 1px solid #f8f8f8;
	/*margin-left: .2rem;*/
}
.msg:before {
	content: "";
	display: inline-block;
	width: .4rem;
	height: 1.1rem;
	background-color: #ffda44;
	margin-right: .4rem;
	vertical-align: baseline;
}
.conment {
	width: 100%;
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1.5rem 0;
}
.conment .nomsg {
	margin-top: .6rem;
	font-size: 1.4rem;
	color: #888;
}
.fixedbottom {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 4.4rem;
	display: -webkit-flex;
	display: flex;
	align-items: center;
	background-color: #f8f8f8;
	z-index: 100;
	box-sizing: border-box;
}
.message,.givestar,.buy{
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
	
}
.message {
	flex: 1;
	align-items: center;
}
.message img, .givestar img{
	width: 2.4rem;
	height: 2.4rem;
}
.givestar {
	flex: 2;
}
.buy {
	flex: 1;
	background-color: #d81e06;
	height: 4.4rem;
	line-height: 4.4rem;
	text-align: center;
	color: #fff;
	font-size: 1.4rem;
}
</style>