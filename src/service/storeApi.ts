import { OrderInfoInterface, ProductsInterface } from '@/types';
import axiosConfig from './api';

export default class storeApi {
  static getProducts() {
    return axiosConfig.get('/products')
      .then((response) => response.data)
      .catch((error: any) => (console.log(`...\n got an error \n...\n${error}`)));
  }

  static addOrder(order: OrderInfoInterface) {
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    return axiosConfig.post('/orders', order, { headers })
      .then((response: any) => response.data.status === 'ok')
      .catch((error: any) => (console.log(`...\n got an error \n...\n${error}`)));
  }

  static updateQuantity(product: ProductsInterface) {
    return axiosConfig.put('/products/{id}', product.quantity)
      .then((response: any) => response.data.status === 'ok')
      .catch((error: any) => (console.log(`...\n got an error \n...\n${error}`)));
  }
}
