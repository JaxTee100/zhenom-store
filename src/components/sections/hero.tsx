"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MotionSection from "@/components/custom/MotionSection";

const slides = [
  {
    text: "Welcome Home, Shop with peace of mind",
    subtext: "Trendy, Chic, Elegant, made just for you",
    image: "/assets/images/perfume.jpeg",
  },
  {
    text: "Smell Sweet On A Budget",
    subtext: "24hrs long lasting scents",
    image: "/assets/images/perfume.jpeg",
  },
  {
    text: "Your Everyday Essentials",
    subtext: "Shopping just got better",
    image: "/assets/images/perfume.jpeg",
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <MotionSection>
        <section
          id="hero"
          className="relative min-h-[60vh] sm:min-h-[55vh] md:min-h-[70vh] flex items-center justify-center text-white overflow-hidden px-4 sm:px-6 md:px-10 pt-[80px] sm:pt-[100px] md:pt-[120px]"
        >
          {/* ✅ Background Image */}
          <motion.div
            key={slides[currentSlide].image}
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `url('${slides[currentSlide].image}')`,
              backgroundBlendMode: "overlay",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: [1, 1.05, 1] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-50 z-0" />

          {/* ✅ Combined Text + Subtext */}
          <div className="z-10 text-center px-4 max-w-4xl w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[currentSlide].text}
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ duration: 2.5 }}
              >
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-2">
                  <span className="text-green-main block sm:inline">
                    {
                      slides[currentSlide].text
                        .split(" ")
                        .slice(0, Math.floor(slides[currentSlide].text.split(" ").length / 2))
                        .join(" ")
                    }
                  </span>{" "}
                  <span className="text-white block sm:inline">
                    {
                      slides[currentSlide].text
                        .split(" ")
                        .slice(Math.floor(slides[currentSlide].text.split(" ").length / 2))
                        .join(" ")
                    }
                  </span>
                </h1>
                
              </motion.div>
              <motion.div
                key={slides[currentSlide].subtext}
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ duration: 2.5 }}
                className=" p-2 bg-black w-[400px] mx-auto"
              >
                <p className="text-sm sm:text-base md:text-lg font-medium">
                  {slides[currentSlide].subtext}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Scroll Down Button */}
          <motion.a
            href="#mission"
            className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center bg-white text-green-main rounded-full shadow-lg hover:bg-green-100 transition z-20"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: [0, -10, 0], opacity: 1 }}
            transition={{ delay: 1.2, duration: 2, repeat: Infinity }}
            aria-label="Scroll to Mission Statement"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.a>
        </section>
      </MotionSection>
    </>
  );
}
