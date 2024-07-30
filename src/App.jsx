import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SocialMedia from './Components/SocialMedia';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import About from './Components/About';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Footer from './Components/Footer';
import Certificates from './Components/Certificates';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="fixed top-0 left-0 right-0 z-50">
          <NavBar />
        </div>
        <div className='hidden md:block fixed top-[60%] left-5 right-0 bottom-0 w-[5rem] z-50'>
          <SocialMedia flex={'flex-col'} />
        </div>
        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/education' element={<Education />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/projects' element={<Projects />} />
            <Route path="/Certification" element={<Certificates />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
