"use client";

import { useEffect, useState } from "react";

export default function Footer() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="p-8 flex justify-between mt-6 sm:mt-10">
            <address className="not-italic">
                <ul className="flex flex-col gap-1 text-xs sm:text-sm">
                    <li>Lucas Mesquita</li>
                    <li>Todos os direitos reservados © {new Date().getFullYear()}</li>
                    <li>Disponível para novos trabalhos</li>
                    <li>
                        <a href="mailto:lmesquita2k@gmail.com" className="hover:text-gray-300">
                            lmesquita2k@gmail.com
                        </a>
                    </li>
                    <li>{time.toLocaleTimeString("pt-BR", { timeZone: "America/Sao_Paulo" })} — Brasil</li>
                </ul>
            </address>

            <nav aria-label="Links para redes sociais">
                <ul className="flex flex-col gap-2 text-xs sm:text-sm">
                    <li>
                        <a href="https://linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://medium.com/@seu-perfil" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                            Medium
                        </a>
                    </li>
                    <li>
                        <a href="/curriculo.pdf" target="_blank" className="hover:text-gray-300">
                            Currículo
                        </a>
                    </li>
                    <li>
                        <a href="https://www.figma.com/@seu-figma" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                            Figma Community
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}
