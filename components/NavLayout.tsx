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
    <div className="bg-black">
      <div className={`overlay ${navToggle ? "shifted-main" : ""}`}>
        <Navbar />
        <main>{children}</main>
      </div>
      <NavCarousel navToggle={navToggle} setNavToggle={setNavToggle} />
      <NavToggle toggle={navToggle} setToggle={setNavToggle} />
    </div>
  );
}

export default NavLayout;
