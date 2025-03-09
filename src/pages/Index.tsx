
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ModulesSection from "@/components/ModulesSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import ScrollIndicator from "@/components/ScrollIndicator";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for splash screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    // Add scroll animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // Observe all sections after splash screen is done
    if (!loading) {
      document.querySelectorAll("section").forEach((section) => {
        section.classList.add("opacity-0");
        observer.observe(section);
      });
    }

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [loading]);

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
    </div>
  );
};

export default Index;
