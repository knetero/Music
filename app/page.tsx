'use client'

import Image from "next/image"
import { Nunito } from "next/font/google"
import { motion } from "framer-motion"
import { Hand, Music, Headphones, Volume2, Waves, Layers, Heart } from "lucide-react"
import { useRouter } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'


const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700"],
})

export default function Component() {
  const router = useRouter()
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
 



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

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
  }

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen mb-10" ref={containerRef}>
      <motion.main
        className={`${nunito.className} relative z-10 flex pt-[110px] md:pt-[120px] flex-col items-center min-h-screen w-full max-w-6xl px-4 justify-center`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"

      >
        <motion.div
          className="absolute top-0 left-0 w-full h-full z-[-1] opacity-20"
        />

        <motion.h1
          className={`${nunito.className} text-white md:text-[72px] text-[48px] font-extrabold text-center leading-tight mb-6`}
          variants={itemVariants}
        >
          We set the <span className="text-[#fa4c38]">Tone</span>
        </motion.h1>

        <motion.div
          className="text-[#E2E2E2] relative md:text-[20px] text-[16px] max-w-[880px] text-center mb-12"
          variants={itemVariants}
        >
          Music creates authentic connections through the power of emotion.
          We use it to make your brand resonate like never before. Are you ready
          to turn up the volume on your brand?
        </motion.div>

        <motion.div className="flex space-x-4 mb-16" variants={itemVariants}>
          <motion.button
            className="transition-all duration-300 ease-in-out sm:w-[185px] w-[160px] text-black text-[18px] font-bold h-[48px] shadow-lg shadow-[#fa4c38]/30 rounded-full hover:text-black hover:bg-[#E2E2E2] bg-[#fa4c38] cursor-pointer flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/contact')}
          >
            <span>Get in touch</span>
            <Hand className="w-5 h-5" />
          </motion.button>
          <motion.button
            className="transition-all duration-300 ease-in-out sm:w-[185px] w-[160px] text-[#E2E2E2] text-[18px] font-bold h-[48px] shadow-lg shadow-[#E2E2E2]/10 rounded-full hover:bg-[#E2E2E2] hover:text-black border-2 border-[#E2E2E2] cursor-pointer flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/portfolio')}
          >
            <span>Our Work</span>
            <Music className="w-5 h-5" />
          </motion.button>
        </motion.div>

        <motion.div className="relative w-full max-w-[980px] rounded-xl overflow-hidden shadow-2xl" variants={itemVariants}>
          <video
            ref={videoRef}
            playsInline
            loop
            muted
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            className="w-full rounded-xl"
          />
          <motion.div
            className="absolute top-6 left-6 bg-[#0D0D0D] shadow-lg rounded-xl p-4 flex flex-col justify-center items-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex gap-2 text-[14px]">
              <Image src="/images/star.svg" width={20} height={20} alt="star" />
              <h2 className="text-[#E2E2E2]">Great Projects</h2>
            </div>
            <h1 className="text-white text-[28px] font-bold">800+ Done</h1>
          </motion.div>
          <motion.button
            className="absolute bottom-6 right-6 bg-[#fa4c38] rounded-full p-4 text-black"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={togglePlay}
          >
            {isPlaying ? <Volume2 className="w-6 h-6" /> : <Headphones className="w-6 h-6" />}
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
          variants={containerVariants}
        >
          {[
            { 
              title: "Unique Sounds",
              icon: <Waves className="w-8 h-8 mb-4 text-[#fa4c38]" />,
              description: "Crafting bespoke audio identities that set your brand apart in today's competitive landscape",
              highlight: "800+ unique soundscapes created" 
            },
            { 
              title: "Brand Harmony",
              icon: <Layers className="w-8 h-8 mb-4 text-[#fa4c38]" />,
              description: "Aligning music with your brand values to create a cohesive and memorable experience",
              highlight: "100% client satisfaction" 
            },
            { 
              title: "Emotional Impact",
              icon: <Heart className="w-8 h-8 mb-4 text-[#fa4c38]" />,
              description: "Creating lasting impressions through carefully curated soundscapes that resonate with your audience",
              highlight: "50M+ listener reach" 
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="relative bg-[#0D0D0D] text-white rounded-xl p-10 text-center 
                         shadow-lg border border-gray-800 hover:border-[#fa4c38]/30 
                         transition-all duration-300 flex flex-col items-center
                         hover:shadow-2xl hover:shadow-[#fa4c38]/5"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              {item.icon}
              <h3 className="text-2xl font-bold mb-3 text-[#fa4c38]">
                {item.title}
              </h3>
              <p className="text-[#E2E2E2] leading-relaxed mb-6">
                {item.description}
              </p>
              <div className="mt-auto pt-4 border-t border-gray-800 w-full">
                <span className="text-sm font-semibold text-[#fa4c38]/80">
                  {item.highlight}
                </span>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#fa4c38]/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </motion.main>
    </div>
  )
}