import Image from "next/image";
import { projectsData } from "../../projetos/projectsData";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export default function ProjectPage({ params }) {
  // Busca o projeto correspondente ao slug
  const project = projectsData[params.slug];

  if (!project) {
    return <div>Projeto não encontrado</div>;
  }

  return (
    <>
      <section className="h-[70vh] flex flex-wrap items-start content-end justify-between gap-12 p-8">
        <div className="flex flex-col gap-1.5">
          <p className="text-xs uppercase tracking-wide text-gray-400">Projeto</p>
          <h1 className="text-lg">{project.title}</h1>
        </div>

        <div className="flex flex-col gap-1.5">
          <p className="text-xs uppercase tracking-wide text-gray-400">Tempo de projeto</p>
          <h1 className="text-lg">{project.year}</h1>
        </div>

        <div className="flex flex-col gap-1.5">
          <p className="text-xs uppercase tracking-wide text-gray-400">Função</p>
          <h1 className="text-lg">{project.role}</h1>
        </div>

        <div className="flex flex-col gap-1.5 max-w-[40%]">
          <p className="text-xs uppercase tracking-wide text-gray-400">Sobre</p>
          <p className="leading-8 text-lg">{project.about}</p>
        </div>
      </section>

      {/* Exibe as imagens do projeto */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
        {project.images.map((image, index) => {
          // Lógica para alternar entre 1 e 2 colunas
          const isSingleColumn = index % 3 === 0; // 1 imagem a cada 3 (0, 3, 6, ...)
          const isDoubleColumn = !isSingleColumn; // 2 imagens nas posições 1, 2, 4, 5, ...

          return (
            <div
              key={index}
              className={`relative ${isSingleColumn
                ? "w-full h-[90vh] col-span-2" // Imagem única, ocupa 100% da largura
                : "h-[70vh] col-span-1" // Imagem em par, ocupa 50% da largura
                }`}
            >
              <Image
                src={image}
                alt={`${project.title} - Imagem ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          );
        })}
      </main>`

      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <a
          href={project.caseStudyLink} // Substitua pelo link externo desejado
          target="_blank" // Abre o link em uma nova aba
          rel="noopener noreferrer" // Boa prática para links externos
          className="bg-black text-white text-sm px-6 py-3 rounded-full shadow-lg hover:bg-[#1a1a1a] transition-colors flex gap-2 items-center"
        >
          <ArrowUpRight size={20} />
          Ver estudo de caso detalhado
        </a>
      </div>`
    </>
  );
}