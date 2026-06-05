import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronDown, ChevronUp, X, ZoomIn, Eye,
  Layers, Filter, Grid, List, MousePointer, TrendingUp, TrendingDown,
  Lightbulb, Target, AlertTriangle, CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface SectionCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  accentColor: string;
  defaultOpen?: boolean;
}

function SectionCard({ icon, title, children, accentColor, defaultOpen = false }: SectionCardProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <motion.div
      layout
      className="bg-white/30 dark:bg-white/5 backdrop-blur-xl rounded-2xl border border-white/40 dark:border-white/10 overflow-hidden"
    >
      <button
        onClick={() => setOpen(v => !v)}
        className={`w-full flex items-center justify-between p-5 text-left transition-all duration-200 hover:bg-white/20 dark:hover:bg-white/5 group`}
      >
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${accentColor} flex-shrink-0`}>
            {icon}
          </div>
          <span className="font-bold text-gray-900 dark:text-white text-base">{title}</span>
        </div>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

interface ZoomableImageProps {
  src: string;
  alt: string;
  caption?: string;
}

function ZoomableImage({ src, alt, caption }: ZoomableImageProps) {
  const [zoomed, setZoomed] = useState(false);
  return (
    <>
      <div
        className="relative group cursor-zoom-in rounded-xl overflow-hidden border border-white/30 dark:border-white/10"
        onClick={() => setZoomed(true)}
      >
        <img src={src} alt={alt} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
        </div>
      </div>
      {caption && <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">{caption}</p>}

      <AnimatePresence>
        {zoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setZoomed(false)}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={src}
              alt={alt}
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl cursor-zoom-out"
              onClick={e => e.stopPropagation()}
            />
            <button
              onClick={() => setZoomed(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


// Visual diagram component showing the design shift
function DesignShiftDiagram() {
  const { language } = useLanguage();
  const isRTL = language === 'fa';

  const before = isRTL
    ? ['ناوبری پیچیده', 'کارت‌های بزرگ', 'اسکرول زیاد', 'سردرگمی تعامل']
    : ['Complex navigation', 'Large cards', 'Excessive scrolling', 'Interaction confusion'];

  const after = isRTL
    ? ['فیلترهای سریع', 'کارت‌های فشرده', 'Sticky filters', 'مدل یکپارچه']
    : ['Quick filters', 'Dense cards', 'Sticky filters', 'Unified interactions'];

  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      <div className="bg-red-500/10 dark:bg-red-500/20 rounded-xl p-4 border border-red-300/30 dark:border-red-500/30">
        <div className="flex items-center gap-2 mb-3">
          <TrendingDown className="w-4 h-4 text-red-500" />
          <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider">
            {isRTL ? 'قبل' : 'Before'}
          </span>
        </div>
        <ul className="space-y-2">
          {before.map((item, i) => (
            <li key={i} className={`flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-green-500/10 dark:bg-green-500/20 rounded-xl p-4 border border-green-300/30 dark:border-green-500/30">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="w-4 h-4 text-green-500" />
          <span className="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-wider">
            {isRTL ? 'بعد' : 'After'}
          </span>
        </div>
        <ul className="space-y-2">
          {after.map((item, i) => (
            <li key={i} className={`flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Trade-off cards
function TradeoffCard({ label, pro, con, isRTL }: { label: string; pro: string; con: string; isRTL: boolean }) {
  return (
    <div className="bg-white/20 dark:bg-white/5 rounded-xl p-4 border border-white/30 dark:border-white/10">
      <p className={`font-bold text-gray-900 dark:text-white text-sm mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>{label}</p>
      <div className="space-y-2">
        <div className={`flex items-start gap-2 text-xs text-green-700 dark:text-green-400 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
          <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
          <span>{pro}</span>
        </div>
        <div className={`flex items-start gap-2 text-xs text-red-700 dark:text-red-400 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
          <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
          <span>{con}</span>
        </div>
      </div>
    </div>
  );
}

export function IranHotelPLPShowcase() {
  const { language } = useLanguage();
  const isRTL = language === 'fa';
  const dir = isRTL ? 'rtl' : 'ltr';

  const content = {
    en: {
      pdfTitle1: 'Redesigning Hotel PLP',
      pdfDesc1: 'Full case study — tap to preview',
      pdfTitle2: 'How We Redesigned PLP',
      pdfDesc2: 'Process deep-dive — tap to preview',
      principles: {
        title: 'Design Principles',
        items: [
          { icon: <Eye className="w-4 h-4 text-white" />, label: 'Optimize for scanning, not browsing', bg: 'bg-blue-500' },
          { icon: <Layers className="w-4 h-4 text-white" />, label: 'Reduce cognitive load', bg: 'bg-indigo-500' },
          { icon: <Grid className="w-4 h-4 text-white" />, label: 'Increase effective information density', bg: 'bg-purple-500' },
          { icon: <MousePointer className="w-4 h-4 text-white" />, label: 'Keep users focused on booking', bg: 'bg-pink-500' },
        ]
      },
      solutions: {
        title: 'Solutions',
        items: [
          { icon: <Grid className="w-4 h-4 text-white" />, label: 'Hotel card redesign', bg: 'bg-blue-500' },
          { icon: <Filter className="w-4 h-4 text-white" />, label: 'Quick filters added', bg: 'bg-indigo-500' },
          { icon: <MousePointer className="w-4 h-4 text-white" />, label: 'Unified interaction model', bg: 'bg-purple-500' },
          { icon: <X className="w-4 h-4 text-white" />, label: 'Footer navigation removed', bg: 'bg-red-500' },
          { icon: <Target className="w-4 h-4 text-white" />, label: 'Sticky filter behavior', bg: 'bg-orange-500' },
          { icon: <List className="w-4 h-4 text-white" />, label: 'Grid/list view on desktop', bg: 'bg-teal-500' },
        ]
      },
      tradeoffs: {
        title: 'Trade-offs',
        items: [
          { label: 'Information Density', pro: 'Improved comparison efficiency', con: 'Reduced visual focus per item' },
          { label: 'Navigation Removal', pro: 'Better booking funnel focus', con: 'Less opportunity for exploration' },
          { label: 'Hidden Filters', pro: 'More content visible above fold', con: 'Reduced filter discoverability' },
        ]
      },
      reflection: {
        title: 'Key Reflection',
        text: 'The problem was not visual. It was behavioral. Users did not need more options. They needed a better environment for making decisions. A hotel listing page is not a collection of options — it is a decision-making environment.',
      }
    },
    fa: {
      pdfTitle1: 'بازطراحی هتل PLP',
      pdfDesc1: 'کیس استادی کامل — برای پیش‌نمایش ضربه بزنید',
      pdfTitle2: 'چطور PLP رو بازطراحی کردیم',
      pdfDesc2: 'بررسی عمیق فرآیند — برای پیش‌نمایش ضربه بزنید',
      principles: {
        title: 'اصول طراحی',
        items: [
          { icon: <Eye className="w-4 h-4 text-white" />, label: 'طراحی برای اسکن، نه مرور', bg: 'bg-blue-500' },
          { icon: <Layers className="w-4 h-4 text-white" />, label: 'کاهش بار شناختی کاربران', bg: 'bg-indigo-500' },
          { icon: <Grid className="w-4 h-4 text-white" />, label: 'افزایش چگالی مؤثر اطلاعات', bg: 'bg-purple-500' },
          { icon: <MousePointer className="w-4 h-4 text-white" />, label: 'حفظ تمرکز کاربران بر رزرو', bg: 'bg-pink-500' },
        ]
      },
      solutions: {
        title: 'راهکارها',
        items: [
          { icon: <Grid className="w-4 h-4 text-white" />, label: 'بازطراحی کارت‌های هتل', bg: 'bg-blue-500' },
          { icon: <Filter className="w-4 h-4 text-white" />, label: 'افزودن فیلترهای سریع', bg: 'bg-indigo-500' },
          { icon: <MousePointer className="w-4 h-4 text-white" />, label: 'یکپارچه‌سازی مدل تعاملات', bg: 'bg-purple-500' },
          { icon: <X className="w-4 h-4 text-white" />, label: 'حذف ناوبری پایین صفحه', bg: 'bg-red-500' },
          { icon: <Target className="w-4 h-4 text-white" />, label: 'رفتار Sticky برای فیلترها', bg: 'bg-orange-500' },
          { icon: <List className="w-4 h-4 text-white" />, label: 'نمای شبکه‌ای/لیستی دسکتاپ', bg: 'bg-teal-500' },
        ]
      },
      tradeoffs: {
        title: 'Trade-off ها',
        items: [
          { label: 'چگالی اطلاعات', pro: 'بهبود کارآیی مقایسه', con: 'کاهش تمرکز بصری روی هر آیتم' },
          { label: 'حذف ناوبری', pro: 'تمرکز بهتر روی قیف رزرو', con: 'کاهش فرصت اکتشاف' },
          { label: 'پنهان‌سازی فیلترها', pro: 'محتوای بیشتر روی صفحه', con: 'کاهش قابلیت کشف فیلترها' },
        ]
      },
      reflection: {
        title: 'جمع‌بندی کلیدی',
        text: 'مسئله اصلی یک مشکل بصری نبود؛ یک مسئله رفتاری بود. کاربران به گزینه‌های بیشتر نیاز نداشتند. آن‌ها به محیطی بهتر برای تصمیم‌گیری نیاز داشتند. یک صفحه لیست هتل صرفاً مجموعه‌ای از گزینه‌ها نیست — بلکه محیطی برای تصمیم‌گیری است.',
      }
    }
  };

  const c = isRTL ? content.fa : content.en;

  return (
    <div className="space-y-4" dir={dir}>

      {/* Before/After Visual Shift */}
      <SectionCard
        icon={<TrendingUp className="w-4 h-4 text-white" />}
        title={isRTL ? 'تغییر دیدگاه — از ناوبری به تصمیم‌گیری' : 'The Shift — Navigation → Decision Making'}
        accentColor="bg-gradient-to-br from-blue-500 to-indigo-600"
        defaultOpen={true}
      >
        <DesignShiftDiagram />
      </SectionCard>

      {/* Design Principles */}
      <SectionCard
        icon={<Target className="w-4 h-4 text-white" />}
        title={c.principles.title}
        accentColor="bg-gradient-to-br from-purple-500 to-pink-600"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
          {c.principles.items.map((item, i) => (
            <div key={i} className={`flex items-center gap-3 bg-white/20 dark:bg-white/5 rounded-xl p-3 border border-white/20 dark:border-white/10 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center flex-shrink-0`}>
                {item.icon}
              </div>
              <span className={`text-xs font-medium text-gray-800 dark:text-gray-200 ${isRTL ? 'text-right' : 'text-left'}`}>{item.label}</span>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Solutions */}
      <SectionCard
        icon={<CheckCircle2 className="w-4 h-4 text-white" />}
        title={c.solutions.title}
        accentColor="bg-gradient-to-br from-green-500 to-teal-600"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
          {c.solutions.items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className={`flex items-center gap-3 bg-white/20 dark:bg-white/5 rounded-xl p-3 border border-white/20 dark:border-white/10 cursor-default ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center flex-shrink-0 shadow`}>
                {item.icon}
              </div>
              <span className={`text-xs font-medium text-gray-800 dark:text-gray-200 ${isRTL ? 'text-right' : 'text-left'}`}>{item.label}</span>
            </motion.div>
          ))}
        </div>
      </SectionCard>

      {/* Trade-offs */}
      <SectionCard
        icon={<AlertTriangle className="w-4 h-4 text-white" />}
        title={c.tradeoffs.title}
        accentColor="bg-gradient-to-br from-orange-500 to-red-600"
      >
        <div className="space-y-3 mt-2">
          {c.tradeoffs.items.map((item, i) => (
            <TradeoffCard key={i} label={item.label} pro={item.pro} con={item.con} isRTL={isRTL} />
          ))}
        </div>
      </SectionCard>

      {/* Key Reflection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 dark:from-blue-500/30 dark:to-indigo-500/30 rounded-2xl p-5 border border-blue-300/40 dark:border-blue-500/40"
      >
        <div className={`flex items-center gap-2 mb-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <span className="font-bold text-blue-800 dark:text-blue-200 text-sm">{c.reflection.title}</span>
        </div>
        <p className={`text-sm text-blue-900 dark:text-blue-100 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
          {c.reflection.text}
        </p>
      </motion.div>
    </div>
  );
}
