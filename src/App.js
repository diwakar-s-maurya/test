import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
    </Router>
  );
}

export default App;
