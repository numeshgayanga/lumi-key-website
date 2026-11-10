import type { Metadata } from "next";
import { HelpCircle, Mail } from "lucide-react";
import { SupportForm } from "@/components/support-form";

export const metadata: Metadata = { title: "Support" };
const questions = [
  ["Can I download Lumi Key now?", "No verified download links have been provided. Check the Download page for the latest honest availability status."],
  ["Are the listed features available today?", "The Features page describes planned product concepts. Availability has not been confirmed for any platform."],
  ["Does the web keyboard install on my device?", "No. It is an interactive browser demo and is separate from native keyboard apps."],
  ["How can I contact the Lumi Key team?", "A public support email and message delivery service have not been configured yet. The form below currently validates input only."],
];

export default function SupportPage() {
  return <section className="page-shell"><div className="container">
    <div className="section-heading"><span className="eyebrow"><HelpCircle size={14} /> Here to help</span><h1 className="section-title" style={{ marginTop: 14 }}>Questions, <span className="gradient-text">meet answers.</span></h1><p className="section-copy">Find current product information below. Contact details will be added when an official support channel is ready.</p></div>
    <div className="content-grid" style={{ alignItems: "start" }}>
      <div><h2 style={{ margin: "0 0 16px", font: "700 21px 'Space Grotesk',sans-serif" }}>Frequently asked</h2><div className="faq-list">{questions.map(([question, answer]) => <details className="faq-item" key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div><div className="font-aside" style={{ display: "flex", gap: 10, alignItems: "flex-start" }}><Mail size={17} /><span>Support email: not configured yet.</span></div></div>
      <SupportForm />
    </div>
  </div></section>;
}