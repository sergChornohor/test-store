import { OrderInfoInterface } from '@/types';
import axiosConfig from './api';

export const getCategoriesApi = async () => {
  const { data } = await axiosConfig({
    method: 'GET',
    url: '/categories',
    data: '',
  });
  return data;
};

export const getProductsApi = async () => {
  const { data } = await axiosConfig({
    method: 'GET',
    url: '/products',
    data: '',
  });
};

export const pushOrderApi = async (order: OrderInfoInterface[]) => {
  const { data } = await axiosConfig({
    method: 'post',
    url: '/orders',
    data: JSON.stringify(order),
  });
};
