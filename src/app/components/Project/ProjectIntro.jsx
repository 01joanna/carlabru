"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "../../../data/proyectos.js";

export default function ProjectIntro() {
    return (
        <section className="">
            {projects.map((project) => (
                <Link
                    key={project.id}
                    href={`/${project.id}`}
                    className="block w-screen"
                >
                    <div className="bg-black flex flex-col items-center justify-center relative">
                        <div className="sticky top-0 z-10 bg-black text-white p-3 uppercase tracking-wider flex justify-between text-xs w-full border-b border-gray-800">
                            <h2 className="font-bold">{project.name}</h2>
                            <div className="flex gap-10">
                                <p>{project.category}</p>
                                <p>{project.category}</p>
                                <p>{project.category}</p>
                            </div>
                        </div>

                        <div className="flex-grow flex items-center justify-center py-20">
                            <div className="w-[1200px] h-[700px] relative">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </section>
    );
}
