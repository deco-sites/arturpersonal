import { useEffect, useState } from "preact/hooks";

function useBackToTop(percentageToAppear: number) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const positionToAppear = documentHeight * percentageToAppear;
      setIsVisible(scrollY + windowHeight >= positionToAppear);
    }

    addEventListener("scroll", handleScroll);

    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, [percentageToAppear]);

  return isVisible;
}

export default useBackToTop;
