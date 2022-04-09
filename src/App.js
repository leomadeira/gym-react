import { Header } from './components/Header';
import { Home } from './components/Home';
import { Sobre } from './components/Sobre';
import { Recursos } from './components/Recursos';
import { Orcamento } from './components/Orcamento';
import { Treinadores } from './components/Treinadores';
import { Banner } from './components/Banner';
import { Comentarios } from './components/Comentarios';
import { Blogs } from './components/Blogs';
import { Footer } from './components/Footer';

import './styles/Global.scss'
import { Creditos } from './components/Creditos';

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
      <Comentarios />
      <Blogs />
      <Footer />
      <Creditos />
    </>
  );
}

export default App;
