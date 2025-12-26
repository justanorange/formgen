import { createWebHistory, createRouter } from 'vue-router';

import HomePage from '@/pages/home/ui/HomePage.vue';
import FormPage from '@/pages/form/ui/FormPage.vue';
import DemoPage from '@/pages/demo/ui/DemoPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/form', component: FormPage },
  { path: '/demo/:id?', component: DemoPage },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
