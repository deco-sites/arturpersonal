import { useEffect } from "preact/hooks";
import { RefObject } from "preact";

interface ScrollEffects {
  Up?: RefObject<HTMLDivElement> | null;
}

const useScrollEffects = ({ Up }: ScrollEffects) => {
  useEffect(() => {
    const handleScroll = () => {
      const elementsToAnimate = document.querySelectorAll("[data-sal]");

      elementsToAnimate.forEach((element) => {
        const dataSal = element.getAttribute("data-sal");
        const dataSalDelay = element.getAttribute("data-sal-delay");
        const htmlElement = element as HTMLElement;

        if (!htmlElement.classList.contains(`${dataSal}-applied`)) {
          htmlElement.classList.add("sal-animate");

          if (dataSalDelay) {
            const delayInSeconds = parseFloat(dataSalDelay) / 1000;
            htmlElement.style.transitionDelay = `${delayInSeconds}s`;
          }

          const rect = htmlElement.getBoundingClientRect();
          const isFullyVisible = rect.top >= 0 &&
            rect.bottom <= window.innerHeight;

          if (isFullyVisible) {
            htmlElement.style.opacity = "1";
            if (dataSal === "slide-up") {
              htmlElement.style.transform = "translateY(0)";
            }
            htmlElement.classList.add(`${dataSal}-applied`);
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
