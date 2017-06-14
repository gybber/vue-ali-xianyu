<template>
	<div class="typewrap">
		<ul class="typelist">
			<li v-for="data in typelist" key="data.id">
	          <div class="item" @click="util.toast">
	          <div class="text">
	            <p class="typelist-title">{{data.title}}</p>
	            <p class="typelist-desc">{{data.desc}}</p>
	           </div>
	            <img :src="data.src" class="typelist-img">
	          </div>
	    	</li>    
		</ul>
	</div>
</template>
<script>
	export default {
		props: {
       	 typelist: {
       	 	type: Array
       	 }
       }	
	}
</script>
<style lang="css" scoped>
*{
	margin: 0;
	padding: 0;
}
ul,li{
	list-style: none;
}
.item{
	text-decoration: none;
	display: -webkit-flex;
	display: flex;
}
.text{
	text-align: left;
	flex:1;
}

.typelist{
    width: 100%;
    height: auto;
    margin: auto;
    overflow: hidden;
    text-align: left;
}
.typelist li{
    position: relative;
    float: left;
    height: auto;
    padding:  1rem 4% 0.8rem 4%;
    box-sizing: border-box;
}
.typelist li:nth-of-type(2n+1) {
	border-right: 1px solid #f3f3f3;
}
.typelist li{
    width: 50%;
    border-bottom: 1px solid #f3f3f3;
}
.typelist-img{
    width: 4rem;
    height: 4rem;
}
.typelist-title{
    font-size: 1.4rem;
    color: black;
    font-weight: 500;
}
.typelist-desc{
    color: #666;
    font-size: 1rem;
    margin-top: .3rem;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
}

</style>