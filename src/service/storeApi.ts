import { OrderInfoInterface } from '@/types';
import axiosConfig from './api';

export class StoreService {
  getCategoriesApi = async () => {
    const { data } = await axiosConfig({
      method: 'GET',
      url: '/categories',
      data: '',
    });
    return data;
  };

  getProductsApi = async () => {
    const { data } = await axiosConfig({
      method: 'GET',
      url: '/products',
      data: '',
    });
    return data;
  };

  pushOrderApi = async (order: OrderInfoInterface[]) => {
    const { data } = await axiosConfig({
      method: 'post',
      url: '/orders',
      data: JSON.stringify(order),
    });
  };
}

export default { StoreService };
