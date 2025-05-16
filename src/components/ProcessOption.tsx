import React from "react";

const H4MProcessSteps = () => {
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
          <p className="text-2xl text-gray-300 mb-8 px-2">
            Ready to ditch the old playbook? <br />
            Your first move: book your H4M intake and unlock a new level of
            health.
          </p>

          {/* The following block is commented out:
          <div className="flex justify-center mb-8">
            {/* Duplicated Lab Deep Dive Card
            <div className="group relative bg-black/30 rounded-2xl p-6 border border-gray-800 transition-all duration-300 hover:shadow-[0_0_45px_rgba(239,68,68,0.57)] flex flex-col max-w-sm w-full">
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
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Kickstart Quiz */}
            <div className="group relative bg-black/30 rounded-2xl p-6 border border-gray-800 transition-all duration-300 hover:shadow-[0_0_45px_rgba(34,197,94,0.57)] flex flex-col">
              <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                <svg
                  className="w-7 h-7 text-green-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z" />
                </svg>
              </div>
              <h3 className="text-xl text-white mb-2">Kickstart Quiz</h3>
              <p className="text-sm text-gray-400">
                Tell us what you want to crush, what&apos;s holding you back,
                and where you want to go next. No boring forms—just your story,
                your goals, your way. We&apos;ll use your answers to build a
                game plan that&apos;s as unique as you are.
              </p>
            </div>
            {/* Health Coaching Card */}
            <div className="group relative bg-black/30 rounded-2xl p-6 border border-gray-800 transition-all duration-300 hover:shadow-[0_0_45px_rgba(234,179,8,0.57)] flex flex-col">
              <div className="w-14 h-14 rounded-full bg-yellow-500/20 flex items-center justify-center mb-4">
                <svg
                  className="w-7 h-7 text-yellow-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
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
            {/* Treatment Protocol Card */}
            <div className="group relative bg-black/30 rounded-2xl p-6 border border-gray-800 transition-all duration-300 hover:shadow-[0_0_45px_rgba(59,130,246,0.57)] flex flex-col">
              <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                <svg
                  className="w-7 h-7 text-blue-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M15 5c-.46 0-.87.27-1.05.69l-3.88 8.97c-.27.63.2 1.34.89 1.34.39 0 .74-.24.89-.6l.52-1.26h5l.52 1.26c.15.36.5.6.89.6.69 0 1.15-.71.88-1.34l-3.88-8.97C15.87 5.27 15.46 5 15 5zm-1.87 7L15 6.81 16.87 12h-3.74zm-6.78 7.64l1.79-1.79c.32-.31.1-.85-.35-.85H5V5c0-.55-.45-1-1-1s-1 .45-1 1v12h2.79c.45 0 .67.54.35.85l-1.79 1.79c-.2.2-.51.2-.71 0l-1.79-1.79c-.32-.31-.1-.85.35-.85H3V5c0-1.1.9-2 2-2s2 .9 2 2v12h-1.79c-.45 0-.67.54-.35.85l1.79 1.79c.2.2.51.2.71 0z" />
                </svg>
              </div>
              <h3 className="text-xl text-white mb-2">Expert Gameplan</h3>
              <p className="text-sm text-gray-400">
                Chat with a licensed pro who actually listens. Get a blueprint
                for peak performance—no cookie-cutter fixes.
              </p>
            </div>
            {/* Health Coaching Card */}
            <div className="group relative bg-black/30 rounded-2xl p-6 border border-gray-800 transition-all duration-300 hover:shadow-[0_0_45px_rgba(168,85,247,0.57)] flex flex-col">
              <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                <svg
                  className="w-7 h-7 text-purple-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
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
            {/* Treatment Protocol Card */}
            <div className="group relative bg-black/30 rounded-2xl p-6 border border-gray-800 transition-all duration-300 hover:shadow-[0_0_45px_rgba(59,130,246,0.57)] flex flex-col">
              <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                <svg
                  className="w-7 h-7 text-blue-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <h3 className="text-xl text-white mb-2">Begin Kickstart Quiz</h3>
              <p className="text-sm text-gray-400">
                <a
                  href="https://www.optimantra.com/optimus/patient/patientaccess/prospects?pid=Zm8yWlliS1dGaDVXRXN0bTIyOS9Pdz09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-400 hover:text-blue-600 transition-colors"
                >
                  Non-boring form found here.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default H4MProcessSteps;
