import type { Metadata } from "next";
import { KeyboardDemo } from "@/components/keyboard-demo";

export const metadata: Metadata = { title: "Web Keyboard Demo" };

export default function WebKeyboardPage() {
  return <section className="page-shell"><div className="container">
    <div className="section-heading"><span className="eyebrow">A small interactive preview</span><h1 className="section-title" style={{ marginTop: 14 }}>Try the <span className="gradient-text">web keyboard.</span></h1><p className="section-copy">Tap the on-screen keys or type in the text box. This browser demo is separate from any native Android keyboard implementation.</p></div>
    <KeyboardDemo />
  </div></section>;
}