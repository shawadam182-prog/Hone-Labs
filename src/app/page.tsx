'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target, 
  Users, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Briefcase,
  LineChart,
  Lightbulb,
  Rocket,
  Calendar,
  Phone,
  Menu,
  X
} from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import Logo from '@/components/Logo';
import PlatformSection from '@/components/PlatformSection';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0a0a0f] noise grid-pattern">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Logo white />
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-zinc-400 hover:text-white transition">Services</a>
            <a href="#approach" className="text-sm text-zinc-400 hover:text-white transition">Approach</a>
            <a href="#platform" className="text-sm text-zinc-400 hover:text-white transition">Platform</a>
            <a href="#contact" className="text-sm text-zinc-400 hover:text-white transition">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href="#contact"
              className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium rounded-lg transition"
            >
              Let&apos;s Talk
            </a>
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-white transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-white/5"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                <a 
                  href="#services" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base text-zinc-400 hover:text-white transition py-2"
                >
                  Services
                </a>
                <a 
                  href="#approach" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base text-zinc-400 hover:text-white transition py-2"
                >
                  Approach
                </a>
                <a 
                  href="#platform" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base text-zinc-400 hover:text-white transition py-2"
                >
                  Platform
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base text-zinc-400 hover:text-white transition py-2"
                >
                  Contact
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Full Width Video Banner */}
      <section className="relative pt-16 w-full bg-[#020617]">
        <div className="w-full aspect-video max-h-[70vh]">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-contain"
          >
            <source src="/hone-labs-hero.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Hero Content Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/20 rounded-full blur-[120px] pointer-events-none" />
        
        <motion.div 
          className="max-w-5xl mx-auto text-center relative z-10"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm">
              <Briefcase className="w-4 h-4" />
              Fractional Sales Leadership
            </span>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Sales expertise,{' '}
            <span className="gradient-text">on demand</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10"
          >
            Senior sales leadership without the full-time commitment. 
            We help startups and scale-ups build, fix, and accelerate their revenue engines.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact" 
              className="group flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-medium rounded-lg transition glow-hover"
            >
              Book a Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </a>
            <a 
              href="#services" 
              className="flex items-center gap-2 px-6 py-3 border border-zinc-700 hover:border-zinc-500 text-white font-medium rounded-lg transition"
            >
              See How We Help
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              What We Do
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Hands-on sales leadership, not PowerPoint consultants
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:gap-8">
            {[
              {
                icon: Target,
                color: 'violet',
                title: 'GTM Strategy',
                description: 'Market positioning, ICP definition, pricing, and go-to-market playbooks that actually work.',
                items: ['Market & competitive analysis', 'Ideal customer profiling', 'Pricing & packaging strategy']
              },
              {
                icon: Users,
                color: 'cyan',
                title: 'Team Building',
                description: 'Hire the right people, structure the team correctly, and build a culture that wins.',
                items: ['Hiring & interview frameworks', 'Team structure design', 'Comp plan architecture']
              },
              {
                icon: LineChart,
                color: 'emerald',
                title: 'Sales Process',
                description: 'From lead to close — we design and implement processes that scale.',
                items: ['Pipeline methodology', 'Stage definitions & exit criteria', 'Forecasting systems']
              },
              {
                icon: Lightbulb,
                color: 'amber',
                title: 'Coaching & Enablement',
                description: 'Upskill your team with proven frameworks, not generic training.',
                items: ['1:1 rep coaching', 'Deal review & strategy', 'Onboarding programs']
              },
              {
                icon: TrendingUp,
                color: 'rose',
                title: 'Revenue Operations',
                description: 'Fix the leaky bucket. Clean data, clear reporting, actionable insights.',
                items: ['CRM optimization', 'Pipeline analytics', 'Tech stack audit']
              },
              {
                icon: Rocket,
                color: 'purple',
                title: 'AI-Enhanced Selling',
                description: 'Integrate AI into your sales workflow — not gimmicks, real productivity gains.',
                items: ['AI tool selection', 'Workflow automation', 'Custom sales AI tools']
              }
            ].map((service, i) => (
              <motion.div 
                key={service.title}
                className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={`p-2 rounded-lg bg-${service.color}-500/20 w-fit mb-4`}>
                  <service.icon className={`w-6 h-6 text-${service.color}-400`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-zinc-400 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-zinc-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-violet-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work + Engagement - Combined & Compact */}
      <section id="approach" className="py-12 px-6 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Process Steps */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">How We Work</h2>
              <div className="space-y-4">
                {[
                  { step: '01', title: 'Diagnose', desc: 'Audit pipeline, process, people, tools.' },
                  { step: '02', title: 'Design', desc: 'Build strategy, process, metrics.' },
                  { step: '03', title: 'Deploy', desc: 'Implement with training & coaching.' },
                ].map((phase) => (
                  <div key={phase.step} className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-violet-500/40">{phase.step}</span>
                    <div>
                      <h3 className="font-bold text-white">{phase.title}</h3>
                      <p className="text-sm text-zinc-400">{phase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Engagement Options */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white mb-6">Engagement Options</h2>
              <div className="p-5 rounded-xl bg-zinc-800/50 border border-zinc-700">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-5 h-5 text-violet-400" />
                  <h3 className="font-bold text-white">Project-Based</h3>
                  <span className="text-xs text-zinc-500 ml-auto">4-12 weeks</span>
                </div>
                <p className="text-sm text-zinc-400">GTM strategy, sales process redesign, hiring sprint.</p>
              </div>
              <div className="p-5 rounded-xl bg-violet-900/20 border border-violet-500/30">
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="w-5 h-5 text-violet-400" />
                  <h3 className="font-bold text-white">Fractional Leadership</h3>
                  <span className="text-xs text-violet-300 ml-auto">Ongoing</span>
                </div>
                <p className="text-sm text-zinc-400">Part-time sales leadership. Strategy, coaching, accountability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <PlatformSection />

      {/* CTA Section - Compact */}
      <section id="contact" className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Let&apos;s talk revenue
              </h2>
              <p className="text-zinc-400 mb-4">
                No pitch deck. Just a conversation about where you are and where you want to be.
              </p>
              <p className="text-zinc-500 text-sm">
                Or email: <a href="mailto:hello@honelab.pro" className="text-violet-400 hover:text-violet-300 transition">hello@honelab.pro</a>
              </p>
            </div>
            <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="py-6 px-6 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo white className="scale-75" />
          <p className="text-zinc-500 text-sm">
            © 2026 Hone Labs. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
