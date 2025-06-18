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
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-[2.9] lg:scale-150">
            <iframe
              src="https://player.vimeo.com/video/882106664?background=1&autoplay=1&loop=1&muted=1"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="w-[100vw] h-[100vh] pointer-events-none"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
