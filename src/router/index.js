 import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Yutang from '@/pages/Yutang'
import Message from '@/pages/Message'
import My from '@/pages/My'
import Login from '@/pages/Login'
import Search from '@/pages/Search'
import Category from '@/pages/Category'
import Addpic from '@/pages/Addpic'
import Content1 from '@/components/Content1'
import Content2 from '@/components/Content2'
import Kind from '@/pages/Kind'
import Buy from '@/pages/Buy'
import Chat from '@/pages/Chat'
import Pay from '@/pages/Pay'
import Addr from '@/pages/Addr'
import Order from '@/pages/Order'
import Fabu from '@/pages/Fabu'
Vue.use(Router)

export default new Router({
  routes: [
      {
        path: '/',
        component:Index
      },
      {
      	path: '/yutang',
      	component: Yutang
      },
      {
      	path: '/message',
      	component: Message
      },
      {
      	path: '/my',
      	component: My
      },
      {
        path: '/login',
        component: Login
      },
      {
        path: '/search',
        component: Search
      },
      {
        path: '/category',
        component: Category,
      },
      {
        path: '/addpic',
        component: Addpic,
        children: [{
          path: '/addpic',
          component: Content1
        },
        {
          path: '/addpic/content2',
          component: Content2
        }
        ]
      },
      {
        path: '/kind',
        component: Kind
      },
      {
        path: '/buy',
        component: Buy,

      },
      {
        path: '/chat',
        component: Chat
      },
      {
        path: '/pay',
        component: Pay
      },
      {
        path: '/addr',
        component: Addr
      },
      {
        path: '/order',
        component: Order
      },
      {
        path: '/fabu',
        component: Fabu
      }
    ]
})
