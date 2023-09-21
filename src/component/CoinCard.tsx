import { coinsTypeProps } from '../types/types';

export default function CoinCard({ coin }: coinsTypeProps): JSX.Element {
  return (
    <div key={coin.id} className="grid-item">
      <img src={coin.icon} alt="logo" />
      <p>Coin: {coin.name}</p>
      <p>Price: {coin.price}</p>
    </div>
  );
}
