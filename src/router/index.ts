import { createWebHashHistory, createRouter } from 'vue-router';
import Category from '../views/Category.vue';
import Products from '../views/Products.vue';
import ProductView from '../views/ProductView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Category,
    meta: { breadCrumbs: [{ to: '/', text: 'categories' }] },
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
    meta: { breadCrumbs: [{ to: '/category', text: 'categories' }] },
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
    meta: { breadCrumbs: [{ to: '/products', text: 'products' }] },
  },
  {
    path: '/product',
    name: 'Product',
    component: ProductView,
    meta: { breadCrumbs: [{ to: '/products/product', text: 'product' }] },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
