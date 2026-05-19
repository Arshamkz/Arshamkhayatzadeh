import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import OpenAI from "npm:openai";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-a6e89339/health", (c) => {
  return c.json({ status: "ok" });
});

// AI Chatbot endpoint
app.post('/make-server-a6e89339/chat', async (c) => {
  try {
    const { message, language, conversationHistory } = await c.req.json();
    
    console.log('Chat request:', { message, language });

    // Try OpenAI first
    try {
      const openaiApiKey = Deno.env.get('OPENAI_API_KEY');
      
      if (!openaiApiKey) {
        console.log('No OpenAI API key, using fallback');
        return c.json({ response: getPatternMatchingResponse(message, language) });
      }

      // System prompt with REAL data
      const systemPrompt = `You are Arsham Khayatzadeh's AI portfolio assistant.

**About Arsham:**
- 🎓 Computer Engineering graduate
- 💼 Product Designer at IranHotelOnline (500K+ MAU booking platform)
- 📍 Based in Iran
- 🎯 Specialization: Data-Driven Product Design, UX Research, Conversion Optimization

**Real Projects (Use ONLY these):**

1️⃣ **Reservation Flow Redesign** (IranHotelOnline) - FEATURED
   - Platform: High-traffic hotel booking (500K+ MAU)
   - Timeline: 3 months | Role: Product Designer
   - Impact: +20% conversion (12.3%→14.8%), -57% booking time (7min→3min), -85% rage clicks, -41% support tickets
   - Process: 7-step framework, guerrilla testing, cross-functional collaboration (PM/PO/Dev)
   - Key Challenge: Stakeholder negotiation, mobile keyboard bug, pixel-perfect QA (2px tolerance)
   - Methods: 50K+ sessions analyzed, Microsoft Clarity, Google Analytics

2️⃣ **Design System Implementation** (IranHotelOnline)
   - Timeline: 2 months | Role: Product Designer
   - Impact: +40% design velocity (5→3 days), -80% UI inconsistencies, -50% handoff time, +60% faster onboarding
   - Delivered: 120+ Figma components, atomic design methodology, design tokens
   - Adoption: Training workshops, component playground (78% weekly usage)
   - Team impact: 8 designers, 12 developers

3️⃣ **iHotelHub B2B Platform** - FEATURED (AI Project)
   - Platform: Worldwide B2B hotel/agency platform - https://www.ihotelhub.com
   - Timeline: 21 days (3-week MVP + 3-day crisis) | Role: Lead Product Designer
   - First AI-assisted design project (Figma Make + ChatGPT)
   - MAJOR CHALLENGE: AI tools only output React, backend needed Pure HTML/CSS/JS
   - Crisis Solution: 3 days manual React→Pure conversion with PO & Senior Dev
   - Impact: Launched on time, ~40% AI time savings, documented AI limitations
   - Learnings: AI tool constraints, cross-functional problem-solving, stakeholder transparency

**Skills:** Product Thinking, UX Research, Data-Driven Design, Figma Advanced, Design Systems, Cross-functional Leadership, Prototyping, React/TypeScript

**Contact:** arsham.kz770@gmail.com | linkedin.com/in/arsham-khayatzadeh

Answer naturally using ONLY the real projects above. Focus on facts, metrics, and process. Never mention fake companies (Snapp, Namava).`;

      const messages = [
        { role: 'system', content: systemPrompt },
        ...conversationHistory.slice(-6).map((msg: any) => ({
          role: msg.isBot ? 'assistant' : 'user',
          content: msg.text
        })),
        { role: 'user', content: message }
      ];

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openaiApiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: messages,
          temperature: 0.7,
          max_tokens: 500
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        
        if (response.status === 429 || response.status === 401 || errorData.error?.code === 'insufficient_quota') {
          console.log('OpenAI quota unavailable, using intelligent fallback');
          return c.json({ response: getPatternMatchingResponse(message, language) });
        }
        
        console.error('OpenAI error:', errorData);
        console.log('Using fallback');
        return c.json({ response: getPatternMatchingResponse(message, language) });
      }

      const data = await response.json();
      const aiResponse = data.choices[0].message.content;

      console.log('OpenAI response generated');
      return c.json({ response: aiResponse });
      
    } catch (openaiError: any) {
      console.error('OpenAI error:', openaiError?.message);
      return c.json({ response: getPatternMatchingResponse(message, language) });
    }
    
  } catch (error: any) {
    console.error("Chat error:", error);
    
    const errorMessage = language === 'fa'
      ? `❌ خطا در پردازش: ${error?.message || 'خطای ناشناخته'}\n\nلطفاً دوباره امتحان کن.`
      : `❌ Processing error: ${error?.message || 'Unknown error'}\n\nPlease try again.`;
    
    return c.json({ response: errorMessage }, 500);
  }
});

