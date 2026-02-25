import Hero from "@/components/Hero";
import CompanyLogos from "@/components/CompanyLogos";
import AboutCompany from "@/components/AboutCompany";
import Solutions from "@/components/OurSolution";
import ReviewVideo from "@/components/ReviewVideo";
import ImpactStats from "@/components/ImpactStats";
import IndustryInsights from "@/components/IndustryInsights";
import CtaBanner from "@/components/CtaBanner";
import GlobalLocationsMap from "@/components/GlobalLocationsMap";
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
      <GlobalLocationsMap />
      <CtaBanner />
      <Footer />
    </main>
  );
}
