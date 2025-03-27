"use client";

import Link from "next/link";
import {
  Truck,
  Shield,
  RefreshCw,
  Headset,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUp,
} from "lucide-react";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Services Section */}
      <section className="bg-[#F5F7FA] py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex items-center space-x-4">
              <Truck className="w-12 h-12 text-logo-green-dark" />
              <div>
                <h4 className="font-bold text-[#2c3e50]">Home Delivery</h4>
                <p className="text-sm text-gray-600">
                  Delivery for all over Sri Lanks
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Shield className="w-12 h-12 text-logo-green-dark" />
              <div>
                <h4 className="font-bold text-[#2c3e50]">Quality Products</h4>
                <p className="text-sm text-gray-600">
                  We ensure the product quality
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <RefreshCw className="w-12 h-12 text-logo-green-dark" />
              <div>
                <h4 className="font-bold text-[#2c3e50]">3 Days Return</h4>
                <p className="text-sm text-gray-600">
                  Return product within 3 days
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Headset className="w-12 h-12 text-logo-green-dark" />
              <div>
                <h4 className="font-bold text-[#2c3e50]">Online Support</h4>
                <p className="text-sm text-gray-600">
                  We ensure you can trust us easily
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold text-logo-green-dark mb-4">
                HerbCey
              </h3>
              <p className="text-gray-600 mb-4">
                Natural wellness crafted from Sri Lankan mountain herbs. Our
                mission is to bring pure, sustainable health solutions to your
                everyday life.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-gray-600 hover:text-logo-green-dark"
                >
                  <Facebook />
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-logo-green-dark"
                >
                  <Instagram />
                </Link>

                <Link
                  href="#"
                  className="text-gray-600 hover:text-logo-green-dark"
                >
                  <FaWhatsapp size={24} />
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-logo-green-dark"
                >
                  <Linkedin />
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-logo-green-dark"
                >
                  <FaTiktok size={24} />
                </Link>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-bold text-[#2c3e50] mb-4">Company</h4>
              <ul className="space-y-2">
                {[
                  { href: "/about", label: "About" },
                  { href: "/products", label: "All Products" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-logo-green-dark transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="font-bold text-[#2c3e50] mb-4">Customer Care</h4>
              <ul className="space-y-2">
                {[
                  { href: "/track", label: "Order Tracking" },
                  { href: "/contact", label: "Contact Us" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-logo-green-dark transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="font-bold text-[#2c3e50] mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-logo-green-dark" />
                  <span className="text-gray-600">Welimada, Sri Lanka</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-logo-green-dark" />
                  <span className="text-gray-600">+94 70 2727 435</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-logo-green-dark" />
                  <span className="text-gray-600">herbcey@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Payment & Copyright */}
          <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 md:mb-0">
              © 2025 HerbCey. All Rights Reserved. Website by{" "}
              <Link
                href="https://kavinsk.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-logo-green-dark hover:underline"
              >
                Kavin SK
              </Link>
            </p>
          </div>
        </div>

        {/* Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#ff914d] text-white p-3 rounded-full shadow-lg hover:bg-[#ffab73] transition-colors"
        >
          <ArrowUp />
        </button>
      </footer>
    </>
  );
}
