"use client";

export default function NewsletterSection() {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-4">
          Join the club for exclusive news and deals
        </h2>
        <p className="text-gray-400 mb-8">
          Subscribe to the Hormones for Me Health Newsletter for exclusive
          insights
          <br />
          and trends in health optimization.
        </p>

        <div className="flex flex-col space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="First Name*"
              className="flex-1 bg-transparent border border-gray-800 rounded px-4 py-3 focus:outline-none focus:border-gray-600"
            />
            <input
              type="text"
              placeholder="Last Name*"
              className="flex-1 bg-transparent border border-gray-800 rounded px-4 py-3 focus:outline-none focus:border-gray-600"
            />
          </div>
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Email*"
              className="flex-1 bg-transparent border border-gray-800 rounded px-4 py-3 focus:outline-none focus:border-gray-600"
            />
            <button className="bg-white text-black px-8 py-3 rounded font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
