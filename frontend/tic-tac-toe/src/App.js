import logo from './logo.svg';
import './App.css';
import Board from './Components/Board';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <div>
        <h1>The tic tac toe app</h1>
        <Board player1="Bogdan" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
