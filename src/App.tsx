import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EducationPage from './pages/EducationPage';
import HowItWorksPage from './pages/HowItWorksPage';
import JoinUsPage from './pages/JoinUsPage';
import ContactPage from './pages/ContactPage';

function RevealManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    let observer: IntersectionObserver;
    const timer = setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
            }
          });
        },
        { threshold: 0.09, rootMargin: '-24px 0px' }
      );
      document.querySelectorAll('.reveal').forEach(el => {
        el.classList.remove('is-visible');
        observer.observe(el);
      });
    }, 60);

    return () => {
      clearTimeout(timer);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <RevealManager />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"            element={<HomePage />} />
          <Route path="/about"       element={<AboutPage />} />
          <Route path="/education"   element={<EducationPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/join-us"     element={<JoinUsPage />} />
          <Route path="/contact"     element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
