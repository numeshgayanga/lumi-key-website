import type { Metadata } from "next";
import { Globe2 } from "lucide-react";

export const metadata: Metadata = { title: "Languages" };
const languages = [
  { name: "English", native: "Hello", locale: "EN" },
  { name: "Sinhala", native: "ආයුබෝවන්", locale: "සිං" },
  { name: "Tamil", native: "வணக்கம்", locale: "த" },
  { name: "Korean", native: "안녕하세요", locale: "한" },
  { name: "Japanese", native: "こんにちは", locale: "あ" },
];

export default function LanguagesPage() {
  return <section className="page-shell"><div className="container">
    <div className="section-heading"><span className="eyebrow"><Globe2 size={14} /> Words bring us together</span><h1 className="section-title" style={{ marginTop: 14 }}>Made for <span className="gradient-text">many voices.</span></h1><p className="section-copy">These languages are part of the Lumi Key vision. Keyboard input availability has not been verified and may vary by platform.</p></div>
    <div className="language-grid">{languages.map((language) => <article className="language-card surface" key={language.name}><span className="language-name">{language.name}</span><span className="language-native" lang={language.name === "Sinhala" ? "si" : language.name === "Tamil" ? "ta" : language.name === "Korean" ? "ko" : language.name === "Japanese" ? "ja" : "en"}>{language.native}</span><span className="language-name">{language.locale}</span></article>)}</div>
    <p className="font-aside">The web keyboard demo currently uses an English QWERTY layout. Native input methods for the languages shown here are not implemented in the demo.</p>
  </div></section>;
}