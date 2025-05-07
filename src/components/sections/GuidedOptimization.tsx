import React from "react";

const GuidedOptimization = () => {
  return (
    <section
      id="guided-optimization"
      className="py-16 bg-black"
      style={{ scrollMarginTop: "90px" }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-white mb-4 px-2">
            Break the Mold. Upgrade your Health.
          </h2>
          <p className="text-lg text-gray-300 mb-8 px-2">
            Ready to ditch the old playbook? <br />
            Your first move: book your H4M intake and unlock a new level of
            health, including:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Health Coaching Card */}
            <div className="group relative bg-black/30 rounded-2xl p-6 border border-gray-800 transition-all duration-300 hover:shadow-[0_0_45px_rgba(34,197,94,0.57)] flex flex-col">
              <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                <svg
                  className="w-7 h-7 text-green-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z" />
                </svg>
              </div>
              <h3 className="text-xl text-white mb-2">Kickoff Session</h3>
              <p className="text-sm text-gray-400">
                Meet your Health Maverick. Spill your goals, your gripes, and
                your wildest ambitions. We&apos;ll map out your custom lab game
                plan—no guesswork, just data.
              </p>
            </div>
            {/* Lab Work Card */}
            <div className="group relative bg-black/30 rounded-2xl p-6 border border-gray-800 transition-all duration-300 hover:shadow-[0_0_45px_rgba(239,68,68,0.57)] flex flex-col">
              <div className="w-14 h-14 rounded-full bg-red-500/20 flex items-center justify-center mb-4">
                <svg
                  className="w-7 h-7 text-red-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7 2v2h1v14c0 2.21 1.79 4 4 4s4-1.79 4-4V4h1V2H7zm5 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                </svg>
              </div>
              <h3 className="text-xl text-white mb-2">Lab Deep Dive</h3>
              <p className="text-sm text-gray-400">
                Get the real story on your body. We&apos;ll break down your
                results and hand you a playbook for next-level living.
              </p>
            </div>

            {/* Health Coaching Card */}
            <div className="group relative bg-black/30 rounded-2xl p-6 border border-gray-800 transition-all duration-300 hover:shadow-[0_0_45px_rgba(34,197,94,0.57)] flex flex-col">
              <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                <svg
                  className="w-7 h-7 text-green-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z" />
                </svg>
              </div>
              <h3 className="text-xl text-white mb-2">Kickoff Session</h3>
              <p className="text-sm text-gray-400">
                Meet your Health Maverick. Spill your goals, your gripes, and
                your wildest ambitions. We&apos;ll map out your custom lab game
                plan—no guesswork, just data.
              </p>
            </div>

            {/* Treatment Protocol Card */}
            <div className="group relative bg-black/30 rounded-2xl p-6 border border-gray-800 transition-all duration-300 hover:shadow-[0_0_45px_rgba(59,130,246,0.57)] flex flex-col">
              <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                <svg
                  className="w-7 h-7 text-blue-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm6 11h-3v3h-2v-3H8v-2h3V9h2v4h3v2z" />
                </svg>
              </div>
              <h3 className="text-xl text-white mb-2">Expert Gameplan</h3>
              <p className="text-sm text-gray-400">
                Chat with a licensed pro who actually listens. Get a blueprint
                for peak performance—no cookie-cutter fixes.
              </p>
            </div>
            {/* Health Coaching Card */}
            <div className="group relative bg-black/30 rounded-2xl p-6 border border-gray-800 transition-all duration-300 hover:shadow-[0_0_45px_rgba(34,197,94,0.57)] flex flex-col">
              <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                <svg
                  className="w-7 h-7 text-green-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z" />
                </svg>
              </div>
              <h3 className="text-xl text-white mb-2">
                Direct-to-You Upgrades
              </h3>
              <p className="text-sm text-gray-400">
                Your custom stack, shipped straight to your door. No pharmacy
                lines, no hassle, just the good stuff.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuidedOptimization;
