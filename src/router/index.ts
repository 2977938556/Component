import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'


// 最外层容器
import Container from '@/components/container/src/index.vue'


// 首页内容
import Home from '@/view/home/index.vue'

// 01 弹窗内容
import Chooselcon from '@/view/chooselcon/index.vue'



const routes: RouteRecordRaw[] = [
    {
        path: '/', component: Container, children: [
            { path: '/', component: Home },// 这个是首页
            { path: 'chooselcon', component: Chooselcon },// 这个是按钮弹窗
        ]
    }
]



const router = createRouter({
    routes,
    history: createWebHashHistory()
})




export default router