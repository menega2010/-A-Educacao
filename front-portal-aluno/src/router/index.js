import { createRouter, createWebHistory } from 'vue-router';
import AddStudantAndEdit from '../components/AddStudantAndEdit/AddStudantAndEdit.vue';
import App from '../App.vue'

const routes = [
  {
    path: '/AddStudantAndEdit',
    name: 'AddStudantAndEdit',
    component: AddStudantAndEdit
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;