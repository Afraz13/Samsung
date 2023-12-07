
import './App.css';
import Footer from './componets/Footer';
import Header from './componets/Header';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
   
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
