import logo from './logo.svg';
import './App.css';
import HolaMundo from './componentes/HolaMundo'; //el primer HolaMundo no deber ser igual que el segundo pero es recomendable que si

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HolaMundo/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
