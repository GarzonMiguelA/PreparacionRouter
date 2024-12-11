import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookDetailComponent from '@/components/BookDetailComponent.vue'
import AuthorDetailComponent from '@/components/AuthorDetailComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/books/:id',
      name: 'books',
      component: BookDetailComponent,
      children: [
        {
          path: 'author/:authorSlug',
          name: 'author-detail',
          component: AuthorDetailComponent,
        },
      ]
    },
  ],
})

export default router
