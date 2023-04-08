<template>
    <div class="btn">
        <el-button type="primary" @click="handClick">
            <slot></slot>
        </el-button>
        <!-- 弹出框 -->
        <el-dialog :title="title" width="30%" v-model="visibleBackUp"></el-dialog>

    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'



// 定义接收的值
let props = defineProps<{
    title: string,
    visible: boolean,
}>()


// 定义自定义事件
let emits = defineEmits(["update:visible"])

// 备份一个传递进来的数据
let visibleBackUp = ref<boolean>(props.visible)


// 点击打开弹窗
// 点击按钮的时候发送自定义事件将默认传递的false取反为true 从而显示弹出框
let handClick = () => {
    emits('update:visible', !props.visible)
}


// 由于上边点击了按钮导致自定义事件的触发从而修改了props中的数据 所以只要按钮一点击那么这个就会被触发
// 【为什么需要这次监听呢】：由于第一次赋值为false 然后点击了按钮触发了自定义事件 修改了控制开关的数据  如果不监听那么 复制的值永远都为fasle
watch(() => props.visible, (newVal) => {
    // 这里需要修改备份的数据因为这里是刚刚被点击的
    visibleBackUp.value = newVal
})


// 这里还需要监听visibleBackUp 备份的数值 因为弹出框中是修改了备份的数据但是没有发送给父级进行修改
watch(() => visibleBackUp.value, (newVal) => {
    emits('update:visible', newVal)
})


</script>

<style></style>