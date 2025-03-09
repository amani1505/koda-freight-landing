
import { useState, useEffect } from "react";
import { MousePointer, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ScrollIndicator() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-40 transition-all duration-500 ease-in-out">
      {!isScrolled ? (
        <div className="animate-bounce flex flex-col items-center text-koda-purple dark:text-koda-orange">
          <MousePointer size={24} />
          <span className="text-xs mt-1 font-medium">Scroll</span>
        </div>
      ) : (
        <Button
          onClick={scrollToTop}
          variant="outline"
          size="icon"
          className="rounded-full shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-koda-orange/20 dark:hover:bg-koda-orange/20 hover:text-koda-orange dark:hover:text-koda-orange transition-all duration-300 animate-bounce"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}
