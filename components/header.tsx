"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";

const links = [
  ["Features", "/features"],
  ["Themes", "/themes"],
  ["Fonts", "/fonts"],
  ["Languages", "/languages"],
  ["Web keyboard", "/web-keyboard"],
  ["About", "/about"],
  ["Support", "/support"],
] as const;

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("lumi-theme");
    const isDark = saved === "dark";
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    setDark(isDark);
  }, []);

  function toggleTheme() {
    const next = !dark;
    document.documentElement.dataset.theme = next ? "dark" : "light";
    localStorage.setItem("lumi-theme", next ? "dark" : "light");
    setDark(next);
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo />
        <nav className="nav-links" data-open={menuOpen} aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link
              className="nav-link"
              href={href}
              key={href}
              aria-current={pathname === href ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <button className="icon-button" type="button" onClick={toggleTheme} aria-label={`Switch to ${dark ? "light" : "dark"} appearance`} title={`Switch to ${dark ? "light" : "dark"} appearance`}>
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link className="button button-primary" href="/download">Get Lumi Key</Link>
          <button className="icon-button menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}