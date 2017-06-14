<template>
	<div class="footer">
		  <div  class="item item2" :class="{icon11: footerIndex === 0, icon1: footerIndex !== 0}" @click="tohome">闲鱼
      </div>
	    <div  class="item item2" :class="{icon22: footerIndex === 1, icon2: footerIndex !== 1}" @click="yutang">鱼塘
      </div>
	    <div class="item item1" >
        <div class="outbox" >
          <span class="open" @click="change1">
          </span>
        </div>
        <p class="commit">发布</p>
      </div>
      <div class="login" :class="{'active':active}" v-show="login">
        <div class="head">
          <h2 class="h2">闲鱼赚钱指南</h2>
          <div class="navbar">
            <router-link to="/" class="li">
              <p class="titlename">卖什么更赚</p>
              <p class="tip">教你卖什更赚钱</p>
            </router-link>
            <router-link to="/" class="li">
              <p class="titlename">拍照相机</p>
              <p class="tip">看看家里的东西值多少钱</p>
            </router-link>
            <router-link to="/" class="li">
              <p class="titlename">淘宝一键转卖</p>
              <p class="tip">剁手多了回回血</p>
            </router-link>
          </div>
        </div>
        <div class="recomlist" >
            <div  class="type " @click="toaddpic">
              <div class="image">
                <img src="../assets/images/收纳盒.png" alt="">
              </div>
              <p class="explain">卖闲置</p>
            </div>
            <div @click="util.toast" class="type">
              <div class="image">
                <img src="../assets/images/房子.png" alt="">
              </div>
              <p class="explain">出租房屋</p>
            </div>
            <div @click="toast" class="type ">
              <div class="image">
                <img src="../assets/images/头像.png" alt="">
              </div>
              <p class="explain">发布服务</p>
            </div>
        </div>
        
        <div class="footer">
          <div class="itemblock"></div>
          <div class="itemblock"></div>
          <div class="itemblock innerbox">
            <span class="open"  @click="change3"></span>
          </div>
          <div class="itemblock"></div>
          <div class="itemblock"></div>
        </div>
      </div>
	    <div  class="item item2" :class="{icon44: footerIndex === 3, icon4: footerIndex !== 3}" @click="change2">
        消息
      </div>
	    <div class="item item2" :class="{icon55: footerIndex === 4, icon5: footerIndex !== 4}" @click="tomy">我的
      </div>    
	</div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex' 
  export default {
    data () {
      return {
        footerIndex: '',
        active: false
        }
    },
    computed: mapGetters(['login']),
    mounted () {
      this.active = false
      console.log(window.localStorage.getItem('username'))
      this.$store.dispatch('hasLogin')
      this.footerIndex = this.$store.state.mutation.curindex
      console.log(this.footerIndex)
    },

    methods: {
      toaddpic () {
        const login = document.querySelector('.login');
            login.style.display = 'none';
        this.$router.push({path:'/addpic'})
      },
      change1 () {
        console.log(this.$store.state.mutation.isLogin)
          if (this.$store.state.mutation.isLogin) {
            const login = document.querySelector('.login');
            login.style.display = 'block';
            this.active = false
          }else {
            const router = this.$router;
            router.push({path:'/login'});
          }
      },
      change2 () {
        if (this.$store.state.mutation.isLogin){
          this.$store.dispatch('setCurindex',3)
          this.$router.push({
            path: '/message'
          })
        }else {
          this.$router.push({path:'/login'})
        }
      },
      change3 () {
        const login = document.querySelector('.login');
        this.active = true
        setTimeout(()=>{
          login.style.display = 'none';
        },500)
      },
      tohome () {
        this.$store.dispatch('setCurindex',0)
        this.$router.push({path: '/'})
      },
      yutang () {
        this.$store.dispatch('setCurindex',1)
        console.log(this.footerIndex)
        this.$router.push({path: '/yutang'})
      },
      tomy () {
        this.$store.dispatch('setCurindex',4)
        this.$router.push({path: '/my'})
      }
    }
}
</script>
<style lang="css" scoped>
* {
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
}
.footer{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 5rem;
  z-index: 999;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #f8f8f8;
  background: #fff;
}
.footer .recomlist {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 15rem;
  transition: all 0.7s ease-in;
}

