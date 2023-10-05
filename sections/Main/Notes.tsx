import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";
import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";
import useScrollEffects from "deco-sites/start/hooks/useScrollEffects.tsx";
import useBackToTop from "deco-sites/start/hooks/useBackToTop.tsx";
import { useRef } from "preact/hooks";

export interface NotesContent {
 /** @description option responsible for connecting with the id that is in the Nav */
 id?: string;
  title?: {
    label?: string;
    /** @description option available for animation effect: fade or slide-up */
    dataSal?: string;
    /** @description transition-delay duration, example: 1000 = 1s */
    dataSalDelay?: string;
  };
  cardNote?: Card[];
}

export interface Card {
  /** @description option available for animation effect: fade or slide-up */
  dataSal?: string;
  /** @description transition-delay duration, example: 1000 = 1s */
  dataSalDelay?: string;
  image?: LiveImage;
  /** @description alt text */
  label?: string;
  description?: HTML;
}

export default function Consulting(
  { id, title, cardNote }: NotesContent,
) {
  const myElementRef = useRef(null);
  const { Up } = useScrollEffects({ Up: myElementRef });

  const percentageToAppear = 0.3;
  const isVisible = useBackToTop(percentageToAppear);

  return (
    <div class="max-w-[1200px] mx-auto">
      <h2
        class="text-center pt-[3rem] pb-[2rem] mx-[15px] sm:text-[40px] text-[30px] font-bold sal-animate-slide"
        ref={Up}
        data-sal={title?.dataSal}
        data-sal-delay={title?.dataSalDelay}
      >
        {title?.label}
      </h2>
      <div class="flex sm:flex-row flex-col justify-center flex-wrap items-center sm:px-[32px] px-[16px]">
        {cardNote?.map((card) => (
          <div
            class="md:w-[48%] w-full flex flex-col justify-center items-center md:p-[2rem] p-[1rem] sal-animate-slide"
            ref={Up}
            data-sal={card.dataSal}
            data-sal-delay={card.dataSalDelay}
          >
            <figure>
              <Image
                src={card.image || ""}
                width={481.29}
                height={320.05}
                class="sm:[clip-path:polygon(10%_0px,100%_0%,90%_100%,0%_100%)] w-full max-w-[481.29px] h-full max-h-[320.05px]"
                alt={card.label}
              />
            </figure>
            <HTMLRenderer
              html={card.description || ""}
              class="text-center mt-[20px] md:text-[16px] text-[14px] leading-tight"
            />
          </div>
        ))}
      </div>
      {isVisible && (
        <div class="fixed sm:bottom-[1.6rem] bottom-[1rem] sm:right-[calc(100%-92%)] right-[calc(100%-95%)] max-w-[1200px] w-full mx-auto flex justify-end">
          <a
            href={`#${id || ""}`}
            class="w-[35px] h-[43.47px] bg-[#2f80ed] text-white rounded-[5px] p-[10px] text-[20px] flex justify-center items-center"
          >
            ↑
          </a>
        </div>
      )}
    </div>
  );
}
