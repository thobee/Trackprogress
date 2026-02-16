"use client";
import acmeLogo from "@/assets/images/acme.png";
import quantumLogo from "@/assets/images/quantum.png";
import echoLogo from "@/assets/images/echo.png";
import celestialLogo from "@/assets/images/celestial.png";
import pulseLogo from "@/assets/images/pulse.png";
import apexLogo from "@/assets/images/apex.png";
import Image from "next/image";
import { motion } from "motion/react";
import { use } from "react";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12  bg-white ">
      <div className="container">
        <div className="flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex flex-none items-center justify-center gap-14 pr-14 flex-wrap"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType:"loop",
            }}
          >
            <Image
              src={acmeLogo}
              alt="Acme Logo"
              height={50}
              width={120}
              className="logo-ticker-image"
            />
            <Image
              src={quantumLogo}
              alt="Quantum Logo"
              height={50}
              width={120}
              className="logo-ticker-image"
            />
            <Image
              src={echoLogo}
              alt="Echo Logo"
              height={50}
              width={120}
              className="logo-ticker-image"
            />
            <Image
              src={celestialLogo}
              alt="Celestial Logo"
              height={50}
              width={120}
              className="logo-ticker-image"
            />
            <Image
              src={pulseLogo}
              alt="Pulse Logo"
              height={50}
              width={120}
              className="logo-ticker-image"
            />
            <Image src={apexLogo} alt="Apex Logo" height={50} width={120} />

            {/* second set of logos for animation */}

            <Image
              src={acmeLogo}
              alt="Acme Logo"
              height={50}
              width={120}
              className="logo-ticker-image"
            />
            <Image
              src={quantumLogo}
              alt="Quantum Logo"
              height={50}
              width={120}
              className="logo-ticker-image"
            />
            <Image
              src={echoLogo}
              alt="Echo Logo"
              height={50}
              width={120}
              className="logo-ticker-image"
            />
            <Image
              src={celestialLogo}
              alt="Celestial Logo"
              height={50}
              width={120}
              className="logo-ticker-image"
            />
            <Image
              src={pulseLogo}
              alt="Pulse Logo"
              height={50}
              width={120}
              className="logo-ticker-image"
            />
            <Image src={apexLogo} alt="Apex Logo" height={50} width={120} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
