<template>
    <div class="cooselcon">
        <h1>按钮组件</h1>
        <ChooseIcon v-model:visible="visible" title="图标组件">点击打开弹窗组件</ChooseIcon>
    </div>
</template>

<script lang="ts" setup>

import ChooseIcon from '@/components/chooselcon/src/index.vue'

import { ref } from 'vue'


let visible = ref<boolean>(false)




</script>

<style></style>