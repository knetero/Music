'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Headphones, Radio, Music, Mic2, PlayCircle, Share2 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
import { Nunito } from 'next/font/google'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['200', '400', '600', '700'],
})

const services = [
  {
    icon: <Headphones className="h-8 w-8 text-[#fa4c38]" />,
    title: 'Sonic Branding',
    description: 'Create a unique audio identity for your brand that resonates with your audience.',
  },
  {
    icon: <Radio className="h-8 w-8 text-[#fa4c38]" />,
    title: 'Music for Advertising',
    description: 'Craft compelling soundtracks and jingles for your advertising campaigns.',
  },
  {
    icon: <Music className="h-8 w-8 text-[#fa4c38]" />,
    title: 'Original Compositions',
    description: 'Develop original music tailored to your specific needs and vision.',
  },
  {
    icon: <Mic2 className="h-8 w-8 text-[#fa4c38]" />,
    title: 'Voice-over Production',
    description: 'Professional voice-over services for commercials, narrations, and more.',
  },
  {
    icon: <PlayCircle className="h-8 w-8 text-[#fa4c38]" />,
    title: 'Music Licensing',
    description: 'Access our vast library of pre-cleared music for your projects.',
  },
  {
    icon: <Share2 className="h-8 w-8 text-[#fa4c38]" />,
    title: 'Audio Post-Production',
    description: 'Enhance your audio with professional mixing, mastering, and sound design.',
  },
]

export default function ServicesSection() {
  return (
    <section className={`${nunito.className} text-white py-20 px-4 md:px-8 lg:px-16 min-h-screen md:py-32 flex justify-center items-center`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-[#fa4c38]">Services</span></h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Elevate your brand with our comprehensive suite of music and audio services.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
              }
            }
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1
                }
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Card className="bg-gray-900 border-gray-800 h-full overflow-hidden">
                <CardHeader className="flex flex-col items-center">
                  <div className="rounded-full bg-gray-800 p-3 mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl text-white font-bold text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-center">
                    {service.description}
                  </CardDescription>
                  <motion.div 
                    className="mt-6 flex justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {/* <Button 
                      variant="outline" 
                      className="border-[#fa4c38] text-[#fa4c38] hover:bg-[#fa4c38] hover:text-white transition-colors duration-300"
                    >
                      Learn More
                    </Button> */}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}