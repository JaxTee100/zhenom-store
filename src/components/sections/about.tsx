"use client";
import React from "react";
import Image from "next/image";
import AboutImage from '../../../public/assets/images/about.jpg'
import { motion } from "framer-motion";


const AboutSection = () => {
  return (
    <section className="relative w-full min-h-[60vh]  text-white py-12 px-4 sm:px-6 md:px-10 overflow-hidden">
      {/* ✅ Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={ AboutImage }
          alt="About Zhenom's Essentials"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>

      {/* ✅ Animated Text Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* ✅ Image for Medium+ Screens */}
        <motion.div
          className="hidden md:block relative w-full h-96"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Image
            src={AboutImage}
            alt="Zhenom Style"
            fill
            className="object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* ✅ Text Section */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.4 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-green-main">
            About Zhenom's Essentials 🔥
          </h2>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-justify text-white/90">
            Hey you! 👋🏾 Welcome to <strong>Zhenom’s Essentials</strong>!!!<br /><br />
            Your one-stop plug for fire accessories, bold jewelry, and stylish glasses that level up your look, no matter your vibe. 😎✨<br /><br />
            We’ve got something for everyone — babes, bros, and every fashion lover in between.<br /><br />
            No basic allowed here o! Just clean drip and good energy. Pull up, shop smart, and flex right. <strong>Your essentials just got a glow-up! 💥</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
