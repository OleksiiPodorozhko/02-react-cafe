import css from './Product.module.css';
import clsx from 'clsx';
import { FaHamburger } from 'react-icons/fa';
import Button from './Button.tsx';

interface ProductProps {
  name: string;
  imgUrl: string;
  price: number;
  outOfStock?: boolean;
  promo?: boolean;
  // clicks: number;
  onUpdateClicks: () => void;
}

export default function Product(props: ProductProps) {
  return (
    <div className={clsx(css.product, props.promo && css.promo)}>
      <h2>
        {props.name} <FaHamburger className={css.icon} size={24} />
      </h2>
      <Button target={props.name} disabled={props.outOfStock} onUpdateClicks={props.onUpdateClicks}/>
      <img src={props.imgUrl} alt={props.name} width="320" />
      <p>Price: {props.price} credits</p>
    </div>
  );
}
