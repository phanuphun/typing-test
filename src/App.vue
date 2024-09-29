<script setup lang="ts">
    import PageHome from './components/PageHome.vue';
    import PagePreStart from './components/PagePreStart.vue';
    import PageGame from './components/PageGame.vue';
    import PageResult from './components/PageResult.vue';
    import { page } from './store/game';
</script>

<template>
    <div class="vh-100 container">
        <PageHome v-if="page === 'home'"></PageHome>
        <PagePreStart v-if="page === 'pre-start'"></PagePreStart>
        <PageGame v-if="page === 'game'"></PageGame>
        <PageResult v-if="page === 'result'"></PageResult>
    </div>
</template>

<style>
    * {
        background-color: #242526;
        color: #fff;
    }
</style>
