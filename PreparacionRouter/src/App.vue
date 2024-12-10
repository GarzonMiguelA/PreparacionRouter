<script setup>
import { RouterLink, RouterView } from 'vue-router';
import recipes from '@/assets/recipes.json';
import RecipeListComponent from './components/RecipeListComponent.vue';
</script>

<template>
  <h1>Bienvenido a recetas, selecciona una y mira sus respectivos detalles</h1>
  <nav>
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li v-for="(receta, index) in recipes.recipes" :key="index">
        <RouterLink :to="'/Todos/' + receta.slug">{{ receta.name }}</RouterLink>
      </li>
    </ul>
  </nav>

  <RecipeListComponent />

  <RouterView/>
</template>

<style scoped>
    h1 {
        color: #333;
    }
    nav {
        background-color: #f0f0f0;
        padding: 10px;
    }
    ul {
        display: flex;
        justify-content: center;
        list-style: none;
    }
    li {
        margin: 0 10px;
    }
    a {
        text-decoration: none;
        color: #333;
    }
    a:hover {
        color: #000;
    }
</style>