"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/episodes", label: "Episodes" },
  { href: "/hosts", label: "Hosts" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo-no-frame.png"
            alt="Inside Round Top"
            width={140}
            height={50}
            className="h-[36px] w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium tracking-[0.08em] uppercase text-muted transition-colors hover:text-dark"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://youtube.com/@InsideRoundTop"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-dark bg-dark px-5 py-2 text-[13px] font-medium tracking-wide text-white transition-all hover:bg-white hover:text-dark"
          >
            Watch on YouTube
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <div className="relative h-5 w-6">
            <span
              className={`absolute left-0 h-[1.5px] w-6 bg-dark transition-all duration-300 ${
                mobileOpen ? "top-2.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-2.5 h-[1.5px] w-6 bg-dark transition-opacity duration-300 ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-[1.5px] w-6 bg-dark transition-all duration-300 ${
                mobileOpen ? "top-2.5 -rotate-45" : "top-5"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-white px-6 py-8 md:hidden">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium tracking-wide text-dark"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://youtube.com/@InsideRoundTop"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block border border-dark bg-dark px-5 py-3 text-center text-[13px] font-medium tracking-wide text-white"
            >
              Watch on YouTube
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
