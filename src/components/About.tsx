import { GraduationCap, Award, Compass, Code2, CheckCircle2, Layers, Cpu } from 'lucide-react';
import { PERSONAL_INFO, FOCUS_AREAS } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 relative border-t border-purple-900/20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span>Developer Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            About Vijendra
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl">
            Passionate Junior Full Stack Developer with an engineering focus on React, Node.js, Express.js, and PostgreSQL.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Bio & Background Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Bio Card */}
            <div className="rounded-2xl bg-[#0d091e] border border-purple-500/15 p-6 sm:p-7 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
              
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
                <Code2 className="w-5 h-5 text-purple-400" />
                <span>My Background & Philosophy</span>
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I'm a <strong className="text-purple-300 font-semibold">Junior Full Stack Developer</strong> based in Karnataka, India. I specialize in building responsive, end-to-end web applications with clean React user interfaces and robust Node.js / Express backends connected to PostgreSQL.
                </p>
                <p>
                  I hold a <strong className="text-purple-300 font-semibold">Bachelor of Computer Applications (BCA)</strong> from <strong className="text-white font-medium">Gulbarga University</strong>, supplemented by rigorous full-stack software training from <strong className="text-white font-medium">NxtWave</strong> where I earned 6 verified certifications.
                </p>
                <p>
                  I take pride in writing readable, maintainable code, implementing secure token-based authentication, and designing intuitive interfaces that solve real-world problems for clients and end users.
                </p>
              </div>

              {/* Clean Unboxed Metadata */}
              <div className="mt-6 pt-5 border-t border-purple-900/30 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400">
                <span className="text-slate-300 font-medium">Degree: BCA</span>
                <span aria-hidden="true" className="text-purple-500/40">·</span>
                <span>Gulbarga University</span>
                <span aria-hidden="true" className="text-purple-500/40">·</span>
                <span className="text-purple-300">NxtWave Certified</span>
                <span aria-hidden="true" className="text-purple-500/40">·</span>
                <span>Active Open Source Contributor</span>
              </div>
            </div>

            {/* Quick stats strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div className="p-4 rounded-xl bg-[#0c081c] border border-purple-500/10 text-center">
                <span className="block text-2xl font-extrabold text-purple-400 font-mono">6+</span>
                <span className="text-xs text-slate-400 mt-1 block">Projects Built</span>
              </div>
              <div className="p-4 rounded-xl bg-[#0c081c] border border-purple-500/10 text-center">
                <span className="block text-2xl font-extrabold text-purple-400 font-mono">6</span>
                <span className="text-xs text-slate-400 mt-1 block">Certifications</span>
              </div>
              <div className="p-4 rounded-xl bg-[#0c081c] border border-purple-500/10 text-center">
                <span className="block text-2xl font-extrabold text-purple-400 font-mono">1</span>
                <span className="text-xs text-slate-400 mt-1 block">Client Project</span>
              </div>
              <div className="p-4 rounded-xl bg-[#0c081c] border border-purple-500/10 text-center">
                <span className="block text-2xl font-extrabold text-emerald-400 font-mono">100%</span>
                <span className="text-xs text-slate-400 mt-1 block">Responsive UI</span>
              </div>
            </div>

            {/* Academic & Training Credentials Block */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#0d091e] border border-purple-500/15 flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-400 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">BCA Degree</h4>
                  <p className="text-xs text-purple-400 font-medium">Gulbarga University</p>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    Core computer science fundamentals: DBMS, data structures, OOP, and software engineering.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#0d091e] border border-purple-500/15 flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-400 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Full Stack Engineering</h4>
                  <p className="text-xs text-purple-400 font-medium">NxtWave CCBP 4.0</p>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    Intensive MERN & SQL hands-on development, REST APIs, Git, and full-stack project execution.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: "Currently Focused On" (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[#0d091e] border border-purple-500/15 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Compass className="w-4 h-4 text-purple-400" />
                <h3 className="text-base font-bold text-white tracking-tight">Currently Focused On</h3>
              </div>
              <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                Key technologies and practices I practice daily to deliver high-quality software engineering:
              </p>

              <div className="space-y-3">
                {FOCUS_AREAS.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#130d29]/70 border border-purple-500/10 hover:border-purple-500/30 transition-colors flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-100">{item.title}</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Work readiness badge */}
              <div className="mt-6 pt-4 border-t border-purple-900/30 flex items-center justify-between text-xs text-slate-400">
                <span className="text-purple-300 font-medium">Seeking Junior Roles:</span>
                <span className="text-white font-mono">Immediate Availability</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
