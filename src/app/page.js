import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="h-[75vh] flex items-end justify-end p-8">
        <h1 className="text-gray-400 font-medium max-w-[530px] leading-7">
          Lucas é um designer multidisciplinar que cria produtos do 0 ao 1 com o objetivo de criar experiências memoráveis ​​e inesquecíveis para as pessoas e deixar sua marca no mundo, mesmo que de forma invisível.
        </h1>
      </section>

      <main className="p-8 flex flex-col gap-16 sm:gap-6">
        <article className="relative flex flex-col gap-2">
          <Image
            src="/Intranet.png"
            alt="Dashboard da Umbrella Intranet para visualização de demandas"
            width={2500}
            height={1200}
            quality={100}
            style={{ objectFit: "cover" }}
            className="rounded-lg w-full max-w-[100%] max-h-[100vh] h-auto mx-auto"
            priority
          />

          <div className="flex justify-between">
            <h2>Umbrella Intranet</h2>
            <div className="flex gap-2 text-gray-400 text-sm">
              <time dateTime="2024">2024</time>
              <span aria-hidden="true">•</span>
              <p>Product Design</p>
            </div>
          </div>
        </article>

        {/* Seção 1 */}
        <section className="grid grid-cols-1 md:grid-cols-[6fr_3fr] gap-16 sm:gap-6">
          <article className="relative flex flex-col gap-2">
            <Image
              src="/Design System.png"
              alt="Imagens de alguns componentes que são utilizados no Design System"
              width={1440}
              height={750}
              quality={100}
              style={{ objectFit: "cover" }}
              className="rounded-lg w-full max-w-[100%] h-full mx-auto"
              priority
            />

            <div className="flex justify-between">
              <h2>Roof</h2>
              <div className="flex gap-2 text-gray-400 text-sm">
                <time dateTime="2024">2024</time>
                <span aria-hidden="true">•</span>
                <p>Product Design</p>
              </div>
            </div>
          </article>

          <article className="relative flex flex-col gap-2">
            <Image
              src="/rgp.png"
              alt="Dashboard da Umbrella Intranet para visualização de demandas"
              width={1440}
              height={750}
              quality={100}
              style={{ objectFit: "cover" }}
              className="rounded-lg w-full max-w-[100%] h-full mx-auto"
              priority
            />

            <div className="flex justify-between">
              <h2>RGP</h2>
              <div className="flex gap-2 text-gray-400 text-sm">
                <time dateTime="2024">2024</time>
                <span aria-hidden="true">•</span>
                <p>UI Design</p>
              </div>
            </div>
          </article>
        </section>

        {/* Seção 2 */}
        <section className="grid grid-cols-1 md:grid-cols-[3fr_6fr] gap-16 sm:gap-6">
          <article className="relative flex flex-col gap-2">
            <Image
              src="/Design System.png"
              alt="Imagens de alguns componentes que são utilizados no Design System"
              width={1440}
              height={750}
              quality={100}
              style={{ objectFit: "cover" }}
              className="rounded-lg w-full max-w-[100%] h-full mx-auto"
              priority
            />

            <div className="flex justify-between">
              <h2>Roof</h2>
              <div className="flex gap-2 text-gray-400 text-sm">
                <time dateTime="2024">2024</time>
                <span aria-hidden="true">•</span>
                <p>Product Design</p>
              </div>
            </div>
          </article>

          <article className="relative flex flex-col gap-2">
            <Image
              src="/crypto.png"
              alt="Dashboard da Umbrella Intranet para visualização de demandas"
              width={1440}
              height={750}
              quality={100}
              style={{ objectFit: "cover" }}
              className="rounded-lg w-full max-w-[100%] h-full mx-auto"
              priority
            />

            <div className="flex justify-between">
              <h2>Crypto App</h2>
              <div className="flex gap-2 text-gray-400 text-sm">
                <time dateTime="2024">2023</time>
                <span aria-hidden="true">•</span>
                <p>UI Design</p>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}