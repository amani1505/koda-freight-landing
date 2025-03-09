
import { Box, BarChart3, Globe, Clock, Truck, Zap } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Truck className="feature-icon" />,
      title: "Operations & Logistics",
      description:
        "Manage container loading, track shipments in real-time, and handle warehouse operations efficiently.",
    },
    {
      icon: <BarChart3 className="feature-icon" />,
      title: "Finance & Billing",
      description:
        "Generate invoices automatically, track payments, and monitor all financial transactions in one place.",
    },
    {
      icon: <Box className="feature-icon" />,
      title: "Branch Management",
      description:
        "Oversee multiple business locations and manage staff roles, tasks, and performance with ease.",
    },
    {
      icon: <Globe className="feature-icon" />,
      title: "Global Operations",
      description:
        "Manage branches locally and internationally with real-time updates and synchronized data.",
    },
    {
      icon: <Clock className="feature-icon" />,
      title: "Real-time Reports",
      description:
        "Access detailed reports at every stage of the freight process for better decision making.",
    },
    {
      icon: <Zap className="feature-icon" />,
      title: "Customer Notifications",
      description:
        "Keep your customers informed with automated SMS notifications and updates.",
    },
  ];

  return (
    <section id="features" className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="section-container max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="section-title text-4xl font-bold text-center mb-6 text-koda-purple dark:text-white">
          Powerful Features
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
          Our system integrates key modules to enhance efficiency and streamline
          your freight operations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 feature-card group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full flex items-center justify-center bg-koda-purple/10 dark:bg-koda-orange/20 mb-4 text-koda-purple dark:text-koda-orange group-hover:bg-koda-orange/20 dark:group-hover:bg-koda-purple/20 group-hover:text-koda-orange dark:group-hover:text-white transform transition-all duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-koda-purple dark:text-koda-orange group-hover:text-koda-orange dark:group-hover:text-white transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
