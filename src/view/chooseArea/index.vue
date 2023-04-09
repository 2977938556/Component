<template>
    <m-choose-area @change="CitFn" />
</template>

<script setup lang="ts">


interface AreaTiem {
    province: object,
    city: object,
    area: object
}

let CitFn = (value: AreaTiem) => {
    console.log(value);
}


</script>

<style></style>