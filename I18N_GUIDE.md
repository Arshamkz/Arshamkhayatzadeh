# راهنمای دوزبانه‌سازی پورتفولیو

## ✅ کارهای انجام شده:

### 1. نصب و پیکربندی i18next
- ✅ Package های `i18next` و `react-i18next` نصب شدند
- ✅ فایل `/src/app/i18n/config.ts` پیکربندی شد
- ✅ LanguageContext به i18n متصل شد
- ✅ RTL support اضافه شد

### 2. فایل‌های ترجمه
- ✅ `/src/app/i18n/locales/en.json` - ترجمه انگلیسی کامل
- ✅ `/src/app/i18n/locales/fa.json` - ترجمه فارسی حرفه‌ای و روان

### 3. کامپوننت‌های آپدیت شده
- ✅ `LanguageContext.tsx` - متصل به i18n + RTL support
- ✅ `AtomicDesignGallery.tsx` - دوزبانه شده
- ✅ `Navigation.tsx` - کامپوننت نمونه ساخته شد
- ✅ `App.tsx` - LanguageProvider اضافه شد

---

## 📝 نحوه آپدیت بقیه کامپوننت‌ها:

### مرحله 1: Import کردن useLanguage

```typescript
import { useLanguage } from '../contexts/LanguageContext';
```

### مرحله 2: استفاده از hook

```typescript
export function MyComponent() {
  const { t } = useLanguage();
  
  // بقیه کد...
}
```

### مرحله 3: جایگزینی متن‌های ثابت

#### ❌ قبل:
```tsx
<h1>Featured Projects</h1>
<p>View Case Study</p>
```

#### ✅ بعد:
```tsx
<h1>{t('projects.sectionTitle')}</h1>
<p>{t('projects.viewDetails')}</p>
```

---

## 🎯 کامپوننت‌هایی که باید آپدیت شوند:

### 1. صفحه Home (`/src/app/pages/Home.tsx`)
```typescript
// مثال:
<h1>Hi, I'm Arsham Khayatzadeh</h1>
// تبدیل به:
<h1>{t('hero.greeting')} {t('hero.name')}</h1>
```

### 2. صفحه CaseStudy (`/src/app/pages/CaseStudy.tsx`)
```typescript
// مثال:
<h2>Project Overview</h2>
// تبدیل به:
<h2>{t('caseStudy.overview')}</h2>
```

### 3. کامپوننت‌های مهم:
- `ContactMenu.tsx`
- `ResumeDownloader.tsx`
- `Footer.tsx` (اگر وجود دارد)
- هر کامپوننتی که متن قابل نمایش دارد

---

## 🌐 RTL Support

سیستم به طور خودکار RTL را مدیریت می‌کند:
- زبان فارسی → `dir="rtl"` 
- زبان انگلیسی → `dir="ltr"`

برای استایل‌های خاص RTL:
```tsx
// استفاده از کلاس rtl: در Tailwind
<div className="ml-4 rtl:mr-4 rtl:ml-0">
  محتوا
</div>

// یا برای چرخش آیکون‌ها
<ChevronRight className="rtl:rotate-180" />
```

---

## 📦 ساختار فایل‌های ترجمه

### en.json:
```json
{
  "nav": {
    "work": "Work",
    "about": "About"
  },
  "hero": {
    "greeting": "Hi, I'm"
  }
}
```

### fa.json:
```json
{
  "nav": {
    "work": "نمونه‌کارها",
    "about": "درباره من"
  },
  "hero": {
    "greeting": "سلام، من"
  }
}
```

---

## 🎨 مثال کامل یک کامپوننت:

```typescript
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function ProjectCard({ project }: { project: Project }) {
  const { t, language } = useLanguage();

  return (
    <motion.div className="p-6">
      <h2>{t('projects.sectionTitle')}</h2>
      <p>{t('projects.sectionSubtitle')}</p>
      
      {/* استفاده از زبان برای محتوای دینامیک */}
      <h3>{language === 'fa' ? project.titleFa : project.titleEn}</h3>
      
      <button>{t('projects.viewDetails')}</button>
    </motion.div>
  );
}
```

---

## ✨ نکات مهم:

1. **همه متن‌های قابل نمایش** باید از `t()` استفاده کنند
2. **aria-label** ها هم باید ترجمه شوند:
   ```tsx
   <button aria-label={t('accessibility.close')}>
   ```
3. **برای محتوای پویا** (مثل داده پروژه‌ها)، نیاز به اضافه کردن فیلد‌های جدید دارید
4. **فونت فارسی**: از Vazir یا IRANSans استفاده کنید

---

## 🚀 مراحل بعدی شما:

1. ✅ هر صفحه را باز کنید
2. ✅ متن‌های ثابت را پیدا کنید  
3. ✅ با `t('key')` جایگزین کنید
4. ✅ اگر key در فایل ترجمه نیست، اضافه کنید
5. ✅ تست کنید با تغییر زبان

---

## 💡 مثال: آپدیت Hero Section

### ❌ قبل:
```tsx
<h1>Hi, I'm Arsham Khayatzadeh</h1>
<p>Product/UIUX Designer</p>
<button>View Work</button>
<button>Download Resume</button>
```

### ✅ بعد:
```tsx
const { t } = useLanguage();

<h1>{t('hero.greeting')} {t('hero.name')}</h1>
<p>{t('hero.title')}</p>
<button>{t('hero.viewWork')}</button>
<button>{t('hero.downloadResume')}</button>
```

---

## 🎯 تمام! 

اگر سوالی دارید یا کمک بیشتری نیاز دارید، بگویید! 
همچنین می‌توانم کامپوننت‌های خاصی را برای شما آپدیت کنم.
