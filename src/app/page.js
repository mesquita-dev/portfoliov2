import ProjectCard from "./components/ProjectCard";
import { projectsData } from "./projetos/projectsData";

export default function Home() {
  return (
    <>
      <section
        className="h-[75vh] flex items-end justify-end p-8"
        role="region"
        aria-labelledby="intro-title"
      >
        <h1
          id="intro-title"
          className="text-gray-300  max-w-[524px] leading-8 "
        >
          Lucas é um designer multidisciplinar que cria produtos do zero ao um,
          com o objetivo de criar experiências memoráveis ​​e inesquecíveis para
          as pessoas e deixar sua marca no mundo, mesmo que de forma invisível.
        </h1>
      </section>

      <main className="p-8 flex flex-col gap-16 sm:gap-6">
        {/* Umbrella Intranet */}
        <ProjectCard
          slug="umbrella-intranet"
          project={projectsData["umbrella-intranet"]}
          className="custom-class"
        />

        {/* Sessão de Projetos */}
        <section
          className="grid grid-cols-1 md:grid-cols-[6fr_3fr] gap-16 sm:gap-6"
          role="region"
          aria-labelledby="projects-title"
        >
          <h2 id="projects-title" className="sr-only">
            Projetos de Design
          </h2>
          <ProjectCard
            slug="ubyfol"
            project={projectsData["ubyfol"]}
            className="custom-class"
          />
          <ProjectCard
            slug="rgp"
            project={projectsData["rgp"]}
            className="custom-class"
          />
        </section>

        {/* Outra Sessão de Projetos */}
        <section
          className="grid grid-cols-1 md:grid-cols-[3fr_6fr] gap-16 sm:gap-6"
          role="region"
          aria-labelledby="more-projects-title"
        >
          <h2 id="more-projects-title" className="sr-only">
            Mais Projetos de Design
          </h2>
          <ProjectCard
            slug="roof"
            project={projectsData["roof"]}
            className="custom-class"
          />
          <ProjectCard
            slug="crypto"
            project={projectsData["crypto"]}
            className="custom-class"
          />
        </section>
      </main>
    </>
  );
}