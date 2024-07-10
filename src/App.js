
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Menu from './Components/Menu';
import Question from './Components/Question'
import Contacts from './Components/Contacts';
import Navbar from './Components/Navbar';
import { Routes, Route} from 'react-router-dom'
import Cart from './Components/Cart';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/question' element={<Question />} />
        <Route path='/contact' element={ <Contacts />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>     
      
    
    </div>
  );
}

export default App;
