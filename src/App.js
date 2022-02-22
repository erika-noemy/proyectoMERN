import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  const [stateCar , setStateCar] = useState (false); 

  const encenderApagar = () => {
    console.log("Encender/ Apagar");
  } 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>el coche esta : {stateCar}</h3>
        <button onClick={encenderApagar}>Encender / Apagar</button>

      </header>
    </div>
  );
}

export default App;
