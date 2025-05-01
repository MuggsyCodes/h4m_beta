"use client";

import { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

export default function NewsletterSection() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields.",
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate submission
    setTimeout(() => {
      setStatus({
        type: "success",
        message: "Thank you for subscribing! We'll be in touch soon.",
      });
      setFormData({ firstName: "", lastName: "", email: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="bg-black text-white py-2 md:py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-3 md:mb-4">
          Join the club for exclusive news and deals
        </h2>
        <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base">
          Subscribe to the Hormones for Me Health Newsletter for exclusive
          insights and trends in health optimization.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="flex flex-col md:flex-row gap-3 md:gap-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name*"
              className="flex-1 bg-transparent border border-gray-800 rounded px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base focus:outline-none focus:border-gray-600"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name*"
              className="flex-1 bg-transparent border border-gray-800 rounded px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base focus:outline-none focus:border-gray-600"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email*"
              className="flex-1 bg-transparent border border-gray-800 rounded px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base focus:outline-none focus:border-gray-600"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-white text-black px-6 md:px-8 py-2.5 md:py-3 rounded font-medium hover:bg-gray-100 transition-colors text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
          {status.message && (
            <div
              className={`mt-4 text-sm ${
                status.type === "success" ? "text-green-400" : "text-red-400"
              }`}
            >
              {status.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
