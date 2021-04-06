import { createWebHashHistory, createRouter } from 'vue-router';
import Category from '../views/Category.vue';
import Products from '../views/Products.vue';
import ProductView from '../views/ProductView.vue';
import About from '../views/About.vue';
import MainePage from '../views/MainePage.vue';
import CartView from '../views/CartView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainePage,
    meta: { breadCrumbs: [{ to: 'main', text: '/' }] },
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
    meta: { breadCrumbs: [{ to: '/category', text: 'categories' }] },
    children: [
      {
        path: '/gadgets',
        name: 'Gadgets',
        component: Category,
        meta: { breadCrumbs: [{ to: '/gadgets', text: 'gadgets' }] },
      },
    ],
  },
  {
    path: '/products',
    name: 'AllProducts',
    component: Products,
    meta: { breadCrumbs: [{ to: '/products', text: 'products' }] },
  },
  {
    path: '/products/:title',
    name: 'Products',
    component: Products,
    meta: { breadCrumbs: [{ to: '/products', text: 'products' }] },
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductView,
    meta: { breadCrumbs: [{ to: '/product', text: 'product' }] },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { breadCrumbs: [{ to: '/about', text: 'about' }] },
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartView,
    meta: { breadCrumbs: [{ to: '/cart', text: 'cart' }] },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
