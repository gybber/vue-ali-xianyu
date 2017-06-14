<template>
	<div class="adbox">
		<mt-swipe :auto="3000">
			<mt-swipe-item v-for="data in ad" key="data.id">
				<img :src="data.src" alt="">
			</mt-swipe-item>
		</mt-swipe>
	</div>
</template>
<script>	
export default {
	props: {
       	 ad: {
       	 	type: Array
       	 }
       }	
}
</script>
<style lang="css" scoped>
.adbox{
	width: 100%;
	height: 9rem;
}
.adbox img{
	width: 100%;
	height: 100%;
	float: left;
}
</style>