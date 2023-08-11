"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import { NavToggle, NavCarousel, Navbar } from ".";

interface NavLayoutProps {
  children: any;
}

function NavLayout({ children }: NavLayoutProps) {
  const [navToggle, setNavToggle] = useState(false);
  const pathname = usePathname();

  return (
    <html>
      <AnimatePresence initial={false} mode="wait">
        <motion.body key={pathname}>
          <div className="bg-black">
            <Navbar />
            <main className={`${navToggle ? "shifted-main" : ""}`}>
              {children}
            </main>
            <NavCarousel navToggle={navToggle} setNavToggle={setNavToggle} />
            <NavToggle toggle={navToggle} setToggle={setNavToggle} />
          </div>
          <motion.div
            className="slide-in"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.13, 0.53, 0.38, 0.97] }}
          ></motion.div>
          <motion.div
            className="slide-out"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1, ease: [0.13, 0.53, 0.38, 0.97] }}
          ></motion.div>
        </motion.body>
      </AnimatePresence>
    </html>
  );
}

export default NavLayout;
