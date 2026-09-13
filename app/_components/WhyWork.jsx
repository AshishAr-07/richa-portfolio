"use client";

import React from "react";
import Wrapper from "./Wrapper";
import { motion } from "framer-motion";
import { FaPalette, FaClock, FaComments } from "react-icons/fa";

export default function WhyWork() {
    const cards = [
        {
            icon: FaPalette,
            title: "Better designs",
            description:
                "Most editors focus on effects. I focus on design, layout, and clarity.",
        },
        {
            icon: FaClock,
            title: "Fast Turnarounds",
            description:
                "You won’t have to chase updates. I respect deadlines and deliver on time",
        },
        {
            icon: FaComments,
            title: "Easy Communication",
            description:
                "Clear updates, quick replies, and no confusion about the project status",
        },
    ];

    return (
        <Wrapper>
            <section id="whyworkwithme" className="scroll-mt-28">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="mb-12 text-center">

                        <h2 className="font-bold text-cream text-4xl md:text-5xl leading-tight mb-6">
                            Why Work with Me?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {cards.map((card, index) => {
                            const Icon = card.icon;

                            return (
                                <motion.div
                                    key={index}
                                    className="group relative overflow-hidden p-7 md:p-8 rounded-2xl border border-white/10 bg-white/[0.035] transition-colors duration-300 hover:border-(--color)/50 hover:bg-white/6"
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{ y: -6 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.15,
                                    }}
                                >
                                    <div className="flex items-center justify-between mb-12">
                                        <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-(--color)/10 text-(--color) ring-1 ring-(--color)/20 transition-transform duration-300 group-hover:scale-105">
                                            <Icon className="text-xl" />
                                        </div>
                                        <span className="text-sm font-mono text-white/25">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    <h4 className="text-2xl font-semibold mb-3 tracking-tight">
                                        {card.title}
                                    </h4>
                                    <p className="text-white/50 text-sm leading-relaxed">
                                        {card.description}
                                    </p>

                                    <div className="absolute bottom-0 left-7 right-7 h-px origin-left scale-x-0 bg-(--color) transition-transform duration-500 group-hover:scale-x-100" />
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </section>
        </Wrapper>
    );
}