import svgPaths from '../../imports/Header/svg-mfmzlvavyx';
import { useTheme } from '../contexts/ThemeContext';

function IHOLogo() {
  return (
    <div className="relative shrink-0 size-10 sm:size-14">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <path d={svgPaths.p1207c680} fill="#0055FF" />
      </svg>
      <div className="absolute" style={{ inset: '60.97% 29.52% 24.78% 48.88%' }}>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8194 9.11498">
          <path d={svgPaths.p28aae480} fill="#0055FF" />
        </svg>
      </div>
    </div>
  );
}

function DocsLink({ isDark }: { isDark: boolean }) {
  return (
    <a
      href="https://m3.material.io/components/chips"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center size-10 sm:size-14 rounded-full transition-colors shrink-0"
      style={{
        border: `1px solid ${isDark ? '#3d6bcc' : '#b3c6f5'}`,
        color: isDark ? '#4d8aff' : '#0055FF',
        fontFamily: "'IRANYekanXFaNum', 'Vazirmatn', sans-serif",
        fontWeight: 800,
        fontSize: '1.1rem',
      }}
    >
      ؟
    </a>
  );
}

export function ChipsDocHeader() {
  const { actualTheme } = useTheme();
  const isDark = actualTheme === 'dark';

  const bg         = isDark ? '#16181b' : '#f0f4ff';
  const innerBg    = isDark ? '#1e2126' : '#e4ecfc';
  const textMuted  = isDark ? '#9aa3b2' : '#4a5568';
  const textSub    = isDark ? '#6b7280' : '#718096';
  const textStrong = isDark ? '#e4e6ea' : '#1a202c';
  const dividerBg  = isDark ? '#2d3139' : '#c7d7f5';
  const notForColor = isDark ? '#ffa8a8' : '#e53e3e';

  return (
    <div
      className="rounded-2xl sm:rounded-3xl flex flex-col gap-7 sm:gap-9 px-5 sm:px-10 py-6 sm:py-10 w-full transition-colors"
      style={{ background: bg }}
      dir="ltr"
    >
      {/* Top row */}
      <div className="flex items-center justify-between w-full">
        <IHOLogo />
        <div className="flex items-center gap-4">
          <DocsLink isDark={isDark} />
          <span
            className="text-xl sm:text-2xl md:text-3xl font-black"
            style={{ color: textStrong, fontFamily: "'IRANYekanXFaNum', 'Vazirmatn', sans-serif", direction: 'rtl' }}
          >
            Chips &nbsp;(چیپس)
          </span>
        </div>
      </div>

      {/* Blue divider */}
      <div className="h-px w-full rounded-full" style={{ background: '#0055FF' }} />

      {/* Description */}
      <div
        className="text-sm sm:text-base leading-relaxed space-y-1.5"
        style={{ color: textMuted, fontFamily: "'IRANYekanXFaNum', 'Vazirmatn', sans-serif" }}
      >
        <p>
          vs Badge: &nbsp; Badge = Informational &nbsp;&nbsp;&nbsp;
          <strong style={{ color: textStrong }}>Chip</strong> = Interactive
        </p>
        <p>
          in IHO Design System, we use TWO Chip types :&nbsp;
          <strong style={{ color: textStrong }}>Action / Filter</strong>
        </p>
        <p className="text-[13px] sm:text-sm" style={{ color: textSub }}>
          not as primary as button, but so crucial in every UI. May often seen around Search Fields, in Filters, Categories, etc.
        </p>
      </div>

      {/* Use-case box */}
      <div
        className="rounded-full px-6 sm:px-12 py-6 sm:py-8 flex flex-col sm:flex-row gap-6 sm:gap-16 justify-center transition-colors"
        style={{ background: innerBg, fontFamily: "'IRANYekanXFaNum', 'Vazirmatn', sans-serif" }}
      >
        {/* Do's */}
        <div className="text-sm sm:text-base space-y-1.5">
          <p className="font-semibold mb-2" style={{ color: textStrong }}>Chips are usually for:</p>
          {['Filtering', 'Selection', 'Categorization', 'Tags', 'Quick actions'].map(item => (
            <p key={item} style={{ color: textMuted }}>✅ {item}</p>
          ))}
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px self-stretch" style={{ background: dividerBg }} />

        {/* Don'ts */}
        <div className="text-sm sm:text-base space-y-1.5">
          <p className="font-semibold mb-2" style={{ color: notForColor }}>Not for:</p>
          <p style={{ color: textStrong }}>❌ Primary Actions (example: Buttons)</p>
        </div>
      </div>
    </div>
  );
}
