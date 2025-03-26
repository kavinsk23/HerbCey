"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductShowcase() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between container mx-auto px-4 py-16">
      {/* Text Content */}
      <div className="w-full md:w-2/3 pr-0 md:pr-12">
        <h3 className="text-lg text-[#ff914d] mb-4">Provide the best</h3>
        <h1 className="text-4xl font-bold text-[#2c3e50] mb-6">
          Rosemary Scalp & Hair Oil For You
        </h1>
        <p className="text-gray-600 mb-6">
          We provide the best natural rosemary oil. Our oil comes from fresh
          rosemary grown in our own gardens. We use old traditional methods to
          make it, with no chemicals or fake ingredients. Just pure, natural oil
          that helps your hair and skin. Every drop is made with care, straight
          from nature to you...
        </p>
        <p className="text-gray-600 mb-6">
          Our customers believe in us, knowing our rosemary oil isn't just a
          product, but a promise of natural wellness.
        </p>
        <Link
          href="/products"
          className="inline-block bg-[#ff914d] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-[#ffab73] transition-colors text-sm sm:text-base"
        >
          Shop Now
        </Link>
      </div>

      {/* Product Image */}
      <div className="w-full md:w-2/3 mt-8 md:mt-0 flex justify-center md:justify-end">
        <div className="relative">
          {/* Product Box */}
          <div className="absolute top-0 right-0 w-48 h-64 bg-[#F8F7E7] rounded-lg shadow-lg z-0"></div>

          {/* Product Images */}
          <div className="relative z-10">
            <Image
              src="/images/product-box.jpg"
              alt="HerbCey Rosemary Oil Product Box"
              width={400}
              height={500}
              className="object-contain mb-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
