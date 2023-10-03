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
                class="md:mt-[20px] mt-0 md:mb-0 mb-[20px] py-[3px] px-[15px] bg-[#33bb47] shadow-whatssap text-white rounded-[10px] flex items-center w-fit leading-[50px] text-[16px] font-bold hover:brightness-[80%] transition-all duration-500 ease-in-out delay-0"
                href={content?.whatsapp?.link}
                target="_blank"
                rel="noopener noreferrer"
              >
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
