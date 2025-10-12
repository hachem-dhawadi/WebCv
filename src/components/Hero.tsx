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
         I am a final-year engineering student seeking an internship to gain professional experience.
          I am eager to apply my knowledge and contribute to the success of the company providing this opportunity.

          </p>
          <div className="flex flex-auto pt-10 gap-2 min-w-[350px] justify-center sm:justify-start">
            <div>
              <Link href="Hachem_Dhawadi_Resume.pdf" target="_blank">
                                <button className="bg-[#2563EB] text-white px-5 py-2 rounded-lg 
                           shadow-md hover:bg-[#1d4ed8] transition-transform
                           transform hover:scale-105">
                Download CV
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center mt-2">
        <img src="/images/hero/user5.gif" alt="Image hero description" width={500} height={400} />

        </div>
      </div>
    </div>
  );
}
