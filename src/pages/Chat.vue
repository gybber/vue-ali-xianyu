<template>
	<div class="wrap">
		<div class="head">
			<div class="back" @click="util.comBack">
				<img  src="../assets/images/返回.png" alt="">
			</div>
			<div class="title">{{news.name}}</div>
		</div>
		<div class="block"></div>
		<div class="container">
			<div class="goodinfo">
				<div class="useravatar">
					<img :src="news.img" alt="">
				</div>
				<div class="gooddesc">
					<p class="price">{{news.price}}</p>
					<p class="yunfei">含运费{{news.freight}}元</p>
					<p class="chat">交易前聊一聊</p>
				</div>
				<div class="buy" @click="buy">立即购买</div>
			</div>
		</div>
		<Chatlist :news="news"></Chatlist>
	</div>
</template>
<script>
import Chatlist from '../components/Chatlist.vue'
export default {
	components: {
		Chatlist,
	},
	data () {
		return {
			news: {},
			username: ''
		}
	},
	mounted () {
		document.documentElement.scrollTop = document.body.scrollTop = 0
		this.username = this.$store.state.mutation.username
		this.news= this.$store.state.mutation.news
	},
	methods: {
		buy () {
			this.$router.push('/pay')
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
	height: 5rem;
	display: -webkit-flex;
	display: flex;
	align-items: center;
	background-color: #f8f8f8;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 999;
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

.container {
	position: absolute;
	top: 5rem;
	left: 0;
	right: 0;
}
.goodinfo {
	background-color: #fff;
	display: -webkit-flex;
	display: flex;
	width: 100%;
	height: 7rem;
	align-items: center;
	padding: 0 1rem;
	box-sizing: border-box;
	border-bottom: .1rem solid #f7f7f7;
}
.goodinfo .useravatar {
	width: 5rem;
	height: 5rem;
}
.useravatar img {
	width: 5rem;
	height: 5rem;
}

.gooddesc {
	flex: 1;
	display: -webkit-flex;
	display: flex;
	margin-left: 1rem;
	flex-direction: column;
}
.gooddesc .price {
	font-size: 1.4rem;
	color: #000;
}
.gooddesc .chat, .gooddesc .yunfei{
	font-size: 1.2rem;
	color: #888;
}
.gooddesc .yunfei {
	margin-bottom: .3rem;
}
.buy {
	height: 4.5rem;
	width: 8rem;
	text-align: center;
	line-height: 5rem;
	background-color: red;
	color: #fff;
	font-size: 1.3rem;
}

</style>