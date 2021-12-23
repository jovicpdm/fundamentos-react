import Primeiro from "./component/basico/Primeiro";
import ComParametro from "./component/basico/ComParametro";
import Fragmento from "./component/basico/Fragmento";
import Aleatório from "./component/basico/Aleatório";

export default () => (
  <div id="app">
    <h1>Fundamentos React</h1>
    <Aleatório min={1} max={60} /> 
    <Fragmento />
    <ComParametro titulo="Situação do aluno" aluno="Pedro" nota={9.3} />
    <Primeiro></Primeiro>
  </div>
);
