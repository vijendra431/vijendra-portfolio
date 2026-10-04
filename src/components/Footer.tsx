import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-purple-900/30 bg-[#05030b] py-12 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-purple-900/20">
          
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-lg font-bold text-white tracking-tight flex items-center justify-center md:justify-start gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              <span>Vijendra</span>
            </a>
            <p className="text-xs text-slate-400 mt-1">
              Junior Full Stack Developer · React, Node.js, Express & PostgreSQL
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-purple-300 hover:border-purple-500/40 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-purple-300 hover:border-purple-500/40 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email Vijendra"
              className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-purple-300 hover:border-purple-500/40 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top of page"
              className="p-2.5 rounded-lg bg-purple-950/50 border border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-900/60 transition-colors ml-2 cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© 2026 Vijendra. All rights reserved.</p>
          <p className="font-mono text-[11px] text-slate-400">
            Crafted with React, Tailwind CSS & Motion
          </p>
        </div>

      </div>
    </footer>
  );
}
