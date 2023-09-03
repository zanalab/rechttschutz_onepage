import About from '@/components/About';
import CTA from '@/components/CTA';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Team from '@/components/Team';

const Index = () => {
  return (
    <>
      <Hero />
      <About />
      {/* <Services /> */}
      <Team />
      <CTA />
    </>
  );
};

export default Index;
