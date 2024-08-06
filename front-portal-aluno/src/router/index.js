import { createRouter, createWebHistory } from 'vue-router';
import AddStudant from '../components/AddStudant.vue';


const routes = [
  {
    path: '/',
    name: 'AddStudant',
    component: AddStudant
  },
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;