import type { Metadata } from "next";
import { ThemeGallery } from "@/components/theme-gallery";

export const metadata: Metadata = { title: "Themes" };

export default function ThemesPage() {
  return <section className="page-shell"><div className="container">
    <div className="section-heading"><span className="eyebrow">A mood for every moment</span><h1 className="section-title" style={{ marginTop: 14 }}>Color your <span className="gradient-text">keyboard.</span></h1><p className="section-copy">A visual gallery of theme concepts. These previews are illustrative and are not downloadable themes.</p></div>
    <ThemeGallery />
  </div></section>;
}