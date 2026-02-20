import { jsPDF } from 'jspdf';
import { Download, ChevronDown, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'motion/react';
import { createPortal } from 'react-dom';
import { haptic } from '../utils/haptics';
import { useLanguage } from '../contexts/LanguageContext';

interface ResumeDownloaderProps {
  variant?: 'default' | 'mobile-card';
}

interface ResumeData {
  name: string;
  title: string;
  location: string;
  timezone: string;
  phone: string;
  email: string;
  linkedin: string;
  portfolio: string;
  summary: string;
  experience: Array<{
    title: string;
    company: string;
    period: string;
    responsibilities: string[];
  }>;
  skills: string;
  education: Array<{
    title: string;
    institution: string;
    period: string;
  }>;
}

// Resume data in English
const defaultResumeDataEN: ResumeData = {
  name: 'Arsham Khayatzadeh',
  title: 'Product/UI-UX Designer',
  location: 'Tehran, Iran',
  timezone: 'GMT +3:30',
  phone: '+98 936 936 9768',
  email: 'arsham.kz770@gmail.com',
  linkedin: 'linkedin.com/in/arsham-khayatzadeh',
  portfolio: 'arsham-portfolio.com',
  summary:
    'Product Designer specializing in data-driven UX and conversion optimization for high-traffic B2C products. 1.5+ years of experience designing end-to-end user journeys on an online booking platform with 500K+ MAU. Proven impact includes a 20% increase in conversion rates and a 30% reduction in operational errors through research-led redesigns, experimentation, and scalable design systems.',
  experience: [
    {
      title: 'Product Designer',
      company: 'IranHotelOnline',
      period: 'October 2025 – Present',
      responsibilities: [
        'Built and scaled an Atomic Design System in Figma, reducing design iteration time by 40%.',
        'Led data-driven redesigns using GA and Microsoft Clarity, increasing conversion rates by 20%.',
        'Optimized reservation flows, cutting task completion time from 6 min to 2.',
        'Worked cross-functionally with Product, Data, and Engineering teams.',
      ],
    },
    {
      title: 'UI/UX Designer',
      company: 'Iran Hotel Online',
      period: 'December 2024 – September 2025',
      responsibilities: [
        'Contributed to UI design, wireframing, and prototyping for key features in a high-traffic B2C platform, supporting redesign initiatives that improved user flows and reservation processes.',
        'Conducted user research and usability testing to inform data-driven iterations, building foundational experience in conversion optimization and analytics tools.',
      ],
    },
    {
      title: 'Junior UI Designer',
      company: 'CtrlA Co.',
      period: 'Aug 2023 – Oct 2024',
      responsibilities: [
        'Created UI designs, wireframes, prototypes, and visual assets for web and mobile interfaces, focusing on user-friendly layouts and consistent branding.',
      ],
    },
  ],
  skills:
    'Product Design, UX/UI Design, Design Systems, Atomic Design, Figma, Prototyping, UX Research, Usability Testing, A/B Testing, Conversion Rate Optimization, Google Analytics, Microsoft Clarity, Agile, Cross-functional Collaboration',
  education: [
    {
      title: 'UI/UX Design Certification',
      institution: 'Tehran Technical Complex',
      period: '2022 – 2023',
    },
  ],
};

// Resume data in Farsi
const resumeDataFA: ResumeData = {
  name: 'Arsham Khayatzadeh',
  title: 'طراح محصول (Product Designer)',
  location: 'مشهد، ایران',
  timezone: '',
  phone: 'IR(+98) 936 936 9768',
  email: 'arsham.kz770@gmail.com',
  linkedin: 'لینکدین',
  portfolio: 'ایمیل',
  summary:
    'طراح محصول دادهمحور با تمرکز بر بهینهسازی نرخ تبدیل، طراحی سیستمهای مقیاسپذیر و تصمیمگیریهای UX مبتنی بر شواهد و داده. علاقمند به خلق تجربههایی که علاوه بر جذابیت بصری و کاربرپسندی، بهصورت مستقیم موجب رشد بیزنس میشوند. دارای تجربه طراحی محصول برای پلتفرمهایی با بیش از ۵۰۰,۰۰۰ کاربر فعال ماهانه و همکاری نزدیک با تیمهای محصول، تست و توسعه بهمنظور بهبود شاخصهای کلیدی کسبوکار.',
  experience: [
    {
      title: 'Product Designer (promoted) - IranHotelOnline',
      company: '',
      period: 'مهر ۱۴۰۴ - تاکنون',
      responsibilities: [
        'طراحی و توسعه یک Design System مبتنی بر Atomic Design، کاهش زمان تکرار طراحی تا ۴۰٪',
        'هدایت کامل فرایند طراحی (End-to-End) و لانچ محصولات جدید',
        'بازطراحیهای دادهمحور با استفاده از Google Analytics و Microsoft Clarity و افزایش نرخ تبدیل تا ۲۰٪',
        'بهینهسازی فلو رزرو و کاهش زمان تکمیل رزرو از ۸ دقیقه به ۴ دقیقه',
        'همکاری نزدیک بینتیمی با تیمهای Product، Test و Development',
      ],
    },
    {
      title: 'UI/UX Designer - IranHotelOnline',
      company: '',
      period: 'آذر ۱۴۰۳ - مهر ۱۴۰۴',
      responsibilities: [
        'مشارکت در طراحی UI، وایرفریم و پروتوتایپ برای فیچرهای کلیدی یک پلتفرم B2C پرترافیک',
        'بهبود جریانهای کاربری و فرایند رزرو در پروژههای بازطراحی',
        'طراحی User Flow برای پنلهای مدیریتی و داشبورد',
        'ایجاد کامپوننتهای پایه و تودرتویهای Design System',
      ],
    },
    {
      title: 'Junior Ui Designer - Company Ctrl A',
      company: '',
      period: 'مرداد ۱۴۰۲ - مهر ۱۴۰۳',
      responsibilities: [
        'طراحی رابط کاربری ساده، وایرفریم و پروتوتایپ برای اپلیکیشنهای موبایل (بدون فاز پروداکشن)',
      ],
    },
  ],
  skills:
    'تحقیق و کشف: مصاحبه با کاربران، تحلیل دادههای رفتاری (GA، Clarity)، تعریف فرضیه و اهداف طراحی | ایدهپردازی و طراحی: طراحی User Flow، وایرفریم، پروتوتایپ در Figma و جلسات Co-design | تست و بهبود: A/B تست، تحلیل قیف و بهینهسازی بر اساس دادههای واقعی کاربران | همکاری بینتیمی: تعامل روزانه با تیمهای Product، Test و Development برای همراستاسازی تصمیمهای طراحی با OKRهای محصول',
  education: [
    {
      title: 'شروع یادگیری این حوزه از طریق:',
      institution: 'گذراندن دو دوره UI/UX Design مقدماتی و پیشرفته در مجتمع فنی تهران',
      period: '۱۴۰۱ - ۱۴۰۳',
    },
  ],
};

// PDF generation function
function generateResumePDF(language: 'en' | 'fa') {
  const isRTL = language === 'fa';
  const resumeData = isRTL ? resumeDataFA : defaultResumeDataEN;
  
  // Create HTML content for the resume
  const htmlContent = `
<!DOCTYPE html>
<html lang="${isRTL ? 'fa' : 'en'}" dir="${isRTL ? 'rtl' : 'ltr'}">
<head>
  <meta charset="UTF-8">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    @page {
      size: A4;
      margin: 0;
    }
    
    body {
      font-family: ${isRTL ? 'Tahoma, Arial' : 'Arial, sans-serif'};
      line-height: 1.6;
      color: #1f2937;
      background: white;
      padding: 40px;
      font-size: ${isRTL ? '13px' : '12px'};
    }
    
    .header {
      margin-bottom: 25px;
      border-bottom: 2px solid #6366f1;
      padding-bottom: 15px;
    }
    
    h1 {
      color: #6366f1;
      font-size: ${isRTL ? '28px' : '26px'};
      margin-bottom: 8px;
      font-weight: bold;
    }
    
    .title {
      font-size: ${isRTL ? '16px' : '15px'};
      color: #1f2937;
      margin-bottom: 12px;
      font-weight: 600;
    }
    
    .contact-info {
      font-size: ${isRTL ? '11px' : '10px'};
      color: #64748b;
      line-height: 1.8;
    }
    
    .contact-info div {
      margin-bottom: 4px;
    }
    
    .section {
      margin-top: 20px;
    }
    
    .section-title {
      color: #6366f1;
      font-size: ${isRTL ? '16px' : '15px'};
      font-weight: bold;
      margin-bottom: 10px;
      padding-bottom: 5px;
      border-bottom: 1.5px solid #6366f1;
    }
    
    .summary {
      font-size: ${isRTL ? '12px' : '11px'};
      line-height: 1.7;
      text-align: justify;
      margin-bottom: 15px;
    }
    
    .experience-item {
      margin-bottom: 18px;
    }
    
    .experience-title {
      font-size: ${isRTL ? '14px' : '13px'};
      font-weight: bold;
      color: #1f2937;
      margin-bottom: 5px;
    }
    
    .experience-meta {
      font-size: ${isRTL ? '11px' : '10px'};
      color: #64748b;
      margin-bottom: 8px;
    }
    
    .responsibilities {
      list-style: ${isRTL ? 'arabic-indic' : 'disc'};
      ${isRTL ? 'padding-right: 20px;' : 'padding-left: 20px;'}
    }
    
    .responsibilities li {
      font-size: ${isRTL ? '12px' : '11px'};
      margin-bottom: 5px;
      line-height: 1.6;
    }
    
    .skills {
      font-size: ${isRTL ? '12px' : '11px'};
      line-height: 1.8;
      text-align: justify;
    }
    
    .education-item {
      margin-bottom: 12px;
    }
    
    .education-title {
      font-size: ${isRTL ? '13px' : '12px'};
      font-weight: bold;
      color: #1f2937;
      margin-bottom: 4px;
    }
    
    .education-meta {
      font-size: ${isRTL ? '11px' : '10px'};
      color: #64748b;
    }
    
    @media print {
      body {
        padding: 30px;
      }
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>${resumeData.name}</h1>
    <div class="title">${resumeData.title}</div>
    <div class="contact-info">
      <div>${resumeData.location}${resumeData.timezone ? ' | ' + resumeData.timezone : ''}</div>
      <div>${isRTL ? 'شماره تماس' : 'Phone'}: ${resumeData.phone}</div>
      <div>${isRTL ? 'ایمیل' : 'Email'}: ${resumeData.email}</div>
      <div>${resumeData.linkedin} | ${resumeData.portfolio}</div>
    </div>
  </div>
  
  <div class="section">
    <div class="section-title">${isRTL ? 'خلاصه حرفه‌ای' : 'Summary'}</div>
    <div class="summary">${resumeData.summary}</div>
  </div>
  
  <div class="section">
    <div class="section-title">${isRTL ? 'سوابق شغلی' : 'Experience'}</div>
    ${resumeData.experience.map(exp => `
      <div class="experience-item">
        <div class="experience-title">${exp.title}</div>
        ${exp.company ? `<div class="experience-meta">${exp.company} | ${exp.period}</div>` : `<div class="experience-meta">${exp.period}</div>`}
        <ul class="responsibilities">
          ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
        </ul>
      </div>
    `).join('')}
  </div>
  
  <div class="section">
    <div class="section-title">${isRTL ? 'فرایند و رویکرد طراحی' : 'Skills'}</div>
    <div class="skills">${resumeData.skills}</div>
  </div>
  
  <div class="section">
    <div class="section-title">${isRTL ? 'آموزش' : 'Education & Certifications'}</div>
    ${resumeData.education.map(edu => `
      <div class="education-item">
        <div class="education-title">${edu.title}</div>
        <div class="education-meta">${edu.institution} (${edu.period})</div>
      </div>
    `).join('')}
  </div>
</body>
</html>
  `;

  // Create a new window and print
  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    
    // Wait for content to load then trigger print
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 250);
    };
  }
}

