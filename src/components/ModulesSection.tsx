
import {
  Truck,
  Calculator,
  Bell,
  Users,
  Building2,
  PieChart,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ModulesSection() {
  const modules = [
    {
      icon: <Truck className="h-10 w-10 text-koda-purple dark:text-koda-orange" />,
      title: "Operations & Logistics",
      features: [
        "Container Loading",
        "Load Tracking",
        "Godown Management",
        "Release Order Reports",
        "Delivery Reports",
      ],
    },
    {
      icon: <Calculator className="h-10 w-10 text-koda-purple dark:text-koda-orange" />,
      title: "Finance & Billing",
      features: [
        "Invoice Generation",
        "Invoice Reports",
        "Track Paid Invoices",
        "Track Unpaid Invoices",
        "Financial Analysis",
      ],
    },
    {
      icon: <Bell className="h-10 w-10 text-koda-purple dark:text-koda-orange" />,
      title: "Communication & Notifications",
      features: [
        "SMS Integration",
        "SMS to Leads",
        "Load Status Notifications",
        "Delivery Status Updates",
        "Customer Alerts",
      ],
    },
    {
      icon: <Users className="h-10 w-10 text-koda-purple dark:text-koda-orange" />,
      title: "Customer & Sales",
      features: [
        "Customer Management",
        "Leads Collection",
        "Sales Team Management",
        "CBM Reporting",
        "Customer Analytics",
      ],
    },
    {
      icon: <Building2 className="h-10 w-10 text-koda-purple dark:text-koda-orange" />,
      title: "Branch & Staff",
      features: [
        "Branch Management",
        "Staff Management",
        "Role Assignment",
        "Performance Tracking",
        "Branch Analytics",
      ],
    },
    {
      icon: <PieChart className="h-10 w-10 text-koda-purple dark:text-koda-orange" />,
      title: "Reporting & Insights",
      features: [
        "Sales CBM Reports",
        "Invoice Reports",
        "Release Order Reports",
        "Delivery Reports",
        "Custom Analytics",
      ],
    },
  ];

  return (
    <section id="modules" className="bg-white dark:bg-gray-800">
      <div className="section-container">
        <h2 className="section-title">System Modules</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
          Our comprehensive system includes the following integrated modules to
          optimize your freight operations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <Card
              key={index}
              className="border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 hover:border-koda-orange dark:hover:border-koda-orange overflow-hidden group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute right-0 top-0 h-20 w-20 koda-gradient opacity-10 group-hover:opacity-20 rounded-bl-full transition-opacity duration-300"></div>
              <CardHeader>
                <div className="flex items-center">
                  <div className="mr-4 rounded-full p-2 bg-gray-100 dark:bg-gray-700 group-hover:bg-koda-purple/10 dark:group-hover:bg-koda-orange/10 transition-colors duration-300">
                    {module.icon}
                  </div>
                  <CardTitle className="text-xl text-koda-purple dark:text-white group-hover:text-koda-orange dark:group-hover:text-koda-orange transition-colors duration-300">
                    {module.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {module.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-gray-700 dark:text-gray-300"
                    >
                      <span className="h-2 w-2 rounded-full bg-koda-orange mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
