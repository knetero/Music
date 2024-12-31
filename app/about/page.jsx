"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700"],
});

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className={`${nunito.className}   text-white py-20 min-h-screen md:py-32 flex justify-center items-center`}
    >
      <div className="container mx-auto px-4 pt-8 md:pt-[90px]">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#fa4c38]">
              About Our Agency
            </h2>
            <p className="text-lg md:text-xl text-[#E2E2E2] mb-8">
              We are more than just a music agency. We are the architects of
              sonic branding, crafting unique auditory experiences that resonate
              with your audience on a deeper level.
            </p>
            <ul className="space-y-4">
              {[
                "20+ Years of Experience",
                "Award-Winning Compositions",
                "Global Client Base",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-2"
                  variants={listItemVariants}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.2 }}
                >
                  <motion.svg
                    className="w-6 h-6 text-[#fa4c38]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: index * 0.2 + 0.7,
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </motion.svg>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={itemVariants} className="relative">
            <Image
              src="/images/about-image.png?height=400&width=600"
              alt="Music studio"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
            <motion.div
              className="absolute -bottom-6 -left-6 bg-[#fa4c38] p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-2xl font-bold text-black">800+</p>
              <p className="text-sm text-black">Projects Completed</p>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
            variants={itemVariants}
          >
            Our Process
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Discover",
                description:
                  "We dive deep into your brand to understand its core values and target audience.",
              },
              {
                title: "Create",
                description:
                  "Our team of expert composers and sound designers craft your unique sonic identity.",
              },
              {
                title: "Implement",
                description:
                  "We ensure your sonic branding is seamlessly integrated across all platforms.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-6 rounded-lg"
                variants={itemVariants}
              >
                <div className="w-12 h-12 bg-[#fa4c38] rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-black">{index + 1}</span>
                </div>
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-[#E2E2E2]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
