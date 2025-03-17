"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProjectCard({ slug, project, className }) {
    const [isHovered, setIsHovered] = useState(false);

    if (!project || !project.thumb) {
        return (
            <div className={className}>
                <p>Projeto não encontrado ou sem imagem thumb.</p>
            </div>
        );
    }

    return (
        <article role="article" aria-labelledby={`${slug}-title`} className={className}>
            <Link
                href={`/projetos/${slug}`}
                className="relative flex flex-col gap-2 h-full"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative w-full h-[30vh] sm:h-[90vh] flex items-center justify-center overflow-hidden">
                    <Image
                        src={project.thumb}
                        alt={project.description || "Imagem do projeto"}
                        fill
                        style={{
                            objectFit: "cover",
                            transform: isHovered ? "scale(1.1)" : "scale(1)",
                            transition: "transform 0.3s ease"
                        }}
                        className="rounded-lg"
                        priority={true}
                    />
                    {isHovered && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white text-lg font-semibold bg-black bg-opacity-75 px-4 py-2 rounded-lg">
                                Ver Projeto
                            </span>
                        </div>
                    )}
                </div>

                <div className="flex justify-between items-center">
                    <h2 id={`${slug}-title`}>{project.title}</h2>
                    <div className="flex gap-2 text-gray-400 text-xs sm:text-sm">
                        <time dateTime={project.year}>{project.year}</time>
                        <span aria-hidden="true">•</span>
                        <p>{project.role}</p>
                    </div>
                </div>
            </Link>
        </article>
    );
}