import { App } from 'vue'
import chooseArea from "./chooseArea";// 地区组件
import chooseIcon from "./chooselcon";// 图标组件
import choosetrend from './choosetrend';// 趋势组件
import notification from './notification'// 通知组件
import list from './list'// 通知组件


let components = [
    chooseArea,
    chooseIcon,
    choosetrend,
    notification,
    list
]


export default {
    install(app: App) {
        components.map(item => {
            app.use(item)
        })
    }
}