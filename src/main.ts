import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router/'





// element-ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


// icon 图标
// 如果您正在使用CDN引入，请删除下面一行。
import * as Icons from '@element-plus/icons-vue'
import { toLine } from '@/utils/'// 转换成小写




// 注册全局组件
import UIcomponent from '@/components/index.ts'


let app = createApp(App)
// 配置路由
app.use(router)
// 配置element-plus
app.use(ElementPlus)
// 配置全局组件
app.use(UIcomponent)


for (const [key, component] of Object.entries(Icons)) {
    app.component(`el-icon-${toLine(key)}`, component)
}

app.mount('#app')
