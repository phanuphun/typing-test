<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { page } from '../store/game'
    import { topScores } from '../store/game'

    onMounted(() => {
        if('topScores' in localStorage){
            topScores.value = JSON.parse(String(localStorage.getItem('topScores')))
        }else{
            localStorage.setItem('topScores', JSON.stringify(topScores.value))
        }
    })
</script>

<template>
    <div v-if="page === 'home'">
        <h4 class="text-warning"> คะแนนที่มากที่สุด {{ topScores[0].scores }} คะแนน</h4>
    </div>
    <div class="" v-if="page === 'result'">
        <h3 class="text-center text-warning"> คะแนนที่มากที่สุด</h3>
        <table class="table table-dark">
            <thead>
                <tr>
                    <td>ลำดับ</td>
                    <td>ชื่อ</td>
                    <td>คะแนน</td>
                    <td>วันที่</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="topScore of topScores">
                    <td> {{topScore.index}} </td>
                    <td> {{topScore.name}} </td>
                    <td> {{topScore.scores}} </td>
                    <td> {{topScore.date}} </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>
