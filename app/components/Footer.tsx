'use client'; 

import React from "react";
import { Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";


const Footer = () => {
  
  const SocialLinks = [
    { href: "#", icon: <Facebook size={20} /> },
    { href: "#", icon: <Instagram size={20} /> },
    { href: "#", icon: <Linkedin size={20} /> },
    { href: "#", icon: <Twitter size={20} /> },
    { href: "#", icon: <Mail size={20} /> },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer 
      className="bg-black text-[#E2E2E2] text-sm md:text-base py-16 px-4 md:px-8"
      initial="hidden"
      animate="visible"
      variants={footerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Logo Section */}
          <motion.div variants={itemVariants} className="space-y-4">
              <Image
              src="/images/logo-white.png"
              alt="logo"
              width={70}
              height={70}
              className="w-[100px] h-[100px]"
            />
          </motion.div>

          {/* Terms & Policies */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-[#fa4c38]">Terms & Policies</h3>
            <ul className="space-y-2">
              <li><a href="/privacy-policy" className="hover:text-[#fa4c38] transition-colors duration-300">Privacy Policy</a></li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-[#fa4c38]">Company</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-[#fa4c38] transition-colors duration-300">Home</a></li>
              <li><a href="/about" className="hover:text-[#fa4c38] transition-colors duration-300">About Us</a></li>
              <li><a href="/contact" className="hover:text-[#fa4c38] transition-colors duration-300">Contact Us</a></li>
            </ul>
          </motion.div>

          {/* Contact & Location */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-[#fa4c38]">Location</h3>
            <address className="not-italic space-y-2">
              <p>Agency Music International</p>
              <p>123 Harmony Street</p>
              <p>New York, NY 10001</p>
              <p className="mt-4">
                <a href="tel:+12345678900" className="hover:text-[#fa4c38] transition-colors duration-300">
                  (+1) 234-567-8900
                </a>
              </p>
              <p>
                <a href="mailto:contact@agencymusic.com" className="hover:text-[#fa4c38] transition-colors duration-300">
                  contact@agencymusic.com
                </a>
              </p>
            </address>
          </motion.div>
        </div>

        {/* Social Links & Copyright */}
        <motion.div 
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              {SocialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="p-2 bg-gray-800 rounded-full hover:bg-[#fa4c38] transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Agency Music. All Rights Reserved
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;