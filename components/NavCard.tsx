import Link from "next/link";
import Image from "next/image";

import "@/styles/NavCard.css";

interface NavlinkProps {
  linkName: string;
  linkImage: any;
  setNavToggle: any;
  selected: boolean;
  pages: any;
  setPages: any;
}

function NavCard({
  linkName,
  linkImage,
  setNavToggle,
  selected,
  pages,
  setPages,
}: NavlinkProps) {
  function clickHandler(LinkName: string) {
    setPages(
      pages.map((page: any) => {
        if (page.name === linkName) {
          return { ...page, selected: true };
        } else {
          return { ...page, selected: false };
        }
      })
    );
    setNavToggle(false);
  }

  return (
    <Link
      className="navcard"
      href={linkName != "Home" ? `/${linkName}` : "/"}
      onClick={() => clickHandler(linkName)}
    >
      <div className="title-group">
        {selected ? <div className="active-circle"></div> : null}
        <label className="navcard-title">{linkName}</label>
      </div>
      <div className="navcard-image">
        <Image
          className="img"
          src={linkImage}
          alt={linkName}
          quality={100}
          fill
        />
      </div>
    </Link>
  );
}

export default NavCard;
