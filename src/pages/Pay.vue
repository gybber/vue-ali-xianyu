<template lang="html">
<div class="wrap">
	<div class="head">
		<div class="back" @click="util.comBack">
			<img  src="../assets/images/返回.png" alt="">
		</div>
		<div class="title">购买宝贝</div>
	</div>
	<div class="goodswrap">
		<img :src="news.img" alt="" class="goodimg">
		<div class="goodinfo">
			<p class="detail">[转卖]{{news.desc}}</p>
			<p class="price">{{news.price}}</p>
		</div>
	</div>
	<div class="addrbox">
		<div class="addr" @click="setaddr">
			<label for="" class="label">收获地址</label>
			<div class="address" v-if="addr.site !== undefined">
				<p class="user">{{addr.name}}{{addr.tel}}</p>
				<p class="addrdetail">{{addr.site[0]}}{{addr.site[1]}}{{addr.site[2]}}{{addr.detail}}</p>
			</div>
		</div>
		<div class="addr">
			<label for="" class="label">运费</label>
			<p class="freight">￥{{news.freight}}</p>
		</div>
	</div>
	<div class="fixedbottom">
		<div class="payment">
			<span class="all">实付款：</span>
			<span class="price">{{all}}</span>
		</div>
		<div class="buy" @click="pay">确定</div>
	</div>
</div>
</template>
<script>

import   { MessageBox }  from 'mint-ui'
import {mapActions} from 'vuex'
export default {
	data () {
		return {
			news: '',
			addr: {},
			all: 0
		}
	},
	mounted () {
		let str = this.$store.state.mutation.news.price
		console.log(str)
		let price = str.replace('￥','')
		console.log(price)
		this.news = this.$store.state.mutation.news
		this.addr =this.$store.state.mutation.addr
		this.all = parseFloat(price)+
					parseFloat(this.$store.state.mutation.news.freight)
	},
	methods: {
		setaddr () {
			this.$router.push({path:'/addr'})
		},
		pay () {
			console.log(this.news.id)
			let length = this.$store.state.mutation.buyinfo.length
			if( length ===0 ){
				this.setbuyinfo(length)
			}else {
				for( let i=0;i<length;i++){
					let buyinfo = this.$store.state.mutation.buyinfo
					let ID = buyinfo[i].id
					if(this.news.id !== ID){
						this.setbuyinfo(i+1)
					}else{
						MessageBox.alert('你已经买了这个宝贝哟').then(action => {
							this.$router.push('/my')
						})
					}
				}
			}
		},
		setbuyinfo (i) {
			
			MessageBox.alert('购买成功，查看订单').then(action => {

					let Obj ={}
					Obj.count = i
					Obj.img = this.news.img
					Obj.desc = this.news.desc
					Obj.price = this.all
					Obj.id = this.news.id
					Obj.name = this.news.name
					Obj.avatar = this.news.avatar
					Obj.receive = true
					Obj.del = false
					console.log(Obj)
					this.$store.dispatch('setBuynum')
					this.$store.dispatch('setBuyinfo',Obj)
				  	this.$router.push('/my')
				  	this.$store.dispatch('setCurindex',4)
					});
		}
	}
}
</script>
<style lang="css" scoped>
.wrap {
	width: 100%;
	min-height: 73.6rem;
	background-color: #f7f7f7;
}
.head {
	width: 100%;
	height: 5rem;
	display: -webkit-flex;
	display: flex;
	align-items: center;
	background-color: #f7f7f7;
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
.goodswrap {
	width: 100%;
	height: 10rem;
	display: -webkit-flex;
	display: flex;
	background-color: #fff;
}
.goodswrap .goodimg {
	width: 10rem;
	height: 10rem;
}
.goodswrap .goodinfo {
	padding: 1.2rem 1.2rem;
	box-sizing: border-box;
}
.detail {
	font-size: 1.4rem;
	color: #000;
	margin-bottom: 1rem;
	line-height: 1.6;
}
.price {
	font-size: 1.4rem;
	font-weight: 600;
	color: red;
}
.addrbox {
	width: 100%;
	margin-top: 1rem;
	background-color: #fff;
}
.addr {
	width: 100%;
	height: 6rem;
	display: -webkit-flex;
	display: flex;
	align-items: center;
	padding:0 1.2rem;
	box-sizing: border-box;
	border-bottom: 1px solid #f7f7f7;
}
.addr .label {
	flex: 1;
	font-size: 1.5rem;
	color: #888;
}
.addr .address {
	width: 20rem;
	display: -webkit-flex;
	display: flex;
	align-items: center;
	flex-direction: column; 
	font-size: 1.3rem;
	color: #888;
	line-height: 1.2;

}

.addr .freight {
	width: 80px;
	color: red;
	font-size: 1.5rem;
	position: relative;
	text-align: right;
} 
.addr .addrdetail:after {
	content: '';
	display: inline-block;
	height: 8px;
	width: 8px;
	border-width: 2px 2px 0 0;
	border-color:#999;
	border-style: solid;
	transform: rotate(45deg);
	position: absolute;
	right: 1rem;
}
.fixedbottom {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 50px;
	display: -webkit-flex;
	display: flex;
	align-items: center;
	background-color: #fff;
	padding-left: 1.2rem;
	box-sizing: border-box;
}
.fixedbottom .payment {
	flex: 1;

}
.all, .price{
	font-size: 1.4rem;
	color: #000;
}
.price {
	color: red;
}
.buy {
	width: 80px;
	height: 50px;
	background-color: red;
	line-height: 50px;
	color: #fff;
	text-align: center;
	font-size: 1.4rem;
}
</style>
