'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Nunito } from 'next/font/google'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['200', '400', '600', '700'],
})

const projects = [
  {
    id: 1,
    title: "Sonic Waves Festival",
    description: "Annual electronic music festival featuring top DJs and producers.",
    image: "/images/about-image.png",
    category: "Event",
  },
  {
    id: 2,
    title: "Harmony Studios",
    description: "State-of-the-art recording facility for emerging artists.",
    image: "/images/about-image.png",
    category: "Studio",
  },
  {
    id: 3,
    title: "Rhythm & Roots Tour",
    description: "Multi-city tour showcasing diverse musical traditions.",
    image: "/images/about-image.png",
    category: "Tour",
  },
  {
    id: 4,
    title: "Digital Soundscapes",
    description: "Innovative app for creating and sharing music collaboratively.",
    image: "/images/about-image.png",
    category: "Tech",
  },
  {
    id: 5,
    title: "Acoustic Nights",
    description: "Intimate concert series featuring unplugged performances.",
    image: "/images/about-image.png",
    category: "Event",
  },
  {
    id: 6,
    title: "Beat Academy",
    description: "Online platform for aspiring music producers and beatmakers.",
    image: "/images/about-image.png",
    category: "Education",
  },
]

const categories = ["All", "Event", "Studio", "Tour", "Tech", "Education"]

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter((project) => project.category === filter)

  return (
    <section className={`${nunito.className}  text-[#E2E2E2] py-16 px-4 md:px-8 lg:px-16 w-full min-h-screen pt-[200px]`}>
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
           <span className="text-[#fa4c38]">Our Projects</span>
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl  mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Check out some of our latest projects and collaborations across various categories, Check out some of our latest projects and collaborations across various categories Check out some of our latest projects and collaborations across various categories.
        </motion.p>
        <motion.div 
          className="flex flex-wrap gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Button
                onClick={() => setFilter(category)}
                className={`
                  ${filter === category 
                    ? "text-[#fa4c38] border-b-2 border-[#fa4c38]" 
                    : "text-white"
                  } 
                  bg-transparent  hover:text-[#fa4c38] transition-colors duration-300 px-4 py-2 text-sm md:text-lg
                `}
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <Card className="bg-gray-900 border-gray-800 overflow-hidden h-full flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 transform hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <Button
                        variant="outline"
                        className="border-white text-white hover:bg-white text-black transition-colors duration-300"
                      >
                        View Project
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl font-semibold text-[#E2E2E2]">
                        {project.title}
                      </CardTitle>
                      <Badge variant="secondary" className="bg-[#fa4c38] text-black">
                        {project.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-gray-400">
                      {project.description}
                    </CardDescription>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <motion.div
                      className="w-full h-1 bg-[#fa4c38] mt-4"
                      initial={{ width: 0 }}
                      animate={{ width: hoveredProject === project.id ? "100%" : "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
