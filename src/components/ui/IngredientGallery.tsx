"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  "/images/RosemaryImg-2.jpg",
  "/images/RosemaryImg-1.jpg",
  "/images/RosemaryImg-3.jpg",
  "/images/RosemaryImg-4.jpg",
  "/images/RosemaryImg-5.jpg",
  "/images/CurryLeaves-1.jpg",
  "/images/CurryLeaves-2.jpg",
  "/images/CurryLeaves-3.jpg",
  "/images/CurryLeaves-4.jpg",
];

export default function HerbCeyGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-[#2c3e50] mb-4">
          Our Pure, Home-Grown Ingredients
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Witness the journey of our 100% natural ingredients. From our lush Sri
          Lankan gardens to your wellness routine, every image tells a story of
          pure, sustainable sourcing and traditional herbal wisdom.
        </p>
      </motion.div>

      <div className="relative w-full mb-8">
        {/* Main Large Image */}
        <motion.div
          key={galleryImages[mainImageIndex]}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full aspect-video cursor-pointer"
          onClick={() => setSelectedImage(galleryImages[mainImageIndex])}
        >
          <Image
            src={galleryImages[mainImageIndex]}
            alt="HerbCey Gallery Image"
            fill
            className="object-cover rounded-lg"
          />
        </motion.div>
      </div>

      {/* Horizontal Scrollable Thumbnails */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex overflow-x-auto space-x-4 pb-4 justify-center"
      >
        {galleryImages.map((image, index) => (
          <motion.div
            key={image}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`flex-shrink-0 w-32 h-24 cursor-pointer 
              ${
                index === mainImageIndex
                  ? "border-2 border-logo-green-dark"
                  : ""
              }
            `}
            onClick={() => setMainImageIndex(index)}
          >
            <Image
              src={image}
              alt={`Gallery thumbnail ${index + 1}`}
              width={128}
              height={96}
              className="object-cover w-full h-full rounded"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Fullscreen Image Modal */}
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
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-full max-h-full"
            >
              <Image
                src={selectedImage}
                alt="Fullscreen Gallery Image"
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
