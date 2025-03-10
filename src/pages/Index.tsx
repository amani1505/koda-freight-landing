
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ModulesSection from "@/components/ModulesSection";
import ClientsSection from "@/components/ClientsSection";
import CustomerSlider from "@/components/CustomerSlider";
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
      
      // Initialize counters animation
      const animateCounters = () => {
        const counters = document.querySelectorAll('.counter');
        const speed = 200;
        
        counters.forEach(counter => {
          const targetText = counter.textContent || '';
          const targetValue = parseInt(targetText.replace(/\D/g, ''));
          let count = 0;
          
          const updateCount = () => {
            const increment = targetValue / speed;
            
            if (count < targetValue) {
              count += increment;
              counter.textContent = Math.ceil(count) + (targetText.includes('+') ? '+' : '');
              setTimeout(updateCount, 1);
            } else {
              counter.textContent = targetText;
            }
          };
          
          const counterObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
              updateCount();
              counterObserver.unobserve(entries[0].target);
            }
          }, { threshold: 0.5 });
          
          counterObserver.observe(counter);
        });
      };
      
      // Add a small delay to ensure the counters are in the DOM
      setTimeout(animateCounters, 500);
    }

    return () => {
      clearTimeout(timer);
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
        <CustomerSlider />
        <ClientsSection />
        <AboutSection />
      </main>
      <Footer />
      <ScrollIndicator />
    </div>
  );
};

export default Index;
