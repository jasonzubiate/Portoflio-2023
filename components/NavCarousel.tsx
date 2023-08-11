"use client";

import "@/styles/NavCarousel.css";

import useWindowDimensions from "@/hooks/useWindowDimensions";

import NavCard from "./NavCard";

import homeDesk from "@/public/assets/img/home-desk.png";
import homeMobile from "@/public/assets/img/home-mobile.png";
import workDesk from "@/public/assets/img/work-desk.png";
import workMobile from "@/public/assets/img/work-mobile.png";
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

  const [pages, setPages] = useState([
    {
      name: "Home",
      image: homeDesk,
      mobileImage: homeMobile,
      selected: true,
    },
    {
      name: "work",
      image: workDesk,
      mobileImage: workMobile,
      selected: false,
    },
    {
      name: "about",
      image: aboutDesk,
      mobileImage: aboutMobile,
      selected: false,
    },
    {
      name: "contact",
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
        {pages.map((page: any) => (
          <NavCard
            key={page.name}
            linkName={page.name}
            linkImage={width > 766 ? page.image : page.mobileImage}
            setNavToggle={setNavToggle}
            selected={page.selected}
            pages={pages}
            setPages={setPages}
          />
        ))}
      </div>
    </nav>
  );
}

export default NavCarousel;
