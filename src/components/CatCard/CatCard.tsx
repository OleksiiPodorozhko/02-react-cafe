import css from "./CatCard.module.css";
import clsx from 'clsx';
import React, { useState } from 'react';

interface CatCardProps {
  name: string;
  available: boolean;
  email: string;
}

export default function CatCard({ name, available, email }: CatCardProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event);
    setIsClicked(!isClicked);
  }

  return (
    <section
      className={clsx(
        css.catCard,
        available ? css.available : css.notAvailable
      )}
      onClick={handleClick}
    >
      <h3 style={{ color: isClicked ? 'blue' : 'black' }}>{name}</h3>
      <p>{available && email}</p>
    </section>
  );
}