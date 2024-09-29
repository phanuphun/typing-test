<script setup lang="ts">
    import { score ,page, config} from '../store/game';
    import EditConfig from './EditConfig.vue';
    import ScoreBoard from './ScoreBoard.vue';

function OnGameStart() {
    score.value = 0
    page.value = 'pre-start'
    config.lifes = 3
}

function OnHome() {
    score.value = 0
    page.value = 'home'
    config.lifes = 3
}
</script>
<template>
    <div class="d-flex flex-column justify-content-center align-items-center border border-0">
        <ScoreBoard></ScoreBoard>
        <button v-if="page === 'home' || page === 'result' " @click="OnGameStart" class=" btn btn-outline-primary btn-lg mb-2 mt-5">
            <slot> เริ่มเกม </slot>
        </button>
        <button v-if="page === 'result' || page === 'game' " @click="OnHome" class="btn btn-secondary mb-3">
            กลับหน้าแรก
        </button>
    </div>
    <div class="w-100 h-auto py-2">
        <div class="d-flex flex-column justify-content-center align-items-center">
            <!-- <div v-if="page === 'home'">
                <h5 class="mt-3">วิธีเล่น</h5>
                <p> 1. กรอกคำที่แสดงขึ้นมาให้ทันเวลา</p>
            </div> -->
            <EditConfig v-if="page === 'home'"></EditConfig>
        </div>
    </div>
</template>
