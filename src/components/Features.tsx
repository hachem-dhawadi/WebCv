'use client';

import { useState } from "react";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const projects = [
    {
    title: "Mearn stack Application - StudyHub -",
    description:
      "Developing a full-featured Bootcamp learning platform with real-time chat, video meetings, AI assistant, and machine learning integration",
    features: [
      "Lacus eu mauris quisque tortor torquent",
      "Lorem ipsum dolor sit amet consectetur",
      "Lacus eu mauris quisque tortor torquent",
    ],
    image: "/images/features/study.svg",
    order: true,
    gitUrl: "https://github.com/codezella-hub/BootcampAppBack",
    category: ["Web"],
  },
      {
    title: "Mean stack Application - Eco -",
    description:
      "Eco is an application based on a microservices architecture using Spring Boot, Spring Cloud, Eureka, Config Server, and potentially Keycloak for security. The project aims to demonstrate the modularity, scalability, and maintainability of a distributed system.",
    features: [
      "Lacus eu mauris quisque tortor torquent",
      "Lorem ipsum dolor sit amet consectetur",
      "Lacus eu mauris quisque tortor torquent",
    ],
    image: "/images/features/eco.svg",
    order: false,
    gitUrl: "https://github.com/TuniCoder/Projet_Microservice",
    category: ["Web"],
  },
  {
    title: "JavaFx/Symfony/Flutterflow Application - InnoHire -",
    description:
      "Development of a cross-platform application for recruitment management",
    features: [
      "Lacus eu mauris quisque tortor torquent",
      "Lorem ipsum dolor sit amet consectetur",
      "Lacus eu mauris quisque tortor torquent",
    ],
    image: "/images/features/m2.svg",
    order: true,
    gitUrl: "https://github.com/hachem-dhawadi/innoHire-Desktop",
    category: ["Desktop", "Mobile", "Web"],
  },
  {
    title: "React Js/Native/Laravel Application - Essaf -",
    description:
      "Development of a Web and Mobile application for queue management",
    features: [
      "But I must explain to you how all this mistaken",
      "Voluptatum deleniti atque corrupti quos",
      "He endures pains to avoid worse pains",
    ],
    image: "/images/features/m3.svg",
    order: false,
    gitUrl: "https://github.com/hachem-dhawadi/Frontend-Web-Development-React.js",
    category: ["Mobile", "Web"],
  },
  {
    title: "Flutter Application - Connecti -",
    description:
      "Development of a Mobile application for meeting scheduling.",
    features: [
      "Sed ut perspiciatis unde omnis iste natus",
      "Quis autem vel eum iure reprehenderit",
      "Consequuntur magni dolores eos qui ratione",
    ],
    image: "/images/features/m14.svg",
    order: true,
    gitUrl: "https://github.com/hachem-dhawadi/Connecti",
    category: ["Mobile"],
  },
  {
    title: "Flutter Application - Rasem -",
    description:
      "Development of a Mobile application for teacher and student registration.",
    features: [
      "Sed ut perspiciatis unde omnis iste natus",
      "Quis autem vel eum iure reprehenderit",
      "Consequuntur magni dolores eos qui ratione",
    ],
    image: "/images/features/m9.svg",
    order: false,
    gitUrl: "https://www.flutterflow.io/",
    category: ["Mobile"],
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
    image: "/images/features/pid.svg",
    order: true,
    gitUrl: "https://github.com/hachem-dhawadi/LineFollowerPid",
    category: ["Robotics"],
  },
    {
    title: "RC Robot",
    description:
      "Development of a Remote-Controlled Car Robot Using a PS4 Controller",
    features: [
      "Sed ut perspiciatis unde omnis iste natus",
      "Quis autem vel eum iure reprehenderit",
      "Consequuntur magni dolores eos qui ratione",
    ],
    image: "/images/features/rccar.svg",
    order: false,
    gitUrl: "https://github.com/hachem-dhawadi/RC-car",
    category: ["Robotics"],
  },
];

export function Features() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Define the custom order for categories
  const categoryOrder = ['Web', 'Mobile', 'Desktop', 'Robotics'];
  
  // Get unique categories and sort them according to custom order
  const categories = Array.from(new Set(projects.flatMap(project => project.category)))
    .sort((a, b) => {
      const indexA = categoryOrder.indexOf(a);
      const indexB = categoryOrder.indexOf(b);
      return (indexA - indexB);
    });

  // Filter projects based on selected category
  const filteredProjects = selectedCategory
    ? projects.filter(project => project.category.includes(selectedCategory))
    : projects;
  return (
    <div className="bg-white dark:bg-neutral-900" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-x-40 pt-16 pb-16">
        <h2 className="text-4xl font-bold text-center mb-8">Completed Projects</h2>

        {/* Category Filter Buttons in specific order */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            key="all"
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full transition-colors ${
              !selectedCategory 
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-neutral-800 hover:bg-gray-300 dark:hover:bg-neutral-700'
            }`}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-neutral-800 hover:bg-gray-300 dark:hover:bg-neutral-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

       {filteredProjects.map((content) => (
          <div
            key={content.title}
            className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-28 items-center mb-12"
          >
            <div
              className={`pt-8 md:pt-16 ${content.order ? "order-1 md:order-2" : "order-1"}`}
            >
              <h1 className="text-2xl font-bold">{content.title}</h1>
              <p className="pt-6 pb-6 text-base dark:text-neutral-400">
                {content.description}
              </p>
            <Link href={content.gitUrl} target="_blank">
                <button className="bg-[#2563EB] text-white px-5 py-2 rounded-lg 
                           shadow-md hover:bg-[#1d4ed8] transition-transform
                           transform hover:scale-105">
                  View Project
                </button>
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
