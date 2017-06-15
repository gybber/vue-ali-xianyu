<template>
<div>
<div class="chatlist" :class="showBox>0?'popbox':'listbottom'">
        <ul>
        <template v-for="item in talks">
            <li class="user" v-if="item.type==1">
                <div class="chat-user"><img :src="url"></div>
                <div class="time"><cite><i>{{item.time}}</i>{{name}}</cite></div>
                <div class="text" v-html="replaceEmoj(item.content)"></div>
            </li>
            <li v-if="item.type==2">
                <div class="chat-user"><img :src="news.avatar"></div>
                <div class="time"><cite>{{news.name}}<i>{{item.time}}</i></cite></div>
                <div class="text" v-html="replaceEmoj(item.content)"></div>
            </li>
        </template>
        </ul>
</div>
<div class="block"></div>
<div class="foot">
    <div class="inputbox">
        <span class="speaks" v-on:click="util.toast">
            <img src="../assets/images/录音.png" alt="">
        </span>
        <input id="msg" @keypress.enter="sendMsg" type="text"placeholder="想对Ta说点什么" class="input"  v-model="content"></input>
        <span class="emoj" v-on:click=" showBox=showBox==1?0:1">
            <img src="../assets/images/笑脸.png" alt="">
        </span>
        <!-- <span class="add" v-if="show" v-on:click="util.toast">
            <img src="../assets/images/添加.png" alt="">
        </span> -->
        <span  class="send" v-on:click="sendMsg">发送</span>
    </div>
    <div class="emojbox">
        <div class="selbox" :class="showBox>0?'show':'hide'">
            <div v-show="showBox==1" class="emojs">
                <mt-swipe :auto="0" :continuous="false">
                    <mt-swipe-item v-for="n in Math.ceil(EXPS.length/18)">
                        <li v-for="(item, index) in getEXP(n,18)">
                            <img :src="'static/emotion/'+item.file" alt="" :data="item.code" v-on:click="content+=item.code">
                        </li>
                    </mt-swipe-item>
                </mt-swipe>
            </div>
        </div>
    </div>
</div>

