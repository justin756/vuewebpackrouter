import Vue from 'vue';
import VueRouter from 'vue-router';
//官方元件

import Home from '@/components/HelloWorld'
//自訂的原件

import Page from '@/components/pages/Page'
import Page2 from '@/components/pages/page2'
import Page3 from '@/components/pages/page3'
import Page4 from '@/components/pages/page4'



Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            name:"首頁",
            path:'/',
            component:Home
        },
        {
            name:"page",
            path:'/page',
            component:Page,
            children:[
                {
                    name:"page2",
                    path:'',
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