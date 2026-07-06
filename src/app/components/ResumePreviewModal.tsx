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
  title: 'Product Designer',
  location: 'Mashhad, Iran',
  timezone: 'GMT +3:30',
  phone: '+98 936 936 9768',
  email: 'arsham.kz770@gmail.com',
  linkedin: 'linkedin.com/in/arsham-khayatzadeh',
  portfolio: 'arsham-portfolio.com',
  summary:
    'Data-driven Product Designer with 3+ years of experience optimizing user experiences for a high-traffic booking platform (500K+ MAU). Specialized in conversion rate optimization, design systems, and evidence-based UX decisions. Proven track record of reducing booking completion time by 45%, improving conversion rates by 20%, and building scalable design systems that reduce design iteration time by 40%. Passionate about creating experiences that drive measurable business growth through thoughtful design, rigorous testing, and cross-functional collaboration with Product, Engineering, and QA teams.',
  experience: [
    {
      title: 'Product Designer',
      company: 'IranHotelOnline',
      period: 'October 2025 – Present',
      responsibilities: [
        'Led complete end-to-end redesign of reservation flow, reducing booking completion time from 8 minutes to 4 minutes and improving conversion rate by 20% through data-driven iterations based on Google Analytics and Microsoft Clarity insights.',
        'Designed and launched a comprehensive Atomic Design System in Figma, reducing design iteration time by 40% and ensuring UI consistency across 50+ screens and components.',
        'Established a rigorous 7-step design process framework (guerrilla testing, analytics review, stakeholder alignment, technical validation, high-fidelity design, staging tests, and QA) now adopted across the design team for high-impact projects.',
        'Conducted bi-weekly usability testing sessions with real users, translating behavioral insights into actionable design improvements that directly impacted key business metrics.',
        'Collaborated daily with PM, PO, developers, and QA to align design decisions with product OKRs, technical constraints, and business goals.',
        'Redesigned B2B dashboard for hotel managers, cutting task completion time by 45% through improved information architecture and mobile-responsive design.',
      ],
    },
    {
      title: 'UI/UX Designer',
      company: 'IranHotelOnline',
      period: 'December 2024 – September 2025',
      responsibilities: [
        'Designed UI, wireframes, and prototypes for key features across a high-traffic B2C booking platform, supporting redesign initiatives that improved conversion and user satisfaction.',
        'Conducted user research, session recording analysis, and usability testing to identify pain points and inform iterative design improvements.',
        'Created foundational components for the design system, establishing reusable patterns for buttons, forms, cards, and navigation elements.',
        'Collaborated with developers to ensure pixel-perfect implementation and maintain design quality standards.',
      ],
    },
    {
      title: 'Junior UI Designer',
      company: 'CtrlA Co.',
      period: 'August 2023 – October 2024',
      responsibilities: [
        'Designed UI layouts, wireframes, and prototypes for web and mobile applications, focusing on clean, user-friendly interfaces and consistent visual language.',
        'Created visual assets including icons, illustrations, and branded graphics to support product development and marketing efforts.',
      ],
    },
  ],
  skills:
    'Product Design | UX/UI Design | Design Systems (Atomic Design) | Figma (Advanced) | Prototyping | User Research | Usability Testing | A/B Testing | Conversion Rate Optimization (CRO) | Google Analytics | Microsoft Clarity | Heatmap Analysis | User Journey Mapping | Information Architecture | Responsive & Mobile Design | Cross-functional Collaboration (Product, Engineering, QA) | Agile/Scrum | Stakeholder Management | Design QA | HTML/CSS (Basic Understanding)',
  education: [
    {
      title: 'UI/UX Design Certification (Advanced)',
      institution: 'Tehran Technical Complex',
      period: '2022 – 2023',
    },
  ],
};

