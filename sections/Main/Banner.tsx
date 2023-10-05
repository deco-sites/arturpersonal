import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";
import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";

export interface BannerWrapper {
  image?: LiveImage;
  alt?: string;
  bannerContent?: {
    text: HTML;
    whatsapp?: {
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
          loading="eager"
          class="w-full sm:h-[400px] h-[350px] object-cover md:objectDesktop sm:objectTablet objectMobile"
          alt={alt}
        />
      </figure>
      <div class="absolute md:w-[47%] sm:w-[70%] md:px-0 px-[1rem] w-full">
        <div class="flex flex-col justify-between sm:items-start items-center bg-[#00000099] sm:p-[2em] p-[1em] sm:max-w-[85%] sm:min-h-[300px] sm:max-h-[400px] max-h-[350px]">
          <HTMLRenderer
            html={bannerContent?.text || ""}
            class="sm:text-left text-center leading-tight"
          />
          <a
            class="mt-[20px] sm:py-[3px] py-[10px] sm:px-[15px] px-[2rem] bg-[#33bb47] shadow-whatsapp text-white rounded-[10px] flex items-center w-fit sm:leading-[50px] leading-normal font-bold"
            href={bannerContent?.whatsapp?.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="flex items-center hover:brightness-[80%] transition-all duration-500 ease-in-out delay-0 arial sm:text-[16px] text-[14px]">
              <figure>
                <Image
                  src={bannerContent?.whatsapp?.icon || ""}
                  width={29.85}
                  height={30}
                  class="mr-[15px]"
                  alt={bannerContent?.whatsapp?.alt}
                />
              </figure>
              {bannerContent?.whatsapp?.label}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
