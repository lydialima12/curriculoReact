import './App.css';

//Meus imports de componentes
import { Sobre } from './componentes/sobre/Sobre';
import { Educacao } from './componentes/educacao/Educacao';
import { Experiencia } from './componentes/experiencia/Experiencia';
import { Contato } from './componentes/contato/Contato';
import { Referencias } from './componentes/referencias/Referencias';

function App() {
  return (
    <main className="App">
      <section>
        <header className="App-header">
          <h1>Este é meu componente container!</h1>
        </header>
        <section>
          <Sobre />
        </section>
        <section>
          <Educacao />
        </section>
        <section>
          <Experiencia />
        </section>
        <section>
          <Contato />
        </section>
        <section>
          <Referencias />
        </section>
      </section>
    </main>
  );
}

export default App;
