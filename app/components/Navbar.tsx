"use client";

import Image from "next/image";
import Link from "next/link";
import { Quicksand } from "@next/font/google";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { useRouter } from 'next/navigation';

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Navbar = () => {
  const currentRoute = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <nav
      className={` flex justify-between items-center text-[#E2E2E2] 
        font-medium text-[12px] 2xl:text-[18px] p-4 fixed w-[100vw] z-[20] transition-all duration-300 h-[100px] ${
        scrolled ? "bg-black bg-opacity-80 backdrop-blur-md" : ""
      } md:pt-[40px] md:px-[100px] ${quicksand.className}`}
    >
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/logo-white.png"
          alt="logo"
          width={70}
          height={70}
          className="w-[100px] h-[100px]"
        />
       
      </Link>
      <ul className="hidden md:flex md:gap-10">
        {menuItems.map((item) => (
          <li
            key={item.href}
            className={`${
              currentRoute === item.href ? "text-[#fa4c38]" : ""
            } hover:text-[#fa4c38] cursor-pointer  transition-colors duration-500 ease-in-out`}
          >
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <button className="transition-colors duration-500 ease-in-out hidden md:block w-[185px] text-[#E2E2E2] font-medium h-[48px] border-2 border-solid border-[#fa4c38] rounded-full hover:text-black hover:border-[#E2E2E2] hover:bg-[#E2E2E2] transition-colors duration-200 cursor-pointer"
        onClick={() => router.push('/contact')}
      >
        Contact us
      </button>
      <motion.div
        className="md:hidden cursor-pointer z-30"
        onClick={toggleMenu}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isMenuOpen ? 45 : 0 }}
      >
        {isMenuOpen ? (
          <motion.div
            className="md:hidden cursor-pointer z-30"
            animate={{ rotate: isMenuOpen ? 45 : -45 }}
          >
            <IoClose className="w-[40px] h-[40px] text-white" />
          </motion.div>
        ) : (
          <Image
            src="./images/phonenavbar.svg"
            alt={isMenuOpen ? "Close menu" : "Open menu"}
            width={40}
            height={40}
          />
        )}
      </motion.div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}

            className="absolute w-[100%] h-[100vh] right-0 left-0 top-0 bg-black bg-opacity-95 backdrop-blur-md z-[21] flex flex-col items-center justify-center"

          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: 0.1, staggerChildren: 0.1 }}
              className="flex flex-col items-center gap-8"
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`text-[#E2E2E2] text-xl font-semibold ${
                      currentRoute === item.href ? "text-[#fa4c38]" : ""
                    } hover:text-[#fa4c38] transition-colors duration-200`}
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ delay: menuItems.length * 0.1 }}
                className="mt-8 w-[185px] text-[#E2E2E2] font-medium h-[48px] border-2 border-solid border-[#fa4c38] rounded-full hover:text-black hover:border-[#E2E2E2] hover:bg-[#E2E2E2] transition-colors duration-200 cursor-pointer"
              >
                Contact us
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
