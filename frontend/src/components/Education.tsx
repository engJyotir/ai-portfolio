"use client";

export default function Education() {
  return (
    <section
      className="
      bg-black
      text-white
      px-8
      lg:px-20
      py-32
      "
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-zinc-500 text-lg mb-6">
          Education
        </p>

        <h2
          className="
          text-5xl
          md:text-7xl
          font-bold
          mb-24
          "
        >
          Engineering,
          <br />
          Computer Science,
          <br />
          and AI.
        </h2>

        <div className="border-t border-zinc-900">
          <div className="border-b border-zinc-900 py-12">
            <div className="text-zinc-600 mb-4">
              2024 - 2026
            </div>

            <h3 className="text-3xl font-semibold">
              M.S. Computer Science
            </h3>

            <p className="mt-2 text-zinc-400">
              New Jersey Institute of Technology
            </p>
          </div>

          <div className="border-b border-zinc-900 py-12">
            <div className="text-zinc-600 mb-4">
              2018 - 2022
            </div>

            <h3 className="text-3xl font-semibold">
              B.Tech Electrical & Electronics Engineering
            </h3>

            <p className="mt-2 text-zinc-400">
              Manipal Institute of Technology
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}