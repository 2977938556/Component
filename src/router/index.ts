import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'


// 最外层容器
import Container from '@/components/container/src/index.vue'


// 首页内容
import Home from '@/view/home/index.vue'

// 01 弹窗内容
import Chooselcon from '@/view/chooselcon/index.vue'

// 02 省市区组件
import ChooseArea from '@/view/chooseArea/index.vue'

// 03 趋势组件
import ChooseTrend from '@/view/choosetrend/index.vue'

// 04 通知组件
import Notification from '@/view/notification/index.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/', component: Container, children: [
            { path: '/', component: Home },// 这个是首页
            { path: 'chooselcon', component: Chooselcon },// 这个是按钮弹窗
            { path: 'choosearea', component: ChooseArea },// 这个是地区弹窗
            { path: 'choosetrend', component: ChooseTrend },// 这个是趋势
            { path: 'notification', component: Notification },// 这个是通知组件
        ]
    }
]



const router = createRouter({
    routes,
    history: createWebHashHistory()
})




export default router