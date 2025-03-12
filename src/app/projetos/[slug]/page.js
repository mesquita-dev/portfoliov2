import Image from "next/image";
import { projectsData } from "../../projetos/projectsData";

export default function ProjectPage({ params }) {
  // Busca o projeto correspondente ao slug
  const project = projectsData[params.slug];

  if (!project) {
    return <div>Projeto não encontrado</div>;
  }

  return (
    <>
      <section className="h-[50vh] flex flex-wrap items-start content-end justify-between gap-12 p-8">
        <div className="flex flex-col gap-1.5">
          <p className="text-xs uppercase tracking-wide text-gray-400">Projeto</p>
          <h1>{project.title}</h1>
        </div>


        <div className="flex flex-col gap-1.5">
          <p className="text-xs uppercase tracking-wide text-gray-400">Tempo de projeto</p>
          <h1>{project.year}</h1>
        </div>

        <div className="flex flex-col gap-1.5">
          <p className="text-xs uppercase tracking-wide text-gray-400">Função</p>
          <h1>{project.role}</h1>
        </div>

        <div className="flex flex-col gap-1.5 max-w-[40%]">
          <p className="text-xs uppercase tracking-wide text-gray-400">Sobre</p>
          <p className="leading-relaxed">{project.about}</p>
        </div>
      </section>


      {/* Exibe as imagens do projeto */}
      <main className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {project.images.map((image, index) => (
          <div key={index} className="relative h-[300px]">
            <Image
              src={image}
              alt={`${project.title} - Imagem ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>
        ))}
      </main>
    </>
  );
}