import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import productsApi from './features/products/productsApi';  // Changed 'productsApi' to 'productsApi'
import ordersApi from './features/orders/ordersApi';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,  // Changed 'productsApi' to 'productsApi'
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware, ordersApi.middleware),  // Changed 'productsApi' to 'productsApi'
});
