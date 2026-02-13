// import Product from './Product';
// import { useState } from 'react';
// import banana from '../assets/banana.jpg';
import cats from '../cats.json'
import CatCard from './CatCard/CatCard.tsx';

export default function App()  {
  return (
    <>
      <h2>Cats</h2>
      {cats.map(cat => (
        <CatCard key={cat.id} name={cat.name} available={cat.available} email={cat.email}/>
      ))}
    </>
  );

}

// export default function App() {
//   const [total, setTotal] = useState<number>(0);
//
//   const onClick = () => {
//     setTotal(total + 1);
//   }
//
//   return (
//     <>
//       <p>Total clicks: {total}</p>
//       <h1>Best selling</h1>
//       <Product
//         name="Tacos With Lime"
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
//         price={10.99}
//         outOfStock={true}
//         onUpdateClicks={onClick}
//       />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
//         price={14.29}
//         promo={true}
//         onUpdateClicks={onClick}
//       />
//       <Product
//         name="Banana"
//         imgUrl={banana}
//         price={1.00}
//         onUpdateClicks={onClick}
//       />
//     </>
//   );
// }
