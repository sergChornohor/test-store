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
    meta: { breadCrumbs: [{ to: '/', text: 'Maine' }] },
    children: [
      {
        path: '/category/',
        name: 'Category',
        component: Category,
        meta: {
          breadCrumbs: [{
            to: '/',
            text: 'Maine',
          },
          {
            text: '> Categories',
          }],
        },
        children: [
          {
            path: ':cat',
            component: Category,
            props: true,
          },
        ],
      },
      {
        path: '/products',
        name: 'AllProducts',
        component: Products,
        meta: {
          breadCrumbs: [{
            to: '/',
            text: 'Maine',
          },
          {
            text: '> Products',
          }],
        },
      },
      {
        path: '/products/:title',
        name: 'Products',
        component: Products,
        meta: {
          breadCrumbs: [{
            to: '/',
            text: 'Maine',
          },
          {
            to: '/products',
            text: '> Products',
          },
          {
            text: '> ',
          }],
        },
      },
      {
        path: '/product/:id',
        name: 'ProductDetail',
        component: ProductView,
        meta: {
          breadCrumbs: [{
            to: '/',
            text: 'Maine',
          },
          {
            text: '> Product',
          }],
        },
      },
      {
        path: '/about',
        name: 'About',
        component: About,
        meta: {
          breadCrumbs: [{
            to: '/',
            text: 'Maine',
          },
          {
            to: '/about',
            text: '> About',
          }],
        },
      },
      {
        path: '/cart',
        name: 'Cart',
        component: CartView,
        meta: {
          breadCrumbs: [{
            to: '/',
            text: 'Maine',
          },
          {
            to: '/cart',
            text: '> Cart',
          }],
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
