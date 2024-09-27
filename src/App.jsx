import './App.css'
import OurServices from './components/OurServices.jsx'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Features from './components/Features.jsx';
import CaseStudiesSection from './components/CaseStudies.jsx';
import Testimonial from './components/Testimonial.jsx';
import Footer from './components/Footer.jsx';
import OurStorySection from './components/OurStory.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import RegistrationForm from './components/Contact.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <OurServices/>
    <OurStorySection/>
    <Features/>
    <CaseStudiesSection/>
    <RegistrationForm/>
    <Testimonial/>
    <Footer/>
    <ToastContainer/>
    </>
  )
}

export default App
