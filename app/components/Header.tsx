"use client";

import { useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { href: "home-slider", label: "Home" },
  { href: "aboutus-section", label: "About us" },
  { href: "what-do-section", label: "What we do" },
  { href: "what-use-section", label: "Why use us" },
  { href: "contact-section", label: "Contact US" },
];

export default function Header() {
  const [active, setActive] = useState("home-slider");

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    const header = document.querySelector(".header-content") as HTMLElement | null;
    if (!el) return;
    const offset = header?.offsetHeight ?? 0;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
    setActive(id);
  };

  return (
    <header className="header-content">
      <div className="container">
        <div className="company-logo">
          <a
            href="#home-slider"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home-slider");
            }}
          >
            <Image
              src="/images/company-logo.png"
              alt="Logo"
              width={146}
              height={22}
              priority
            />
          </a>
        </div>
        <div className="top-right-part">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={`#${link.href}`}
                  className={active === link.href ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
