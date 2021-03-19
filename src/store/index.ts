import Vue  from 'vue';
import Vuex from 'vuex';
import { HeaderLinks, ProductCategories } from '@/types';
// import { Vue } from 'vue-class-component';

Vue.use(Vuex);

const ProductsStore = new Vuex.Store({
  state: {
    Categorieslist : [
      {
        img: 'camera.png',
        title: 'CAMERA',
      },
      {
        img: 'mobile.png',
        title: 'MOBILE',
      },
      {
        img: 'gloves.png',
        title: 'GLOVES',
      },
      {
        img: 'smart watch.png',
        title: 'SMART WATCH',
      },
      {
        img: 'backpack.png',
        title: 'BACKPACK',
      },
      {
        img: 'pngwave.png',
        title: 'PNGWAVE',
      },
    ]
  },
})



export default ProductsStore;
