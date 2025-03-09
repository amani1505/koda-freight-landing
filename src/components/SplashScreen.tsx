
import { useEffect, useState } from "react";
import KodaLogo from "./KodaLogo";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="flex flex-col items-center">
        <div className="relative">
          <KodaLogo className="h-32 w-32 animate-spin-slow" />
          <div className="absolute -inset-4 rounded-full border-4 border-koda-orange/20 dark:border-koda-orange/40"></div>
        </div>
        <h1 className="mt-6 text-3xl font-bold text-koda-purple dark:text-white animate-pulse-slow">
          Koda Freight
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400 animate-fade-in-up">
          Simplifying Freight Operations
        </p>
        <div className="mt-8 w-64 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full koda-gradient transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
