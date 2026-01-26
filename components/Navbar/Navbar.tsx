"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.css";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <Link href="/" className="nav-logo">
          Bit.dev
        </Link>

        <div className="nav-links">
          <Link
            href="/about"
            className={isActive("/about") ? "active" : ""}
          >
            About
          </Link>

          <Link
            href="/projects"
            className={isActive("/projects") ? "active" : ""}
          >
            Projects
          </Link>

          <Link
            href="/contact"
            className={isActive("/contact") ? "active" : ""}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
