<template>
	<div class="wrap">
		<div class="head">
			<div class="back" @click="util.comBack">
				<img  src="../assets/images/返回.png" alt="">
			</div>
			<div class="title">类目</div>
		</div>
		<div class="block"></div>
		<div class="container" >
			 <div class="item" v-for="item in items" :data-name="item.name" key="item.id" @click="selectItem">{{item.name}}</div>
		</div>
	</div>
</template>
<script>
export default {
	mounted () {
		this.axios.get('https://easy-mock.com/mock/593787f691470c0ac107cacf/category/kind')
      .then((response) => {
        this.items = response.data.data
        console.log(response.data.data)
      })
      .catch(function (error) {
        console.log(error) 
      })
	},
	data () {
		return {
			items: ''
		}
	},
	methods: {
		selectItem (e) {
			let name = e.currentTarget.dataset.name;
			window.localStorage.setItem('name', name)
			this.$router.push({path: '/addpic'})

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
.container{
	width: 100%;
}
.container .item{
	width: 100%;
	padding-left: 1rem;
	box-sizing: border-box;
	border-bottom: 1px solid #f1f1f1;
	height: 4.5rem;
	line-height: 4.5rem;
	font-size: 1.4rem;
	color: #333
}
</style>