</div>
</template>
<script>
import util from '../assets/js/util'
import { Toast } from 'mint-ui';
export default {
    props: {
        news: {
            type: Object
        }
    },
    data() {
        return {
            showBox: 0, //0隐藏emoji 1显示emoji
            content:'',
            name: '',
            url: '',
            //聊天对话
            talks: [{
                type: 1,
                time: util.formatDate.format(new Date(),'yyyy-MM-dd hh:mm:ss'),
                content: 'Hello~'
            }, {
                type: 2,
                time: util.formatDate.format(new Date(),'yyyy-MM-dd hh:mm:ss'),
                content: '亲按回车就能一键回复哟~'
            }],
            // 表情
            EXPS: [
                { file: '100.gif', code: '/::)', title: '微笑',reg:/\/::\)/g },
                { file: '101.gif', code: '/::~', title: '伤心',reg:/\/::~/g },
                { file: '102.gif', code: '/::B', title: '美女',reg:/\/::B/g },
                { file: '103.gif', code: '/::|', title: '发呆',reg:/\/::\|/g },
                { file: '104.gif', code: '/:8-)', title: '墨镜',reg:/\/:8-\)/g },
                { file: '105.gif', code: '/::<', title: '哭',reg:/\/::</g },
                { file: '106.gif', code: '/::$', title: '羞',reg:/\/::\$/g },
                { file: '107.gif', code: '/::X', title: '哑',reg:/\/::X/g },
                { file: '108.gif', code: '/::Z', title: '睡',reg:/\/::Z/g },
                { file: '109.gif', code: '/::\'(', title: '哭',reg:/\/::'\(/g },
                { file: '110.gif', code: '/::-|', title: '囧',reg:/\/::-\|/g },
                { file: '111.gif', code: '/::@', title: '怒',reg:/\/::@/g },
                { file: '112.gif', code: '/::P', title: '调皮',reg:/\/::P/g },
                { file: '113.gif', code: '/::D', title: '笑',reg:/\/::D/g },
                { file: '114.gif', code: '/::O', title: '惊讶',reg:/\/::O/g },
                { file: '115.gif', code: '/::(', title: '难过',reg:/\/::\(/g },
                { file: '116.gif', code: '/::+', title: '酷',reg:/\/::\+/g },
                { file: '117.gif', code: '/:--b', title: '汗',reg:/\/:--b/g },
                { file: '118.gif', code: '/::Q', title: '抓狂',reg:/\/::Q/g },
                { file: '119.gif', code: '/::T', title: '吐',reg:/\/::T/g },
                { file: '120.gif', code: '/:,@P', title: '笑',reg:/\/:,@P/g },
                { file: '121.gif', code: '/:,@-D', title: '快乐',reg:/\/:,@-D/g },
                { file: '122.gif', code: '/::d', title: '奇',reg:/\/::d/g },
                { file: '123.gif', code: '/:,@o', title: '傲' ,reg:/\/:,@o/g},
                { file: '124.gif', code: '/::g', title: '饿',reg:/\/::g/g },
                { file: '125.gif', code: '/:|-)', title: '累' ,reg:/\/:\|-\)/g},
                { file: '126.gif', code: '/::!', title: '吓',reg:/\/::!/g },
            ]
        }
    },
    mounted () {
        let username = window.localStorage.getItem('username')
        console.log(window.localStorage.getItem('useravatar'))
        this.url = window.localStorage.getItem('useravatar')
        console.log(this.url)
        this.$store.dispatch('setUsername', username)
        this.talks[0].name = this.$store.state.mutation.username
        this.talks[1].name=this.news.name
        this.name = username
        console.log(this.name)
        this.scrollToBottom();
        this.inputFocus();
        
    },
    methods: {
        getEXP (pageCurrent,pageSize) {
            return this.EXPS.slice((pageCurrent - 1) * pageSize, pageSize * pageCurrent)
        },
        //发送消息
        sendMsg () {
            var vm = this;
            if(this.content==''){
                Toast('请输入消息');
                return;
            }
            vm.talks.push({
                type: 1,
                time: util.formatDate.format(new Date(),'yyyy-MM-dd hh:mm:ss'),
                content: this.content
            });
            setTimeout(function(){
                vm.talks.push({
                    type: 2,
                    time: util.formatDate.format(new Date(),'yyyy-MM-dd hh:mm:ss'),
                    content: '你好！'
                });
            },100);
            // 清空文本框
            this.content='';
            // 当消息列表达到一定的高度
            this.scrollToBottom();  
            // this.changeBtn() 
        },
        //聚焦输入框
        inputFocus () {
            document.querySelector(".input").focus();
        },
        //监听输入框是否有值
        // changeBtn () {
        //     let content = this.replaceEmoj(this.content)
        //     if(content){
        //         this.show = false
        //     }else{
        //         this.show = true
        //     }
        // },
        //滚动条滚动到底部
        scrollToBottom () {
            setTimeout(function(){
                var chatlists = document.querySelectorAll('.chatlist')
                var chatlist = chatlists[0]
                chatlist.scrollTop=chatlist.scrollHeight
            },100)
        },
        //替换表情代码
        replaceEmoj (content) {
            var vm=this;
            var exps=this.EXPS;
            for(var i=0;i<exps.length;i++){
                content = content.replace(exps[i].reg, '<img src="static/emotion/' + exps[i].file +'"  alt="" />');
            }
            return content;
        }
    }
}
</script>
<style lang="css" scoped>
* {
    margin: 0;
    padding: 0;
}
.chatlist {
    position: absolute;
    top: 12rem;
    bottom: 4.8rem;
    left: 0;
    right: 0;
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 1rem 0;
    box-sizing: border-box;
    background-color:#f7f7f7;
}
.listbottom {
    bottom: 4.8rem;
}
.popbox {
    bottom: 19.8rem;
}
.chatlist ul {
    min-height: 30rem;
}
.chatlist ul .user {
    text-align: right;
    padding-left: 0;
    padding-right: 6rem;
}
.chatlist ul li {
    position: relative;
    margin-bottom: 1rem;
    padding-left: 6rem;
    min-height: 6.8rem;
}
.user .chat-user {
    left: auto;
    right: .3rem;
}
.chat-user {
    position: absolute;
    left: .3rem;
}
.text,
.chat-user {
    display: inline-block;
    vertical-align: top;
}
.chat-user img {
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
}
.time {
    width: 100%;
}
cite {
    left: auto;
    right: 6rem;
    text-align: right;
    font-style: normal;
    line-height: 2.4rem;
    font-size: 1.2rem;
    white-space: nowrap;
    color: #999;
    text-align: left;
} 
cite i {
    font-style: normal;
    padding-left: .5rem;
    padding-right: .5rem;
    font-size: 1.2rem;
}
.user .text {
    margin-left: 0;
    text-align: left;
    background-color: #ffda44;
    color: #fff;
}
.text {
    position: relative;
    line-height: 1rem;
    padding: 1rem 1.5rem;
    background-color: #fff;
    border-radius: 3px;
    color: #333;
    word-break: break-all;
    max-width: 46.2rem\9;
}
.text,
.chat-user {
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
}
.text img {
    max-width: 100%;
    vertical-align: middle;
}
.chat-user {
    position: absolute;
    left: .3rem;
}
.text:after {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    left: -1rem;
    border-width: 1rem;
    border-style: solid dashed dashed;
    border-color: #fff transparent transparent;
    overflow: hidden;  
}
.user .text:after {
    left: auto;
    right: -1rem;
    border-top-color: #ffda44;
}
.foot {
    width: 100%;
    min-height: 4.8rem;
    position: fixed;
    bottom: 0px;
    left: 0px;
    background-color: #ffffff;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid #f6f6f6;
    padding: 0 1.2rem;
    box-sizing: border-box;
}
.block{
    min-height: 4.8rem;
}
.inputbox {
    display: -webkit-flex;
    display: flex;
    height: 4rem;
    width: 100%;
    align-items: center;
}
.speaks,.emoj,.add{
    width: 4rem;
    display: block;
    text-align: center;
}
.input{
    flex: 1;
    border: none;
    outline: none;
}
.input::-webkit-input-placeholder{
    font-size: 1.4rem;
}
.speaks img,
.emoj img,
.add img{
    width: 3rem;
    height: 3rem;
}
.foot .selbox {
    width: 100%;
    height: 15rem;
}
.show {
    display: block;
}
.hide {
    display: none;
}
.emojs {
    overflow: hidden;
    width: 29rem;
    margin: 0px auto;
    height: 13.5rem;
}
.emojs li {
    width: 3rem;
    float: left;
    padding: .6rem 1rem 0 .8rem;
}
.send {
    width: 5rem;
    height: 3rem;
    background-color: #ffda44;
    color: #000;
    font-weight: 600;
    text-align: center;
    line-height: 3rem;
    font-size: 1.4rem
}      
</style>