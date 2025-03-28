
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

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

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-white dark:bg-gray-800 py-16 md:py-24 overflow-hidden">
      <div className="section-container">
        <h2 className="section-title">What Our Clients Say</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
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

export default TestimonialsSection;
