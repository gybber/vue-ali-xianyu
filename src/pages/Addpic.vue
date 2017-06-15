<template>
<div class="wrap">
  <div class="show">
    <div class="head">
          <div class="close" @click="tohome">
            <img  src="../assets/images/close.png" alt="">
          </div>
          <div class="title">发布</div>
    </div>
    <div class="block"></div>
    <div class="inputcontainer">
      <div class="inputdetail">
        <input type="text" v-model="title" placeholder="标题 品类品牌型号都是买家喜欢搜索的">
      </div>
      <div class="inputdetail">
        <input type="text" v-model="desc" placeholder="描述一下你的闲置">
      </div>
    </div>
    <div class="image-list">
     <div class="list-img" v-show="hasPhoto" @click.stop="addPic">
       <img src="../assets/images/相机.png" />
       <span class="choosephoto">请选择或者拍照上传照片</span>
       <input hidden type="file" accept="image/jpeg,image/jpg,image/png" capture="camera" @change="fileInput" >
     </div>
     <ul class="list-ul" v-show="!hasPhoto">
       <li class="list-li" v-for="(url, index) in imgUrls">
         <div class="list-link" >
          <img :src="url">
         </div>
       <span class="cancleimg" @click='delImage(index)'></span>
       </li>
       <li class="list-li-add">
       <span class="add-img" @click.stop="addPic"></span>
       </li>
     </ul>
    </div>
    <div class="addr">
      <p class="localadress">{{addr}}</p>
    </div>
    <div class="goodinfo">
      <div class="border">
        <ul class="topname">
          <router-link to='/addpic'  class="item selected" data-name="price" @click.native="setSelected">开个价</router-link>
          <router-link to='/addpic/content2' class="item" data-name="sell" @click.native="setSelected">拍卖</router-link>
          <li class="item" @click="noprice">不谈钱</li>
        </ul>
      </div>
      <div class="contentwrap">
        <router-view :show="show" :kind="kind"></router-view>
      </div>
    </div>
    <div class="block"></div>
    <div class="footer">
      <button class="fabu" @click="publish">确定发布</button>
    </div>
  </div>
  <div class="maskbox">
          <div class="mask">
            <div class="line1">
              <div class="inputbox inputbox1">
                <span class="label">价格</span>
                <div type="text" class="text active" id="text" data-content="" data-id="0" @click.stop="binddata">
                </div>
              </div>
              <div class="inputbox">
                <span class="label">原价</span>
                <div type="text" class="text" id="text" data-content="" data-id="1" @click.stop="binddata"></div>
              </div>
            </div>
            <div class="line2"> 
              <div class="inputbox">
              <span class="label">运费</span>
              <div type="text" class="text" id="text" data-content="" data-id="2" @click.stop="binddata"></div>
              </div>
            </div>
            <div class="selfinput">
              <div class="grids">
                <p  class="grid" data-value="1"@click="num">1</p>
                <p  class="grid" data-value="2"@click="num">2</p>
                <p  class="grid" data-value="3"@click="num">3</p>
                <p  class="grid" data-value="4"@click="num">4</p>
                <p  class="grid" data-value="5"@click="num">5</p>
                <p  class="grid" data-value="6"@click="num">6</p>
                <p  class="grid" data-value="7"@click="num">7</p>
                <p  class="grid" data-value="8"@click="num">8</p>
                <p  class="grid" data-value="9"@click="num">9</p>
                <p  class="grid" data-value="0"@click="num">0</p>
                <p  class="grid" data-value="."@click="num">.</p>
                <p  class="grid key" @click="hidemask"></p>
              </div>
              <div class="operate" >
                <span href="" class="grid del" @click="del"></span>
                <button class="grid assure"  @click="assure">确定</button>
              </div>
          </div>
          </div>
  </div>
  <div class="maskbox1">
    <div class="head">
      <div class="back" @click="hidden">
        <img  src="../assets/images/返回.png" alt="">
      </div>
      <div class="title">类目</div>
    </div>
    <div class="block1"></div>
    <div class="container" >
       <div class="item" v-for="item in items" :data-name="item.name" key="item.id" @click="selectItem">{{item.name}}</div>
    </div>
  </div>
  </div>
