<template>
    <div class="trend">
        <div class="trend-conter">

            <div class="text" :style="{ color: textColor }">
                <!-- 这里判断如果你有插槽传递数据那么就显示插槽的 否则显示props传递的text -->
                <slot v-if="slots.default"></slot>
                <div v-else>{{ text }}</div>
            </div>

            <div class="icon">
                <!-- <el-icon-arrowup v-if="type === 'up'" :style="{ color: iconColorUp }" />
                <el-icon-arrowdown v-else :style="{ color: iconColorDown }" /> -->
                <component v-if="type === 'up'" :style="{ color: iconColorUp }" :is="`el-icon-${toLine(iconIconUp)}`">
                </component>
                <component v-else :style="{ color: iconColorDown }" :is="`el-icon-${toLine(icosnTextDown)}`">
                </component>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { toLine } from '@/utils';
import { useSlots } from 'vue'

// type 趋势类型
// text 趋势文字： 默认为文字
// textColor 文字颜色：默认为黑色
// trendIconDown 上升图标：默认为箭头
// typeResolve 是否反转颜色 


// 定义接收的值
let props = defineProps({
    // 接收图标类型
    type: {
        type: String,
        default: 'up',
    },
    // 接收文字
    text: {
        type: String,
        default: '默认趋势',
    },
    // 设置文字颜色
    textColor: {
        type: String,
        default: '#000000',
    },
    //下面两个是设置图标颜色
    iconColorUp: {
        type: String,
        default: 'red',
    },
    iconColorDown: {
        type: String,
        default: 'green',
    },
    // 下面两个是设置图标
    iconIconUp: {
        type: String,
        default: 'Upload',
    },
    icosnTextDown: {
        type: String,
        default: 'Download',
    }
})


// 插槽
let slots = useSlots()




</script>



<style scoped lang="less">
.trend {
    padding: 0 10px;

    .trend-conter {
        display: flex;

        .text {
            font-size: 16px;
        }

        .icon {
            font-size: 15px;
            padding-left: 10px;
        }


    }

}
</style>