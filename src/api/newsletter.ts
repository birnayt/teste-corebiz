import { AxiosResponse } from 'axios';
import { INewsletter } from '../models';
import { getInstance } from './config';

export const postNewsletter = (data: INewsletter): Promise<AxiosResponse<{ message: string }>> => {
  return getInstance().post('/newsletter', data);
}
