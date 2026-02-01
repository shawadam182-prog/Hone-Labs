# Hone Labs - Code-Level Implementation Recommendations

## 1. Add Social Proof Section (Quick Win)

Add this component after the hero section:

```tsx
// src/components/SocialProof.tsx
'use client';

import { motion } from 'framer-motion';

const logos = [
  { name: 'Company 1', src: '/logos/company1.svg' },
  { name: 'Company 2', src: '/logos/company2.svg' },
  { name: 'Company 3', src: '/logos/company3.svg' },
  { name: 'Company 4', src: '/logos/company4.svg' },
  { name: 'Company 5', src: '/logos/company5.svg' },
];

export default function SocialProof() {
  return (
    <section className="py-12 px-6 border-y border-zinc-800">
      <div className="max-w-5xl mx-auto text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-zinc-500 uppercase tracking-wider mb-8"
        >
          Trusted by leading B2B startups
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-50">
          {logos.map((logo, i) => (
            <motion.img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              className="h-8 md:h-10 grayscale hover:grayscale-0 transition"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            />
          ))}
        </div>
        
        {/* Results stat */}
        <motion.div 
          className="mt-10 inline-flex items-center gap-6 px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <span className="text-2xl font-bold gradient-text">$100M+</span>
            <p className="text-xs text-zinc-500">Pipeline Built</p>
          </div>
          <div className="w-px h-10 bg-zinc-700" />
          <div className="text-center">
            <span className="text-2xl font-bold gradient-text">50+</span>
            <p className="text-xs text-zinc-500">Startups Scaled</p>
          </div>
          <div className="w-px h-10 bg-zinc-700" />
          <div className="text-center">
            <span className="text-2xl font-bold gradient-text">4.9★</span>
            <p className="text-xs text-zinc-500">Client Rating</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

---

## 2. Improved Hero Headline

Replace the current hero copy in `page.tsx`:

```tsx
<motion.h1 
  variants={fadeInUp}
  className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
>
  Stop Losing{' '}
  <span className="gradient-text">Deals</span>
  <br />
  to Bad Process
</motion.h1>

<motion.p 
  variants={fadeInUp}
  className="text-xl text-zinc-400 max-w-2xl mx-auto mb-4"
>
  Fractional sales leadership for B2B startups.
</motion.p>

<motion.p 
  variants={fadeInUp}
  className="text-lg text-zinc-500 max-w-xl mx-auto mb-10"
>
  We've helped 50+ companies build $100M+ in pipeline — without the $300K+ 
  cost of a full-time sales leader.
</motion.p>
```

---

## 3. Add Calendly/Scheduling Widget

Update `ContactForm.tsx` to include calendar booking:

```tsx
// Add to ContactForm.tsx - import Cal.com widget or Calendly
import { useEffect } from 'react';

// Add inside ContactForm component
useEffect(() => {
  // Cal.com embed script
  (function (C, A, L) {
    let p = function (a, ar) { a.q.push(ar); };
    let d = C.document;
    C.Cal = C.Cal || function () {
      let cal = C.Cal;
      let ar = arguments;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        d.head.appendChild(d.createElement("script")).src = A;
        cal.loaded = true;
      }
      if (ar[0] === L) {
        const api = function () { p(api, arguments); };
        const namespace = ar[1];
        api.q = api.q || [];
        typeof namespace === "string" ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar);
        return;
      }
      p(cal, ar);
    };
  })(window, "https://app.cal.com/embed/embed.js", "init");
  Cal("init");
}, []);

// Add quick-book option above form
<div className="mb-6 text-center">
  <button
    data-cal-link="honelabs/revenue-audit"
    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-violet-600 hover:bg-violet-500 text-white font-medium rounded-lg transition"
  >
    <Calendar className="w-5 h-5" />
    Book a Free 30-Min Revenue Audit
  </button>
  <p className="text-zinc-500 text-sm mt-2">Or fill out the form below</p>