// INTELLIGENT FALLBACK - Based on REAL portfolio data
function getPatternMatchingResponse(message: string, language: string): string {
  const lowerMessage = message.toLowerCase();
  
  if (language === 'fa') {
    // Greetings
    if (lowerMessage.match(/سلام|درود|hi|hello|صبح بخیر|عصر بخیر/)) {
      return `👋 سلام! خوشحالم که اینجایی!

من می‌تونم درباره کارها و پروژه‌های ارشام بهت بگم - از **Reservation Flow در IranHotelOnline** که conversion رو ۲۰٪ افزایش داد، تا **Design System** که سرعت طراحی رو ۴۰٪ بالا برد، و **iHotelHub** که اولین پروژه AI-assisted بود و یه چالش فنی سخت داشت!

چی بیشتر جالبته؟ میخوای از یه پروژه خاص بدونی؟`;
    }
    
    // Projects general
    if (lowerMessage.match(/پروژه|کار|نمونه کار|portfolio|چیکار|چی کار/)) {
      return '📁 **سه پروژه اصلی:**\n\n**1️⃣ Reservation Flow (IranHotelOnline)**\nفلو رزرو هتل برای ۵۰۰ هزار کاربر فعال ماهانه - conversion از ۱۲.۳٪ به ۱۴.۸٪ رسوند (+۲۰٪) و زمان رزرو از ۷ دقیقه به ۳ دقیقه کاهش داد (-۵۷٪). تحقیقات: ۵۰,۰۰۰+ session analysis.\n\n**2️⃣ Design System (IranHotelOnline)**\nساخت سیستم طراحی کامل با ۱۲۰+ کامپوننت Figma - سرعت طراحی +۴۰٪، inconsistency -۸۰٪، زمان handoff -۵۰٪.\n\n**3️⃣ iHotelHub B2B Platform**\nاولین پروژه AI-assisted (Figma Make + ChatGPT) - چالش: AI فقط React میداد، backend Pure HTML/CSS/JS میخواست! ۳ روز conversion دستی. لانچ موفق در ۲۱ روز.\n\n🔗 https://www.ihotelhub.com\n\nمیخوای از کدوم بیشتر بدونی؟';
    }
    
    // Reservation Flow
    if (lowerMessage.match(/reservation|رزرو|flow|فلو|iran.*hotel|ایران.*هتل/)) {
      return '📊 **Reservation Flow - IranHotelOnline**\n\n**پلتفرم:** سایت رزرو هتل با ۵۰۰K+ MAU\n**مدت:** ۳ ماه | **نقش:** Product Designer\n\n**مسئله:**\n• Completion rate پایین (۱۲.۳٪)\n• زمان رزرو بالا (~۷ دقیقه)\n• Rage clicks زیاد (۸.۲٪ از sessions)\n\n**تحقیقات:**\n• ۵۰,۰۰۰+ session بررسی شد (۳۰ روز post-launch)\n• Microsoft Clarity heatmaps\n• Google Analytics funnel analysis\n• Guerrilla testing با کاربران واقعی\n\n**فرآیند ۷ مرحله‌ای:**\n1. Guerrilla User Testing (pre-design)\n2. Data Analysis (Clarity + Analytics)\n3. PM Alignment (stakeholder negotiation)\n4. PO/Dev Constraint Mapping\n5. Design Execution\n6. Second-Round Testing (staging)\n7. Pixel-Perfect QA (2px tolerance)\n\n**چالش کلیدی:** Bug موبایل - keyboard باعث میشد bottom sheet قابل دسترسی نباشه! کشف در testing روی staging، ۳ layout مختلف امتحان شد.\n\n**نتایج:**\n✅ +۲۰٪ conversion (۱۲.۳٪ → ۱۴.۸٪)\n✅ -۵۷٪ زمان رزرو (۷m۱۲s → ۳m۵s)\n✅ -۸۵٪ rage clicks (۸.۲٪ → ۱.۲٪)\n✅ -۴۱٪ support tickets\n\nسوال دیگه‌ای داری؟';
    }
    
    // Design System
    if (lowerMessage.match(/design system|سیستم طراحی|component|کامپوننت|دیزاین سیستم/)) {
      return '🎨 **Design System - IranHotelOnline**\n\n**مدت:** ۲ ماه | **نقش:** Product Designer\n\n**مسئله:**\n• Inconsistency شدید در UI\n• طراحان components رو دوباره میساختن\n• Handoff کُند و پر از سوال\n\n**راه‌حل:**\n• **Atomic Design:** ۱۲۰+ Figma components\n• **Design Tokens:** رنگ‌ها، spacing، typography\n• **Component Playground** (۷۸٪ weekly usage!)\n• **Training workshops** برای adoption\n• **Documentation** با مثال‌های واقعی\n\n**تحقیقات:**\n• Audit کامل UI در تمام صفحات\n• مصاحبه با ۸ designer + ۱۲ developer\n• یادگیری: ۴۰ component ساختیم، فقط ۱۲ تا استفاده شد!\n\n**نتایج:**\n✅ +۴۰٪ design velocity (۵ روز → ۳ روز)\n✅ -۸۰٪ UI inconsistencies\n✅ -۵۰٪ handoff time (۲ روز → ۱ روز)\n✅ +۶۰٪ سرعت onboarding (۴ هفته → ۱.۵ هفته)\n✅ Team confidence: ۶.۲/۱۰ → ۸.۷/۱۰\n\n**Tech Stack:** Figma + Auto Layout + Variants + Storybook\n\nچیز دیگه‌ای میخوای بدونی؟';
    }
    
    // iHotelHub / AI
    if (lowerMessage.match(/ihotelhub|hotel.*hub|ai|هوش مصنوعی|figma make|chatgpt|react|pure/)) {
      return '🤖 **iHotelHub - اولین پروژه AI-Assisted**\n\n**پلتفرم:** B2B جهانی (hotels ↔ travel agencies)\n**مدت:** ۲۱ روز | **نقش:** Lead Product Designer\n**لینک:** https://www.ihotelhub.com\n\n**چالش:** CEO میخواست MVP در ۳ هفته برای pitch بین‌المللی\n\n**تصمیم:** اولین بار AI tools استفاده کردم (Figma Make + ChatGPT) برای سرعت بخشیدن\n\n**❌ بحران فنی (روز ۱۴):**\n• Figma Make & ChatGPT فقط React code میدن\n• Backend تیم فقط Pure HTML/CSS/JS میتونست استفاده کنه\n• کل پروژه در خطر بود!\n\n**✅ راه‌حل:**\n• ۳ روز متوالی با PO و Senior Developer کار کردم\n• Custom ChatGPT prompts برای تبدیل React → Pure\n• ۴۰+ conversion error رو دستی debug کردم\n• هر تبدیل با Senior Dev validate شد\n\n**یادگیری‌های کلیدی:**\n• AI tools محدودیت‌های فنی hard دارن\n• همیشه tech stack تیم رو قبل از انتخاب AI tool چک کن\n• Transparency با stakeholders حیاتیه\n• Cross-functional collaboration تحت فشار، trust میسازه\n\n**نتایج:**\n✅ لانچ موفق در روز ۲۱ (با وجود ۳ روز بحران)\n✅ ~۴۰٪ صرفه‌جویی زمان با AI\n✅ CEO: "Design quality exceeded expectations"\n✅ مستندات تبدیل React→Pure حالا ۲ designer دیگه استفاده می‌کنن\n✅ اولین "AI Design Tool Compatibility Checklist" شرکت\n\nسوالی داری؟';
    }
    
    // Challenges
    if (lowerMessage.match(/چالش|مشکل|challenge|difficult|سخت/)) {
      return '🎯 **بزرگترین چالش‌ها:**\n\n**1️⃣ مقیاس‌پذیری (۵۰۰K+ کاربر)**\n• طراحی برای edge cases، نه فقط happy path\n• هر ۱۰۰ms delay = کاهش conversion\n• تصمیم‌گیری با data، نه gut feeling\n\n**2️⃣ Consistency (Design System)**\n• Designers: ۸ نفر، هرکدوم استایل خودشون\n• Developers: ۱۲ نفر، implementations متفاوت\n• راه‌حل: ۲۰+ workshop برای adoption\n\n**3️⃣ بحران فنی iHotelHub**\n• AI tools فقط React میدن، backend Pure میخواست\n• ۳ روز conversion دستی + debug\n• یادگیری: همیشه tech stack رو validate کن\n\n**4️⃣ Pixel-Perfect QA Standards**\n• حتی ۲px error reject میشد\n• Developers frustrated شدن\n• راه‌حل: "2-rejection rule" - rework کاهش ۶۰٪\n\nمیخوای از یکیشون بیشتر بدونی؟';
    }
    
    // Process
    if (lowerMessage.match(/فرآیند|process|روش|methodology|چطور|چجوری/)) {
      return '🔄 **فرآیند طراحی (۷ مرحله‌ای):**\n\n**1️⃣ Guerrilla User Testing**\n• Pre-design usability tests\n• Think-aloud protocol\n\n**2️⃣ Data Analysis**\n• Microsoft Clarity (heatmaps, sessions)\n• Google Analytics (funnels)\n• ۵۰K+ sessions analyzed\n\n**3️⃣ PM Alignment**\n• Present findings\n• Negotiate scope\n• مثال: debate removal checkboxes\n\n**4️⃣ PO/Dev Constraints**\n• Technical limitations upfront\n• Avoid unavailable backend logic\n\n**5️⃣ Design Execution**\n• High-fidelity prototypes\n• Figma components\n\n**6️⃣ Second-Round Testing**\n• Test on staging\n• Catch mobile bugs\n\n**7️⃣ Pixel-Perfect QA**\n• ۲px tolerance standard\n• Documented feedback loops\n\n**اصول کلیدی:**\n✅ Data-driven\n✅ Cross-functional collaboration\n✅ Iterate constantly\n\nسوالی داری؟';
    }
    
    // Skills
    if (lowerMessage.match(/مهارت|skill|توانایی|قابلیت/)) {
      return '💪 **مهارت‌ها:**\n\n**🎯 Product & Strategy:**\n• Product Thinking\n• User Research (guerrilla testing، interviews)\n• Data-Driven Design (۵۰K+ sessions analyzed)\n• Cross-functional Leadership\n\n**🎨 Design:**\n• UI/UX Design\n• Design Systems (۱۲۰+ components)\n• Prototyping (high-fidelity)\n• Figma Advanced (Auto Layout، Variants)\n\n**💻 Technical:**\n• React & TypeScript\n• HTML/CSS\n• Design Tokens\n• Git/GitHub\n\n**📊 Tools:**\n• Figma، Adobe XD، Sketch\n• Microsoft Clarity، Google Analytics\n• Jira، Notion، Miro\n\nچیز خاصی میخوای بدونی؟';
    }
    
    // Contact
    if (lowerMessage.match(/تماس|contact|ایمیل|email|لینکدین|linkedin/)) {
      return '📬 **راه‌های ارتباطی:**\n\n**📧 Email:**\narsham.kz770@gmail.com\n\n**💼 LinkedIn:**\nlinkedin.com/in/arsham-khayatzadeh\n\n**🌐 Portfolio:**\nهمین سایت!\n\n**🤝 برای:**\n• فرصت‌های شغلی (Product Designer، UI/UX)\n• همکاری در پروژه‌های طراحی\n• مشاوره طراحی محصول\n\nخوشحال میشم باهات صحبت کنم! 🚀';
    }
    
    // Education
    if (lowerMessage.match(/تحصیلات|دانشگاه|education|university/)) {
      return '🎓 **تحصیلات:**\n\nمهندسی کامپیوتر\nComputer Engineering\n\nچیز دیگه‌ای میخوای بدونی؟';
    }
    
    // Default
    return '🤔 سوال جالبیه!\n\nمن می‌تونم درباره این موضوعات صحبت کنم:\n\n**📁 پروژه‌ها:**\n• Reservation Flow - +۲۰٪ conversion، -۵۷٪ زمان رزرو\n• Design System - +۴۰٪ سرعت طراحی\n• iHotelHub - بحران React→Pure، لانچ موفق\n\n**💡 فرآیند:**\n• فرآیند ۷ مرحله‌ای طراحی\n• تحقیقات و data analysis\n• چالش‌ها و یادگیری‌ها\n\n**👨‍💻 درباره من:**\n• مهارت‌ها و تخصص\n• تجربه کاری\n• راه‌های ارتباطی\n\nچی بیشتر جالبته؟ میتونی سوال مشخص‌تری بپرسی! 😊';
  }
  
  // English responses
  else {
    // Greetings
    if (lowerMessage.match(/hi|hello|hey|good morning|good evening/)) {
      return `👋 Hi! Great to see you here!

I can tell you about Arsham's work - from **Reservation Flow at IranHotelOnline** that boosted conversion by 20%, to **Design System** that increased design velocity by 40%, and **iHotelHub** - his first AI-assisted project with a challenging React-to-Pure conversion crisis!

What interests you most?`;
    }
    
    // Projects general
    if (lowerMessage.match(/project|work|portfolio|what did|what have/)) {
      return '📁 **Three Main Projects:**\n\n**1️⃣ Reservation Flow (IranHotelOnline)**\nBooking flow redesign for 500K+ MAU platform - boosted conversion from 12.3% to 14.8% (+20%) and cut booking time from 7min to 3min (-57%). Analyzed 50K+ sessions.\n\n**2️⃣ Design System (IranHotelOnline)**\nBuilt complete design system with 120+ Figma components - design velocity +40%, inconsistencies -80%, handoff time -50%.\n\n**3️⃣ iHotelHub B2B Platform**\nFirst AI-assisted project (Figma Make + ChatGPT) - Challenge: AI only outputs React, backend needed Pure HTML/CSS/JS! 3-day manual conversion. Successful launch in 21 days.\n\n🔗 https://www.ihotelhub.com\n\nWhich one interests you?';
    }
    
    // Reservation Flow
    if (lowerMessage.match(/reservation|flow|iran.*hotel/)) {
      return '📊 **Reservation Flow - IranHotelOnline**\n\n**Platform:** Hotel booking site with 500K+ MAU\n**Duration:** 3 months | **Role:** Product Designer\n\n**Problem:**\n• Low completion rate (12.3%)\n• High booking time (~7 minutes)\n• High rage clicks (8.2% of sessions)\n\n**Research:**\n• Analyzed 50,000+ sessions (30 days post-launch)\n• Microsoft Clarity heatmaps\n• Google Analytics funnel analysis\n• Guerrilla testing with real users\n\n**7-Step Process:**\n1. Guerrilla User Testing (pre-design)\n2. Data Analysis (Clarity + Analytics)\n3. PM Alignment (stakeholder negotiation)\n4. PO/Dev Constraint Mapping\n5. Design Execution\n6. Second-Round Testing (staging)\n7. Pixel-Perfect QA (2px tolerance)\n\n**Key Challenge:** Mobile bug - keyboard made bottom sheet inaccessible! Discovered during staging testing, tested 3 alternative layouts.\n\n**Results:**\n✅ +20% conversion (12.3% → 14.8%)\n✅ -57% booking time (7m12s → 3m5s)\n✅ -85% rage clicks (8.2% → 1.2%)\n✅ -41% support tickets\n\nQuestions?';
    }
    
    // Design System
    if (lowerMessage.match(/design system|component/)) {
      return '🎨 **Design System - IranHotelOnline**\n\n**Duration:** 2 months | **Role:** Product Designer\n\n**Problem:**\n• Severe UI inconsistencies\n• Designers recreating components\n• Slow handoff with many questions\n\n**Solution:**\n• **Atomic Design:** 120+ Figma components\n• **Design Tokens:** colors, spacing, typography\n• **Component Playground** (78% weekly usage!)\n• **Training workshops** for adoption\n• **Documentation** with real examples\n\n**Research:**\n• Complete UI audit across all pages\n• Interviewed 8 designers + 12 developers\n• Learning: Built 40 components, only 12 used regularly!\n\n**Results:**\n✅ +40% design velocity (5 days → 3 days)\n✅ -80% UI inconsistencies\n✅ -50% handoff time (2 days → 1 day)\n✅ +60% faster onboarding (4 weeks → 1.5 weeks)\n✅ Team confidence: 6.2/10 → 8.7/10\n\n**Tech:** Figma + Auto Layout + Variants + Storybook\n\nMore questions?';
    }
    
    // iHotelHub / AI
    if (lowerMessage.match(/ihotelhub|hotel.*hub|ai|artificial intelligence|figma make|chatgpt|react|pure/)) {
      return '🤖 **iHotelHub - First AI-Assisted Project**\n\n**Platform:** Worldwide B2B (hotels ↔ travel agencies)\n**Duration:** 21 days | **Role:** Lead Product Designer\n**Link:** https://www.ihotelhub.com\n\n**Challenge:** CEO needed MVP in 3 weeks for international pitch\n\n**Decision:** First time using AI tools (Figma Make + ChatGPT) for speed\n\n**❌ Technical Crisis (Day 14):**\n• Figma Make & ChatGPT ONLY output React code\n• Backend team ONLY accepts Pure HTML/CSS/JS\n• Entire project at risk!\n\n**✅ Solution:**\n• 3 intense days with PO & Senior Developer\n• Custom ChatGPT prompts for React → Pure conversion\n• Manually debugged 40+ conversion errors\n• Every conversion validated with Senior Dev\n\n**Key Learnings:**\n• AI tools have hard technical constraints\n• Always validate team tech stack before choosing AI tools\n• Transparency with stakeholders is critical\n• Cross-functional collaboration under pressure builds trust\n\n**Results:**\n✅ Launched successfully on Day 21 (despite 3-day crisis)\n✅ ~40% time savings from AI\n✅ CEO: "Design quality exceeded expectations"\n✅ React→Pure conversion docs now used by 2 other designers\n✅ Created first "AI Design Tool Compatibility Checklist"\n\nQuestions?';
    }
    
    // Challenges
    if (lowerMessage.match(/challenge|difficult|problem/)) {
      return '🎯 **Biggest Challenges:**\n\n**1️⃣ Scale (500K+ users)**\n• Design for edge cases, not just happy path\n• Every 100ms delay = conversion drop\n• Data-driven decisions, not gut feeling\n\n**2️⃣ Consistency (Design System)**\n• Designers: 8 people, each with own style\n• Developers: 12 people, different implementations\n• Solution: 20+ adoption workshops\n\n**3️⃣ iHotelHub Technical Crisis**\n• AI tools only output React, backend needs Pure\n• 3 days manual conversion + debugging\n• Learning: Always validate tech stack\n\n**4️⃣ Pixel-Perfect QA Standards**\n• Even 2px errors rejected\n• Developers got frustrated\n• Solution: "2-rejection rule" - 60% less rework\n\nWant to know more about any?';
    }
    
    // Process
    if (lowerMessage.match(/process|methodology|approach/)) {
      return '🔄 **Design Process (7 Steps):**\n\n**1️⃣ Guerrilla User Testing**\n• Pre-design usability tests\n• Think-aloud protocol\n\n**2️⃣ Data Analysis**\n• Microsoft Clarity (heatmaps, sessions)\n• Google Analytics (funnels)\n• 50K+ sessions analyzed\n\n**3️⃣ PM Alignment**\n• Present findings\n• Negotiate scope\n• Example: debate removing checkboxes\n\n**4️⃣ PO/Dev Constraints**\n• Technical limitations upfront\n• Avoid unavailable backend logic\n\n**5️⃣ Design Execution**\n• High-fidelity prototypes\n• Figma components\n\n**6️⃣ Second-Round Testing**\n• Test on staging\n• Catch mobile bugs\n\n**7️⃣ Pixel-Perfect QA**\n• 2px tolerance standard\n• Documented feedback loops\n\n**Key Principles:**\n✅ Data-driven\n✅ Cross-functional collaboration\n✅ Iterate constantly\n\nQuestions?';
    }
    
    // Skills
    if (lowerMessage.match(/skill|ability|expertise/)) {
      return '💪 **Key Skills:**\n\n**🎯 Product & Strategy:**\n• Product Thinking\n• User Research (guerrilla testing, interviews)\n• Data-Driven Design (50K+ sessions analyzed)\n• Cross-functional Leadership\n\n**🎨 Design:**\n• UI/UX Design\n• Design Systems (120+ components)\n• Prototyping (high-fidelity)\n• Figma Advanced (Auto Layout, Variants)\n\n**💻 Technical:**\n• React & TypeScript\n• HTML/CSS\n• Design Tokens\n• Git/GitHub\n\n**📊 Tools:**\n• Figma, Adobe XD, Sketch\n• Microsoft Clarity, Google Analytics\n• Jira, Notion, Miro\n\nAnything specific?';
    }
    
    // Contact
    if (lowerMessage.match(/contact|email|linkedin/)) {
      return '📬 **Contact:**\n\n**📧 Email:**\narsham.kz770@gmail.com\n\n**💼 LinkedIn:**\nlinkedin.com/in/arsham-khayatzadeh\n\n**🌐 Portfolio:**\nThis website!\n\n**🤝 For:**\n• Job opportunities (Product Designer, UI/UX)\n• Design project collaborations\n• Product design consulting\n\nHappy to chat! 🚀';
    }
    
    // Education
    if (lowerMessage.match(/education|university|degree/)) {
      return '🎓 **Education:**\n\nComputer Engineering\n\nAnything else?';
    }
    
    // Default
    return '🤔 Interesting question!\n\nI can talk about:\n\n**📁 Projects:**\n• Reservation Flow - +20% conversion, -57% booking time\n• Design System - +40% design velocity\n• iHotelHub - React→Pure crisis, successful launch\n\n**💡 Process:**\n• 7-step design framework\n• Research & data analysis\n• Challenges & learnings\n\n**👨‍💻 About Me:**\n• Skills & expertise\n• Work experience\n• Contact information\n\nWhat interests you most? Feel free to ask! 😊';
  }
}

Deno.serve(app.fetch);