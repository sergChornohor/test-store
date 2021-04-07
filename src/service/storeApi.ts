import { OrderInfoInterface, ProductsInterface } from '@/types';
import axiosConfig from './api';

export default class storeApi {
  static getProducts() {
    return axiosConfig.get('/products')
      .then((response) => response.data)
      .catch((error: any) => (console.log(`...\n got an error \n...\n${error}`)));
  }

  static addOrder(order: OrderInfoInterface) {
    return axiosConfig.post('/orders', order)
      .then((response: any) => response.data.status === 'ok')
      .catch((error: any) => (console.log(`...\n got an error \n...\n${error}`)));
  }

  static updateQuantity(product: ProductsInterface) {
    return axiosConfig.put('/products', product.quantity)
      .then((response: any) => response.data.status === 'ok')
      .catch((error: any) => (console.log(`...\n got an error \n...\n${error}`)));
  }
}
