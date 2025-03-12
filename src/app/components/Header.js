"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Header() {
    const dotRef = useRef(null);
    const menuRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);

    // Animação da bolinha com GSAP
    useEffect(() => {
        gsap.to(dotRef.current, {
            scale: 1.5,
            opacity: 0.5,
            repeat: -1,
            yoyo: true,
            duration: 1.5,
            ease: "power1.inOut",
        });
    }, []);

    // Animação do menu mobile com GSAP
    useEffect(() => {
        if (menuOpen) {
            gsap.to(menuRef.current, {
                opacity: 1,
                y: 0,
                display: "flex",
                flexDirection: "column",
                duration: 0.5,
                ease: "power2.out",
            });
        } else {
            gsap.to(menuRef.current, {
                opacity: 0,
                y: -20,
                display: "none",
                duration: 0.3,
                ease: "power2.in",
            });
        }
    }, [menuOpen]);

    return (
        <header className="fixed z-50 w-full flex items-center justify-between lg:justify-normal p-4 px-8">
            <div className="h-8 lg:w-96 xl:w-2xl flex items-center">
                <div className="inline-flex items-center gap-2 bg-black text-white px-3 py-1.5 h-8 rounded-full text-sm w-fit">
                    <span className="flex h-2 w-2 items-center justify-center">
                        <span
                            ref={dotRef}
                            className="inline-flex rounded-full h-2 w-2 bg-green-500"
                        ></span>
                    </span>
                    <span className="font-medium whitespace-nowrap">Open to work</span>
                </div>
            </div>

            {/* Botão Menu Hambúrguer (Corrigido com as 3 linhas visíveis) */}
            <button
                className="sm:hidden flex flex-col items-center justify-center w-8 h-8 bg-black rounded-full"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span
                    className={`w-4 h-0.5 bg-white transition-transform duration-300 ${
                        menuOpen ? "rotate-45 translate-y-1.5" : ""
                    }`}
                ></span>
                <span
                    className={`w-4 h-0.5 bg-white my-1 transition-opacity duration-300 ${
                        menuOpen ? "opacity-0" : "opacity-100"
                    }`}
                ></span>
                <span
                    className={`w-4 h-0.5 bg-white transition-transform duration-300 ${
                        menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                    }`}
                ></span>
            </button>

            {/* Nav principal (ESCONDIDO em telas pequenas) */}
            <nav className="hidden sm:flex text-sm justify-center gap-10 py-2 px-6 bg-black rounded-full w-fit">
                <Link href="/" className="hover:text-gray-200">© Lucas Mesquita</Link>
                <Link href="/sobre" className="hover:text-gray-200">Sobre</Link>
                <a href="https://drive.google.com/file/d/1pQ26JV6tg-zMKyUQET9btAyaSgvBFD8b/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">Currículo</a>
                <a href="mailto:lmesquita2k@gmail.com" className="hover:text-gray-200">Enviar Email</a>
            </nav>

            {/* Menu Mobile (aparece quando o botão de hambúrguer for clicado) */}
            <nav
                ref={menuRef}
                className={`absolute top-14 right-8 w-44 bg-black text-white rounded-lg sm:hidden`}
            >
                <Link href="/" className="p-4" onClick={() => setMenuOpen(false)}>© Lucas Mesquita</Link>
                <Link href="/sobre" className="p-4" onClick={() => setMenuOpen(false)}>Sobre</Link>
                <a href="https://drive.google.com/file/d/1pQ26JV6tg-zMKyUQET9btAyaSgvBFD8b/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="p-4" onClick={() => setMenuOpen(false)}>Currículo</a>
                <a href="mailto:lmesquita2k@gmail.com" className="p-4" onClick={() => setMenuOpen(false)}>Enviar Email</a>
            </nav>
        </header>
    );
}
