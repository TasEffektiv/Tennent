"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

type Errors = Partial<Record<"name" | "telephone" | "email" | "message", string>>;

export default function ContactFooter() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  const validate = (data: FormData): Errors => {
    const next: Errors = {};
    const name = String(data.get("name") ?? "").trim();
    const telephone = String(data.get("telephone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name) next.name = "This field is required.";
    if (!telephone) next.telephone = "This field is required.";
    if (!email) next.email = "This field is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email address.";
    if (!message) next.message = "This field is required.";

    return next;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const validationErrors = validate(data);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("idle");
      return;
    }

    setErrors({});
    setStatus("sending");

    try {
      // POST to the static shadow form (public/forms/contact.html), not "/" —
      // "/" is handled by the Next.js server, and Netlify's forms proxy can't
      // intercept submissions routed into an app server function.
      const res = await fetch("/forms/contact.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          Object.fromEntries(data) as Record<string, string>
        ).toString(),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section className="footer-content" id="contact-section">
        <div className="container">
          <div className="contact-text">
            <h2>Contact Us</h2>
            <p>
              We are based in Balmain and have representative offices in all
              states.
            </p>
            <p>
              To discuss how we can help your clubs or association or how we
              can work on a marketing campaign with your brand, please either
              call our administration office or complete the email enquiry
              form below.
            </p>
          </div>
          <div className="contact-address-area">
            <div className="c-info">
              <ul>
                <li>
                  <i>
                    <img alt="" src="/images/ico/27.png" />
                  </i>
                  <h5>Address Information</h5>
                  <p>PO Box 428 Balmain NSW 2014</p>
                </li>
                <li>
                  <i>
                    <img alt="" src="/images/ico/28.png" />
                  </i>
                  <h5>Email</h5>
                  <p>
                    <a href="mailto:admin@tennent.com.au">
                      admin@tennent.com.au
                    </a>
                  </p>
                </li>
                <li>
                  <i>
                    <img alt="" src="/images/ico/29.png" />
                  </i>
                  <h5>call</h5>
                  <p>
                    <a href="tel:1300 275 292">1300 275 292</a>
                  </p>
                </li>
              </ul>
            </div>

            <div className="c-form">
              <h5>Leave a message</h5>

              <div className="contact_form_msg">
                {status === "sent" && (
                  <div className="mail-sent-ok">
                    Your message was sent successfully.
                  </div>
                )}
                {status === "error" && (
                  <div className="mail-not-send">Please try again</div>
                )}
              </div>

              <form
                className="contact-form"
                name="contact"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                noValidate
                {...{ netlify: "true" }}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hp-field">
                  <label>
                    Leave this field blank
                    <input name="bot-field" />
                  </label>
                </p>
                <div className="form-row">
                  <div className="form-col">
                    <input type="text" placeholder="Name*" name="name" />
                    {errors.name && (
                      <span className="field-error">{errors.name}</span>
                    )}
                    <input
                      type="text"
                      placeholder="Telephone*"
                      name="telephone"
                    />
                    {errors.telephone && (
                      <span className="field-error">{errors.telephone}</span>
                    )}
                    <input type="email" placeholder="Email*" name="email" />
                    {errors.email && (
                      <span className="field-error">{errors.email}</span>
                    )}
                  </div>
                  <div className="form-col">
                    <textarea placeholder="Enquiry*" name="message" />
                    {errors.message && (
                      <span className="field-error">{errors.message}</span>
                    )}
                    <input
                      className="submit"
                      type="submit"
                      value={status === "sending" ? "Sending..." : "Submit"}
                      disabled={status === "sending"}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="clear"></div>
        </div>
      </section>
    </>
  );
}
