"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { projects } from "../data/data.json";

export default function ProjectsPage() {
    const videoRefs = useRef([]);

    useEffect(() => {
        // reproducimos y pausamos para mostrar el primer frame
        videoRefs.current.forEach((video) => {
            if (video) {
                video.play()
                    .then(() => {
                        video.pause();
                        video.currentTime = 0;
                    })
                    .catch((err) => {
                        console.error("Video autoplay blocked", err);
                    });
            }
        });
    }, []);

    const handleMouseEnter = (video) => video && video.play();
    const handleMouseLeave = (video) => {
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    };

    return (
        <section className="p-8">
            <div className="columns-1 md:columns-2 gap-6 space-y-6">
                {projects.map((project, index) => (
                    <div key={project.id} className="break-inside-avoid">
                        <Link href={`/projects/${project.id}`}>
                            <div
                                className="relative w-full h-auto cursor-pointer"
                                onMouseEnter={() =>
                                    handleMouseEnter(videoRefs.current[index])
                                }
                                onMouseLeave={() =>
                                    handleMouseLeave(videoRefs.current[index])
                                }
                            >
                                <video
                                    ref={(el) => (videoRefs.current[index] = el)}
                                    src={`/${project.video}`}
                                    muted
                                    loop
                                    playsInline
                                    preload="auto"
                                    className="w-full h-auto object-cover"
                                />
                                <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xl font-sohne z-10 pointer-events-none text-center">
                                    {project.name}
                                </h3>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
