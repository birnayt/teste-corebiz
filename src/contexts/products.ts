import { createContext, useContext } from 'react';
import { Product } from '../models';

type ProductsContextType = {
  products: Product[] | undefined
  setProducts: (products: Product[]) => void
};

const initialValue = {
  products: [],
  setProducts: () => ({})
};

export const ProductsContext = createContext<ProductsContextType>(initialValue);
export const useProducts = () => useContext(ProductsContext);
