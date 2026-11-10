import type { Metadata } from "next";
import { Apple, AppWindow, Download, Smartphone } from "lucide-react";

export const metadata: Metadata = { title: "Download" };

const platforms = [
  { name: "Android APK", description: "A direct APK download is not available yet.", icon: Smartphone },
  { name: "Google Play Store", description: "An official Play Store listing has not been provided.", icon: AppWindow },
  { name: "iOS", description: "The iOS version is not available yet.", icon: Apple },
  { name: "Windows", description: "A Windows version is not available yet.", icon: AppWindow },
  { name: "macOS", description: "A macOS version is not available yet.", icon: Apple },
];

export default function DownloadPage() {
  return <section className="page-shell"><div className="container">
    <div className="section-heading"><span className="eyebrow"><Download size={14} /> Get Lumi Key</span><h1 className="section-title" style={{ marginTop: 14 }}>Your next keyboard, <span className="gradient-text">in the works.</span></h1><p className="section-copy">We will publish official links here when they are verified. No unofficial or placeholder downloads.</p></div>
    <div className="download-grid">{platforms.map(({ name, description, icon: Icon }) => <article className="download-card surface" key={name}><div className="download-card-top"><Icon size={22} /><span className="status-pill">Coming soon</span></div><h2>{name}</h2><p>{description}</p><span className="button button-outline" aria-disabled="true">Not available yet</span></article>)}</div>
  </div></section>;
}