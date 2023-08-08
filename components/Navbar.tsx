import "@/styles/Navbar.css";
import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <Link className="text-m" href="./">Jason Zubiate</Link>

      {/* Desktop Navigation */}
      <span className="desk-nav">
        <Link className="text-m" href="./">Work,{" "}</Link>
        <Link className="text-m" href="./">About,{" "}</Link>
        <Link className="text-m" href="./">Contact</Link>
      </span>

      {/* Mobile Navigation */}
      <button className="menu text-m">Menu</button>
    </nav>
  );
}

export default Navbar;
