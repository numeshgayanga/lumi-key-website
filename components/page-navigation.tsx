"use client";

import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

export function PageNavigation({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const bottomRef = useRef<HTMLDivElement>(null);
  const [visiblePath, setVisiblePath] = useState<string | null>(null);
  const isHome = pathname === "/";

  useEffect(() => {
    if (isHome) return;

    const element = bottomRef.current;
    if (!element || !("IntersectionObserver" in window)) {
      setVisiblePath(pathname);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisiblePath(pathname);
        observer.disconnect();
      }
    }, { threshold: 0.15 });

    observer.observe(element);
    return () => observer.disconnect();
  }, [isHome, pathname]);

  function goBack() {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  }

  return (
    <main className={isHome ? "home-main" : "inner-main"}>
      {!isHome && (
        <div className="container back-top-row" key={`back-${pathname}`}>
          <button className="back-top-button" type="button" onClick={goBack}>
            <ArrowLeft className="back-top-arrow" size={17} aria-hidden="true" />
            <span>Back</span>
          </button>
        </div>
      )}
      {children}
      {!isHome && (
        <div
          className="container back-home-row"
          data-visible={visiblePath === pathname}
          ref={bottomRef}
          key={`home-${pathname}`}
        >
          <Link className="back-home-button" href="/">
            <span className="back-home-content">
              <Home className="back-home-icon" size={18} aria-hidden="true" />
              <span>Back to Home</span>
            </span>
          </Link>
        </div>
      )}
    </main>
  );
}