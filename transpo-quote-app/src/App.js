import { faHeart, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faCamera, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import Quotation from './components/Quotation';


function App() {
  return (
    <div className='App d-flex flex-column min-vh-100'>
      <div className='header jumbotron text-left  py-4'>
          <h2>Transportation Cost Quotation</h2>
          <p>Estimate your transportation cost. At least know how much you're paying for diesel 😉 </p>
      </div>

      <Quotation/>

      <div className='header jumbotron mt-auto mb-0 py-3 text-center'>
          <p> <FontAwesomeIcon icon={faHeart} /> A Tinkering Project  <FontAwesomeIcon icon={faHeart} /> </p>
          <p> 
            <FontAwesomeIcon icon={faLaptopCode} /> <a href='https://github.com/Erickristoper/Transport_Cost'> github </a> &nbsp;&nbsp;
            <FontAwesomeIcon icon={faThumbsUp} /><a href='https://m.facebook.com/ericdelsocorroX'> facebook </a> &nbsp;&nbsp;
            <FontAwesomeIcon icon={faCamera} /><a href='https://www.instagram.com/ericdelsocorro/'> instagram </a> 
          </p>
      </div>
    </div>
  );
}

export default App;
