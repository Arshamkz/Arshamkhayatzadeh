// Placeholder images - replace with actual URLs or local assets
const reservationFlowImage = 'https://via.placeholder.com/800x600/6366f1/ffffff?text=Reservation+Flow';
const reservationFlowBeforeAfter = 'https://via.placeholder.com/800x600/8b5cf6/ffffff?text=Before+After';
const iHotelHubDesktop = 'https://via.placeholder.com/800x600/3b82f6/ffffff?text=iHotelHub+Desktop';
const iHotelHubMobile = 'https://via.placeholder.com/400x800/06b6d4/ffffff?text=iHotelHub+Mobile';
const iHotelHubMobileFullPage = 'https://via.placeholder.com/400x800/0ea5e9/ffffff?text=iHotelHub+Full';
import chipsScreenshot from '../../imports/image-3.png';
const designSystemThumbnail = chipsScreenshot;
const designSystemGallery = 'https://via.placeholder.com/800x600/059669/ffffff?text=Design+Gallery';

export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  image: string;
  coverImage?: string; // Separate cover image for case study detail page
  mobileImage?: string;
  gallery?: string;
  beforeAfterImage?: string; // Before/After comparison image
  featured?: boolean; // Leadership-focused project
  tags: string[];
  role: string;
  collaboration: string;
  timeline: string;
  company: string;
  projectLink?: string;
  pdfDownloadUrl?: string; // PDF case study download link
  context: string;
  problem: {
    description: string;
    issues: string[];
    goals: string[];
  };
  research: {
    description: string;
    methods: string[];
    insights: string[];
  };
  // NEW: Process & Leadership section (optional)
  processLeadership?: {
    description: string;
    framework: {
      title: string;
      steps: string[];
    };
    challenges: {
      title: string;
      issue: string;
      solution: string;
    }[];
    impact: string[];
  };
  designDecisions: {
    description: string;
    decisions: string[];
    note?: string;
  };
  solution: {
    description: string;
    features: string[];
    implementation: string;
  };
  results: {
    description: string;
    methods?: string[];
    outcomes: string[];
    metrics: {
      label: string;
      value: string;
      color: string;
    }[];
  };
  learnings: string[];
}

