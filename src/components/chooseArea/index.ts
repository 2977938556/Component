// 先导入组件
import chooseArea from './src/index.vue'

// 导入App
import { App } from 'vue'


// 导出一个install 的方法
export default {
    install(app: App) {
        app.component('m-choose-area', chooseArea)
    }
}