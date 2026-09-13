import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Wrapper from "./Wrapper";

export default function Hero() {
  return (
    <section id="home" className="relative scroll-mt-28 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <Wrapper className="flex min-h-[calc(100svh-1rem)] items-center pt-32">
        <div className="grid w-full grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="relative z-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-8 bg-(--color)" />
              <span className="text-xs italic uppercase tracking-[0.25em] text-(--color)">
                Independent video editor
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-bold leading-[0.98] tracking-tight md:text-7xl lg:text-8xl">
              Stories that <span className="text-white/40">stay.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-white/55 md:text-lg">
              I&apos;m Richa, a video editor helping entrepreneurs turn their message into videos people can&apos;t ignore.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="#work"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:-translate-y-1"
              >
                Explore my work
                <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/55 transition-colors hover:text-white"
              >
                More about me
                <ArrowDownRight size={16} />
              </Link>
            </div>

            <div className="mt-16 flex items-center gap-8 border-t border-white/10 pt-5 text-xs uppercase tracking-[0.18em] text-white/35">
              <span>Story-led</span>
              <span>Detail-focused</span>
              <span>On time</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-5 rounded-4xl border border-(--color)/20" />
            <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-white/5">
              <Image
                src="/profile2.jpg"
                alt="Richa, video editor"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 42vw"
                className="object-cover grayscale-15 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <span className="text-sm text-white/75">Richa / 2026</span>
                <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-xs text-white/70 backdrop-blur-sm">
                  Available for projects
                </span>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
