import { configureStore } from '@reduxjs/toolkit';
import ProductsSlice from '../features/Products/ProductsSlice';

export const store = configureStore({
    reducer: {
        products: ProductsSlice,
      },
})

