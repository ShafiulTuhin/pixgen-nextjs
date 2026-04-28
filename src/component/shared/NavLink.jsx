"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-lg transition ${
        isActive
          ? "btn bg-gradient-to-r from-purple-500 to-pink-500 text-white"
          : "text-gray-500 hover:text-black"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
