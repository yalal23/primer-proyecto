import logo from "./logo.svg";
import "./App.css";
import Componente from "./component/Componente";
import Estado from "./component/Estado";



const nombre = "Jalal";
const id = 23;
const meses = ["Enero", "Febrero", "Marzo", "Abril"];
const miObjeto = {
  nombre: "Jalal",
  email: "jalalazzammouri13@gamil.com"
}



function App() {
  return (
    <>
      <div className="App App-header">
        <Componente meses = {meses} objeto = {miObjeto}/>
      </div>
    </>
  );
  /*  <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
  );*/
}

export default App;
