/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import GitHubSection from './components/GitHubSection';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#07050e] text-slate-100 selection:bg-purple-600 selection:text-white bg-grid-pattern overflow-hidden">
      {/* Custom desktop cursor */}
      <CustomCursor />

      {/* Subtle background ambient mesh */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/[0.04] rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600/[0.03] rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Main Top Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Page Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <GitHubSection />
        <ResumeSection />
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
