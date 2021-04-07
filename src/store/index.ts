import Vuex from 'vuex';
import storeApi from '@/service/storeApi';
import {
  createModule, action, mutation, extractVuexModule, createProxy,
} from 'vuex-class-component';
import { ProductCategories, ProductsInterface, OrderInfoInterface } from '../types';

const VuexModule = createModule();

class newStore extends VuexModule {
// CATEGORY
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

  categFlag = '';

  get getCategFlag(): string {
    return this.categFlag;
  }

  get getCatList(): ProductCategories[] {
    return this.Categorieslist;
  }

  @mutation changeCategFlag(cat:string) {
    this.categFlag = cat;
  }

  @mutation resetCategFlag() {
    this.categFlag = '';
  }

  // ORDERS

  orderInfo =
    {
      fullName: '',
      homeAddress: '',
      phoneNumber: 380,
      payMethod: '',
      deliveryMethod: '',
    }

  get getOrderInfo(): OrderInfoInterface {
    return this.orderInfo;
  }

  @mutation addOrder(thisOrder:any) {
    this.orderInfo = thisOrder;
  }

  @action async pushOrder(order:any) {
    if (await storeApi.addOrder(order).then((response) => response)) {
      this.addOrder(order);
    }
  }

  // PRODUCTS

  products: ProductsInterface[] = [];

  currentProduct = 0;

  enableNoProduct = false;

  get getProducts(): ProductsInterface[] {
    return this.products;
  }

  get getEnableNoProduct(): boolean {
    return this.enableNoProduct;
  }

  get getID(): any {
    return this.currentProduct;
  }

  @mutation addProductFromAPI(productList:any) {
    this.products = productList;
  }

  @action async getProductsAPI(productList:any) {
    this.addProductFromAPI(await storeApi.getProducts().then((response) => response.data));
  }

  @mutation getThisProductID(productId:number) {
    const index = this.products.findIndex((obj) => obj.id === productId);
    this.currentProduct = index;
  }

  @action async addProductToCart(index:number) {
    this.getThisProductID(index);
    this.cartTotalPrice(index);
  }

  @mutation reduceProductQuantity(productId:number) {
    this.products[this.products.findIndex((x) => x.id === productId)].quantity -= 1;
  }

  @mutation changeEnableNoProduct() {
    this.enableNoProduct = !this.enableNoProduct;
  }

  @action async setProductQuantity(product:ProductsInterface) {
    if (await storeApi.updateQuantity(product).then((response) => response)) {
      this.reduceProductQuantity(product.id);
    }
  }

  // CART

  CartlistTemp: ProductsInterface[] = [];

  cartErrors = [];

  totalPrice = 0;

  cartIndex = 0;

  get getCartErrors(): any[] {
    return this.cartErrors;
  }

  get getCartlistTemp(): ProductsInterface[] {
    return this.CartlistTemp;
  }

  get getTotalPrice(): number {
    return this.totalPrice;
  }

  get getCatListFull(): ProductCategories[] {
    return this.Categorieslist;
  }

  get getCartIndex(): number {
    return this.cartIndex;
  }

  @mutation addToCartlistTemp(i:any) {
    this.CartlistTemp.push(this.products[i]);
  }

  @mutation setCartErrors(list:any) {
    this.cartErrors = list;
  }

  @mutation cartTotalPrice(index:number) {
    this.totalPrice += this.products[index].price;
  }

  @mutation plusCartIndex() {
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

  // OTHER

  breadListState = [
    { name: 'Home', path: '/' },
  ];

  // @action async reduceProductsQuantity(productId:number) {
  //   const index = this.products.findIndex((obj) => obj.id === productId);
  //   // this.getThisProductID(index);
  //   this.cartTotalPrice(index); // eslint-disable-next-line
  //   this.plusCartIndex;
  //   this.addToCartlistTemp(index);
  // }

  @mutation reduceProductsQuantity(productId:number) {
    const index = this.products.findIndex((obj) => obj.id === productId);

    // this.currentProduct = index;
    this.products[this.products.findIndex((x) => x.id === productId)].quantity -= 1;
    this.totalPrice += this.products[index].price;
    this.CartlistTemp.push(this.products[index]); // delete this line in future
    this.cartIndex += 1;
  }
}
const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(newStore),
  },
});

export default store;
