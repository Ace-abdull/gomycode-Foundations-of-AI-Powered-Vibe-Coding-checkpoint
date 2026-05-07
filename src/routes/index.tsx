import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Titan Abdullah — Frontend Developer & Creative Web Designer" },
      {
        name: "description",
        content:
          "Portfolio of Titan Abdullah, a frontend developer crafting clean, responsive, and interactive web experiences with modern technologies.",
      },
      { property: "og:title", content: "Titan Abdullah — Frontend Developer" },
      {
        property: "og:description",
        content:
          "Clean, responsive, and interactive web experiences built with modern frontend tools.",
      },
    ],
  }),
});

function Index() {
  return (
    <main
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20"
      style={{ background: "var(--gradient-hero), var(--color-background)" }}
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--accent-glow)" }} />
      <div className="pointer-events-none absolute bottom-0 right-10 h-72 w-72 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--accent-glow-2)" }} />

      <section
        className="relative z-10 w-full max-w-2xl rounded-3xl border p-10 text-center backdrop-blur-xl sm:p-14 animate-fade-in"
        style={{
          background: "var(--glass-bg)",
          borderColor: "var(--glass-border)",
          boxShadow: "var(--shadow-glow)",
        }}
      >
        <p className="mb-4 inline-block rounded-full border px-4 py-1 text-xs font-medium tracking-widest uppercase text-muted-foreground"
          style={{ borderColor: "var(--glass-border)" }}>
          Available for work
        </p>

        <h1
          className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
          style={{
            backgroundImage: "var(--gradient-text)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Titan Abdullah
        </h1>

        <h2 className="mt-4 text-lg font-medium text-foreground/90 sm:text-xl">
          Frontend Developer & Creative Web Designer
        </h2>

        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
          Passionate about building clean, responsive, and interactive web
          experiences using modern frontend technologies.
        </p>

        <div className="mt-10 flex flex-col items-center gap-6">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:text-base"
            style={{
              background: "var(--gradient-button)",
              boxShadow: "var(--shadow-glow)",
            }}
          >
            View My Projects
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <div className="flex items-center gap-3">
            <SocialLink href="https://github.com" label="GitHub">
              <Github className="h-5 w-5" />
            </SocialLink>
            <SocialLink href="https://linkedin.com" label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </SocialLink>
          </div>
        </div>
      </section>
    </main>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border text-foreground/80 backdrop-blur transition-all duration-300 hover:scale-110 hover:text-foreground"
      style={{
        background: "var(--glass-bg)",
        borderColor: "var(--glass-border)",
      }}
    >
      {children}
    </a>
  );
}
