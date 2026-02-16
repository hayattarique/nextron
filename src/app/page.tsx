import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Industries from '@/components/sections/Industries';
import WhyChoose from '@/components/sections/WhyChoose';
import Commitment from '@/components/sections/Commitment';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <Services />
      <Industries />
      <WhyChoose />
      <Commitment />
      <Contact />
      <Footer />
    </main>
  );
}
