
import { Phone, Mail, MapPin } from "lucide-react";
import KodaLogo from "./KodaLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <KodaLogo className="h-10 w-10" />
              <span className="ml-2 text-xl font-bold">Koda Freight</span>
            </div>
            <p className="text-gray-400 mb-4">
              A powerful system designed to simplify freight operations with
              real-time updates and integrated modules.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-koda-purple flex items-center justify-center hover:bg-koda-orange transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-koda-purple flex items-center justify-center hover:bg-koda-orange transition-colors duration-300"
                aria-label="Twitter"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.503 14-14v-.617c.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-koda-purple flex items-center justify-center hover:bg-koda-orange transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5v1.8c.8-1.1 2-1.8 3.5-1.8 2.5 0 4.5 2 4.5 6.3v6.7h-5v-7c0-1-1-2-2-2z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-koda-orange transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-koda-orange transition-colors duration-300"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#modules"
                  className="text-gray-400 hover:text-koda-orange transition-colors duration-300"
                >
                  Modules
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-koda-orange transition-colors duration-300"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              System Modules
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-koda-orange transition-colors duration-300"
                >
                  Operations & Logistics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-koda-orange transition-colors duration-300"
                >
                  Finance & Billing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-koda-orange transition-colors duration-300"
                >
                  Communication & Notifications
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-koda-orange transition-colors duration-300"
                >
                  Customer & Sales
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-koda-orange mr-2 mt-0.5" />
                <span className="text-gray-400">
                  Mbezi Beach - A, 2nd Floor, Dar es salaam - Tanzania
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-koda-orange mr-2 mt-0.5" />
                <div className="text-gray-400">
                  <p>+255 780 223 470</p>
                  <p>+255 748 121 608</p>
                  <p>+255 752 832 590</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-koda-orange mr-2 mt-0.5" />
                <a
                  href="mailto:info@kodafreight.com"
                  className="text-gray-400 hover:text-koda-orange transition-colors duration-300"
                >
                  info@kodafreight.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} Koda Freight. All rights reserved. | Visit:{" "}
            <a
              href="https://www.kodafreight.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-koda-orange hover:underline"
            >
              www.kodafreight.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
