"use client";

import Image from "next/image";
import { useState } from "react";
import { CheckCircle, Droplet, Leaf, Shield } from "lucide-react";

export default function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1);

  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-logo-green-dark" />,
      title: "100% Natural",
      description:
        "Made from pure, hand-picked rosemary grown in Sri Lankan mountain gardens",
    },
    {
      icon: <Droplet className="w-8 h-8 text-logo-green-dark" />,
      title: "Deep Nourishment",
      description:
        "Penetrates deep into scalp to strengthen hair from root to tip",
    },
    {
      icon: <Shield className="w-8 h-8 text-logo-green-dark" />,
      title: "Hair Protection",
      description:
        "Prevents damage, reduces breakage, and promotes healthy hair growth",
    },
  ];

  const benefitPoints = [
    "Stimulates hair follicles",
    "Reduces hair fall",
    "Improves scalp health",
    "Adds natural shine",
    "Prevents premature graying",
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Product Image Section */}
        <div className="relative">
          <div className="absolute top-4 left-4 bg-[#00bf63] text-white px-3 py-1 rounded-full z-10">
            30% OFF
          </div>
          <Image
            src="/images/bottle-1.png"
            alt="HerbCey Rosemary Scalp & Hair Oil"
            width={600}
            height={800}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Product Details Section */}
        <div>
          <h1 className="text-4xl font-bold text-[#2c3e50] mb-4">
            HerbCey Rosemary Scalp & Hair Oil
          </h1>

          {/* Pricing */}
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-2xl font-bold text-logo-green-dark">
              950 LKR
            </span>
            <span className="text-gray-500 line-through text-lg">
              1,350 LKR
            </span>
            <span className="bg-yellow-500 text-white px-2 py-1 rounded text-sm">
              Save 30%
            </span>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">
              Product Features
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  {feature.icon}
                  <div>
                    <h4 className="font-semibold text-[#2c3e50]">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">
              Key Benefits
            </h3>
            <div className="grid md:grid-cols-2 gap-2">
              {benefitPoints.map((point, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-logo-green-dark" />
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="mb-6 flex items-center space-x-4">
            <div className="flex items-center border rounded">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 text-gray-600"
              >
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 text-gray-600"
              >
                +
              </button>
            </div>
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors">
              Add to Cart
            </button>
          </div>

          {/* Guarantee */}
          <div className="bg-[#F8F7E7] p-4 rounded-lg">
            <h4 className="font-semibold text-[#2c3e50] mb-2">
              🌿 Our Guarantee
            </h4>
            <p className="text-gray-700">
              100% natural, no chemicals. If you're not satisfied, we offer a
              30-day money-back guarantee. Your hair's health is our promise.
            </p>
          </div>
        </div>
      </div>

      {/* Detailed Description */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center text-[#2c3e50] mb-8">
          Why HerbCey Rosemary Oil?
        </h2>
        <div className="max-w-4xl mx-auto text-center text-gray-700 space-y-6">
          <p>
            Crafted from the finest rosemary grown in the misty mountains of Sri
            Lanka, our oil is more than just a hair product—it's a tradition of
            natural wellness. Each drop carries the essence of centuries-old
            herbal wisdom, carefully extracted to bring you the purest, most
            potent hair care solution.
          </p>
          <p>
            We believe in the power of nature. Our rosemary is hand-picked,
            cold-pressed, and processed with zero artificial additives. This
            means you're getting a product that's as close to nature as
            possible.
          </p>
        </div>
      </div>
    </div>
  );
}
