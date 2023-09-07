'use client';
import About from '@/components/About';
import CTA from '@/components/CTA';

import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

import {Logo} from '../../public/images/logo_up.png';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

const Index = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Team />
      <CTA />
      <Contact />
      <Footer />
      <div style={{ position: 'relative', zIndex: 100 }}>
        <WhatsAppWidget
          companyName="Rechtschutz AG"
          CompanyIcon={Logo}
          phoneNumber="XXXXXXXXXX"
        />
      </div>
    </>
  );
};

export default Index;
