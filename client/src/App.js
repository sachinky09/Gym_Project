import { ToastContainer } from 'react-toastify';

import Navbar from './components/Navbar/Navbar.jsx';
import Carousel from './components/Carousel/Carousel.jsx';
import Manifesto from './components/Manifesto/Manifesto.jsx';
import Candidates from './components/Candidates/Candidates.jsx';
import Form from './components/Form/Form.jsx';
import Footer from './components/Footer/Footer.jsx';
import Answer from './components/Answer/Answer.jsx';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Carousel />
      <Manifesto />
      <Candidates />
      <Answer />
      <Form />
      <Footer />

      <ToastContainer />
    </div>
  );
}

export default App;
