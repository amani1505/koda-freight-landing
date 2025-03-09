
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ModulesSection from "@/components/ModulesSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SplashScreen from "@/components/SplashScreen";
import ScrollIndicator from "@/components/ScrollIndicator";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for splash screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Splash Screen */}
      {loading && <SplashScreen />}

      {/* Main Content */}
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <ModulesSection />
        <AboutSection />
      </main>
      <Footer />
      <ScrollIndicator />
      <ScrollToTop />
    </div>
  );
};

export default Index;
