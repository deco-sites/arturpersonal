import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface NavWrapper {
  /** @description option to connect to the backToTop id that is in Notes */
  id?: string;
  logoDesktop?: LiveImage;
  altLogoDesktop?: string;
  links?: NavigationLink[];
}

export interface NavigationLink {
  /** @description example: #yoursectionname */
  link?: string;
  label?: string;
}

export default function NavWrapper(
  { id, logoDesktop, altLogoDesktop, links }: NavWrapper,
) {
  return (
    <div class="sm:bg-transparent bg-[#f5f5f5]" id={id}>
      <nav class="sm:px-[2rem] px-[1rem] flex sm:justify-between items-center max-w-[1200px] mx-auto py-[16px]">
        {logoDesktop && (
          <figure class="hidden sm:block">
            <Image
              src={logoDesktop}
              width={302.75}
              height={70}
              class="md:h-[70px] h-[50px] max-w-none md:w-[302.75px] w-[216.15px]"
              alt={altLogoDesktop}
            />
          </figure>
        )}
        <div class="flex sm:justify-end justify-around w-full items-center h-fit">
          {links?.map((link) => (
            <a
              href={link.link}
              class="flex items-center sm:ml-[2rem] ml-[1rem] sm:border-b-[10px] border-b-[5px] border-transparent hover:border-[#2f80ed] font-bold text-black md:text-[20px] sm:text-[14px] text-[12px] transition-all duration-500 ease-in-out delay-0 leading-none"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
