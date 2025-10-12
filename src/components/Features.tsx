'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon, PlayCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";

const projects = [
  {
    title: "Autonomous Robot - SYH -",
    description:
      "Development of an autonomous and remotely controlled robot using ROS2 Humble. The system integrates SLAM (Slam Toolbox), Nav2 for autonomous navigation, ROS2 Control, LiDAR, and a YOLO-based AI for real-time object detection. The robot operates both autonomously and via a React Native mobile app connected through rosbridge_server, allowing remote teleoperation, live camera streaming, GPS tracking, and performance monitoring.",
    features: [
      "Implemented SLAM and Nav2 for autonomous navigation and mapping",
      "Integrated ROS2 Control, LiDAR, and camera with YOLO for object detection",
      "Developed a React Native app for remote teleoperation and live monitoring",
      "Deployed on real hardware powered by Raspberry Pi 4B",
    ],
    gallery: [
      "/images/features/gr.jpg",
      "/images/features/g1.jpg",
      "/images/features/r3.jpg",
      "/images/features/r2.jpg",  
      "/images/features/r6.jpg",
      "/images/features/m1.jpg",
      "/images/features/m2.jpg",
      "/images/features/m3.jpg",
      "/images/features/m4.jpg",
    ],
          videoUrl: "https://www.youtube.com/embed/97OOu0mUy18", // ✅ added this
    image: "/images/features/robot.png",
    order: false,
    gitUrl: "https://github.com/hachem-dhawadi/autonomous-robot", // or your actual repo link
    category: ["Robotics"],
  },
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
      videoUrl: "https://www.youtube.com/embed/97OOu0mUy18", // ✅ added this
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
    title: "Flutter Application - CIOK CRM -",
    description:
      "Fixing a bug in a client-facing application that allows CIOK customers to track orders and deliveries, place orders remotely",
    features: [
      "Lacus eu mauris quisque tortor torquent",
      "Lorem ipsum dolor sit amet consectetur",
      "Lacus eu mauris quisque tortor torquent",
    ],
    image: "/images/features/ciok.svg",
    order: true,
    gitUrl: "https://play.google.com/store/apps/details?id=com.serpi.ciok&hl=fr&pli=1",
    category: ["Mobile"],
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
    order: false,
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
    order: true,
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
    order: false,
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
    order: true,
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
    order: false,
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
    order: true,
    gitUrl: "https://github.com/hachem-dhawadi/RC-car",
    category: ["Robotics"],
  },
];


export function Features() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  const categoryOrder = ['Web', 'Mobile', 'Desktop', 'Robotics'];
  const categories = Array.from(new Set(projects.flatMap(p => p.category)))
    .sort((a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b));

  const filteredProjects = selectedCategory
    ? projects.filter(p => p.category.includes(selectedCategory))
    : projects;

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedProject]);

  const scrollGallery = (direction: 'left' | 'right') => {
    if (!galleryRef.current) return;

    const scrollAmount = 300; // Adjust this value based on your image width + gap
    if (direction === 'left') {
      galleryRef.current.scrollLeft -= scrollAmount;
    } else {
      galleryRef.current.scrollLeft += scrollAmount;
    }
  };

  const nextImage = () => {
    if (selectedProject?.gallery) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject?.gallery) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="bg-white dark:bg-neutral-900" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16">
        <h2 className="text-4xl font-bold text-center mb-8">Completed Projects</h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full transition-colors ${!selectedCategory
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-neutral-800 hover:bg-gray-300 dark:hover:bg-neutral-700"
              }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-neutral-800 hover:bg-gray-300 dark:hover:bg-neutral-700"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        {filteredProjects.map((content) => (
          <div
            key={content.title}
            className={`grid grid-cols-1 md:grid-cols-2 items-center gap-y-8 md:gap-x-16 lg:gap-x-28 mb-12`}
          >
            {/* Text Section */}
            <div
              className={`pt-8 md:pt-16 ${content.order ? "order-1 md:order-2" : "order-1"
                }`}
            >
              <h1 className="text-2xl font-bold">{content.title}</h1>
              <p className="pt-6 pb-6 text-base dark:text-neutral-400">
                {content.description}
              </p>

              <div className="flex gap-3">
                <Link href={content.gitUrl} target="_blank">
                  <button className="bg-[#2563EB] text-white px-5 py-2 rounded-lg shadow-md hover:bg-[#1d4ed8] transition-transform transform hover:scale-105">
                    View Project
                  </button>
                </Link>

                <button
                  onClick={() => setSelectedProject(content)}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 transition-transform transform hover:scale-105"
                >
                  Demo
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div
              onClick={() => setSelectedProject(content)}
              className={`pt-8 md:pt-16 flex justify-center cursor-pointer transition-transform hover:scale-105 ${content.order ? "order-1 md:order-1" : "order-1 md:order-2"
                }`}
            >
              <Image
                src={content.image}
                alt={content.title}
                width={500}
                height={1080}
                quality={75}
                sizes="100vw"
                priority
                className="object-contain max-h-[400px] rounded-2xl shadow-xl ring-1 ring-gray-200 dark:ring-neutral-700"
              />
            </div>
          </div>
        ))}

        {/* Modern Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="relative bg-white/10 dark:bg-neutral-900/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-10 max-w-4xl w-full border border-gray-200/20 dark:border-neutral-700/30 overflow-hidden"
                onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 text-gray-400 hover:text-white z-10"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>

                <div className="flex flex-col items-center text-center">
                  <h2 className="text-3xl font-bold mb-3 text-white">{selectedProject.title}</h2>


                  {/* Main Image Display with Navigation */}
               {/* Video or Image Section */}
{selectedProject.videoUrl ? (
  // ✅ If project has video, show iframe
  <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg mb-6">
    <iframe
      src={selectedProject.videoUrl}
      title={selectedProject.title}
      className="w-full h-full rounded-2xl"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
) : selectedProject.gallery && selectedProject.gallery.length > 0 ? (
  // ✅ Else, show image gallery
  <div className="relative w-full mb-6 overflow-hidden rounded-2xl">
    <div className="relative aspect-video bg-black/20 rounded-2xl flex items-center justify-center">
      <Image
        src={selectedProject.gallery[currentImageIndex]}
        alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
        width={800}
        height={450}
        className="object-contain rounded-2xl max-h-[400px]"
      />

      {/* Navigation Arrows */}
      {selectedProject.gallery.length > 1 && (
        <>
          {currentImageIndex > 0 && (
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
          )}
          {currentImageIndex < selectedProject.gallery.length - 1 && (
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          )}
        </>
      )}

      {/* Image Counter */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
        {currentImageIndex + 1} / {selectedProject.gallery.length}
      </div>
    </div>
  </div>
) : (
  <p className="text-gray-400 mb-6">No demo available.</p>
)}



                  <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <Link href={selectedProject.gitUrl} target="_blank">
                      <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-5 py-2 rounded-xl shadow-md hover:scale-105 transition-transform">
                        View Source Code
                      </button>
                    </Link>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="bg-white/10 border border-gray-400/20 text-white px-5 py-2 rounded-xl hover:bg-white/20 transition-transform hover:scale-105"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Zoomed Image Overlay */}
        <AnimatePresence>
          {activeImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 flex justify-center items-center z-[60]"
              onClick={() => setActiveImage(null)}
            >
              <motion.img
                src={activeImage}
                alt="Zoomed"
                className="max-h-[90vh] rounded-2xl shadow-2xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}