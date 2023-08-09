import Link from "next/link";
import Image from "next/image";

import "@/styles/NavCard.css"

interface NavlinkProps {
	linkName: string;
	linkImage: any;
	setNavToggle: any;
	selected: boolean;
	setCurrentPage: any;
};

function NavCard({
	linkName,
	linkImage,
	setNavToggle,
	selected,
	setCurrentPage,
}: NavlinkProps) {
  return (
    <Link className="navcard" href={linkName}>
      <div className="title-group">
				{selected ? <div className="active-circle"></div> : null}
				<label className="navcard-title">{linkName}</label>
			</div>
			<div className="navcard-image">
				<Image
					className="img"
					src={linkImage}
					alt={linkName}
					fill
					quality={100}
				/>
			</div>
    </Link>
  )
}

export default NavCard