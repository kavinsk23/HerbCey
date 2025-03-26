"use client";

import Image from "next/image";
import Link from "next/link";

export default function HairProblemsSolution() {
  const problems = [
    {
      problem: "Hair Fall?",
      solution:
        "Our Rosemary Oil stimulates hair follicles, reducing hair fall and promoting stronger, healthier growth.",
      image: "/images/hair-fall-solution.jpeg",
    },
    {
      problem: "Split Ends?",
      solution:
        "Nourish and seal split ends with our natural rosemary oil, restoring hair's natural strength and shine.",
      image: "/images/split-ends-solution.jpeg",
    },
    {
      problem: "Dandruff and Scalp Irritation?",
      solution:
        "Banish dandruff naturally with our rosemary oil. Calm your scalp, stop the itch, and restore your hair's healthy shine.",
      image: "/images/dandruff-solution.jpeg",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      {problems.map((item, index) => (
        <div
          key={item.problem}
          className={`flex flex-col md:flex-row items-center justify-between mb-16 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={item.image}
              alt={item.problem}
              width={500}
              height={600}
              className="w-full max-w-md h-auto object-contain"
            />
          </div>

          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:px-12 text-center md:text-left">
            <h3 className="text-lg text-gray-700 mb-4">
              Solve Your Hair Concerns
            </h3>
            <h1 className="text-4xl font-bold text-[#2c3e50] mb-6">
              {item.problem}
            </h1>
            <p className="text-gray-600 mb-6">{item.solution}</p>
            <Link
              href="/products"
              className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
