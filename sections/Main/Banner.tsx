import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";
import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";

export interface BannerWrapper {
  image?: LiveImage;
  alt?: string;
  bannerContent?: {
    text: HTML;
    button?: {
      icon?: LiveImage;
      alt?: string;
      label?: string;
      link?: string;
    };
  };
}

export default function Banner({ image, alt, bannerContent }: BannerWrapper) {
  return (
    <div class="sm:h-[400px] h-[350px] flex justify-end items-center relative">
      <figure class="w-full">
        <Image
          src={image || ""}
          width={1090}
          height={400}
          class="w-full sm:h-[400px] h-[350px] object-cover md:objectDesktop sm:objectTablet objectMobile"
          alt={alt}
        />
      </figure>
      <div class="absolute md:w-[47%] sm:w-[70%] md:px-0 px-[1rem] w-full">
        <div class="flex flex-col justify-between sm:items-start items-center bg-[#00000099] sm:p-[2em] p-[1em] sm:max-w-[85%] sm:min-h-[350px] sm:max-h-[400px] max-h-[350px]">
          <HTMLRenderer
            html={bannerContent?.text || ""}
            class="sm:text-left text-center"
          />
          <a
            class="mt-[20px] py-[3px] px-[15px] bg-[#33bb47] shadow-whatssap text-white rounded-[10px] flex items-center w-fit leading-[50px] text-[16px] font-bold hover:brightness-[80%] transition-all duration-500 ease-in-out delay-0"
            href={bannerContent?.button?.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure>
              <Image
                src={bannerContent?.button?.icon || ""}
                width={29.85}
                height={30}
                class="mr-[15px]"
                alt={bannerContent?.button?.alt}
              />
            </figure>
            {bannerContent?.button?.label}
          </a>
        </div>
      </div>
    </div>
  );
}
