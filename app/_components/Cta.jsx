import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Wrapper from "./Wrapper";

export default function Cta() {
  return (
    <Wrapper>
      <section className="relative overflow-hidden rounded-2xl border border-white/15 bg-black px-7 py-12 shadow-2xl shadow-black/30 md:px-14 md:py-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="pointer-events-none absolute inset-x-7 top-0 h-px bg-linear-to-r from-transparent via-(--color) to-transparent md:inset-x-14" />
        <div className="pointer-events-none absolute right-10 top-10 h-24 w-24 rounded-full border border-(--color)/25 md:right-16 md:top-14" />
        <div className="pointer-events-none absolute right-[4.1rem] top-[4.1rem] h-12 w-12 rounded-full border border-white/10 md:right-[6.1rem] md:top-[6.1rem]" />

        <div className="relative flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-8 flex items-center justify-between gap-3 md:mb-12">
              <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-(--color)" />
              <span className="text-xs italic uppercase tracking-[0.25em] text-(--color)">
                Let&apos;s create
              </span>
              </div>
            </div>

            <h2 className="mb-5 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Have a story worth <span className="text-white/45">telling?</span>
            </h2>

            <p className="max-w-xl leading-relaxed text-white/55">
              Bring the idea. I&apos;ll bring the rhythm, clarity, and detail that make people stay until the last frame.
            </p>
          </div>

          <div className="relative flex flex-wrap items-center gap-5 border-t border-white/10 pt-6 md:border-t-0 md:pt-0">
            <Link
              href="mailto:richayadavofficial28@gmail.com"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:-translate-y-1"
            >
              Start a project
              <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="#work"
              className="text-sm font-medium text-white/55 transition-colors hover:text-white"
            >
              See my work
            </Link>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
