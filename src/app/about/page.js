export default function About() {
    const experiences = [
        {
            company: "Granto Seguros",
            role: "Product Designer Pleno",
            period: "Dez. 2024 — Atualmente"
        },
        {
            company: "Granto Seguros",
            role: "UX/UI Designer",
            period: "Jun. 2023 — Dez. 2024"
        },
        {
            company: "Granto Seguros",
            role: "Web Designer",
            period: "Dez. 2022 — Jun. 2023"
        },
        {
            company: "Agência SIX",
            role: "UI/UX Designer e Desenvolvedor Front-End",
            period: "Jun. 2022 — Set. 2022"
        }
    ];

    return (
        <main className="overflow-hidden">
            <section className="flex flex-col lg:flex-row justify-between w-full px-8 pt-52 md:pt-32 min-h-[75vh] gap-8 sm:gap-12">
                {/* SOBRE MIM */}
                <article className="flex flex-col gap-3 w-full max-w-2xl lg:max-w-[400px] 2xl:max-w-[550px]">
                    <h1 className="text-xs uppercase tracking-wide text-gray-300">Sobre mim</h1>
                    <p className="text-sm sm:text-base leading-6 sm:leading-7">
                        Atuando há mais de 3 anos com produtos digitais, minha principal missão é ajudar as pessoas mesmo que de forma invisível.
                        Sou um designer multidisciplinar que atua desde a descoberta do problema ou oportunidade até a entrega para o mercado.
                        A minha principal virtude é a escutatória para entender a dor do nosso usuário, seja ele direto ou indireto.
                    </p>
                </article>

                {/* EXPERIÊNCIA */}
                <article className="flex flex-col gap-3 w-full max-w-2xl lg:max-w-[380px] 2xl:max-w-[550px]">
                    <h1 className="text-xs uppercase tracking-wide text-gray-300">Experiência</h1>
                    <ul className="flex flex-col">
                        {experiences.map((exp, index) => (
                            <li
                                key={index}
                                className="border-b border-[#202020] py-3 first:pt-0 last:border-b-0"
                            >
                                <div className="flex justify-between gap-2 mb-1 sm:mb-0">
                                    <h2 className="text-sm sm:text-base">{exp.company}</h2>
                                    <p className="text-xs text-gray-300">{exp.period}</p>
                                </div>
                                <h3 className="text-xs text-gray-300">{exp.role}</h3>
                            </li>
                        ))}
                    </ul>
                </article>

                {/* HABILIDADES */}
                <article className="flex flex-col gap-3 w-full md:w-fit">
                    <h1 className="text-xs uppercase tracking-wide text-gray-300 w-fit">Habilidades</h1>
                    <div className="flex flex-row justify-between sm:justify-normal lg:flex-col xl:flex-row sm:gap-44 lg:gap-2 xl:gap-10 2xl:gap-16 w-full md:w-fit">
                        <ul className="flex flex-col gap-2 w-[166px] md:w-fit text-sm sm:text-base">
                            <li>Pesquisa com usuários</li>
                            <li>Moodboards</li>
                            <li>Arquitetura de informação</li>
                            <li>Wireframes</li>
                            <li>Jornadas de usuário</li>
                            <li>Teste de usabilidade</li>
                            <li>Desk Research</li>
                        </ul>
                        <ul className="flex flex-col gap-2 w-fit text-sm sm:text-base">
                            <li>Análise de Insights</li>
                            <li>UI Design</li>
                            <li>Teste A/B</li>
                            <li>Figma</li>
                            <li>Miro</li>
                            <li>Ferramentas Low-Code</li>
                            <li>HTML / CSS / JS / React</li>
                        </ul>
                    </div>
                </article>
            </section>
        </main>
    );
}
