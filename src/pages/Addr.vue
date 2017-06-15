<template>
	<div class="wrap">
		<div class="head">
			<div class="back" @click="util.comBack">
				<img  src="../assets/images/返回.png" alt="">
			</div>
			<div class="title">添加新地址</div>
			<div class="save" @click="save">保存</div>
		</div>
		<div class="addrbox">
			<div class="set">
				<label for="" class="label" >收货人</label>
				<input  type="text" v-model="name">
			</div>
			<div class="set">
				<label for="" class="label">联系电话</label>
				<input type="tel"  v-model="tel">
			</div>
			<div class="set setadd">
				<label for="" class="label">地址</label>
				<region-picker 
				  auto
				  :province.sync="region.province" 
				  :city.sync="region.city"
				  :district.sync="region.district"
				  @onchange="change">
				</region-picker>
			</div>
			<div class="set settext">
				<textarea v-model="detail" name="moreaddr" placeholder="详细地址"id="more" cols="30" rows="5"></textarea>
			</div>
		</div>
	</div>
</template>
<script>
import {mapActions} from 'vuex'
import {Toast} from 'mint-ui'
export default {
	data () {
		return {
			region: {},
			name: '',
			tel: '',
			detail: '',
			site: []
		}
	},
	methods: {
		save () {
			console.log(this.detail)
			if (this.name == '') {
				Toast('请填写收货人姓名')
				return
			}
			if (this.tel == '') {
				Toast('请填写电话号码')
				return
			}
			if (this.site.length == 0) {
				Toast('请选择城市')
				return
			}
			if (this.detail == '') {
				Toast('请填写详细地址，让宝贝早点找到你')
				return
			}
			var addr = {}
			addr.name = this.name
			addr.tel = this.tel
			addr.detail = this.detail
			addr.site = this.site
			console.log(addr.site[0])
			this.$store.dispatch('setAddr',addr)
			Toast('保存成功')
			this.$router.push({path:'/pay'})
			// console.log(this.$store.state.mu)
		},
		change (e) {
			this.site = [e.province,e.city,e.district]
			console.log(this.site)
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
	font-size: 1.6rem;
	font-weight: 700;
}
.save{
	font-size: 1.4rem;
	color: red;
	padding-right: 1.2rem;
	box-sizing: border-box;
}
.addrbox {
	background-color: #fff;
	
}
.set {
	display: -webkit-flex;
	display: flex;
	height: 5rem;
	align-items: center;
	padding: 0 1.2rem;
	box-sizing: border-box;
	border-bottom: 1px solid #f7f7f7
}
.setadd {
	height: 10rem;
}
.settext {
	height: 10rem;
}
.set .label {
	width: 8rem;
	font-size: 1.4rem;
	color: #333;
}
.set input {
	outline: none;
	border: none;
	font-size: 1.4rem;
}
#more {
	width: 100%;
	border: none;
	outline: none;
}
.region-picker {
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
	line-height: 2.5;
}
</style>