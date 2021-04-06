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

  CartlistTemp: ProductsInterface[] = [];

  breadListState = [
    { name: 'Home', path: '/' },
  ];

  cartErrors = [];

  totalPrice = 0;

  cartIndex = 0;

  categFlag = '';

  currentProduct = 1;

  enableNoProduct = false;

  orderInfo = [
    {
      firstName: '',
      secondName: '',
      phoneNumber: 380,
      payMethod: '',
      deliveryMethod: '',
    },
  ]

  get getEnableNoProduct(): boolean {
    return this.enableNoProduct;
  }

  get getCartErrors(): any[] {
    return this.cartErrors;
  }

  get getCartlistTemp(): ProductsInterface[] {
    return this.CartlistTemp;
  }

  get getCatListFull(): ProductCategories[] {
    return this.Categorieslist;
  }

  get getCartIndex(): number {
    return this.cartIndex;
  }

  get getProducts(): ProductsInterface[] {
    return this.products;
  }

  get getCategFlag(): string {
    return this.categFlag;
  }

  get getCatList(): ProductCategories[] {
    return this.Categorieslist;
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

  @mutation changeEnableNoProduct() {
    this.enableNoProduct = !this.enableNoProduct;
  }

  @mutation setCartErrors(list:any) {
    this.cartErrors = list;
  }

  // @mutation thisProductID(productId:number) {
  //   const index = this.products.findIndex((obj) => obj.id === productId);

  //   this.currentProduct = index;
  //   this.products[index].quantity -= 1;
  //   this.totalPrice += this.products[index].price;
  // }

  @action async addProductToCart(index:number) {
    this.getThisProductID(index);
    this.cartTotalPrice(index);
  }

  @mutation getThisProductID(productId:number) {
    const index = this.products.findIndex((obj) => obj.id === productId);
    this.currentProduct = index;
  }

  @mutation cartTotalPrice(index:number) {
    this.totalPrice += this.products[index].price;
  }

  @mutation reduceProductsQuantity(productId:number) {
    const index = this.products.findIndex((obj) => obj.id === productId);

    // this.currentProduct = index;
    this.products[this.products.findIndex((x) => x.id === productId)].quantity -= 1;
    this.totalPrice += this.products[index].price;
    this.CartlistTemp.push(this.products[index]); // delete this line in future
    this.cartIndex += 1;
  }

  @mutation clearCartIndex() {
    this.CartlistTemp.forEach((v) => {
      this.products[this.products.findIndex((x) => x.id === v.id)].quantity += 1;
    });
    this.cartIndex = 0;
    this.totalPrice = 0;
    this.CartlistTemp = [];
  }

  @mutation changeCategFlag(cat:string) {
    this.categFlag = cat;
  }

  @mutation resetCategFlag() {
    this.categFlag = '';
  }

  @mutation addProductFromAPI(productList:any) {
    this.products = productList;
  }

  @mutation addToCartlistTemp(i:any) {
    this.CartlistTemp.push(this.products[i]);
  }
}
const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(newStore),
  },
});

export default store;
