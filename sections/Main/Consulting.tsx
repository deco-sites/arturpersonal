import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";
import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";

export interface ConsultingContent {
  title?: string;
  cardService?: Card[];
}

export interface Card {
  image?: LiveImage;
  /** @description alt text */
  label?: string;
  description?: HTML;
}

export default function Consulting({ title, cardService }: ConsultingContent) {
  return (
    <div class="max-w-[1200px] mx-auto">
      <div class="">
        <h2 class="text-center pt-[3rem] pb-[2rem] mx-[15px] sm:text-[40px] text-[30px] font-bold">
          {title}
        </h2>
      </div>
      <div class="flex md:flex-row flex-col flex-wrap justify-around items-center sm:px-[32px] px-[16px]">
        {cardService?.map((card) => (
          <div class="md:w-[30%] w-full flex flex-col justify-center items-center md:p-[2rem] p-[1rem]">
            <div class="flex relative">
              <figure>
                <Image
                  src={card.image || ""}
                  width={100}
                  height={88.13}
                  alt={card.label}
                />
              </figure>
              <span class="w-full h-[100px] absolute -z-[1] rounded-full mt-[25px] ml-[35px] bg-[#2f80ed]"></span>           
            </div>
            <HTMLRenderer html={card.description || ""} class="text-center" />
          </div>
        ))}
      </div>
    </div>
  );
}
