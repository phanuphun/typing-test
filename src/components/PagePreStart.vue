<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { page } from '../store/game';

    const countDown = ref(3)
    let interval:number

    onMounted(()=>{
        interval = setInterval(() => {
            countDown.value--
            if(countDown.value <= 0){
                clearInterval(interval)
                page.value = 'game'
            }
        },1000)
    })


</script>

<template>
    <div class="h-100 w-100 d-flex justify-content-center align-items-center text-center">
        <h1 class="text-white"> <slot>เกมจะเริ่มในอีก {{ countDown}} </slot></h1>
    </div>
</template>
