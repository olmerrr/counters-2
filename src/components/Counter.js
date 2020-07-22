import React from 'react';
import CountBtn from './CountBtn';

export default function Counter(props) {
  const [count, setCount] = React.useState(0);

  const updateCounter = (newCount) => setCount(newCount);

  return (
    <div>
      <div className="btn-group btn-group-lg m-3 my-btn-group-size">
        {[1, 2, 3].map((value, idx) => (
          <CountBtn
            value={value}
            count={count}
            updateCounter={updateCounter}
            key={idx}
          />
        ))}
      </div>
      <span className="counter-value">{count}</span>
      <div className="btn-group btn-group-lg m-3">
        {[-3, -2, -1].map((value, idx) => (
          <CountBtn
            value={value}
            count={count}
            updateCounter={updateCounter}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
}
