import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ slug, project, className }) {
    return (
        <article role="article" aria-labelledby={`${slug}-title`} className={className}>
            <Link
                href={`/projetos/${slug}`}
                className="relative flex flex-col gap-2 h-full"
            >
                <div className="relative w-full h-[30vh] sm:h-[90vh]">
                    <Image
                        src={project.images[0]}
                        alt={project.description}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-lg"
                        priority
                    />
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