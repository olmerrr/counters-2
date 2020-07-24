import React from 'react';
import CountBtnGroup from './CountBtnGroup';

export default function Counter() {
  const [count, setCount] = React.useState(0);

  const updateCounter = (newCount) => setCount(newCount);

  return (
    <div>
      <CountBtnGroup
        values={[1, 2, 3]}
        count={count}
        updateCounter={updateCounter}
      />

      <span className="counter-value">{count}</span>

      <CountBtnGroup
        values={[-3, -2, -1]}
        count={count}
        updateCounter={updateCounter}
      />
    </div>
  );
}