</template>
<script>
import Content1 from '../components/Content1'
import {mapGetters,mapActions} from 'vuex'
import {Toast,MessageBox} from 'mint-ui'
import util from '../assets/js/util.js'
 export default {
   components: {
    Content1
   },
   data () {
     return {
       imgUrls: [],
       hasPhoto: true,
       addr: '',
       selected: true,
       id: '0',
       show: false,
       kind: '',
       items: '',
       price: '',
       primecost: '',
       freight: '',
       title: '',
       desc: ''
     }
   },
   mounted () {
      this.axios.get('https://easy-mock.com/mock/593787f691470c0ac107cacf/category/kind')
      .then((response) => {
        this.items = response.data.data
        console.log(response.data.data)
      })
      .catch(function (error) {
        console.log(error) 
      })
      this.num()
      console.log(this.items)
   },
   watch: {
     imgUrls: 'showAddpic'
   },
   methods: {
     binddata (event) {
       if(document.querySelector('.active'))  {
            document.querySelector('.active').classList.remove('active')
          }
        event.currentTarget.classList.add('active')
        this.id = event.currentTarget.dataset.id
     },
     num (event) {
         let contents = document.querySelectorAll('.inputbox .text')
         let value = event.currentTarget.dataset.value
         contents[this.id].innerHTML += value
     },
     del () {
        let contents = document.querySelectorAll('.inputbox .text')
        let value = contents[this.id] .innerHTML
        console.log(value)
        let newvalue=value.substring(0,value.length-1);
        // console.log(newvalue)
        contents[this.id].innerHTML= newvalue
     },
     assure () {
        let contents = document.querySelectorAll('.inputbox .text')
        let price = document.querySelector('.price')
        price.value = contents[0].innerHTML
        let primecost = contents[1].innerHTML
        let freight = contents[2].innerHTML
        console.log(primecost,freight)
        this.$store.dispatch('setPrimecost', primecost)
        this.$store.dispatch('setFreight', freight)
        this.price = price.value
        this.primecost = primecost
        this.freight = freight
        this.show = true
        this.hidemask()
        // console.log(price)
     },
     setSelected () {
        if(document.querySelector('.selected'))  {
            document.querySelector('.selected').classList.remove('selected')
          }
        event.currentTarget.classList.add('selected')
     },
     hidemask () {
        let mask = document.querySelector('.maskbox')
        mask.style.display = 'none'
     },
     tohome () {
        this.$router.push({path: '/'})
        this.$store.dispatch('setCurindex', 0)
     },
     showAddpic () {
       let vm = this;
       if(vm.imgUrls.length >= 1) {
        vm.hasPhoto = false;
       } else {
        vm.hasPhoto = true;
       }
   },
   publish () {
      if(this.title == ''){
        Toast('请输入发布的标题')
        return;
      }
      if(this.desc == ''){
        Toast('描述一下宝贝吧')
        return;
      }
      if(this.imgUrls == ''){
        MessageBox.alert('上传几张宝贝图片吧~~如果无法上传，请确定是否开启拍照权限，如果仍无效果，请移步其他浏览器')
        return;
      }
      if(this.price == ''){
        Toast('输入价钱')
        return;
      }
      if(this.primecost == ''){
        Toast('原价多少？')
        return;
      }
      if(this.freight == ''){
        Toast('邮费不能为空')
        return;
      }
      if(this.kind == '') {
        Toast('请选择分类')
        return;
      }
       MessageBox.alert('发布成功，去看看吧！').then(action => {
          let obj = {}
          obj.title = this.title
          obj.desc = this.desc
          obj.imgUrls = this.imgUrls
          obj.price = this.price
          obj.primecost = this.primecost
          obj.freight = this.freight
          obj.del = true
          obj.kind = this.kind
          obj.time = util.formatDate.format(new Date(),'yyyy-MM-dd hh:mm')
          console.log(obj)
          this.$store.dispatch('setFabunum')
          this.$store.dispatch('setFabuinfo',obj)
          this.$router.push('/my')
          this.$store.dispatch('setCurindex',4)
        });
   },
   selectItem (e) {
      let name = e.currentTarget.dataset.name;
      this.kind = name
      this.hidden()
    },
   hidden (){
       let mask1 = document.querySelector('.maskbox1')
        mask1.style.display = 'none'
   },
   addPic (e) {
     let vm = this;
     let add = document.querySelector('input[type=file]')
     add.click()
     return false;
   },
   fileInput (e) {
     var files = e.target.files || e.dataTransfer.files;
     if(!files.length) return;
     this.createImage(files, e);
   },
   createImage (file, e) {
     let vm = this;
     // lrz图片先压缩在加载、
     this.lrz(file[0], { width: 480 }).then(function(rst) {
      vm.imgUrls.push(rst.base64);
      return rst;
     }).always(function() {
     // 清空文件上传控件的值
     e.target.value = null;
     });
   },
   delImage (index) {
     let vm = this;
     vm.imgUrls.splice(index, 1);

   },
    noprice () {
      Toast('贴子仅能在鱼塘发布，你附近没有鱼塘，去别的地方转转吧~')
    }
  }
 }  