// Resume data in Farsi
const resumeDataFA: ResumeData = {
  name: 'آرشام خیاط‌زاده',
  title: 'طراح محصول (Product Designer)',
  location: 'مشهد، ایران',
  timezone: '',
  phone: 'IR(+98) 936 936 9768',
  email: 'arsham.kz770@gmail.com',
  linkedin: 'linkedin.com/in/arsham-khayatzadeh',
  portfolio: 'arsham-portfolio.com',
  summary:
    'طراح محصول دادهمحور با بیش از ۳ سال تجربه در بهینهسازی تجربه کاربری برای پلتفرم رزرو پرترافیک با بیش از ۵۰۰ هزار کاربر فعال ماهانه. متخصص در بهینهسازی نرخ تبدیل، طراحی سیستمهای طراحی مقیاسپذیر و تصمیمگیریهای UX مبتنی بر داده. سابقه اثباتشده در کاهش زمان تکمیل رزرو تا ۴۵٪، بهبود نرخ تبدیل تا ۲۰٪ و ساخت سیستم طراحی که زمان تکرار طراحی را ۴۰٪ کاهش داده است. علاقهمند به خلق تجربههایی که از طریق طراحی دقیق، تست جامع و همکاری بینتیمی با تیمهای Product، Engineering و QA منجر به رشد کسبوکار قابل اندازهگیری میشوند.',
  experience: [
    {
      title: 'Product Designer - IranHotelOnline',
      company: '',
      period: 'مهر ۱۴۰۴ - تاکنون',
      responsibilities: [
        'هدایت کامل بازطراحی فلو رزرو (End-to-End)، کاهش زمان تکمیل رزرو از ۸ دقیقه به ۴ دقیقه و بهبود نرخ تبدیل تا ۲۰٪ از طریق تکرارهای دادهمحور مبتنی بر Google Analytics و Microsoft Clarity',
        'طراحی و راهاندازی یک سیستم طراحی جامع Atomic Design در Figma که زمان تکرار طراحی را ۴۰٪ کاهش داده و یکپارچگی UI را در بیش از ۵۰ صفحه و کامپوننت تضمین کرده است',
        'تعریف یک چارچوب فرایند طراحی ۷ مرحلهای جامع (تست گوریلا، بررسی آنالیتیکس، همراستاسازی ذینفعان، اعتبارسنجی فنی، طراحی با کیفیت بالا، تست استیج و QA) که اکنون در سراسر تیم طراحی برای پروژههای تاثیرگذار استفاده میشود',
        'برگزاری جلسات تست کاربرپسندی دوهفتهای با کاربران واقعی، ترجمه بینشهای رفتاری به بهبودهای طراحی قابل اجرا که مستقیماً بر شاخصهای کلیدی کسبوکار تأثیرگذار بودهاند',
        'همکاری روزانه با PM، PO، توسعهدهندگان و QA برای همراستا کردن تصمیمات طراحی با OKRهای محصول، محدودیتهای فنی و اهداف کسبوکار',
        'بازطراحی داشبورد B2B برای مدیران هتل، کاهش زمان تکمیل وظایف تا ۴۵٪ از طریق بهبود معماری اطلاعات و طراحی واکنشگرای موبایل',
      ],
    },
    {
      title: 'UI/UX Designer - IranHotelOnline',
      company: '',
      period: 'آذر ۱۴۰۳ - مهر ۱۴۰۴',
      responsibilities: [
        'طراحی UI، وایرفریم و پروتوتایپ برای فیچرهای کلیدی در یک پلتفرم B2C پرترافیک، پشتیبانی از ابتکارات بازطراحی که تبدیل و رضایت کاربر را بهبود بخشیدند',
        'انجام تحقیقات کاربری، تحلیل ضبط جلسات و تست کاربرپسندی برای شناسایی نقاط درد و اطلاعرسانی بهبودهای طراحی تکراری',
        'ایجاد کامپوننتهای پایهای برای سیستم طراحی، ایجاد الگوهای قابل استفاده مجدد برای دکمهها، فرمها، کارتها و عناصر ناوبری',
        'همکاری با توسعهدهندگان برای اطمینان از پیادهسازی pixel-perfect و حفظ استانداردهای کیفیت طراحی',
      ],
    },
    {
      title: 'Junior UI Designer - CtrlA Co.',
      company: '',
      period: 'مرداد ۱۴۰۲ - مهر ۱۴۰۳',
      responsibilities: [
        'طراحی لایهبندیهای UI، وایرفریم و پروتوتایپ برای برنامههای وب و موبایل، با تمرکز بر رابطهای تمیز و کاربرپسند و زبان بصری یکپارچه',
        'ایجاد داراییهای بصری شامل آیکونها، تصاویر و گرافیکهای برندشده برای پشتیبانی از توسعه محصول و تلاشهای بازاریابی',
      ],
    },
  ],
  skills:
    'طراحی محصول | طراحی UX/UI | سیستمهای طراحی (Atomic Design) | Figma (پیشرفته) | پروتوتایپ‌سازی | تحقیقات کاربر | تست کاربرپسندی | تست A/B | بهینهسازی نرخ تبدیل (CRO) | Google Analytics | Microsoft Clarity | تحلیل Heatmap | نقشهبرداری سفر کاربر | معماری اطلاعات | طراحی واکنشگرا و موبایل | همکاری بین‌تیمی (محصول، مهندسی، QA) | Agile/Scrum | مدیریت ذینفعان | QA طراحی | HTML/CSS (درک پایه)',
  education: [
    {
      title: 'گواهینامه طراحی UI/UX (پیشرفته)',
      institution: 'مجتمع فنی تهران',
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

  const handleDownload = async () => {
    setIsDownloading(true);

    try {
      // Use html2pdf to convert the resume preview to PDF
      const html2pdf = (await import('html2pdf.js')).default;

      // Get the resume element
      const resumeElement = document.getElementById('resume-content');

      if (!resumeElement) {
        console.error('Resume element not found');
        setIsDownloading(false);
        return;
      }

      // Configure PDF options
      const opt = {
        margin: [10, 10, 10, 10],
        filename: `Arsham_Khayatzadeh_Resume_${language.toUpperCase()}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          letterRendering: true,
          logging: false
        },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait',
          compress: true
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      };

      // Generate and download PDF
      await html2pdf().set(opt).from(resumeElement).save();

      setTimeout(() => {
        setIsDownloading(false);
        onClose();
      }, 500);

    } catch (error) {
      console.error('PDF generation error:', error);
      setIsDownloading(false);
      alert(language === 'en' ? 'Failed to generate PDF' : 'خطا در تولید PDF');
    }
  };

  // Keep the old HTML download as backup (commented out)
  const handleDownloadHTML_BACKUP = () => {
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
          className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[210] bg-white/90 backdrop-blur-xl p-3 rounded-xl text-gray-900 hover:bg-white transition-all border border-white/40 shadow-2xl group"
        >
          <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
        </button>

        {/* Modal content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative bg-white rounded-2xl border border-white/40 shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 bg-gradient-to-r from-indigo-500/10 to-purple-500/10">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                {language === 'en' ? 'Resume Preview' : 'پیش‌نمایش رزومه'}
              </h2>
              <p className="text-sm text-gray-600 mt-1">
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
            className="flex-1 overflow-y-auto p-6 sm:p-8 bg-gray-50"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(99, 102, 241, 0.3) rgba(0,0,0,0.1)'
            }}
          >
            <div id="resume-content" className="bg-white rounded-xl shadow-lg p-6 sm:p-10 max-w-3xl mx-auto text-gray-900">
              {/* Header */}
              <div className="mb-6 pb-4 border-b-2 border-indigo-600">
                <h1 className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-2">{resumeData.name}</h1>
                <div className="text-base sm:text-lg font-semibold text-gray-900 mb-3">{resumeData.title}</div>
                <div className="text-xs sm:text-sm text-gray-600 space-y-1">
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
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">
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
                      <div className="font-bold text-sm sm:text-base text-gray-900">{exp.title}</div>
                      <div className="text-xs sm:text-sm text-gray-600 mb-2">
                        {exp.company ? `${exp.company} | ${exp.period}` : exp.period}
                      </div>
                      <ul className={`text-xs sm:text-sm space-y-1 ${isRTL ? 'pr-5' : 'pl-5'} list-disc text-gray-700`}>
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
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">
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
                      <div className="font-bold text-sm text-gray-900">{edu.title}</div>
                      <div className="text-xs sm:text-sm text-gray-600">
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