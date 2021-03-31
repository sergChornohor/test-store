import { OrderInfoInterface } from '@/types';
import axiosConfig from './api';

export default class storeApi {
  static getProducts() {
    return axiosConfig.get('/products')
      .then(response => response.data)
      .catch((error: any) => (console.log(`...\n got an error \n...\n${error}`)));
  }

  static addTask(task: OrderInfoInterface) {
    return axiosConfig.post('/orders', task)
      .then((response: any) => response.data.status === 'ok')
      .catch((error: any) => (console.log(`...\n got an error \n...\n${error}`)));
  }

  // static editTask(payload: any) {
  //   return axiosConfig.put('/tasks', { payload: { task: payload.task, index: payload.index } })
  //     .then((response: any) => response.data.status === 'ok')
  //     .catch((error: any) => (console.log(`...\n got an error \n...\n${error}`)));
  // }

  // static deleteTask(index: number) {
  //   return axiosConfig.delete('/tasks', { data: { index } })
  //     .then((response: any) => response.data.status === 'ok')
  //     .catch((error: any) => (console.log(`...\n got an error \n...\n${error}`)));
  // }
}
