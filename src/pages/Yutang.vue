<template>
<div class="wrap">
	<div class="inputwrap">
		<div class="goinput" @click="util.toast">
			<input type="text" placeholder="请输入鱼塘关键字">
		</div>
	</div>
	<div class="banner">
		<mt-swipe :auto="3000">
	      <mt-swipe-item
	       v-for="data in banner" key="data.id">
	        <img :src="data.src">
	      </mt-swipe-item>
	    </mt-swipe>
	</div>
	<div class="interest">
		<div class="titlebox">
			<p class="title">你可能感兴趣的鱼塘</p>
		</div>
		<div class="swiper-box">
		    <swiper :options="swiperOption">
		        <swiper-slide v-for="date in intersets" key="data.id">
		        	<div @click="util.toast" class="item">
		        		<img class="img" :src="date.img" alt="">
		        		<div class="name">{{date.title}}</div>
		        		<div class="info">
		        			<p class="desc">{{date.desc}}</p>
		        		</div>
		        		<button class="add">+ 加入</button>
		        	</div>
		        </swiper-slide>
      		</swiper>
      	</div>
	</div>
	<div class="questions">
		<div class="titlebox">
			<p class="title">鱼塘问答</p>
			<span class="ask">去提问</span>
		</div>
		<div class="questionsbox" v-for="question in questions" key="question.id">
			<div class="title">{{question.title}}</div>
			<div class="answer">
				<span class="da">答</span>
				<div class="text">{{question.answer}}</div>
				<div class="imgshow" v-if="question.img !== undefined ">
					<img :src="question.img" alt=""/>
				</div>
			</div>
			<div class="bottom">
				<div class="yutang">{{question.yutang}}</div>
				<div class="toanswer">去回答</div>
			</div>
		</div>
	</div>
	<div class="interest quanzi">
		<div class="titlebox">
			<p class="title">土豪圈儿都在玩</p>
		</div>
		<div class="swiper-box">
		    <swiper :options="swiperOption1">
		        <swiper-slide class="show" v-for="date in tuhao" key="data.id">
		        	<div @click="util.toast" class="item">
			        	<div class="imgdisplay" v-if="date.img !== undefined ">
							<img class="imgbig" :src="date.img" alt="">
						</div>
		        		<div class="name">{{date.title}}</div>
		        		<div class="info">
		        			<p class="desc">{{date.desc}}</p>
		        		</div>
		        	</div>
		        </swiper-slide>
      	</swiper>
    </div>
	</div>
	<div class="interest quanzi ">
		<div class="titlebox">
			<p class="title">厉害了我的中国风</p>
		</div>
		<div class="swiper-box">
		    <swiper :options="swiperOption1">
		        <swiper-slide class="show" v-for="date in chinas" key="data.id">
		        	<div @click="util.toast" class="item">
			        	<div class="imgdisplay" v-if="date.img !== undefined ">
							<img class="imgbig" :src="date.img" alt="">
						</div>
		        		<div class="name">{{date.title}}</div>
		        		<div class="info">
		        			<p class="desc">{{date.desc}}</p>
		        		</div>
		        	</div>
		        </swiper-slide>
      		</swiper>
    </div>
	</div>
	<div class="interest quanzi ">
		<div class="titlebox">
			<p class="title">不可错过的鱼塘</p>
		</div>
		<div class="list" v-for="date in lists">
			<img :src="date.img" alt="" class="image">
			<div class="info">
				<div class="head">
					<p class="title">{{date.title}}</p>
					<span class="level">{{date.level}}</span>
				</div>
				<div class="text">
					<p class="desc">{{date.desc}}</p>
				</div>
				<div class="hot">
					<span>人气{{date.renqi}}·发布{{date.fabu}}</span>
				</div>
			</div>
		</div>
	</div>
	<a v-on:click.stop="totop" id="btn"></a>
	<div class="block"></div>
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
    data () {
            return {
            scrollWatch:true,
            isTop: true,
            timer: null,
            swiperOption: {
  	          slidesPerView: 'auto',
  	          spaceBetween: 30,
	          },
  	        swiperOption1: {
  	          slidesPerView: 'auto',
  	          spaceBetween: 30,
  	        },
            banner: [],
            intersets: [],
            questions: [],
            tuhao: [],
            chinas: [],
            lists: []
        }
      },
    methods: {
        	top () {
        		var oTop = document.documentElement.scrollTop || document.body.scrollTop; 
        		var clientHeight = document.documentElement.clientHeight;
        		var obtn = document.getElementById('btn')
        		console.log(obtn)
        		console.log(oTop)
        		console.log(clientHeight)
		        if(oTop >= clientHeight){  //如果滚动高度大于可视区域高度，则显示回到顶部按钮
		            obtn.style.display = 'block';
		        }else{         //否则隐藏
		            obtn.style.display = 'none';
		        }
		        //主要用于判断当 点击回到顶部按钮后 滚动条在回滚过程中，若手动滚动滚动条，则清除定时器
		        if(!this.isTop){
		            clearInterval(this.timer);
		        }
		        this.isTop = false;
		  },
	    totop () {
	    	this.timer = setInterval(() => {
            //获取滚动条的滚动高度
            var oTop = document.documentElement.scrollTop || document.body.scrollTop;
            //用于设置速度差，产生缓动的效果
            var speed = Math.floor(-oTop / 8);
            document.documentElement.scrollTop = document.body.scrollTop = oTop + speed;
            this.isTop =true;  //用于阻止滚动事件清除定时器
            if(oTop == 0){
                clearInterval(this.timer);
          	}
      		},20);	
  	}
    },
    mounted() {
      // 是当前滚动条位置在最初始的位置
      document.documentElement.scrollTop = document.body.scrollTop = 0
			window.addEventListener('scroll', this.top,false)
			this.$store.dispatch('setCurindex', 1)
			console.log(this.$store.state.mutation.curindex)
      this.axios.get('https://easy-mock.com/mock/593ebbfe8ac26d795feb44f8/index/banner')
              .then((response) => {
                this.banner = response.data.banner
                console.log(this.banner)
            })
            .catch(function (error) {
              console.log(error) 
            })
      this.axios.get('https://easy-mock.com/mock/593ebbfe8ac26d795feb44f8/index/interesets')
              .then((response) => {
                this.intersets = response.data.intersets
                console.log(this.intersets)
            })
            .catch(function (error) {
              console.log(error) 
            })
      this.axios.get('https://easy-mock.com/mock/593ebbfe8ac26d795feb44f8/index/questions')
              .then((response) => {
                this.questions = response.data.questions
                console.log(this.questions)
            })
            .catch(function (error) {
              console.log(error) 
            })
      this.axios.get('https://easy-mock.com/mock/593ebbfe8ac26d795feb44f8/index/questions')
              .then((response) => {
                this.questions = response.data.questions
                console.log(this.questions)
            })
            .catch(function (error) {
              console.log(error) 
            })
      this.axios.get('https://easy-mock.com/mock/593ebbfe8ac26d795feb44f8/index/tuhao')
              .then((response) => {
                this.tuhao = response.data.tuhao
                console.log(this.tuhao)
            })
            .catch(function (error) {
              console.log(error) 
            })
      this.axios.get('https://easy-mock.com/mock/593ebbfe8ac26d795feb44f8/index/list')
              .then((response) => {
                this.lists = response.data.lists
                console.log(this.lists)
            })
            .catch(function (error) {
              console.log(error) 
            })
      this.axios.get('https://easy-mock.com/mock/593ebbfe8ac26d795feb44f8/index/chinas')
              .then((response) => {
                this.chinas = response.data.chinas
                console.log(this.chinas)
            })
            .catch(function (error) {
              console.log(error) 
            })
		},
		destroyed () {
	 		this.scrollWatch = false;
		}
    }
