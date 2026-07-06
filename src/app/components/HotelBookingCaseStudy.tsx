/* ══════════════════════════════════════════════
   PLP REDESIGN — Standalone Case Study
   ══════════════════════════════════════════════ */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Maximize2 } from 'lucide-react';
import { ImageModal } from './ImageModal';

import imgProfile     from '../../imports/PlpCaseStudy-1/9f30649eede553c2ea9b8579694f8facc6f62c5b.png';
import imgBefore      from '../../imports/PlpCaseStudy-1/654db3b667fffd1dbdb8d3e34287ea1fdadd28c3.png';
import imgAfter       from '../../imports/PlpCaseStudy-1/509339891ecefb92f89a0b55b5abf8911d440c45.png';
import imgAnnotated   from '../../imports/PlpCaseStudy-1/12bf371372f25d982d45dd3a7de3e1cdbc81674c.png';
import imgCoreInsight from '../../imports/PlpCaseStudy-1/b5bbccc8b428d556225e99a6734a45a13b56a217.png';
import imgD1Compare   from '../../imports/PlpCaseStudy-1/0f4c1ac173ef696f6e568fe744741225708d4506.png';
import imgD2Compare   from '../../imports/PlpCaseStudy-1/56b2e6d49e5d284ea8de6cb817523f97d40c996f.png';
import imgD2Filter    from '../../imports/PlpCaseStudy-1/59a47b81476d6fa4c47b9ba1f2a40b5fc7c6bc80.png';
import imgD3Compare   from '../../imports/PlpCaseStudy-1/795afe6d8913f80d66dadd672bee861ae403b832.png';
import imgD3Hierarchy from '../../imports/PlpCaseStudy-1/be9e35ac5f8636240caec97676acc784d1e4b57b.png';
import imgD4Compare   from '../../imports/PlpCaseStudy-1/2394e4c0d28d07670e840ad4ef43e04372c7769d.png';
import imgFinal       from '../../imports/PlpCaseStudy-1/55995c0e84f8a0ae47a47527ab3d64b998c48580.png';

/* ─── Design tokens ─── */
const glass =
  'bg-white/55 dark:bg-white/6 backdrop-blur-2xl ' +
  'border border-white/70 dark:border-white/12 ' +
  'shadow-[0_8px_32px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.90)] ' +
  'dark:shadow-[0_8px_32px_rgba(0,0,0,0.30),inset_0_1px_0_rgba(255,255,255,0.06)]';

const glassSubtle =
  'bg-white/40 dark:bg-white/4 backdrop-blur-xl ' +
  'border border-white/60 dark:border-white/10';

/* ══════════════════════════════════════════════
   IMAGE PRIMITIVES
   Two separate components — tall mockups vs. wide
   diagrams have completely different sizing rules.
══════════════════════════════════════════════ */

/**
 * PhoneShot — for tall mobile mockups.
 * Sizing is HEIGHT-based, because phone mockups are ~9:19.
 * Never taller than the cap. Width flows from natural aspect.
 */
type PhoneSize = 'xs' | 'sm' | 'md' | 'lg';
const PHONE_HEIGHTS: Record<PhoneSize, string> = {
  xs: 'h-[180px] sm:h-[200px]',        // hero row / core-insight side thumbnail
  sm: 'h-[220px] sm:h-[240px]',        // secondary
  md: 'h-[260px] sm:h-[300px]',        // primary phone shot
  lg: 'h-[300px] sm:h-[340px]',        // final result / feature
};

