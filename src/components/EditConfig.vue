<script setup lang="ts">
    import {config} from '../store/game'

</script>

<template>
    <div class="d-flex flex-column justify-content-center align-items-center">
        <div class="text-center">
            <h5> ตั้งค่า </h5>
        </div>
        <div class="text-center">
            <div>ระยะเวลาการแสดง : {{config.wordPerMs/1000}} วินาที</div>
            <input v-model="config.wordPerMs" max="5000" min="100" step="100" type="range">
        </div>
        <div class="text-center">
            <div>ความเร็วการนับเวลา : {{config.progressPerMs/1000}} วินาที</div>
            <input v-model="config.progressPerMs" max="1000" min="100" step="100" type="range">
        </div>
    </div>

</template>
