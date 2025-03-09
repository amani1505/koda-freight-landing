
import { useEffect, useState } from "react";
import KodaLogo from "./KodaLogo";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="flex flex-col items-center">
        <KodaLogo className="h-32 w-32 animate-spin-slow" />
        <h1 className="mt-6 text-3xl font-bold text-koda-purple dark:text-white animate-pulse-slow">
          Koda Freight
        </h1>
        <div className="mt-8 w-64 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full koda-gradient animate-slide-in-right"></div>
        </div>
      </div>
    </div>
  );
}
