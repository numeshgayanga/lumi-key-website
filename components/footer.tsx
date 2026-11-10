import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/logo";

const groups = [
  { title: "Explore", links: [["Features", "/features"], ["Themes", "/themes"], ["Fonts", "/fonts"], ["Languages", "/languages"]] },
  { title: "Company", links: [["About", "/about"], ["Support", "/support"]] },
  { title: "Try", links: [["Web keyboard", "/web-keyboard"], ["Download", "/download"]] },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Logo />
            <p className="footer-blurb">A keyboard experience with room for your language, your ideas, and your style.</p>
          </div>
          <div className="footer-links">
            {groups.map((group) => (
              <div className="footer-group" key={group.title}>
                <strong>{group.title}</strong>
                {group.links.map(([label, href]) => (
                  <Link href={href} key={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
                    {label}{href.startsWith("http") && <ArrowUpRight size={12} aria-hidden="true" />}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Lumi Key</span><span>Made for every way you express yourself.</span></div>
      </div>
    </footer>
  );
}