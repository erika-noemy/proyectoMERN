import logo from './logo.svg';
import './App.css';
import HolaMundo from './componentes/HolaMundo'; //el primer HolaMundo no deber ser igual que el segundo pero es recomendable que si
import AdiosMundo from './componentes/AdiosMundo';
import Saludar from './componentes/Saludar';

function App() {
  const username = "noemy chu";
  const edad = 23;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HolaMundo/>
        <AdiosMundo/>
        <Saludar  name={username} edad={edad} />

      </header>
    </div>
  );
}

export default App;
