import { configureStore } from '@reduxjs/toolkit';
import CoinsSlice from './CoinsSlice';

const store = configureStore({
  reducer: {
    CoinsSlice,
  },
});

export default store;
