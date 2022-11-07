import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'; 

import Home from './Components/pages/Home';
import Company from './Components/pages/Company';
import Contact from './Components/pages/Contact';
import NewProject from './Components/pages/NewProject';

import Container from './Components/layout/Container';

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/newproject">Novo projeto</Link>
      </div>
      <Container customClass="min-height">
        <Routes>
          <Route exact element={<Home />} path='/'></Route>
          <Route path='/company' element={<Company />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/newproject' element={<NewProject />}></Route>
        </Routes>
      </Container>
      <footer>Footer</footer>
    </Router>
  );
}

export default App;
