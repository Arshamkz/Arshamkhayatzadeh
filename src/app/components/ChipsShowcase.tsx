import { useState } from 'react';
import { motion } from 'motion/react';
import Chips from './ChipsLight';
import { useLanguage } from '../contexts/LanguageContext';

function LiveChip({
  color, shape, size, type, label, showIconL, showIconR, disabled,
}: {
  color: 'Primary' | 'Neutral';
  shape: 'Default' | 'Pill';
  size: 'md' | 'sm';
  type: 'Action' | 'Filter';
  label: string;
  showIconL: boolean;
  showIconR: boolean;
  disabled?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [selected, setSelected] = useState(false);

  const state = (): 'Default' | 'Hover' | 'Selected' | 'Disable' => {
    if (disabled) return 'Disable';
    if (selected) return 'Selected';
    if (hovered) return 'Hover';
    return 'Default';
  };

  return (
    <motion.div
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false); }}
      onMouseDown={() => !disabled && setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onClick={() => !disabled && setSelected(v => !v)}
      animate={{ scale: pressed && !disabled ? 0.93 : 1 }}
      transition={{ duration: 0.07 }}
      className="inline-flex select-none"
      style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
    >
      <Chips color={color} shape={shape} size={size} type={type} state={state()} label={label} showIconL={showIconL} showIcon={showIconR} />
    </motion.div>
  );
}

function PropRow<T extends string>({
  label, options, value, onChange,
}: {
  label: string;
  options: T[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">{label}</span>
      <div className="flex gap-1 flex-wrap">
        {options.map(opt => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={[
              'px-2.5 py-1 rounded-md text-[11px] font-medium transition-all duration-100 border',
              value === opt
                ? 'bg-[#0055FF]/10 border-[#0055FF]/35 text-[#0055FF]'
                : 'bg-white/50 dark:bg-white/5 border-gray-200/60 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-white/20',
            ].join(' ')}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export function ChipsShowcase() {
  const { language } = useLanguage();
  const isRTL = language === 'fa';

  const [color,     setColor]     = useState<'Primary' | 'Neutral'>('Primary');
  const [shape,     setShape]     = useState<'Default' | 'Pill'>('Default');
  const [size,      setSize]      = useState<'md' | 'sm'>('md');
  const [type,      setType]      = useState<'Action' | 'Filter'>('Action');
  const [showIconL, setShowIconL] = useState(true);
  const [showIconR, setShowIconR] = useState(true);
  const [label,     setLabel]     = useState('برچسب');

  const intro = isRTL
    ? 'این یه نمونه از کامپوننت Chips است — روی چیپس کلیک کنید تا حالت‌های مختلف را تجربه کنید.'
    : 'This is a sample of the Chips component — click to interact with hover, press & select states.';

  return (
    <div className="space-y-4" dir={isRTL ? 'rtl' : 'ltr'}>

      {/* Intro notice */}
      <div className={`flex items-start gap-2 rounded-xl bg-[#0055FF]/6 border border-[#0055FF]/15 px-4 py-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
        <div className="mt-0.5 shrink-0 size-3.5 rounded-full bg-[#0055FF]/15 flex items-center justify-center">
          <div className="size-1.5 rounded-full bg-[#0055FF]" />
        </div>
        <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">{intro}</p>
      </div>

      {/* Canvas + Properties — stacked on mobile, side-by-side on md+ */}
      <div className={`flex flex-col md:flex-row rounded-2xl overflow-hidden border border-gray-200/50 dark:border-white/10 ${isRTL ? 'md:flex-row-reverse' : ''}`}>

        {/* Canvas */}
        <div
          className="flex-1 min-h-[200px] flex flex-col items-center justify-center gap-3 p-8"
          style={{ background: 'linear-gradient(135deg, #dde3ed 0%, #e8ecf4 100%)' }}
        >
          <LiveChip color={color} shape={shape} size={size} type={type} label={label || 'برچسب'} showIconL={showIconL} showIconR={showIconR} />
          <span className="text-[10px] font-medium uppercase tracking-wider" style={{ color: '#9aa3b0' }}>
            {isRTL ? 'هاور • کلیک = انتخاب' : 'Hover • Click = Select'}
          </span>
        </div>

        {/* Divider — horizontal on mobile, vertical on md+ */}
        <div className="h-px md:h-auto md:w-px bg-gray-200/60 dark:bg-white/10 shrink-0" />

        {/* Properties panel */}
        <div className="md:w-52 shrink-0 bg-white/50 dark:bg-white/5 backdrop-blur-sm flex flex-col">
          <div className={`flex items-center gap-2 px-4 py-2.5 border-b border-gray-200/50 dark:border-white/10 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className="flex gap-1">
              <div className="size-2 rounded-full bg-red-300/60" />
              <div className="size-2 rounded-full bg-yellow-300/60" />
              <div className="size-2 rounded-full bg-green-300/60" />
            </div>
            <span className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider ml-1">
              Properties
            </span>
          </div>

          <div className="px-4 py-4 space-y-4">
            <PropRow label="Type"  options={['Action', 'Filter'] as const}   value={type}  onChange={setType} />
            <PropRow label="Color" options={['Primary', 'Neutral'] as const}  value={color} onChange={setColor} />
            <PropRow label="Shape" options={['Default', 'Pill'] as const}     value={shape} onChange={setShape} />
            <PropRow label="Size"  options={['md', 'sm'] as const}            value={size}  onChange={setSize} />

            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Icons</span>
              <div className="flex gap-1 flex-wrap">
                {[
                  { key: 'L', label: 'Left ×', active: showIconL, toggle: () => setShowIconL(v => !v) },
                  { key: 'R', label: 'Right +', active: showIconR, toggle: () => setShowIconR(v => !v) },
                ].map(({ key, label: lbl, active, toggle }) => (
                  <button
                    key={key}
                    onClick={toggle}
                    className={[
                      'px-2.5 py-1 rounded-md text-[11px] font-medium transition-all duration-100 border',
                      active
                        ? 'bg-[#0055FF]/10 border-[#0055FF]/35 text-[#0055FF]'
                        : 'bg-white/50 dark:bg-white/5 border-gray-200/60 dark:border-white/10 text-gray-400 dark:text-gray-500 line-through hover:border-gray-300',
                    ].join(' ')}
                  >
                    {lbl}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200/50 dark:border-white/10 pt-4">
              <span className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider block mb-1.5">Label</span>
              <input
                value={label}
                onChange={e => setLabel(e.target.value)}
                placeholder={isRTL ? 'متن…' : 'Text…'}
                dir="auto"
                className="w-full bg-white/60 dark:bg-white/5 border border-gray-200/60 dark:border-white/10 rounded-md px-2.5 py-1.5 text-[12px] text-gray-700 dark:text-gray-200 placeholder:text-gray-300 dark:placeholder:text-gray-600 outline-none focus:border-[#0055FF]/40 transition-colors"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
