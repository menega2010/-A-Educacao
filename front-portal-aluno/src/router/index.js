import { createRouter, createWebHistory } from 'vue-router';
import AddStudantAndEdit from '../components/AddStudantAndEdit/AddStudantAndEdit.vue';
import DeleteStudant from '../components/ModalConfirmDeleteStudant/DeleteStudant.vue'

const routes = [
  {
    path: '/AddStudantAndEdit',
    name: 'AddStudantAndEdit',
    component: AddStudantAndEdit
  },
  {
    path: '/DeleteStudant',
    name: 'DeleteStudant',
    component: DeleteStudant
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;