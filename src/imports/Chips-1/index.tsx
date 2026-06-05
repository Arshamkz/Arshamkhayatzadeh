import svgPaths from "./svg-8puclh6rpf";
type ChipsProps = {
  className?: string;
  color?: "Primary" | "Neutral";
  iconLeft?: React.ReactNode | null;
  iconRight?: React.ReactNode | null;
  shape?: "Default" | "Pill";
  showIcon?: boolean;
  showIconL?: boolean;
  size?: "sm" | "md";
  state?: "Default" | "Hover" | "Selected" | "Disable";
  type?: "Action" | "Filter";
};

export default function Chips({ className, color = "Neutral", iconLeft = null, iconRight = null, shape = "Default", showIcon = true, showIconL = true, size = "md", state = "Default", type = "Action" }: ChipsProps) {
  if (size === "md" && type === "Action" && state === "Default" && color === "Primary" && shape === "Default") {
    return (
      <div className={className || "bg-[#fafafa] content-stretch drop-shadow-[0px_1px_2px_rgba(0,85,255,0.2)] flex flex-col gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[12px] w-[138px]"} data-name="Size=md, Type=Action, State=Default, Color=Primary, Shape=Default">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                        <g id="elements">
                          <path d={svgPaths.p2dc86800} id="Vector" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#5d6067] text-[16px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.13%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                        <g id="elements">
                          <path d="M8.5 0.5V16.5" id="Vector 4048" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 8.5H16.5" id="Vector 4049" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "md" && type === "Filter" && state === "Default" && color === "Neutral" && shape === "Default") {
    return (
      <div className={className || "content-stretch flex flex-col gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[12px] w-[138px]"} data-name="Size=md, Type=Filter, State=Default, Color=Neutral, Shape=Default">
        <div aria-hidden className="absolute border border-[#ebebec] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                        <g id="elements">
                          <path d={svgPaths.p2dc86800} id="Vector" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#5d6067] text-[16px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.13%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                        <g id="elements">
                          <path d="M8.5 0.5V16.5" id="Vector 4048" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 8.5H16.5" id="Vector 4049" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "md" && type === "Filter" && state === "Default" && color === "Primary" && shape === "Default") {
    return (
      <div className={className || "content-stretch flex flex-col gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[12px] w-[138px]"} data-name="Size=md, Type=Filter, State=Default, Color=Primary, Shape=Default">
        <div aria-hidden className="absolute border border-[#cbd9f6] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                        <g id="elements">
                          <path d={svgPaths.p2dc86800} id="Vector" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#5d6067] text-[16px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.13%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                        <g id="elements">
                          <path d="M8.5 0.5V16.5" id="Vector 4048" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 8.5H16.5" id="Vector 4049" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "md" && type === "Action" && state === "Default" && color === "Neutral" && shape === "Pill") {
    return (
      <div className={className || "bg-[#fafafa] content-stretch drop-shadow-[0px_1px_2px_rgba(52,56,65,0.2)] flex flex-col gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[9999px] w-[138px]"} data-name="Size=md, Type=Action, State=Default, Color=Neutral, Shape=Pill">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                        <g id="elements">
                          <path d={svgPaths.p2dc86800} id="Vector" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#5d6067] text-[16px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.13%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                        <g id="elements">
                          <path d="M8.5 0.5V16.5" id="Vector 4048" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 8.5H16.5" id="Vector 4049" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "md" && type === "Action" && state === "Default" && color === "Primary" && shape === "Pill") {
    return (
      <div className={className || "bg-[#fafafa] content-stretch drop-shadow-[0px_1px_2px_rgba(0,85,255,0.2)] flex flex-col gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[9999px] w-[138px]"} data-name="Size=md, Type=Action, State=Default, Color=Primary, Shape=Pill">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                        <g id="elements">
                          <path d={svgPaths.p2dc86800} id="Vector" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#5d6067] text-[16px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.13%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                        <g id="elements">
                          <path d="M8.5 0.5V16.5" id="Vector 4048" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 8.5H16.5" id="Vector 4049" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "md" && type === "Filter" && state === "Default" && color === "Neutral" && shape === "Pill") {
    return (
      <div className={className || "content-stretch flex flex-col gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[9999px] w-[138px]"} data-name="Size=md, Type=Filter, State=Default, Color=Neutral, Shape=Pill">
        <div aria-hidden className="absolute border border-[#ebebec] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                        <g id="elements">
                          <path d={svgPaths.p2dc86800} id="Vector" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#5d6067] text-[16px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.13%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                        <g id="elements">
                          <path d="M8.5 0.5V16.5" id="Vector 4048" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 8.5H16.5" id="Vector 4049" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "md" && type === "Filter" && state === "Default" && color === "Primary" && shape === "Pill") {
    return (
      <div className={className || "content-stretch flex flex-col gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[9999px] w-[138px]"} data-name="Size=md, Type=Filter, State=Default, Color=Primary, Shape=Pill">
        <div aria-hidden className="absolute border border-[#cbd9f6] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                        <g id="elements">
                          <path d={svgPaths.p2dc86800} id="Vector" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#5d6067] text-[16px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.13%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                        <g id="elements">
                          <path d="M8.5 0.5V16.5" id="Vector 4048" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 8.5H16.5" id="Vector 4049" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "sm" && type === "Action" && state === "Default" && color === "Neutral" && shape === "Default") {
    return (
      <div className={className || "bg-[#fafafa] content-stretch drop-shadow-[0px_1px_2px_rgba(52,56,65,0.2)] flex flex-col gap-[8px] items-center justify-center px-[12px] py-[6px] relative rounded-[12px] w-[115px]"} data-name="Size=sm, Type=Action, State=Default, Color=Neutral, Shape=Default">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <g id="elements">
                          <path d={svgPaths.p18f762e0} id="Vector" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#5d6067] text-[13px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.75%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
                        <g id="elements">
                          <path d="M7.16667 0.5V13.8333" id="Vector 4048" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 7.16667H13.8333" id="Vector 4049" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "sm" && type === "Action" && state === "Default" && color === "Primary" && shape === "Default") {
    return (
      <div className={className || "bg-[#fafafa] content-stretch drop-shadow-[0px_1px_2px_rgba(0,85,255,0.2)] flex flex-col gap-[8px] items-center justify-center px-[12px] py-[6px] relative rounded-[12px] w-[115px]"} data-name="Size=sm, Type=Action, State=Default, Color=Primary, Shape=Default">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <g id="elements">
                          <path d={svgPaths.p18f762e0} id="Vector" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#5d6067] text-[13px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.75%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
                        <g id="elements">
                          <path d="M7.16667 0.5V13.8333" id="Vector 4048" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 7.16667H13.8333" id="Vector 4049" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "sm" && type === "Filter" && state === "Default" && color === "Neutral" && shape === "Default") {
    return (
      <div className={className || "content-stretch flex flex-col gap-[8px] items-center justify-center px-[12px] py-[6px] relative rounded-[12px] w-[115px]"} data-name="Size=sm, Type=Filter, State=Default, Color=Neutral, Shape=Default">
        <div aria-hidden className="absolute border border-[#ebebec] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <g id="elements">
                          <path d={svgPaths.p18f762e0} id="Vector" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#5d6067] text-[13px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.75%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
                        <g id="elements">
                          <path d="M7.16667 0.5V13.8333" id="Vector 4048" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 7.16667H13.8333" id="Vector 4049" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "sm" && type === "Filter" && state === "Default" && color === "Primary" && shape === "Default") {
    return (
      <div className={className || "content-stretch flex flex-col gap-[8px] items-center justify-center px-[12px] py-[6px] relative rounded-[12px] w-[115px]"} data-name="Size=sm, Type=Filter, State=Default, Color=Primary, Shape=Default">
        <div aria-hidden className="absolute border border-[#cbd9f6] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <g id="elements">
                          <path d={svgPaths.p18f762e0} id="Vector" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#5d6067] text-[13px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.75%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
                        <g id="elements">
                          <path d="M7.16667 0.5V13.8333" id="Vector 4048" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 7.16667H13.8333" id="Vector 4049" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "sm" && type === "Action" && state === "Default" && color === "Neutral" && shape === "Pill") {
    return (
      <div className={className || "bg-[#fafafa] content-stretch drop-shadow-[0px_1px_2px_rgba(52,56,65,0.2)] flex flex-col gap-[8px] items-center justify-center px-[12px] py-[6px] relative rounded-[9999px] w-[115px]"} data-name="Size=sm, Type=Action, State=Default, Color=Neutral, Shape=Pill">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <g id="elements">
                          <path d={svgPaths.p18f762e0} id="Vector" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#5d6067] text-[13px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.75%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
                        <g id="elements">
                          <path d="M7.16667 0.5V13.8333" id="Vector 4048" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 7.16667H13.8333" id="Vector 4049" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "sm" && type === "Action" && state === "Default" && color === "Primary" && shape === "Pill") {
    return (
      <div className={className || "bg-[#fafafa] content-stretch drop-shadow-[0px_1px_2px_rgba(0,85,255,0.2)] flex flex-col gap-[8px] items-center justify-center px-[12px] py-[6px] relative rounded-[9999px] w-[115px]"} data-name="Size=sm, Type=Action, State=Default, Color=Primary, Shape=Pill">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <g id="elements">
                          <path d={svgPaths.p18f762e0} id="Vector" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#5d6067] text-[13px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.75%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
                        <g id="elements">
                          <path d="M7.16667 0.5V13.8333" id="Vector 4048" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 7.16667H13.8333" id="Vector 4049" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "sm" && type === "Filter" && state === "Default" && color === "Neutral" && shape === "Pill") {
    return (
      <div className={className || "content-stretch flex flex-col gap-[8px] items-center justify-center px-[12px] py-[6px] relative rounded-[9999px] w-[115px]"} data-name="Size=sm, Type=Filter, State=Default, Color=Neutral, Shape=Pill">
        <div aria-hidden className="absolute border border-[#ebebec] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <g id="elements">
                          <path d={svgPaths.p18f762e0} id="Vector" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#5d6067] text-[13px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.75%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
                        <g id="elements">
                          <path d="M7.16667 0.5V13.8333" id="Vector 4048" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 7.16667H13.8333" id="Vector 4049" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "sm" && type === "Filter" && state === "Default" && color === "Primary" && shape === "Pill") {
    return (
      <div className={className || "content-stretch flex flex-col gap-[8px] items-center justify-center px-[12px] py-[6px] relative rounded-[9999px] w-[115px]"} data-name="Size=sm, Type=Filter, State=Default, Color=Primary, Shape=Pill">
        <div aria-hidden className="absolute border border-[#cbd9f6] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <g id="elements">
                          <path d={svgPaths.p18f762e0} id="Vector" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#5d6067] text-[13px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.75%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
                        <g id="elements">
                          <path d="M7.16667 0.5V13.8333" id="Vector 4048" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 7.16667H13.8333" id="Vector 4049" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "md" && type === "Action" && state === "Hover" && color === "Neutral" && shape === "Default") {
    return (
      <div className={className || "bg-[#fafafa] content-stretch cursor-pointer drop-shadow-[0px_4px_4px_rgba(52,56,65,0.2)] flex flex-col gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[12px] w-[138px]"} data-name="Size=md, Type=Action, State=Hover, Color=Neutral, Shape=Default">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                        <g id="elements">
                          <path d={svgPaths.p2dc86800} id="Vector" stroke="var(--stroke-0, #777A80)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#777a80] text-[16px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.13%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                        <g id="elements">
                          <path d="M8.5 0.5V16.5" id="Vector 4048" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 8.5H16.5" id="Vector 4049" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "md" && type === "Action" && state === "Hover" && color === "Primary" && shape === "Default") {
    return (
      <div className={className || "bg-[#fafafa] content-stretch cursor-pointer drop-shadow-[0px_4px_4px_rgba(0,85,255,0.2)] flex flex-col gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[12px] w-[138px]"} data-name="Size=md, Type=Action, State=Hover, Color=Primary, Shape=Default">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                        <g id="elements">
                          <path d={svgPaths.p2dc86800} id="Vector" stroke="var(--stroke-0, #0055FF)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#05f] text-[16px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.13%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                        <g id="elements">
                          <path d="M8.5 0.5V16.5" id="Vector 4048" stroke="var(--stroke-0, #0055FF)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 8.5H16.5" id="Vector 4049" stroke="var(--stroke-0, #0055FF)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "md" && type === "Filter" && state === "Hover" && color === "Neutral" && shape === "Default") {
    return (
      <button className={className || "content-stretch cursor-pointer flex flex-col gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[12px] w-[138px]"} data-name="Size=md, Type=Filter, State=Hover, Color=Neutral, Shape=Default">
        <div aria-hidden className="absolute border border-[#c0c1c4] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                        <g id="elements">
                          <path d={svgPaths.p2dc86800} id="Vector" stroke="var(--stroke-0, #777A80)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#777a80] text-[16px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.13%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                        <g id="elements">
                          <path d="M8.5 0.5V16.5" id="Vector 4048" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 8.5H16.5" id="Vector 4049" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </button>
    );
  }
  if (size === "md" && type === "Filter" && state === "Hover" && color === "Primary" && shape === "Default") {
    return (
      <button className={className || "content-stretch cursor-pointer flex flex-col gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[12px] w-[138px]"} data-name="Size=md, Type=Filter, State=Hover, Color=Primary, Shape=Default">
        <div aria-hidden className="absolute border border-[#05f] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                        <g id="elements">
                          <path d={svgPaths.p2dc86800} id="Vector" stroke="var(--stroke-0, #777A80)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#777a80] text-[16px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.13%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                        <g id="elements">
                          <path d="M8.5 0.5V16.5" id="Vector 4048" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 8.5H16.5" id="Vector 4049" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </button>
    );
  }
  if (size === "md" && type === "Action" && state === "Hover" && color === "Neutral" && shape === "Pill") {
    return (
      <div className={className || "bg-[#fafafa] content-stretch cursor-pointer drop-shadow-[0px_4px_4px_rgba(52,56,65,0.2)] flex flex-col gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[9999px] w-[138px]"} data-name="Size=md, Type=Action, State=Hover, Color=Neutral, Shape=Pill">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                        <g id="elements">
                          <path d={svgPaths.p2dc86800} id="Vector" stroke="var(--stroke-0, #777A80)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#777a80] text-[16px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.13%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                        <g id="elements">
                          <path d="M8.5 0.5V16.5" id="Vector 4048" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 8.5H16.5" id="Vector 4049" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "md" && type === "Action" && state === "Hover" && color === "Primary" && shape === "Pill") {
    return (
      <div className={className || "bg-[#fafafa] content-stretch cursor-pointer drop-shadow-[0px_4px_4px_rgba(0,85,255,0.2)] flex flex-col gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[9999px] w-[138px]"} data-name="Size=md, Type=Action, State=Hover, Color=Primary, Shape=Pill">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                        <g id="elements">
                          <path d={svgPaths.p2dc86800} id="Vector" stroke="var(--stroke-0, #0055FF)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#05f] text-[16px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.13%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                        <g id="elements">
                          <path d="M8.5 0.5V16.5" id="Vector 4048" stroke="var(--stroke-0, #0055FF)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 8.5H16.5" id="Vector 4049" stroke="var(--stroke-0, #0055FF)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "md" && type === "Filter" && state === "Hover" && color === "Neutral" && shape === "Pill") {
    return (
      <button className={className || "content-stretch cursor-pointer flex flex-col gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[9999px] w-[138px]"} data-name="Size=md, Type=Filter, State=Hover, Color=Neutral, Shape=Pill">
        <div aria-hidden className="absolute border border-[#c0c1c4] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                        <g id="elements">
                          <path d={svgPaths.p2dc86800} id="Vector" stroke="var(--stroke-0, #777A80)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#777a80] text-[16px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.13%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                        <g id="elements">
                          <path d="M8.5 0.5V16.5" id="Vector 4048" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 8.5H16.5" id="Vector 4049" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </button>
    );
  }
  if (size === "md" && type === "Filter" && state === "Hover" && color === "Primary" && shape === "Pill") {
    return (
      <button className={className || "content-stretch cursor-pointer flex flex-col gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[9999px] w-[138px]"} data-name="Size=md, Type=Filter, State=Hover, Color=Primary, Shape=Pill">
        <div aria-hidden className="absolute border border-[#05f] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                        <g id="elements">
                          <path d={svgPaths.p2dc86800} id="Vector" stroke="var(--stroke-0, #777A80)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#777a80] text-[16px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.13%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                        <g id="elements">
                          <path d="M8.5 0.5V16.5" id="Vector 4048" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 8.5H16.5" id="Vector 4049" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </button>
    );
  }
  if (size === "sm" && type === "Action" && state === "Hover" && color === "Neutral" && shape === "Default") {
    return (
      <div className={className || "bg-[#fafafa] content-stretch cursor-pointer drop-shadow-[0px_4px_4px_rgba(52,56,65,0.2)] flex flex-col gap-[8px] items-center justify-center px-[12px] py-[6px] relative rounded-[12px] w-[115px]"} data-name="Size=sm, Type=Action, State=Hover, Color=Neutral, Shape=Default">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <g id="elements">
                          <path d={svgPaths.p18f762e0} id="Vector" stroke="var(--stroke-0, #777A80)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#777a80] text-[13px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.75%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
                        <g id="elements">
                          <path d="M7.16667 0.5V13.8333" id="Vector 4048" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 7.16667H13.8333" id="Vector 4049" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "sm" && type === "Action" && state === "Hover" && color === "Primary" && shape === "Default") {
    return (
      <div className={className || "bg-[#fafafa] content-stretch cursor-pointer drop-shadow-[0px_4px_4px_rgba(0,85,255,0.2)] flex flex-col gap-[8px] items-center justify-center px-[12px] py-[6px] relative rounded-[12px] w-[115px]"} data-name="Size=sm, Type=Action, State=Hover, Color=Primary, Shape=Default">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <g id="elements">
                          <path d={svgPaths.p18f762e0} id="Vector" stroke="var(--stroke-0, #0055FF)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#05f] text-[13px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.75%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
                        <g id="elements">
                          <path d="M7.16667 0.5V13.8333" id="Vector 4048" stroke="var(--stroke-0, #0055FF)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 7.16667H13.8333" id="Vector 4049" stroke="var(--stroke-0, #0055FF)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "sm" && type === "Filter" && state === "Hover" && color === "Neutral" && shape === "Default") {
    return (
      <button className={className || "content-stretch cursor-pointer flex flex-col gap-[8px] items-center justify-center px-[12px] py-[6px] relative rounded-[12px] w-[115px]"} data-name="Size=sm, Type=Filter, State=Hover, Color=Neutral, Shape=Default">
        <div aria-hidden className="absolute border border-[#c0c1c4] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <g id="elements">
                          <path d={svgPaths.p18f762e0} id="Vector" stroke="var(--stroke-0, #777A80)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#777a80] text-[13px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.75%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
                        <g id="elements">
                          <path d="M7.16667 0.5V13.8333" id="Vector 4048" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 7.16667H13.8333" id="Vector 4049" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </button>
    );
  }
  if (size === "sm" && type === "Filter" && state === "Hover" && color === "Primary" && shape === "Default") {
    return (
      <button className={className || "content-stretch cursor-pointer flex flex-col gap-[8px] items-center justify-center px-[12px] py-[6px] relative rounded-[12px] w-[115px]"} data-name="Size=sm, Type=Filter, State=Hover, Color=Primary, Shape=Default">
        <div aria-hidden className="absolute border border-[#05f] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <g id="elements">
                          <path d={svgPaths.p18f762e0} id="Vector" stroke="var(--stroke-0, #777A80)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#777a80] text-[13px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.75%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
                        <g id="elements">
                          <path d="M7.16667 0.5V13.8333" id="Vector 4048" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 7.16667H13.8333" id="Vector 4049" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </button>
    );
  }
  if (size === "sm" && type === "Action" && state === "Hover" && color === "Neutral" && shape === "Pill") {
    return (
      <div className={className || "bg-[#fafafa] content-stretch cursor-pointer drop-shadow-[0px_4px_4px_rgba(52,56,65,0.2)] flex flex-col gap-[8px] items-center justify-center px-[12px] py-[6px] relative rounded-[9999px] w-[115px]"} data-name="Size=sm, Type=Action, State=Hover, Color=Neutral, Shape=Pill">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <g id="elements">
                          <path d={svgPaths.p18f762e0} id="Vector" stroke="var(--stroke-0, #777A80)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#777a80] text-[13px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.75%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
                        <g id="elements">
                          <path d="M7.16667 0.5V13.8333" id="Vector 4048" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 7.16667H13.8333" id="Vector 4049" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "sm" && type === "Action" && state === "Hover" && color === "Primary" && shape === "Pill") {
    return (
      <div className={className || "bg-[#fafafa] content-stretch cursor-pointer drop-shadow-[0px_4px_4px_rgba(0,85,255,0.2)] flex flex-col gap-[8px] items-center justify-center px-[12px] py-[6px] relative rounded-[9999px] w-[115px]"} data-name="Size=sm, Type=Action, State=Hover, Color=Primary, Shape=Pill">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <g id="elements">
                          <path d={svgPaths.p18f762e0} id="Vector" stroke="var(--stroke-0, #0055FF)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#05f] text-[13px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.75%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
                        <g id="elements">
                          <path d="M7.16667 0.5V13.8333" id="Vector 4048" stroke="var(--stroke-0, #0055FF)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 7.16667H13.8333" id="Vector 4049" stroke="var(--stroke-0, #0055FF)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "sm" && type === "Filter" && state === "Hover" && color === "Neutral" && shape === "Pill") {
    return (
      <button className={className || "content-stretch cursor-pointer flex flex-col gap-[8px] items-center justify-center px-[12px] py-[6px] relative rounded-[9999px] w-[115px]"} data-name="Size=sm, Type=Filter, State=Hover, Color=Neutral, Shape=Pill">
        <div aria-hidden className="absolute border border-[#c0c1c4] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <g id="elements">
                          <path d={svgPaths.p18f762e0} id="Vector" stroke="var(--stroke-0, #777A80)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#777a80] text-[13px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.75%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
                        <g id="elements">
                          <path d="M7.16667 0.5V13.8333" id="Vector 4048" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 7.16667H13.8333" id="Vector 4049" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </button>
    );
  }
  if (size === "sm" && type === "Filter" && state === "Hover" && color === "Primary" && shape === "Pill") {
    return (
      <button className={className || "content-stretch cursor-pointer flex flex-col gap-[8px] items-center justify-center px-[12px] py-[6px] relative rounded-[9999px] w-[115px]"} data-name="Size=sm, Type=Filter, State=Hover, Color=Primary, Shape=Pill">
        <div aria-hidden className="absolute border border-[#05f] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <g id="elements">
                          <path d={svgPaths.p18f762e0} id="Vector" stroke="var(--stroke-0, #777A80)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#777a80] text-[13px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.75%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
                        <g id="elements">
                          <path d="M7.16667 0.5V13.8333" id="Vector 4048" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 7.16667H13.8333" id="Vector 4049" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </button>
    );
  }
  if (size === "md" && type === "Action" && state === "Selected" && color === "Neutral" && shape === "Default") {
    return (
      <div className={className || "bg-[#fafafa] content-stretch drop-shadow-[0px_1px_2px_rgba(52,56,65,0.2)] flex flex-col gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[12px] w-[138px]"} data-name="Size=md, Type=Action, State=Selected, Color=Neutral, Shape=Default">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                        <g id="elements">
                          <path d={svgPaths.p2dc86800} id="Vector" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#777a80] text-[16px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.13%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                        <g id="elements">
                          <path d="M8.5 0.5V16.5" id="Vector 4048" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 8.5H16.5" id="Vector 4049" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "md" && type === "Action" && state === "Selected" && color === "Primary" && shape === "Default") {
    return (
      <div className={className || "bg-[#fafafa] content-stretch drop-shadow-[0px_1px_2px_rgba(0,85,255,0.2)] flex flex-col gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[12px] w-[138px]"} data-name="Size=md, Type=Action, State=Selected, Color=Primary, Shape=Default">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                        <g id="elements">
                          <path d={svgPaths.p2dc86800} id="Vector" stroke="var(--stroke-0, #0055FF)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#05f] text-[16px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.13%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                        <g id="elements">
                          <path d="M8.5 0.5V16.5" id="Vector 4048" stroke="var(--stroke-0, #0055FF)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 8.5H16.5" id="Vector 4049" stroke="var(--stroke-0, #0055FF)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "md" && type === "Filter" && state === "Selected" && color === "Neutral" && shape === "Default") {
    return (
      <button className={className || "bg-[#f4f4f4] content-stretch cursor-pointer flex flex-col gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[12px] w-[138px]"} data-name="Size=md, Type=Filter, State=Selected, Color=Neutral, Shape=Default">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                        <g id="elements">
                          <path d={svgPaths.p2dc86800} id="Vector" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#5d6067] text-[16px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.13%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                        <g id="elements">
                          <path d="M8.5 0.5V16.5" id="Vector 4048" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 8.5H16.5" id="Vector 4049" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </button>
    );
  }
  if (size === "md" && type === "Filter" && state === "Selected" && color === "Primary" && shape === "Default") {
    return (
      <button className={className || "bg-[#ebf0fa] content-stretch cursor-pointer flex flex-col gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[12px] w-[138px]"} data-name="Size=md, Type=Filter, State=Selected, Color=Primary, Shape=Default">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                        <g id="elements">
                          <path d={svgPaths.p2dc86800} id="Vector" stroke="var(--stroke-0, #0055FF)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#05f] text-[16px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.13%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                        <g id="elements">
                          <path d="M8.5 0.5V16.5" id="Vector 4048" stroke="var(--stroke-0, #0055FF)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 8.5H16.5" id="Vector 4049" stroke="var(--stroke-0, #0055FF)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </button>
    );
  }
  if (size === "md" && type === "Action" && state === "Selected" && color === "Neutral" && shape === "Pill") {
    return (
      <div className={className || "bg-[#fafafa] content-stretch drop-shadow-[0px_1px_2px_rgba(52,56,65,0.2)] flex flex-col gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[9999px] w-[138px]"} data-name="Size=md, Type=Action, State=Selected, Color=Neutral, Shape=Pill">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                        <g id="elements">
                          <path d={svgPaths.p2dc86800} id="Vector" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#777a80] text-[16px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.13%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                        <g id="elements">
                          <path d="M8.5 0.5V16.5" id="Vector 4048" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 8.5H16.5" id="Vector 4049" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "md" && type === "Action" && state === "Selected" && color === "Primary" && shape === "Pill") {
    return (
      <div className={className || "bg-[#fafafa] content-stretch drop-shadow-[0px_1px_2px_rgba(0,85,255,0.2)] flex flex-col gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[9999px] w-[138px]"} data-name="Size=md, Type=Action, State=Selected, Color=Primary, Shape=Pill">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                        <g id="elements">
                          <path d={svgPaths.p2dc86800} id="Vector" stroke="var(--stroke-0, #0055FF)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#05f] text-[16px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.13%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                        <g id="elements">
                          <path d="M8.5 0.5V16.5" id="Vector 4048" stroke="var(--stroke-0, #0055FF)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 8.5H16.5" id="Vector 4049" stroke="var(--stroke-0, #0055FF)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "md" && type === "Filter" && state === "Selected" && color === "Neutral" && shape === "Pill") {
    return (
      <button className={className || "bg-[#f4f4f4] content-stretch cursor-pointer flex flex-col gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[9999px] w-[138px]"} data-name="Size=md, Type=Filter, State=Selected, Color=Neutral, Shape=Pill">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                        <g id="elements">
                          <path d={svgPaths.p2dc86800} id="Vector" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#5d6067] text-[16px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.13%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                        <g id="elements">
                          <path d="M8.5 0.5V16.5" id="Vector 4048" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 8.5H16.5" id="Vector 4049" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </button>
    );
  }
  if (size === "md" && type === "Filter" && state === "Selected" && color === "Primary" && shape === "Pill") {
    return (
      <button className={className || "bg-[#ebf0fa] content-stretch cursor-pointer flex flex-col gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[9999px] w-[138px]"} data-name="Size=md, Type=Filter, State=Selected, Color=Primary, Shape=Pill">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                        <g id="elements">
                          <path d={svgPaths.p2dc86800} id="Vector" stroke="var(--stroke-0, #0055FF)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#05f] text-[16px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.13%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                        <g id="elements">
                          <path d="M8.5 0.5V16.5" id="Vector 4048" stroke="var(--stroke-0, #0055FF)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 8.5H16.5" id="Vector 4049" stroke="var(--stroke-0, #0055FF)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </button>
    );
  }
  if (size === "sm" && type === "Action" && state === "Selected" && color === "Neutral" && shape === "Default") {
    return (
      <div className={className || "bg-[#fafafa] content-stretch drop-shadow-[0px_1px_2px_rgba(52,56,65,0.2)] flex flex-col gap-[8px] items-center justify-center px-[12px] py-[6px] relative rounded-[12px] w-[115px]"} data-name="Size=sm, Type=Action, State=Selected, Color=Neutral, Shape=Default">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <g id="elements">
                          <path d={svgPaths.p18f762e0} id="Vector" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#777a80] text-[13px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.75%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
                        <g id="elements">
                          <path d="M7.16667 0.5V13.8333" id="Vector 4048" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 7.16667H13.8333" id="Vector 4049" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "sm" && type === "Action" && state === "Selected" && color === "Primary" && shape === "Default") {
    return (
      <div className={className || "bg-[#fafafa] content-stretch drop-shadow-[0px_1px_2px_rgba(0,85,255,0.2)] flex flex-col gap-[8px] items-center justify-center px-[12px] py-[6px] relative rounded-[12px] w-[115px]"} data-name="Size=sm, Type=Action, State=Selected, Color=Primary, Shape=Default">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <g id="elements">
                          <path d={svgPaths.p18f762e0} id="Vector" stroke="var(--stroke-0, #0055FF)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#05f] text-[13px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.75%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
                        <g id="elements">
                          <path d="M7.16667 0.5V13.8333" id="Vector 4048" stroke="var(--stroke-0, #0055FF)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 7.16667H13.8333" id="Vector 4049" stroke="var(--stroke-0, #0055FF)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "sm" && type === "Filter" && state === "Selected" && color === "Neutral" && shape === "Default") {
    return (
      <button className={className || "bg-[#f4f4f4] content-stretch cursor-pointer flex flex-col gap-[8px] items-center justify-center px-[12px] py-[6px] relative rounded-[12px] w-[115px]"} data-name="Size=sm, Type=Filter, State=Selected, Color=Neutral, Shape=Default">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <g id="elements">
                          <path d={svgPaths.p18f762e0} id="Vector" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#5d6067] text-[13px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.75%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
                        <g id="elements">
                          <path d="M7.16667 0.5V13.8333" id="Vector 4048" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 7.16667H13.8333" id="Vector 4049" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </button>
    );
  }
  if (size === "sm" && type === "Filter" && state === "Selected" && color === "Primary" && shape === "Default") {
    return (
      <button className={className || "bg-[#ebf0fa] content-stretch cursor-pointer flex flex-col gap-[8px] items-center justify-center px-[12px] py-[6px] relative rounded-[12px] w-[115px]"} data-name="Size=sm, Type=Filter, State=Selected, Color=Primary, Shape=Default">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <g id="elements">
                          <path d={svgPaths.p18f762e0} id="Vector" stroke="var(--stroke-0, #0055FF)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#05f] text-[13px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.75%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
                        <g id="elements">
                          <path d="M7.16667 0.5V13.8333" id="Vector 4048" stroke="var(--stroke-0, #0055FF)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 7.16667H13.8333" id="Vector 4049" stroke="var(--stroke-0, #0055FF)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </button>
    );
  }
  if (size === "sm" && type === "Action" && state === "Selected" && color === "Neutral" && shape === "Pill") {
    return (
      <div className={className || "bg-[#fafafa] content-stretch drop-shadow-[0px_1px_2px_rgba(52,56,65,0.2)] flex flex-col gap-[8px] items-center justify-center px-[12px] py-[6px] relative rounded-[9999px] w-[115px]"} data-name="Size=sm, Type=Action, State=Selected, Color=Neutral, Shape=Pill">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <g id="elements">
                          <path d={svgPaths.p18f762e0} id="Vector" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#777a80] text-[13px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.75%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
                        <g id="elements">
                          <path d="M7.16667 0.5V13.8333" id="Vector 4048" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 7.16667H13.8333" id="Vector 4049" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "sm" && type === "Action" && state === "Selected" && color === "Primary" && shape === "Pill") {
    return (
      <div className={className || "bg-[#fafafa] content-stretch drop-shadow-[0px_1px_2px_rgba(0,85,255,0.2)] flex flex-col gap-[8px] items-center justify-center px-[12px] py-[6px] relative rounded-[9999px] w-[115px]"} data-name="Size=sm, Type=Action, State=Selected, Color=Primary, Shape=Pill">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <g id="elements">
                          <path d={svgPaths.p18f762e0} id="Vector" stroke="var(--stroke-0, #0055FF)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#05f] text-[13px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.75%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
                        <g id="elements">
                          <path d="M7.16667 0.5V13.8333" id="Vector 4048" stroke="var(--stroke-0, #0055FF)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 7.16667H13.8333" id="Vector 4049" stroke="var(--stroke-0, #0055FF)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "sm" && type === "Filter" && state === "Selected" && color === "Neutral" && shape === "Pill") {
    return (
      <button className={className || "bg-[#f4f4f4] content-stretch cursor-pointer flex flex-col gap-[8px] items-center justify-center px-[12px] py-[6px] relative rounded-[9999px] w-[115px]"} data-name="Size=sm, Type=Filter, State=Selected, Color=Neutral, Shape=Pill">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <g id="elements">
                          <path d={svgPaths.p18f762e0} id="Vector" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#5d6067] text-[13px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.75%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
                        <g id="elements">
                          <path d="M7.16667 0.5V13.8333" id="Vector 4048" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 7.16667H13.8333" id="Vector 4049" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </button>
    );
  }
  if (size === "sm" && type === "Filter" && state === "Selected" && color === "Primary" && shape === "Pill") {
    return (
      <button className={className || "bg-[#ebf0fa] content-stretch cursor-pointer flex flex-col gap-[8px] items-center justify-center px-[12px] py-[6px] relative rounded-[9999px] w-[115px]"} data-name="Size=sm, Type=Filter, State=Selected, Color=Primary, Shape=Pill">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <g id="elements">
                          <path d={svgPaths.p18f762e0} id="Vector" stroke="var(--stroke-0, #0055FF)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#05f] text-[13px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.75%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
                        <g id="elements">
                          <path d="M7.16667 0.5V13.8333" id="Vector 4048" stroke="var(--stroke-0, #0055FF)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 7.16667H13.8333" id="Vector 4049" stroke="var(--stroke-0, #0055FF)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </button>
    );
  }
  if (size === "md" && type === "Action" && state === "Disable" && color === "Neutral" && shape === "Default") {
    return (
      <div className={className || "content-stretch flex flex-col gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[12px] w-[138px]"} data-name="Size=md, Type=Action, State=Disable, Color=Neutral, Shape=Default">
        <div aria-hidden className="absolute border border-[#ebebec] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                        <g id="elements">
                          <path d={svgPaths.p2dc86800} id="Vector" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#c0c1c4] text-[16px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.13%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                        <g id="elements">
                          <path d="M8.5 0.5V16.5" id="Vector 4048" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 8.5H16.5" id="Vector 4049" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "md" && type === "Action" && state === "Disable" && color === "Primary" && shape === "Default") {
    return (
      <div className={className || "content-stretch flex flex-col gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[12px] w-[138px]"} data-name="Size=md, Type=Action, State=Disable, Color=Primary, Shape=Default">
        <div aria-hidden className="absolute border border-[#ebebec] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                        <g id="elements">
                          <path d={svgPaths.p2dc86800} id="Vector" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#c0c1c4] text-[16px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.13%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                        <g id="elements">
                          <path d="M8.5 0.5V16.5" id="Vector 4048" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 8.5H16.5" id="Vector 4049" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "md" && type === "Filter" && state === "Disable" && color === "Neutral" && shape === "Default") {
    return (
      <div className={className || "content-stretch flex flex-col gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[12px] w-[138px]"} data-name="Size=md, Type=Filter, State=Disable, Color=Neutral, Shape=Default">
        <div aria-hidden className="absolute border border-[#ebebec] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                        <g id="elements">
                          <path d={svgPaths.p2dc86800} id="Vector" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#c0c1c4] text-[16px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.13%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                        <g id="elements">
                          <path d="M8.5 0.5V16.5" id="Vector 4048" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 8.5H16.5" id="Vector 4049" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "md" && type === "Filter" && state === "Disable" && color === "Primary" && shape === "Default") {
    return (
      <div className={className || "content-stretch flex flex-col gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[12px] w-[138px]"} data-name="Size=md, Type=Filter, State=Disable, Color=Primary, Shape=Default">
        <div aria-hidden className="absolute border border-[#ebebec] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                        <g id="elements">
                          <path d={svgPaths.p2dc86800} id="Vector" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#c0c1c4] text-[16px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.13%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                        <g id="elements">
                          <path d="M8.5 0.5V16.5" id="Vector 4048" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 8.5H16.5" id="Vector 4049" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "md" && type === "Action" && state === "Disable" && color === "Neutral" && shape === "Pill") {
    return (
      <div className={className || "content-stretch flex flex-col gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[9999px] w-[138px]"} data-name="Size=md, Type=Action, State=Disable, Color=Neutral, Shape=Pill">
        <div aria-hidden className="absolute border border-[#ebebec] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                        <g id="elements">
                          <path d={svgPaths.p2dc86800} id="Vector" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#c0c1c4] text-[16px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.13%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                        <g id="elements">
                          <path d="M8.5 0.5V16.5" id="Vector 4048" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 8.5H16.5" id="Vector 4049" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "md" && type === "Action" && state === "Disable" && color === "Primary" && shape === "Pill") {
    return (
      <div className={className || "content-stretch flex flex-col gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[9999px] w-[138px]"} data-name="Size=md, Type=Action, State=Disable, Color=Primary, Shape=Pill">
        <div aria-hidden className="absolute border border-[#ebebec] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                        <g id="elements">
                          <path d={svgPaths.p2dc86800} id="Vector" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#c0c1c4] text-[16px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.13%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                        <g id="elements">
                          <path d="M8.5 0.5V16.5" id="Vector 4048" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 8.5H16.5" id="Vector 4049" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "md" && type === "Filter" && state === "Disable" && color === "Neutral" && shape === "Pill") {
    return (
      <div className={className || "content-stretch flex flex-col gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[9999px] w-[138px]"} data-name="Size=md, Type=Filter, State=Disable, Color=Neutral, Shape=Pill">
        <div aria-hidden className="absolute border border-[#ebebec] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                        <g id="elements">
                          <path d={svgPaths.p2dc86800} id="Vector" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#c0c1c4] text-[16px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.13%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                        <g id="elements">
                          <path d="M8.5 0.5V16.5" id="Vector 4048" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 8.5H16.5" id="Vector 4049" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "md" && type === "Filter" && state === "Disable" && color === "Primary" && shape === "Pill") {
    return (
      <div className={className || "content-stretch flex flex-col gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[9999px] w-[138px]"} data-name="Size=md, Type=Filter, State=Disable, Color=Primary, Shape=Pill">
        <div aria-hidden className="absolute border border-[#ebebec] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                        <g id="elements">
                          <path d={svgPaths.p2dc86800} id="Vector" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#c0c1c4] text-[16px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.13%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                        <g id="elements">
                          <path d="M8.5 0.5V16.5" id="Vector 4048" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 8.5H16.5" id="Vector 4049" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "sm" && type === "Action" && state === "Disable" && color === "Neutral" && shape === "Default") {
    return (
      <div className={className || "content-stretch flex flex-col gap-[8px] items-center justify-center px-[12px] py-[6px] relative rounded-[12px] w-[115px]"} data-name="Size=sm, Type=Action, State=Disable, Color=Neutral, Shape=Default">
        <div aria-hidden className="absolute border border-[#ebebec] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <g id="elements">
                          <path d={svgPaths.p18f762e0} id="Vector" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#c0c1c4] text-[13px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.75%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
                        <g id="elements">
                          <path d="M7.16667 0.5V13.8333" id="Vector 4048" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 7.16667H13.8333" id="Vector 4049" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "sm" && type === "Action" && state === "Disable" && color === "Primary" && shape === "Default") {
    return (
      <div className={className || "content-stretch flex flex-col gap-[8px] items-center justify-center px-[12px] py-[6px] relative rounded-[12px] w-[115px]"} data-name="Size=sm, Type=Action, State=Disable, Color=Primary, Shape=Default">
        <div aria-hidden className="absolute border border-[#ebebec] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <g id="elements">
                          <path d={svgPaths.p18f762e0} id="Vector" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#c0c1c4] text-[13px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.75%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
                        <g id="elements">
                          <path d="M7.16667 0.5V13.8333" id="Vector 4048" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 7.16667H13.8333" id="Vector 4049" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "sm" && type === "Filter" && state === "Disable" && color === "Neutral" && shape === "Default") {
    return (
      <div className={className || "content-stretch flex flex-col gap-[8px] items-center justify-center px-[12px] py-[6px] relative rounded-[12px] w-[115px]"} data-name="Size=sm, Type=Filter, State=Disable, Color=Neutral, Shape=Default">
        <div aria-hidden className="absolute border border-[#ebebec] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <g id="elements">
                          <path d={svgPaths.p18f762e0} id="Vector" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#c0c1c4] text-[13px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.75%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
                        <g id="elements">
                          <path d="M7.16667 0.5V13.8333" id="Vector 4048" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 7.16667H13.8333" id="Vector 4049" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "sm" && type === "Filter" && state === "Disable" && color === "Primary" && shape === "Default") {
    return (
      <div className={className || "content-stretch flex flex-col gap-[8px] items-center justify-center px-[12px] py-[6px] relative rounded-[12px] w-[115px]"} data-name="Size=sm, Type=Filter, State=Disable, Color=Primary, Shape=Default">
        <div aria-hidden className="absolute border border-[#ebebec] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <g id="elements">
                          <path d={svgPaths.p18f762e0} id="Vector" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#c0c1c4] text-[13px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.75%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
                        <g id="elements">
                          <path d="M7.16667 0.5V13.8333" id="Vector 4048" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 7.16667H13.8333" id="Vector 4049" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "sm" && type === "Action" && state === "Disable" && color === "Neutral" && shape === "Pill") {
    return (
      <div className={className || "content-stretch flex flex-col gap-[8px] items-center justify-center px-[12px] py-[6px] relative rounded-[9999px] w-[115px]"} data-name="Size=sm, Type=Action, State=Disable, Color=Neutral, Shape=Pill">
        <div aria-hidden className="absolute border border-[#ebebec] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <g id="elements">
                          <path d={svgPaths.p18f762e0} id="Vector" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#c0c1c4] text-[13px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.75%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
                        <g id="elements">
                          <path d="M7.16667 0.5V13.8333" id="Vector 4048" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 7.16667H13.8333" id="Vector 4049" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "sm" && type === "Action" && state === "Disable" && color === "Primary" && shape === "Pill") {
    return (
      <div className={className || "content-stretch flex flex-col gap-[8px] items-center justify-center px-[12px] py-[6px] relative rounded-[9999px] w-[115px]"} data-name="Size=sm, Type=Action, State=Disable, Color=Primary, Shape=Pill">
        <div aria-hidden className="absolute border border-[#ebebec] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <g id="elements">
                          <path d={svgPaths.p18f762e0} id="Vector" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#c0c1c4] text-[13px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.75%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
                        <g id="elements">
                          <path d="M7.16667 0.5V13.8333" id="Vector 4048" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 7.16667H13.8333" id="Vector 4049" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "sm" && type === "Filter" && state === "Disable" && color === "Neutral" && shape === "Pill") {
    return (
      <div className={className || "content-stretch flex flex-col gap-[8px] items-center justify-center px-[12px] py-[6px] relative rounded-[9999px] w-[115px]"} data-name="Size=sm, Type=Filter, State=Disable, Color=Neutral, Shape=Pill">
        <div aria-hidden className="absolute border border-[#ebebec] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <g id="elements">
                          <path d={svgPaths.p18f762e0} id="Vector" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#c0c1c4] text-[13px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.75%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
                        <g id="elements">
                          <path d="M7.16667 0.5V13.8333" id="Vector 4048" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 7.16667H13.8333" id="Vector 4049" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  if (size === "sm" && type === "Filter" && state === "Disable" && color === "Primary" && shape === "Pill") {
    return (
      <div className={className || "content-stretch flex flex-col gap-[8px] items-center justify-center px-[12px] py-[6px] relative rounded-[9999px] w-[115px]"} data-name="Size=sm, Type=Filter, State=Disable, Color=Primary, Shape=Pill">
        <div aria-hidden className="absolute border border-[#ebebec] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
            {showIconL &&
              (iconLeft || (
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="multiplication-sign">
                  <div className="absolute inset-1/4" data-name="elements">
                    <div className="absolute inset-[-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <g id="elements">
                          <path d={svgPaths.p18f762e0} id="Vector" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#c0c1c4] text-[13px] text-center whitespace-nowrap" dir="auto">
              برچسب
            </p>
            {showIcon &&
              (iconRight || (
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="add-01">
                  <div className="absolute inset-[16.67%]" data-name="elements">
                    <div className="absolute inset-[-3.75%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
                        <g id="elements">
                          <path d="M7.16667 0.5V13.8333" id="Vector 4048" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M0.5 7.16667H13.8333" id="Vector 4049" stroke="var(--stroke-0, #C0C1C4)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
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
  return (
    <div className={className || "bg-[#fafafa] content-stretch drop-shadow-[0px_1px_2px_rgba(52,56,65,0.2)] flex flex-col gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[12px] w-[138px]"} data-name="Size=md, Type=Action, State=Default, Color=Neutral, Shape=Default">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
          {showIconL &&
            (iconLeft || (
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="multiplication-sign">
                <div className="absolute inset-1/4" data-name="elements">
                  <div className="absolute inset-[-5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                      <g id="elements">
                        <path d={svgPaths.p2dc86800} id="Vector" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#5d6067] text-[16px] text-center whitespace-nowrap" dir="auto">
            برچسب
          </p>
          {showIcon &&
            (iconRight || (
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="add-01">
                <div className="absolute inset-[16.67%]" data-name="elements">
                  <div className="absolute inset-[-3.13%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                      <g id="elements">
                        <path d="M8.5 0.5V16.5" id="Vector 4048" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M0.5 8.5H16.5" id="Vector 4049" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
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