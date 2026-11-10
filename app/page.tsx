import { ArrowRight, Check, Globe2, Palette, Sparkles, Type, WandSparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const highlights = [
  { icon: Palette, title: "Make it yours", text: "A canvas for themes, colors, backgrounds, and key shapes." },
  { icon: Type, title: "Your letters, your look", text: "Explore a planned collection of expressive font styles." },
  { icon: Globe2, title: "Made for many languages", text: "A multilingual vision, with more ways to write and connect." },
];

const miniRows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

export default function HomePage() {
  return <>
    <section className="home-hero">
      <div className="hero-glow" />
      <div className="container hero-grid">
        <div className="hero-copy animate-in">
          <div className="hero-identity">
            <Image className="hero-logo" src="/lumi-key-logo.jpg" alt="Lumi Key official logo" width={1254} height={1254} priority sizes="64px" />
            <span className="eyebrow"><Sparkles size={14} /> A keyboard with personality</span>
          </div>
          <h1 className="display">Your Keyboard.<br /><span className="gradient-text">Your Style.</span></h1>
          <p>Meet Lumi Key: a colorful keyboard experience imagined around the way you write, the languages you speak, and the details that feel like you.</p>
          <div className="hero-actions"><Link className="button button-primary" href="/download">Explore Lumi Key <ArrowRight size={16} /></Link><Link className="button button-outline" href="/web-keyboard">Try the web demo</Link></div>
          <div className="hero-note"><Check size={15} /> Product availability varies by platform. See current status.</div>
        </div>
        <div className="preview-stage animate-in" aria-label="Illustrated keyboard theme preview">
          <div className="preview-orbit" />
          <div className="floating-chip one"><WandSparkles size={15} color="#9a65e8" /> Made for your mood</div>
          <div className="floating-chip two"><Globe2 size={15} color="#34aeb8" /> Your words, your world</div>
          <div className="keyboard-card">
            <div className="keyboard-card-top"><span>Lumi Key preview</span><Sparkles size={14} color="#d16bb4" /></div>
            <div className="mini-keys">{miniRows.map((row, rowIndex) => row.split("").map((key, index) => <span className={`mini-key ${rowIndex === 0 && index === 0 ? "accent-a" : rowIndex === 1 && index === 4 ? "accent-b" : ""}`} key={`${rowIndex}-${key}`}>{key}</span>))}<span className="mini-key accent-a">⇧</span><span className="mini-key space">English</span><span className="mini-key accent-b">↵</span></div>
          </div>
        </div>
      </div>
    </section>
    <section className="home-section">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">A brighter typing experience</span><h2 className="section-title" style={{ marginTop: 12 }}>Little details. <span className="gradient-text">Big personality.</span></h2><p className="section-copy">Lumi Key is a keyboard brand concept shaped around personal expression. These features represent the product vision and may not be available yet.</p></div>
        <div className="feature-grid">{highlights.map(({ icon: Icon, title, text }) => <article className="feature-card" key={title}><span className="feature-icon"><Icon size={20} /></span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div>
    </section>
    <section className="home-section" style={{ paddingTop: 8 }}>
      <div className="container"><div className="platform-strip"><div><strong>One brand, many screens</strong><p>Platform plans are evolving. Check availability before downloading.</p></div><div className="platform-list"><span className="platform-tag">Android</span><span className="platform-tag">iOS</span><span className="platform-tag">Windows</span><span className="platform-tag">macOS</span></div></div></div>
    </section>
    <section className="home-section" style={{ paddingTop: 10 }}>
      <div className="container"><div className="callout"><div><h2>Find your Lumi Key.</h2><p>Browse the product vision, explore the interactive web demo, and see honest platform availability.</p></div><Link className="button" href="/features">Explore features <ArrowRight size={16} /></Link></div></div>
    </section>
  </>;
}