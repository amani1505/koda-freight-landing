
import { useEffect, useState } from "react";
import { ArrowUp, MousePointer } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showMouseIcon, setShowMouseIcon] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
        setShowMouseIcon(false);
      } else {
        setShowScrollTop(false);
        setShowMouseIcon(true);
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
    <>
      {showMouseIcon && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-40 text-center animate-bounce">
          <MousePointer className="mx-auto h-6 w-6 text-koda-orange" />
          <p className="text-sm mt-2 font-medium text-gray-700 dark:text-gray-300">
            Scroll Down
          </p>
        </div>
      )}

      {showScrollTop && (
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-6 right-6 z-40 rounded-full shadow-lg border-koda-orange bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 animate-fade-in"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5 text-koda-orange" />
        </Button>
      )}
    </>
  );
}
