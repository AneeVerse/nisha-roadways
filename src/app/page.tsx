import Hero from "@/components/Hero";
import CompanyLogos from "@/components/CompanyLogos";
import Feature from "@/components/FeaturesSection";
import Solutions from "@/components/OurSolution";
import Testimonials from "@/components/Testimonials";
import ReviewVideo from "@/components/ReviewVideo";
import CtaBanner from "@/components/CtaBanner";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="pt-20 ">
      <Hero />
      <CompanyLogos />
      <Feature />
      <Solutions />
      <ReviewVideo />
      <Testimonials hideHeader={true} singleRow={true} hideStats={true} />
      <BlogSection />
      <CtaBanner />
      <Footer />
    </main>
  );
}