function PhoneShot({
  src,
  alt,
  size = 'md',
  caption,
  className = '',
}: {
  src: string;
  alt: string;
  size?: PhoneSize;
  caption?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <figure className={`flex flex-col items-center ${className}`}>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group relative inline-block rounded-xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          aria-label={`Enlarge: ${alt}`}
        >
          <img
            src={src}
            alt={alt}
            loading="lazy"
            draggable={false}
            className={`${PHONE_HEIGHTS[size]} w-auto object-contain block transition-transform duration-300 group-hover:scale-[1.02]`}
          />
          <span className="absolute top-1.5 right-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-7 h-7 rounded-full bg-black/55 backdrop-blur-md flex items-center justify-center pointer-events-none">
            <Maximize2 className="w-3.5 h-3.5 text-white" />
          </span>
        </button>
        {caption && (
          <figcaption className="mt-2 text-[11px] text-gray-500 dark:text-gray-500 text-center leading-snug max-w-[280px]">
            {caption}
          </figcaption>
        )}
      </figure>
      <ImageModal isOpen={open} onClose={() => setOpen(false)} imageSrc={src} imageAlt={alt} />
    </>
  );
}

/**
 * DiagramShot — for wide comparison graphics and annotated diagrams.
 * Sizing is WIDTH-based, since these are inherently landscape/wide.
 * Natural aspect preserved, never cropped, capped max width.
 */
type DiagramSize = 'sm' | 'md' | 'lg';
const DIAGRAM_MAX_W: Record<DiagramSize, string> = {
  sm: 'max-w-[280px] sm:max-w-[340px]',
  md: 'max-w-[380px] sm:max-w-[460px]',
  lg: 'max-w-[440px] sm:max-w-[520px]',
};

function DiagramShot({
  src,
  alt,
  size = 'md',
  caption,
  className = '',
}: {
  src: string;
  alt: string;
  size?: DiagramSize;
  caption?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <figure className={`flex flex-col items-center ${className}`}>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={`group relative block w-full ${DIAGRAM_MAX_W[size]} rounded-xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500`}
          aria-label={`Enlarge: ${alt}`}
        >
          <img
            src={src}
            alt={alt}
            loading="lazy"
            draggable={false}
            className="w-full h-auto object-contain block transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <span className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-7 h-7 rounded-full bg-black/55 backdrop-blur-md flex items-center justify-center pointer-events-none">
            <Maximize2 className="w-3.5 h-3.5 text-white" />
          </span>
        </button>
        {caption && (
          <figcaption className="mt-2 text-[11px] text-gray-500 dark:text-gray-500 text-center leading-snug max-w-md">
            {caption}
          </figcaption>
        )}
      </figure>
      <ImageModal isOpen={open} onClose={() => setOpen(false)} imageSrc={src} imageAlt={alt} />
    </>
  );
}

/* ══════════════════════════════════════════════
   LAYOUT PRIMITIVES
══════════════════════════════════════════════ */

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="mb-5 sm:mb-7">
      <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-400 mb-2">
        {eyebrow}
      </p>
      <h2 className="text-[22px] sm:text-[28px] md:text-[32px] font-bold text-gray-900 dark:text-white leading-[1.15] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 sm:mt-3 text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </header>
  );
}

