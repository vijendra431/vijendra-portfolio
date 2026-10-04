import { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle, ShieldAlert, Lightbulb, UserCheck, Layers } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#0d091e] border border-purple-500/25 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-purple-900/30 bg-[#120c29]/90">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-purple-300">
              {project.badge || project.category} · Project Details
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-purple-900/40 transition-colors cursor-pointer"
            aria-label="Close Project Details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-6">
          
          {/* Title & Subtitle */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              {project.badge && (
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300">
                  {project.badge}
                </span>
              )}
              {project.subtitle && (
                <span className="text-xs text-slate-400 font-medium">
                  {project.subtitle}
                </span>
              )}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Screenshot container */}
          <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-purple-500/20 bg-slate-950">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.currentTarget;
                target.src = '/assets/project-management.png';
              }}
            />
          </div>

          {/* Tech Stack Strip */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs font-semibold text-slate-400 mr-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-purple-400" />
              Technologies Used:
            </span>
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-purple-950/60 border border-purple-500/20 text-purple-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Project Overview */}
          {project.caseStudy.overview && (
            <div className="p-5 rounded-xl bg-[#120b29] border border-purple-500/15">
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-2">
                Project Overview
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.caseStudy.overview}
              </p>
            </div>
          )}

          {/* Problem & Solution 2-col Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#140e2b] border border-purple-500/15">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>The Challenge / Context</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.caseStudy.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#140e2b] border border-purple-500/15">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Lightbulb className="w-4 h-4" />
                <span>The Solution / Architecture</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Key Features Implemented */}
          <div className="p-5 rounded-xl bg-[#120b29] border border-purple-500/15">
            <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-purple-400" />
              <span>Key Features</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
              {project.caseStudy.features.map((feat, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* My Role */}
          <div className="p-5 rounded-xl bg-[#120b29] border border-purple-500/15">
            <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-purple-400" />
              <span>My Role</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.caseStudy.contribution}
            </p>
          </div>

          {/* Actions CTA Strip */}
          <div className="pt-4 border-t border-purple-900/30 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-md shadow-purple-600/30 transition-all duration-200"
                >
                  <span>{project.liveButtonLabel || 'Live Demo'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {project.ghLink && (
                <a
                  href={project.ghLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-purple-500/40 text-slate-200 text-xs font-medium transition-all duration-200"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-purple-950/30 transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
