import { useState } from 'react';
import { Mail, Linkedin, Github, Send, Copy, Check, Sparkles, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate smooth submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-purple-900/20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Let's Build Something Together
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Have a project in mind, an open Junior Full Stack / MERN developer role, or want to connect? Reach out anytime.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Quick Email Copy Box */}
            <div className="rounded-2xl bg-[#0d091e] border border-purple-500/20 p-6 shadow-lg relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-950/70 border border-purple-500/30 text-purple-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                      Direct Email
                    </h3>
                    <p className="text-sm sm:text-base font-bold text-white font-mono mt-0.5">
                      {PERSONAL_INFO.email}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-purple-900/30">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/30 text-xs font-medium text-purple-300 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied to clipboard!' : 'Copy Email Address'}</span>
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center justify-center py-2 px-4 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-sm transition-colors"
                >
                  Send Email
                </a>
              </div>
            </div>

            {/* Social Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#0d091e] border border-purple-500/15 hover:border-purple-400/40 hover:bg-[#130d29] transition-all group"
              >
                <div className="p-2 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-400 w-fit mb-3 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                  LinkedIn
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Connect on LinkedIn for opportunities & networking
                </p>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#0d091e] border border-purple-500/15 hover:border-purple-400/40 hover:bg-[#130d29] transition-all group"
              >
                <div className="p-2 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-400 w-fit mb-3 group-hover:scale-105 transition-transform">
                  <Github className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                  GitHub
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Check out repositories, code commits & contributions
                </p>
              </a>
            </div>

            {/* Location & Availability Note */}
            <div className="p-5 rounded-2xl bg-[#0c081a] border border-purple-500/10 text-xs text-slate-400 flex items-start gap-3">
              <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-slate-200 font-medium">{PERSONAL_INFO.location}</p>
                <p className="mt-0.5 text-slate-400">Available for remote roles or on-site opportunities across India.</p>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0d091e] border border-purple-500/20 p-6 sm:p-8 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2">Send a Message</h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out the form below and I will respond to your inquiry promptly.
              </p>

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Thank you! Your message was sent. I will get back to you shortly at {formData.email || 'your email'}.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-semibold text-slate-300">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#140e2b] border border-purple-500/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/25 transition-all"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-semibold text-slate-300">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#140e2b] border border-purple-500/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/25 transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-xs font-semibold text-slate-300">
                    Subject / Role Opportunity
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    placeholder="e.g. Junior Full Stack Developer Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#140e2b] border border-purple-500/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/25 transition-all"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-semibold text-slate-300">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Tell me about your team, project, or what you are looking for..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#140e2b] border border-purple-500/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/25 transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-purple-600 hover:bg-purple-500 active:scale-95 text-white font-semibold text-sm shadow-lg shadow-purple-600/30 transition-all cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'submitting' ? 'Sending Message...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