function RowLabel({ text, tone = 'muted' }: { text: string; tone?: 'muted' | 'success' }) {
  const color =
    tone === 'success'
      ? 'text-emerald-600 dark:text-emerald-400'
      : 'text-gray-500 dark:text-gray-400';
  return (
    <p className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] ${color} mb-1.5`}>
      {text}
    </p>
  );
}

/* ══════════════════════════════════════════════
   CONTENT COMPONENTS
══════════════════════════════════════════════ */

function Finding({ num, text }: { num: number; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: num * 0.05 }}
      className={`${glassSubtle} rounded-2xl px-4 sm:px-5 py-4 flex items-start gap-4 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/55 dark:hover:bg-white/8`}
    >
      <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-500 text-white font-bold text-sm flex items-center justify-center shadow-md">
        {num}
      </span>
      <p className="text-[15px] text-gray-800 dark:text-gray-100 leading-relaxed pt-0.5">
        {text}
      </p>
    </motion.div>
  );
}

function Hypothesis({ num, ifText, thenText }: { num: string; ifText: string; thenText: string }) {
  return (
    <div className={`${glass} rounded-2xl p-4 sm:p-5`}>
      <span className="inline-block bg-gradient-to-br from-violet-500 to-indigo-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-lg mb-3">
        {num}
      </span>
      <div className="flex flex-col sm:flex-row gap-3 sm:items-stretch">
        <div className={`${glassSubtle} rounded-xl px-4 py-3 sm:py-4 flex-1`}>
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400 mb-1">
            If
          </p>
          <p className="text-[15px] text-gray-800 dark:text-gray-100 leading-snug">
            {ifText}
          </p>
        </div>
        <div className="flex items-center justify-center text-amber-500 dark:text-amber-400 -my-1 sm:my-0 sm:-mx-1">
          <span className="text-xl font-bold rotate-90 sm:rotate-0" aria-hidden>→</span>
        </div>
        <div className="rounded-xl px-4 py-3 sm:py-4 flex-1 bg-amber-50/60 dark:bg-amber-500/8 border border-amber-300/40 dark:border-amber-400/20">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-amber-600 dark:text-amber-400 mb-1">
            Then
          </p>
          <p className="text-[15px] text-gray-900 dark:text-amber-100 leading-snug">
            {thenText}
          </p>
        </div>
      </div>
    </div>
  );
}

function Decision({
  num,
  title,
  problem,
  insight,
  decision,
  outcome,
  stat,
  children,
}: {
  num: string;
  title: string;
  problem: string;
  insight: string;
  decision: string;
  outcome: string;
  stat?: { before: string; after: string; badge: string };
  children?: React.ReactNode;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45 }}
      className={`${glass} rounded-2xl sm:rounded-3xl overflow-hidden`}
    >
      <div className="px-5 sm:px-6 py-5 border-b border-white/50 dark:border-white/10 flex items-start gap-4">
        <span className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 text-white font-bold text-base sm:text-lg flex items-center justify-center shadow-md">
          {num}
        </span>
        <div className="min-w-0 pt-0.5">
          <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-violet-600 dark:text-violet-400 mb-0.5">
            Decision {num}
          </p>
          <h3 className="text-[17px] sm:text-[19px] font-bold text-gray-900 dark:text-white leading-snug">
            {title}
          </h3>
        </div>
      </div>

      <div className="px-5 sm:px-6 py-5 space-y-5">
        <div>
          <RowLabel text="Problem" />
          <p className="text-[15px] text-gray-700 dark:text-gray-200 leading-relaxed">{problem}</p>
        </div>
        <div>
          <RowLabel text="Insight" />
          <p className="text-[15px] text-gray-700 dark:text-gray-200 leading-relaxed">{insight}</p>
        </div>
        <div>
          <RowLabel text="Design Decision" />
          <p className="text-[15px] text-gray-700 dark:text-gray-200 leading-relaxed">{decision}</p>
        </div>
        <div>
          <RowLabel text="Outcome" tone="success" />
          <p className="text-[15px] text-gray-800 dark:text-gray-100 leading-relaxed">{outcome}</p>
        </div>
      </div>

      {children && (
        <div className="px-5 sm:px-6 pb-5 pt-1">
          {children}
        </div>
      )}

      {stat && (
        <div className="mx-5 sm:mx-6 mb-5">
          <StatStrip before={stat.before} after={stat.after} badge={stat.badge} />
        </div>
      )}
    </motion.article>
  );
}

function StatStrip({ before, after, badge }: { before: string; after: string; badge: string }) {
  return (
    <div className="relative rounded-2xl border-l-2 border-emerald-500 bg-emerald-50/40 dark:bg-emerald-500/8 backdrop-blur-md px-4 sm:px-5 py-4">
      <div className="flex items-center justify-between gap-3 sm:gap-4 flex-wrap">
        <div className="text-center flex-1 min-w-[110px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400 mb-0.5">Before</p>
          <p className="text-sm sm:text-[15px] font-semibold text-gray-800 dark:text-gray-100 leading-tight">{before}</p>
        </div>
        <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg" aria-hidden>→</span>
        <div className="text-center flex-1 min-w-[110px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-600 dark:text-emerald-400 mb-0.5">After</p>
          <p className="text-sm sm:text-[15px] font-semibold text-gray-900 dark:text-emerald-50 leading-tight">{after}</p>
        </div>
      </div>
      <div className="mt-3 flex justify-center">
        <span className="inline-block bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 text-[11px] font-bold px-2.5 py-0.5 rounded-lg">
          {badge}
        </span>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════ */
export function HotelBookingCaseStudy() {
  return (
    <div className="w-full max-w-3xl mx-auto space-y-12 sm:space-y-16">

      {/* ─── HERO ─── */}
      <section>
        <div className={`${glass} rounded-3xl overflow-hidden`}>
          {/* Author */}
          <div className="flex items-center gap-3 px-5 sm:px-6 py-4 border-b border-white/50 dark:border-white/10">
            <img
              src={imgProfile}
              alt="Arsham Khayatzadeh"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover flex-shrink-0 border-2 border-white/80 dark:border-white/20 shadow-sm"
              draggable={false}
            />
            <div className="min-w-0">
              <p className="text-sm sm:text-base font-bold text-gray-900 dark:text-white truncate">
                Arsham Khayatzadeh
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                Product Designer · IranHotel Co.
              </p>
            </div>
          </div>

          {/* Title */}
          <div className="px-5 sm:px-8 py-6 sm:py-8 border-b border-white/50 dark:border-white/10 text-center">
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-400 mb-2">
              Case Study
            </p>
            <h1 className="text-[24px] sm:text-[32px] md:text-[40px] font-bold text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-2">
              Hotel Booking Experience Redesign
            </h1>
            <p className="text-[15px] sm:text-base text-gray-600 dark:text-gray-400 font-medium">
              Designing a faster, more confident mobile PLP
            </p>
          </div>

          {/* Before / After — height-capped phones */}
          <div className="px-5 sm:px-8 py-6 sm:py-8 border-b border-white/50 dark:border-white/10">
            <div className="flex items-start justify-center gap-4 sm:gap-8">
              <div className="flex flex-col items-center">
                <p className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.18em] text-rose-500 mb-2">
                  Before
                </p>
                <PhoneShot src={imgBefore} alt="Original hotel listing page — before redesign" size="xs" />
              </div>
              <span className="text-emerald-500 text-xl sm:text-2xl font-bold self-center pt-6" aria-hidden>
                →
              </span>
              <div className="flex flex-col items-center">
                <p className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.18em] text-emerald-600 mb-2">
                  After
                </p>
                <PhoneShot src={imgAfter} alt="Redesigned hotel listing page — after redesign" size="xs" />
              </div>
            </div>
          </div>

          {/* Meta grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {[
              { label: 'Role', value: 'Product Designer' },
              { label: 'Timeline', value: '2 months' },
              { label: 'Company', value: 'IranHotel' },
              { label: 'Team', value: 'PM · PO · 2 Devs · QA' },
            ].map(({ label, value }, i) => (
              <div
                key={label}
                className={`px-4 sm:px-5 py-4 ${i > 0 ? 'border-l border-white/50 dark:border-white/10' : ''} ${i >= 2 ? 'sm:border-t-0 border-t border-white/50 dark:border-white/10' : ''} ${i === 2 ? 'sm:border-l border-white/50 dark:border-white/10' : ''}`}
              >
                <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400 mb-1">
                  {label}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white leading-snug">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROBLEM ─── */}
      <section>
        <SectionHeader
          eyebrow="Problem"
          title="Optimized for showcase, not comparison."
          subtitle="The existing PLP spotlighted individual hotels rather than helping users compare alternatives. Users needed more scrolling, more memory, and more effort before deciding."
        />
        <div className={`${glass} rounded-2xl sm:rounded-3xl p-5 sm:p-6`}>
          <DiagramShot
            src={imgAnnotated}
            alt="Annotated original PLP with 4 friction points labelled"
            size="md"
            caption="Four friction points identified through session recordings and moderated usability testing. Tap to enlarge."
          />
        </div>
      </section>

      {/* ─── KEY FINDINGS ─── */}
      <section>
        <SectionHeader
          eyebrow="Research"
          title="What the research told us."
          subtitle="Behavioural analytics via Microsoft Clarity + moderated usability tests with 5 participants."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Finding num={1} text="Users compare hotels rather than evaluate them individually" />
          <Finding num={2} text="Only one hotel was visible per viewport" />
          <Finding num={3} text="Refinement actions were separated from exploration" />
          <Finding num={4} text="Visual emphasis did not match decision priorities" />
        </div>
      </section>

      {/* ─── CORE INSIGHT ─── */}
      <section>
        <SectionHeader eyebrow="Core Insight" title="Reframing the problem." />
        <div className={`${glass} rounded-2xl sm:rounded-3xl overflow-hidden`}>
          <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-0 items-center">
            <div className="flex justify-center p-6 sm:pr-3">
              <PhoneShot src={imgCoreInsight} alt="Original PLP viewport — one hotel visible" size="xs" />
            </div>
            <div className="px-6 pb-8 sm:py-8 sm:pr-8 text-center sm:text-left">
              <p className="text-[15px] font-light text-gray-500 dark:text-gray-400 leading-relaxed">
                the PLP was not failing at
              </p>
              <p className="text-[28px] sm:text-[36px] md:text-[44px] font-extrabold text-rose-500 dark:text-rose-400 leading-[1.05] my-1">
                Discovery!
              </p>
              <p className="text-[15px] font-light text-gray-500 dark:text-gray-400 leading-relaxed mt-3">
                It was failing at
              </p>
              <p className="text-[28px] sm:text-[36px] md:text-[44px] font-extrabold text-emerald-600 dark:text-emerald-400 leading-[1.05] mt-1">
                Decision Making
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HYPOTHESIS ─── */}
      <section>
        <SectionHeader
          eyebrow="Hypothesis"
          title="Four testable bets."
          subtitle="Each bet targets a specific finding — so we could validate or kill it after launch."
        />
        <div className="space-y-3 sm:space-y-4">
          <Hypothesis num="H1" ifText="If users can see more hotels per viewport," thenText="then comparison efficiency will increase." />
          <Hypothesis num="H2" ifText="If refinement controls remain visible," thenText="then users will adjust results more frequently." />
          <Hypothesis num="H3" ifText="If hierarchy reflects decision priorities," thenText="then evaluation speed will improve." />
          <Hypothesis num="H4" ifText="If distractions are reduced," thenText="then users will remain focused on booking." />
        </div>
      </section>

      {/* ─── SOLUTION ─── */}
      <section>
        <SectionHeader
          eyebrow="Solution"
          title="Four decisions. One goal: faster comparison."
          subtitle="Each decision maps directly to a specific failure mode in the original experience — no cosmetic changes."
        />

        <div className="space-y-5 sm:space-y-6">
          <Decision
            num="1"
            title="Increasing comparison efficiency"
            problem="Only one hotel card was visible within a single mobile viewport. Large imagery and excessive vertical spacing reduced comparison efficiency and increased scrolling effort."
            insight="Hotel booking is a comparison-heavy task. Users evaluate multiple alternatives before committing, making visible comparison points more valuable than large imagery."
            decision="Redesigned the hotel card structure to surface more decision-critical information while reducing the vertical footprint of each result."
            outcome="Users can compare more options with fewer interactions — faster evaluation, less decision friction."
            stat={{ before: '1 hotel visible', after: '3 hotels visible', badge: '≈ 300% more hotels per viewport' }}
          >
            <DiagramShot
              src={imgD1Compare}
              alt="Before and after — information density"
              size="lg"
              caption="Same viewport, three times the comparison surface."
            />
          </Decision>

          <Decision
            num="2"
            title="A persistent refinement layer"
            problem="Refinement actions were fragmented across the experience. Filters and map exploration lacked a persistent location, increasing effort during discovery."
            insight="Users continuously refine results while browsing. Refinement tools should remain visible throughout exploration, not be treated as secondary actions."
            decision="Introduced a dedicated refinement layer beneath the search area, consolidating filtering, sorting, map exploration, and quick filters into a single persistent zone."
            outcome="Reduced friction during refinement. Comparison tools stay accessible without interrupting the browsing flow."
            stat={{ before: 'Search → Results', after: 'Search → Refine → Results', badge: 'New mental model' }}
          >
            <div className="space-y-4">
              <DiagramShot
                src={imgD2Compare}
                alt="Before and after — filter accessibility"
                size="lg"
                caption="Refinement always visible — no modal required."
              />
              <DiagramShot
                src={imgD2Filter}
                alt="Persistent filter layer detail"
                size="lg"
                caption="Quick filters, sort, and map consolidated into one zone."
              />
            </div>
          </Decision>

          <Decision
            num="3"
            title="Prioritizing decision-critical signals"
            problem="Hierarchy within hotel cards did not reflect how users evaluate alternatives. Price and rating — the primary decision signals — were visually subordinate to hotel imagery."
            insight="Users scan hotel cards for price, then rating, then location. Visual hierarchy matching this scan order reduces cognitive effort and speeds comparison."
            decision="Restructured card layout to surface price and rating at the top of the scan path, repositioning imagery as supporting context rather than the primary attention driver."
            outcome="Faster per-card evaluation. Users reach decision-critical information without reordering their scan path."
            stat={{ before: 'Image-first', after: 'Price / rating-first', badge: 'Matches user scan order' }}
          >
            <div className="space-y-4">
              <DiagramShot
                src={imgD3Compare}
                alt="Before and after — card hierarchy"
                size="lg"
                caption="Signal hierarchy rebuilt around how users actually scan."
              />
              <DiagramShot
                src={imgD3Hierarchy}
                alt="New card hierarchy: price, rating, location, image"
                size="md"
                caption="1 · Price   2 · Rating   3 · Location   4 · Image"
              />
            </div>
          </Decision>

          <Decision
            num="4"
            title="Reducing navigation distraction"
            problem="The persistent footer navigation stayed visible throughout the listing experience, providing exit paths (Home, Support, Reservation Tracking) that competed with the booking task."
            insight="Users in discovery mode should not be offered exit paths that compete with the primary task. Off-task navigation creates decision points that interrupt momentum."
            decision="Removed Home, Support, and Reservation Tracking from the PLP view. Booking Focus became the sole persistent action."
            outcome="Users remain focused on the booking flow. The listing page functions as a decision environment, not a navigation hub."
            stat={{ before: '4 exit paths', after: '1 focused action', badge: 'Funnel-clean navigation' }}
          >
            <DiagramShot
              src={imgD4Compare}
              alt="Before and after — navigation distraction removed"
              size="lg"
              caption="Non-booking exits removed — the page becomes a decision environment."
            />
          </Decision>
        </div>
      </section>

      {/* ─── FINAL RESULT ─── */}
      <section>
        <SectionHeader
          eyebrow="Final Result"
          title="The redesigned PLP."
          subtitle="Persistent filters · denser cards · decision-first hierarchy · funnel-clean navigation."
        />
        <div className={`${glass} rounded-3xl p-6 sm:p-8 flex justify-center`}>
          <PhoneShot
            src={imgFinal}
            alt="Final redesigned hotel listing page"
            size="md"
            caption="Tap to enlarge — the finished redesign in production."
          />
        </div>
      </section>

    </div>
  );
}
