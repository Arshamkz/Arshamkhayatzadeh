import { Check } from 'lucide-react';

// Import PNG images from Figma export - PlpRedesignCaseStudy-2
import imgBefore from '../../imports/PlpRedesignCaseStudy-2/2052927d41f827f905c138fca855f422f6ed0951.png';
import imgAfter from '../../imports/PlpRedesignCaseStudy-2/00a7a9a331e489f5fd5a1e312f2b45cc4db9a6c9.png';
import imgAnnotated from '../../imports/PlpRedesignCaseStudy-2/92a6359cf2161151b019fa58df2fb6ec0f8a9a4d.png';
import imgInsight from '../../imports/PlpRedesignCaseStudy-2/bfaacd8374e4fdead9f0242e54311598d356ae2a.png';
import imgSolutionBefore from '../../imports/PlpRedesignCaseStudy-2/a4c7c0692c625f8012ed18034d08c43ff0c7b0dc.png';
import imgSolutionAfter from '../../imports/PlpRedesignCaseStudy-2/fcd7192ea6c47f285c0c03f9ea3b09cbbcbf8ef2.png';
import imgOutcome from '../../imports/PlpRedesignCaseStudy-2/b6859f210e4afa065a1916e13502bd16a8ce44be.png';

// Phone mockup container component
function PhoneMockup({ src, alt, width = '100%' }: { src: string; alt: string; width?: string }) {
  return (
    <div
      className="bg-white dark:bg-white/95 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-2 overflow-hidden"
      style={{ width }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-contain"
        loading="lazy"
      />
    </div>
  );
}

export function IranHotelPLPShowcase() {
  return (
    <div className="w-full max-w-[390px] mx-auto px-5 font-['Inter',sans-serif] text-gray-900 dark:text-white">

      {/* SECTION 1 - HERO */}
      <section className="mb-14">
        <h1 className="text-[26px] font-bold leading-tight mb-3">
          Hotel Booking Experience Redesign
        </h1>
        <p className="text-[14px] text-[#6B7280] dark:text-gray-400 mb-6 leading-relaxed">
          Redesigning the hotel listing page to shift users from browsing to deciding
        </p>

        {/* Meta row */}
        <div className="text-[11px] text-[#6B7280] dark:text-gray-400 mb-8 space-y-1.5">
          <div>
            <span className="font-medium text-gray-700 dark:text-gray-300">Role:</span> Product Designer
          </div>
          <div>
            <span className="font-medium text-gray-700 dark:text-gray-300">Timeline:</span> 3 months
          </div>
          <div>
            <span className="font-medium text-gray-700 dark:text-gray-300">Company:</span> IranHotel
          </div>
          <div>
            <span className="font-medium text-gray-700 dark:text-gray-300">Team:</span> PM, 2 Developers, QA
          </div>
        </div>

        {/* Before/After comparison */}
        <div className="flex gap-3 items-start">
          <div className="flex-1">
            <p className="text-[10px] font-medium text-[#6B7280] dark:text-gray-400 uppercase tracking-[0.08em] mb-2">
              BEFORE
            </p>
            <PhoneMockup src={imgBefore} alt="Before redesign" width="100%" />
          </div>
          <div className="flex-1">
            <p className="text-[10px] font-medium text-[#6B7280] dark:text-gray-400 uppercase tracking-[0.08em] mb-2">
              AFTER
            </p>
            <PhoneMockup src={imgAfter} alt="After redesign" width="100%" />
          </div>
        </div>
      </section>

      {/* SECTION 2 - PROJECT OVERVIEW */}
      <section className="mb-14">
        <h2 className="text-[18px] font-semibold mb-4">Project Overview</h2>
        <p className="text-[15px] leading-[1.7] text-gray-700 dark:text-gray-300">
          IranHotelOnline's product listing page (PLP) showed hotels in a familiar card layout — large images, basic info, and a "See Details" button. Users could browse, but they couldn't efficiently compare. Session recordings revealed repetitive behavior: open hotel → check price → go back → open another → check price → go back. The page was designed for exploration, but users needed a decision-making tool.
        </p>
      </section>

      {/* SECTION 3 - OVERVIEW AND PROBLEM */}
      <section className="mb-14">
        <h2 className="text-[18px] font-semibold mb-4">The Problem</h2>
        <p className="text-[15px] leading-[1.7] text-gray-700 dark:text-gray-300 mb-6">
          Users were stuck in a browse-compare-return loop. Critical comparison data — price, rating, amenities — was either hidden in detail pages or buried at the bottom of cards. The page prioritized visual appeal over decision efficiency, creating friction exactly where users needed speed.
        </p>

        {/* Annotated problem screen */}
        <div className="flex justify-center">
          <PhoneMockup src={imgAnnotated} alt="Annotated problem screen showing LOW INFORMATION DENSITY, OVERSIZED VISUAL FOCUS, ACTION AMBIGUITY, NAVIGATION DISTRACTION" width="320px" />
        </div>
      </section>

      {/* SECTION 4 - RESEARCH AND DISCOVERY */}
      <section className="mb-14">
        <h2 className="text-[18px] font-semibold mb-4">Research & Discovery</h2>

        <div className="mb-6">
          <p className="text-[11px] font-medium text-gray-700 dark:text-gray-300 uppercase tracking-[0.08em] mb-3">
            RESEARCH METHODS
          </p>
          <ul className="space-y-2.5 text-[15px] leading-[1.7] text-gray-700 dark:text-gray-300">
            <li className="flex gap-2">
              <span className="text-gray-400 dark:text-gray-600">•</span>
              <span>5 moderated usability sessions (task: compare 3 hotels and book one)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-gray-400 dark:text-gray-600">•</span>
              <span>Hotjar session recordings (50+ sessions analyzed)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-gray-400 dark:text-gray-600">•</span>
              <span>Heatmap analysis of click patterns and scroll depth</span>
            </li>
            <li className="flex gap-2">
              <span className="text-gray-400 dark:text-gray-600">•</span>
              <span>Exit intent surveys on PLP abandonment</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-medium text-gray-700 dark:text-gray-300 uppercase tracking-[0.08em] mb-3">
            KEY INSIGHTS
          </p>
          <div className="space-y-3">
            <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/20 pl-4 py-3 rounded-r">
              <p className="text-[15px] leading-[1.7] text-gray-800 dark:text-gray-200">
                4 out of 5 users opened detail pages solely to check price, then immediately returned to listing
              </p>
            </div>
            <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/20 pl-4 py-3 rounded-r">
              <p className="text-[15px] leading-[1.7] text-gray-800 dark:text-gray-200">
                Filter usage was 22% lower than industry average — filters were hidden in a modal requiring 5 taps to apply
              </p>
            </div>
            <div className="border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-950/20 pl-4 py-3 rounded-r">
              <p className="text-[15px] leading-[1.7] text-gray-800 dark:text-gray-200">
                Footer navigation caused 18% of mid-funnel exits — users clicked "Explore Destinations" and rarely returned to booking flow
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - INSIGHT */}
      <section className="mb-14">
        <div className="flex gap-4 items-center">
          <div className="flex-shrink-0">
            <PhoneMockup src={imgInsight} alt="Key insight visualization" width="140px" />
          </div>
          <div className="flex-1">
            <p className="text-[22px] font-bold leading-tight mb-2">
              Users were not struggling to find hotels.
            </p>
            <p className="text-[22px] font-bold leading-tight text-blue-600 dark:text-blue-400">
              They were struggling to compare them efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 - SOLUTION */}
      <section className="mb-14">
        <h2 className="text-[18px] font-semibold mb-4">Solution</h2>
        <p className="text-[15px] leading-[1.7] text-gray-700 dark:text-gray-300 mb-6">
          The redesign shifted the listing page from a browsing interface to a comparison tool. Every decision was validated against one question: does this help users make faster, more confident booking decisions?
        </p>

        {/* 4 Decision Cards */}
        <div className="space-y-4 mb-8">
          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-800/50 border border-[#E5E7EB] dark:border-gray-700 rounded-xl p-4">
            <h3 className="text-[16px] font-semibold mb-2">Persistent Smart Filters</h3>
            <p className="text-[13px] leading-[1.7] text-gray-700 dark:text-gray-300 mb-2">
              Filters moved from hidden modal to fixed top bar
            </p>
            <p className="text-[13px] leading-[1.7] text-[#6B7280] dark:text-gray-400">
              Reduces taps to refine results from 5 to 2
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-gray-800/50 border border-[#E5E7EB] dark:border-gray-700 rounded-xl p-4">
            <h3 className="text-[16px] font-semibold mb-2">Increased Information Density</h3>
            <p className="text-[13px] leading-[1.7] text-gray-700 dark:text-gray-300 mb-2">
              Price, rating, amenity visible per card without tapping
            </p>
            <p className="text-[13px] leading-[1.7] text-[#6B7280] dark:text-gray-400">
              Eliminates unnecessary page loads for critical decision data
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-gray-800/50 border border-[#E5E7EB] dark:border-gray-700 rounded-xl p-4">
            <h3 className="text-[16px] font-semibold mb-2">Decision-Optimized Card Hierarchy</h3>
            <p className="text-[13px] leading-[1.7] text-gray-700 dark:text-gray-300 mb-2">
              Visual weight follows: image → price → rating → amenity
            </p>
            <p className="text-[13px] leading-[1.7] text-[#6B7280] dark:text-gray-400">
              Matches user mental model revealed in research, reducing scan time
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white dark:bg-gray-800/50 border border-[#E5E7EB] dark:border-gray-700 rounded-xl p-4">
            <h3 className="text-[16px] font-semibold mb-2">Funnel-Focused Navigation</h3>
            <p className="text-[13px] leading-[1.7] text-gray-700 dark:text-gray-300 mb-2">
              Non-booking links removed from listing page
            </p>
            <p className="text-[13px] leading-[1.7] text-[#6B7280] dark:text-gray-400">
              Eliminates primary source of mid-funnel drop-off from heatmap data
            </p>
          </div>
        </div>

        {/* Before/After comparison for solution */}
        <div className="flex gap-3 items-start">
          <div className="flex-1">
            <p className="text-[10px] font-medium text-[#6B7280] dark:text-gray-400 uppercase tracking-[0.08em] mb-2">
              BEFORE
            </p>
            <PhoneMockup src={imgSolutionBefore} alt="Solution before" width="100%" />
          </div>
          <div className="flex-1">
            <p className="text-[10px] font-medium text-[#6B7280] dark:text-gray-400 uppercase tracking-[0.08em] mb-2">
              AFTER
            </p>
            <PhoneMockup src={imgSolutionAfter} alt="Solution after" width="100%" />
          </div>
        </div>
      </section>

      {/* SECTION 7 - TRADE-OFFS */}
      <section className="mb-14">
        <h2 className="text-[18px] font-semibold mb-4">Trade-offs</h2>

        <div className="space-y-3">
          <div className="bg-orange-50/50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-xl p-4">
            <p className="text-[15px] leading-[1.7] text-gray-800 dark:text-gray-200">
              Information density vs. visual clarity — More details per card speeds comparison but risks overwhelming users. We prioritized scannable hierarchy to balance both.
            </p>
          </div>

          <div className="bg-orange-50/50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-xl p-4">
            <p className="text-[15px] leading-[1.7] text-gray-800 dark:text-gray-200">
              Persistent filters vs. screen real estate — Fixed filter bar improves access but reduces visible listings by ~12%. Users preferred faster filter access over one extra card per scroll.
            </p>
          </div>

          <div className="bg-orange-50/50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-xl p-4">
            <p className="text-[15px] leading-[1.7] text-gray-800 dark:text-gray-200">
              Removing navigation vs. discoverability — Stripping non-booking links reduces drop-off but limits browsing freedom. Accepted based on session data showing navigation exits rarely returned to booking.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8 - OUTCOME */}
      <section>
        <h2 className="text-[18px] font-semibold mb-4">Outcome</h2>

        <div className="flex gap-4 items-start">
          <div className="flex-1 space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                <Check className="w-3.5 h-3.5 text-green-600 dark:text-green-400" strokeWidth={3} />
              </div>
              <p className="text-[15px] leading-[1.7] text-gray-700 dark:text-gray-300">
                In moderated usability testing with 5 users, task completion time for comparing 3 hotels dropped from ~4 minutes to ~90 seconds
              </p>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                <Check className="w-3.5 h-3.5 text-green-600 dark:text-green-400" strokeWidth={3} />
              </div>
              <p className="text-[15px] leading-[1.7] text-gray-700 dark:text-gray-300">
                All 5 participants used the filter system without guidance — vs. 2 out of 5 on the original design
              </p>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                <Check className="w-3.5 h-3.5 text-green-600 dark:text-green-400" strokeWidth={3} />
              </div>
              <p className="text-[15px] leading-[1.7] text-gray-700 dark:text-gray-300">
                Smarter filter placement reduced taps required to refine results from 5 to 2
              </p>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                <Check className="w-3.5 h-3.5 text-green-600 dark:text-green-400" strokeWidth={3} />
              </div>
              <p className="text-[15px] leading-[1.7] text-gray-700 dark:text-gray-300">
                This redesign is currently in development. Metrics being tracked post-launch: filter usage rate, hotel card CTR, and booking funnel drop-off at PLP stage
              </p>
            </div>
          </div>

          <div className="flex-shrink-0">
            <PhoneMockup src={imgOutcome} alt="Final outcome" width="140px" />
          </div>
        </div>
      </section>

    </div>
  );
}