.footer .recomlist .type{
  display: block;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.footer .recomlist .type .image{
  width: 6rem;
  height: 6rem;
  background-color: #ffda44;
  border-radius: 50%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.footer .recomlist .type .image img {
  width: 3.5rem;
  height: 3.5rem;
  vertical-align: middle;
}
.footer .recomlist .type .explain {
  margin-top: 1rem;
  color: #333;
  font-size: 1.2rem;
}
.footer .login {
  display: none;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  animation: enter .5s;
}
.login.active{
  animation: out 1s;
}
@keyframes  enter {
  0% {
      transform: scale(2);
      opactity:0;
    }
    50% {
      transform: scale(1.5);
      opactity:0.5;
    }
    100% {
      transform: scale(1);
      opactity:1;
    }
}
@keyframes  out {
  0%{
    transform: scale(1);
  }
  100% {
    transform: scale(0);
    opactity:0;
  }
}
.login .footer{
  border-top: none;
}
 .innerbox {
  background-color: #fff;
  margin:  auto;
  position: relative;
}
 .innerbox .open {
  width: 5rem;
  height: 5rem;
  display: block;
  margin: .4rem auto;
  background: url('../assets/images/X.png') no-repeat;
  -webkit-background-size: 4rem 4rem;
  background-size: 4rem 4rem;
  position: absolute;
  top: -4rem;
  left: -1.5rem;
}
.footer .login .head {
  width: 100%;
}
.footer .login .head .h2 {
  margin-top: 4.5rem;
  font-size: 1.6rem;
  width: 100%;
  color: #000;
  padding-left: 1.2rem;
  box-sizing: border-box;
}
.footer .login .head .navbar {
  margin-top: 2rem;
  width: 100%;
  padding-left: 1.2rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.footer .login .head .navbar .li {
  margin-right: 1.2rem;
}
.footer .login .head .navbar .li .titlename {
  font-size: 1.4rem;
  color: #000;
}
.footer .login .head .navbar .li .titlename:after {
  content: '';
  display: inline-block;
  height: 6px;
  width: 6px;
  border-width: 2px 2px 0 0;
  border-color: #ffda44;
  border-style: solid;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  position: relative;
  margin-left: .2rem;
}
.footer .login .head .navbar .li .tip {
  font-size: 1.2rem;
  color: #888;
}
.footer .item {
  width: 100%;
  height: 100%;
  color: #888;
  font-size: 1rem;
  text-align: center;
  text-decoration: none;
}
.footer .item2 {
    line-height: 7.5rem;
}
.footer .item1 {
  padding-bottom: 2.4rem;
  box-sizing: border-box;
  position: relative;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.footer .item .outbox {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: #fff;
  margin: 0 auto;
  display: block;
  position: relative;
  /*top: -1rem;*/
}

.footer .item .outbox .open {
  width: 4.5rem;
  height: 4.5rem;
  display: block;
  border-radius: 50%;
  margin: .3rem auto;
  background: #ffda44 url('../assets/images/加.png') no-repeat;
  -webkit-background-size: 2rem 2rem;
  background-size: 2.4rem 2.4rem;
  background-position: 50%  50%;
}
.footer .item.icon1 {
  background: url('../assets/images/home.png') no-repeat center 25%;
  background-size: 2.2rem;
}
.footer .item.icon11 {
  background: url('../assets/images/home1.png') no-repeat center 25%;
  background-size: 2.2rem;
}
.footer .item.icon2 {
  background: url('../assets/images/yutang.png') no-repeat center 25%;
  background-size: 2.2rem;
}
.footer .item.icon22 {
  background: url('../assets/images/yutang1.png') no-repeat center 25%;
  background-size: 2.2rem;
}

.footer .item.icon4 {
  background: url('../assets/images/message.png') no-repeat center 25%;
  background-size: 2.2rem;
}
.footer .item.icon44 {
  background: url('../assets/images/meaasge1.png') no-repeat center 25%;
  background-size: 2.2rem;
}
.footer .item.icon5 {
  background: url('../assets/images/my.png') no-repeat center 25%;
  background-size: 2.2rem;
}
.footer .item.icon55 {
  background: url('../assets/images/my1.png') no-repeat center 25%;
  background-size: 2.2rem;
}
</style>