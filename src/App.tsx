import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-navy-950 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Stats />
        <WhyChooseUs />
        <Portfolio />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
