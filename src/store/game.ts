import { reactive, ref }  from  'vue'

export type Page = 'home' | 'pre-start' |'game' | 'result'
export const page = ref<Page>('home')

export const score = ref(0)

export const config = reactive({
    wordPerMs: 3000 ,
    progressPerMs: 300,
    lifes : 3
})

export let topScores = ref([{
    index : 1 ,
    name : '-',
    scores : 0 ,
    date : '-'
},
{
    index : 2 ,
    name : '-',
    scores : 0 ,
    date : '-'
},
{
    index : 3 ,
    name : '-',
    scores : 0 ,
    date : '-'
},
])

