import { ArrowRight, Download, Send, Github, Linkedin, Mail, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status / Role pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/25 text-purple-300 text-xs font-medium mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Junior Full Stack Developer</span>
              <span className="text-purple-400/40">|</span>
              <span className="text-slate-400">Open to Roles</span>
            </div>

            {/* Main Greeting and Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.15] mb-5">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-300">Vijendra</span>
            </h1>

            {/* Core statement */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-6 max-w-2xl">
              I build modern, responsive web applications with{' '}
              <span className="text-purple-300 font-medium">React</span>,{' '}
              <span className="text-purple-300 font-medium">Node.js</span>,{' '}
              <span className="text-purple-300 font-medium">Express.js</span> and{' '}
              <span className="text-purple-300 font-medium">PostgreSQL</span>.
            </p>

            {/* Quick value proposition */}
            <p className="text-sm text-slate-400 leading-relaxed mb-8 max-w-xl">
              Focused on clean code, RESTful API architecture, intuitive user experiences, and real-world full-stack execution.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                onClick={() => scrollTo('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 active:scale-95 text-white font-semibold text-sm shadow-lg shadow-purple-600/30 hover:shadow-purple-500/40 transition-all duration-200 cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={PERSONAL_INFO.resumePdf}
                download="Vijendra_Resume_ATS.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#140e26] hover:bg-[#1f163b] active:scale-95 border border-purple-500/30 hover:border-purple-400 text-purple-200 font-medium text-sm transition-all duration-200"
              >
                <Download className="w-4 h-4 text-purple-400" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl hover:bg-purple-950/30 active:scale-95 text-slate-300 hover:text-white font-medium text-sm transition-all duration-200 cursor-pointer"
              >
                <Send className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social & Contact Direct Links */}
            <div className="flex items-center gap-5 pt-6 border-t border-purple-900/30 w-full">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-purple-500/50 hover:bg-purple-950/40 text-slate-400 hover:text-purple-300 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-purple-500/50 hover:bg-purple-950/40 text-slate-400 hover:text-purple-300 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  aria-label="Email Vijendra"
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-purple-500/50 hover:bg-purple-950/40 text-slate-400 hover:text-purple-300 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="hidden sm:flex items-center gap-2 ml-auto text-xs text-slate-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>React · Node · Express · PostgreSQL</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-[380px]">
              
              {/* Outer ambient glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-purple-600/30 to-indigo-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-80" />

              {/* Card Container */}
              <div className="relative rounded-2xl bg-[#0e091e] border border-purple-500/20 p-5 shadow-2xl overflow-hidden backdrop-blur-xl">
                
                {/* Tech badges floating */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-950/80 border border-purple-500/30 text-[11px] text-purple-300 font-mono">
                  <Terminal className="w-3 h-3 text-purple-400" />
                  <span>Full Stack</span>
                </div>

                {/* Profile Photo Container */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-gradient-to-b from-purple-900/20 to-[#120b29] border border-purple-500/10 flex items-center justify-center mb-4">
                  <img
                    src={PERSONAL_INFO.profileImage}
                    alt="Vijendra - Junior Full Stack Developer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    onError={(e) => {
                      // Fallback if image fails
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="flex flex-col items-center justify-center p-6 text-center">
                            <div class="w-20 h-20 rounded-full bg-purple-900/40 border border-purple-500/40 flex items-center justify-center text-purple-300 text-2xl font-bold font-display mb-3">VJ</div>
                            <h3 class="text-white font-semibold">Vijendra</h3>
                            <p class="text-xs text-purple-400 mt-1">Full Stack Developer</p>
                          </div>
                        `;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e091e] via-transparent to-transparent opacity-40" />
                </div>

                {/* Profile Footer Stats */}
                <div className="p-2 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight">Vijendra</h3>
                      <p className="text-xs text-purple-400 font-medium">BCA · Gulbarga University</p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-medium px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/20">
                      <Sparkles className="w-3 h-3" />
                      Ready to Deploy
                    </span>
                  </div>

                  {/* Core skills mini tags */}
                  <div className="pt-2 flex flex-wrap gap-1.5 text-[11px] text-slate-300 font-mono">
                    <span className="px-2 py-0.5 rounded bg-purple-950/50 border border-purple-500/20">React</span>
                    <span className="px-2 py-0.5 rounded bg-purple-950/50 border border-purple-500/20">Node.js</span>
                    <span className="px-2 py-0.5 rounded bg-purple-950/50 border border-purple-500/20">PostgreSQL</span>
                    <span className="px-2 py-0.5 rounded bg-purple-950/50 border border-purple-500/20">REST APIs</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
