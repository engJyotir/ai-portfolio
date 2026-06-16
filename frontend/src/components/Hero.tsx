"use client";

import { motion } from "framer-motion";

export default function Hero() {
return ( <section
   className="
   min-h-screen
   flex
   items-center
   justify-center
   px-12
   lg:px-20
   overflow-hidden
   "
 > <div
     className="
     w-full
     max-w-[1500px]
     mx-auto
     grid
     lg:grid-cols-2
     gap-24
     items-center
     "
   >
{/* LEFT VISUAL */}


    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="
      hidden
      lg:flex
      items-center
      justify-center
      relative
      h-[650px]
      "
    >
      <div
        className="
        absolute
        w-[450px]
        h-[450px]
        rounded-full
        bg-white/[0.03]
        blur-[120px]
        "
      />

      <div className="absolute w-px h-80 bg-zinc-800" />
      <div className="absolute w-80 h-px bg-zinc-800" />

      <div
        className="
        absolute
        top-8
        px-8
        py-3
        rounded-full
        border
        border-zinc-800
        "
      >
        OpenAI
      </div>

      <div
        className="
        absolute
        px-8
        py-3
        rounded-full
        border
        border-zinc-700
        bg-zinc-950
        "
      >
        LangGraph
      </div>

      <div
        className="
        absolute
        bottom-20
        left-4
        px-8
        py-3
        rounded-full
        border
        border-zinc-800
        "
      >
        Pinecone
      </div>

      <div
        className="
        absolute
        bottom-20
        right-4
        px-8
        py-3
        rounded-full
        border
        border-zinc-800
        "
      >
        FastAPI
      </div>

      <div
        className="
        absolute
        bottom-0
        px-8
        py-3
        rounded-full
        border
        border-zinc-800
        "
      >
        Next.js
      </div>
    </motion.div>

    {/* RIGHT CONTENT */}

    <div className="max-w-[650px]">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="
        text-zinc-500
        text-lg
        mb-8
        "
      >
        AI Engineer
      </motion.p>

      <motion.h1
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
        font-bold
        tracking-tight
        leading-[0.92]
        text-[72px]
        lg:text-[88px]
        xl:text-[96px]
        "
      >
        From Retrieval
        <br />
        to Reasoning.
      </motion.h1>

      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.2,
        }}
        className="
        mt-10
        text-xl
        text-zinc-400
        leading-relaxed
        "
      >
        Designing AI systems that combine
        retrieval, reasoning, agent workflows,
        and production infrastructure into
        real-world products.
      </motion.p>

      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.3,
        }}
        className="
        mt-6
        text-zinc-500
        text-sm
        leading-relaxed
        max-w-md
        "
      >
        The AI knows everything about me.
        <br />
        But if you prefer PDFs over agents,
        you can download my resume below.
      </motion.p>

      <div
        className="
        mt-10
        text-zinc-500
        "
      >
        Jyotiraditya 
      </div>

      <div
        className="
        flex
        flex-wrap
        gap-4
        mt-12
        "
      >
        <a
          href="#chat"
          className="
          px-8
          py-4
          rounded-full
          bg-white
          text-black
          font-medium
          "
        >
          Chat With My AI
        </a>

        <a
          href="#projects"
          className="
          px-8
          py-4
          rounded-full
          border
          border-zinc-800
          "
        >
          View Projects
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          className="
          px-8
          py-4
          rounded-full
          border
          border-zinc-800
          hover:border-zinc-600
          transition
          "
        >
          Download Resume
        </a>
      </div>
    </div>
  </div>
</section>


);
}
