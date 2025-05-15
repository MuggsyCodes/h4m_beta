import { useState } from "react";

interface EducationModalProps {
  trigger: React.ReactNode;
}

export function EducationModal({ trigger }: EducationModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    zip: "",
    interest: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setIsSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      // Show success message
      setIsSuccess(true);

      // Reset form
      setFormData({ name: "", email: "", zip: "", interest: "" });

      // Close modal after 3 seconds
      setTimeout(() => {
        setIsOpen(false);
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Failed to submit form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-block bg-transparent text-white border-2 border-white px-8 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300"
      >
        {trigger}
      </button>

      {/* Modal content */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold w-full text-center">
                Get Educated
              </h2>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsSuccess(false);
                }}
                className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
              >
                ×
              </button>
            </div>

            {isSuccess ? (
              <div className="text-center py-8">
                <div className="text-green-500 text-5xl mb-4">✓</div>
                <p className="text-lg text-gray-700">
                  Thanks for reaching out - You&apos;ll hear from one of our
                  Health Maveriks real soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="zip" className="block text-sm font-medium">
                    Zip Code
                  </label>
                  <input
                    id="zip"
                    type="text"
                    value={formData.zip}
                    onChange={(e) =>
                      setFormData({ ...formData, zip: e.target.value })
                    }
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter your zip code"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="interest"
                    className="block text-sm font-medium"
                  >
                    What interests you?
                  </label>
                  <select
                    id="Conact form interest:"
                    value={formData.interest}
                    onChange={(e) =>
                      setFormData({ ...formData, interest: e.target.value })
                    }
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  >
                    <option value="">Select your interest</option>
                    <option value="How do I get started?">
                      I&apos;m interested, but don&apos;t know where to start
                    </option>
                    <option value="What is HRT?">
                      What is hormone replacement therapy?
                    </option>
                    <option value="How much does this cost?">
                      How much does this cost?
                    </option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
                {submitError && (
                  <p className="text-red-500 text-sm mt-2">{submitError}</p>
                )}
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
