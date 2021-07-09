import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 card z-20">
      <Link href="/">
        <a>
          <span className="text-xl mr-1">🦠</span>
          <span className="text-xl font-semibold">Corona Tracker</span>
        </a>
      </Link>

      <ul className="flex items-center">
        <li className="mr-3">
          <NavLink href="/">
            <a>Map</a>
          </NavLink>
         
        </li>
        <li>
        <NavLink href="/about">
            <a>About</a>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
