import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LogoSlider from '@/components/LogoSlider';
import Introduction from '@/components/Introduction';
import Services from '@/components/Services';
import OurProcess from '@/components/OurProcess';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Awards from '@/components/Awards';
import Blogs from '@/components/Blogs';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <LogoSlider />
      <Introduction />
      <Services />
      <OurProcess />
      
      <Team />
      <Testimonials />
      <Awards />
      <Blogs />
      <Footer />
 
    </div>
  );
}
