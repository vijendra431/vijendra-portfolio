import { useState, useEffect } from 'react';
import { Github, ExternalLink, GitBranch, GitCommit, Star, Code, Activity } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

export default function GitHubSection() {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [totalContributions, setTotalContributions] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch GitHub contribution data using public contribution endpoint
    const fetchContributions = async () => {
      try {
        const res = await fetch('https://github-contributions-api.jogruber.de/v4/vijendra431?y=last');
        if (res.ok) {
          const data = await res.json();
          if (data && data.contributions) {
            setContributions(data.contributions.slice(-112)); // last 16 weeks
            setTotalContributions(data.total?.[Object.keys(data.total)[0]] || data.contributions.reduce((acc: number, c: any) => acc + c.count, 0));
          }
        }
      } catch (err) {
        // Fallback gracefully without breaking UI
        console.warn('GitHub contributions API unreachable, using visual rhythm view');
      } finally {
        setIsLoading(false);
      }
    };

    fetchContributions();
  }, []);

  const pinnedRepos = [
    {
      name: 'project-management',
      desc: 'Full-stack task and project management suite with React, Node.js, Express & PostgreSQL.',
      tech: 'React / Node.js / PostgreSQL',
      link: 'https://github.com/vijendra431/project-management',
    },
    {
      name: 'jobbys-app',
      desc: 'Job hunt web application with authentication, salary filters, and responsive UI.',
      tech: 'React / Express / REST API',
      link: 'https://github.com/vijendra431/jobbys-app',
    },
    {
      name: 'nxtWatchApp',
      desc: 'Responsive video streaming portal with light/dark theme toggle and video player.',
      tech: 'React.js / Context API',
      link: 'https://github.com/vijendra431/nxtWatchApp',
    },
    {
      name: 'IPL-dash-board',
      desc: 'Interactive IPL team statistics and match timeline analytics application.',
      tech: 'React / React Router',
      link: 'https://github.com/vijendra431/IPL-dash-board',
    },
  ];

  return (
    <section className="py-20 relative border-t border-purple-900/20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span>Open Source Activity</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              GitHub Repositories & Activity
            </h2>
            <p className="mt-2 text-base text-slate-400 max-w-xl">
              Consistent code commits, open-source repositories, and full-stack architectures on GitHub.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-md shadow-purple-600/30 transition-all self-start sm:self-auto"
          >
            <Github className="w-4 h-4" />
            <span>View GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* GitHub Activity Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Contribution Heatmap Preview Card (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0d091e] border border-purple-500/15 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-purple-900/30 mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-950/70 border border-purple-500/30 text-purple-400">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      Code Contribution Rhythm
                    </h3>
                    <p className="text-xs text-slate-400">
                      @vijendra431 activity calendar
                    </p>
                  </div>
                </div>

                {totalContributions !== null && (
                  <span className="text-xs font-mono text-purple-300 bg-purple-950/60 px-2.5 py-1 rounded border border-purple-500/30">
                    {totalContributions} contributions
                  </span>
                )}
              </div>

              {/* Heatmap Grid */}
              <div className="py-2">
                {isLoading ? (
                  <div className="h-28 flex items-center justify-center text-xs text-slate-400 font-mono">
                    Loading activity timeline...
                  </div>
                ) : contributions.length > 0 ? (
                  <div className="overflow-x-auto pb-2">
                    <div className="grid grid-rows-7 grid-flow-col gap-1.5 w-max">
                      {contributions.map((c, i) => {
                        const getColor = (level: number) => {
                          if (level === 0) return 'bg-[#150f2b]';
                          if (level === 1) return 'bg-purple-900/60';
                          if (level === 2) return 'bg-purple-700/80';
                          if (level === 3) return 'bg-purple-500';
                          return 'bg-purple-400';
                        };
                        return (
                          <div
                            key={i}
                            title={`${c.date}: ${c.count} contribution${c.count === 1 ? '' : 's'}`}
                            className={`w-3 h-3 rounded-sm ${getColor(c.level)} transition-transform hover:scale-125`}
                          />
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-[#140e2b] border border-purple-500/10 text-xs text-slate-300 leading-relaxed">
                    Active GitHub profile with verified repositories in React, Node.js, Express.js, and PostgreSQL. Direct code and pull requests accessible at{' '}
                    <a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:underline"
                    >
                      github.com/vijendra431
                    </a>.
                  </div>
                )}

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-4">
                  <span>Less activity</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm bg-[#150f2b]" />
                    <span className="w-2.5 h-2.5 rounded-sm bg-purple-900/60" />
                    <span className="w-2.5 h-2.5 rounded-sm bg-purple-700/80" />
                    <span className="w-2.5 h-2.5 rounded-sm bg-purple-500" />
                    <span className="w-2.5 h-2.5 rounded-sm bg-purple-400" />
                  </div>
                  <span>More activity</span>
                </div>
              </div>
            </div>

            {/* Profile link */}
            <div className="mt-5 pt-4 border-t border-purple-900/20 flex items-center justify-between">
              <span className="text-xs text-slate-400">Regular developer commits</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-purple-400 hover:text-purple-300 inline-flex items-center gap-1"
              >
                <span>Browse Repos</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Pinned Repositories List (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {pinnedRepos.map((repo) => (
              <a
                key={repo.name}
                href={repo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-xl bg-[#0d091e] border border-purple-500/15 hover:border-purple-400/40 hover:bg-[#130d29] transition-all group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <GitBranch className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold text-white group-hover:text-purple-300 font-mono">
                      {repo.name}
                    </span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-white" />
                </div>
                <p className="text-[12px] text-slate-300 line-clamp-2 leading-snug mb-2">
                  {repo.desc}
                </p>
                <span className="text-[10px] font-mono text-purple-400/90 bg-purple-950/40 px-2 py-0.5 rounded border border-purple-500/20">
                  {repo.tech}
                </span>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
