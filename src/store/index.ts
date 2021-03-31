import Vuex from 'vuex';
import {
  createModule, action, mutation, extractVuexModule, createProxy,
} from 'vuex-class-component';
import { ProductCategories, ProductsInterface, OrderInfoInterface } from '../types';

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
      img: 'smartwatch.png',
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

  products: ProductsInterface[] = [];

  totalPrice = 0;

  breadListState = [
    { name: 'Home', path: '/' },
  ];

  CategorieslistTemp = [];

  cartIndex = 0;

  categFlag = '';

  currentProduct = 0;

  orderInfo = [
    {
      firstName: '',
      secondName: '',
      phoneNumber: 380,
      payMethod: '',
      deliveryMethod: '',
    },
  ]

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
    if (this.categFlag === 'gadgets') (result = this.getCatListGadgets);
    else if (this.categFlag === 'goods') (result = this.getCatListGoods);
    else (result = this.Categorieslist);
    return result;
  }

  get getOrderInfo(): OrderInfoInterface[] {
    return this.orderInfo;
  }

  get getTotalPrice(): number {
    return this.totalPrice;
  }

  get getID(): any {
    return this.currentProduct;
  }

  @mutation thisProductID(index:number) {
    this.currentProduct = index;
  }

  @mutation cartTotalPrice(index:number) {
    this.totalPrice += this.products[index].price;
  }

  @mutation reduceProductsQuantity(index:number) {
    this.products[index].quantity -= 1;
    this.totalPrice += this.products[index].price;
    this.cartIndex += 1;
  }

  @mutation clearCartIndex(index:number) {
    this.products[index].quantity += this.cartIndex;
    this.cartIndex = 0;
    this.totalPrice = 0;
  }

  @mutation changecategFlagforGadgets() {
    this.categFlag = 'gadgets';
  }

  @mutation changecategFlagforGoods() {
    this.categFlag = 'goods';
  }

  @mutation resetCategFlag() {
    this.categFlag = '';
  }

  @mutation addProductFromAPI(list:any) {
    this.products = list;
  }
}
const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(newStore),
  },
});

export default store;
