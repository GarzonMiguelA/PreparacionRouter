<script setup>
import { useRoute } from 'vue-router';
import recipes from '@/assets/recipes.json';

const route = useRoute();

</script>

<template>
    <button>
        <router-link to="/">Volver a la home</router-link>
    </button>

    <h1>{{ recipes.name }}</h1>
    <p>{{ recipes.description }}</p>

    <!-- Ahora pasamos a mostrar los hijos -->
    <div>
        <h2>Ingrecientes para {{ recipes.name }}:</h2>
        <div v-for="(ingrediente, index) in recipes.ingredients" :key="index">
            <RouterLink to=""></RouterLink>
        </div>
    </div>


</template>