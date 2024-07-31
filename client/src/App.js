import Navbar from './Components/Navbar.jsx';
import Carousel from './Components/Carousel.jsx';
import Manifesto from './Components/Manifesto.jsx';
import Candidates from './Components/Candidates.jsx';
import QandA from './Components/QandA.jsx';
import Form from './Components/Form.jsx';
import Footer from './Components/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Carousel/>
     <Manifesto/>
     <Candidates/>
     <QandA/>
     <Form/>
     <Footer/>
    </div>
  );
}

export default App;
