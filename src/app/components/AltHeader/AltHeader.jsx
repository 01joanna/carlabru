import { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function AltHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    // Cierra el menú si se hace clic fuera
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <header className="absolute top-0 right-0 lg:left-1/2 lg:-translate-x-1/2 -translate-y-1/2 z-20 w-screen h-auto text-md font-oatmealLight uppercase tracking-wider flex mt-14 bg-transparent text-white lg:mx-0 mx-10 justify-around">
            
            {/* Título solo en móvil */}
            <div className="lg:hidden flex items-center justify-around w-auto">
                <span className="pl-20 text-white font-oatmealLight tracking-wider text-2xl uppercase">
                    Carla Bru
                </span>
            </div>

            {/* NAV DESKTOP */}
            {/* CONTACTO: MAIL EN DESKTOP */}
            <a
                href="/"
                className="hidden lg:inline uppercase"
            >
                Inicio
            </a>
            <a
                href="/information"
                className="hidden lg:inline uppercase"
            >
                Bio
            </a>
            <a
                href="mailto:carla@ejemplo.com"
                className="hidden lg:inline uppercase"
            >
                Contacto
            </a>

            {/* BOTÓN HAMBURGUESA EN MOBILE */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden flex items-center border border-gray-400 rounded-lg px-4 py-2 ml-auto"
            >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* MENÚ MÓVIL */}
            {isOpen && (
                <div
                    ref={menuRef}
                    className="absolute top-full right-0 mt-2 bg-black text-white border border-gray-400 rounded-lg px-6 py-4 flex flex-col gap-4 lg:hidden z-30"
                >
                    <a href="/">Inicio</a>
                    <a href="/information">Información</a>
                    <a href="/projects">Proyectos</a>
                    <a
                        href="https://www.instagram.com/lacarlabru"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="uppercase"
                    >
                        Contacto
                    </a>
                </div>
            )}
        </header>
    );
}
