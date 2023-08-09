import { CgMenuMotion } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

import "@/styles/NavToggle.css"

type NavbarProps = {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavToggle({ toggle, setToggle }: NavbarProps) {
  return (
    <button id="nav-toggle" type="button" onClick={() => setToggle(!toggle)}>
      <i className={`${!toggle ? "open" : ""}`}>
        <CgMenuMotion  color="#f1efe7" />
      </i>
      <i className={`${toggle ? "close" : ""}`}>
        <IoClose  color="#f1efe7" />
      </i>
    </button>
  )
}

export default NavToggle