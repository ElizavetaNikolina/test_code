import store from '../redux/store';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type coinsType = {
  id: number;
  icon: string | undefined;
  name: string;
  price: number;
};

export type coinsTypeProps = {
  coin: coinsType;
};
