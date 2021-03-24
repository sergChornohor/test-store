import Vue from 'vue';
import Vuex from 'vuex';
// import { Vue } from 'vue-class-component';

const Store = new Vuex.Store({
  state: {
    Categorieslist: [
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
    ],
    breadListState: [
      { name: 'Home', path: '/' },
    ],
  },
  getters: {
    CatList: (state) => state.Categorieslist,
  },
});

export default Store;
