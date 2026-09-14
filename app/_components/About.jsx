"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import Wrapper from "./Wrapper";

const socials = [
    // { label: "YouTube", href: "https://www.youtube.com/@Richayadavofficial28", icon: FaYoutube },
    // { label: "Instagram", href: "https://instagram.com/yourhandle", icon: FaInstagram },
    { label: "DM on", href: "https://x.com/RichaEdits", icon: FaXTwitter, external: true },
    { label: "Mail me", href: "mailto:richayadavofficial28@gmail.com", icon: HiOutlineMail, external: false },
];

export default function AboutSection() {
    return (
        <Wrapper>
            <motion.section
                id="about"
                className="scroll-mt-28 bg-black/20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center border border-white/10 p-6 md:p-12 rounded-2xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: { staggerChildren: 0.15 },
                    },
                }}
            >
                <motion.div
                    className="relative flex justify-center"
                    variants={{
                        hidden: { opacity: 0, x: -28 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <Image
                        src="/profile.jpeg"
                        width={500}
                        height={500}
                        alt="Richa Profile Picture"
                        className="relative rounded-2xl object-cover shadow-2xl shadow-black/40 ring-1 ring-white/10"
                    />
                </motion.div>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, x: 28 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-px bg-(--color)" />
                        <span className="text-(--color) italic text-xs uppercase tracking-widest">About Me</span>
                    </div>

                    <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                        Every frame Tells a Story
                    </h2>

                    <p className="text-muted text-base text-justify leading-loose mb-4">
                        I’m Richa, a video editor helping entrepreneurs turn their message into videos people can’t ignore.
                    </p>

                    <p className="text-muted text-justify text-base leading-loose">
                        I create high-quality, story-driven edits that don’t just look good, they build trust, authority, and engagement, so your audience connects with you on a deeper level. Let’s craft content that stops the scroll, sparks emotion, and positions you as the go-to in your industry.
                    </p>
                    <div className="border-t border-white/10 pt-6 mt-6">
                        <div className="flex flex-wrap gap-3">
                            {socials.map(({ label, href, icon: Icon, external }, index) => (
                                <motion.div
                                    key={label}
                                    variants={{
                                        hidden: { opacity: 0, y: 10 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    transition={{ duration: 0.35, delay: index * 0.05 }}
                                >
                                    <Link
                                        href={href}
                                        target={external ? "_blank" : undefined}
                                        rel={external ? "noopener noreferrer" : undefined}
                                        aria-label={label}
                                        className="group relative inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-3 text-sm font-medium text-white/70 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-(--color) hover:text-white hover:ring-(--color)/50 hover:shadow-lg hover:shadow-(--color)/25"
                                    > <span className="hidden md:block">{label}</span>
                                        <Icon size={18} className="transition-transform duration-300 group-hover:scale-110" />
                                       
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.section>
        </Wrapper>
    );
}