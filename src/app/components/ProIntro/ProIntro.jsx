"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";

export default function ProIntro({ projects }) {
    useEffect(() => {
        const videos = document.querySelectorAll("video[data-autoplay]");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const video = entry.target;
                    if (entry.isIntersecting) {
                        video.play().catch((e) => console.log("Can't autoplay", e));
                    } else {
                        video.pause();
                    }
                });
            },
            { threshold: 0.5 } // al menos el 50% visible
        );

        videos.forEach((video) => observer.observe(video));

        return () => {
            videos.forEach((video) => observer.unobserve(video));
        };
    }, []);

    return (
        <section className="w-full h-auto bg-white flex flex-col">
            {projects.map((project, index) => {
                const isEven = index % 2 === 0;
                const bgColor = isEven ? "bg-black" :  "bg-white";
                const textColor = isEven ? "text-white" : "text-black" ;

                return (
                    <div key={project.id} 
                    className={`w-screen h-auto flex flex-col items-center justify-center ${bgColor} py-20`}
                    >
                        <div className="relative h-auto flex flex-col items-center justify-center w-full">
                        <h3 className={`absolute top-1/2 z-20 text-4xl ${textColor}`}>
                                {project.name} - {project.by}
                            </h3>
                            <video
                                data-autoplay
                                className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-lg shadow-lg"
                                src={project.video}
                                muted
                                playsInline
                                preload="none"
                            />
                        </div>
                    </div>
                );
            }
            )}
        </section>
    );
}
