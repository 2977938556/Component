<template>
    <m-notification>
        <!-- 将任务队列添加到默认插槽中 -->
        <template #default>
            <m-list :list="options" :actions="actions"></m-list>
        </template>
    </m-notification>
</template>
<script lang="ts" setup>
// 导入需要传递的数据
import { options, actions } from '@/data'





</script>

<style lang="less" scoped></style>