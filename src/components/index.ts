import { App } from 'vue'
import chooseArea from "./chooseArea";
import chooseIcon from "./chooselcon";


let components = [
    chooseArea,
    chooseIcon
]


export default {
    install(app: App) {
        components.map(item => {
            console.log(item);

            app.use(item)
        })
    }
}