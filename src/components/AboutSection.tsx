
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8bG9naXN0aWNzfHwwfHx8fDE3MTMxOTE2NTB8MA&ixlib=rb-4.0.3&q=80&w=1080')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-r from-koda-purple/60 to-koda-orange/60"></div>
            </div>
            <div className="absolute -bottom-8 sm:-right-8 right-0 w-full sm:w-3/4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 animate-fade-in-up">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-koda-purple dark:text-koda-orange">
                Why Choose Koda Freight?
              </h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                Our system simplifies freight operations with real-time updates,
                comprehensive management tools, and integrated modules.
              </p>
            </div>
          </div>

          <div className="lg:pl-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-koda-purple dark:text-white">
              About Koda Freight
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Koda Freight is a powerful system designed to simplify freight
              operations by providing real-time reports at every stage. With this
              system, you can manage all your branches locally and
              internationally while receiving real-time updates 24/7.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Our platform integrates key modules to enhance efficiency and
              streamline operations, making it the ideal solution for logistics
              companies of all sizes.
            </p>

            {/* Stats Counter */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center border-l-4 border-koda-purple">
                <div className="text-3xl font-bold text-koda-purple dark:text-koda-orange counter">
                  1200+
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Happy Customers</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center border-l-4 border-koda-orange">
                <div className="text-3xl font-bold text-koda-purple dark:text-koda-orange counter">
                  12+
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Years of Operation</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8 border-l-4 border-koda-orange">
              <h3 className="font-bold mb-2 text-gray-800 dark:text-white">
                Contact Us
              </h3>
              <div className="space-y-2">
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Location:</span> Mbezi Beach -
                  A, 2nd Floor, Dar es salaam - Tanzania
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Phone:</span> +255 780 223
                  470, +255 748 121 608, +255 752 832 590
                </p>
              </div>
            </div>

            <Button className="btn-primary flex items-center" onClick={() => window.open("https://www.kodafreight.com", "_blank")}>
              Visit Website
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
