import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element ={<Layout/>} />
        <Route index element={<Home />} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;



// INSTALLED LIBRARIES:
// emailjs/browser (for contact form), @fortawesome/free-brands-svg-icons (for font icons), @fortawesome/free-solid-svg-icons (for navigation bar on the left side), @fortawesome/react-fontawesome, animate.css (css library for animating the fonts and objects), @gsap-trial (for more animation (we've used trial as we didnt want to create an account)), loaders.css (package for loaders), react-leaflet (for the maps in the contact page, it is a library for the big maps), react-loaders (for react integration, so that it's easy for integration of react), react-router-dom (will help us to navigate through our website), sass (helps us to write less code, and to use some of the operations like for loops in variables)
