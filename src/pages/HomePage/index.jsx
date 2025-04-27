import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from '../../components/NavBar';
import Banner from '../../components/Banner';
import Marquee from '../../components/Marquee';
import Counter from '../../components/Counter';
 import HealthEducationHero from '../../components/HealthEducationHero';
import OnlineCoursesSection from '../../components/OnlineCoursesSection';
import Layer from '../../components/Layer';
import Testimonial from '../../components/Testimonial';
import Footer from '../../components/Footer';


function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div>
      <NavBar/>  
      <div id="home">
        <Banner/>
      </div>
      <div id="marquee">
        <Marquee/>
      </div>
      <div id="education">
        <HealthEducationHero/> 
      </div>
      <div id="courses">
        <OnlineCoursesSection/>
      </div>
      <div id="layer">
        <Layer/>
      </div>
      <div id="counter">
        <Counter/>
      </div>
      <div id="testimonials">
        <Testimonial/>
      </div>
      <div id="footer">
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
