import Footer from '@/components/Footer';
import AboutHero from '@/components/about/AboutHero';
import AboutStory from '@/components/about/AboutStory';
import AboutExperience from '@/components/about/AboutExperience';
import AboutTeam from '@/components/about/AboutTeam';
import AboutPillars from '@/components/about/AboutPillars';
import AboutIndustries from '@/components/about/AboutIndustries';
import AboutNetwork from '@/components/about/AboutNetwork';
import AboutSafety from '@/components/about/AboutSafety';
import CtaBanner from '@/components/CtaBanner';

export const metadata = {
  title: 'About Us | Nisha Roadways',
  description: 'Learn about Nisha Roadways, our journey since 1982, our dream team, and our commitment to logistics excellence.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - The Big Picture */}
      <AboutHero />

      {/* Our Difference - Core Values & Vision */}
      <AboutStory />

      {/* Pillars of Success - Vision, Mission, Values */}
      <AboutPillars />

      {/* Experience & Culture - Tech, Training, Cricket IPL */}
      <AboutExperience />

      {/* The Leaders - Dream Team */}
      <AboutTeam />

      {/* Industry Reach - Trusted Across Sectors */}
      <AboutIndustries />

      {/* Our Reach - Network & Awards */}
      <AboutNetwork />

      {/* Commitment - Safety & Security */}
      <AboutSafety />

      {/* Action Zone */}
      <CtaBanner />

      <Footer />
    </div>
  );
}