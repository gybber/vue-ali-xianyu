 <template>
	<div class="loginbox">
		<div class="head">
			<div class="back" @click="comBack">
				<img  src="../assets/images/返回.png" alt="">
			</div>
			<div class="title">账户登录</div>
		</div>
		<div class="loginform">	
			<div class="avatar">
				<img :src="url" alt="" @click.stop="addPic">
				<span class="choosephoto" @click.stop="addPic">上传靓照</span>
   				<input hidden type="file" accept="image/jpeg,image/jpg,image/png" capture="camera" @change="fileInput" >
			</div>
			<div class="inputbox">
				<label class="label">账户</label>
				<input type="text" v-model="username" name="username" placeholder="手机号/会员名/邮箱">
			</div>
			<div class="inputbox">
				<label class="label">登录密码</label>
				<input type="password" name="password" v-model="password" placeholder="请输入密码">
			</div>
			<div class="button">
				<button class="login" @click="gologin">登录</button>
			</div>
		</div>
	</div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
import {Toast,MessageBox} from 'mint-ui'
export default {
	data () {
		return {
			username: '',
			password: '',
			url: './static/avatar.jpg'
		}
	},
	computed: mapGetters(['login']),
	methods: {
		comBack () {
            this.$router.push({path: '/'});
            this.$store.dispatch('setCurindex', 0)
		},
		addPic (e) {
		     let vm = this;
		     let add = document.querySelector('input[type=file]')
		     add.click()
		     return false;
		},
		fileInput (e) {
		     var files = e.target.files
		     console.log(files)
		     if(!files.length) return;
		     this.createImage(files, e);
		},
	   	createImage (files, e) {
		     let vm = this;
		     // lrz图片先压缩在加载、
		     this.lrz(files[0], { width: 480 }).then(function(rst) {
		      vm.url = rst.base64;
		      return rst;
		     }).always(function() {
		     // 清空文件上传控件的值
		     e.target.value = null;
		     });
		},
		gologin () {
			if(this.username ==''){
					Toast('请输入账户名')
				}else if(this.password == ''){
					Toast('请输入密码');
				}else if(this.password.length <= 6){
					Toast('密码不能低于6位哟')
				}else{
					window.localStorage.setItem('username',this.username)
					window.localStorage.setItem('password',this.password)
					this.$store.dispatch('hasLogin')
					// let username = window.localStorage.getItem('username')
					let obj = {}
					obj.avatar = this.url
					obj.username = this.username
					obj.password = this.password
					this.$store.dispatch('setUsername', this.username)
					this.$store.dispatch('setUserinfo', obj)
					Toast({
					  message: '登录成功',
					  duration: 500
					});
					setTimeout(()=>{
						this.$router.push({
	                        path: '/'
	                    })
					},600)
                    this.$store.dispatch('setCurindex', 0)
				}
		}
	}
}
</script>
<style lang="css" scoped>
.loginbox {
	width: 100%;
	height: 100%;
	background-color: #fff;
}
.head {
	margin-top: 1rem;
	display: -webkit-flex;
	display: flex;
	align-items: center;
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
.loginform{
	display: block;

}
.loginform .avatar{
	width: 100%;
	height: 5rem;
	display: -webkit-flex;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin-top: 5rem;
	margin-bottom: 4rem;
}
.avatar img {
	width: 5rem;
	/*height: 5rem;*/
	border-radius: 50%;
	margin-bottom: .4rem;
}
.avatar .choosephoto {
	font-size: 1.6rem;
	color: #000;
}
.inputbox {
	border-bottom: 1px solid #f1f1f1;
	margin-bottom: 1.5rem;
	display: -webkit-flex;
	display: flex;
	padding: 1rem 1rem;
	box-sizing: border-box;
}
.inputbox .label {
	width: 8rem;
	font-size: 1.5rem;
	font-weight: 600;
}
.inputbox input {
	border: none;
	outline: none;
	font-size: 1.4rem;
	color: #666;
}
.button {
	width: 100%;
	padding: 1rem 1rem;
	box-sizing: border-box;
}
.button .login {
	width: 100%;
	height: 40px;
	background-color: #ffda44;
	outline: none;
	border: none;
	font-size: 1.4rem;
	color: #fff;
	letter-spacing: 4px;
}

</style>