import ScrollProgress from '../components/ScrollProgress';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import LogosStrip from '../components/LogosStrip';
import Stats from '../components/Stats';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function LandingPage() {
  return (
    <div className="app">
      <a href="#main-content" className="skip-link">
        Saltar para o conteúdo principal
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <Hero />
        <LogosStrip />
        <Stats />
        <Features />
        <HowItWorks />
        <Testimonials />
        <About />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
