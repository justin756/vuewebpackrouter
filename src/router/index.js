import Vue from 'vue';
import VueRouter from 'vue-router';
//官方元件

import Home from '@/components/HelloWorld'
//自訂的原件

import Page from '@/components/pages/Page'
import Page2 from '@/components/pages/page2'
import Page3 from '@/components/pages/page3'
import Page4 from '@/components/pages/page4'
import menu from '@/components/pages/menu'
import login from '@/components/pages/login'

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            name:"login",
            path:'/login',
            component:login
        },
        {
            name:"Home",
            path:'/',
            component:Home
        },
        {
            name:"page",
            path:'/page',
            component:Page,
            components:{
              default:Page,
              menu:menu,
            },
            children:[
                {
                    name:"page2",
                    path:'page2/:id',
                    component:Page2
                },
                {
                    name:"page3",
                    path:'page3/:id',
                    component:Page3
                },
                {
                    name:"page4",
                    path:'page4',
                    component:Page4
                },
            ]
        },
    ]
})