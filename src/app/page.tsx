'use client';

import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Mic, 
  Brain, 
  Target, 
  Users, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Play
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
            <a href="#platform" className="text-sm text-zinc-400 hover:text-white transition">Platform</a>
            <a href="#services" className="text-sm text-zinc-400 hover:text-white transition">Services</a>
            <a href="#contact" className="text-sm text-zinc-400 hover:text-white transition">Contact</a>
          </div>
          <a 
            href="#contact"
            className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium rounded-lg transition"
          >
            Get Started
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
              <Zap className="w-4 h-4" />
              AI-Powered Sales Performance
            </span>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Sharpen your{' '}
            <span className="gradient-text">sales edge</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10"
          >
            AI-powered training, coaching, and live call assistance. 
            Built for sales teams that refuse to settle.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#platform" 
              className="group flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-medium rounded-lg transition glow-hover"
            >
              See the Platform
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </a>
            <a 
              href="#contact" 
              className="flex items-center gap-2 px-6 py-3 border border-zinc-700 hover:border-zinc-500 text-white font-medium rounded-lg transition"
            >
              <Play className="w-4 h-4" />
              Watch Demo
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Platform Section */}
      <section id="platform" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              The Hone Hub
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Your AI-powered command center for sales excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Live Copilot - Featured */}
            <motion.div 
              className="md:col-span-2 p-8 rounded-2xl bg-gradient-to-br from-violet-900/30 to-violet-900/10 border border-violet-500/20 glow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-violet-500/20">
                  <Mic className="w-6 h-6 text-violet-400" />
                </div>
                <span className="text-xs font-medium text-violet-400 uppercase tracking-wider">Killer Feature</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Live Copilot</h3>
              <p className="text-zinc-400 mb-6">
                Real-time AI coaching during live sales calls. Get instant prompts, objection handling 
                suggestions, and product knowledge exactly when you need it.
              </p>
              <ul className="space-y-2">
                {['Listens to live conversations', 'Surfaces relevant knowledge', 'Suggests next best actions', 'Handles objections in real-time'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-zinc-300">
                    <CheckCircle className="w-4 h-4 text-violet-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* AI Roleplay */}
            <motion.div 
              className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="p-2 rounded-lg bg-cyan-500/20 w-fit mb-4">
                <Brain className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI Roleplay</h3>
              <p className="text-zinc-400 text-sm">
                Practice sales scenarios with AI buyers. Get scored and coached on your technique.
              </p>
            </motion.div>

            {/* Post-Call Packages */}
            <motion.div 
              className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="p-2 rounded-lg bg-emerald-500/20 w-fit mb-4">
                <Target className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Post-Call Packages</h3>
              <p className="text-zinc-400 text-sm">
                Auto-generated follow-up materials tailored to each conversation.
              </p>
            </motion.div>

            {/* Knowledge Base */}
            <motion.div 
              className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="p-2 rounded-lg bg-amber-500/20 w-fit mb-4">
                <Sparkles className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI Knowledge Base</h3>
              <p className="text-zinc-400 text-sm">
                Upload your content. The AI learns your product, methodologies, and voice.
              </p>
            </motion.div>

            {/* Methodologies */}
            <motion.div 
              className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="p-2 rounded-lg bg-rose-500/20 w-fit mb-4">
                <Users className="w-6 h-6 text-rose-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">9 Sales Methodologies</h3>
              <p className="text-zinc-400 text-sm">
                SPIN, Challenger, MEDDIC, and more. Built-in frameworks for every sales style.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Beyond the Platform
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Hands-on expertise to accelerate your sales transformation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Sales Strategy & GTM',
                description: 'Market positioning, ICP definition, and go-to-market strategy designed to win.',
                items: ['Market analysis', 'Competitive positioning', 'Sales process design']
              },
              {
                title: 'Team Enablement',
                description: 'Training programs that stick. Coaching that transforms.',
                items: ['Onboarding programs', 'Skills development', 'Manager coaching']
              },
              {
                title: 'AI Integration',
                description: 'Custom AI tooling built around your specific workflows and needs.',
                items: ['Custom model training', 'Workflow automation', 'Integration support']
              },
              {
                title: 'Revenue Operations',
                description: 'Process optimization and tooling to remove friction from your pipeline.',
                items: ['CRM optimization', 'Pipeline analytics', 'Forecasting systems']
              }
            ].map((service, i) => (
              <motion.div 
                key={service.title}
                className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-zinc-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-zinc-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-violet-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to sharpen your edge?
            </h2>
            <p className="text-xl text-zinc-400">
              Let&apos;s talk about how Hone Labs can transform your sales team.
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
            Or email us directly at hello@honelabs.io
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
