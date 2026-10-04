import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#journey' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07050e]/85 backdrop-blur-md border-b border-purple-500/15 py-3.5 shadow-lg shadow-black/40'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-lg font-bold tracking-tight text-white hover:text-purple-400 transition-colors flex items-center gap-1.5 group"
        >
          <span className="w-2 h-2 rounded-full bg-purple-500 group-hover:scale-125 transition-transform" />
          <span>Vijendra</span>
          <span className="text-purple-400 font-mono text-xs">/dev</span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative py-1 transition-colors hover:text-purple-300 ${
                  isActive ? 'text-purple-400 font-semibold' : 'text-slate-300'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.resumePdf}
            download="Vijendra_Resume_ATS.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-purple-300 bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/30 hover:border-purple-400/60 rounded-lg transition-all duration-200"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-4 py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 active:scale-95 shadow-sm hover:shadow-purple-500/25 rounded-lg transition-all duration-200 whitespace-nowrap flex items-center gap-1"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-purple-950/30 transition-colors"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d091d]/98 border-b border-purple-500/20 px-6 py-6 space-y-4 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-purple-900/40 text-purple-300 font-semibold'
                      : 'text-slate-300 hover:bg-purple-950/30 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-purple-900/40 flex flex-col gap-2.5">
            <a
              href={PERSONAL_INFO.resumePdf}
              download="Vijendra_Resume_ATS.pdf"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-purple-300 bg-purple-950/60 border border-purple-500/30 rounded-lg hover:bg-purple-900/70 transition-colors"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
