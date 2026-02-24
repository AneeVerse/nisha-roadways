import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import { ServiceData } from "@/data/services";
import ServiceHero from "./services/ServiceHero";
import ServiceAbout from "./services/ServiceAbout";
import ServiceBenefits from "./services/ServiceBenefits";
import ServiceSpecs from "./services/ServiceSpecs";
import ServiceProcess from "./services/ServiceProcess";

interface ServiceTemplateProps {
  service: ServiceData;
}

export default function ServiceTemplate({ service }: ServiceTemplateProps) {
  return (
    <div className="min-h-screen bg-white">
      <ServiceHero
        title={service.title}
        subtitle={service.subtitle}
        ctaText={service.ctaText}
        heroImage={service.heroImage}
      />

      <ServiceAbout
        title={service.about.title}
        description={service.about.description}
        stats={service.about.stats}
      />

      <ServiceBenefits benefits={service.keyBenefits} />

      <ServiceSpecs specs={service.technicalSpecs} />

      <ServiceProcess steps={service.process} />

      <CtaBanner />
      <Footer />
    </div>
  );
}