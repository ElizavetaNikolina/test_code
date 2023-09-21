import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getCoins } from '../redux/thunks/getCoins';
import { RootState } from '../types/types';
import CoinCard from './CoinCard';
import '../spinner.css';

export default function Coins(): JSX.Element {
  const [skip, setSkip] = useState<number>(0);
  const dispatch = useAppDispatch();

  const coins = useAppSelector((state: RootState) => state.CoinsSlice.coins);
  const loading = useAppSelector(
    (state: RootState) => state.CoinsSlice.loading
  );
  useEffect(() => {
    dispatch(getCoins(skip));
  }, [dispatch, skip]);

  if (loading) {
    return (
      <div
        aria-label="Orange and tan hamster running in a metal wheel"
        role="img"
        className="wheel-and-hamster"
      >
        <div className="wheel"></div>
        <div className="hamster">
          <div className="hamster__body">
            <div className="hamster__head">
              <div className="hamster__ear"></div>
              <div className="hamster__eye"></div>
              <div className="hamster__nose"></div>
            </div>
            <div className="hamster__limb hamster__limb--fr"></div>
            <div className="hamster__limb hamster__limb--fl"></div>
            <div className="hamster__limb hamster__limb--br"></div>
            <div className="hamster__limb hamster__limb--bl"></div>
            <div className="hamster__tail"></div>
          </div>
        </div>
        <div className="spoke"></div>
      </div>
    );
  }

  return (
    <>
      <div className="grid-container">
        {coins && coins.map((coin) => <CoinCard coin={coin} />)}
      </div>
      <button onClick={() => setSkip((p) => p - 9)} disabled={!skip}>
        Back
      </button>
      <button onClick={() => setSkip((p) => p + 9)}>Forward</button>
    </>
  );
}
