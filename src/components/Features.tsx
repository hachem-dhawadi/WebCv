import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const contents = [
  {
    title: "JavaFx/Symfony/Flutterflow Application",
    description:
      "Development of a cross-platform application for recruitment management",
    features: [
      "Lacus eu mauris quisque tortor torquent",
      "Lorem ipsum dolor sit amet consectetur",
      "Lacus eu mauris quisque tortor torquent",
    ],
    image: "/images/features/m2.svg", // 2 15
    order: false,
    gitUrl: "https://github.com/hachem-dhawadi/innoHire-Desktop",
  },
  {
    title: "React Js/Native/Laravel Application",
    description:
      "Development of a Web and Mobile application for queue management",
    features: [
      "But I must explain to you how all this mistaken",
      "Voluptatum deleniti atque corrupti quos",
      "He endures pains to avoid worse pains",
    ],
    image: "/images/features/m3.svg",
    order: true,
    gitUrl: "https://github.com/hachem-dhawadi/Frontend-Web-Development-React.js",
  },
  {
    title: "Flutter Application",
    description:
      "Development of a Mobile application for meeting scheduling.",
    features: [
      "Sed ut perspiciatis unde omnis iste natus",
      "Quis autem vel eum iure reprehenderit",
      "Consequuntur magni dolores eos qui ratione",
    ],
    image: "/images/features/m14.svg", // 12 13 14
    order: false,
    gitUrl: "https://github.com/hachem-dhawadi/Connecti",
  },
  {
    title: "Flutter Application",
    description:
      "Development of a Mobile application for teacher and student registration.",
    features: [
      "Sed ut perspiciatis unde omnis iste natus",
      "Quis autem vel eum iure reprehenderit",
      "Consequuntur magni dolores eos qui ratione",
    ],
    image: "/images/features/m9.svg", // 9 10 11
    order: true,
    gitUrl: "https://www.flutterflow.io/",
  },
  {
    title: "Line Follower Robot",
    description:
      "Development of a Line Follower Robot with PID control",
    features: [
      "Sed ut perspiciatis unde omnis iste natus",
      "Quis autem vel eum iure reprehenderit",
      "Consequuntur magni dolores eos qui ratione",
    ],
    image: "/images/features/pid.svg", // 9 10 11
    order: false,
    gitUrl: "https://github.com/hachem-dhawadi/LineFollowerPid",
  },
];

export function Features() {
  return (
    <div className="bg-white dark:bg-neutral-900" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-x-40 pt-16 pb-16">
        <h2 className="text-4xl font-bold text-center">Completed Projects</h2>

        {contents.map((content) => (
          <div
            key={content.title}
            className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-28 items-center"
          >
            <div
              className={`pt-8 md:pt-16 ${content.order ? "order-1 md:order-2" : "order-1"}`}
            >
              <h1 className="text-2xl font-bold">{content.title}</h1>
              <p className="pt-6 pb-6 text-base dark:text-neutral-400">
                {content.description}
              </p>
              <Link href={content.gitUrl} target="_blank">
                <h5 >
                {content.gitUrl ? "View project" : ""}
                </h5>
              </Link>

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
              className={`order-1 pt-8 md:pt-16 ${content.order ? "ml-0 2xl:-ml-40" : "mr-0 2xl:-mr-40"}`}
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
