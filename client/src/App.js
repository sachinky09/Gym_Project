import Navbar from './components/Navbar/Navbar.jsx';
import Carousel from './components/Carousel/Carousel.jsx';
import Manifesto from './components/Manifesto/Manifesto.jsx';
import Candidates from './components/Candidates/Candidates.jsx';
import Form from './components/Form/Form.jsx';
import Footer from './components/Footer/Footer.jsx';
import Answer from './components/Answer/Answer.jsx';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Carousel/>
     <Manifesto/>
     <Candidates/>
     <Answer />
     <Form/>
     <Footer/>
    </div>
  );
}

export default App;
