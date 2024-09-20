import './App.css';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/Homepage/Homepage';
import Navigation from './Components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
