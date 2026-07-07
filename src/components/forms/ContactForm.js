"use client";

import { useState } from "react";
import Button from "../ui/Button";
import * as Icons from "../ui/Icons";

export default function ContactForm({ lightTheme = false }) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    role: "",
    challenge: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    // Validate inputs
    if (!formData.name || !formData.email || !formData.phone || !formData.challenge) {
      setStatus({
        submitting: false,
        success: false,
        error: "Please fill out all required fields.",
      });
      return;
    }

    try {
      // Formspree or custom API fallback
      const endpoint =
        process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT ||
        "https://formspree.io/f/placeholder_fallback";

      if (process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Failed to submit form.");
        }
      } else {
        // Mock successful submission delay
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }

      setStatus({ submitting: false, success: true, error: null });
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        role: "",
        challenge: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setStatus({
        submitting: false,
        success: false,
        error: "Something went wrong. Please call Tarun directly at +91 84396 92259 or email us.",
      });
    }
  };

  const labelClass = `block text-sm font-semibold mb-1.5 ${
    lightTheme ? "text-steel" : "text-gray-200"
  }`;
  
  const inputClass = `w-full rounded-lg py-3 px-4 border transition-colors outline-none text-base ${
    lightTheme
      ? "bg-white border-gray-300 text-steel focus:border-teal focus:ring-1 focus:ring-teal"
      : "bg-navy/40 border-navy/60 text-white placeholder-gray-500 focus:border-gold focus:ring-1 focus:ring-gold"
  }`;

  const roles = ["Plant Head / Director", "COO / VP Operations", "CFO / Finance Lead", "General Manager / Plant Manager", "Business Owner / Promoter", "Other"];
  
  const challenges = [
    "OEE Improvement & SMED (Changeover)",
    "Workforce Productivity & Line Balancing",
    "Capacity Constraints & Bottlenecks",
    "Lead-Time Reduction & Inventory Flow",
    "Integrated Plant Transformation",
    "Other / General Enquiry",
  ];

  if (status.success) {
    return (
      <div className={`p-8 rounded-xl text-center flex flex-col items-center justify-center h-full min-h-[350px] ${
        lightTheme ? "bg-teal/5 border border-teal/20" : "bg-navy-light/40 border border-gold/25"
      }`}>
        <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center text-teal mb-6">
          <Icons.Check className="w-8 h-8" />
        </div>
        <h3 className={`text-2xl font-serif font-bold mb-4 ${lightTheme ? "text-navy" : "text-white"}`}>
          Assessment Requested!
        </h3>
        <p className={`text-base leading-relaxed mb-6 max-w-md ${lightTheme ? "text-steel" : "text-gray-300"}`}>
          Thank you. Tarun Sharma will review your factory details and get back to you within 24 hours to schedule the initial shopfloor call.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://wa.me/918439692259?text=Hi%20Tarun,%20I%20just%20submitted%20a%20shopfloor%20assessment%20request."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-teal text-white hover:bg-teal-light py-2.5 px-5 rounded-lg font-semibold text-sm transition-colors"
          >
            Message on WhatsApp
          </a>
          <Button
            onClick={() => setStatus((prev) => ({ ...prev, success: false }))}
            variant={lightTheme ? "white" : "secondary"}
            className="py-2.5 px-5 text-sm"
          >
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status.error && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg text-sm flex items-center">
          <Icons.X className="w-5 h-5 mr-2.5 shrink-0" />
          <span>{status.error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>Your Name *</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Sanjay Mehta"
            className={inputClass}
            required
          />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>Company Name *</label>
          <input
            id="company"
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. ABC Auto Ltd."
            className={inputClass}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className={labelClass}>Work Email *</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. sanjay@abcauto.com"
            className={inputClass}
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone Number (WhatsApp) *</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +91 98765 43210"
            className={inputClass}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="role" className={labelClass}>Your Role *</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className={inputClass}
            required
          >
            <option value="" disabled className="text-gray-500">Select your role</option>
            {roles.map((r) => (
              <option key={r} value={r} className="text-navy">{r}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="challenge" className={labelClass}>Primary Focus Area *</label>
          <select
            id="challenge"
            name="challenge"
            value={formData.challenge}
            onChange={handleChange}
            className={inputClass}
            required
          >
            <option value="" disabled className="text-gray-500">Select focus area</option>
            {challenges.map((c) => (
              <option key={c} value={c} className="text-navy">{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Tell us about your shopfloor/lines (optional)</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your equipment types, current OEE, scrap rates, or target capacity improvements..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <Button
        type="submit"
        variant={lightTheme ? "primary" : "gold"}
        className="w-full py-4 text-base font-bold shadow-md cursor-pointer"
        disabled={status.submitting}
      >
        {status.submitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Processing Request...
          </span>
        ) : (
          "Book Initial Shopfloor Assessment"
        )}
      </Button>
    </form>
  );
}
