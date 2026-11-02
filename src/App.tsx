import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import CartDrawer from './components/CartDrawer';
import ErrorBoundary, { withErrorBoundary } from './components/ErrorBoundary';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import WhatsAppButton from './components/WhatsAppButton';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import HomePage from './pages/HomePage';
import LegalPage from './pages/LegalPage';
import NotFoundPage from './pages/NotFoundPage';
import SupportPage from './pages/SupportPage';
import Productpage from './pages/Productpage';
import StorePage from './pages/StorePage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Barra de progreso de scroll */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-brand via-sky to-cyan-300"
      />

      <Navbar />
      <CartDrawer />
      <ScrollToTop />

      <main className="min-h-screen">
        {/* Transición con fundido entre rutas: la página nueva entra y la
            vieja sale con un fundido corto (mode="wait" evita solapes). */}
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <ErrorBoundary>
              <Routes location={location}>
                <Route path="/" element={<HomePage />} />
                <Route path="/tienda" element={<StorePage />} />
                <Route path="/producto/:slug" element={<Productpage />} />
                <Route path="/carrito" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/soporte" element={<SupportPage />} />
                <Route path="/legal" element={<LegalPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </ErrorBoundary>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <WhatsAppButton />

      {/* Grano cinematográfico sobre todo el sitio (decorativo, sin clics) */}
      <div
        aria-hidden="true"
        className="grain pointer-events-none fixed inset-0 z-[100]"
      />
    </>
  );
}
