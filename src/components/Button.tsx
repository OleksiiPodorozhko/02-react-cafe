import clsx from 'clsx';
import css from './Button.module.css';
import { CiDollar } from 'react-icons/ci';
import { useState } from 'react';
// import React from 'react';

interface ButtonProps {
  target: string;
  disabled?: boolean;
  onUpdateClicks: () => void;
}

export default function Button({ target, disabled, onUpdateClicks }: ButtonProps) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(prev => {
      const next = prev + 1;
      console.log(`${target} was ordered for ${next} times`);
      return next;
    });
    onUpdateClicks();
  };

  return (
    <button
      className={clsx(css.button, disabled && css.disabled)}
      onClick={handleClick}
    >
      {getText(clicks)}<CiDollar />
    </button>
  );
}

function getText(times: number): string {
  if (times <= 0) {
    return 'Order ';
  }
  return `Ordered ${times}`;
}
