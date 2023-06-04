
import './App.css';
import Header from './components/header/header';
import googleLogo from './components/image/google_logo.png'
import Search from './components/search';
import Btn from './components/btn';

function App() {
  return (
    <div className="App">
      <Header/>
      <body className="App-body">
      <img className='logo' src={googleLogo} alt="imagem do logo do google" />
      <Search/>
      <Btn/>
    
        </body>
    </div>
  );
}

export default App;
