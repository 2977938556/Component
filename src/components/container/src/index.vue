<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="auto">
                <!-- 侧边导航菜单 -->
                <nav-Side v-model:collapse="collapse"></nav-Side>
            </el-aside>
            <el-container>
                <el-header>
                    <!-- header头部 -->
                    <nav-Header v-model:collapse="collapse"></nav-Header>
                </el-header>


                <!-- 内容区域 -->
                <el-main>
                    <router-view></router-view>
                </el-main>

            </el-container>
        </el-container>
    </div>
</template>



<script lang="ts" setup>
import { ref } from 'vue'
// 侧边导航
import navSide from '../navSide/index.vue'
// 头部
import navHeader from '../navcHeader/index.vue'

const collapse = ref(false)

function Taglog() {
    collapse.value = !collapse.value
}

</script>



<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}


.el-header {
    padding: 0;
}
</style>