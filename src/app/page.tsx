'use client';

import { motion } from 'framer-motion';
import { 
  Sparkles, 
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
  Phone
} from 'lucide-react';
import ContactForm from '@/components/ContactForm';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] noise grid-pattern">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Hone Labs</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-zinc-400 hover:text-white transition">Services</a>
            <a href="#approach" className="text-sm text-zinc-400 hover:text-white transition">Approach</a>
            <a href="#contact" className="text-sm text-zinc-400 hover:text-white transition">Contact</a>
          </div>
          <a 
            href="#contact"
            className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium rounded-lg transition"
          >
            Let&apos;s Talk
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-violet-600/20 rounded-full blur-[120px] pointer-events-none" />
        
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

      {/* Problem Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-zinc-300 leading-relaxed">
              <span className="text-white font-semibold">Hiring a VP of Sales is expensive and risky.</span>{' '}
              You need someone who&apos;s built revenue engines before, but a bad hire sets you back 12+ months. 
              We give you that senior expertise — strategy, process, coaching — without the six-figure salary and long ramp time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Approach Section */}
      <section id="approach" className="py-24 px-6 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              How We Work
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Embedded with your team, not observing from the sidelines
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Diagnose',
                description: 'We audit your current state — pipeline, process, people, tools. No assumptions, just data.'
              },
              {
                step: '02',
                title: 'Design',
                description: 'We build the playbook — strategy, process, metrics. Clear deliverables, not vague recommendations.'
              },
              {
                step: '03',
                title: 'Deploy',
                description: 'We implement alongside your team. Training, coaching, iteration until it sticks.'
              }
            ].map((phase, i) => (
              <motion.div 
                key={phase.step}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-6xl font-bold text-violet-500/20 mb-4">{phase.step}</div>
                <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                <p className="text-zinc-400">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Flexible Engagement
            </h2>
            <p className="text-xl text-zinc-400">
              From quick fixes to embedded leadership
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div 
              className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Calendar className="w-8 h-8 text-violet-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Project-Based</h3>
              <p className="text-zinc-400 mb-4">
                Specific deliverables with a clear scope. GTM strategy, sales process redesign, hiring sprint.
              </p>
              <p className="text-sm text-zinc-500">Typical: 4-12 weeks</p>
            </motion.div>

            <motion.div 
              className="p-8 rounded-2xl bg-gradient-to-br from-violet-900/30 to-violet-900/10 border border-violet-500/20 glow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Phone className="w-8 h-8 text-violet-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Fractional Leadership</h3>
              <p className="text-zinc-400 mb-4">
                Part-time sales leadership embedded with your team. Strategy, coaching, accountability — without the full-time cost.
              </p>
              <p className="text-sm text-violet-300">Typical: 2-4 days/month ongoing</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6 bg-zinc-900/30">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s talk about your revenue
            </h2>
            <p className="text-xl text-zinc-400">
              No pitch deck. Just a conversation about where you are and where you want to be.
            </p>
          </motion.div>

          <motion.div
            className="max-w-2xl mx-auto p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <ContactForm />
          </motion.div>

          <p className="text-zinc-500 text-sm text-center mt-6">
            Or email directly at hello@honelabs.io
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-medium text-white">Hone Labs</span>
          </div>
          <p className="text-zinc-500 text-sm">
            © 2026 Hone Labs. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
