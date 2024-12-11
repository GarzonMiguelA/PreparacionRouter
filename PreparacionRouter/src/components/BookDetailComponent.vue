<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { useRoute } from 'vue-router';

import booksData from '@/assets/booksData.json';

const route = useRoute();

//OBTENGO EL ID DEL LIBRO
const bookId = parseInt(route.params.id);
const book = booksData.books.find(b => b.id === bookId);

</script>

<template>
    <!--Mostrare el titulo y la descripcion-->
    <button>
      <RouterLink to="/">Volver a libros</RouterLink>
    </button>
    <h1>{{ book.title }}</h1>
    <p>{{ book.description }}</p>

    <RouterLink :to="`/books/${route.params.id}/author/${book.author.slug}`">
      <h3>Autor: {{ book.author.name }}</h3>
    </RouterLink>

    
    <RouterView></RouterView>

    

    <!--Mostrare el autor para clicar en el-->
</template>