<template>
    <div class="cooselcon">
        <m-choosel-icon v-model:visible="visible" title="图标组件">点击打开弹窗组件</m-choosel-icon>
    </div>
</template>

<script lang="ts" setup>


import { ref } from 'vue'


let visible = ref<boolean>(false)




</script>

<style></style>