'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  FileText,
  Layers,
  ExternalLink,
  Play,
  Users,
  Compass,
  Package,
  GitBranch,
  ListChecks,
  Search,
  Handshake,
  Swords,
  ShieldCheck,
  Mail,
  UserCircle,
  Hexagon,
  GraduationCap,
  Brain,
  Mic,
  ChevronDown,
  BarChart3,
  Target,
  Calendar,
  Lightbulb,
  Zap,
  MessageSquare,
  Radio
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

// Hone Hub Logo/Wordmark component
const HoneHubWordmark = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-violet-500/10 via-cyan-500/10 to-violet-500/10 border border-violet-500/20 mb-8"
  >
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-xl blur-sm opacity-60" />
      <div className="relative p-2 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500">
        <Hexagon className="w-5 h-5 text-white" />
      </div>
    </div>
    <div className="flex flex-col">
      <span className="text-xs text-zinc-500 uppercase tracking-wider leading-none">Powered by</span>
      <span className="text-lg font-bold bg-gradient-to-r from-violet-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent leading-tight">
        The Hone Hub
      </span>
    </div>
  </motion.div>
);

// Accordion Section Data Types
interface AccordionSubItem {
  icon?: React.ElementType;
  title: string;
  description?: string;
}

interface AccordionSectionData {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  gradient: string;
  items: AccordionSubItem[];
}

// Accordion Section Component
const AccordionSection = ({ 
  section, 
  isOpen, 
  onToggle,
  index 
}: { 
  section: AccordionSectionData;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) => {
  const Icon = section.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      {/* Hover glow effect */}
      <div className={`absolute -inset-0.5 ${section.gradient} rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500 pointer-events-none`} />
      
      <div className="relative rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
        {/* Header - Clickable */}
        <button
          onClick={onToggle}
          className="w-full p-5 flex items-center gap-4 text-left transition-colors"
        >
          {/* Icon container */}
          <div className={`p-3 rounded-xl ${section.gradient} shrink-0`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-white group-hover:text-violet-200 transition-colors">
              {section.title}
            </h3>
            <p className="text-sm text-zinc-400 truncate">
              {section.subtitle}
            </p>
          </div>

          {/* Expand/Collapse icon */}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="shrink-0"
          >
            <ChevronDown className="w-5 h-5 text-zinc-400" />
          </motion.div>
        </button>

        {/* Expandable Content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 pt-1">
                <div className="border-t border-white/5 pt-4">
                  <div className="grid gap-2">
                    {section.items.map((item, i) => {
                      const ItemIcon = item.icon;
                      return (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                        >
                          {ItemIcon && (
                            <div className="p-1.5 rounded-lg bg-white/10 shrink-0">
                              <ItemIcon className="w-4 h-4 text-violet-300" />
                            </div>
                          )}
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-white">{item.title}</p>
                            {item.description && (
                              <p className="text-xs text-zinc-400 mt-0.5">{item.description}</p>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// Autoplay video on scroll component - HERO VERSION
const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(() => {
          // Autoplay may be blocked by browser, that's ok
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <motion.div 
      ref={containerRef} 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative max-w-5xl mx-auto"
    >
      {/* Video glow effect - larger for hero */}
      <div className="absolute -inset-6 bg-gradient-to-r from-violet-600/30 via-cyan-500/30 to-violet-600/30 rounded-3xl blur-3xl opacity-70" />
      
      {/* Video container */}
      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/90">
        {/* Play badge */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/10">
          <Play className="w-3 h-3 text-violet-400" />
          <span className="text-xs font-medium text-white">Platform Demo</span>
        </div>
        
        <video
          ref={videoRef}
          className="w-full aspect-video"
          controls
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/hone-hub-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
  const [openSection, setOpenSection] = useState<string | null>(null);

  // Accordion sections data
  const accordionSections: AccordionSectionData[] = [
    {
      id: 'training',
      icon: GraduationCap,
      title: 'Training Academy',
      subtitle: '7 Modules • 39 Interactive Lessons',
      gradient: 'bg-gradient-to-br from-violet-600 to-violet-500',
      items: [
        { icon: BookOpen, title: '7 Modules covering core sales skills' },
        { icon: Layers, title: '39 Interactive lessons' },
        { icon: Target, title: 'Progress tracking & quizzes' },
        { icon: MessageSquare, title: 'AI-generated audio summaries' },
      ],
    },
    {
      id: 'playbook',
      icon: FileText,
      title: 'Playbook',
      subtitle: '10 Modules • Your Single Source of Truth',
      gradient: 'bg-gradient-to-br from-cyan-600 to-cyan-500',
      items: [
        { icon: Compass, title: 'Mission & Values' },
        { icon: Package, title: 'Portfolio Overview' },
        { icon: GitBranch, title: 'Sales Methodology' },
        { icon: ListChecks, title: 'Sales Process' },
        { icon: Search, title: 'Discovery Framework' },
        { icon: Handshake, title: 'Mutual Success Plan' },
        { icon: Swords, title: 'Competitor Battlecards' },
        { icon: ShieldCheck, title: 'Objection Handling' },
        { icon: Mail, title: 'Outreach Scripts' },
        { icon: UserCircle, title: 'ICP & Personas' },
      ],
    },
    {
      id: 'coaching',
      icon: Brain,
      title: 'Coaching',
      subtitle: 'AI-Powered Practice & Real-Time Guidance',
      gradient: 'bg-gradient-to-br from-emerald-600 to-emerald-500',
      items: [
        { icon: BarChart3, title: 'Skill Gap Analysis', description: 'Identify where reps need work' },
        { icon: Zap, title: 'Test Me', description: 'Quick-fire knowledge quizzes' },
        { icon: Mic, title: 'AI Roleplay', description: 'Practice against AI personas' },
        { icon: Radio, title: 'Live Copilot', description: 'Real-time guidance during calls' },
      ],
    },
    {
      id: 'team',
      icon: Users,
      title: 'Team Management',
      subtitle: 'Performance Tracking & Manager Tools',
      gradient: 'bg-gradient-to-br from-amber-600 to-amber-500',
      items: [
        { icon: Users, title: 'Team Dashboard', description: 'See performance across all reps' },
        { icon: Calendar, title: 'Daily Plans', description: 'Assign focus areas and tasks' },
        { icon: BarChart3, title: 'Analytics', description: 'Track improvement over time' },
        { icon: Lightbulb, title: 'Manager Insights', description: 'Coaching recommendations' },
      ],
    },
  ];

  const handleToggle = (sectionId: string) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

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
          {/* Hone Hub Wordmark/Branding */}
          <HoneHubWordmark />

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

          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Your entire sales playbook, embedded in an AI-powered platform.
            Every rep gets instant access to the knowledge they need — exactly when they need it.
          </p>
        </motion.div>

        {/* Accordion Sections - 2 column grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {accordionSections.map((section, i) => (
            <AccordionSection
              key={section.id}
              section={section}
              isOpen={openSection === section.id}
              onToggle={() => handleToggle(section.id)}
              index={i}
            />
          ))}
        </div>

        {/* Hero Video Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-3">
              See the Platform in Action
            </h3>
            <p className="text-zinc-400 text-lg">
              Watch how Hone Hub transforms your sales team's performance
            </p>
          </motion.div>
          
          <HeroVideo />
        </div>

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
            href="https://honehub.app"
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
            Book a Demo
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
