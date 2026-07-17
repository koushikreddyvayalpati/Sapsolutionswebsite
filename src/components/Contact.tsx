"use client";

import { useState, type FormEvent } from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { CONTACT_INFO, SERVICES } from "@/data/site";

const COMPANY_SIZES = ["500–1,000", "1,000–5,000", "5,000–20,000", "20,000+"];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget as HTMLFormElement);
    const service = String(form.get("service") || "SAP services");
    const subject = encodeURIComponent(`UtilityNexus.ai enquiry: ${service}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.get("firstName") || ""} ${form.get("lastName") || ""}`,
        `Business email: ${form.get("email") || ""}`,
        `Company: ${form.get("company") || ""}`,
        `Company size: ${form.get("size") || ""}`,
        `Service: ${service}`,
        "",
        String(form.get("message") || ""),
      ].join("\n"),
    );

    setSubmitted(true);
    window.location.href = `mailto:hello@utilitynexus.ai?subject=${subject}&body=${body}`;
  }

  return (
    <section className="sec alt" id="contact">
      <Reveal className="shdr">
        <span className="stag">Contact Us</span>
        <h2>Start with the SAP issue that matters now.</h2>
        <p>Speak directly with a utilities and SAP delivery specialist.</p>
      </Reveal>
      <div className="con-grid">
        <Reveal variant="left" className="con-lft">
          <h3>Talk to UtilityNexus.ai</h3>
          <p>
            Tell us whether you are planning an ECC upgrade, filling an AMS skills gap, governing an
            implementation or reviewing SAP IS-U health.
          </p>
          <div className="con-proof" aria-label="Consultation assurances">
            <span>Specialist response</span>
            <span>NDA-ready</span>
            <span>Utilities-aware</span>
          </div>
          {CONTACT_INFO.map((c) => (
            <div className="con-row" key={c.label}>
              <span className="con-ico">
                <Icon name={c.icon} size={15} />
              </span>
              <div>
                <div className="con-l">{c.label}</div>
                <div className="con-v">{c.value}</div>
              </div>
            </div>
          ))}
        </Reveal>
        <Reveal variant="right" as="form" className="con-form" onSubmit={handleSubmit}>
          <h4>Request a Consultation</h4>
          <div className="fg">
            <div className="ff">
              <label htmlFor="c-first">First Name</label>
              <input id="c-first" name="firstName" type="text" placeholder="John" required />
            </div>
            <div className="ff">
              <label htmlFor="c-last">Last Name</label>
              <input id="c-last" name="lastName" type="text" placeholder="Smith" required />
            </div>
          </div>
          <div className="fg">
            <div className="ff">
              <label htmlFor="c-email">Business Email</label>
              <input
                id="c-email"
                name="email"
                type="email"
                placeholder="j.smith@enterprise.com"
                required
              />
            </div>
            <div className="ff">
              <label htmlFor="c-company">Company</label>
              <input id="c-company" name="company" type="text" placeholder="Enterprise Corp" />
            </div>
          </div>
          <div className="fg">
            <div className="ff">
              <label htmlFor="c-service">SAP Service</label>
              <select id="c-service" name="service" defaultValue="">
                <option value="" disabled>
                  Select a service…
                </option>
                {SERVICES.map((s) => (
                  <option key={s.slug}>{s.title}</option>
                ))}
              </select>
            </div>
            <div className="ff">
              <label htmlFor="c-size">Company Size</label>
              <select id="c-size" name="size" defaultValue="">
                <option value="" disabled>
                  Select…
                </option>
                {COMPANY_SIZES.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="fg" style={{ marginBottom: 14 }}>
            <div className="ff ffl">
              <label htmlFor="c-msg">How can we help?</label>
              <textarea
                id="c-msg"
                name="message"
                placeholder="Describe your SAP landscape, the current issue and the outcome you need…"
              />
            </div>
          </div>
          <button type="submit" className="sbtn" disabled={submitted}>
            {submitted ? "Opening Your Email App…" : "Prepare Email Request"}
            {!submitted && <Icon name="arrow" size={13} strokeWidth={2.5} />}
          </button>
          <p className="form-note">
            This opens a pre-filled message in your email app so you can review it before sending.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
