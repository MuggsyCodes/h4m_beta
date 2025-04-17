import React from "react";

const GuidedOptimization = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            What is Guided Optimization®?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Every Marek Health client receives the following:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Lab Work Card */}
            <div className="bg-black/30 rounded-2xl p-8 border border-gray-800">
              <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-red-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7 2v2h1v14c0 2.21 1.79 4 4 4s4-1.79 4-4V4h1V2H7zm5 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                </svg>
              </div>
              <h3 className="text-2xl text-white mb-4">
                Personalized lab work
              </h3>
              <p className="text-gray-400">
                Discover the full picture of your health with our in-depth lab
                work that cover hormones, vitamins, metabolic markers, and more.
              </p>
            </div>

            {/* Health Coaching Card */}
            <div className="bg-black/30 rounded-2xl p-8 border border-gray-800">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-green-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z" />
                </svg>
              </div>
              <h3 className="text-2xl text-white mb-4">
                1 on 1 expert health coaching
              </h3>
              <p className="text-gray-400">
                Marek Health coaches are your health strategists, dedicated to
                understanding your specific health circumstances, goals, and
                challenges.
              </p>
            </div>

            {/* Treatment Protocol Card */}
            <div className="bg-black/30 rounded-2xl p-8 border border-gray-800">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm6 11h-3v3h-2v-3H8v-2h3V9h2v4h3v2z" />
                </svg>
              </div>
              <h3 className="text-2xl text-white mb-4">
                Customized treatment protocol
              </h3>
              <p className="text-gray-400">
                Marek Health Coaches create a personalized blueprint for each
                client, continuously refining and adapting it to your evolving
                health profile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuidedOptimization;
