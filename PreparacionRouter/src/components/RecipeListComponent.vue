<script setup>
    import { useRoute } from 'vue-router';
    import { RouterLink } from 'vue-router';
    import recipes from '@/assets/recipes.json'
    const route = useRoute();

</script>

<template>
    <!-- <button>
        <router-link to="/">Volver a la home</router-link>
    </button> -->

    <h1>{{ recipes.name }}</h1>
    <ul v-for="(receta, index) in recipes.recipes" :key="index"> 
        <RouterLink :to="'/Todos/' + receta.slug">{{ receta.name }}</RouterLink>
    </ul>
</template>