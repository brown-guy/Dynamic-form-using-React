//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
//import { Home, About, Contact } from './components/components';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Profile from './components/Pages/Form';

function App() {
  return (
    <div>
      <Profile />
      {/* <Router>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='contact'>Contact</Link></li>
          </ul>
        </div>



        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
