import Header from '../layout/Header';
import Banner from '../components/sections/Banner';
import About from '../components/sections/About';
import Features from '../components/sections/Features';
import Tours from '../components/sections/Tours';
import Stories from '../components/sections/Stories';
import Footer from '../layout/Footer';
// import Form from '../components/sections/Form';
// import BasicDatePicker from '../components/card';


function HomePage() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Features />
      <Tours />
      <Stories />
      {/* <BasicDatePicker/> */}
      <Footer />
    </>
  );
}

export default HomePage;
