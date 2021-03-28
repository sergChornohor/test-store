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
      cat: 'gadgets',
    },
    {
      img: 'mobile.png',
      title: 'MOBILE',
      cat: 'gadgets',
    },
    {
      img: 'gloves.png',
      title: 'GLOVES',
      cat: 'goods',
    },
    {
      img: 'smartWatch.png',
      title: 'SMART WATCH',
      cat: 'gadgets',
    },
    {
      img: 'backpack.png',
      title: 'BACKPACK',
      cat: 'goods',
    },
    {
      img: 'pngwave.png',
      title: 'PNGWAVE',
      cat: 'goods',
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

  CategorieslistTemp = [];

  cartIndex = 0;

  categIndex = 0;

  get getCatListFull(): ProductCategories[] {
    return this.Categorieslist;
  }

  get getCartIndex(): number {
    return this.cartIndex;
  }

  get getProducts(): ProductsInterface[] {
    return this.products;
  }

  get getCatListGadgets(): any {
    const result: { img: string; title: string; cat: string; }[] = [];
    this.Categorieslist.forEach((cats) => {
      if (cats.cat === 'gadgets') (result.push(cats));
    });
    return result;
  }

  get getCatListGoods(): any {
    const result: { img: string; title: string; cat: string; }[] = [];
    this.Categorieslist.forEach((cats) => {
      if (cats.cat === 'goods') (result.push(cats));
    });
    return result;
  }

  get getCatList(): any {
    let result: { img: string; title: string; cat: string; }[] = [];
    if (this.categIndex === 1) (result = this.getCatListGadgets);
    else if (this.categIndex === 2) (result = this.getCatListGoods);
    else (result = this.Categorieslist);
    return result;
  }

  @mutation changeCartIndex() {
    this.cartIndex += 1;
  }

  @mutation changecategIndexforGadgets() {
    console.log('12341234');
    this.categIndex = 1;
  }

  // @action goToGadgets(context:any) {
  //   context.commit('changecategIndexforGadgets');
  // }
}
const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(newStore),
  },
});

export default store;
