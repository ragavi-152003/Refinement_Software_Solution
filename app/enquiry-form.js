"use client";

import { useState } from "react";

export default function EnquiryForm({ courseOptions }) {
  const [feedback, setFeedback] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setFeedback(
      "Your entries were checked in this browser. No message was sent because this website is not connected to an enquiry service yet.",
    );
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="enquiry-name">Your name</label>
        <input
          id="enquiry-name"
          name="name"
          type="text"
          autoComplete="name"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="enquiry-email">Email address</label>
        <input
          id="enquiry-email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="enquiry-mobile">Mobile number</label>
        <input
          id="enquiry-mobile"
          name="mobile"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="enquiry-interest">Course or service of interest</label>
        <select id="enquiry-interest" name="interest" defaultValue="" required>
          <option value="" disabled>
            Choose an option
          </option>
          {courseOptions.map((course) => (
            <option value={course} key={course}>
              {course}
            </option>
          ))}
          <option value="Software development services">
            Software development services
          </option>
          <option value="Other enquiry">Other enquiry</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="enquiry-message">How can we help?</label>
        <textarea
          id="enquiry-message"
          name="message"
          rows="5"
          maxLength="1000"
          required
        />
      </div>

      <button className="primary-button" type="submit">
        Check enquiry details
      </button>
      <p className="form-notice" role="status" aria-live="polite">
        {feedback}
      </p>
    </form>
  );
}
