import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";
import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";

export interface NotesContent {
  title?: string;
  cardNote?: Card[];
}

export interface Card {
  image?: LiveImage;
  /** @description alt text */
  label?: string;
  description?: HTML;
}

export default function Consulting({ title, cardNote }: NotesContent) {
  return (
    <div class="max-w-[1200px] mx-auto">
      <div class="">
        <h2 class="text-center pt-[3rem] pb-[2rem] mx-[15px] sm:text-[40px] text-[30px] font-bold">
          {title}
        </h2>
      </div>
      <div class="flex sm:flex-row flex-col flex-wrap items-center sm:px-[32px] px-[16px]">
        {cardNote?.map((card) => (
          <div class="md:w-[48%] w-full flex flex-col justify-center items-center md:p-[2rem] p-[1rem]">
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
    </div>
  );
}
