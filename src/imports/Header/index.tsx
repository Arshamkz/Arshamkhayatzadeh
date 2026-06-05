import svgPaths from "./svg-mfmzlvavyx";

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[20px] relative rounded-[99999px] shrink-0 size-[64px]">
      <div aria-hidden className="absolute border border-[#003cb2] border-solid inset-0 pointer-events-none rounded-[99999px]" />
      <a className="[word-break:break-word] flex flex-col font-['IRANYekanXFaNum:ExtraBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#05f] text-[28px] text-right whitespace-nowrap" href="https://m3.material.io/components/chips" target="_blank">
        <p className="cursor-pointer leading-[54px]" dir="auto">
          ؟
        </p>
      </a>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Frame />
      <div className="[word-break:break-word] flex flex-col font-['IRANYekanXFaNum:ExtraBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#16181b] text-[33px] text-right whitespace-nowrap">
        <p className="leading-[64px] whitespace-pre" dir="auto">{`Chips  (چیپس) `}</p>
      </div>
    </div>
  );
}

function HeadlineAndBadge() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Headline and badge">
      <div className="relative shrink-0 size-[64px]" data-name="Logo Social">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
          <path d={svgPaths.p1207c680} fill="var(--fill-0, #0055FF)" id="Vector" />
        </svg>
        <div className="absolute inset-[60.97%_29.52%_24.78%_48.88%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8194 9.11498">
            <path d={svgPaths.p28aae480} fill="var(--fill-0, #0055FF)" id="Vector" />
          </svg>
        </div>
      </div>
      <Frame2 />
    </div>
  );
}

function HeadlineAndBadge1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-end relative shrink-0 w-full" data-name="Headline and badge">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['IRANYekanXFaNum:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#5d6067] text-[0px] whitespace-pre-wrap">
        <p className="mb-0 text-[28px]" dir="auto">
          <span className="font-['IRANYekanXFaNum:Regular',sans-serif] leading-[54px]">{`vs Badge:  Badge = Informational      `}</span>
          <span className="font-['IRANYekanXFaNum:Bold',sans-serif] leading-[54px]">Chip</span>
          <span className="font-['IRANYekanXFaNum:Regular',sans-serif] leading-[54px]">{` = Interactive`}</span>
        </p>
        <p dir="auto">
          <span className="leading-[54px] text-[28px]">{`in IHO Design System, we use TWO `}</span>
          <span className="[word-break:break-word] font-['IRANYekanXFaNum:Regular',sans-serif] leading-[54px] not-italic text-[28px]">Chip</span>
          <span className="leading-[54px] text-[28px]">{` types :   `}</span>
          <span className="[word-break:break-word] font-['IRANYekanXFaNum:Bold',sans-serif] leading-[54px] not-italic text-[28px]">{`Action / Filter `}</span>
          <span className="leading-[54px] text-[28px]">
            <br aria-hidden />
          </span>
          <span className="[word-break:break-word] font-['IRANYekanXFaNum:Regular',sans-serif] leading-[48px] not-italic text-[23px]">{`not as primary as button,  but so crucial in every UI. May often seen around Search Fields, in Filters, Categories, etc.`}</span>
        </p>
      </div>
    </div>
  );
}

function HeadlineAndDiscription() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Headline and Discription">
      <HeadlineAndBadge1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#fafafa] relative rounded-[99999px] shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="[word-break:break-word] content-stretch flex gap-[10px] items-start justify-center leading-[0] not-italic px-[240px] py-[40px] relative size-full text-[#5d6067]">
          <p className="font-['IRANYekanXFaNum:Regular',sans-serif] relative shrink-0 text-[0px] whitespace-pre" dir="auto">
            <span className="font-['IRANYekanXFaNum:Medium',sans-serif] leading-[54px] text-[28px]">Chips are</span>
            <span className="font-['IRANYekanXFaNum:Medium',sans-serif] leading-[54px] text-[#44c173] text-[28px]">{` `}</span>
            <span className="font-['IRANYekanXFaNum:Medium',sans-serif] leading-[54px] text-[28px]">{`usually for:   `}</span>
            <span className="font-['IRANYekanXFaNum:Medium',sans-serif] leading-[54px] text-[#44c173] text-[28px]">{` `}</span>
            <span className="font-['IRANYekanXFaNum:Medium',sans-serif] leading-[54px] text-[28px]">
              {`                            `}
              <br aria-hidden />
              {`✅ Filtering                                                         `}
              <br aria-hidden />✅ Selection
              <br aria-hidden />✅ Categorization
              <br aria-hidden />✅ Tags
              <br aria-hidden />
              {`✅ Quick actions `}
            </span>
          </p>
          <p className="font-['IRANYekanXFaNum:Medium',sans-serif] relative shrink-0 text-[28px] whitespace-nowrap" dir="auto">
            <span className="leading-[54px] text-[#ffa8a8]">
              Not for:
              <br aria-hidden />
            </span>
            <span className="leading-[54px]">{`❌ `}</span>
            <span className="leading-[54px] text-[#16181b]">Primary Actions (example: Buttons)</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex flex-col gap-[48px] items-start px-[64px] py-[48px] relative rounded-[24px] size-full" data-name="Header">
      <HeadlineAndBadge />
      <div className="bg-[#05f] h-px relative rounded-[9999px] shrink-0 w-full" />
      <HeadlineAndDiscription />
      <Frame1 />
    </div>
  );
}