import { useState } from 'react';
import { ExternalLink, Github, BookOpen, Sparkles, FolderGit2, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import CaseStudyModal from './CaseStudyModal';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Real-World Client Project' | 'Full Stack' | 'React Apps'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = ['All', 'Real-World Client Project', 'Full Stack', 'React Apps'] as const;

  // The featured spotlight project is Dr Nayak's Dental
  const spotlightProject = PROJECTS.find((p) => p.id === 'dr-nayak-dental') || PROJECTS[0];

  const filteredProjects =
    selectedFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => {
          if (selectedFilter === 'Real-World Client Project') {
            return p.category === 'Real-World Client Project' || p.category === 'Client Work';
          }
          return p.category === selectedFilter;
        });

  return (
    <section id="projects" className="py-24 relative border-t border-purple-900/20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span>Production Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-2 text-base text-slate-400 max-w-xl">
              Real-world client websites, full-stack applications, and responsive React platforms with verified source code.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#0f0b20] border border-purple-500/20 rounded-xl">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedFilter === filter
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-purple-950/40'
                }`}
              >
                {filter === 'All' ? 'All Projects' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SPECIAL PROMINENT SPOTLIGHT: Real-World Client Project (Dr Nayak's Dental) */}
        {/* ========================================================================= */}
        {(selectedFilter === 'All' || selectedFilter === 'Real-World Client Project') && spotlightProject && (
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-amber-400/90 bg-amber-950/30 border border-amber-500/30 px-3 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Featured Real-World Project
              </span>
            </div>

            <article className="rounded-3xl bg-gradient-to-br from-[#120a2b] via-[#0d091e] to-[#090615] border border-purple-500/30 hover:border-purple-400/50 p-6 sm:p-8 lg:p-10 shadow-2xl purple-glow transition-all duration-300 group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                
                {/* LEFT: Large website screenshot with hover zoom */}
                <div className="lg:col-span-7">
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-950 border border-purple-500/25 shadow-xl group/img">
                    <img
                      src={spotlightProject.image}
                      alt={`${spotlightProject.title} Website Screenshot`}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500 ease-out"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.src = '/assets/dental-clinic.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d091e] via-[#0d091e]/15 to-transparent opacity-60 group-hover/img:opacity-40 transition-opacity" />
                    
                    {/* Live overlay tag */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#080514]/90 border border-purple-500/40 text-purple-300 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Live Client Website
                      </span>
                    </div>

                    {/* Secondary thumbnail preview pill */}
                    {spotlightProject.secondaryImage && (
                      <div className="absolute bottom-4 right-4 z-10 hidden sm:block">
                        <div className="w-24 h-16 rounded-lg overflow-hidden border border-purple-500/40 shadow-lg bg-black/60 backdrop-blur-sm">
                          <img
                            src={spotlightProject.secondaryImage}
                            alt="Clinic Reception"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* RIGHT: Project Details */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full">
                  <div>
                    {/* Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-2.5">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-purple-950/80 border border-purple-500/40 text-purple-300">
                        {spotlightProject.badge || 'Real-World Client Project'}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight mb-1 group-hover:text-purple-300 transition-colors">
                      {spotlightProject.title}
                    </h3>
                    <p className="text-xs text-purple-400 font-medium mb-3">
                      {spotlightProject.subtitle || 'Dental Clinic Website | Real-World Client Project'}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {spotlightProject.description}
                    </p>

                    {/* Key features checklist */}
                    <div className="space-y-1.5 mb-5 text-xs text-slate-300">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span>Interactive appointment booking & clinic information</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span>Comprehensive dental procedures & treatments catalogue</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span>Google Maps integration for Raichur, Karnataka location</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span>Direct telephone call & floating WhatsApp contact actions</span>
                      </div>
                    </div>

                    {/* Tech stack badges */}
                    <div className="mb-6">
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                        Technologies Used:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {spotlightProject.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#180f33] border border-purple-500/25 text-purple-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-purple-900/30">
                    <a
                      href={spotlightProject.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 active:scale-95 text-white font-semibold text-xs shadow-lg shadow-purple-600/30 transition-all cursor-pointer"
                    >
                      <span>Live Website</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>

                    <a
                      href={spotlightProject.ghLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-purple-500/40 text-slate-200 font-medium text-xs transition-all cursor-pointer"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>

                    <button
                      onClick={() => setSelectedProject(spotlightProject)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-purple-300 hover:text-white transition-colors cursor-pointer ml-auto"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Project Details</span>
                    </button>
                  </div>

                </div>

              </div>
            </article>
          </div>
        )}

        {/* ========================================================================= */}
        {/* ALL PROJECTS GRID                                                         */}
        {/* ========================================================================= */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              <span>Project Catalog ({filteredProjects.length})</span>
            </h3>
            <span className="text-xs text-slate-400 font-mono">
              Click any card for full architecture case study
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="rounded-2xl bg-[#0d091e] border border-purple-500/15 hover:border-purple-400/40 flex flex-col justify-between overflow-hidden group shadow-lg hover:shadow-purple-900/10 transition-all duration-300"
              >
                <div>
                  {/* Media Container with Zoom & Quick Overlay */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 border-b border-purple-900/20">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.src = '/assets/project-management.png';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d091e] via-[#0d091e]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Category Pill on top left */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-[#0b071a]/85 border border-purple-500/30 text-purple-300 backdrop-blur-md">
                        {project.isRealWorldClientProject && <Sparkles className="w-3 h-3 text-amber-400" />}
                        {project.badge || project.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Area */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors mb-2">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.techStack.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-950/40 border border-purple-500/20 text-purple-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 5 && (
                        <span className="text-[11px] font-mono px-1.5 py-0.5 text-slate-400">
                          +{project.techStack.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions Bar */}
                <div className="p-5 sm:p-6 pt-0 border-t border-purple-900/20 mt-4 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 py-1.5 transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Project Details</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.ghLink && (
                      <a
                        href={project.ghLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub repository`}
                        className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-purple-500/40 text-slate-400 hover:text-white transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} Live Website`}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-purple-600/90 hover:bg-purple-600 text-white text-xs font-semibold shadow-sm transition-colors"
                      >
                        <span>{project.liveButtonLabel || 'Live Demo'}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* GitHub repository CTA banner */}
        <div className="mt-14 p-6 rounded-2xl bg-[#0d091e] border border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-400">
              <FolderGit2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">More Projects on GitHub</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Explore repository branches, commit histories, and code architectures at github.com/vijendra431.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/vijendra431"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-purple-950/60 hover:bg-purple-900/70 border border-purple-500/30 text-purple-200 text-xs font-semibold whitespace-nowrap transition-colors"
          >
            Visit GitHub Profile
          </a>
        </div>

      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
