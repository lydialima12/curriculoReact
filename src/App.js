import './App.css';

//Meus imports de componentes
import { Sobre } from './componentes/sobre/Sobre';
import { Menu } from './componentes/menu/Menu';
//import { Educacao } from './componentes/educacao/Educacao';
//import { Experiencia } from './componentes/experiencia/Experiencia';
//import { Contato } from './componentes/contato/Contato';
//import { Referencias } from './componentes/referencias/Referencias';

import '../src/routes';
import Routes from '../src/routes';

function App() {
  return (
    <main>
      <Menu />
      <Routes />
    </main>
  )
}


export default App;
