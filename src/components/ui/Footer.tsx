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
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSmoothScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();

    if (!isHomePage) {
      router.push("/" + targetId.substring(1));
      return;
    }

    const sectionId = targetId.substring(1);
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Services Section */}
      <section className="bg-[#F5F7FA] py-16" id="cot">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex items-center space-x-4">
              <Truck className="w-12 h-12 text-logo-green-dark" />
              <div>
                <h4 className="font-bold text-[#2c3e50]">Home Delivery</h4>
                <p className="text-sm text-gray-600">
                  Delivery for all over Sri Lanka
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
      <footer className="bg-[#121212] py-16 text-white" id="footer">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <Link
                href="/"
                className="text-2xl font-bold text-logo-green-dark"
              >
                <Image
                  src="/images/logo-1.png"
                  alt="HerbCey Logo"
                  width={120}
                  height={50}
                />
              </Link>
              <p className="text-gray-300 mb-4">
                Natural wellness crafted from Sri Lankan mountain herbs. Our
                mission is to bring pure, sustainable health solutions to your
                everyday life.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://www.facebook.com/share/14XYQ48h7U/?mibextid=wwXIfr"
                  className="text-gray-400 hover:text-logo-green-dark"
                >
                  <Facebook />
                </Link>
                <Link
                  href="https://www.instagram.com/herb.cey/profilecard/?igsh=bjlkZ2QwZnI2MmNk"
                  className="text-gray-400 hover:text-logo-green-dark"
                >
                  <Instagram />
                </Link>

                <Link
                  href="https://wa.me/94702727435"
                  className="text-gray-400 hover:text-logo-green-dark"
                >
                  <FaWhatsapp size={24} />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/herbcey/"
                  className="text-gray-400 hover:text-logo-green-dark"
                >
                  <Linkedin />
                </Link>
                <Link
                  href="https://www.tiktok.com/@herbcey?_t=ZS-8v1ptJbhncu&_r=1"
                  className="text-gray-400 hover:text-logo-green-dark"
                >
                  <FaTiktok size={24} />
                </Link>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                {[
                  { href: "#about", label: "About" },
                  { href: "#OurProducts", label: "Products" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="text-gray-400 hover:text-logo-green-dark transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="font-bold text-white mb-4">Customer Care</h4>
              <ul className="space-y-2">
                {[{ href: "#footer", label: "Contact Us" }].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={(e) =>
                        link.href.startsWith("#")
                          ? handleSmoothScroll(e, link.href)
                          : undefined
                      }
                      className="text-gray-400 hover:text-logo-green-dark transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="font-bold text-white mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-logo-green-dark" />
                  <span className="text-gray-400">Welimada, Sri Lanka</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-logo-green-dark" />
                  <span className="text-gray-400">+94 70 2727 435</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-logo-green-dark" />
                  <span className="text-gray-400">herbcey@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Payment & Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 md:mb-0">
              © 2025 HerbCey. All Rights Reserved. Website by{" "}
              <Link
                href="https://kavinsk.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-logo-green-dark underline"
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
