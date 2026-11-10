import type { Metadata } from "next";
import { Heart, Lightbulb, Sparkles } from "lucide-react";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return <section className="page-shell"><div className="container">
    <div className="section-heading"><span className="eyebrow"><Sparkles size={14} /> Our story</span><h1 className="section-title" style={{ marginTop: 14 }}>A little more <span className="gradient-text">you.</span></h1><p className="section-copy">Lumi Key is a keyboard brand built around a simple idea: the tool you use to communicate should feel like it belongs to you.</p></div>
    <div className="content-grid"><article className="surface content-panel"><span className="feature-icon"><Lightbulb size={20} /></span><h2 style={{ marginTop: 18 }}>Our vision</h2><p>A world where digital expression feels personal, inclusive, and joyful, in every language and on every screen.</p></article><article className="surface content-panel"><span className="feature-icon"><Heart size={20} /></span><h2 style={{ marginTop: 18 }}>Our mission</h2><p>To shape a thoughtful keyboard experience that brings customization and language choice closer to everyone.</p></article></div>
    <div className="manifesto" style={{ marginTop: 20 }}><p>“The words are yours. Your keyboard should feel that way, too.”</p></div>
  </div></section>;
}