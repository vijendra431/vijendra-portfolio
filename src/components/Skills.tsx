import { useState } from 'react';
import { Layout, Server, Database, Wrench, CheckCircle } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend':
        return <Layout className="w-5 h-5 text-purple-400" />;
      case 'Backend':
        return <Server className="w-5 h-5 text-indigo-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-purple-300" />;
      case 'Tools & Technologies':
        return <Wrench className="w-5 h-5 text-fuchsia-400" />;
      default:
        return <CheckCircle className="w-5 h-5 text-purple-400" />;
    }
  };

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.category)];

  const displayedCategories =
    activeCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative border-t border-purple-900/20 bg-[#06040d]/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Skills & Core Technologies
          </h2>
          <p className="mt-3 text-base text-slate-400">
            A focused stack honed through full-stack projects, real-world development, and certified engineering programs.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5 p-1 bg-[#0f0b20] border border-purple-500/20 rounded-xl max-w-lg mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-purple-950/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedCategories.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl bg-[#0d091e] border border-purple-500/15 p-6 hover:border-purple-400/40 hover:purple-glow-sm transition-all duration-300 group"
            >
              {/* Category Title Header */}
              <div className="flex items-center justify-between pb-4 border-b border-purple-900/30 mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-950/70 border border-purple-500/30 group-hover:scale-110 transition-transform">
                    {getCategoryIcon(group.category)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">{group.category}</h3>
                    <p className="text-xs text-slate-400">{group.description}</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-purple-400 bg-purple-950/50 px-2 py-0.5 rounded border border-purple-500/20">
                  {group.skills.length} skills
                </span>
              </div>

              {/* Skills Items Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-[#130d29]/60 border border-purple-500/10 hover:border-purple-400/40 hover:bg-[#1a1238] transition-all duration-200 flex flex-col justify-between group/item"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover/item:scale-125 transition-transform" />
                      <span className="text-[10px] font-mono text-purple-400/80 uppercase tracking-wider">
                        {skill.level}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-slate-200 group-hover/item:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Developer Philosophy note */}
        <div className="mt-12 text-center text-xs text-slate-400 max-w-xl mx-auto">
          <span>* Dedicated to foundational web standards, modular component design, clean REST APIs, and honest skill representation.</span>
        </div>

      </div>
    </section>
  );
}
