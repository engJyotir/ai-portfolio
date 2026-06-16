"use client";

export default function Experience() {
  const items = [
    {
      year: "2025",
      title: "Software Engineer - Full Stack",
      company: "Build City",
      description:
        "Built and deployed a full-stack trading analytics platform using FastAPI, Next.js, PostgreSQL, Render, and Vercel. Developed real-time stock scoring, multi-ticker analytics, backend APIs, and production monitoring infrastructure.",
    },
    {
      year: "2022-2024",
      title: "Frontend Software Developer",
      company: "Falabella",
      description:
        "Led development of self-checkout systems using React. Reduced checkout time by approximately 15%, automated testing with Cypress, resolved production incidents, and supported multi-store deployments using GCP.",
    },
    {
      year: "2022",
      title: "Software Development Intern",
      company: "Falabella",
      description:
        "Built REST APIs with Node.js and PostgreSQL, improved data retrieval efficiency by 25%, and supported backend services handling daily production traffic.",
    },
  ];

  return (
    <section
      className="
      min-h-screen
      bg-black
      text-white
      px-8
      lg:px-20
      py-32
      "
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-zinc-500 text-lg mb-6">
          Experience
        </p>

        <h2
          className="
          text-5xl
          md:text-7xl
          font-bold
          tracking-tight
          mb-24
          "
        >
          Building products
          <br />
          from retail systems
          <br />
          to AI platforms.
        </h2>

        <div className="border-t border-zinc-900">
          {items.map((item) => (
            <div
              key={item.title}
              className="
              grid
              md:grid-cols-[180px_1fr]
              gap-8
              border-b
              border-zinc-900
              py-12
              "
            >
              <div className="text-zinc-600 text-2xl font-bold">
                {item.year}
              </div>

              <div>
                <h3 className="text-3xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2 text-zinc-400">
                  {item.company}
                </p>

                <p className="mt-5 text-zinc-500 text-lg leading-relaxed max-w-4xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}