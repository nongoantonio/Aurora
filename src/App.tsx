import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import LandingPage from './pages/LandingPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import { ToastProvider } from './context/ToastContext';
import { SignupProvider } from './context/SignupContext';

function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <SignupProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/termos-de-servico" element={<TermsPage />} />
            <Route path="/politica-de-privacidade" element={<PrivacyPage />} />
          </Routes>
        </SignupProvider>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
