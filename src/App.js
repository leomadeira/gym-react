import { Header } from './components/Header';
import { Home } from './components/Home';
import './components/Header'
import './styles/Global.scss'
import { Sobre } from './components/Sobre';
import { Recursos } from './components/Recursos';

function App() {
  return (
    <>
      <Header />,
      <Home />
      <Sobre />
      <Recursos />
    </>
  );
}

export default App;
