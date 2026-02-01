import { useState } from 'react';

interface Values {
  x: number;
  y: number;
}

export default function TestComponent() {
  const [values, setValues] = useState<Values>({ x: 0, y: 0 });

  const updateValue = (key: keyof Values) => {
    setValues({
      ...values,
      [key]: values[key] + 1,
    });
  };


  // const updateX = () => {
  //   setValues({
  //     ...values,
  //     x: values.x + 1,
  //   });
  // };
  //
  // const updateY = () => {
  //   setValues({
  //     ...values,
  //     y: values.y + 1,
  //   });
  // };

  return (
    <div>
      <p>
        x: {values.x}, y: {values.y}
      </p>
      <button onClick={() => updateValue('x')}>Update x</button>
      <button onClick={() => updateValue('y')}>Update y</button>
    </div>
  );
}
