
import { useState, useEffect } from "react";
import { ChevronRight, Truck, Globe, BarChart3, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Simplify Your Freight Operations",
      description: "A powerful system designed to provide real-time reports at every stage, manage branches locally and internationally, and streamline your logistics operations.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8c2hpcHBpbmd8fDB8fHx8MTcxMzE5MTUyMnww&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
      title: "Real-time Tracking & Updates",
      description: "Monitor your shipments 24/7 with our advanced tracking system, providing you with accurate delivery estimates and status updates.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8dHJhY2tpbmclMjByZWFsdGltZXx8MHx8fHwxNzEzMTkxNjUwfDA&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
      title: "Global Management Solution",
      description: "Manage all your branches locally and internationally with our centralized platform, giving you complete control over your operations.",
      image: "https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8Z2xvYmFsJTIwbG9naXN0aWNzfHwwfHx8fDE3MTMxOTE2NTB8MA&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
      title: "Comprehensive Reporting",
      description: "Generate detailed reports on your operations, finances, and performance to make data-driven decisions for your business.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8ZGF0YSUyMGFuYWx5dGljc3x8MHx8fHwxNzEzMTkxNjUwfDA&ixlib=rb-4.0.3&q=80&w=1080"
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="pt-20 md:pt-0 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-koda-purple/20 to-koda-orange/20 dark:from-koda-purple/40 dark:to-koda-orange/40"></div>
        <div
          className="absolute inset-0 opacity-10 dark:opacity-20 transition-opacity duration-700"
          style={{
            backgroundImage: `url('${slides[currentSlide].image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      <div className="min-h-screen flex flex-col justify-center relative z-10">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-koda-purple dark:text-white">
                {slides[currentSlide].title.split(' ').map((word, i, arr) => (
                  i === arr.length - 1 ? 
                  <span key={i} className="text-koda-orange">{word} </span> : 
                  <span key={i}>{word} </span>
                ))}
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300">
                {slides[currentSlide].description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="btn-primary group">
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  className="btn-outline"
                  onClick={() => document.getElementById("features")?.scrollIntoView()}
                >
                  Explore Features
                </Button>
              </div>
              
              {/* Slider controls */}
              <div className="mt-8 flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full"
                  onClick={prevSlide}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full ${
                        currentSlide === index
                          ? "bg-koda-orange"
                          : "bg-gray-300 dark:bg-gray-600"
                      }`}
                    />
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full"
                  onClick={nextSlide}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="mt-12 flex flex-wrap gap-6">
                <div className="flex items-center">
                  <div className="rounded-full p-2 bg-koda-purple/10 dark:bg-koda-purple/20">
                    <Truck className="h-5 w-5 text-koda-purple dark:text-koda-orange" />
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    24/7 Updates
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="rounded-full p-2 bg-koda-purple/10 dark:bg-koda-purple/20">
                    <Globe className="h-5 w-5 text-koda-purple dark:text-koda-orange" />
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Global Management
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="rounded-full p-2 bg-koda-purple/10 dark:bg-koda-purple/20">
                    <BarChart3 className="h-5 w-5 text-koda-purple dark:text-koda-orange" />
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Real-time Reports
                  </span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block relative animate-zoom-in">
              <div className="aspect-square bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden relative">
                <div
                  className="absolute inset-0 opacity-80 dark:opacity-50 transition-opacity duration-700"
                  style={{
                    backgroundImage: `url('${slides[currentSlide].image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-koda-purple/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    Streamlined Operations
                  </h3>
                  <p className="text-white/80">
                    Manage all your freight logistics in one place
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-3/4 aspect-square bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
                <div
                  className="absolute inset-0 opacity-80 dark:opacity-50"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8dHJhY2tpbmclMjByZWFsdGltZXx8MHx8fHwxNzEzMTkxNjUwfDA&ixlib=rb-4.0.3&q=80&w=1080')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-bl from-koda-orange/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Real-time Tracking</h3>
                  <p className="text-white/80">
                    Monitor your shipments 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
