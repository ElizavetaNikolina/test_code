import { createSlice } from '@reduxjs/toolkit';
import { getCoins } from './thunks/getCoins';
import { stateType } from './store.types';

const initialState: stateType = {
  coins: [],
  loading: false,
};

const CoinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCoins.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCoins.fulfilled, (state, action) => {
        state.loading = false;
        state.coins = [...action.payload];
      })
      .addCase(getCoins.rejected, (state) => {
        state.loading = false;
        console.error('ERROR!');
      })
      .addDefaultCase(() => {});
  },
});

export default CoinsSlice.reducer;
