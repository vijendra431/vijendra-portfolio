import { useState } from 'react';
import { Briefcase, GraduationCap, Award, Calendar, FileText, Download, ExternalLink, CheckCircle } from 'lucide-react';
import { JOURNEY, CERTIFICATES } from '../data/portfolioData';

export default function Journey() {
  const [activeTab, setActiveTab] = useState<'timeline' | 'certificates'>('timeline');

  return (
    <section id="journey" className="py-24 relative border-t border-purple-900/20 bg-[#06040d]/70">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span>Career Progression</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Development Journey & Credentials
            </h2>
            <p className="mt-2 text-base text-slate-400 max-w-xl">
              From academic computer applications fundamentals to intensive full-stack engineering and real-world software delivery.
            </p>
          </div>

          {/* View toggle */}
          <div className="flex items-center p-1 bg-[#0f0b20] border border-purple-500/20 rounded-xl self-start sm:self-auto">
            <button
              onClick={() => setActiveTab('timeline')}
              className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                activeTab === 'timeline'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Milestone Timeline
            </button>
            <button
              onClick={() => setActiveTab('certificates')}
              className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                activeTab === 'certificates'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Certificates (6)
            </button>
          </div>
        </div>

        {/* Tab 1: Milestone Timeline */}
        {activeTab === 'timeline' && (
          <div className="relative pl-6 sm:pl-8 border-l-2 border-purple-500/20 space-y-12 max-w-3xl ml-2 sm:ml-4">
            {JOURNEY.map((item, index) => {
              const getIcon = () => {
                if (item.type === 'experience') return <Briefcase className="w-4 h-4 text-purple-300" />;
                if (item.type === 'training') return <Award className="w-4 h-4 text-indigo-300" />;
                return <GraduationCap className="w-4 h-4 text-purple-300" />;
              };

              return (
                <div key={index} className="relative group">
                  {/* Timeline Node Dot */}
                  <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-7 h-7 rounded-full bg-[#0d091e] border-2 border-purple-500/60 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-purple-400 transition-all">
                    {getIcon()}
                  </div>

                  {/* Timeline Card */}
                  <div className="p-6 rounded-2xl bg-[#0d091e] border border-purple-500/15 group-hover:border-purple-500/30 transition-all duration-200">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-purple-400 bg-purple-950/50 px-2.5 py-0.5 rounded border border-purple-500/20">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </span>
                      <span className="text-xs text-slate-400">{item.location}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-purple-300 font-medium mb-3">
                      {item.organization}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Key Highlights */}
                    <ul className="space-y-1.5 pt-2 border-t border-purple-900/20">
                      {item.highlights.map((point, pIdx) => (
                        <li key={pIdx} className="text-xs text-slate-400 flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-purple-400/80 mt-0.5 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Verified Certificates Grid */}
        {activeTab === 'certificates' && (
          <div>
            <div className="mb-6 p-4 rounded-xl bg-purple-950/30 border border-purple-500/20 flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-purple-400" />
                <p className="text-xs sm:text-sm text-slate-200">
                  Verified certifications earned through NxtWave's intensive CCBP 4.0 software development academy.
                </p>
              </div>
              <span className="text-xs font-mono text-purple-300">All Credentials Verified</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {CERTIFICATES.map((cert) => (
                <div
                  key={cert.id}
                  className="rounded-2xl bg-[#0d091e] border border-purple-500/15 p-5 hover:border-purple-400/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="p-2 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-400 group-hover:scale-105 transition-transform">
                        <FileText className="w-4 h-4" />
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {cert.issuer}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-purple-400/80 mb-3">{cert.date}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/40 border border-purple-500/20 text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-purple-900/20 flex items-center justify-between">
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <span>View PDF</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={cert.file}
                      download={`${cert.title}_NxtWave_Certificate.pdf`}
                      className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-purple-500/30 transition-colors"
                      aria-label={`Download ${cert.title} certificate`}
                    >
                      <Download className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
