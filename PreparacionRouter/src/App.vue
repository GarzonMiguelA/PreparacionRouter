<script setup>
import { RouterLink, RouterView } from 'vue-router';
import booksData from '@/assets/booksData.json';
</script>

<template>
  <header>
    <h1>Books</h1>
    <nav id="nav">
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li v-for="(book, index) in booksData.books" :key="index">
          <RouterLink :to="'/books/' + book.id">
            {{ book.title }}
          </RouterLink>
        </li>
      </ul>
    </nav>
    
    <RouterView/>

  </header>
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