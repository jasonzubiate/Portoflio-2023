"use client";

import "@/styles/Navbar.css";
import Link from "next/link";
import { useEffect } from "react";
import { gsap } from "gsap";

function Navbar() {
  useEffect(() => {
    gsap.to("#navbar", {
      duration: 1,
      opacity: 1,
      ease: "power2",
      delay: 1.5,
    });
  }, []);

  return (
    <nav id="navbar">
      <Link className="text-m" href="./">
        Jason Zubiate
      </Link>

      {/* Desktop Navigation */}
      <span className="desk-nav">
        <Link className="text-m hover-link" href="/work">
          Work
        </Link>
        ,{" "}
        <Link className="text-m hover-link" href="/about">
          About
        </Link>
        ,{" "}
        <Link className="text-m hover-link" href="/contact">
          Contact
        </Link>
      </span>

      {/* Mobile Navigation */}
      <button className="menu text-m">Menu</button>
    </nav>
  );
}

export default Navbar;
function setLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}
