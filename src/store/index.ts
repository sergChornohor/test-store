import Vue from 'vue';
import Vuex from 'vuex';
import {
  createModule, action, mutation, extractVuexModule, createProxy,
} from 'vuex-class-component';
import { ProductCategories, breadCrumbsListInterface } from '../types';

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

  breadListState = [
    { name: 'Home', path: '/' },
  ];

  cartIndex = 0;

  get getCatList():ProductCategories[] {
    return this.Categorieslist;
  }

  get getCartIndex(): number {
    return this.cartIndex;
  }

  @mutation changeCartIndex(cartIndex: number) {
    this.cartIndex += 1;
  }
}
const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(newStore),
  },
});

export default store;
