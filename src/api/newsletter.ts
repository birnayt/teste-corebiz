import { AxiosResponse } from 'axios';
import { Newsletter } from '../models';
import { getInstance } from './config';

export const postNewsletter = (data: Newsletter): Promise<AxiosResponse<{ message: string }>> => {
  return getInstance().post('/newsletter', data);
}
