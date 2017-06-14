<template lang="html">
	<div class="wrap">
		<div class="head">
			<div class="back" @click="util.comBack">
				<img  src="../assets/images/返回.png" alt="">
			</div>
			<div class="searchbox">
				<input type="search" @keypress.enter="search(keywords)" v-model="keywords" placeholder="连衣裙">
			</div>
			<div class="searchbtn">
				<button class="search" @click="search(keywords)">搜索</button>
			</div>
		</div>
		<div class="resultwrap" v-if="result">
			<div class="title"><span class="key">{{key}}</span></div>
			<div class="result"  v-for="(item,index) in items" key="item.id">
				<img :src="item.image" alt="">
				<p class="desc">{{item.desc}}</p>
				<p class="price">￥{{item.price}}</p>
				<div class="more">
					<span class="addr">{{item.addr}}</span>
					<span class="time">{{item.time}}</span>
				</div>
			</div>
		</div>
		<div class="noresultwrap" v-else>
				<p class="noresult">亲，你太潮了，闲鱼淘宝里暂时暂时还找到你要的东西呢，输入连衣裙试试~</p>
		</div>
	</div>
</template>
<script>
export default {
	data () {
		return {
			keywords: '',
			items: '',
			result: true,
			key: ''
		}
	},
	methods: {
		search (keywords) {
			this.items = ''
			this.key = keywords
			this.axios.get('https://easy-mock.com/mock/593f72288ac26d795ff1e570/search/results')
			.then((res) => {
				let result = res.data
				console.log(result)
				for( let i in result){
					let item = i
					console.log(item.indexOf(this.keywords))
					if(item.indexOf(this.keywords) !== -1){
						this.items = result[item]
					}
				}
				if(this.items.length){
					this.result = true
				}else{
					this.result = false
				}
			}).catch((error) => {
				console.log(error)
			})
			

	}	
}
}
</script>
<style lang="css" scoped>
/*@import '../assets/imags/css/search.css'*/
.wrap {
	width: 100%;
	height: 100vh;
	background-color: #f2f1ed;
}
.head {
	background-color: #f3f3f3;
	width: 100%;
	height: 5rem;
	display: -webkit-flex;
	display: flex;
	align-items: center;
}
.head .back {
	width: 3rem;
	height: 3rem;
}
.back img {
	width: 3rem;
	height: 3rem;
}
.searchbox {
	flex: 1;
	margin-right: 1rem;
}
.searchbox input {
	height: 3.5rem;
	width: 100%;
	border: none;
	font-size: 1.4rem;
	padding-left: 3.5rem;
	background-image: url('../assets/images/search.png');
	background-repeat: no-repeat;
	background-size: 3rem 3rem;
	box-sizing: border-box;
	background-position: 1rem 50%;
	outline: none;

}
.searchbtn {
	margin-right: 1.4rem;
}
.search {
	border: none;
	outline: none;
	background-color: #f3f3f3;
	font-size: 1.5rem;
}
.resultwrap,{
	width: 100%;
}
.noresultwrap {
	width: 100%;
	height: 80%;
	display: -webkit-flex;
	display: flex;
	align-items: center;
	justify-content: center;
}
.noresultwrap .noresult{
	width: 20rem;
	font-size: 1.6rem;
	background:url('../assets/images/noresult.png') no-repeat;
	box-sizing: 2rem 2rem;
	padding-left: 5rem;
	box-sizing: border-box;
}
.title {
	padding: 1rem 1rem;
	font-size: 1.5rem;
	color: #000;
	box-sizing: border-box;
}
.key {
	display: inline-block;
	padding: .4rem 1rem;
	box-sizing: border-box;
}
.result {
	display: inline-block;
	width: 48%;
	height: auto;
	background-color: #fff;
}
.result:nth-child(2n+1){
	margin-left: 4%;
}
.result img{
	width: 100%;
	height: 12rem;
}
.result .desc,
.result .price{
	width: 100%;
	padding: .4rem .4rem;
	box-sizing: border-box;
}
.result .desc {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color: #000;
	font-size: 1.4rem;
}
.result .price {
	color: red;
	font-size: 1.4rem;
}
.result .more {
	padding: 0 .4rem .4rem .4rem;
	box-sizing: border-box;
	font-size: 1.3rem;
	color: #888;
	display: -webkit-flex;
	display: flex;
}
.more .addr {
	flex: 1;
}
</style>