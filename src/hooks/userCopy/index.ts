// 导入转换成小写的
import { toLine } from '@/utils/index'


// 01这个函数用于复制图标数据
export const userCopy = (e: Event) => {
    return new Promise((resolve, reject) => {
        // 将事件对象中的数值抽离出来并转换成小写的
        let texts = toLine(e.target.getAttribute('icons'))
        // 01 创建input元素
        let input = document.createElement('input')
        // 02 赋值
        input.value = `<el-icon-${texts}/>`
        // 03 插入body中
        document.body.appendChild(input)
        // 04 选择输入框并 复制
        input.select()
        document.execCommand('Copy')
        // 05 删除
        document.body.removeChild(input)
        // 06 返回提示
        resolve("复制成功")
    })
}

