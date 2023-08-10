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
    <>
      <Navbar />
      <main className={`${navToggle ? "shifted-main" : ""}`}>{children}</main>
      <NavCarousel navToggle={navToggle} setNavToggle={setNavToggle} />
      <NavToggle toggle={navToggle} setToggle={setNavToggle} />
    </>
  );
}

export default NavLayout;
