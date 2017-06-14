<template>
<div class="news">
<mt-navbar :class="totop?'fixed':'mint-navbar'" v-model="selected">
  <mt-tab-item id="1"><p class="f14">新鲜的</p></mt-tab-item>
  <mt-tab-item id="2"><p class="f14">附近的</p></mt-tab-item>
</mt-navbar>
<!-- tab-container -->
<mt-tab-container class="container" v-model="selected">
  <mt-tab-container-item class="container-item" id="1">
    <div class="mt-cell" v-for="data in news" key="data.id" :data-id="data.id" @click="buygood">
    	<div class="head">
    		<img :src="data.avatar" class="avatar" alt="">
    		<div class="info">
    			<p class="title">{{data.name}}</p>
    			<p class="time">{{data.time}}</p>
    		</div>
    		<span class="price">{{data.price}}</span>
    	</div>
    	<div class="imgbox">
    		<img :src="data.img" class="show" alt="">
    	</div>
    	<div class="detail">
    		<p class="desc">{{data.desc}}</p>
    	</div>
    	<div class="bottom">
    		<div class="addr">{{data.add}}</div>
    		<div class="kind">{{data.kind}}</div>
    		<div class="star" v-if="data.star !== '' ">{{data.star}}</div>
    		<div class="star" v-if="data.num !== '' ">{{data.num}}</div>
    	</div>
    </div>
    <div class="swiper-box">
    <swiper :options="swiperOption">
        <swiper-slide v-for="date in recoms">
        	<router-link to="/" class="item">
        		<div class="title">{{date.title}}</div>
        		<div class="info">
        			<span class="fabu">发布数 {{date.members}}</span>
        			<span class="hot">昨日人气 +{{date.num}}</span>
        		</div>
        		<div class="desc">
        			<span class="gonggao">公告</span>
        			<span class="produ">{{date.produ}}</span>
        		</div>
        		<div class="imgbox" >
        			<img class="display"v-for="image in date.images" :src="image.img" alt="">
        		</div>
        		<div class="addr">
        			<p class="destance">距离你{{date.destance}}米</p>
        		</div>
        	</router-link>
        </swiper-slide>
      </swiper>
      </div>
  </mt-tab-container-item>
  <mt-tab-container-item class="container-item" id="2">
    <div class="mt-cell" v-for="data in nears">
    	<div class="head">
    		<img :src="data.avatar" class="avatar" alt="">
    		<div class="info">
    			<p class="title">{{data.name}}</p>
    			<p class="time">{{data.time}}</p>
    		</div>
    		<span class="price">{{data.price}}</span>
    	</div>
    	<div class="imgbox">
    		<img :src="data.img" class="show" alt="">
    	</div>
    	<div class="detail">
    		<p class="desc">{{data.desc}}</p>
    	</div>
    	<div class="bottom">
    		<div class="addr">{{data.add}}</div>
    		<div class="kind">{{data.kind}}</div>
    		<div class="star" v-if="data.star !== '' ">{{data.star}}</div>
    		<div class="star" v-if="data.num !== '' ">{{data.num}}</div>
    	</div>
    </div>
  </mt-tab-container-item>
