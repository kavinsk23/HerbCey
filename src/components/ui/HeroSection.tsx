"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax transformations
  const backgroundLeftX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const backgroundRightX = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const bottleY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <motion.section
      ref={ref}
      className="relative w-full overflow-hidden bg-[#F5F7FA] flex justify-center"
    >
      <div className="container px-4 py-8 flex flex-col-reverse lg:grid lg:grid-cols-2 w-full">
        {/* Left Section - Text Content */}
        <div className="flex items-center justify-start">
          <div className="max-w-lg w-full">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#ff914d] font-medium text-sm sm:text-base"
            >
              Pure Natural Wellness
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2c3e50] mb-4 leading-14"
            >
              Discover <span className="text-[#00bf63]">HerbCey</span> Rosemary
              Scalp & Hair Oil
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 mb-6 text-sm sm:text-base"
            >
              Unlock the power of pure rosemary oil for stronger, healthier
              hair. Naturally derived, scientifically formulated to nourish your
              scalp and promote hair growth.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href="/products"
                className="inline-block bg-[#ff914d] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-[#ffab73] transition-colors text-sm sm:text-base"
              >
                Shop Now
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Right Section - Product Images */}
        <div className="relative overflow-hidden flex items-center justify-center w-full">
          {/* Background Images with Parallax */}
          <motion.div
            style={{ x: backgroundLeftX }}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 max-w-xs sm:max-w-md"
          >
            <Image
              src="/images/background-left.png"
              alt="Background Left"
              width={400}
              height={400}
              className="w-full h-auto object-contain ml-5"
            />
          </motion.div>

          <motion.div
            style={{ x: backgroundRightX }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 max-w-xs sm:max-w-md"
          >
            <Image
              src="/images/background-right.png"
              alt="Background Right"
              width={400}
              height={400}
              className="w-full h-auto object-contain -ml-8"
            />
          </motion.div>

          {/* Product Bottle with Vertical Parallax */}
          <motion.div
            style={{ y: bottleY }}
            className="z-10 relative w-2/3 sm:w-1/2 max-w-xs sm:max-w-md lg:max-w-lg flex justify-center"
          >
            <Image
              src="/images/bottle-1.png"
              alt="HerbCey Rosemary Oil"
              width={600}
              height={900}
              className="w-full h-auto object-contain ml-4"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
