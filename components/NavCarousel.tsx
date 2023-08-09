"use client";

import useWindowDimensions from "@/hooks/useWindowDimensions";

import NavCard from "./NavCard";

import aboutDesk from "@/public/assets/img/about-desk.png";
import contactDesk from "@/public/assets/img/contact-desk.png";
import { useState } from "react";

interface NavCarouselProps {
  navToggle: boolean;
  setNavToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

function NavCarousel({ navToggle, setNavToggle }: NavCarouselProps) {
  const { width, height } = useWindowDimensions();

  const [currentPage, setCurrentPage] = useState([
    {
      name: "About",
      image: aboutDesk,
      // mobileImage: aboutPageMobile,
      selected: false,
    },

    {
      name: "Contact",
      image: contactDesk,
      // mobileImage: contactPageMobile,
      selected: false,
    },
  ]);

  return (
    <nav className="nav-carousel">
      <div
        className={`navcards ${
          navToggle ? "shifted-navcards" : "unshifted-navcards"
        }`}
      >
        {currentPage.map((page: any) => (
          <NavCard
            linkName={page.name}
            linkImage={page.image}
            setNavToggle={setNavToggle}
            selected={page.selected}
            setCurrentPage={setCurrentPage}
          />
        ))}
      </div>
    </nav>
  );
}

export default NavCarousel;
