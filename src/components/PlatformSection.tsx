'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Mic,
  Brain,
  BookOpen,
  FileText,
  Layers,
  Sparkles,
  ArrowRight,
  Play,
  Zap,
  Shield,
  CheckCircle,
  ExternalLink,
  Radio,
  Target,
  Users
} from 'lucide-react';

// Animated particle/orb component
const FloatingOrb = ({ delay = 0, size = 300, color = 'violet', top, left, right, bottom }: {
  delay?: number;
  size?: number;
  color?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}) => (
  <motion.div
    className={`absolute rounded-full pointer-events-none`}
    style={{
      width: size,
      height: size,
      top,
      left,
      right,
      bottom,
      background: color === 'violet' 
        ? 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(139,92,246,0) 70%)'
        : color === 'cyan'
        ? 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, rgba(6,182,212,0) 70%)'
        : 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, rgba(236,72,153,0) 70%)',
      filter: 'blur(40px)',
    }}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.5, 0.8, 0.5],
      x: [0, 30, 0],
      y: [0, -20, 0],
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

// Animated grid lines
const AnimatedGrid = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div 
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
    />
    {/* Animated scan line */}
    <motion.div
      className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500/30 to-transparent"
      animate={{ top: ['-10%', '110%'] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
    />
  </div>
);

// Feature card with glass morphism
const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  gradient,
  index 
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Hover glow effect */}
      <div className={`absolute -inset-0.5 ${gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500`} />
      
      <div className="relative p-6 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 h-full overflow-hidden">
        {/* Background shimmer */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
        />
        
        {/* Icon container */}
        <div className={`relative p-3 rounded-xl ${gradient} w-fit mb-4`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-200 transition-colors">
          {title}
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

// Animated mockup of the Hone Hub UI
const HoneHubMockup = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['Copilot', 'Roleplay', 'Playbooks'];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab(prev => (prev + 1) % tabs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Glow behind mockup */}
      <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/20 via-cyan-500/20 to-violet-600/20 rounded-3xl blur-2xl opacity-60" />
      
      {/* Main mockup container */}
      <div className="relative rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl">
        {/* Top bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="px-4 py-1 rounded-full bg-slate-700/50 text-xs text-zinc-400 flex items-center gap-2">
              <Shield className="w-3 h-3" />
              the-hone-hub.vercel.app
            </div>
          </div>
        </div>

        {/* Tab navigation */}
        <div className="flex gap-1 p-2 bg-slate-800/30">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === i 
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/25' 
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content area */}
        <div className="p-6 min-h-[280px]">
          <AnimatePresence mode="wait">
            {activeTab === 0 && (
              <motion.div
                key="copilot"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {/* Live indicator */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/20 border border-red-500/30">
                    <Radio className="w-3 h-3 text-red-400 animate-pulse" />
                    <span className="text-xs font-medium text-red-400">LIVE</span>
                  </div>
                  <span className="text-xs text-zinc-500">Call in progress • 12:34</span>
                </div>
                
                {/* AI Coaching prompt */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-violet-500/20">
                      <Sparkles className="w-4 h-4 text-violet-400" />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-300 font-medium mb-1">AI Suggestion</p>
                      <p className="text-sm text-zinc-400">"Great discovery! Now probe deeper on their decision timeline..."</p>
                    </div>
                  </div>
                </div>

                {/* Transcript snippet */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-500/30 flex items-center justify-center text-xs text-blue-300">P</div>
                    <p className="text-xs text-zinc-400">"We need to solve this by Q2..."</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-green-500/30 flex items-center justify-center text-xs text-green-300">Y</div>
                    <p className="text-xs text-zinc-400">"Tell me more about that timeline..."</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 1 && (
              <motion.div
                key="roleplay"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-medium text-white">AI Roleplay Session</h4>
                  <span className="px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs">Active</span>
                </div>
                
                <div className="p-4 rounded-xl bg-slate-800/50 border border-white/5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Skeptical CFO</p>
                      <p className="text-xs text-zinc-500">MEDDPICC Discovery</p>
                    </div>
                  </div>
                  <p className="text-sm text-zinc-400 italic">"I've seen solutions like this before. What makes you different?"</p>
                </div>

                <div className="flex items-center gap-2">
                  <button className="flex-1 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium flex items-center justify-center gap-2 transition-colors">
                    <Mic className="w-4 h-4" /> Respond
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm transition-colors">
                    Hint
                  </button>
                </div>
              </motion.div>
            )}

            {activeTab === 2 && (
              <motion.div
                key="playbooks"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                <h4 className="text-sm font-medium text-white mb-4">Your Playbooks</h4>
                
                {[
                  { title: 'Discovery Framework', icon: Target, color: 'violet' },
                  { title: 'Objection Handling', icon: Shield, color: 'cyan' },
                  { title: 'Closing Techniques', icon: CheckCircle, color: 'emerald' },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-white/5 hover:border-white/10 transition-all cursor-pointer group"
                  >
                    <div className={`p-2 rounded-lg bg-${item.color}-500/20`}>
                      <item.icon className={`w-4 h-4 text-${item.color}-400`} />
                    </div>
                    <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">{item.title}</span>
                    <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 ml-auto transition-colors" />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

// Methodology badge component
const MethodologyBadge = ({ name, delay }: { name: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    whileHover={{ scale: 1.05, y: -2 }}
    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-400 hover:text-white hover:border-violet-500/30 hover:bg-violet-500/10 transition-all cursor-default"
  >
    {name}
  </motion.div>
);

// Main Platform Section Component
export default function PlatformSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Mic,
      title: 'Live Copilot',
      description: 'Real-time AI coaching during your calls. Get prompts, objection handlers, and discovery questions — exactly when you need them.',
      gradient: 'bg-gradient-to-br from-violet-600 to-violet-500',
    },
    {
      icon: Brain,
      title: 'AI Roleplay',
      description: 'Practice against AI personas that push back, challenge, and prepare you for any scenario. Get better before the real thing.',
      gradient: 'bg-gradient-to-br from-cyan-600 to-cyan-500',
    },
    {
      icon: BookOpen,
      title: 'Knowledge Hub',
      description: 'All your playbooks, battlecards, and scripts in one searchable place. Ask questions in natural language.',
      gradient: 'bg-gradient-to-br from-emerald-600 to-emerald-500',
    },
    {
      icon: FileText,
      title: 'Post-Call Packages',
      description: 'Automated follow-up generation. Turn call insights into personalized proposals, summaries, and next steps.',
      gradient: 'bg-gradient-to-br from-amber-600 to-amber-500',
    },
    {
      icon: Layers,
      title: '9 Methodologies Built-In',
      description: 'SPICED, MEDDPICC, Challenger, SPIN, and more — all integrated into coaching and roleplay sessions.',
      gradient: 'bg-gradient-to-br from-rose-600 to-rose-500',
    },
    {
      icon: Users,
      title: 'Team Analytics',
      description: 'See skill gaps, track improvement, and coach smarter with insights across your entire team.',
      gradient: 'bg-gradient-to-br from-purple-600 to-purple-500',
    },
  ];

  const methodologies = [
    'MEDDPICC', 'SPICED', 'BANT', 'Challenger', 'SPIN', 
    'Gap Selling', 'Value Selling', 'Sandler', 'Solution Selling'
  ];

  return (
    <section 
      id="platform" 
      ref={sectionRef}
      className="relative py-24 px-6 overflow-hidden"
    >
      {/* Background effects */}
      <AnimatedGrid />
      <FloatingOrb delay={0} size={500} color="violet" top="-10%" left="-10%" />
      <FloatingOrb delay={2} size={400} color="cyan" top="30%" right="-5%" />
      <FloatingOrb delay={4} size={350} color="pink" bottom="10%" left="20%" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm mb-6"
          >
            <Zap className="w-4 h-4" />
            Included in Select Engagements
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Strategy{' '}
            <span className="relative">
              <span className="gradient-text">+ System</span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
          </h2>

          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            We don&apos;t just advise — we equip.{' '}
            <span className="text-white font-medium">Meet Hone Hub</span>, 
            the AI-powered platform that makes your sales transformation stick.
          </p>
        </motion.div>

        {/* Two-column layout: Features + Mockup */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Feature cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <FeatureCard key={feature.title} {...feature} index={i} />
            ))}
          </div>

          {/* Interactive mockup */}
          <div className="lg:pl-8">
            <HoneHubMockup />
          </div>
        </div>

        {/* Platform Video Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              See the Platform in Action
            </h3>
            <p className="text-zinc-400">
              A quick tour of what Hone Hub can do for your team
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Video glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/20 via-cyan-500/20 to-violet-600/20 rounded-3xl blur-2xl opacity-60" />
            
            {/* Video container */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/90">
              <video
                className="w-full aspect-video"
                controls
                poster="/hone-hub-poster.jpg"
                preload="metadata"
              >
                <source src="/hone-hub-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </motion.div>

        {/* Methodologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm text-zinc-500 uppercase tracking-wider mb-4">
            Powered by proven methodologies
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {methodologies.map((method, i) => (
              <MethodologyBadge key={method} name={method} delay={i * 0.05} />
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://the-hone-hub.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-medium rounded-lg transition-all glow-hover"
          >
            Explore Hone Hub
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 border border-zinc-700 hover:border-violet-500/50 hover:bg-violet-500/5 text-white font-medium rounded-lg transition-all"
          >
            <Play className="w-4 h-4" />
            See It In Action
          </a>
        </motion.div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-zinc-500 text-sm">
            Hone Hub is available exclusively to Hone Labs clients.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
