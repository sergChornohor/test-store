import Vuex from 'vuex';
import {
  createModule, action, mutation, extractVuexModule, createProxy,
} from 'vuex-class-component';
import { ProductCategories, ProductsInterface } from '../types';

const VuexModule = createModule();

class newStore extends VuexModule {
  Categorieslist = [
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
      img: 'smartWatch.png',
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
  ];

  products = [
    {
      name: 'Crewneck T-Shirt',
      id: 53362,
      price: 95,
      quantity: 10,
      category: 'CAMERA',
      discription: 'Since a Vuex stores state is made reactive by Vue, when we mutate the state, Vue components observing the state will update automatically. This also means Vuex mutations are subject to the same reactivity caveats when working with plain Vue:',
      image: 'camera.png',
    },
    {
      name: 'Crewneck T-Shirt',
      id: 45452,
      price: 45,
      quantity: 2,
      category: 'BACKPACK',
      discription: 'Since a Vuex stores state is made reactive by Vue, when we mutate the state, Vue components observing the state will update automatically. This also means Vuex mutations are subject to the same reactivity caveats when working with plain Vue:',
      image: 'backpack.png',
    },
  ];

  breadListState = [
    { name: 'Home', path: '/' },
  ];

  cartIndex = 0;

  get getCatList(): ProductCategories[] {
    return this.Categorieslist;
  }

  get getCartIndex(): number {
    return this.cartIndex;
  }

  get getProducts(): ProductsInterface[] {
    return this.products;
  }

  @mutation changeCartIndex() {
    this.cartIndex += 1;
  }
}
const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(newStore),
  },
});

export default store;
