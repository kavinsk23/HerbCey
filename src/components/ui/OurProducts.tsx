"use client";

import Image from "next/image";
import Link from "next/link";

export default function OurProducts() {
  return (
    <section
      id="OurProducts"
      className="container mx-auto w-full px-4 py-16 bg-[#F5F7FA]"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#2c3e50] mb-4">Our Products</h2>
        <p className="text-gray-600">Pure Natural Wellness in Every Bottle</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="w-full bg-white max-w-md relative group border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
          {/* Discount Badge */}
          <div className="absolute top-4 left-4 bg-[#00bf63] text-white px-3 py-1 rounded-full z-10">
            30% OFF
          </div>

          {/* Product Image */}
          <div className="relative mb-6">
            <Image
              src="/images/bottle-1.png"
              alt="HerbCey Rosemary Scalp & Hair Oil"
              width={500}
              height={700}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-[#2c3e50] mb-2">
              HerbCey Rosemary Scalp & Hair Oil
            </h3>
            <div className="flex justify-center items-center space-x-4 mb-4">
              <span className="text-lg font-bold text-green-500">950 LKR</span>
              <span className="text-red-500 line-through">1,350 LKR</span>
            </div>

            {/* View More Button */}
            <Link
              href="/products/rosemary-oil"
              className="inline-block mt-4 border-2 border-[#ff914d] text-[#ff914d] px-6 py-3 rounded-lg hover:bg-[#ff914d] hover:text-white transition-colors"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
