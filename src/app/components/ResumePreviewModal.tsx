import { useEffect, useState } from 'react';
import { X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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

interface ResumePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'fa';
}

export function ResumePreviewModal({ isOpen, onClose, language }: ResumePreviewModalProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const isRTL = language === 'fa';
  const resumeData = isRTL ? resumeDataFA : defaultResumeDataEN;

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleDownload = () => {
    setIsDownloading(true);

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

    // Create a blob and download it directly
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Arsham_Khayatzadeh_Resume_${language.toUpperCase()}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setTimeout(() => {
      setIsDownloading(false);
      onClose();
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 dark:bg-black/85 backdrop-blur-xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[210] bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-3 rounded-xl text-gray-900 dark:text-white hover:bg-white dark:hover:bg-slate-800 transition-all border border-white/40 dark:border-white/20 shadow-2xl group"
        >
          <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
        </button>

        {/* Modal content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative bg-white dark:bg-slate-900 rounded-2xl border border-white/40 dark:border-white/20 shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                {language === 'en' ? 'Resume Preview' : 'پیش‌نمایش رزومه'}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {language === 'en' ? 'English Version' : 'نسخه فارسی'}
              </p>
            </div>
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
            >
              <Download className="w-5 h-5" />
              <span>{isDownloading ? (language === 'en' ? 'Downloading...' : 'در حال دانلود...') : (language === 'en' ? 'Download' : 'دانلود')}</span>
            </button>
          </div>

          {/* Resume Preview */}
          <div
            dir={isRTL ? 'rtl' : 'ltr'}
            className="flex-1 overflow-y-auto p-6 sm:p-8 bg-gray-50 dark:bg-slate-800"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(99, 102, 241, 0.3) rgba(0,0,0,0.1)'
            }}
          >
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6 sm:p-10 max-w-3xl mx-auto">
              {/* Header */}
              <div className="mb-6 pb-4 border-b-2 border-indigo-600">
                <h1 className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-2">{resumeData.name}</h1>
                <div className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3">{resumeData.title}</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <div>{resumeData.location}{resumeData.timezone ? ` | ${resumeData.timezone}` : ''}</div>
                  <div>{isRTL ? 'شماره تماس' : 'Phone'}: {resumeData.phone}</div>
                  <div>{isRTL ? 'ایمیل' : 'Email'}: {resumeData.email}</div>
                  <div>{resumeData.linkedin} | {resumeData.portfolio}</div>
                </div>
              </div>

              {/* Summary */}
              <div className="mb-6">
                <h2 className="text-base sm:text-lg font-bold text-indigo-600 mb-2 pb-1 border-b border-indigo-600">
                  {isRTL ? 'خلاصه حرفه‌ای' : 'Summary'}
                </h2>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                  {resumeData.summary}
                </p>
              </div>

              {/* Experience */}
              <div className="mb-6">
                <h2 className="text-base sm:text-lg font-bold text-indigo-600 mb-3 pb-1 border-b border-indigo-600">
                  {isRTL ? 'سوابق شغلی' : 'Experience'}
                </h2>
                <div className="space-y-4">
                  {resumeData.experience.map((exp, index) => (
                    <div key={index}>
                      <div className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">{exp.title}</div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {exp.company ? `${exp.company} | ${exp.period}` : exp.period}
                      </div>
                      <ul className={`text-xs sm:text-sm space-y-1 ${isRTL ? 'pr-5' : 'pl-5'} list-disc text-gray-700 dark:text-gray-300`}>
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="leading-relaxed">{resp}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h2 className="text-base sm:text-lg font-bold text-indigo-600 mb-2 pb-1 border-b border-indigo-600">
                  {isRTL ? 'فرایند و رویکرد طراحی' : 'Skills'}
                </h2>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                  {resumeData.skills}
                </p>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-base sm:text-lg font-bold text-indigo-600 mb-3 pb-1 border-b border-indigo-600">
                  {isRTL ? 'آموزش' : 'Education & Certifications'}
                </h2>
                <div className="space-y-3">
                  {resumeData.education.map((edu, index) => (
                    <div key={index}>
                      <div className="font-bold text-sm text-gray-900 dark:text-white">{edu.title}</div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        {edu.institution} ({edu.period})
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}