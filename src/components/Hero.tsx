import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <div className="bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto pt-20 pb-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2">
        <div className="pt-6 md:pt-32 justify-center text-center sm:justify-start sm:text-start">
          <h1 className="text-5xl font-bold">
          Hachem Dhawadi<br />{" "}
          {/*<span className="text-rose-500 font-extrabold">Dhawadi</span>*/}
          </h1>
          <p className="pt-6 text-base w-auto sm:w-10/12 md:w-10/12 dark:text-neutral-400">
          Je suis étudiant en deuxième cycle d&#39;ingénierie. Actuellement, je suis à la recherche
           d&#39;une opportunité de stage pour acquérir une expérience professionnelle enrichissante.
            Je suis extrêmement motivé à mettre en pratique mes connaissances et à contribuer 
            activement au succès de l&#39;entreprise qui m&#39;accueillera en alternance.
          </p>
          <div className="flex flex-auto pt-10 gap-2 min-w-[350px] justify-center sm:justify-start">
            <div>
              <Link href="DhawadiHachemCv.pdf" target="_blank">
                <button className="bg-black dark:bg-white text-white dark:text-black text-base rounded-full px-4 p-2 font-medium">
                Télécharger CV
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center mt-2">
          <Image
            src="/images/hero/hachemcv2.png"
            alt="Image hero description"
            width={470}
            height={400}
            quality={75}
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}
