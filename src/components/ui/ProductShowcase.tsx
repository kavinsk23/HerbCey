"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductShowcase() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col md:flex-row items-center justify-between container mx-auto px-4 py-16"
      id="about"
    >
      {/* Product Image - Now First */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full md:w-2/3 mt-8 md:mt-0 flex justify-center md:justify-start order-2 md:order-1"
      >
        <div className="relative">
          {/* Product Box */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-48 h-64 bg-[#F8F7E7] rounded-lg shadow-lg z-0"
          ></motion.div>

          {/* Product Images */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative z-10"
          >
            <Image
              src="/images/product-box.jpg"
              alt="HerbCey Rosemary Oil Product Box"
              width={500}
              height={600}
              className="object-contain mb-4"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Text Content - Now Second */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full md:w-2/3 pl-0 md:pl-12 order-1 md:order-2"
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-lg text-[#2c3e50] mb-4"
        >
          Provide the best
        </motion.h3>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-4xl font-bold text-[#2c3e50] mb-6"
        >
          Pure Rosemary Scalp & Hair Strengthening Oil For You
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-gray-600 mb-6"
        >
          We provide the best natural rosemary oil. Our oil comes from fresh
          rosemary grown in our own gardens. We use old traditional methods to
          make it, with no chemicals or fake ingredients. Just pure, natural oil
          that helps your hair and skin. Every drop is made with care, straight
          from nature to you...
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-gray-600 mb-6"
        >
          Our customers believe in us, knowing our rosemary oil isn't just a
          product, but a promise of natural wellness.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <Link
            href="/products/rosemary-oil"
            className="inline-block bg-[#ff914d] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-[#ffab73] transition-colors text-sm sm:text-base"
          >
            Shop Now
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
