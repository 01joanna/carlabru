"use client"
import React from "react"
import { useEffect } from "react"

export default function Home() {

    useEffect(() => {
        window.dispatchEvent(new Event("resize"));
    }, []);


    return (
        <section className="relative w-screen h-screen overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-screen -z-10">
                <iframe
                    src="https://player.vimeo.com/video/882106664?background=1&autoplay=1&loop=1&muted=1"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    className="w-full h-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-150"
                ></iframe>
            </div>
        </section>
    )
}