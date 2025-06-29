import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import About from './components/aboutUs';
import Services from './components/services';
import Testimonials from './components/testimonials';
import ContactForm from './components/Contact_Form';

function App() {
  return (
    <>
      <Navbar/><br></br>
      <Hero/>
      <Services/>
      <Testimonials/>
      <About/>
      <ContactForm/>
    </>
  );
}

export default App;
