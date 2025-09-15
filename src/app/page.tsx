import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LogoSlider from '@/components/LogoSlider';
import Introduction from '@/components/Introduction';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <LogoSlider />
      <Introduction />
    </div>
  );
}
