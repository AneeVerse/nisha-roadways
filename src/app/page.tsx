import Hero from "@/components/Hero";
import CompanyLogos from "@/components/CompanyLogos";
import AboutCompany from "@/components/AboutCompany";
// import Feature from "@/components/FeaturesSection";
import Solutions from "@/components/OurSolution";
import Testimonials from "@/components/Testimonials";
import ReviewVideo from "@/components/ReviewVideo";
import ImpactStats from "@/components/ImpactStats";
import IndustryInsights from "@/components/IndustryInsights";
import CtaBanner from "@/components/CtaBanner";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="pt-20 ">
      <Hero />
      <CompanyLogos />
      {/* <Feature /> */}
      <AboutCompany />
      <Solutions />
      <ReviewVideo />
      <ImpactStats />
      <IndustryInsights />
      {/* <Testimonials hideHeader={true} singleRow={true} hideStats={true} /> */}
      {/* <BlogSection /> */}
      <CtaBanner />
      <Footer />
    </main>
  );
}
