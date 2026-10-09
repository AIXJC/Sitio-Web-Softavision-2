import About from '../components/About';
import BusinessSection from '../components/BusinessSection';
import Contact from '../components/Contact';
import CtaBanner from '../components/CtaBanner';
import Hero from '../components/Hero';
import Process from '../components/Process';
import Projects from '../components/Projects';
import ServicesSection from '../components/ServicesSection';
import Solutions from '../components/Solutions';
import StorePreview from '../components/StorePreview';
import TechStack from '../components/TechStack';

export default function HomePage() {
  return (
    <>
      <Hero />
      <BusinessSection />
      <ServicesSection />
      <StorePreview />
      <Solutions />
      <Process />
      <Projects />
      <TechStack />
      <About />
      <CtaBanner />
      <Contact />
    </>
  );
}