export function ResumeDownloader({ variant = 'default' }: ResumeDownloaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close dropdown when clicking outside (desktop only)
  useEffect(() => {
    if (isMobile) return;
    
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, isMobile]);

  const handleDownload = (language: 'en' | 'fa') => {
    haptic('success');
    generateResumePDF(language);
    toast.success('Resume downloaded successfully!', {
      description: `Your ${language === 'en' ? 'English' : 'Persian'} resume has been downloaded.`,
      duration: 3000,
    });
    setIsOpen(false);
  };

  const { t } = useLanguage();

  return (
    <>
      <div ref={dropdownRef} className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 rounded-full transition-all duration-200"
          aria-label={t('resume.downloadAriaLabel')}
        >
          <Download className="w-4 h-4" />
          <span className="text-xs font-medium">Resume</span>
          <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          
          {/* Hover Tooltip - Only for desktop variant when closed */}
          {variant === 'default' && !isOpen && (
            <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200 whitespace-nowrap">
              <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-xl">
                Download PDF Resume
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-8 border-transparent border-b-gray-900" />
              </div>
            </div>
          )}
        </button>
        
        {/* Dropdown Menu - Desktop Only */}
        {isOpen && !isMobile && (
          <div className="absolute top-full mt-2 left-0 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50 min-w-[140px]">
            <button
              onClick={() => handleDownload('fa')}
              className="w-full px-4 py-3 text-left text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Farsi</span>
            </button>
            <div className="w-full h-px bg-gray-200" />
            <button
              onClick={() => handleDownload('en')}
              className="w-full px-4 py-3 text-left text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>English</span>
            </button>
          </div>
        )}
      </div>

      {/* Bottom Sheet - Mobile Only */}
      {isOpen && isMobile && createPortal(
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999]"
              />
              
              {/* Bottom Sheet */}
              <motion.div
                key="sheet"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed bottom-0 left-0 right-0 z-[10000] bg-white rounded-t-3xl shadow-2xl"
                style={{ paddingBottom: 'env(safe-area-inset-bottom, 20px)' }}
              >
                <div className="p-6 space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">Download Resume</h3>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <p className="text-sm text-gray-600">
                    Choose your preferred language
                  </p>

                  {/* Language Options */}
                  <div className="space-y-3 pb-4">
                    <button
                      onClick={() => handleDownload('fa')}
                      className="w-full flex items-center gap-3 px-5 py-4 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all active:scale-98"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <Download className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="font-semibold text-gray-900">Persian Resume</div>
                        <div className="text-sm text-gray-600">رزومه فارسی</div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleDownload('en')}
                      className="w-full flex items-center gap-3 px-5 py-4 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all active:scale-98"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <Download className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="font-semibold text-gray-900">English Resume</div>
                        <div className="text-sm text-gray-600">Download PDF</div>
                      </div>
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}

// Export the PDF generation function for use in mobile menu
export { generateResumePDF };