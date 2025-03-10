
import React from "react";
import { 
  Building, 
  ShieldCheck, 
  Users, 
  Briefcase, 
  GraduationCap, 
  Landmark, 
  LineChart,
  Globe,
  ShoppingBag
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import KodaLogo from "@/components/KodaLogo";

const clientLogos = [
  { 
    name: "TechCorp", 
    logo: <Building className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
    description: "Leading tech innovation since 2010"
  },
  { 
    name: "SecureNet", 
    logo: <ShieldCheck className="w-12 h-12 text-green-600 dark:text-green-400" />,
    description: "Enterprise security solutions"
  },
  { 
    name: "GlobalTeam", 
    logo: <Globe className="w-12 h-12 text-purple-600 dark:text-purple-400" />,
    description: "Worldwide collaboration platform"
  },
  { 
    name: "FinancePro", 
    logo: <LineChart className="w-12 h-12 text-red-600 dark:text-red-400" />,
    description: "Financial analytics services"
  },
  { 
    name: "EduLearn", 
    logo: <GraduationCap className="w-12 h-12 text-amber-600 dark:text-amber-400" />,
    description: "Educational technology platform"
  },
  { 
    name: "RetailGiant", 
    logo: <ShoppingBag className="w-12 h-12 text-teal-600 dark:text-teal-400" />,
    description: "E-commerce solutions"
  },
];

const testimonials = [
  {
    quote: "Koda's platform transformed our team's collaboration and productivity. We saw a 30% increase in project completion rates within just 3 months.",
    author: "Sarah Johnson",
    position: "CTO, TechCorp"
  },
  {
    quote: "The security features offered by Koda gave us the confidence to scale our operations globally while maintaining data integrity.",
    author: "Michael Chen",
    position: "Security Director, SecureNet"
  },
  {
    quote: "Our distributed teams finally feel connected. The intuitive interface made adoption across our organization seamless.",
    author: "Elena Rodriguez",
    position: "Head of Operations, GlobalTeam"
  }
];

const ClientsSection = () => {
  return (
    <section id="clients" className="bg-gray-50 dark:bg-gray-900 py-16 md:py-24 overflow-hidden">
      <div className="section-container">
        <h2 className="section-title">Trusted by Industry Leaders</h2>
        
        {/* Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16 mt-12">
          {clientLogos.map((client, index) => (
            <div 
              key={`${client.name}-${index}`}
              className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="rounded-full bg-gray-100 dark:bg-gray-700 p-4 mb-3">
                {client.logo}
              </div>
              <h3 className="font-bold text-koda-purple dark:text-koda-orange">{client.name}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-1">{client.description}</p>
            </div>
          ))}
        </div>
        
        {/* Featured Clients */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
          <div className="text-center">
            <p className="text-xl font-semibold mb-4">Featured Enterprise Partners</p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center justify-center w-40 h-20 bg-white dark:bg-gray-800 rounded-lg shadow p-4">
                <div className="w-16 h-16 relative">
                  <KodaLogo className="w-full h-full" />
                </div>
                <span className="ml-2 font-bold text-koda-purple dark:text-koda-orange">TechGiant</span>
              </div>
              
              <div className="flex items-center justify-center w-40 h-20 bg-white dark:bg-gray-800 rounded-lg shadow p-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">F</div>
                <span className="ml-2 font-bold text-blue-600 dark:text-blue-400">FinanceHub</span>
              </div>
              
              <div className="flex items-center justify-center w-40 h-20 bg-white dark:bg-gray-800 rounded-lg shadow p-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">H</div>
                <span className="ml-2 font-bold text-green-600 dark:text-green-400">HealthTech</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <h3 className="text-2xl font-bold text-center mb-10">What Our Clients Say</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden border-t-4 border-koda-orange dark:border-koda-orange hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-4 text-4xl text-koda-orange">"</div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-koda-purple to-koda-orange flex items-center justify-center text-white font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-koda-purple dark:text-koda-orange">{testimonial.author}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
