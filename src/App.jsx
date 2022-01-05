import Card from "./component/layout/Card";
import Primeiro from "./component/basico/Primeiro";
import ComParametro from "./component/basico/ComParametro";
import Fragmento from "./component/basico/Fragmento";
import Aleatório from "./component/basico/Aleatório";

export default () => (
  <div id="app">
    <h1>Fundamentos React</h1>

    <Card titulo="Desafio Aleatório">
      <Aleatório min={1} max={60} />
    </Card>
    <Card titulo="Fragmento">
      <Fragmento />
    </Card>
    <Card titulo="Com parâmetro">
      <ComParametro titulo="Situação do aluno" aluno="Pedro" nota={9.3} />
    </Card>
    <Card titulo="Primeiro Componente">
      <Primeiro></Primeiro>
    </Card>
  </div>
);
