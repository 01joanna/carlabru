"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { projects } from "../data/data.js";
import Link  from "next/link"
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsPage() {
    const [filter, setFilter] = useState("Todos");

    const filtered = filter === "Todos" ? projects : projects.filter((project) => project.category === filter);

    const categories = [
        "Todos",
        "Ficción",
        "Publicidad",
        "Videoclips"
    ];

    return (
        <section className=" w-1/2 py-20 px-10 flex flex-col gap-20 bg-black text-white">
            <div className="flex justify-center font-helvetica tracking-wider gap-20">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setFilter(category)}
                        className={`uppercase text-xs no-underline transition ${filter === category ? "font-bold" : ""
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="columns-1 row-span-full md:columns-2 gap-3 space-y-6">
                <AnimatePresence mode="wait">
                    {filtered.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="relative break-inside-avoid"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            <Link href={`/${project.id}`}>
                                <div className="cursor-pointer">
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        width={500}
                                        height={500}
                                        className="w-full h-full mb-4"
                                    />
                                    <div className="absolute z-50 top-1/2 translate-x-1/2 -translate-y-1/2 left-0 text-white font-helvetica justify-center mx-2 tracking-widest">
                                        <div className="flex flex-col top-1/2">
                                            <h2 className="text-2xl font-bold uppercase">
                                                {project.name}
                                            </h2>
                                            <p className="text-sm">{project.by}</p>
                                            <p className="text-sm">{project.year}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </section>
    );
}