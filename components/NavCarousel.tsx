"use client";

import "@/styles/NavCarousel.css";

import useWindowDimensions from "@/hooks/useWindowDimensions";

import NavCard from "./NavCard";

import homeDesk from "@/public/assets/img/home-desk.png";
import homeMobile from "@/public/assets/img/home-mobile.png";
import aboutDesk from "@/public/assets/img/about-desk.png";
import aboutMobile from "@/public/assets/img/about-mobile.png";
import contactDesk from "@/public/assets/img/contact-desk.png";
import contactMobile from "@/public/assets/img/contact-mobile.png";
import { useState } from "react";

interface NavCarouselProps {
  navToggle: boolean;
  setNavToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

function NavCarousel({ navToggle, setNavToggle }: NavCarouselProps) {
  const { width, height } = useWindowDimensions();

  const [currentPage, setCurrentPage] = useState([
    {
      name: "Home",
      image: homeDesk,
      mobileImage: homeMobile,
      selected: true,
    },
    {
      name: "Work",
      image: homeDesk,
      mobileImage: homeMobile,
      selected: false,
    },
    {
      name: "About",
      image: aboutDesk,
      mobileImage: aboutMobile,
      selected: false,
    },
    {
      name: "Contact",
      image: contactDesk,
      mobileImage: contactMobile,
      selected: false,
    },
  ]);

  return (
    <nav id="nav-carousel">
      <div
        className={`navcards ${
          navToggle ? "shifted-navcards" : "unshifted-navcards"
        }`}
      >
        {currentPage.map((page: any) => (
          <NavCard
            linkName={page.name}
            linkImage={width > 640 ? page.image : page.mobileImage}
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
