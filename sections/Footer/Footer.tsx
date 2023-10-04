import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Footer {
  logo?: LiveImage;
  alt?: string;
  socialMedia?: SocialMedia[];
  copyright?: string;
}

export interface SocialMedia {
  icon?: LiveImage;
  alt?: string;
  link?: string;
  label?: string;
}

export default function Footer({ logo, alt, socialMedia, copyright }: Footer) {
  return (
    <footer class="bg-[#333333] sm:p-[2rem] p-[1rem]">
      <div class="max-w-[1200px] mx-auto flex flex-col sm:px-[2rem] px-[1rem]">
        <div class="flex sm:flex-row flex-col sm:items-center sm:justify-between sm:p-[1rem] border-b border-[#404040] mb-[32px]">
          <figure>
            <Image
              src={logo || ""}
              width={267.39}
              height={55}
              class="sm:mb-0 mb-[20px] sm:mx-0 mx-auto bg-p"
              alt={alt || ""}
            />
          </figure>
          <div class="sm:mx-0 mx-auto min-w-[250px]">
            {socialMedia?.map((media) => (
              <a
                href={media.link}
                class="flex items-center mb-[15px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure>
                  <Image
                    src={media?.icon || ""}
                    width={66.9}
                    height={35}
                    class="sm:px-[1rem] px-[0.5rem] sm:w-[66.9px] sm:h-[35px] w-[40.98px] h-[25px] hover:brightness-[80%] transition-all duration-500 ease-in-out delay-0"
                    alt={media.alt}
                  />
                </figure>
                <span class="text-white sm:text-[16px] text-[12px]">
                  {media.label}
                </span>
              </a>
            ))}
          </div>
        </div>
        <p class="text-center text-white sm:text-[16px] text-[12px]">
          {copyright}
        </p>
      </div>
    </footer>
  );
}
