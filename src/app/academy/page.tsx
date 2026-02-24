import React from 'react';
import AcademyHero from '@/components/academy/AcademyHero';
import AcademyStats from '@/components/academy/AcademyStats';
import AcademyPhilosophy from '@/components/academy/AcademyPhilosophy';
import CourseCatalog from '@/components/academy/CourseCatalog';
import AcademyFaculty from '@/components/academy/AcademyFaculty';
import AcademyEnrollment from '@/components/academy/AcademyEnrollment';
import AcademyCorporate from '@/components/academy/AcademyCorporate';
import CtaBanner from '@/components/CtaBanner';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Nisha Academy | Logistics Education & Training',
  description: 'Master your logistics career with Nisha Academy. Industry-leading courses in supply chain, container operations, and project cargo management from India\'s logistics pioneers.',
};

export default function AcademyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <AcademyHero />

      {/* Trust Stats Section */}
      <AcademyStats />

      {/* Philosophy & Methodology */}
      <AcademyPhilosophy />

      {/* Course Catalog Section */}
      <CourseCatalog />

      {/* Faculty & Leadership */}
      <AcademyFaculty />

      {/* Enrollment Journey */}
      <AcademyEnrollment />

      {/* Corporate Solutions & Alumni Network */}
      <AcademyCorporate />

      {/* Final CTA Banner */}
      <CtaBanner />

      {/* Page Footer */}
      <Footer />
    </main>
  );
}