import React from 'react';
import './App.css';
import DropDown from './components/Select';

export const config = {
  endpoint: 'https://crio-location-selector.onrender.com'
}

function App() {
  return (
    <div className="App">
      <DropDown />
    </div>
  );
}

export default App;
