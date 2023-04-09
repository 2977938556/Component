<template>
    <!-- 最外层盒子 -->
    <div class="notification">
        <el-popover placement="bottom" :width="300" trigger="click">
            <!-- 这里是放置卡片的默认插槽 -->
            <template #default>
                <!-- 这个插槽是用于放置卡片组件 -->
                <slot></slot>
            </template>
            <template #reference>
                <!-- 放置图标 -->
                <!-- 这里使用一个 -->
                <el-badge :value="100" :max="99" class="item">
                    <component :is="`el-icon-${toLine(icon)}`"></component>
                </el-badge>
            </template>
        </el-popover>

    </div>
</template>

<script lang="ts" setup>
import { toLine } from '@/utils';

let props = defineProps({
    icon: {
        type: String,
        default: 'Bell'
    }
})

</script>

<style lang="less" scoped></style>