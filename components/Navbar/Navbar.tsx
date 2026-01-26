"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Close menu on escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <Link href="/" className="nav-logo">
          Bit.dev
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger"></span>
        </button>

        {/* Navigation Links */}
        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <Link
            href="/about"
            className={isActive("/about") ? "active" : ""}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>

          <Link
            href="/projects"
            className={isActive("/projects") ? "active" : ""}
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>

          <Link
            href="/contact"
            className={isActive("/contact") ? "active" : ""}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>

        {/* Overlay for mobile menu */}
        {isMenuOpen && (
          <div
            className="mobile-menu-overlay"
            onClick={() => setIsMenuOpen(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 54,
            }}
          />
        )}
      </div>
    </nav>
  );
}