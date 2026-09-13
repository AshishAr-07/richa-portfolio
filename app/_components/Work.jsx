'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Wrapper from './Wrapper'

const links = [
    {
        videoId: 'nLGEqvyb4VU',
    },
    {
        videoId: 'fhIBgKPec74',
    },
    {
        videoId: 'hHANQmoVsgs',
    },
    {
        videoId: 'dHIy5tzP08E',
    },
    {
        videoId: 'AxSLENumE90',
    },
    {
        videoId: 'e2ytg80coXE',
    },
    {
        videoId: 'jwC_djCHM6Q',
    },
    {
        videoId: 'HHEEmac4w6k',
    },
]

export default function Work() {
    const [playing, setPlaying] = useState(null)

    return (
        <section id="work" className="scroll-mt-28">
            <Wrapper>

                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-px bg-(--color)" />

                        <span className="italic text-(--color) text-xs uppercase tracking-widest">
                            Edits I have Done
                        </span>
                    </div>

                    <h2 className="font-bold text-cream text-4xl md:text-5xl leading-tight mb-6">
                        Editing Projects that hit differently.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {links.map((link, index) => (
                        <motion.div
                            key={index}
                            className="relative overflow-hidden rounded-xl aspect-video"
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{
                                duration: 0.55,
                                delay: index * 0.08,
                                ease: "easeOut",
                            }}
                        >

                            {playing === index ? (

                                <iframe
                                    src={`https://www.youtube.com/embed/${link.videoId}?autoplay=1&rel=0`}
                                    title={`YouTube video ${index + 1}`}
                                    className="w-full h-full border-0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />

                            ) : (

                                <button
                                    onClick={() => setPlaying(index)}
                                    className="relative w-full h-full block group cursor-pointer"
                                    aria-label={`Play video ${index + 1}`}
                                >

                                    {/* YouTube Thumbnail */}
                                    <img
                                        src={`https://img.youtube.com/vi/${link.videoId}/maxresdefault.jpg`}
                                        alt=""
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />


                                    {/* Play Button */}
                                    <div className="absolute inset-0 flex items-center justify-center">

                                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/95 flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">

                                            <svg
                                                className="w-7 h-7 md:w-8 md:h-8 ml-1 text-black"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path d="M8 5v14l11-7z" />
                                            </svg>

                                        </div>

                                    </div>

                                </button>

                            )}

                        </motion.div>
                    ))}

                </div>

            </Wrapper>
        </section>
    )
}

