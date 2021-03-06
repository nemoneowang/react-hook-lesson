import React from 'react';
import logo from './logo.svg';
import './App.css';
import UseState from './UseState';
import UseEffect from './UseEffect';
import UseReducer from './reducer/UseReducer';
import UseMemo from './memo/UseMemo';
import UseCallback from './memo/UseCallback';

function App() {
  return (
    <div>
      <h1>useState</h1>
      <UseState />
      <hr />
      <h1>useEffect</h1>
      <UseEffect />
      <h1>useReducer</h1>
      <UseReducer/>
      <h1>useMemo</h1>
      <UseMemo/>
      <h1>useCallback</h1>
      <UseCallback/>
    </div>
  );
}

export default App;
