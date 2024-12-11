<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { useRoute } from 'vue-router';

import booksData from '@/assets/booksData.json';

const route = useRoute();

const authorSlug = route.params.authorSlug;
const author = booksData.books.map(book => book.author).find(author => author.slug === authorSlug);

</script>

<template>
   <button>
      <RouterLink :to="`/books/${route.params.id}`">Volver a detalles de libros</RouterLink>
    </button>

    <h1>{{ author.name }}</h1>
    <p>{{ author.bio }}</p>
</template>