<template>
	<div class="wrapper">
			<router-link to="/info" class="link">
				<div class="img">
					<img src="../assets/images/通知.png" alt="" class="avatar">
				</div>
				<div class="text">
					<p class="name">通知</p>
					<div class="desc">
						<p class="detail">闲鱼奇葩说，U CAN U BIBI</p>
						<span class="time">| 18小时前</span>
					</div>
				</div>
			</router-link>
		<NavBottom ></NavBottom>
	</div>
</template>
<script>
import NavBottom from '@/components/NavBottom'
import {mapActions} from 'vuex'
	export default {
		components: {
			NavBottom
		},
		mounted() {
			this.$store.dispatch('setCurindex', 3)
			console.log(this.$store.state.mutation.curindex)
		},
	}
</script>
<style lang="css" scoped>
.wrapper{
	width: 100%;
	background-color: #fff;
}
.link {
	width: 100%;
	height: 8rem;
	display: -webkit-flex;
	display: flex;
	flex-direction: row;
	align-items: center;
	text-decoration: none;
	color: #000;
	padding: 0 1.2rem;
	border-bottom: 1px solid #f7f7f7;
}
.link .img {
	width: 6rem;
	height: 6rem;
	background-color: pink;
	border-radius: 50%;
	display: -webkit-flex;
	display: flex;
	align-items: center;
	justify-content: center;
}
.img img {
	width: 4rem;

}
p{
	margin: 0;
	padding: 0;
}
.text {
	margin-left: 1rem;
}
.text .name {
	font-size: 1.6rem;
	font-weight: 600;
	margin-bottom: 1rem;
}
.desc {
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex;
	font-size: 1.3rem;
	color: #888;
}
.time {
	margin-left: 1rem;
}
</style>