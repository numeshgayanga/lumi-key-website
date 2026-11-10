"use client";

import { FormEvent, useState } from "react";

export function SupportForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setSubmitted(true);
  }

  return <form className="surface content-panel" onSubmit={handleSubmit}>
    <h2>Send a message</h2>
    <p style={{ marginBottom: 22 }}>The form checks your details in this preview. Message delivery is not configured yet.</p>
    <div className="form-grid">
      <div className="field"><label htmlFor="support-name">Name</label><input id="support-name" name="name" autoComplete="name" required maxLength={80} /></div>
      <div className="field"><label htmlFor="support-email">Email</label><input id="support-email" name="email" type="email" autoComplete="email" required maxLength={254} /></div>
      <div className="field full"><label htmlFor="support-topic">Topic</label><select id="support-topic" name="topic" defaultValue="general"><option value="general">General question</option><option value="feedback">Feedback</option><option value="accessibility">Accessibility</option></select></div>
      <div className="field full"><label htmlFor="support-message">Message</label><textarea id="support-message" name="message" required minLength={10} maxLength={2000} /></div>
      <div className="field full"><button className="button button-primary" type="submit">Validate message</button></div>
    </div>
    {submitted && <p className="form-status" role="status">Your message passed validation. It was not sent because a support delivery service has not been connected.</p>}
  </form>;
}