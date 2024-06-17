import Header from '../layout/Header';
import Banner from '../components/sections/Banner';
import About from '../components/sections/About';
import Features from '../components/sections/Features';
import Tours from '../components/sections/Tours';
import Stories from '../components/sections/Stories';

import Footer from '../layout/Footer';

function HomePage() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Features />
      <Tours />
      <Stories />
      <Footer />
    </>
  );
}

export default HomePage;