</mt-tab-container>
</div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
	data () {
		return {
			scrollWatch: true,
			swiperOption: {
	          slidesPerView: 'auto',
	          centeredSlides: true,
	          spaceBetween: 30,
	          loop: true
	        },
			selected: '1',
			scroll: 0,
			totop: false,
			news: [
				{
					'id': '1',
					'avatar': './static/1.png',
					'name': 'jxh_0709',
					'time': '12分钟前来过',
					'price': '￥125.10',
					'img': './static/01.png',
					'desc': '小番茄定制2017新款显瘦竖条纹半生裙高腰纽扣开叉雪纺中长款半裙',
					'add': '来自郑州',
					'kind': '鱼塘|网红衣服鱼塘',
					'star': '点赞',
					'num': '15',
					'freight': '0'
				},
				{
					'id': '2',
					'avatar': './static/2.png',
					'name': '糖果xt90',
					'time': '1小时前来过',
					'price': '￥80',
					'img': './static/02.png',
					'desc': '买一送一：欧洲力淑女包，感兴趣的给我留言哟',
					'add': '来自北京',
					'kind': '鱼塘|给闲置的衣服寻找有缘',
					'freight': '10'
				}
			],
			nears: [
				{
					'avatar': './static/3.png',
					'name': '流浪在天际',
					'time': '7小时前来过',
					'price': '￥100',
					'img': './static/03.png',
					'desc': '席梦思床垫1.8米x2米 95新，换了乳胶，上门自提',
					'add': '来自南昌',
					'kind': '鱼塘|塘山镇',
					'star': '点赞',
					'num': '2'
				},
				{
					'avatar': './static/4.png',
					'name': '万莉佳',
					'time': '8小时前来过',
					'price': '￥80',
					'img': './static/04.png',
					'desc': '绑带细跟真皮凉鞋，清鞋柜，300多买来的，穿过两次，9.5新，34码，鞋跟10厘米左右，鞋子多，便宜处理',
					'add': '来自南昌',
					'kind': '鱼塘|众鑫城上城'
				}
			],
			recoms: [
				{
					'title': '长江学院鱼塘',
					'members': 393,
					'num': 16,
					'produ': '想要宝贝置顶的可以私聊我',
					'destance': 291,
					'images':
						[
							{'img': './static/img1.png'},
							{'img': './static/img2.png'},
							{'img': './static/img3.png'}
						]
				},
				{
					'title': '华瑞锦城鱼塘',
					'members': 60,
					'num': 3,
					'produ': '[专治各种疑问]鱼塘是什么？',
					'destance': 319,
					'images': 
						[
							{'img': './static/img4.png'},
							{'img': './static/img5.png'},
							{'img': './static/img6.png'}
						]
					
				},
				{
					'title': '范家新村鱼塘',
					'members': 91,
					'num': 6,
					'produ': '想要宝贝置顶的可以私聊我',
					'destance': 418,
					'images':  
						[
							{'img': './static/img7.png'},
							{'img': './static/img8.png'},
							{'img': './static/img9.png'}
						]

				}
			]

		}
	},
	watch: {
		selected: function(val) {
			this.selected = val;
			console.log(this.selected);
		}
	},
	methods: {
		menu() {
			var Height= document.querySelector('.news').offsetTop;
			console.log(Height)
			console.log(this.scroll)
			this.scroll = document.body.scrollTop;
			console.log(this.scroll)
			if (this.scroll >= Height-65) {
				this.totop = true
			}else{
				this.totop = false
			}
		},
		buygood (event) {
			// let Hub = new Vue()
			let id = event.currentTarget.dataset.id
			console.log(this.news[id-1])
			this.$store.dispatch('setNews', this.news[id-1])
			this.$router.push({path: '/buy'})
		}
	},
	mounted() {
		document.documentElement.scrollTop = document.body.scrollTop = 0
		window.addEventListener('scroll', this.menu, false)
	},
	destroyed () {
	 	this.scrollWatch = false;
	}
}
</script>
<style lang="css" scoped>
.swiper-slide{
	width: 20rem;
	height: auto;
	background-color: #f7f7f7;
	padding: 1rem .6rem .6rem .6rem;
	box-sizing: border-box;
	margin-bottom: 1rem;
}
.swiper-slide .title{
	color: #000;
	font-size: 1.4rem;
	font-weight: 600;
	margin-bottom: .8rem;
}
.swiper-slide .info{
	color: #000;
	font-size: 1.4rem;
	font-weight: 400;
	margin-bottom: .8rem;
}
.swiper-slide .gonggao {
	border: 1px solid #7dc5eb;
	font-size: 1.2rem;
	padding: 0 .4rem;
	box-sizing: border-box;
	color: #7dc5eb;
}
.swiper-slide .desc{
	color: #000;
	font-size: 1.2rem;
	font-weight: 400;
}
.swiper-slide .imgbox{
	margin-top: 1rem;
	display: -webkit-flex;
	display: flex;
	width: 100%;
	height: auto;
	overflow: hidden;
	margin-bottom: .8rem;
}
.imgbox .display{
	width: 30%;
	height: 4.5rem;
	margin-left: .4rem;
}
.swiper-slide .addr{
	border-top: 1px solid #ddd;
	padding-top: .6rem;
	text-align: center;
	color: #000;
	background: url('../assets/images/add.png') no-repeat;
	background-position: 30% 100%;
	-webkit-background-size: 14px 14px;
	background-size: 14px 14px;
}
.swiper-slice .item{
	
	text-decoration: none;
}
.mint-swipe{
	height: 200px;
}
.mint-navbar .mint-tab-item.is-selected {
    border-bottom: .3rem solid #ffda44;
    color: #ffda44;
    margin-bottom: -.3rem;
}
.f14 {
	font-size: 1.4rem;
}
.fixed{
	position: fixed;
	top: 45px;
	left: 0;
	right: 0;
	width: 100%;
	z-index: 100;
}
.mt-cell{
	width: 100%;
	margin-bottom: .8rem;
}
.container {
	margin-top: 1.2rem;
}
.container-item {
	width: 100%;
	padding-left: 1rem;
	padding-right: 1rem;
	box-sizing:border-box;
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
}
.container-item .head{
	display: -webkit-flex;
	display: flex;
	align-items: center;
}
.head .avatar{
	width: 3rem;
	height: 3rem;
	border-radius: 50%;
}
.head .info{
	flex:1;
	margin-left: .8rem;
}
.head .title {
	font-size: 1.4rem;
	color: #000;
	margin-bottom: .2rem;
}
.head .time{
	font-size: 1.2rem;
	color: #999;
	padding-left: 1.4rem;
	background: url('../assets/images/arrow.png') no-repeat;
	background-size: 14px 14px;
	background-position: 0 87%;
}
.head .price{
	margin-right: .4rem;
	color: red;
	font-size: 1.4rem;
	font-weight: 700;
}
.imgbox {
	margin-top: .4rem;
	width: 22rem;
	height: 20rem;
}
.imgbox .show{
	width: 100%;
	height: 100%;
}
.detail{
	margin-top: .6rem;
	width: 100%;
	color: #000;
	font-weight: 500;
	font-size: 1.4rem;
	padding-bottom: .6rem;
	border-bottom: 1px solid #f3f3f3;
}
.bottom {
	margin-top: .8rem;
	color: #7dc5eb;
	display: -webkit-flex;
	display: flex;
	font-weight: 500;
	font-size: 1.2rem;
	margin-bottom: .8rem;

}
.bottom .kind{
	margin-left: 1rem;
	flex: 1;
}
.bottom .star{
	color: #888;
}
</style>