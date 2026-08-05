import './App.css';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogosStrip from './components/LogosStrip';
import Stats from './components/Stats';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { ToastProvider } from './context/ToastContext';
import { SignupProvider } from './context/SignupContext';

function App() {
  return (
    <ToastProvider>
      <SignupProvider>
        <div className="app">
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <LogosStrip />
            <Stats />
            <Features />
            <HowItWorks />
            <Testimonials />
            <Pricing />
            <FAQ />
            <CTA />
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </SignupProvider>
    </ToastProvider>
  );
}

export default App;
