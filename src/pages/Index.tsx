
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ModulesSection from "@/components/ModulesSection";
import ClientsSection from "@/components/ClientsSection";
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
          // Remove opacity-0 and add animation class
          entry.target.classList.remove("opacity-0");
          entry.target.classList.add("animate-fade-in-up");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // Setup observer after splash screen is done
    if (!loading) {
      // Small delay to ensure DOM is ready after splash screen
      setTimeout(() => {
        document.querySelectorAll("section").forEach((section) => {
          // Initially hide sections
          if (!section.classList.contains("opacity-0")) {
            section.classList.add("opacity-0");
          }
          observer.observe(section);
        });
      }, 100);
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
        <ClientsSection />
        <AboutSection />
      </main>
      <Footer />
      <ScrollIndicator />
    </div>
  );
};

export default Index;
