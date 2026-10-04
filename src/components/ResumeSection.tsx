import { useState } from 'react';
import { FileDown, Eye, CheckCircle2, X, ExternalLink, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ResumeSection() {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  return (
    <section className="py-20 relative border-t border-purple-900/20 bg-[#06040d]/80">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        
        {/* Call to action container */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#120b29] via-[#0d091e] to-[#0a0717] border border-purple-500/25 p-8 sm:p-12 overflow-hidden shadow-2xl">
          {/* Ambient lighting */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curriculum Vitae</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight mb-4">
              Interested in working together?
            </h2>

            <p className="text-base text-slate-300 leading-relaxed mb-6">
              Download my resume to learn more about my skills, projects and development journey. Formatted specifically for ATS parsing and technical review.
            </p>

            {/* Quick checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span>React & Node.js Full-Stack Profile</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span>PostgreSQL & REST API Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span>BCA Degree & 6 NxtWave Certifications</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Ready for Junior Full Stack / MERN Roles</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={PERSONAL_INFO.resumePdf}
                download="Vijendra_Resume_ATS.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 active:scale-95 text-white font-semibold text-sm shadow-lg shadow-purple-600/30 transition-all cursor-pointer"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => setIsViewerOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#140e2b] hover:bg-[#1f153d] active:scale-95 border border-purple-500/30 hover:border-purple-400 text-purple-200 font-medium text-sm transition-all cursor-pointer"
              >
                <Eye className="w-4 h-4 text-purple-400" />
                <span>View Resume</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Embedded Resume Viewer Modal */}
      {isViewerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            onClick={() => setIsViewerOpen(false)}
          />
          <div className="relative w-full max-w-4xl h-[85vh] bg-[#0d091e] border border-purple-500/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col z-10 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between px-6 py-4 border-b border-purple-900/30 bg-[#120c29]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <h3 className="text-sm font-bold text-white">Vijendra - Resume (ATS Format)</h3>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.resumePdf}
                  download="Vijendra_Resume_ATS.pdf"
                  className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1 font-medium"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
                <a
                  href={PERSONAL_INFO.resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-300 hover:text-white flex items-center gap-1"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open in Tab</span>
                </a>
                <button
                  onClick={() => setIsViewerOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-purple-900/40 ml-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 w-full h-full bg-slate-950 p-2">
              <iframe
                src={`${PERSONAL_INFO.resumePdf}#toolbar=0`}
                title="Vijendra ATS Resume"
                className="w-full h-full rounded-lg border border-purple-500/10"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
