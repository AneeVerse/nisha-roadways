'use client';

import React from 'react';
import Footer from '@/components/Footer';
import AboutTeam from '@/components/about/AboutTeam';
import TeamStructure from '@/components/team/TeamStructure';
import TeamTraining from '@/components/team/TeamTraining';
import TeamCulture from '@/components/team/TeamCulture';
import TeamHero from '@/components/team/TeamHero';

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* New Hero Section with Team Photos */}
      <TeamHero />

      {/* Leadership Section */}
      <div id="leadership">
        <AboutTeam />
      </div>

      {/* Modern Department Structure */}
      <TeamStructure />

      {/* Weekly Training Ecosystem */}
      <TeamTraining />

      {/* Deep Dive into Culture */}
      <TeamCulture />

      {/* Footer */}
      <Footer />
    </div>
  );
}