</script>
<style lang="css" scoped>
*{
  margin: 0;
  padding: 0;
}
.contentwrap{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.head {
  display: -webkit-flex;
  display: flex;
  align-items: center;
  height: 5rem;
  background-color: #f8f8f8;
  padding-left: .4rem;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.addr {
  width: 100%;
  height: 3rem;
}
.goodinfo {
  width: 100%;
  margin-top: 1rem;
  padding-top: 1rem;
  box-sizing: border-box;
}
.border{
  width: 90%;
  margin: 0 auto;
  border: 1px solid #f3f3f3;
  border-radius: 1.8rem;
  height: 4rem;
}
.border  .topname{
  display: -webkit-flex;
  display: flex;
  height: 4rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.topname .item{
  width: 33.3333%;
  text-align: center;
  color: #000;
  /*font-size: 1.4rem;*/
  /*font-size: 14px;*/
}
.topname .item.selected{
  border-radius: 1.8rem;
  height: 3rem;
  line-height: 3rem;
  background-color: #ffda44;
}
.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 5.5rem;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  background-color: #fff;
}
.fabu{
  outline: none;
  border: none;
  width: 98%;
  height: 4rem;
  background-color: red;
  color: #fff;
  display: block;
  margin: 0 auto;
}
.inputcontainer {
  width: 100%;
}
.inputdetail {
  width: 100%;
  border-bottom: 1px solid #f8f8f8;
}
.inputdetail input {
  border: none;
  outline: none;
  width: 100%;
  height: 4rem;
  padding-left: 1rem;
  box-sizing: border-box;
  font-size: 1.3rem;
}
.inputbox input::-webkit-input-placeholder {
  color: #999999;
}
.image-list{
  width: 100%;
  height: 10rem;
  background-color: #f8f8f8;
}
.list-img {
  display: -webkit-flex;
  display: flex;
  height: 10rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.list-img img {
  width: 5rem;
  height: 5rem;
  display: block;
  margin-bottom: 1rem;
}
.choosephoto {
  font-size: 1.4rem;
  color: #888;
}
.list-ul {
  width: 100%;
  /*height: 200px;*/
  height: auto;
  padding: 1rem 1rem;
  background-color: #f8f8f8;
  box-sizing: border-box;
}
.list-ul li {
  width: 25%;
  display: inline-block;
  position: relative;
}
.list-link {
  width: 100%;
}
.list-link img {
  width: 5rem;
  height: 5rem;
}
.cancleimg {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: block;
  background: url('../assets/images/X.png') no-repeat;
  background-size: cover;
  position: absolute;
  top: -.8rem;
  left: -.4rem;
}
.list-li-add {
  height: 5rem;
}
.list-li-add .add-img{
  width: 5rem;
  height: 5rem;
  display: block;
  border: 1px solid #333;
  background: url('../assets/images/加.png') no-repeat;
  background-size: 3rem 3rem;
  background-position: center center;
}
.wrap {
  width: 100%;
  height: 100%;
}

.block {
  height: 5.5rem;
}
.close img{
  width: 2rem;
  height: 2rem;
}
.title {
  flex: 1;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 700;
}
.selfinput{
  width: 100%;
  background: #fff;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
}
.grids{
    width: 75%;
    flex:1;
    position: relative;
    overflow: hidden;
}
.selfinput .grids:before{
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #D9D9D9;
    transform: scaleY(0.5);
    transform-origin:0 0;
}
.grid{
    position: relative;
    float: left;
    width: 33.33333333%;
    padding: 0 10px;
    height: 6rem;
    line-height: 6rem;
    text-align: center;
    box-sizing: border-box;
    font-size: 2rem;
}
.key {
    background: url('../assets/images/键盘.png') no-repeat;
    background-size: 4rem 4rem;
    background-position: center center;
}
.grid:before{
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 1px;
    bottom: 0;
    border-right: 1px solid #d9d9d9;
    transform: scaleX(.5);
    transform-origin:100% 0;
}
.grid:after{
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  bottom: 0;
  border-bottom: 1px solid #d9d9d9;
  transform: scaleY(.5);
  transform-origin:0 100%;
}
.operate{
    width: 25%;
    position: relative;
    overflow: hidden;
}
.selfinput .operate:before{
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid #D9D9D9;
  transform: scaleY(0.5);
  transform-origin:0 0;
}
.del{
  width: 100%;
  background: url('../assets/images/删除.png') no-repeat;
  background-size: 40px;
  background-position: center center;
  box-sizing: border-box;
  height: 12rem;
  line-height: 12rem;
  font-size: 1.6rem;

}

.assure{
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
  height: 12rem;
  line-height: 12rem;
  font-size: 1.6rem;
  background-color: #ffda44;
  color: #fff;
  border: none;
}
.maskbox{
  display: none;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.5);
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.mask{
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  border: 1px solid #f8f8f8;
}
.line1 .inputbox{
  flex:1;
}
.line1,.line2 {
  width: 100%;
  height: 4.5rem;
  display: -webkit-flex;
  display: flex;
  line-height: 4.5rem;
  /*align-items: center;*/
  position: relative;
}
.line1:after{
  content: '';
  background: #d9d9d9;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  transform-origin: 0 100%;
  transform: scaleY(.5);
}
.inputbox1:after{
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  width: 1px;
  bottom: 0;
  border-right: 1px solid #d9d9d9;
  transform: scaleX(.5);
  transform-origin:100% 0;

}
.label {
  width: 3rem;
}
.inputbox{
  padding-left: 1rem;
  box-sizing: border-box;
  position: relative;
  font-size: 1.4rem;
  display: -webkit-flex;
  display: flex;
}
.inputbox .text{
    width: 10rem;
    height: 4.5rem;
    /*text-align: center;*/
    padding-left: 2rem;
    box-sizing: border-box;
    color:black;
    line-height: 4.5rem;
    position: relative;
    background: url('../assets/images/人民币.png') no-repeat;
    background-size: 1.5rem 1.5rem;
    background-position: 0 1.3rem;

}
        /*光标*/
.inputbox .text.active::before{
    content: attr(data-content);
}

.inputbox .text.active::after{
    content: '';
    border-right: 2px solid #d9d9d9;
    height: 50%;
    opacity: 1;
    animation: focus .7s forwards infinite;

}
/*闪烁动作*/
@keyframes focus{
    from{
        opacity: 1;
    }to{
        opacity: 0;
    }
}
.maskbox1 {
  display: none;
  width: 100%;
  height: 100%;
  background-color: #f7f7f7;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
.block1{
  height: 4.4rem;
}
.container{
  width: 100%;
  height: 66rem;
  overflow-y: scroll;
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