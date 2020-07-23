import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { TiPlusOutline } from 'react-icons/ti';
import { v4 as uuid } from 'uuid';
import Counter from './components/Counter';

function App({ defaultCounterId }) {
  // array of unique ids fot key values that will be mapped to each <li> <Counter/> </li>
  const [idsOfAllCounters, setIdsOfAllCounters] = React.useState([
    defaultCounterId,
  ]);

  const add = () => {
    setIdsOfAllCounters([...idsOfAllCounters, uuid()]);
  };

  return (
    <div className="App">
      <h1>Counters 2</h1>
      <ul>
        {idsOfAllCounters.map((counterId) => (
          <li key={counterId}>
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

App.defaultProps = { defaultCounterId: uuid() };
export default App;
