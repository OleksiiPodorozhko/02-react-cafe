import css from './Product.module.css';
import clsx from 'clsx';

interface ProductProps {
  name: string;
  imgUrl: string;
  price: number;
  promo?: boolean;
}

export default function Product(props: ProductProps) {
  return (
    <div className={clsx(css.product, props.promo && css.promo)}>
      <h2>{props.name}</h2>
      <img src={props.imgUrl} alt={props.name} width="320" />
      <p>Price: {props.price} credits</p>
    </div>
  );
}
