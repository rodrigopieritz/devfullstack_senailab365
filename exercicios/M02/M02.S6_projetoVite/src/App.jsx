import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";

function App() {
  return (
    <>
      <Header />
      <Banner texto1={'ESCOLHA O MELHOR PARA VOCÊ'} texto2={'NOSSOS PRODUTOS'} />
      <Card nome={'Item 1'} valor={15} descricao={'descricao Item 1'} caracteristicas ={['característica 1', 'característica 2']} id={1}/>
    </>
  );
}

export default App;
