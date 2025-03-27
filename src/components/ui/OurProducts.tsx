"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function OurProducts() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id="OurProducts"
      className="container mx-auto w-full px-4 py-16 bg-[#F5F7FA]"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-[#2c3e50] mb-4">Our Products</h2>
        <p className="text-gray-600">Pure Natural Wellness in Every Bottle</p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          className="w-full bg-white max-w-md relative group border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
        >
          {/* Discount Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute top-4 left-4 bg-[#00bf63] text-white px-3 py-1 rounded-full z-10"
          >
            30% OFF
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="relative mb-6"
          >
            <Image
              src="/images/bottle-1.png"
              alt="HerbCey Rosemary Scalp & Hair Oil"
              width={500}
              height={700}
              className="w-full h-auto object-contain"
            />
          </motion.div>

          {/* Product Details */}
          <div className="text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-xl font-bold text-[#2c3e50] mb-2"
            >
              HerbCey Rosemary Scalp & Hair Oil
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="flex justify-center items-center space-x-4 mb-4"
            >
              <span className="text-lg font-bold text-green-500">950 LKR</span>
              <span className="text-red-500 line-through">1,350 LKR</span>
            </motion.div>

            {/* View More Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <Link
                href="/products/rosemary-oil"
                className="inline-block mt-4 border-2 border-[#ff914d] text-[#ff914d] px-6 py-3 rounded-lg hover:bg-[#ff914d] hover:text-white transition-colors"
              >
                View More
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
