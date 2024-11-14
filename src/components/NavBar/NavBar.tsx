import { useEffect, useState } from "react";
import type { NavbarProps } from "./Navbar.types";
import { motion, AnimatePresence } from "framer-motion";
import { dataHeader } from "../Header/Header.data";

export function NavBar(props: NavbarProps) {
  const { openMobileMenu } = props;
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight - 600) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isScrolling ? (
        <motion.nav
          key={1}
          variants={animationNavbar}
          initial="initial"
          animate="animate"
          exit="exit"
          className=" ml-auto mr-auto md:fixed z-50 left-0 right-0 px-6 py-3 text-white bg-gray-400/90 backdrop:blur-xl rounded-3xl w-fit"
        >
          <div className="items-center hidden gap-5 md:flex">
            {dataHeader.map(({ id, name, href }) => (
              <a
                key={id}
                className="block items-center text-lg hover:border-b-2 border-primary-500 hover:text-gray-500 cursor-pointer"
                href={href}
              >
                {name}
              </a>
            ))}
            <a
              href="/contact"
              className="block text-lg bg-primary-700 text-white hover:bg-primary-400 transition-all duration-300 ease-in-out px-4 py-2 rounded-md"
            >
              Contact
            </a>
          </div>
        </motion.nav>
      ) : (
        <div
          className={`${
            openMobileMenu
              ? "absolute flex flex-col items-center justify-center z-[1] left-0 top-20 w-full bg-white/90 backdrop:blur-lg right-0 p-4 "
              : "hidden"
          } gap-5 md:flex`}
        >
          {dataHeader.map(({ id, name, href }) => (
            <a
              key={id}
              className="flex items-center text-lg hover:border-b-2 border-primary-500 hover:text-gray-500 cursor-pointer"
              href={href}
            >
              {name}
            </a>
          ))}

          <a
            key={1}
            href="/contact"
            className="block text-lg bg-primary-700 text-white hover:bg-primary-400 transition-all duration-300 ease-in-out px-4 py-2 rounded-lg"
          >
            Contact
          </a>
        </div>
      )}
    </AnimatePresence>
  );
}

const animationNavbar = {
  initial: {
    y: -20,
    opacity: 0,
  },
  animate: {
    y: -10,
    opacity: 1,
    transition: {
      stiffness: 100,
      damping: 20,
      type: "spring",
    },
  },
  exit: {
    y: -20,
    opacity: 0,
  },
};
