import type { Metadata } from "next";
import { Type } from "lucide-react";

export const metadata: Metadata = { title: "Fonts" };
const samples = [
  ["Soft Geometry", "Space Grotesk", "Aa Bb Cc 123"], ["Everyday Sans", "DM Sans", "Aa Bb Cc 123"], ["Editorial Serif", "Georgia, serif", "Aa Bb Cc 123"],
  ["Rounded Notes", "Trebuchet MS, sans-serif", "Aa Bb Cc 123"], ["Mono Signal", "ui-monospace, monospace", "Aa Bb Cc 123"], ["Classic Book", "Palatino Linotype, serif", "Aa Bb Cc 123"],
  ["Wide Display", "Impact, sans-serif", "Aa Bb Cc 123"], ["Friendly Hand", "Comic Sans MS, cursive", "Aa Bb Cc 123"], ["System Clean", "Arial, sans-serif", "Aa Bb Cc 123"],
];

export default function FontsPage() {
  return <section className="page-shell"><div className="container">
    <div className="section-heading"><span className="eyebrow"><Type size={14} /> A style for every sentence</span><h1 className="section-title" style={{ marginTop: 14 }}>Letters with <span className="gradient-text">feeling.</span></h1><p className="section-copy">Explore typography directions for the planned Lumi Key font collection.</p></div>
    <div className="notice"><Type size={17} /> The product font collection is planned to include 40+ styles. The samples below are website previews only; they do not represent an in-app font library.</div>
    <div className="font-grid">{samples.map(([name, family, sample]) => <article className="font-card surface" key={name}><span>{name}</span><div className="font-sample" style={{ fontFamily: family }}>{sample}</div><span style={{ fontFamily: family }}>Your words, your style.</span></article>)}</div>
    <p className="font-aside">Font previews use locally available system fonts plus the DM Sans and Space Grotesk typefaces used by this website. The final in-app font set is not yet available.</p>
  </div></section>;
}