import axios from 'axios'
import { API_URL } from '../config'

export const getInstance = () => {
  const headers: { [key: string]: string } = {}

  return axios.create({
    baseURL: API_URL,
    headers
  });
};
