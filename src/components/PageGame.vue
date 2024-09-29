<script setup lang="ts">
    import { ref, watch } from 'vue';
    import { faker } from '@faker-js/faker'
    import { sample } from 'lodash';
    import { config, page, score } from '../store/game';

    // create type of words
    interface WordItem {
        word : string ,
        progress : number
    }

    // words type is WordItem
    const words = ref<WordItem[]>([])

    setInterval(()=>{

        // word random config
        const select = sample([
            'adjective',
            'adverb',
            'conjunction',
            'interjection',
            'noun',
            'preposition',
            'verb'
        ]) as 'adjective' | 'adverb' | 'conjunction' | 'interjection' | 'noun' | 'preposition' | 'verb'

        // create word word from faker then push it to words[array]
        const word = faker.word[select]()
        const currentIndex = words.value.length
        words.value.push({
            word,
            progress : 0
        })

        const currentWord = words.value[currentIndex]
        // limit time
        const interval = setInterval(()=>{
            if(currentWord){
                currentWord.progress += 1
            }else{
                clearInterval(interval)
            }
        },config.progressPerMs)
    },config.wordPerMs)

    const wordInput = ref('')
    function OnTyped() {
        //check wordInput is Matched from words[]
        //if wordsInput is Matched then will be return 1  if not matced will be return 0
        const correctWordCount = words.value.filter(item => item.word === wordInput.value).length
        if(correctWordCount <= 0){
            // score.value = score.value - 1
            config.lifes = config.lifes - 1
        }else if(correctWordCount > 0 ){
            score.value = score.value + wordInput.value.length
        }

        if(config.lifes <= 0){
            page.value = 'result'
        }

        // if wordInput is matched from words[] will not return corrent word because we need the new words[] without word corrected
        words.value = words.value.filter((item) => {
            if(item.word !== wordInput.value){
                return item.word
            }
        })
        wordInput.value = ''
    }

    watch(words ,(newValue)=> {
        let shouldGameOver = newValue.some(item => item.progress >= 100 )


        if(config.lifes <= 0){
            page.value = 'result'
        }

        if(shouldGameOver){
            words.value = words.value.filter((item) => {
                if(item.progress < 100){
                    return item.word
                }
            })
            score.value = score.value - 1
            config.lifes = config.lifes - 1
        }
    },{deep :true})
</script>

<template>
    <div class="text-center">
        <div class="d-flex flex-row justify-content-between align-items-center mt-3">
            <div class="d-inline-block">
                <h1>คะแนน : {{score}} </h1>
            </div>
            <div class="d-flex flex-row gap-2">
                <h1 v-for="heart of config.lifes">
                    <i class="bi bi-heart-fill text-danger"></i>
                </h1>
            </div>
        </div>
        <form @submit.prevent="OnTyped">
            <input v-model="wordInput" type="text"
            class="form-control mb-1 text-center"
            style="font-size:1.5rem;"
            placeholder="กรอกคำในช่อง">
            <button style="display:none;"></button>
        </form>
        <div class="d-flex flex-column">
            <div class="my-2 flex-fill border border-secondary rounded bg-light" v-for="word of words">
                <h4 class="bg-light text-black">{{word.word}}</h4>
                <div class="progress">
                    <div class="progress-bar" :class="(word.progress < 50) ? 'bg-info '
                                                        :(word.progress < 80) ? 'bg-warning'
                                                        : 'bg-danger'"
                        role="progressbar"
                        :style="`width: ${word.progress}%;`"
                        aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


