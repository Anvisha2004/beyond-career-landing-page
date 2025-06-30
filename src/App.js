import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import About from './components/aboutUs';
import Services from './components/services';
import Testimonials from './components/testimonials';
import ContactForm from './components/Contact_Form';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Navbar/><br></br>
      <Hero/>
      <Services/>
      <Testimonials/>
      <About/>
      <ContactForm/><br></br>
      <Footer/>
    </>
  );
}

export default App;
