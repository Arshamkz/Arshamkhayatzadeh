import svgPaths from "./svg-ttnw9xpaip";
type CommentProps = {
  className?: string;
  showHostsResponse?: boolean;
  showMore?: boolean;
  type?: "Mini" | "Full" | "Min - Low";
};

export default function Comment({ className, showHostsResponse = true, showMore = true, type = "Mini" }: CommentProps) {
  if (type === "Min - Low") {
    return (
      <div className={className || "bg-[#fafafa] content-stretch drop-shadow-[0px_2px_4px_rgba(0,85,255,0.2)] flex flex-col gap-[24px] h-[329px] items-center pt-[24px] px-[24px] relative rounded-[12px] w-[321px]"} data-name="Type=Min - Low">
        <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full">
            <div className="overflow-clip relative shrink-0 size-[32px]" data-name="quote-down">
              <div className="absolute inset-[13.54%_5.21%]" data-name="elements">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.6667 23.3335">
                  <g id="elements">
                    <path d={svgPaths.p6ae9580} fill="var(--fill-0, #A2A3A8)" id="Rectangle 2190 (Stroke)" />
                    <path clipRule="evenodd" d={svgPaths.p18915800} fill="var(--fill-0, #A2A3A8)" fillRule="evenodd" id="Rectangle 2191 (Stroke)" />
                    <path d={svgPaths.p52ffe00} fill="var(--fill-0, #A2A3A8)" id="Rectangle 2190 (Stroke)_2" />
                    <path clipRule="evenodd" d={svgPaths.p8b56b00} fill="var(--fill-0, #A2A3A8)" fillRule="evenodd" id="Rectangle 2191 (Stroke)_2" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="flex flex-[1_0_0] h-[1.042px] items-center justify-center min-w-px relative">
              <div className="flex-none rotate-[0.48deg] w-full">
                <div className="h-0 relative w-full">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 125 1">
                      <line id="Line 847" stroke="var(--stroke-0, #EBEBEC)" x2="125" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#a2a3a8] text-[16px] text-right whitespace-nowrap" dir="auto">
              12 اسفند 1405
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] h-[181px] items-center not-italic overflow-clip relative shrink-0 w-full" data-name="Customer's Comment">
            <div className="content-stretch flex font-['IRANYekanXFaNum:Bold',sans-serif] items-center justify-between relative shrink-0 text-right w-full whitespace-nowrap">
              <p className="leading-[0] relative shrink-0 text-[#05f] text-[0px]" dir="auto">
                <span className="leading-[38px] text-[19px]">{`4.7 `}</span>
                <span className="leading-[32px] text-[#a2a3a8] text-[16px]">/5</span>
              </p>
              <p className="leading-[38px] relative shrink-0 text-[#16181b] text-[19px]" dir="auto">
                علی
              </p>
            </div>
            <p className="font-['IRANYekanXFaNum:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#16181b] text-[13px] text-justify w-full" dir="auto">{`غذا خوشمزه بود و محیط آرامش بخشی داشت. اما زمان سرو کمی طولانی بود.غذا خوشمزه بود. `}</p>
          </div>
        </div>
        {showHostsResponse && (
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
            {showHostsResponse && (
              <div className="bg-[#f4f4f4] h-[116px] relative rounded-[8px] shrink-0 w-full" data-name="Host's Response">
                <div className="flex flex-col items-center size-full">
                  <div className="content-stretch flex flex-col gap-[4px] items-center p-[12px] relative size-full">
                    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-full">
                      <p className="[word-break:break-word] font-['IRANYekanXFaNum:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#5d6067] text-[16px] text-right whitespace-nowrap" dir="auto">
                        میزبان
                      </p>
                    </div>
                    <p className="[word-break:break-word] font-['IRANYekanXFaNum:Regular',sans-serif] h-[56px] leading-[28px] not-italic overflow-hidden relative shrink-0 text-[#5d6067] text-[13px] text-ellipsis text-right w-full" dir="auto">
                      با سلام و احترام خدمت شما جناب آقای نژاد رسولی عزیز. ضمن تشکر از انتخاب هتل پارسیان استقلال و عذرخواهی بابت نارضایتی شما، احتمالا اتاق انتخابی شما از اتاق های نرمال هتل بوده است که در دست بازسازی هستند و طی ماه های آینده به شرایط بهتری خواهند رسید. پیشنهاد میگردد تا زمان بازسازی اتاق های نرمال از اتاق های دیلاکس هتل که کمتر از یکسال بازسازی شده اند استفاده نمایید که کاملا تمیز و به روز هستند .قطعا با رضایت کامل از هتل تشریف خواهید برد و خدمات کاملی دریافت خواهید نمود.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
  if (type === "Full") {
    return (
      <button className={className || "bg-[#fafafa] content-stretch cursor-pointer drop-shadow-[0px_2px_4px_rgba(0,85,255,0.2)] flex flex-col gap-[24px] items-center p-[24px] relative rounded-[12px] w-[321px]"} data-name="Type=Full">
        <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full">
          <div className="overflow-clip relative shrink-0 size-[32px]" data-name="quote-down">
            <div className="absolute inset-[13.54%_5.21%]" data-name="elements">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.6667 23.3335">
                <g id="elements">
                  <path d={svgPaths.p6ae9580} fill="var(--fill-0, #A2A3A8)" id="Rectangle 2190 (Stroke)" />
                  <path clipRule="evenodd" d={svgPaths.p18915800} fill="var(--fill-0, #A2A3A8)" fillRule="evenodd" id="Rectangle 2191 (Stroke)" />
                  <path d={svgPaths.p52ffe00} fill="var(--fill-0, #A2A3A8)" id="Rectangle 2190 (Stroke)_2" />
                  <path clipRule="evenodd" d={svgPaths.p8b56b00} fill="var(--fill-0, #A2A3A8)" fillRule="evenodd" id="Rectangle 2191 (Stroke)_2" />
                </g>
              </svg>
            </div>
          </div>
          <div className="flex flex-[1_0_0] h-[1.042px] items-center justify-center min-w-px relative">
            <div className="flex-none rotate-[0.48deg] w-full">
              <div className="h-0 relative w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 125 1">
                    <line id="Line 847" stroke="var(--stroke-0, #EBEBEC)" x2="125" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#a2a3a8] text-[16px] text-right whitespace-nowrap" dir="auto">
            12 اسفند 1405
          </p>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-center not-italic overflow-clip relative shrink-0 w-full" data-name="Customer's Comment">
          <div className="content-stretch flex font-['IRANYekanXFaNum:Bold',sans-serif] items-center justify-between relative shrink-0 text-right w-full whitespace-nowrap">
            <p className="leading-[0] relative shrink-0 text-[#05f] text-[0px]" dir="auto">
              <span className="leading-[38px] text-[19px]">{`4.7 `}</span>
              <span className="leading-[32px] text-[#a2a3a8] text-[16px]">/5</span>
            </p>
            <p className="leading-[38px] relative shrink-0 text-[#16181b] text-[19px]" dir="auto">
              علی
            </p>
          </div>
          <p className="font-['IRANYekanXFaNum:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#16181b] text-[13px] text-justify w-full whitespace-pre-wrap" dir="auto">{`غذا خوشمزه بود و محیط آرامش بخشی داشت. اما زمان سرو کمی طولانی بود.غذا خوشمزه بود و محیط آرامش بخشی داشت. اما زمان سرو کمی طولانی بود.غذا خوشمزه بود و محیط آرامش بخشی داشت. اما زمان سرو کمی طولانی بود.غذا خوشمزه بود  آرامش بخشی داشت. اما زمان سرو کمی طولانی بود.غذا خوشمزه بود و محیط آرامش بخشی داشت. اما زمان سرو کمی طولانی بود.غذا خوشمزه بود و محیط آرامش بخشی داشت. اما زمان سرو کمی طولانی بود.`}</p>
        </div>
        {showHostsResponse && (
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
            {showHostsResponse && (
              <div className="bg-[#f4f4f4] relative rounded-[8px] shrink-0 w-full" data-name="Host's Response">
                <div className="flex flex-col items-center size-full">
                  <div className="content-stretch flex flex-col gap-[4px] items-center p-[12px] relative size-full">
                    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-full">
                      <p className="[word-break:break-word] font-['IRANYekanXFaNum:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#5d6067] text-[16px] text-right whitespace-nowrap" dir="auto">
                        میزبان
                      </p>
                    </div>
                    <p className="[word-break:break-word] font-['IRANYekanXFaNum:Regular',sans-serif] leading-[28px] min-w-full not-italic relative shrink-0 text-[#5d6067] text-[13px] text-justify w-[min-content]" dir="auto">
                      با سلام و احترام خدمت شما جناب آقای نژاد رسولی عزیز. ضمن تشکر از انتخاب هتل پارسیان استقلال و عذرخواهی بابت نارضایتی شما، احتمالا اتاق انتخابی شما از اتاق های نرمال هتل بوده است که در دست بازسازی هستند و طی ماه های آینده به شرایط بهتری خواهند رسید. پیشنهاد میگردد تا زمان بازسازی اتاق های نرمال از اتاق های دیلاکس هتل که کمتر از یکسال بازسازی شده اند استفاده نمایید که کاملا تمیز و به روز هستند .قطعا با رضایت کامل از هتل تشریف خواهید برد و خدمات کاملی دریافت خواهید نمود.
                    </p>
                    <div className="absolute content-stretch flex items-center left-[116.5px] opacity-1 top-[-32px]">
                      {showMore && (
                        <div className="content-stretch flex gap-[12px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
                          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrow-down-01-sharp">
                            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="elements">
                              <div className="absolute inset-[-18.75%_-9.38%_-13.57%_-9.38%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 5.29289">
                                  <g id="elements">
                                    <path d={svgPaths.p20c2ba00} id="Vector 6902" stroke="var(--stroke-0, #16181B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </button>
    );
  }
  return (
    <button className={className || "bg-[#fafafa] content-stretch cursor-pointer drop-shadow-[0px_2px_4px_rgba(0,85,255,0.2)] flex flex-col gap-[24px] h-[329px] items-center pt-[24px] px-[24px] relative rounded-[12px] w-[321px]"} data-name="Type=Mini">
      <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full">
          <div className="overflow-clip relative shrink-0 size-[32px]" data-name="quote-down">
            <div className="absolute inset-[13.54%_5.21%]" data-name="elements">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.6667 23.3335">
                <g id="elements">
                  <path d={svgPaths.p6ae9580} fill="var(--fill-0, #A2A3A8)" id="Rectangle 2190 (Stroke)" />
                  <path clipRule="evenodd" d={svgPaths.p18915800} fill="var(--fill-0, #A2A3A8)" fillRule="evenodd" id="Rectangle 2191 (Stroke)" />
                  <path d={svgPaths.p52ffe00} fill="var(--fill-0, #A2A3A8)" id="Rectangle 2190 (Stroke)_2" />
                  <path clipRule="evenodd" d={svgPaths.p8b56b00} fill="var(--fill-0, #A2A3A8)" fillRule="evenodd" id="Rectangle 2191 (Stroke)_2" />
                </g>
              </svg>
            </div>
          </div>
          <div className="flex flex-[1_0_0] h-[1.042px] items-center justify-center min-w-px relative">
            <div className="flex-none rotate-[0.48deg] w-full">
              <div className="h-0 relative w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 125 1">
                    <line id="Line 847" stroke="var(--stroke-0, #EBEBEC)" x2="125" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-['IRANYekanXFaNum:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#a2a3a8] text-[16px] text-right whitespace-nowrap" dir="auto">
            12 اسفند 1405
          </p>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] h-[181px] items-center not-italic overflow-clip relative shrink-0 w-full" data-name="Customer's Comment">
          <div className="content-stretch flex font-['IRANYekanXFaNum:Bold',sans-serif] items-center justify-between relative shrink-0 text-right w-full whitespace-nowrap">
            <p className="leading-[0] relative shrink-0 text-[#05f] text-[0px]" dir="auto">
              <span className="leading-[38px] text-[19px]">{`4.7 `}</span>
              <span className="leading-[32px] text-[#a2a3a8] text-[16px]">/5</span>
            </p>
            <p className="leading-[38px] relative shrink-0 text-[#16181b] text-[19px]" dir="auto">
              علی
            </p>
          </div>
          <p className="bg-clip-text bg-gradient-to-b font-['IRANYekanXFaNum:Regular',sans-serif] from-[#16181b] from-[22.5%] leading-[28px] relative shrink-0 text-[13px] text-[transparent] text-justify to-[47.225%] to-[rgba(105,115,129,0)] w-full whitespace-pre-wrap" dir="auto">{`غذا خوشمزه بود و محیط آرامش بخشی داشت. اما زمان سرو کمی طولانی بود.غذا خوشمزه بود و محیط آرامش بخشی داشت. اما زمان سرو کمی طولانی بود.غذا خوشمزه بود و محیط آرامش بخشی داشت. اما زمان سرو کمی طولانی بود.غذا خوشمزه بود  آرامش بخشی داشت. اما زمان سرو کمی طولانی بود.غذا خوشمزه بود و محیط آرامش بخشی داشت. اما زمان سرو کمی طولانی بود.غذا خوشمزه بود و محیط آرامش بخشی داشت. اما زمان سرو کمی طولانی بود.`}</p>
        </div>
      </div>
      {showHostsResponse && (
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
          {showHostsResponse && (
            <div className="bg-[#f4f4f4] h-[116px] relative rounded-[8px] shrink-0 w-full" data-name="Host's Response">
              <div className="flex flex-col items-center size-full">
                <div className="content-stretch flex flex-col gap-[4px] items-center p-[12px] relative size-full">
                  <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-full">
                    <p className="[word-break:break-word] font-['IRANYekanXFaNum:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#5d6067] text-[16px] text-right whitespace-nowrap" dir="auto">
                      میزبان
                    </p>
                  </div>
                  <p className="[word-break:break-word] font-['IRANYekanXFaNum:Regular',sans-serif] h-[56px] leading-[28px] min-w-full not-italic overflow-hidden relative shrink-0 text-[#5d6067] text-[13px] text-ellipsis text-right w-[min-content]" dir="auto">
                    با سلام و احترام خدمت شما جناب آقای نژاد رسولی عزیز. ضمن تشکر از انتخاب هتل پارسیان استقلال و عذرخواهی بابت نارضایتی شما، احتمالا اتاق انتخابی شما از اتاق های نرمال هتل بوده است که در دست بازسازی هستند و طی ماه های آینده به شرایط بهتری خواهند رسید. پیشنهاد میگردد تا زمان بازسازی اتاق های نرمال از اتاق های دیلاکس هتل که کمتر از یکسال بازسازی شده اند استفاده نمایید که کاملا تمیز و به روز هستند .قطعا با رضایت کامل از هتل تشریف خواهید برد و خدمات کاملی دریافت خواهید نمود.
                  </p>
                  <div className="-translate-x-1/2 absolute content-stretch flex items-center left-[calc(50%+0.5px)] top-[-24px]">
                    {showMore && (
                      <div className="content-stretch flex gap-[12px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
                        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrow-down-01-sharp">
                          <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="elements">
                            <div className="absolute inset-[-18.75%_-9.38%_-13.57%_-9.38%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 5.29289">
                                <g id="elements">
                                  <path d={svgPaths.p20c2ba00} id="Vector 6902" stroke="var(--stroke-0, #5D6067)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </button>
  );
}