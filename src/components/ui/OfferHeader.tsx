"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface OfferHeaderProps {
  offerText?: string;
  buttonText?: string;
  buttonLink?: string;
}

const OfferHeader = ({
  offerText = "30% Off - Limited Time Offer!",
  buttonText = "Shop Now",
  buttonLink = "/products",
}: OfferHeaderProps) => {
  // Hydration state to prevent SSR/Client mismatch
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Placeholder during server-side rendering
  if (!isMounted) {
    return (
      <div className="w-full py-2 px-4 flex justify-center items-center bg-black">
        <div className="max-w-7xl w-full flex justify-between items-center space-y-2 sm:space-y-0">
          <p className="text-center text-sm sm:text-base font-medium text-white">
            Loading...
          </p>
          <div className="px-3 py-1 rounded text-white text-sm font-medium bg-[#FFA500]">
            {buttonText}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-2 px-4 flex justify-center items-center bg-black">
      <div className="max-w-7xl w-full flex justify-center items-center">
        <p className="text-center text-sm sm:text-base font-medium text-white mx-2 truncate max-w-full items-center justify-center">
          {offerText}
        </p>
        <Link href={buttonLink} className="w-auto">
          <span
            className="block sm:w-auto text-center px-4 py-1 rounded text-white text-sm font-medium 
            bg-[#ff914d] 
            hover:bg-[#ffab73] 
            transition-colors 
            duration-300 
            ease-in-out"
          >
            {buttonText}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default OfferHeader;
