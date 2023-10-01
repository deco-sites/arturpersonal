import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface CallLink {
  icon?: LiveImage;
  altIcon?: string;
  link?: string;
  label?: string;
}

export interface CallsWrapper {
  logoMobile?: LiveImage;
  altLogoMobile?: string;
  links?: CallLink[];
}

export default function CallsWrapper(
  { logoMobile, altLogoMobile, links }: CallsWrapper,
) {
  return (
    <div class="bg-[#f5f5f5]">
      <div class="sm:px-[2rem] px-[1rem] flex sm:justify-end justify-around items-center sm:gap-x-[32px] sm:min-h-[42px] min-h-[70px] max-w-[1200px] mx-auto">
        {logoMobile && (
          <figure class="flex sm:hidden block">
            <Image
              src={logoMobile}
              width={194.5}
              height={45}
              alt={altLogoMobile}
            />
          </figure>
        )}
        {links?.map((link) => (
          <a
            href={link.link}
            class="flex flex-row items-center sm:pl-[32px] pl-[16px]"
          >
            <figure>
              <Image
                src={link.icon || ""}
                width={15}
                height={15}
                alt={link.altIcon}
                class="mr-[5px] sm:w-[15px] sm:h-[15px] w-[25px] h-[25px]"
              />
            </figure>
            <span class="sm:block hidden text-black text-[14px]">
              {link.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
