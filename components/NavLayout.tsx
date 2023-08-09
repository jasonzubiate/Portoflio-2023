"use client";

import { useState } from "react";
import { NavToggle, Navbar } from ".";

interface NavLayoutProps {
  children: any;
}

function NavLayout({ children }: NavLayoutProps) {
  const [navToggle, setNavToggle] = useState(false);

  return (
    <>
      <main className={`${navToggle ? "shifted-main" : ""}`}>{children}</main>
      <NavToggle toggle={navToggle} setToggle={setNavToggle} />
    </>
  );
}

export default NavLayout;
