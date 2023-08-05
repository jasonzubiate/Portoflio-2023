import "@/styles/Navbar.css";
import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <Link href="./">Jason Zubiate</Link>
      <span>
        <Link href="./">Work, </Link>
        <Link href="./">About, </Link>
        <Link href="./">Contact</Link>
      </span>
    </nav>
  );
}

export default Navbar;