</script>
<style lang="css" scoped>
.wrap{
  width: 100%;
  min-height: 70rem;
  background-color: #f7f7f7;
}
.inputwrap{
  width: 100%;
  height: 4.5rem;
  line-height: 4.5rem;
}
.block {
  height: 4.5rem;
}
.goinput{
  width: 96%;
  display: block;
  margin: 0 auto;
  text-align: center;
}
.goinput input{
  width: 100%;
  height: 3rem;
  outline: none;
  background-color: #fff;
  border: none;
  border-radius: .4rem;
  padding-left: 40%;
  box-sizing:  border-box;
  background: #fff url('../assets/images/search.png') no-repeat;
  -webkit-background-size: 2rem 2rem;
  background-size: 2rem 2rem;
  background-position: 35% 50%;
}
.banner{
    width: 100%;
    height: 10rem;
}
.banner img{
    width: 100%;
    height: 100%;
    float: left;
}
.interest,.questions{
  width: 100%;
  background-color: #fff;
  padding: 1rem 1.6rem;
  box-sizing: border-box;
}
.questions {
  margin-top: 1rem;
}
.titlebox{
  width: 100%;
  margin-bottom: 1rem;
}
.questions .titlebox {
  display: -webkit-flex;
  display: flex;
}
.questions .titlebox .title{
  flex: 1;
}
.questions .titlebox .ask {
  font-size: 1.4rem;
  font-weight: 700;
  background: url('../assets/images/提问.png') no-repeat;
  background-size: 1.8rem 1.8rem;
  width: 6rem;
  padding-left: 1.8rem;
  background-position: 0 100%;
  box-sizing: border-box;
}
.titlebox .title:before{
  content: '';
  width: .3rem;
  height: 1.4rem;
  background-color: #ffda44;
  display: inline-block;
  vertical-align: middle;
  margin-right: .4rem;
}
.titlebox .title{
  font-size: 1.4rem;
  font-weight: 600;
}
.swiper-slide{
  width: 10rem;
  height: auto;
  padding: 1rem .6rem .6rem .6rem;
  box-sizing: border-box;
  margin-bottom: .4rem;
  text-align: center;
}
.swiper-slide .name{
  color: #000;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: .4rem;
}
.swiper-slide .desc{
  color: #888;
  font-size: 1.2rem;
  font-weight: 400;
  white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    margin-bottom: .6rem;
}
.swiper-slide .img{
  width: 3rem;
  height: 3rem;
  margin-bottom: .6rem;
}
.swiper-slide .item{
  text-decoration: none;
}
.swiper-slide .add{
  width: 100%;
  height: 2rem;
  background-color: #ffda44;
  outline: none;
  border: none;
}
.imgbig{
  width: 100%;
  height: 5rem;
  margin-bottom: .6rem;
}
.show:last-child{
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  align-items: center;
  justify-content: center;
}
.quanzi {
  margin-top: 1rem;
}
.questionsbox {
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #efefef;
}
.questionsbox:last-child {
  border-bottom: none;
}
.questionsbox .title {
  font-size: 1.4rem;
  font-weight: 600;
}
.text {
  flex:1;
  font-weight: 500;
}
.da {
  background-color: #ffda44;
  display: inline-block;
  width: 1.8rem;
  height: 1.6rem;
  text-align: center;
  margin-right: .6rem;
  color: #333;
}
.answer img{
  width: 4rem;
  height: 4rem;
  margin-left: 1rem;
}
.bottom {
  display: -webkit-flex;
  display: flex;
  margin-top: .6rem;
}
.yutang {
  flex: 1;
  color: #888;
}
.toanswer {
  color: #7dc5eb;
  font-weight: 700;
}
.questions .answer {
  display: -webkit-flex;
  display: flex;
  margin-top: .6rem;
  color: #666;
  font-size: 1.3rem;
}
#btn {
  width:3rem;
  height:3rem;
  position:fixed; 
  z-index: 10;
  background-color: #fff;
  right:2.5rem; 
  bottom:7rem; 
  display:none; 
  background:url('../assets/images/返回顶部.png') no-repeat;
  background-size: cover;
}
.list {
  padding-top: 1.2rem;
  box-sizing: border-box;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
  display: -webkit-flex;
  display: flex;
}
.list .image{
  width: 5rem;
  height: 5rem;
}
.list .info {
  flex: 1;
  margin-left: 1rem;
}
.info .head{
  display: -webkit-flex;
  display: flex;
  margin-bottom: .4rem;
}
.head .title {
  font-size: 1.4rem;
  font-weight: 600;
  flex: 1;
}
.head .level {
  width: 3.4rem;
  height: 2rem;
  line-height: 2rem;
  background: url('../assets/images/标签.png') no-repeat;
  background-size: cover;
  background-position: 110% 110%;
  padding-left: .8rem;
  box-sizing: border-box;
  color: #fff;
}
.info .text {
  font-size: 1.2rem;
  font-weight: 450;
  margin-bottom: .6rem;
}
.info .hot {
  font-style: 1.1rem;
  color: #666;
}</style>