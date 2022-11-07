import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 

import Home from './Components/pages/Home';
import Project from './Components/pages/Projects';
import Company from './Components/pages/Company';
import Contact from './Components/pages/Contact';
import NewProject from './Components/pages/NewProject';

import Container from './Components/layout/Container';
import Navbar from './Components/layout/Navbar';
import Footer from './Components/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact element={<Home />} path='/'></Route>
          <Route path='/project' element={<Project />}></Route>
          <Route path='/company' element={<Company />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/newproject' element={<NewProject />}></Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
