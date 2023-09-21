import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCoins = createAsyncThunk(
  'coins/fetchCoins',
  async (skip: number = 0) => {
    try {
      const { data } = await axios.get(
        `https://api.coinstats.app/public/v1/coins?skip=${skip}&limit=9`
      );
      const coins = data.coins;
      return coins;
    } catch (error) {
      return Promise.reject(new Error('400'));
    }
  }
);
