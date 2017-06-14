<template lang="html">
	<div class="wrap">
		<div class="head">
			<div class="back" @click="back">
				<img  src="../assets/images/返回.png" alt="">
			</div>
			<div class="title">我买到的</div>
		</div>
		<div class="block"></div>
		<div v-if="show" class="thingbox" v-for="item in orders" key="item.id">
			<div class="infobox">
				<img :src="item.img" alt="">
				<div class="info">
					<p class="desc">{{item.desc}}</p>
					<p class="price">￥{{item.price}}</p>
				</div>
			</div>
			<div class="operate">
				<div class="connect" @click="connect">联系卖家</div>
				<div class="assure" v-if=" item.receive"@click="receive(item)" >确认收货</div>
				<div class="del" v-if="item.del" @click="delorder(item)">删除订单</div>
			</div>
		</div>
		<div v-if="hide" class="nothingbox">
			<div class="nothing">
				<img src="../assets/images/钓鱼.png" alt="">
				<p class="warn">亲，这里是空的哟~</p>
			</div>
		</div>
	</div>
</template>
<script>
import {mapActions} from 'vuex'
import { Toast,MessageBox } from 'mint-ui'
export default {
	data () {
		return {
			orders: {},
			show: true,
			hide: false

		}
	},
	mounted () {
		this.orders = this.$store.state.mutation.buyinfo
		console.log(Array.from(this.orders).length)
		this.noOrder()
	},
	methods: {
		connect () {
			console.log('sfjsd')
			this.$router.push({path: '/chat'})
		},
		receive (e) {
			let i = this.orders.indexOf(e)
			this.ID = i
			console.log(i)
			let obj = {}
			obj.receive = false
			obj.index = i
			let obj1 = {}
			obj1.index = i
			obj1.del = true
			this.$store.dispatch('setReceive', obj)
			this.$store.dispatch('setDel', obj1)
			Toast('收货成功');
		},
		delorder (e) {
			MessageBox.confirm('确定删除订单吗').then(
				(action) => {
					let i = this.orders.indexOf(e)
					this.$store.dispatch('cutBuyinfo', i)
					this.noOrder()
				}
			)
		},
		back () {
			this.$router.push({path: '/my'})
			this.$store.dispatch('setCurindex',4)
		},
		noOrder () {
			console.log(Array.from(this.orders).length)
			if(Array.from(this.orders).length===0){
				this.show = false
				this.hide = true
				console.log(this.show)
			}else{
				this.show = true
				this.hide = false
			}
		}
	 }
}
</script>
<style lang="css" scoped>

.wrap {
	width: 100%;
	height: 100vh;
	background-color: #f7f7f7;
}
.head {
	width: 100%;
	height: 4.4rem;
	display: -webkit-flex;
	display: flex;
	align-items: center;
	background-color: #fff;
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
.thingbox {
	width: 95%;
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
	/*align-items: center;*/
	background-color: #fff;
	margin: 0 auto;
	margin-top: 1rem;
}
.infobox {
	display: -webkit-flex;
	display: flex;
	align-items: center;
	padding: 0 1rem;
	box-sizing: border-box;
}
.infobox img {
	width: 6rem;
	height: 6rem;
}
.info {
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
	margin-left: 1rem;
	width: 20rem;
	line-height: 3;
}
.info .desc{
	font-size: 1.3rem;
	color: #000;
	width: 18rem;
	white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
}
.info .price{
	color: red;
	font-size: 1.4rem;
}
.operate {
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex;
	height: 4rem;
	align-items: center;
	padding-left:  1rem;
	padding-right: 1rem;
	box-sizing: border-box;
}
.connect {
	font-size: 1.3rem;
	font-weight: 400;
	height: 2.4rem;
	background: url('../assets/images/留言.png') no-repeat;
	background-size: 2rem 2rem;
	padding-left: 2rem;
	box-sizing: border-box;
	flex: 1;
}
.assure, .del {
	font-size: 1.3rem;
	width: 7rem;
	height: 3rem;
	text-align: center;
	line-height: 3rem;
}
.assure {
	border: 1px solid #ffda44;
	border-radius: 2rem;
	color: #ffda44;
}
.del {
	border: 1px solid #666;
	color: #666;
	/*display: none;*/
}
.nothingbox{
	width: 100%;
	height: 100%;
	display: -webkit-flex;
	display: flex;
	align-items: center;
	justify-content: center;
}
.nothing {
	width: 20rem;
	height: 20rem;
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.nothing img {
	width: 5rem;
	height: 5rem;
}
.nothing .warn {
	margin: .6rem 0;
	font-size: 1.4rem;
	color: #888;
}
</style>