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





let app = createApp(App)
// 配置路由
app.use(router)
// 配置element-plus
app.use(ElementPlus)
// 配置。全局图标
// for (let i in Icons) {
//     // 这里是循环遍历注册图标
//     app.component(`el-icon-${toLine(i)}-string`, (Icons as any)[i])
// }


for (const [key, component] of Object.entries(Icons)) {
    app.component(`el-icon-${toLine(key)}`, component)
}

app.mount('#app')
