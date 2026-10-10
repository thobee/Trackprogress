"use client";
import ArrorRight from "../assets/icons/arrow-w.svg";
import starImage from "../assets/images/darksass6.png";
import springImafge from "../assets/images/darksass7.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip ">
      <div className="container">
        <div className="section-heading relative">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Sign up for free today
            </h2>
            <p className="section-description mt-5">
              Celebrate the joy of accomplishment with an app designed to track
              your progress and motivate your efforts
            </p>
            <motion.img
              src={starImage.src}
              alt="star image"
              width={360}
              className="absolute -left-[350px] -top-[137px] "
              style={{
                translateY,
              }}
            />
            <motion.img
              src={springImafge.src}
              alt="spring image"
              width={360}
              className="absolute -right-[331px] -top-[19px] "
               style={{
                translateY,
              }}
            />
          </div>
          <div className="flex gap-2 mt-8 justify-center">
            <button className="btn btn-primary">Get for free</button>
            <button className="btn btn-text gap-1">
              <span>Learn more</span>
              <ArrorRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
