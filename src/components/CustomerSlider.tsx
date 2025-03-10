
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Building, ShieldCheck, Users, Globe, LineChart, GraduationCap, ShoppingBag, Briefcase, Activity, Truck } from "lucide-react";
import { cn } from "@/lib/utils";

// Define the customer data structure
interface Customer {
  name: string;
  logo: React.ReactNode;
  description: string;
  industry: string;
  color: string;
}

const customers: Customer[] = [
  { 
    name: "TechCorp", 
    logo: <Building className="w-14 h-14" />,
    description: "Streamlining tech operations across 12 countries",
    industry: "Technology",
    color: "text-blue-600 dark:text-blue-400",
  },
  { 
    name: "SecureNet", 
    logo: <ShieldCheck className="w-14 h-14" />,
    description: "Managing secure logistics for sensitive materials",
    industry: "Security",
    color: "text-green-600 dark:text-green-400",
  },
  { 
    name: "GlobalTeam", 
    logo: <Globe className="w-14 h-14" />,
    description: "Connecting international offices with real-time tracking",
    industry: "International Trade",
    color: "text-purple-600 dark:text-purple-400",
  },
  { 
    name: "FinancePro", 
    logo: <LineChart className="w-14 h-14" />,
    description: "Optimizing cost efficiency in financial logistics",
    industry: "Finance",
    color: "text-red-600 dark:text-red-400",
  },
  { 
    name: "EduLearn", 
    logo: <GraduationCap className="w-14 h-14" />,
    description: "Distributing educational materials to remote areas",
    industry: "Education",
    color: "text-amber-600 dark:text-amber-400",
  },
  { 
    name: "RetailGiant", 
    logo: <ShoppingBag className="w-14 h-14" />,
    description: "Revolutionizing retail supply chain management",
    industry: "Retail",
    color: "text-teal-600 dark:text-teal-400",
  },
  { 
    name: "LogiTrans", 
    logo: <Truck className="w-14 h-14" />,
    description: "Enhancing fleet management with real-time tracking",
    industry: "Transportation",
    color: "text-indigo-600 dark:text-indigo-400",
  },
  { 
    name: "HealthCare Plus", 
    logo: <Activity className="w-14 h-14" />,
    description: "Ensuring timely delivery of medical supplies",
    industry: "Healthcare",
    color: "text-pink-600 dark:text-pink-400",
  },
  { 
    name: "CorpSolutions", 
    logo: <Briefcase className="w-14 h-14" />,
    description: "Providing integrated logistics for corporate clients",
    industry: "Business Services",
    color: "text-orange-600 dark:text-orange-400",
  },
  { 
    name: "ProTeam", 
    logo: <Users className="w-14 h-14" />,
    description: "Facilitating team collaboration across supply chains",
    industry: "Professional Services",
    color: "text-cyan-600 dark:text-cyan-400",
  },
];

const CustomerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCustomers = 3; // Number of customers visible at once

  // Auto-scroll the slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % (customers.length - visibleCustomers + 1)
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-12 overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title mb-12">Our Valued Customers</h2>
        
        <div className="relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-full bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-900 z-10"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-full bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-900 z-10"></div>
          
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleCustomers)}%)` }}
          >
            {customers.map((customer, index) => (
              <div 
                key={`${customer.name}-${index}`} 
                className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 px-4"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-t-4 border-koda-orange overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className={cn("rounded-full p-4 mb-4", customer.color)}>
                        {customer.logo}
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-koda-purple dark:text-koda-orange">{customer.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{customer.industry}</p>
                      <p className="text-gray-700 dark:text-gray-300">{customer.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        {/* Slider navigation dots */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: customers.length - visibleCustomers + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-koda-orange scale-125' 
                  : 'bg-gray-300 dark:bg-gray-700'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerSlider;
