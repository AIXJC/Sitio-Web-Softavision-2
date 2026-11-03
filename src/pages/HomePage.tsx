import { lazy, Suspense } from 'react';
import BusinessSection from '../components/BusinessSection';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';

const About = lazy(() => import('../components/About'));
const Contact = lazy(() => import('../components/Contact'));

const StorePreview = lazy(() => import('../components/StorePreview'));
const Solutions = lazy(() => import('../components/Solutions'));
const Process = lazy(() => import('../components/Process'));
const Projects = lazy(() => import('../components/Projects'));
const TechStack = lazy(() => import('../components/TechStack'));
const CtaBanner = lazy(() => import('../components/CtaBanner'));

export default function HomePage() {
  return (
    <>
      <Hero />
      <BusinessSection />
      <ServicesSection />
      <Suspense fallback={null}>
        <StorePreview />
        <Solutions />
        <Process />
        <Projects />
        <TechStack />
      </Suspense>
      <Suspense fallback={null}>
        <About />
      </Suspense>
      <Suspense fallback={null}>
        <CtaBanner />
      </Suspense>
      <Suspense fallback={null}>
        <Contact />
      </Suspense>
    </>
  );
}
