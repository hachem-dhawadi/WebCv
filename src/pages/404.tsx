import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div
        className="bg-white dark:bg-neutral-900 w-full px-4 pt-32 pb-16"
        id="faq"
      >
        <h2 className="text-4xl font-bold text-center">404 - Not Found</h2>

        <p className="pt-6 pb-16 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
        Je suppose que vous avez mal orthographié quelque chose. Pouvez-vous vérifier à nouveau cette URL ?
        </p>
        <Image
          src="/images/404/er1.svg"
          alt="Image 404"
          width={1920}
          height={1080}
          quality={75}
          sizes="100vw"
          className="w-[350px] md:w-4/12 justify-center text-center mx-auto"
        />
        <div className="mt-16 text-center">
          <Link href="/">
            <button className="bg-black dark:bg-white text-white dark:text-black text-base rounded-full px-4 p-2 font-medium">
              Return Home
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
