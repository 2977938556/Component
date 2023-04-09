<template>
    <div class="trend">
        <!-- <m-choose-trend text="销售数量" type="up" textColor="red" iconColor="red"></m-choose-trend>
        <m-choose-trend text="销售金额" type="down" textColor="blue" iconColor="blue"></m-choose-trend> -->
        <m-choose-trend text="销售金额" textColor="red" type="up" iconColorUp="red"></m-choose-trend>
        <m-choose-trend text="销售金额" textColor="green" type="down" iconColorDown="green"></m-choose-trend>
        <m-choose-trend text="销售金额"></m-choose-trend>
    </div>
</template>


<style lang="less" scoped>
.trend {
    display: flex;
    margin-left: 10px;
}
</style>