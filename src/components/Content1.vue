<template>
	<div class="cotainer">
  	<div class="content1" >
          <div class="inputprice" @click="input">
            <input type="text" placeholder="0.00" class="price" disabled >
            <span class="primarymoney" v-if="show">原价￥{{primecost}} | 运费￥{{freight}}</span>
          </div>
          <div class="category" @click="tokind">
            <span class="kind">分类</span>
            <span class="chose">{{kind}}</span>
          </div>
          <div class="bottom">
            <p class="info">把该宝贝同步到</p>
            <div class="yutang">
              <span class="big">鱼塘</span>
              <span class="little">:加入鱼塘，更多曝光</span>
            </div>
          </div>
    </div>
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  props: {
         show: {
          type: Boolean
         },
         kind: {
          type: String
         }
       },  
	data () {
		return {
			price: '',
		}
	},
  computed: mapGetters(['primecost','freight']),
	methods: {
    tokind () {
      let mask1 = document.querySelector('.maskbox1')
      mask1.style.display = 'block'
    },
		input () {
      let mask = document.querySelector('.maskbox');
      mask.style.display = 'block'
		}
	}
}
</script>
<style lang="css" scoped>
.inputprice {
  width: 100%;
  height: 10rem;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.inputprice input[disabled]{
  text-align: center;
  font-size: 1.8rem;
  color: #000;
  border: none;
  outline: none;
  background-color: #fff;
  border-bottom: 1px solid #f3f3f3;
  background: url('../assets/images/人民币.png') no-repeat;
  background-size: 2rem 2rem;
  background-position: 37% 0px;
}
.inputprice input[disabled]::-webkit-input-placeholder{
  color: #000;
  font-weight: 700;
  font-size: 1.4rem;
  text-align: center;
}
.inputprice .primarymoney {
  margin-top: .4rem;
  font-size: 1.3rem;
  color: #999;
}
.category {
  width: 100%;
  padding: 1rem 1rem;
  border-top: 1px solid #f3f3f3;
  position: relative;
  box-sizing: border-box;
}
.category:after{
  content: '';
  display: inline-block;
  height: .8rem;
  width: .8rem;
  border-width: 2px 2px 0 0;
  border-color:#999;
  border-style: solid;
  transform: rotate(45deg);
  position: absolute;
  right: 2rem;
  top: 1.3rem;
}
.kind{
  color: #000;
  font-size: 1.3rem;  
}
.chose{
  position: absolute;
  right: 6rem;
  color: #888;
}
.bottom{
  width: 100%;
  height: 10rem;
  background-color: #f3f3f3;
  padding: 1rem 1rem;
  box-sizing: border-box;
}
.info{
  font-size: 1.2rem;
  color: #888;
  margin-bottom: 1rem;
}
.yutang {
  width: 20rem;
  height: 3rem;
  background-color: #fff;
  line-height: 3rem;
  text-align: center;
}
.yutang .big{
  color: #000;
}
.yutang .little {
  color: #888;
}
</style>