import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function DemoRequestSection() {
  const [formData, setFormData] = useState({
    full_name: "",
    email_address: "",
    phone_number: "",
    company_name: "",
    city: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://kodafreight.benethemmanuel.tech/api/demorequest/storedemorequests",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        toast.error("Failed to submit request");
      }

      // Show success toast
      toast.success(
        "Demo request submitted successfully! We'll contact you soon."
      );

      // Reset form
      setFormData({
        full_name: "",
        email_address: "",
        phone_number: "",
        company_name: "",
        city: "",
        message: "",
      });
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="request-demo" className="bg-white dark:bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-koda-purple dark:text-white">
            Request a <span className="text-koda-orange">Demo</span>
          </h2>

          <Card className="border-t-4 border-koda-orange">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="full_name"
                      className="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Full Name
                    </label>
                    <input
                      id="full_name"
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-koda-orange dark:bg-gray-700 dark:text-white"
                      placeholder="John Doe"
                      value={formData.full_name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email_address"
                      className="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Email Address
                    </label>
                    <input
                      id="email_address"
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-koda-orange dark:bg-gray-700 dark:text-white"
                      placeholder="john@example.com"
                      value={formData.email_address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="phone_number"
                      className="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone_number"
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-koda-orange dark:bg-gray-700 dark:text-white"
                      placeholder="+1 234 567 8900"
                      value={formData.phone_number}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="company_name"
                      className="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Company Name
                    </label>
                    <input
                      id="company_name"
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-koda-orange dark:bg-gray-700 dark:text-white"
                      placeholder="Company Inc."
                      value={formData.company_name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="city"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    City
                  </label>
                  <input
                    id="city"
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-koda-orange dark:bg-gray-700 dark:text-white"
                    placeholder="New York"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-koda-orange dark:bg-gray-700 dark:text-white"
                    placeholder="Tell us about your freight operations and how we can help..."
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button
                className="w-full sm:w-auto btn-primary"
                onClick={handleSubmit}
                disabled={
                  isSubmitting ||
                  !formData.company_name ||
                  !formData.email_address ||
                  !formData.full_name ||
                  !formData.phone_number
                }
              >
                {isSubmitting ? "Submitting..." : "Request Demo"}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
