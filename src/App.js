import './App.css';
import FAQ from './components/Faq';
import Feature from './components/Features';
import Footer from './components/Footer';
import Header from "./components/Header.jsx";
import Home from './components/Home';
import Prefooter from './components/Prefooter';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonial';


function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Feature/>
      <Testimonials/>
      <Pricing/>
      <FAQ/>
      <Prefooter/>
      <Footer/>
    </>
  );
}

export default App;
