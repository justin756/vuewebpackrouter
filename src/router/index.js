import Vue from 'vue';
import VueRouter from 'vue-router';
//官方元件

import Home from '@/components/HelloWorld'
//自訂的原件
import Page from '@/components/pages/page'


Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            name:"首頁",
            path:'/',
            component:Home
        },
        {
            name:"分頁",
            path:'/aa',
            component:Page
        },
    ]
})