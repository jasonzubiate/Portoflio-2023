"use client";

import { useState } from "react";
import { NavToggle, NavCarousel } from ".";

import { Navbar } from "@/components";

interface NavLayoutProps {
  children: any;
}

function NavLayout({ children }: NavLayoutProps) {
  const [navToggle, setNavToggle] = useState(false);

  return (
    <div className="bg-black">
      <Navbar />
      <main className={`${navToggle ? "shifted-main" : ""}`}>{children}</main>
      <NavToggle toggle={navToggle} setToggle={setNavToggle} />
      <NavCarousel navToggle={navToggle} setNavToggle={setNavToggle} />
    </div>
  );
}

export default NavLayout;
