"use client";
import appScreen from "../assets/images/app-screen.png";
import Image from "next/image";
import pyramidImage from "@/assets/images/darksass4.png";
import tubeImage from "@/assets/images/darksass5.png";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost Your Productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into fully functional,responsive, SaaS
            Website in just minutes with the template.
          </p>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <Image src={appScreen} alt="App Screen" className="mt-10" />
          <motion.img
            src={pyramidImage.src}
            alt="Pyramid image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 lg:-right-32 -top-32 "
            style={{
              translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube image"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-36 lg:-left-32"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
