<template>
    <div class="select">
        <el-select placeholder="选择省份" v-model="province" clearable>
            <el-option v-for="item in allAress" :key="item.code" :label="item.name" :value="item.code" />
        </el-select>
        <el-select :disabled="!province" placeholder="选择城市" v-model="city" clearable>
            <el-option v-for="item in cityList " :key="item.code" :label="item.name" :value="item.code" />
        </el-select>
        <el-select :disabled="!province || !city" placeholder="选择区域" v-model="area" clearable>
            <el-option v-for="item in areaList" :key="item.code" :label="item.name" :value="item.code" />
        </el-select>
        <!-- {{ areaList }} -->
    </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from "vue";

let emits = defineEmits(['change'])

// 定义类型
interface AreaTiem {
    name?: string,
    code?: string,
    children?: AreaTiem[]
}

interface AreaCodeName {
    name: string,
    code: string,
}








// 导入省市区的数据
import allAress from '@/lib/pca-code.json'



// 省市区
let province = ref<string>('')
let city = ref<string>('')
let area = ref<string>('')


let regionalDat = ref(allAress)


// 大致的步骤就是先遍历出所有的  省 的数据
// 然后基于省被选择的数据 去使用计算属性计算出市的数据
// 然后基于市及的数据 去使用计算属性计算出区的数据
// 同时需要设置一个 禁用条件 如果 没有选择省那么就不能选城市和地区
// 如果没有选择 市那么不能选择地区



// 城市下拉框的所有值
let selectCity = ref<AreaTiem>([])

// 区域下拉框所有值
let selectArea = ref<AreaTiem>([])




// 计算出市的数据
let cityList = computed((): AreaTiem => {
    if (!province.value) {
        return []
    } else {
        return selectCity.value
    }
})

// 计算区域的数据
let areaList = computed((): AreaTiem => {
    if (!city.value) {
        return []
    } else {
        return selectArea.value

    }
})




// 这里是处理每次被点击的时候清空数据
// 监听省找出市
watch(() => province.value, (newValue) => {
    if (newValue) {
        selectCity.value = regionalDat.value && regionalDat.value.find(item => province.value == item.code)?.children!
    }
    city.value = ''
    area.value = ''
})
// 监听市找出区
watch(() => city.value, (newValue) => {
    if (newValue) {
        selectArea.value = selectCity.value && selectCity.value.find(item => city.value == item?.code)?.children!
    }
    area.value = ''
})


// 这里就是需要发送请求获取数据
watch(() => area.value, (newvalue) => {

    // 选择了就相当于变化了区域模块
    if (newvalue) {
        // 省市区
        let provinceData: AreaCodeName = {
            code: province.value,
            name: regionalDat.value.find(item => item.code == province.value)?.name!
        }
        let cityData: AreaCodeName = {
            code: city.value,
            name: selectCity && selectCity.value.find(item => item.code == city.value)?.name!
        }
        let areaData: AreaCodeName = {
            code: area.value,
            name: newvalue && selectArea.value.find(item => item.code == area.value)?.name!
        }

        emits('change', {
            province: provinceData,
            city: cityData,
            area: areaData
        })
    }






})





</script>

