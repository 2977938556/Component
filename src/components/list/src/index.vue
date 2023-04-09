<template>
    <div class="notification">
        <!-- 这个是内容区域 -->
        <div class="notification-diolgo">
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                <el-tab-pane v-for="(item, index) in list" :key="index" :label="item.title" :name="item.title">
                    <!-- 渲染内容区域 -->
                    <div class="items" v-for="(citem, index) in item.content" :key="index">
                        <!-- 头像容器 -->
                        <div class="avatar" v-if="citem.avater">
                            <el-avatar :size="36" :src="citem.avater" />
                        </div>
                        <div class="text">
                            <div class="tagtext">
                                <h5 v-if="citem.title">{{ citem.title }}</h5>
                                <h6 v-if="citem.desc">{{ citem.desc }}</h6>
                                <p v-if="citem.time">{{ citem.time }}</p>
                            </div>
                            <div class="tag" v-if="citem.tag">
                                <el-tag class="ml-2" size="small" :type="citem.tagType">{{ citem.tag }}</el-tag>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>

            <div class="action">
                <div class="action-item" v-for="(item, index) in actions" :key="index">
                    <p>{{ item.text }}</p>
                    <component v-if="item.icon" :is="`el-icon-${toLine(item.icon)}`"></component>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { PropType, ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { ListOptions, ActionOptions } from './types'
import { toLine } from '@/utils'

// 定义接收的数值
let props = defineProps({
    list: {
        type: Array as PropType<ListOptions[]>,
        required: true
    },
    actions: {
        type: Array as PropType<ActionOptions[]>,
        default: () => []
    }
})




const activeName = ref(props.list[0].title)

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}













</script>
<style lang="less" scoped>
.demo-tabs {
    // border: 1px solid red;
    max-height: 300px;
    overflow: scroll;
}

.items {
    height: 60px;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid gainsboro;
    padding: 4px;


    .active {
        flex: 1;
    }

    .text {
        flex: 1;
        margin-left: 10px;
        display: flex;
        justify-content: space-between;

        .tag {}

        .tagtext {}

    }
}


.action {
    display: flex;
    height: 50px;
    justify-content: center;


    .action-item {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
    }
}
</style>