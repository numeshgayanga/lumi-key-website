import type { Metadata } from "next";
import { ALargeSmall, ArrowDownUp, AudioLines, Circle, Globe2, MessageCircle, Palette, PenLine, Smile, Sparkles, WandSparkles, Zap } from "lucide-react";

export const metadata: Metadata = { title: "Features" };

const features = [
  [Palette, "Custom keyboard themes", "Imagine a look that feels unmistakably yours."],
  [Sparkles, "Custom backgrounds", "Bring personal color and imagery into the keyboard."],
  [ALargeSmall, "Keyboard font customization", "Explore a planned collection of 40+ font styles."],
  [Circle, "Key shape customization", "Choose the character of each key's shape."],
  [ArrowDownUp, "Key order customization", "Arrange keys around the way you work."],
  [Smile, "Emoji support", "Keep expressive replies close at hand."],
  [PenLine, "Symbol support", "Make useful symbols easier to reach."],
  [MessageCircle, "Quick messages", "Keep favorite short replies within reach."],
  [WandSparkles, "Smart typing suggestions", "A planned assist for smoother everyday typing."],
  [AudioLines, "RGB animated borders", "Add a lively edge to a future keyboard theme."],
  [Zap, "Special key customization", "Give important keys a role that fits your flow."],
  [Globe2, "Multilingual keyboard", "A vision for switching between languages with ease."],
] as const;

export default function FeaturesPage() {
  return <section className="page-shell"><div className="container">
    <div className="section-heading"><span className="eyebrow">Designed around expression</span><h1 className="section-title" style={{ marginTop: 14 }}>A keyboard, <span className="gradient-text">your way.</span></h1><p className="section-copy">Explore the Lumi Key product vision. The features below are planned concepts and are not represented as available on every platform.</p></div>
    <div className="notice"><Sparkles size={17} /> These are planned product features. Availability and implementation may vary by platform; no feature is implied to be currently released.</div>
    <div className="feature-list">{features.map(([Icon, title, description]) => <article className="feature-row" key={title}><Icon size={19} /><div><strong>{title}</strong><span>{description}</span></div></article>)}</div>
  </div></section>;
}