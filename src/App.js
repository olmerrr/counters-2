import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { TiPlusOutline } from 'react-icons/ti';
import { v4 as uuid } from 'uuid';
import Counter from './components/Counter';

function App() {
  const [counters, setCounters] = React.useState(1);

  const add = () => {
    setCounters(counters + 1);
  };

  return (
    <div className="App">
      <h1>Counters 2</h1>
      <ul>
        {[...Array(counters).keys()].map((el) => (
          <li key={uuid()}>
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
