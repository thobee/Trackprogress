"use client";
import ArrowIcon from "@/assets/icons/arrow-w.svg";
import cogImage from "@/assets/images/darksass1.png";
import cylinderImage from "@/assets/images/darksass2.png";
import noodleImage from "@/assets/images/darksass3.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="container md:flex md:items-center">
        {/* Text */}
        <div className="md:w-[478px] px-9">
          <div className="tag">Version 2.0 is here</div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
            Pathway to productivity
          </h1>

          <p className="text-xl text-[#010D3E] tracking-tight mt-6">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your success.
          </p>

          <div className="flex gap-2 items-center mt-8">
            <button className="btn btn-primary">Get for free</button>
            <button className="btn btn-text gap-1">
              <span>Learn more</span>
              <ArrowIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Visuals */}
        <div className="relative md:flex-1 md:h-[648px] mt-16 md:mt-0 flex justify-center">
          {/* Cog */}
          <motion.img
            src={cogImage.src}
            alt="Cog image"
            className="md:absolute md:h-full md:w-auto md:max-w-none md:left-[20%] lg:left-[10%]"
            animate={{
              translateY: [-30, 30],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 3,
              ease: "easeInOut",
            }}
          />

          {/* Cylinder */}
          <motion.img
            src={cylinderImage.src}
            width={220}
            height={220}
            alt="Cylinder image"
            className="hidden md:block md:absolute md:-top-8 md:left-0 md:-translate-x-[10%] lg:-translate-x-[20%]"
            style={{ translateY: translateY }}
          />

          {/* Noodle */}
          <motion.img
            src={noodleImage.src}
            width={220}
            alt="Noodle image"
            className="hidden lg:block absolute top-[524px] left-[70%] rotate-[30deg]"
            style={{
              rotate: 30,
              translateY: translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
