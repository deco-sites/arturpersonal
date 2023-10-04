import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";
import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";
import useScrollEffects from "deco-sites/start/hooks/useScrollEffects.tsx";
import { useRef } from "preact/hooks";

export interface ConsultingContent {
  id?: string;
  title?: {
    label?: string;
    /** @description option available for animation effect: fade */
    dataSal?: string;
    /** @description transition-delay duration, example: 1000 = 1s */
    dataSalDelay?: string;
  };
  cardService?: Card[];
}

export interface Card {
  /** @description option available for animation effect: fade */
  dataSal?: string;
  /** @description transition-delay duration, example: 1000 = 1s */
  dataSalDelay?: string;
  image?: LiveImage;
  /** @description alt text */
  label?: string;
  description?: HTML;
}

export default function Consulting(
  { id, title, cardService }: ConsultingContent,
) {
  const myElementRef = useRef(null);
  const { Up } = useScrollEffects({ Up: myElementRef });
  return (
    <div class="max-w-[1200px] mx-auto" id={id}>
      <h2
        class="text-center pt-[3rem] pb-[2rem] mx-[15px] sm:text-[40px] text-[30px] font-bold sal-animate"
        ref={Up}
        data-sal={title?.dataSal}
        data-sal-delay={title?.dataSalDelay}
      >
        {title?.label}
      </h2>
      <div class="flex md:flex-row flex-col flex-wrap justify-around items-center sm:px-[32px] px-[16px]">
        {cardService?.map((card) => (
          <div
            class="md:w-[30%] w-full flex flex-col justify-center items-center md:p-[2rem] p-[1rem] sal-animate"
            ref={Up}
            data-sal={card.dataSal}
            data-sal-delay={card.dataSalDelay}
          >
            <div class="flex relative">
              <figure>
                <Image
                  src={card.image || ""}
                  width={100}
                  height={88.13}
                  alt={card.label}
                />
              </figure>
              <span class="w-full h-[100px] absolute -z-[1] rounded-full mt-[25px] ml-[35px] bg-[#2f80ed]">
              </span>
            </div>
            <HTMLRenderer html={card.description || ""} class="text-center" />
          </div>
        ))}
      </div>
    </div>
  );
}
