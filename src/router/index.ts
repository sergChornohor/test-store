import { createWebHashHistory, createRouter } from 'vue-router';
import Category from '../views/Category.vue';
import Products from '../views/Products.vue';
import ProductView from '../views/ProductView.vue';

const routes = [
  { path: '/', component: Category },
  { path: '/category', component: Category },
  { path: '/products', component: Products },
  { path: '/product', component: ProductView },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
