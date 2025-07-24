"use client"
import React from "react"
import { projects } from "../../../data/data.js"
import Image from "next/image"

export default function AltProjects(second) {
    return (
        <section className="w-screen h-screen flex bg-black text-white">
            <div className="w-1/3"></div>
            <div className="w-2/3 grid grid-cols-2 ">
                {projects.map((project, index) => (
                    <div key={index}>
                        <Image 
                            src={project.image}
                            alt={project.title}
                            width={300}
                            height={500}
                            className="object-cover"
                        />

                    </div>
                ))}

            </div>
        </section>
    )

}