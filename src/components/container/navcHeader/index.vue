<template>
    <div class="header">
        <span @click="tager">
            <el-icon-expand v-if="collapse"></el-icon-expand>
            <el-icon-fold v-else></el-icon-fold>
        </span>
    </div>
</template>


<script lang="ts" setup>
// 指定需要接收的参数
let props = defineProps<{
    collapse: boolean
}>()

// 定义自定义方法
let emits = defineEmits(['update:collapse'])

// 这个是触发自定义事件 打开与关闭
let tager = () => {
    emits("update:collapse", !props.collapse)
}


</script>




<style lang="less" scoped>
.header {
    height: 60px;
    background: white;
    padding: 0px 20px;
    line-height: 60px;
    border-bottom: 2px solid #e3e3e3;
}
</style>