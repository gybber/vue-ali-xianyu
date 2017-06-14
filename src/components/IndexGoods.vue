<template>
	<div class="goodsbox">
        <ul class="goodslist">
	        <li v-for="data in goodslist" @click="util.toast" key="data.id">
	          <div class="item">
	            <p class="typelist-title">{{data.title}}</p>
	            <p class="typelist-desc">{{data.desc}}</p>
	            <img :src="data.src" class="typelist-img">
	          </div>
	    	</li>    
        </ul>
	</div>
</template>
<script>
	export default {
		props: {
       	 goodslist: {
       	 	type: Array
       	 }
       }	
	}
</script>
<style style="css" scoped>
*{
	margin: 0;
	padding: 0;
}
ul,li{
	list-style: none;
}
.item{
	text-decoration: none;
}
.goodsbox{
	padding-top: .4rem;
    border-bottom: .8rem solid #f3f3f3;   
}
.goodslist{
    width: 98%;
    height: auto;
    margin: auto;
    overflow: hidden;
    display: -webkit-flex;
    display: flex;
    text-align: center;
}
.goodslist li{
    position: relative;
    float: left;
    height: auto;
    margin: 0.4rem 2% 0.4rem 2%;
}
.goodslist li{
    width: 29%;
}

.typelist-img{
    width: 3rem;
    height: 3rem;
}
.typelist-title{
    font-size: 1.4rem;
    padding: 0 0.4rem;
    color: black;
    font-weight: 400;
}
.typelist-desc{
    color: #666;
    font-size: 1rem;
    margin-bottom: .5rem;
}
</style>