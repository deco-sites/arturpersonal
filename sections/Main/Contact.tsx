import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";
import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";

export interface ContactContent {
  id?: string;
  title?: string;
  background?: LiveImage;
  alt?: string;
  phraseDesktop?: HTML;
  phraseMobile?: HTML;
  description?: HTML;
  whatsapp?: {
    label?: string;
    alt?: string;
    link?: string;
    icon?: LiveImage;
  };
}

export default function Contact({ content }: { content: ContactContent }) {
  return (
    <div id={content?.id}>
      <h2 class="text-center pt-[3rem] pb-[2rem] mx-[15px] sm:text-[40px] text-[30px] font-bold">
        {content?.title || ""}
      </h2>
      <div class="relative">
        <figure class="w-full h-full -z-[1] bottom-0 absolute bg-[#bebec0]">
          <Image
            src={content?.background || ""}
            width={800}
            height={450}
            class="object-cover max-h-[306.416px] md:block hidden"
            alt={content?.alt}
          />
        </figure>
        <div class="max-w-[1200px] mx-auto">
          <div class="flex md:flex-row flex-col min-h-[200px] md:max-h-[306.416px] items-center md:justify-end justify-center p-[2rem]">
            <HTMLRenderer
              html={content?.phraseDesktop || ""}
              class="border-l-[15px] border-[#2f80ed] pl-[2rem] pr-[3rem] text-[50px] md:block hidden leading-tight bg-[#bebec0]"
            />
            <HTMLRenderer
              html={content?.phraseMobile || ""}
              class="sm:border-l-[10px] border-l-[5px] border-[#2f80ed] sm:pl-[2rem] pl-[1rem] sm:text-[40px] text-[25px] md:hidden block my-[20px] leading-tight "
            />
            <div class="flex flex-col max-w-[440px] md:items-start items-center">
              <HTMLRenderer
                html={content?.description || ""}
                class="mb-[40px] text-[16px]"
              />
              <a
                class="mt-[20px] sm:py-[3px] py-[10px] sm:px-[15px] px-[2rem] bg-[#33bb47] shadow-whatsapp text-white rounded-[10px] flex items-center w-fit sm:leading-[50px] leading-normal font-bold"
                href={content?.whatsapp?.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="flex items-center hover:brightness-[80%] transition-all duration-500 ease-in-out delay-0 arial sm:text-[16px] text-[14px]">
                  <figure>
                    <Image
                      src={content?.whatsapp?.icon || ""}
                      width={29.85}
                      height={30}
                      class="mr-[15px]"
                      alt={content?.whatsapp?.alt}
                    />
                  </figure>
                  {content?.whatsapp?.label}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
