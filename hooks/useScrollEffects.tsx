import { useEffect } from "preact/hooks";
import { RefObject } from "preact";

interface ScrollEffects {
  Up?: RefObject<HTMLDivElement> | null;
}

const useScrollEffects = ({ Up }: ScrollEffects) => {
  useEffect(() => {
    const handleScroll = () => {
      const elementsUp = document.querySelectorAll('[data-sal="fade"]');

      elementsUp.forEach((elementUp) => {
        const dataSal = elementUp.getAttribute("data-sal");
        if (dataSal === "fade") {
          const dataSalDelay = elementUp.getAttribute("data-sal-delay");
          const htmlElementUp = elementUp as HTMLElement;
          if (!htmlElementUp.classList.contains("fade-applied")) {
            htmlElementUp.classList.add("sal-animate");

            if (dataSalDelay) {
              const delayInSeconds = parseFloat(dataSalDelay) / 1000;
              htmlElementUp.style.transitionDelay = `${delayInSeconds}s`;
            }
            htmlElementUp.style.opacity = "0";
            const rect = htmlElementUp.getBoundingClientRect();        
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {         
              htmlElementUp.style.opacity = "1";
              htmlElementUp.classList.add("fade-applied");
            }
          }
        }
      });
    };

    addEventListener("scroll", handleScroll);

    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { Up };
};

export default useScrollEffects;
