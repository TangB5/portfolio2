'use client';
import Hero from './components/Hero';
import AboutSection from './Apropos/page';
import SkillsSection from './components/Skill';
import ProjectsSection from './projects/projet';
import ContactSection from './conctact/Contact';

export default function Home() {
  return (
    <>
    <Hero/>

    <SkillsSection/>
    <ProjectsSection/>
    {/* Section À Propos */}
    <AboutSection/>
    
    {/* Contact Section */}
    <ContactSection/>
    </>
  );
}

