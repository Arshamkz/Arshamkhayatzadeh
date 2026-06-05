import { ReactNode } from 'react';

export type ChipsProps = {
  className?: string;
  color?: 'Primary' | 'Neutral';
  iconLeft?: ReactNode | null;
  iconRight?: ReactNode | null;
  shape?: 'Default' | 'Pill';
  showIcon?: boolean;
  showIconL?: boolean;
  size?: 'sm' | 'md';
  state?: 'Default' | 'Hover' | 'Selected' | 'Disable';
  type?: 'Action' | 'Filter';
  label?: string;
};

// SVG paths from Chips-1/svg-8puclh6rpf.ts
const X_MD = 'M10.5 0.5L5.5 5.5M5.5 5.5L0.5 10.5M5.5 5.5L10.5 10.5M5.5 5.5L0.5 0.5';
const X_SM = 'M9.5 0.5L5 5M5 5L0.5 9.5M5 5L9.5 9.5M5 5L0.5 0.5';

export default function Chips({
  className,
  color = 'Neutral',
  iconLeft = null,
  iconRight = null,
  shape = 'Default',
  showIcon = true,
  showIconL = true,
  size = 'md',
  state = 'Default',
  type = 'Action',
  label = 'برچسب',
}: ChipsProps) {
  const isMd = size === 'md';
  const isPrimary = color === 'Primary';
  const isFilter = type === 'Filter';
  const isDisable = state === 'Disable';
  const isHover = state === 'Hover';
  const isSelected = state === 'Selected';
  const isPill = shape === 'Pill';

  // ── Token table from Chips-1 ──────────────────────────────────────────────

  // Text color
  const textColor =
    isDisable ? '#c0c1c4'
    : isHover && isPrimary ? '#0055ff'
    : isHover ? '#777a80'
    : isSelected && isPrimary ? '#0055ff'
    : isSelected && !isPrimary && !isFilter ? '#777a80'
    : '#5d6067';

  // Left icon color (multiplication-sign / X)
  const leftIconColor =
    isDisable ? '#C0C1C4'
    : isHover && isPrimary ? '#0055FF'
    : isHover ? '#777A80'
    : isSelected && isPrimary ? '#0055FF'
    : '#5D6067';

  // Right icon color (plus / add-01) — differs from left in some neutral states
  const rightIconColor =
    isDisable ? '#C0C1C4'
    : isHover && isPrimary ? '#0055FF'
    : isHover ? '#5D6067'          // Neutral hover: right stays #5D6067
    : isSelected && isPrimary ? '#0055FF'
    : '#5D6067';

  // Background
  const bg =
    isFilter
      ? isSelected && isPrimary ? '#ebf0fa'
        : isSelected ? '#f4f4f4'
        : 'transparent'
      : isDisable ? 'transparent'
      : '#fafafa';

  // Drop-shadow (Action only, not Filter, not Disable)
  const shadow =
    !isFilter && !isDisable
      ? isHover
        ? isPrimary
          ? 'drop-shadow-[0px_4px_4px_rgba(0,85,255,0.2)]'
          : 'drop-shadow-[0px_4px_4px_rgba(52,56,65,0.2)]'
        : isPrimary
          ? 'drop-shadow-[0px_1px_2px_rgba(0,85,255,0.2)]'
          : 'drop-shadow-[0px_1px_2px_rgba(52,56,65,0.2)]'
      : '';

  // Border color
  const borderColor =
    isFilter && !isSelected
      ? isHover
        ? isPrimary ? '#0055ff' : '#c0c1c4'   // Filter Hover Primary → blue border
        : isPrimary ? '#cbd9f6' : '#ebebec'
      : !isFilter && isDisable
        ? '#ebebec'
        : null;

  // ── Size tokens ───────────────────────────────────────────────────────────
  const px    = isMd ? 'px-[16px]' : 'px-[12px]';
  const py    = isMd ? 'py-[8px]'  : 'py-[6px]';
  const w     = '';
  const tSize = isMd ? 'text-[16px]' : 'text-[13px]';
  const lead  = isMd ? 'leading-[32px]' : 'leading-[28px]';
  const liSz  = isMd ? 'size-[20px]' : 'size-[18px]';
  const riSz  = isMd ? 'size-[24px]' : 'size-[20px]';
  const xPath = isMd ? X_MD : X_SM;
  const xVB   = isMd ? '0 0 11 11' : '0 0 10 10';
  const plusV = isMd ? 'M8.5 0.5V16.5'   : 'M7.16667 0.5V13.8333';
  const plusH = isMd ? 'M0.5 8.5H16.5'   : 'M0.5 7.16667H13.8333';
  const plusVB= isMd ? '0 0 17 17'        : '0 0 14.33 14.33';

  const radius = isPill ? 'rounded-[9999px]' : 'rounded-[12px]';
  const cursor = isFilter && !isDisable ? 'cursor-pointer' : '';

  const defaultClass = [
    'content-stretch flex flex-col gap-[8px] items-center justify-center',
    px, py, 'relative', radius, w, shadow, cursor,
  ].filter(Boolean).join(' ');

  return (
    <div
      className={className || defaultClass}
      style={{ backgroundColor: bg }}
    >
      {borderColor && (
        <div
          aria-hidden
          className={`absolute border border-solid inset-0 pointer-events-none ${radius}`}
          style={{ borderColor }}
        />
      )}
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
          {showIconL && (iconLeft || (
            <div className={`overflow-clip relative shrink-0 ${liSz}`}>
              <div className="absolute inset-1/4">
                <div className="absolute inset-[-5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={xVB}>
                    <path d={xPath} stroke={leftIconColor} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
          <p
            className={`font-['IRANYekanXFaNum:Medium',sans-serif] ${lead} not-italic relative shrink-0 ${tSize} text-center`}
            dir="auto"
            style={{ color: textColor }}
          >
            {label}
          </p>
          {showIcon && (iconRight || (
            <div className={`overflow-clip relative shrink-0 ${riSz}`}>
              <div className="absolute inset-[16.67%]">
                <div className="absolute inset-[-3.13%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={plusVB}>
                    <path d={plusV} stroke={rightIconColor} strokeLinecap="round" strokeLinejoin="round" />
                    <path d={plusH} stroke={rightIconColor} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
