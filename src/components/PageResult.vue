<script setup lang="ts">
    import { onMounted } from 'vue';
    import { score , topScores} from './../store/game'
    import ButtonSartGame from './ButtonSartGame.vue';
    import { sortBy } from 'lodash';

    onMounted(()=>{
        for(let i = 2 ; i < topScores.value.length ; i-- ){
            if(score.value >= topScores.value[i].scores){
                newTopScore()
                break ;
            }
        }
    })

    function newTopScore(){
        topScores.value.push({
            index : 1 ,
            name : 'phanuphun namwong',
            scores : score.value ,
            date : '-'
        })

        topScores.value = sortBy(topScores.value,score => score.scores)
        topScores.value.reverse()
        topScores.value.length = 3
        localStorage.setItem('topScores', JSON.stringify(topScores.value))
    }
</script>

<template>

    <div class="h-100 w-100 d-flex justify-content-center align-items-center">
        <div class="card border border-0" style="width:20rem;">
            <div clas=card-body>
                <h1 class="text-danger text-center"> Game Over !! </h1>
                <h2 class="text-success text-center"> คะแนน : {{score}}</h2> <br>
                <ButtonSartGame >
                    เริ่มเกมใหม่
                </ButtonSartGame>
            </div>
        </div>
    </div>



</template>
