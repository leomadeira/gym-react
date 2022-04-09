import { Header } from './components/Header';
import { Home } from './components/Home';
import './components/Header'
import './styles/Global.scss'
import { Sobre } from './components/Sobre';
import { Recursos } from './components/Recursos';
import { Orcamento } from './components/Orcamento';
import { Treinadores } from './components/Treinadores';
import { Banner } from './components/Banner';

function App() {
  return (
    <>
      <Header />,
      <Home />
      <Sobre />
      <Recursos />
      <Orcamento />
      <Treinadores />
      <Banner />
    </>
  );
}

export default App;
