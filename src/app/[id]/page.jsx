"use client"
import React from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { projects } from "@/app/data/data.js"

export default function Single() {
    return (
        <section className="w-screen h-screen bg-black mt-20 flex flex-col">
            <div className="flex w-full h-full justify-center">
                <iframe
                    src="https://player.vimeo.com/video/882106664"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    className="w-[50%] h-full"
                ></iframe>
                <div className="w-[35%] h-screen font-oatmealLight flex flex-col justify-center px-10 overflow-y-auto">
                    <p className="text-xl uppercase flex gap-4 items-center">
                        <FaArrowLeftLong />
                        <a href="/projects" className="hover:font-oatmealMedium">Volver a Proyectos</a>
                    </p>
                    <h1 className="text-5xl uppercase font-oatmealRegular w-full pt-20">
                        Titulo largo para probar
                    </h1>
                    <h2 className="text-xl mt-4">Videoclip de Pepe pepe</h2>
                    <h3 className="mb-10 text-2xl">2023</h3>
                    <div className="text-md space-y-1 uppercase tracking-wider">
                        <p>Dirección: Pepito Pepe</p>
                        <p>Producción: Lorem Ipsum</p>
                        <p>Dirección de fotografía: Lorem Ipsum</p>
                        <p>Montaje: Lorem Ipsum</p>
                        <p>Color: Lorem Ipsum</p>
                        <p>Sonido: Lorem Ipsum</p>
                    </div>
                    <div>
                        <p className="mt-10 text-2xl mr-10">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis felis id imperdiet convallis. Nullam lacinia mattis tellus, sed eleifend mauris commodo sollicitudin.
                        </p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-6 px-10 py-20'>
                {projects
                    .filter((project) => project.id === 3)
                    .flatMap((project) =>
                        project.images.map((image, imgIndex) => (
                            <div key={`${project.id}-${imgIndex}`} className="w-full h-auto relative">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))
                    )
                }
            </div>

        </section >
    )
}