</div>
```

---

## 4. Add Testimonials Component

```tsx
// src/components/Testimonials.tsx
'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Hone Labs transformed our sales process in 8 weeks. Our close rate went from 12% to 28%.",
    author: "Sarah Chen",
    title: "CEO, TechStartup",
    avatar: "/avatars/sarah.jpg"
  },
  {
    quote: "Best investment we made during our Series A. Worth every penny.",
    author: "Marcus Johnson",
    title: "Founder, SaaSCo",
    avatar: "/avatars/marcus.jpg"
  },
  {
    quote: "Finally, sales leadership that understands how modern startups work.",
    author: "Elena Rodriguez",
    title: "VP Sales, GrowthCorp",
    avatar: "/avatars/elena.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Founders Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              className="p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Quote className="w-8 h-8 text-violet-500/30 mb-4" />
              <p className="text-zinc-300 mb-6">{t.quote}</p>
              <div className="flex items-center gap-3">
                <img 
                  src={t.avatar} 
                  alt={t.author}
                  className="w-10 h-10 rounded-full bg-zinc-700"
                />
                <div>
                  <p className="font-medium text-white">{t.author}</p>
                  <p className="text-sm text-zinc-500">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 5. Add FAQ Section

```tsx
// src/components/FAQ.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "What's the difference between fractional and full-time sales leadership?",
    a: "Fractional means you get experienced sales leadership (typically VP/Director level) for a fraction of the time and cost. You get the expertise when you need it — usually 10-20 hours per week — without the $250K+ annual commitment of a full-time executive."
  },
  {
    q: "How quickly can you start?",
    a: "We can typically kick off within 1-2 weeks of signing. The first week is usually focused on diagnostics — understanding your current state, pipeline, team, and tools."
  },
  {
    q: "What size companies do you work with?",
    a: "We specialize in B2B startups from Seed to Series C, typically with $500K-$20M ARR. Our sweet spot is companies that have product-market fit but need to scale their sales motion."
  },
  {
    q: "Do you replace our existing sales team?",
    a: "No — we work alongside your team. We coach, train, and build processes. We're here to make your existing team (or help you hire the right one) more effective."
  },
  {
    q: "What's included in Hone Hub?",
    a: "Hone Hub is our AI-powered sales enablement platform. It includes training modules, your custom playbook, coaching tools, and team analytics. It's included with all engagements."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="rounded-xl border border-zinc-800 overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full p-5 flex items-center justify-between text-left hover:bg-zinc-900/50 transition"
              >
                <span className="font-medium text-white pr-4">{faq.q}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-zinc-400 transition-transform ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-5 pb-5 text-zinc-400">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 6. Fix Tailwind Dynamic Color Classes

The current code uses dynamic class names like `bg-${service.color}-500/20` which won't work with Tailwind's JIT compiler. Fix by using explicit class mappings:

```tsx
// In page.tsx services section

const colorClasses: Record<string, { bg: string; text: string }> = {
  violet: { bg: 'bg-violet-500/20', text: 'text-violet-400' },
  cyan: { bg: 'bg-cyan-500/20', text: 'text-cyan-400' },
  emerald: { bg: 'bg-emerald-500/20', text: 'text-emerald-400' },
  amber: { bg: 'bg-amber-500/20', text: 'text-amber-400' },
  rose: { bg: 'bg-rose-500/20', text: 'text-rose-400' },
  purple: { bg: 'bg-purple-500/20', text: 'text-purple-400' },
};

// Then use:
<div className={`p-2 rounded-lg ${colorClasses[service.color].bg} w-fit mb-4`}>
  <service.icon className={`w-6 h-6 ${colorClasses[service.color].text}`} />
</div>
```

---

## 7. Improve Meta Tags for SEO

Update `layout.tsx`:

```tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://honelabs.io'),
  title: {
    default: "Hone Labs | Fractional Sales Leadership for B2B Startups",
    template: "%s | Hone Labs"
  },
  description: "Stop losing deals to bad process. Fractional sales leadership that's helped 50+ startups build $100M+ in pipeline. Get a free revenue audit.",
  keywords: [
    "fractional sales leader",
    "fractional CRO",
    "sales consultancy",
    "B2B sales process",
    "startup sales leadership",
    "GTM strategy",
    "revenue operations",
    "sales enablement",
    "MEDDPICC training"
  ],
  authors: [{ name: "Hone Labs" }],
  creator: "Hone Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://honelabs.io",
    siteName: "Hone Labs",
    title: "Hone Labs | Fractional Sales Leadership for B2B Startups",
    description: "Stop losing deals to bad process. Fractional sales leadership that's helped 50+ startups build $100M+ in pipeline.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hone Labs - Fractional Sales Leadership"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Hone Labs | Fractional Sales Leadership for B2B Startups",
    description: "Stop losing deals to bad process. Get a free revenue audit.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add when available
    // google: 'your-google-verification-code',
  },
};
```

---

## 8. Add Structured Data

Create `src/app/structured-data.tsx`:

```tsx
export function WebsiteSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Hone Labs",
          "url": "https://honelabs.io",
          "logo": "https://honelabs.io/logo.png",
          "description": "Fractional sales leadership for B2B startups",
          "email": "hello@honelabs.io",
          "sameAs": [
            "https://linkedin.com/company/honelabs",
            "https://twitter.com/honelabs"
          ],
          "offers": {
            "@type": "Offer",
            "name": "Fractional Sales Leadership",
            "description": "Part-time sales leadership for B2B startups"
          }
        })
      }}
    />
  );
}

export function ServiceSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Sales Consulting",
          "provider": {
            "@type": "Organization",
            "name": "Hone Labs"
          },
          "areaServed": "Worldwide",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Sales Leadership Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "GTM Strategy"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Fractional Sales Leadership"
                }
              }
            ]
          }
        })
      }}
    />
  );
}
```

---

## 9. Performance Optimizations

```tsx
// In page.tsx - lazy load video
import dynamic from 'next/dynamic';

const PlatformSection = dynamic(
  () => import('@/components/PlatformSection'),
  { 
    loading: () => <div className="h-screen bg-zinc-900 animate-pulse" />,
    ssr: false 
  }
);

// In PlatformSection.tsx - add video lazy loading
<video
  ref={videoRef}
  className="w-full aspect-video"
  controls
  muted
  loop
  playsInline
  preload="none" // Changed from metadata
  poster="/video-poster.jpg" // Add poster image
>
```

---

## 10. Accessibility Improvements

```tsx
// Add to globals.css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

// Update text colors for better contrast
// Change zinc-400 to zinc-300 for body text
// Ensure at least 4.5:1 contrast ratio

// Add skip link in layout.tsx
<a 
  href="#main-content" 
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-violet-600 focus:text-white focus:rounded-lg"
>
  Skip to main content
</a>

// Add id to main
<main id="main-content" className="min-h-screen...">
```

---

## Summary: Quick Wins Implementation Order

1. **Day 1:** Fix hero copy (headline change is 5 minutes)
2. **Day 1:** Add social proof section (stats only, no logos needed initially)
3. **Day 2:** Fix Tailwind color classes
4. **Day 2:** Add FAQ section
5. **Day 3:** Improve meta tags and add structured data
6. **Day 3:** Add testimonials (can use placeholder data initially)
7. **Week 2:** Add calendar scheduling integration
8. **Week 2:** Performance optimizations
9. **Ongoing:** Collect real testimonials and logos
