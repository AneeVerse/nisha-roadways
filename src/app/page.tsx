import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LogoSlider from '@/components/LogoSlider';
import Introduction from '@/components/Introduction';
import Services from '@/components/Services';
import OurProcess from '@/components/OurProcess';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <LogoSlider />
      <Introduction />
      <Services />
      <OurProcess />
    </div>
  );
}
