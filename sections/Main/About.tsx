import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";
import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";

export interface AboutWrapper {
  id?: string;
  title?: string;
  image?: LiveImage;
  alt?: string;
  aboutContent?: {
    text: HTML;
  };
}

export default function About(
  { id, title, image, alt, aboutContent }: AboutWrapper,
) {
  return (
    <div class="flex flex-col" id={id}>
      <h2 class="text-center pt-[3rem] pb-[2rem] mx-[15px] sm:text-[40px] text-[30px] font-bold">
        {title}
      </h2>
      <div class="bg-[#f5f5f5] sm:p-[2rem] px-[2rem]">
        <div class="max-w-[1200px] mx-auto">
          <div class="flex md:flex-row flex-col items-center">
            <div class="">
              <figure class="">
                <Image
                  src={image || ""}
                  width={400}
                  height={517}
                  class="w-full max-w-[400px] h-full max-h-[517px]"
                  alt={alt}
                />
              </figure>
            </div>
            <div class="md:w-1/2">
              <HTMLRenderer
                html={aboutContent?.text || ""}
                class="md:p-[3rem] sm:px-[2rem] sm:py-0 py-[1rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
