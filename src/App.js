import React from 'react';
import './App.css';
import Counter from './components/Counter';
import { TiPlusOutline } from 'react-icons/ti';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [counters, setCounters] = React.useState(1);

  const add = () => {
    setCounters(counters + 1);
  };

  return (
    <div className="App">
      <h1>Counters 2</h1>
      <ul>
        {[...Array(counters).keys()].map((el, idx) => (
          <li key={idx}>
            <Counter />
          </li>
        ))}
      </ul>
      <div>
        <button className="btn-add" onClick={add}>
          <TiPlusOutline size={64} />
        </button>
      </div>
    </div>
  );
}

export default App;
