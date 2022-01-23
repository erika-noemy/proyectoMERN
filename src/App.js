import logo from './logo.svg';
import './App.css';
import HolaMundo from './componentes/HolaMundo'; //el primer HolaMundo no deber ser igual que el segundo pero es recomendable que si
import AdiosMundo from './componentes/AdiosMundo';
import Saludar from './componentes/Saludar';

function App() {

  const user = {
    nombre: "akire",
    edad: 26,
    color: "lila"

  };

  const saludarFn= (name)=> {
    console.log("hola " + name);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <Saludar  userInfo = {user} saludarFn= {saludarFn} />

      </header>
    </div>
  );
}

export default App;
