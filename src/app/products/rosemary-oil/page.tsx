"use client";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from "next/image";
import { useState } from "react";
import { CheckCircle, Droplet, Leaf, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

type MediaItem = {
  type: "image" | "video";
  src: string;
  thumbnail?: string;
};

export default function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const handleGetQuote = () => {
    const message = "Hello! I'm interested in ordering from HerbCey.";
    const whatsappUrl = `https://wa.me/94702727435?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  // Product gallery media (images and video)
  const galleryMedia: MediaItem[] = [
    {
      type: "video",
      src: "/videos/product-video.mov",
      thumbnail: "/images/bottle-1.png",
    },
    {
      type: "video",
      src: "/videos/rosemary-video.mov",
      thumbnail: "/images/RosemaryImg-1.jpg",
    },
    { type: "image", src: "/images/bottle-1.png" },
    { type: "image", src: "/images/RosemaryImg-1.jpg" },
    { type: "image", src: "/images/RosemaryImg-2.jpg" },
    { type: "image", src: "/images/RosemaryImg-3.jpg" },
    { type: "image", src: "/images/CurryLeaves-1.jpg" },
  ];

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
    "New hair growth",
    "Long & strong hair",
    "Improves scalp health",
    "Adds natural shine",
    "Prevents premature graying",
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="grid md:grid-cols-2 gap-6 md:gap-12">
        {/* Product Image Gallery Section */}
        <div className="relative">
          <div className="absolute top-4 left-4 bg-[#00bf63] text-white px-3 py-1 rounded-full z-10">
            30% OFF
          </div>

          {/* Main Large Media */}
          <motion.div
            key={galleryMedia[mainImageIndex].src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full cursor-pointer mb-4 aspect-square md:aspect-video"
          >
            {galleryMedia[mainImageIndex].type === "image" ? (
              <Image
                src={galleryMedia[mainImageIndex].src}
                alt="HerbCey Rosemary Oil"
                width={600}
                height={800}
                className="w-full h-full object-contain rounded-lg"
                onClick={() =>
                  setSelectedImage(galleryMedia[mainImageIndex].src)
                }
              />
            ) : (
              <video
                controls
                className="w-full h-full object-contain rounded-lg"
                poster={galleryMedia[mainImageIndex].thumbnail}
              >
                <source
                  src={galleryMedia[mainImageIndex].src}
                  type="video/quicktime"
                />
                Your browser does not support the video tag.
              </video>
            )}
          </motion.div>

          {/* Horizontal Scrollable Thumbnails */}
          <div className="flex overflow-x-auto space-x-2 pb-4 snap-x">
            {galleryMedia.map((media, index) => (
              <motion.div
                key={media.src}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 cursor-pointer relative snap-start
                  ${
                    index === mainImageIndex
                      ? "border-2 border-logo-green-dark"
                      : "border border-gray-200"
                  }
                `}
                onClick={() => setMainImageIndex(index)}
              >
                <Image
                  src={
                    media.type === "image" ? media.src : media.thumbnail || ""
                  }
                  alt={`Product ${media.type} ${index + 1}`}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full rounded"
                />
                {media.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-white rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-t-transparent border-t-[5px] border-b-transparent border-b-[5px] border-l-white border-l-[8px] ml-0.5"></div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-[#2c3e50] mb-2 md:mb-4">
            Pure Rosemary Scalp & Hair Strengthening Oil
          </h1>

          {/* Pricing */}
          <div className="flex items-center space-x-4 mb-4 md:mb-6">
            <span className="text-xl md:text-2xl font-bold text-[#00bf63]">
              950 LKR
            </span>
            <span className="text-red-500 line-through text-base md:text-lg">
              1,350 LKR
            </span>
            <span className="bg-[#ff914d] text-white px-2 py-1 rounded text-xs md:text-sm">
              Save 30%
            </span>
          </div>

          {/* Features */}
          <div className="mb-4 md:mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-[#2c3e50] mb-2 md:mb-4">
              Product Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-2 md:space-x-3"
                >
                  <div className="flex-shrink-0">
                    {React.cloneElement(feature.icon, {
                      className: "w-6 h-6 md:w-8 md:h-8 text-logo-green-dark",
                    })}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2c3e50] text-sm md:text-base">
                      {feature.title}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-4 md:mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-[#2c3e50] mb-2 md:mb-4">
              Key Benefits
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {benefitPoints.map((point, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-logo-green-dark" />
                  <span className="text-sm md:text-base text-gray-700">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quantity and Get Quote Button */}
          <div className="mb-4 md:mb-6 flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center border rounded">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 md:px-4 py-1 md:py-2 text-gray-600"
              >
                -
              </button>
              <span className="px-3 md:px-4 py-1 md:py-2">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 md:px-4 py-1 md:py-2 text-gray-600"
              >
                +
              </button>
            </div>
            <button
              onClick={handleGetQuote}
              className="w-full sm:w-auto bg-[#ff914d] text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-[#ffab73] transition-colors"
            >
              Chat to Order
            </button>
          </div>

          {/* Guarantee */}
          <div className="bg-[#F5F7FA] p-3 md:p-4 rounded-lg">
            <h4 className="font-semibold text-[#2c3e50] mb-1 md:mb-2 text-sm md:text-base">
              🌿 Our Guarantee
            </h4>
            <p className="text-xs md:text-sm text-gray-700">
              100% natural, no chemicals. If you're not satisfied, we offer a
              30-day money-back guarantee. Your hair's health is our promise.
            </p>
          </div>
        </div>
      </div>

      {/* Detailed Description */}
      <div className="mt-8 md:mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#2c3e50] mb-4 md:mb-8">
          Why HerbCey Rosemary Oil?
        </h2>
        <div className="max-w-4xl mx-auto text-center text-gray-700 space-y-4 md:space-y-6">
          <p className="text-sm md:text-base">
            Experience the ancient wisdom of Sri Lankan highlands in every drop
            of our rosemary oil. Harvested from pristine mountain gardens and
            crafted using time-honored extraction methods, our formula delivers
            nature's purest gift directly to your hair and scalp.
          </p>
          <p className="text-sm md:text-base">
            Unlike mass-produced alternatives filled with chemicals, our
            small-batch process preserves every powerful nutrient and essential
            oil. We don't just promise natural - we guarantee transformative
            results that thousands of satisfied customers have already
            discovered. Your journey to healthier, stronger, more beautiful hair
            begins with this bottle.
          </p>
        </div>
      </div>

      {/* Fullscreen Image/Video Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-full max-h-full"
            >
              {selectedImage.endsWith(".mp4") ||
              selectedImage.endsWith(".mov") ? (
                <video
                  controls
                  autoPlay
                  className="max-w-full max-h-[90vh]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <source
                    src={selectedImage}
                    type={
                      selectedImage.endsWith(".mp4")
                        ? "video/mp4"
                        : "video/quicktime"
                    }
                  />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={selectedImage}
                  alt="Fullscreen Gallery Image"
                  width={1200}
                  height={800}
                  className="max-w-full max-h-full object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
