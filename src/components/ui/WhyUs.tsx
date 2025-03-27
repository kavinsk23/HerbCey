"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HairProblemsSolution() {
  const problems = [
    {
      problem: "Hair Fall?",
      solution:
        "Our Rosemary Oil reduces hair fall by increasing blood flow to follicles, blocking DHT (a hormone that causes hair loss), and protecting scalp health with its anti-inflammatory and antimicrobial properties. Studies show these natural compounds strengthen roots and prevent shedding.",
      image: "/images/hair-fall-solution.jpeg",
    },
    {
      problem: "Split Ends?",
      solution:
        "Our rosemary oil prevents split ends by deeply penetrating hair shafts to restore moisture and strengthen protein bonds. Its natural nutrients seal cuticles, protecting hair from environmental damage while vitamin E and antioxidants repair existing splits and prevent new ones from forming.",
      image: "/images/split-ends-solution.jpeg",
    },
    {
      problem: "Dandruff and Scalp Irritation?",
      solution:
        "Our rosemary oil effectively eliminates dandruff through its natural antifungal and antimicrobial properties that target the root cause. It soothes inflamed scalps, regulates oil production, and deeply moisturizes to prevent flaking. Regular application creates a balanced scalp environment that stops itching and restores your hair's natural luster without harsh chemicals.",
      image: "/images/dandruff-solution.jpeg",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      {problems.map((item, index) => (
        <motion.div
          key={item.problem}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 * index }}
          className={`flex flex-col md:flex-row items-center justify-between mb-16 ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <motion.div
            initial={{ x: index % 2 === 0 ? 50 : -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <Image
              src={item.image}
              alt={item.problem}
              width={500}
              height={600}
              className="w-full max-w-md h-auto object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            className="w-full md:w-1/2 mt-8 md:mt-0 md:px-12 text-center md:text-left"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 * index }}
              className="text-lg text-gray-700 mb-4"
            >
              Solve Your Hair Concerns
            </motion.h3>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 * index }}
              className="text-4xl font-bold text-[#2c3e50] mb-6"
            >
              {item.problem}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 * index }}
              className="text-gray-600 mb-6"
            >
              {item.solution}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 * index }}
            >
              <Link
                href="/products/rosemary-oil"
                className="inline-block bg-[#ff914d] text-white px-6 py-3 rounded-lg hover:bg-[#ffab73] transition-colors"
              >
                Shop Now
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
}
