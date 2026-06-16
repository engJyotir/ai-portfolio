"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section
      className="
      py-32
      bg-black
      text-white
      flex
      items-center
      px-8
      lg:px-20
      "
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
          text-zinc-500
          text-lg
          mb-8
          "
        >
          Philosophy
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
          text-5xl
          md:text-7xl
          lg:text-8xl
          font-bold
          tracking-tight
          leading-[0.95]
          max-w-4xl
          "
        >
          I don't build demos.
          <br />
          I build AI systems
          <br />
          that can become products.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="
          mt-12
          max-w-3xl
          text-xl
          md:text-2xl
          text-zinc-400
          leading-relaxed
          "
        >
          My work focuses on combining LLMs,
          retrieval systems, agents, backend
          infrastructure, and modern interfaces
          into practical products that solve
          real business problems.
        </motion.p>

        <div
          className="
          mt-16
          mb-16
          h-px
          bg-zinc-900
          "
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="
          grid
          md:grid-cols-3
          gap-8
          "
        >
          {[
            [
              "AI Engineering",
              "RAG systems, agentic workflows, evaluation pipelines, semantic search, and production LLM applications."
            ],
            [
              "Production Systems",
              "FastAPI, Next.js, PostgreSQL, vector databases, cloud deployment, and scalable backend architecture."
            ],
            [
              "Financial Intelligence",
              "Investment research automation, market analytics, portfolio workflows, and decision-support systems."
            ],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="
              border
              border-zinc-900
              rounded-3xl
              p-8
              hover:border-zinc-700
              transition
              "
            >
              <h3
                className="
                text-2xl
                font-semibold
                "
              >
                {title}
              </h3>

              <p
                className="
                mt-4
                text-zinc-500
                leading-relaxed
                "
              >
                {desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}