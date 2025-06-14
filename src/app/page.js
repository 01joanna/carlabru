'use client'
import { useEffect } from "react";
import Navigation from "./components/Navigation/Navigation.jsx";

export default function Page() {

  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);


  return (
      <>
        <Navigation />
      <section className="relative w-screen h-screen overflow-hidden z-10">
        <div className="absolute top-0 left-0 w-full h-screen">
          <iframe
            src="https://player.vimeo.com/video/882106664?background=1&autoplay=1&loop=1&muted=1"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            className="w-full h-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-150"
          ></iframe>
        </div>
      </section>
      </>
      );
}
