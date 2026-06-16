export default function Contact() {
    return (
      <section
        className="
        min-h-screen
        bg-black
        text-white
        flex
        items-center
        px-8
        lg:px-20
        "
      >
        <div className="max-w-7xl mx-auto w-full">
          <p className="text-zinc-500 text-lg mb-6">
            Contact
          </p>
  
          <h2
            className="
            text-5xl
            md:text-7xl
            lg:text-8xl
            font-bold
            tracking-tight
            leading-[0.95]
            max-w-5xl
            "
          >
            Let&apos;s build
            <br />
            something intelligent.
          </h2>
  
          <div
            className="
            mt-16
            flex
            flex-wrap
            gap-4
            "
          >
            <a
              href="https://github.com/engJyotir"
              target="_blank"
              className="
              px-8
              py-4
              rounded-full
              bg-white
              text-black
              font-medium
              "
            >
              GitHub
            </a>
  
            <a
              href="https://www.linkedin.com/in/sinhajyotiraditya03/"
              target="_blank"
              className="
              px-8
              py-4
              rounded-full
              border
              border-zinc-800
              "
            >
              LinkedIn
            </a>
  
            <a
              href="jyotiraditya03@gmail.com"
              className="
              px-8
              py-4
              rounded-full
              border
              border-zinc-800
              "
            >
              Email
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
              "
            >
              Resume
            </a>
          </div>
        </div>
      </section>
    );
  }