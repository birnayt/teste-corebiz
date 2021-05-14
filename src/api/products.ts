import { AxiosResponse } from 'axios';
import { Product } from '../models';
import { getInstance } from './config';

export const getProducts = (): Promise<AxiosResponse<Product[]>> => {
  return getInstance().get('/products');
}