export const projects: Project[] = [
  // FEATURED: Reservation Flow (Leadership Project) - First position
  {
    id: 'reservation-flow',
    title: 'Reservation Flow Redesign',
    shortDesc: 'Boosted conversion from 12.3% to 14.8% and cut booking time from 7 minutes to 3 minutes',
    description: 'Redesigned the reservation flow for IranHotelOnline, a high-traffic booking platform with 500K+ MAU, to reduce friction and improve conversion rates.',
    image: reservationFlowImage,
    coverImage: reservationFlowImage,
    beforeAfterImage: reservationFlowBeforeAfter,
    featured: true, // Leadership-focused project
    tags: ['Product Design', 'UX Research', 'Conversion Optimization'],
    role: 'Product Designer',
    collaboration: 'PM, PO, Front-end Developers, QA',
    timeline: '3 months',
    company: 'IranHotelOnline',
    
    context: 'IranHotelOnline is a high-traffic hotel booking platform serving over 500,000+ monthly active users. The reservation flow is the primary revenue-driving funnel, making its performance critical to business growth.',
    
    problem: {
      description: 'Despite strong traffic, the booking funnel showed clear performance issues:',
      issues: [
        'High user drop-off before payment',
        'Long average booking completion time (around 7–8 minutes)',
        'Frequent rage clicks and hesitation signals',
        'User confusion caused by complex steps and excessive information'
      ],
      goals: [
        'Increase booking completion rate',
        'Reduce friction and booking time',
        'Improve clarity and user confidence throughout the flow'
      ]
    },
    
    research: {
      description: 'This project was conducted as a cross-functional effort, with close collaboration between Design, Product, and Engineering.',
      methods: [
        'Reviewed Google Analytics data together with the PM to identify drop-off points and bottlenecks',
        'Analyzed Microsoft Clarity session recordings and heatmaps to observe real user behavior',
        'Evaluated feature ideas with the PM based on data-driven hypotheses',
        'Validated technical feasibility of design changes with the PO and front-end developers',
        'Identified key friction points through behavioral patterns rather than assumptions'
      ],
      insights: [
        'Form-heavy steps caused hesitation and abandonment',
        'Some steps did not align with users\' mental models of a "standard booking flow"',
        'Redundant inputs increased cognitive load and slowed decision-making'
      ]
    },
    
    // NEW: Process & Leadership
    processLeadership: {
      description: 'Beyond execution, I defined and led the entire design process—from stakeholder alignment to post-launch monitoring. This involved navigating technical constraints, managing cross-functional friction, and establishing quality standards that balanced speed with excellence.',
      framework: {
        title: '7-Step Design Process Framework',
        steps: [
          '1. Guerrilla User Testing (pre-design) - Conducted in-person usability tests with non-technical users using think-aloud protocol to identify core friction points',
          '2. Data Analysis (Microsoft Clarity) - Analyzed session recordings, heatmaps, and rage click patterns to validate assumptions with behavioral data',
          '3. PM Alignment Meeting - Presented research findings and negotiated scope (e.g., debated removing low-value checkboxes vs. stakeholder requests)',
          '4. PO/Dev Constraint Mapping - Discussed technical limitations upfront to avoid designing features requiring unavailable backend logic',
          '5. Design Execution - Created high-fidelity prototypes based on validated insights and technical feasibility',
          '6. Second-Round User Testing (staging) - Tested live implementation on staging environment to catch mobile-specific issues (e.g., keyboard + bottom sheet overlap)',
          '7. Pixel-Perfect QA & Launch - Enforced strict design quality standards (2px tolerance) through documented feedback loops with developers'
        ]
      },
      challenges: [
        {
          title: 'Stakeholder Negotiation',
          issue: 'PM wanted to keep low-value service checkboxes for "some stakeholders," but data showed they caused user confusion and added no conversion value.',
          solution: 'Presented Clarity heatmap data showing 73% of users ignored these checkboxes. Proposed A/B testing their removal post-launch. PM agreed to deprioritize them in v1, validating with data later.'
        },
        {
          title: 'Technical Constraints',
          issue: 'PO and developers flagged that certain features (e.g., real-time logic for dynamic fields) required backend work not in current sprint capacity.',
          solution: 'Adjusted designs to work within existing backend capabilities. Prioritized UI improvements that needed only front-end changes, deferring logic-heavy features to post-launch roadmap.'
        },
        {
          title: 'Critical Mobile Bug Discovery',
          issue: 'During second-round testing on staging, discovered that bottom sheet input fields became inaccessible when mobile keyboard appeared—completely blocking form submission.',
          solution: 'Immediately flagged to dev team. Redesigned bottom sheet positioning with safe area padding and tested 3 alternative layouts until keyboard + sheet coexisted smoothly.'
        },
        {
          title: 'Developer Friction on Pixel-Perfect Standards',
          issue: 'Enforced strict design QA (even 2px spacing errors were flagged), which frustrated developers who felt micromanaged. Issues kept reappearing after "fixes," causing rework fatigue.',
          solution: 'Held alignment meeting with PO, PM, and dev team. Established "2-rejection rule": designs rejected more than twice for quality issues required root-cause analysis. Developers improved attention to detail; rework decreased significantly.'
        },
        {
          title: 'Post-Launch Monitoring Time Investment',
          issue: 'Spent 5 consecutive days monitoring Microsoft Clarity and Google Analytics post-launch—high time cost with uncertain ROI.',
          solution: 'Monitoring surfaced a minor improvement opportunity (toggle sizes too small on mobile). Validated that close post-launch observation catches edge cases analytics miss. Now standard practice for high-impact launches.'
        }
      ],
      impact: [
        'Defined reusable 7-step process now adopted by design team for high-stakes projects',
        'Two-stage user testing (pre-design + staging) caught critical mobile bug that would have significantly impacted conversion',
        'Pixel-perfect quality standards improved overall platform design consistency (QA rejection rate decreased notably after "2-rejection rule")',
        'Stakeholder alignment meetings significantly reduced post-launch scope creep (clearer expectations upfront)',
        'Process documentation enabled junior designer to replicate framework on checkout flow redesign (shipped independently with 92% quality score)'
      ]
    },
    
    designDecisions: {
      description: 'Based on insights and technical constraints, I focused on simplification, feasibility, and clarity.',
      decisions: [
        'Removing unnecessary steps that caused early funnel drop-offs',
        'Re-structuring information architecture to better match user expectations',
        'Merging related steps to reduce perceived effort',
        'Improving CTA clarity and feedback states',
        'Optimizing form layout and hierarchy to minimize friction'
      ],
      note: 'All decisions were reviewed collaboratively with Product and Engineering to ensure smooth implementation.'
    },
    
    solution: {
      description: 'The final solution delivered a streamlined reservation flow with:',
      features: [
        'Fewer and clearer steps',
        'Improved information hierarchy',
        'Reduced form complexity',
        'Clear progress and action feedback for users'
      ],
      implementation: 'I handed off designs with full specifications and worked closely with QA to ensure pixel-perfect and functional accuracy, personally validating the implementation end-to-end.'
    },
    
    results: {
      description: 'After launch, I monitored post-release performance over 30 days using Microsoft Clarity heatmaps and Google Analytics funnel analysis.',
      methods: [
        'Tracked 50,000+ user sessions across 30 days post-launch',
        'Compared against 60-day pre-launch baseline data',
        'Analyzed behavioral metrics: completion rate, time-on-task, rage clicks',
        'Validated results with PM against business KPIs'
      ],
      outcomes: [
        'Improved booking completion rate through streamlined user flow',
        'Significantly reduced average booking time by removing unnecessary steps',
        'Decreased user frustration signals (rage clicks and hesitation)',
        'Reduced form abandonment at payment step',
        'Lowered customer support tickets related to booking confusion'
      ],
      metrics: [
        { label: 'User Experience', value: 'Improved', color: 'from-green-500 to-emerald-500' },
        { label: 'Booking Time', value: 'Reduced', color: 'from-blue-500 to-cyan-500' },
        { label: 'User Friction', value: 'Decreased', color: 'from-purple-500 to-indigo-500' },
        { label: 'Support Load', value: 'Lower', color: 'from-amber-500 to-orange-500' }
      ]
    },
    
    learnings: [
      'Removing the "Passenger Details" step and merging it with "Review" eliminated the #1 drop-off point—sometimes the best design decision is deletion',
      'Showing real-time price updates during form completion significantly increased user trust—transparency beats polish',
      'Engineers flagged a backend constraint on auto-fill that would\'ve delayed launch by 2 weeks—collaborating early saved us from rebuilding designs',
      'Users in Iran expect different payment flows than international users—localization isn\'t just translation, it\'s behavioral adaptation'
    ]
  },
  {
    id: 'design-system',
    title: 'Design System Implementation',
    shortDesc: 'Built comprehensive design system to improve consistency and accelerate design-to-development workflow',
    description: 'Built a comprehensive atomic design system for IranHotelOnline to standardize UI components and accelerate design-to-development workflow.',
    image: designSystemThumbnail,
    // No coverImage - skip hero section in case study detail page
    gallery: designSystemGallery,
    tags: ['Design Systems', 'UI Design', 'Component Library'],
    role: 'Product Designer',
    collaboration: 'Design Team, Front-end Developers',
    timeline: '2 months',
    company: 'IranHotelOnline',
    
    context: 'As the team scaled, inconsistent UI patterns emerged across the platform. Designers recreated similar components differently, and developers implemented the same functionality with varying styles. This created maintenance challenges and a fragmented user experience.',
    
    problem: {
      description: 'The lack of a unified design language caused significant inefficiencies:',
      issues: [
        'Designers spending hours recreating common components from scratch',
        'Developers building duplicate components with different implementations',
        'Inconsistent spacing, colors, and typography across pages',
        'Slow handoff process with constant clarification questions',
        'New team members struggling to understand design patterns'
      ],
      goals: [
        'Create a single source of truth for design patterns',
        'Accelerate design-to-development workflow',
        'Ensure UI consistency across the entire platform',
        'Reduce onboarding time for new team members',
        'Enable designers to focus on solving problems, not recreating components'
      ]
    },
    
    research: {
      description: 'Audited existing patterns and collaborated with stakeholders to understand pain points.',
      methods: [
        'Conducted UI inventory across all platform pages',
        'Interviewed designers and developers about workflow blockers',
        'Analyzed handoff documentation gaps and common questions',
        'Studied best practices from established design systems (Material, Carbon, Atlassian)',
        'Identified most frequently used components and variations'
      ],
      insights: [
        'Same components had 5-7 different implementations',
        'Developers wanted clearer specs and reusable code patterns',
        'Designers needed faster access to production-ready components',
        'Inconsistent naming conventions caused confusion',
        'Documentation was key to adoption'
      ]
    },
    
    designDecisions: {
      description: 'Built an atomic design system with scalability and adoption in mind.',
      decisions: [
        'Adopted atomic design methodology (atoms, molecules, organisms)',
        'Created comprehensive component library in Figma with variants',
        'Established clear naming conventions aligned with development',
        'Defined design tokens for colors, spacing, typography, shadows',
        'Documented usage guidelines, do\'s and don\'ts, and accessibility standards',
        'Built interactive component playground for testing combinations',
        'Created handoff templates to streamline designer-developer collaboration'
      ],
      note: 'Focused on practicality over perfection—system evolved with real project needs rather than theoretical completeness.'
    },
    
    solution: {
      description: 'Delivered a complete, documented design system with:',
      features: [
        'Comprehensive Figma component library with variants and auto-layout',
        'Design tokens covering all visual properties',
        'Usage documentation with examples and best practices',
        'Accessibility guidelines integrated into component specs',
        'Handoff templates reducing designer-developer back-and-forth',
        'Component playground for rapid prototyping'
      ],
      implementation: 'Collaborated closely with front-end developers to ensure design components mapped cleanly to code implementation. Conducted training sessions for design and engineering teams to drive adoption.'
    },
    
    results: {
      description: 'Tracked system adoption over 4 months post-launch using Figma analytics and team surveys.',
      methods: [
        'Measured component usage in Figma (tracked 120+ design files)',
        'Surveyed 8 designers and 12 developers on workflow improvements',
        'Compared design-to-development cycle time before/after system adoption',
        'Analyzed QA bug reports for UI consistency issues'
      ],
      outcomes: [
        'Design velocity improved significantly with reusable components',
        'UI inconsistencies across the platform greatly reduced',
        'Designer-developer handoff process streamlined',
        'New team members onboarding faster with documented patterns',
        'Design QA issues decreased due to standardized components',
        'Team confidence and workflow efficiency improved (measured via post-survey)'
      ],
      metrics: [
        { label: 'Design Velocity', value: 'Improved', color: 'from-green-500 to-emerald-500' },
        { label: 'Consistency', value: 'Higher', color: 'from-blue-500 to-cyan-500' },
        { label: 'Handoff Time', value: 'Faster', color: 'from-purple-500 to-indigo-500' },
        { label: 'Onboarding', value: 'Easier', color: 'from-amber-500 to-orange-500' }
      ]
    },
    
    learnings: [
      'Developers adopted the system faster when I involved them in naming conventions from day 1—alignment beats perfection',
      'The "Component Playground" in Figma became the most-used feature (78% weekly usage)—designers learn by doing, not reading docs',
      'We initially built 40 components, but only 12 were used regularly—start small, expand based on real demand',
      'Documentation with real project examples (not abstract demos) increased adoption by 3x—context is king',
      'Monthly "office hours" for Q&A drove many system improvements—adoption requires ongoing evangelism, not just delivery'
    ]
  },
  {
    id: 'ihotelhub',
    title: 'iHotelHub B2B Platform',
    shortDesc: 'Led first AI-assisted design project, overcoming React-to-Pure conversion challenge to launch B2B platform in 3-week sprint',
    description: 'End-to-end design leadership for iHotelHub MVP—first AI-augmented design project that revealed critical real-world AI limitations, requiring 3-day technical pivot to convert React code to Pure HTML/CSS/JS.',
    image: iHotelHubDesktop,
    coverImage: iHotelHubMobileFullPage, // Mobile hero view - no auto scroll
    tags: ['B2B Platform', 'AI-Assisted Design', 'Technical Problem-Solving'],
    role: 'Lead Product Designer',
    collaboration: 'CEO, PO, Senior Front-End Developer, Engineering Team',
    timeline: '3-week MVP sprint + 3-day technical pivot',
    company: 'IranHotelOnline',
    projectLink: 'https://www.ihotelhub.com',
    
    context: 'iHotelHub is a worldwide B2B platform connecting hotels with travel agencies. The CEO needed to launch a market-validation MVP in 3 weeks for an international pitch—an aggressive timeline that led me to experiment with AI-assisted design (Figma Make + ChatGPT) for the first time. This project became a critical learning experience about the real-world limitations of AI design tools.',
    
    problem: {
      description: 'Dual challenge: Execute rapid MVP design AND validate AI workflow viability under extreme constraints.',
      issues: [
        'Aggressive 3-week timeline for CEO\'s international pitch (non-negotiable deadline)',
        'First time using AI design tools (Figma Make + ChatGPT) in production environment',
        'Dual-sided platform (hotels + travel agencies) with different user needs',
        'Unknown technical constraints of AI-generated code (discovered mid-project)',
        'Need to establish B2B credibility with professional UI despite rapid timeline',
        'Limited budget requiring ruthless prioritization and efficient execution'
      ],
      goals: [
        'Launch functional MVP within 3 weeks to enable CEO\'s international pitch',
        'Validate AI-assisted design workflow for future projects',
        'Design dual-portal system (hotels + travel agencies) with core B2B features',
        'Establish professional, trust-building brand presence in competitive market',
        'Build scalable foundation for post-launch iteration based on real user feedback'
      ]
    },
    
    research: {
      description: 'Conducted rapid research while simultaneously learning AI tool capabilities and limitations.',
      methods: [
        'Daily CEO strategy sessions to align MVP scope with pitch requirements',
        'Cross-functional workshops with PM and PO to define must-have vs. nice-to-have features',
        'Rapid competitive analysis of 5 existing B2B platforms (Booking.com B2B, Hotelbeds, Expedia TAAP)',
        'Experimented with Figma Make and ChatGPT to understand AI design workflow potential',
        'Mapped critical user flows: hotel onboarding, agency search/booking, basic admin',
        'Prioritized features using effort/impact matrix with CEO and PM (cut 60% of initial scope)'
      ],
      insights: [
        'B2B users expect data-dense, professional interfaces (not consumer simplicity)',
        'Travel agencies prioritize speed—search and booking must be fast and predictable',
        'Hotels needed dead-simple onboarding (most are non-technical small business owners)',
        'Trust signals (security badges, clear pricing, professional aesthetics) were non-negotiable',
        'AI tools can accelerate UI generation, but strategic UX decisions still require human judgment and context',
        'Unknown risk: AI tools output React code only—backend team compatibility unknown at start'
      ]
    },
    
    // NEW: Process & Leadership - Critical AI-to-Pure conversion challenge
    processLeadership: {
      description: 'This project tested my ability to lead design under extreme time pressure while navigating uncharted AI workflow territory. What started as a "rapid AI-assisted MVP" became a critical lesson in AI limitations, technical problem-solving, and cross-functional collaboration when the engineering team revealed they could only accept Pure HTML/CSS/JS—not React.',
      framework: {
        title: 'AI-Assisted Design Process (with Mid-Project Pivot)',
        steps: [
          '1. Rapid Research & Prioritization (Days 1-2) - Daily CEO sessions to define MVP scope; competitive analysis of 5 B2B platforms; ruthless feature cuts (60% of initial wishlist)',
          '2. AI-Accelerated Design Execution (Days 3-12) - Used Figma Make to generate UI components and layouts; ChatGPT for microcopy and content structure; maintained strategic control (IA, flows, prioritization)',
          '3. Design Validation & Handoff (Day 13) - Presented designs to CEO and engineering team; received approval to proceed with development',
          '4. CRITICAL DISCOVERY: React Incompatibility (Day 14) - Engineering team revealed: "We only work with Pure HTML/CSS/JS, not React frameworks"; Figma Make and AI tools ONLY output React code',
          '5. Emergency Technical Pivot (Days 14-17) - Spent 3 consecutive days working with PO and Senior Front-End Developer; used ChatGPT with heavy custom prompts to convert React code to Pure HTML/CSS/JS; manually debugged and validated conversions',
          '6. Implementation & QA (Days 18-21) - Worked closely with dev team to ensure Pure code functioned correctly; validated pixel-perfect accuracy; fixed responsive layout issues discovered during testing',
          '7. Launch & Handoff to CEO (Day 21) - Delivered functional platform on deadline for international pitch; documented AI workflow learnings for future projects'
        ]
      },
      challenges: [
        {
          title: 'React-to-Pure Conversion Crisis (Project-Critical)',
          issue: 'On Day 14, engineering team revealed they could ONLY accept Pure HTML/CSS/JS code—not React. Figma Make and ChatGPT ONLY output React. This incompatibility threatened entire project timeline and required immediate technical solution.',
          solution: 'Spent 3 intense days (48+ hours) working with PO and Senior Front-End Developer. Created custom ChatGPT prompts to convert React components to Pure HTML/CSS/JS. Manually debugged 40+ conversion errors (state management, event handlers, component logic). Validated every conversion with Senior Developer to ensure production quality. Documented conversion patterns for future reference.'
        },
        {
          title: 'AI Tool Limitations Discovery',
          issue: 'Discovered AI design tools have hard technical constraints: they cannot output Pure HTML/CSS/JS, only React-based code. This limitation was not documented anywhere and only surfaced during implementation handoff.',
          solution: 'Recognized this as critical learning for AI-assisted workflow. Established new rule: validate engineering team\'s tech stack BEFORE choosing AI tools. Created internal documentation: "AI Design Tools: React-Only Output Constraint—verify dev team compatibility first."'
        },
        {
          title: 'Time Pressure During Technical Pivot',
          issue: 'React-to-Pure conversion consumed 3 extra days, leaving only 4 days for implementation and QA. CEO\'s pitch deadline was non-negotiable—failure meant missed international opportunity.',
          solution: 'Worked extended hours with dev team (10-12 hour days). Prioritized critical path features first (hotel/agency portals) and deferred admin dashboard refinements to post-launch. Daily CEO updates to manage expectations. Delivered on time through ruthless focus.'
        },
        {
          title: 'Managing Stakeholder Expectations',
          issue: 'CEO expected "AI-accelerated design" meant faster overall timeline. Reality: AI sped up design but created downstream conversion bottleneck that almost derailed project.',
          solution: 'Transparent communication: explained React-to-Pure challenge in business terms (not technical jargon). Framed as "investing 3 days now to avoid 2-week rebuild later." CEO appreciated honesty and supported extended hours to meet deadline.'
        },
        {
          title: 'Maintaining Design Quality Under Pressure',
          issue: 'During 3-day conversion crisis, temptation was to cut corners on design quality to save time. Risk: shipping unprofessional UI would undermine CEO\'s pitch credibility.',
          solution: 'Held firm on quality standards—every converted component was validated pixel-perfect. Worked with Senior Developer to ensure Pure code maintained design fidelity. Result: CEO feedback post-launch: "Design quality exceeded expectations given timeline."'
        }
      ],
      impact: [
        'Successfully launched platform on Day 21 despite 3-day technical crisis—CEO\'s international pitch went ahead as planned',
        'Established first-ever "AI Design Tool Compatibility Checklist" for company—prevents future React/Pure conflicts',
        'Documented React-to-Pure conversion patterns now used by 2 other designers—institutional knowledge captured',
        'Discovered real-world AI design limitations through hands-on experience—theory vs. practice gap closed',
        'Built cross-functional problem-solving relationship with Senior Front-End Developer—now collaborate regularly on complex projects',
        'Process learnings informed company\'s AI tool adoption strategy—CTO cited this project in internal AI guidelines'
      ]
    },
    
    designDecisions: {
      description: 'Leveraged AI strategically while maintaining full control over UX decisions and quality standards.',
      decisions: [
        'Used Figma Make + ChatGPT to accelerate UI generation (~40% time saved on component creation)',
        'Maintained human control over all strategic decisions: information architecture, user flows, feature prioritization',
        'Designed separate role-based portals (hotels vs. agencies) tailored to each user type\'s workflow',
        'Created clean, professional aesthetic inspired by Stripe and Airbnb B2B (trust-building for B2B market)',
        'Prioritized desktop-first design (98% of B2B travel users work on computers)',
        'Built reusable component system in Figma to enable rapid post-launch iteration',
        'Post-discovery: validated all AI-generated components could be converted to Pure HTML/CSS/JS'
      ],
      note: 'AI was a productivity tool, not a replacement for strategic thinking. I used it to accelerate execution (component variations, microcopy) while personally owning all UX decisions. The React-to-Pure conversion challenge proved that AI output still requires human technical validation and adaptation.'
    },
    
    solution: {
      description: 'Delivered a functional MVP with core B2B platform features, launched on time despite mid-project technical pivot:',
      features: [
        'Hotel portal: inventory management, pricing controls, booking dashboard',
        'Travel agency portal: multi-filter search, booking flow, client management',
        'Professional, trust-building visual design optimized for B2B credibility',
        'Streamlined onboarding flows for non-technical hotel owners',
        'Responsive layouts (desktop-primary with mobile support)',
        'Scalable component system built for post-launch feature expansion'
      ],
      implementation: 'Led end-to-end design from concept to launch. Managed 3-day React-to-Pure conversion crisis with PO and Senior Developer. Validated implementation quality throughout sprint and made real-time refinements. Shipped on Day 21 as committed.'
    },
    
    results: {
      description: 'Successfully launched MVP on deadline, enabling CEO\'s international pitch. Platform validation and technical learnings exceeded initial project scope.',
      methods: [
        'Shipped functional dual-portal platform in 21 days (including 3-day conversion crisis)',
        'Monitored early user feedback from pilot hotels and agencies (first 30 days post-launch)',
        'Tracked technical performance: Pure HTML/CSS/JS codebase stability and dev team satisfaction',
        'Documented AI workflow learnings and limitations for future projects'
      ],
      outcomes: [
        'Platform launched on time—CEO successfully presented at international pitch meeting',
        'Early pilot users (8 hotels, 5 agencies) validated core booking flow usability (no critical UX bugs reported)',
        'Pure HTML/CSS/JS conversion succeeded—codebase performed stable in production (zero code-related crashes in first month)',
        'AI-assisted design significantly reduced initial design time vs. traditional workflow',
        'Post-launch feature velocity increased 2x thanks to reusable component system',
        'Senior Developer feedback: "Pure code quality was production-ready—conversion process worked"',
        'CEO feedback: "Design quality exceeded expectations for 3-week sprint under crisis conditions"',
        'Created reusable knowledge: React-to-Pure conversion documentation now used by 2 other designers'
      ],
      metrics: [
        { label: 'Launch Timeline', value: '21 Days', color: 'from-green-500 to-emerald-500' },
        { label: 'Tech Stack Pivot', value: '3 Days', color: 'from-blue-500 to-cyan-500' },
        { label: 'AI Time Saved', value: '~40%', color: 'from-purple-500 to-indigo-500' },
        { label: 'Code Stability', value: '100%', color: 'from-amber-500 to-orange-500' }
      ]
    },
    
    learnings: [
      'AI design tools have hard technical constraints—Figma Make and ChatGPT ONLY output React code, NOT Pure HTML/CSS/JS. Always validate dev team tech stack compatibility BEFORE choosing AI tools.',
      'First time using AI in production revealed theory-practice gap—AI accelerates execution (~40%) but introduces downstream risks (conversion bottlenecks). Real-world validation beats vendor promises.',
      'Cross-functional problem-solving under pressure builds trust—3-day conversion crisis with PO and Senior Developer created lasting collaborative relationship.',
      'Transparent stakeholder communication during crisis is critical—CEO appreciated honesty about React-to-Pure challenge and supported solution-focused approach.',
      'AI tools are productivity multipliers, not replacements—they accelerated UI generation but required heavy human oversight (strategic decisions, technical validation, quality control).',
      'Documentation of failure modes is as valuable as success patterns—React-to-Pure conversion learnings prevented similar issues on 2 subsequent projects.',
      'Ruthless prioritization under constraints reveals core value—cutting most features actually improved MVP clarity and focus.'
    ]
  },
  // PLP Redesign — Hotel Booking Product Listing Page
  {
    id: 'plp-redesign',
    title: 'PLP Redesign',
    shortDesc: 'Designing a faster, more confident mobile PLP — shifting users from browsing to deciding',
    description: 'A mobile-first redesign of the hotel listing page (PLP) at IranHotel — reframing the page as a decision environment rather than a browse gallery, through denser cards, a persistent refinement layer, decision-critical hierarchy, and distraction-free navigation.',
    image: 'https://via.placeholder.com/800x600/6366f1/ffffff?text=PLP+Redesign',
    coverImage: 'https://via.placeholder.com/800x600/6366f1/ffffff?text=PLP+Redesign',
    tags: ['Product Design', 'UX Research', 'Conversion Optimization'],
    role: 'Product Designer',
    collaboration: 'PM, PO, 2 Developers, QA',
    timeline: '2 months',
    company: 'IranHotel',
    context: 'A 2-month redesign project focused on transforming the hotel listing page from a browsing interface into a decision-making environment. Download the full PDF case study to see detailed visual examples and in-depth analysis.',
    problem: {
      description: 'Users struggled to efficiently compare hotels and make booking decisions.',
      issues: [
        'High cognitive load during comparison',
        'Inefficient information density'
      ],
      goals: [
        'Improve decision-making efficiency',
        'Increase conversion rate'
      ]
    },
    research: {
      description: 'Download the full PDF case study for detailed research findings.',
      methods: [
        'User interviews and usability testing',
        'Session recordings and heatmap analysis'
      ],
      insights: [
        'The problem was not navigation—it was decision-making efficiency'
      ]
    },
    designDecisions: {
      description: 'Download the PDF to see visual examples and detailed design decisions.',
      decisions: [
        'Hotel card redesign for better information hierarchy',
        'Quick filters for faster comparison',
        'Unified interaction model'
      ]
    },
    solution: {
      description: 'Download the PDF case study to see detailed visual examples of the solution.',
      features: [
        'Redesigned hotel cards',
        'Quick Filters',
        'Improved information architecture'
      ],
      implementation: 'See the PDF for detailed before/after comparisons and implementation details.'
    },
    results: {
      description: 'Download the PDF to see detailed results and metrics.',
      outcomes: [
        'Improved user decision-making efficiency',
        'Reduced scrolling and cognitive load'
      ],
      metrics: [
        { label: 'Project Duration', value: '2 Mo', color: 'from-purple-500 to-pink-500' },
        { label: 'Team Size', value: '6', color: 'from-pink-500 to-rose-500' }
      ]
    },
    learnings: [
      'A hotel listing page is a decision-making environment, not a collection of options.',
      'Download the full PDF case study for detailed learnings and visual examples.'
    ]
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id);
}

export function getAllProjects(): Project[] {
  return projects;
}