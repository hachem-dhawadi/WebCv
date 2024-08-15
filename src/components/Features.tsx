import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/solid";

const contents = [
  {
    title: "Application en JavaFx/Symfony/Flutterflow",
    description:
      "Développement d'une application multiplateforme pour la gestion des recrutements",
    features: [
      "Lacus eu mauris quisque tortor torquent",
      "Lorem ipsum dolor sit amet consectetur",
      "Lacus eu mauris quisque tortor torquent",
    ],
    image: "/images/features/m2.svg", // 2 15
    order: false,
  },
  {
    title: "Application en React Js/Native/Laravel",
    description:
      "Développement d'une application Web et Mobile pour la gestion des files d'attente",
    features: [
      "But I must explain to you how all this mistaken",
      "Voluptatum deleniti atque corrupti quos",
      "He endures pains to avoid worse pains",
    ],
    image: "/images/features/m3.svg",
    order: true,
  },
  {
    title: "Application en Flutter",
    description:
      "Développement d'une application Mobile planification des réunions.",
    features: [
      "Sed ut perspiciatis unde omnis iste natus",
      "Quis autem vel eum iure reprehenderit",
      "Consequuntur magni dolores eos qui ratione",
    ],
    image: "/images/features/m14.svg", // 12 13 14
    order: false,
  },
  {
    title: "Application en Flutter",
    description:
      "Développement d'une application Mobile d’inscription des enseignants et d’étudiant.",
    features: [
      "Sed ut perspiciatis unde omnis iste natus",
      "Quis autem vel eum iure reprehenderit",
      "Consequuntur magni dolores eos qui ratione",
    ],
    image: "/images/features/m9.svg", // 9 10 11
    order: true,
  },
];

export function Features() {
  return (
    <div className="bg-white dark:bg-neutral-900" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-x-40 pt-16 pb-16">
        <h2 className="text-4xl font-bold text-center">Projet Réalisés</h2>
        {/*<p className="pt-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          Halley nunc pulvinar lobortis duis. Leo mollis neque ullamcorper
          aliquam sem nullam, elementum vestibulum augue placerat.
        </p>*/}

        {contents.map((content) => (
          <div
            key={content.title}
            className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-28 items-center"
          >
            <div
              className={`pt-8 md:pt-16 ${
                content.order ? "order-1 md:order-2" : "order-1"
              }`}
            >
              <h1 className="text-2xl font-bold">{content.title}</h1>
              <p className="pt-6 pb-6 text-base dark:text-neutral-400">
                {content.description}
              </p>

                <ul className="font-medium space-y-1 flex-1">
                  {/*content.features.map((feature) => (
                    <li key={feature} className="leading-6 flex">
                      <CheckIcon className="mt-2 w-3 h-3 text-rose-500 shrink-0" />
                      <span className="ml-3 dark:text-neutral-400">
                        {feature}
                      </span>
                    </li>
                  ))*/}
                </ul>
            </div>
            <div
              className={`order-1 pt-8 md:pt-16 ${
                content.order ? "ml-0 2xl:-ml-40" : "mr-0 2xl:-mr-40"
              }`}
            >
              <div className="flex items-center">
                <Image
                  src={content.image}
                  alt="Image description"
                  width={500}
                  height={1080}
                  quality={75}
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
