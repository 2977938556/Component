<template>
    <el-menu class="el-menu-vertical-demo" :collapse="collapse" default-active="2">
        <el-menu-item index="1">
            <el-icon-menu></el-icon-menu>
            <span>Navigator Four</span>
        </el-menu-item>
        <el-menu-item index="2">
            <el-icon-menu></el-icon-menu>
            <span>Navigator Four</span>
        </el-menu-item>
        <el-menu-item index="3">
            <el-icon-menu></el-icon-menu>
            <span>Navigator Four</span>
        </el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
// 定义props 的类型
let props = defineProps<{
    collapse: boolean
}>()





</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>