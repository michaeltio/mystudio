"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Refs for each section
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  // View detection
  const isInView2 = useInView(section2Ref, {
    once: true,
    margin: "-100px 0px",
  });
  const isInView3 = useInView(section3Ref, {
    once: true,
    margin: "-100px 0px",
  });
  const isInView4 = useInView(section4Ref, {
    once: true,
    margin: "-100px 0px",
  });

  const fadeInProps = (isInView: boolean) => ({
    initial: { opacity: 0, y: 50 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 1, ease: "easeOut" },
  });

  return (
    <div className="relative">
      {/* SECTION 1 - Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full z-0"
          style={{
            y: scrollY * 0.3,
            opacity: Math.max(1 - scrollY / 800, 0),
          }}
        >
          <Image
            src="/cover.jpg"
            alt="Cover image"
            layout="fill"
            objectFit="cover"
            priority
          />
        </motion.div>

        <motion.div
          className="relative z-10 flex items-center justify-center h-full text-white"
          style={{
            opacity: Math.max(1 - scrollY / 400, 0),
          }}
        >
          <TextGenerateEffect
            words="Welcome to My Studio"
            className="font-bebas text-9xl"
          />
        </motion.div>
      </section>

      {/* SECTION 2 */}
      <motion.section
        ref={section2Ref}
        {...fadeInProps(isInView2)}
        className="relative z-10 text-white py-20 px-10 h-screen w-full "
      >
        <h1 className="text-3xl font-bold mb-4 font-bebas">
          Hello I am Michael
        </h1>
        <p className="font-bebas">
          Hi! I’m [Your Name], a Backend Developer with expertise in TypeScript
          and Python. While my primary focus is on backend development, I also
          have experience in Full Stack development, which allows me to
          understand and work with various aspects of software development. I
          have a strong interest in emerging technologies like AI and
          Blockchain, and I’m always eager to explore and learn more about how
          these technologies can be applied to create innovative solutions. In
          addition to software development, I also have experience in DevOps,
          particularly with tools like Docker and Jenkins, ensuring efficient
          and reliable development and deployment pipelines. As a professional
          with a keen eye for detail and a structured approach, I always strive
          to write clean, maintainable code. I believe that high-quality code is
          the foundation of building reliable software that can grow and scale
          over time. If you’re looking for a developer who values innovation,
          quality, and precision, let’s connect!
        </p>
      </motion.section>

      {/* SECTION 3 */}
      <motion.section
        ref={section3Ref}
        {...fadeInProps(isInView3)}
        className="relative z-10 text-white py-20 px-10 h-screen w-full"
      >
        <h1 className="text-3xl font-bold mb-4">My Skills</h1>
        <p className="font-bebas">I Like to I like to Ilike Lorem ipsum...</p>
      </motion.section>

      {/* SECTION 4 */}
      <motion.section
        ref={section4Ref}
        {...fadeInProps(isInView4)}
        className="relative z-10 text-white py-20 px-10 h-screen w-full bg-[#251a15]"
      >
        <h1 className="text-3xl font-bold mb-4">My Projects</h1>
        <p className="font-bebas">I Like to I like to Ilike Lorem ipsum...</p>
      </motion.section>
    </div>
  );
}
