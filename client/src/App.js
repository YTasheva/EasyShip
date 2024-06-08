import Navbar from './components/Navbar';
import Slider from './components/Slide';
import Welcome from './components/Welcome';
import Service from './components/Service';
import Stats from './components/Statistics';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  return (
   <>
   <Navbar/>
   <Slide/>
   <Welcome/>
   <Service/>
   <Statistics/>
   <Testimonials/>
   <Clients/>
   <News/>
   <Footer/>
   </>
  );
}

export default App;