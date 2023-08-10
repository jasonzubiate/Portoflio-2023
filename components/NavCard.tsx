import Link from "next/link";
import Image from "next/image";

import "@/styles/NavCard.css";

interface NavlinkProps {
  linkName: string;
  linkImage: any;
  setNavToggle: any;
  selected: boolean;
  setCurrentPage: any;
}

function NavCard({
  linkName,
  linkImage,
  setNavToggle,
  selected,
  setCurrentPage,
}: NavlinkProps) {
  return (
    <Link className="navcard" href={linkName != "Home" ? `/${linkName.toLowerCase()}` : "/"}>
      <div className="title-group">
        {selected ? <div className="active-circle"></div> : null}
        <label className="navcard-title">{linkName}</label>
      </div>
      <Image
        className="navcard-image"
        src={linkImage}
        alt={linkName}
        quality={100}
        priority
      />
    </Link>
  );
}

export default NavCard;
