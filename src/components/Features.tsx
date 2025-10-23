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
              videoUrl: "/images/features/demogr.mp4", // ✅ added this
    gallery: [
      "/images/features/gr.jpg",
      "/images/features/g1.jpg",
      "/images/features/r3.jpg",
      "/images/features/r2.jpg",
      "/images/features/mb1.png",
      "/images/features/mb2.png",
      "/images/features/mb3.png",
      "/images/features/mb4.png",
    ],
    image: "/images/features/robot.png",
    order: false,
    gitUrl: "", // or your actual repo link
    category: ["Robotics"],
  },
  {
    title: "Mearn stack Application - StudyHub -",
    description:
      "StudyHub demonstrates the power of combining full-stack development, AI, and machine learning to create a modern, scalable, and interactive bootcamp learning platform. By integrating real-time chat, video meetings, AI-assisted evaluations, and role-based dashboards, the platform not only streamlines course management but also enhances personalized learning and collaboration. This project reflects our commitment to innovation in education, delivering a professional, production-ready solution that bridges technology and effective learning.",
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
               gallery: [
      "/images/features/c1.png",
      "/images/features/c2.png",
      "/images/features/c3.png",
      "/images/features/c4.png",

    ],
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

    gallery: [
      "/images/features/c1.jpg",
      "/images/features/c2.jpg",
      "/images/features/c3.jpg",
      "/images/features/c4.jpg",
      "/images/features/c5.jpg",
      "/images/features/c5.jpg",
      "/images/features/c7.jpg",
    ],
    order: true,
    gitUrl: "https://play.google.com/store/apps/details?id=com.serpi.ciok&hl=fr&pli=1",
    category: ["Mobile"],
  },
  {
    title: "JavaFx/Symfony/Flutterflow Application - InnoHire -",
    description:
      "Developed a cross-platform recruitment management application, featuring candidate profile management, automated interview scheduling, and real-time status tracking to optimize hiring workflows and enhance the overall recruitment experience.",
    features: [
      "Lacus eu mauris quisque tortor torquent",
      "Lorem ipsum dolor sit amet consectetur",
      "Lacus eu mauris quisque tortor torquent",
    ],
    image: "/images/features/m2.svg",
    gallery: [
      "/images/features/deslogin.png",
      "/images/features/deskclaim.png",
      "/images/features/deschat.png",
      "/images/features/fflogin.png",
      "/images/features/ffregister.png",
      "/images/features/ffupdate.png",
      "/images/features/ffchat.png",

    ],
    order: false,
    gitUrl: "https://github.com/hachem-dhawadi/innoHire-Desktop",
    category: ["Desktop", "Mobile", "Web"],
  },
  {
    title: "React Js/Native/Laravel Application - Essaf -",
    description:
      "Developed an integrated web and mobile application for queue management, incorporating features such as real-time queue tracking, appointment scheduling, and notifications to enhance operational efficiency and improve user experience.",
    features: [
      "But I must explain to you how all this mistaken",
      "Voluptatum deleniti atque corrupti quos",
      "He endures pains to avoid worse pains",
    ],
    gallery: [
      "/images/features/wpfe2.png",
      "/images/features/wpfe0.png",
      "/images/features/wpfe1.png",
      "/images/features/mpfe1.png",
      "/images/features/mpfe2.png",
      "/images/features/mpfe3.png",
      "/images/features/mpfe4.png",
      "/images/features/mpfe5.png",
      "/images/features/mpfe6.png",
      "/images/features/wpfe5.png",
      "/images/features/wpfe4.png",
      "/images/features/wpfe6.png",
      "/images/features/wpfe7.png",
      "/images/features/wpfe8.png",
      "/images/features/wpfe9.png",
      "/images/features/wpfe10.png",
      "/images/features/wpfe11.png",

    ],
    image: "/images/features/m3.svg",
    order: true,
    gitUrl: "https://github.com/hachem-dhawadi/Frontend-Web-Development-React.js",
    category: ["Mobile", "Web"],
  },
    {
    title: "Flutter Application - Rasem -",
    description:
      "Designed and developed a mobile application that facilitates interaction between teachers and students through course sharing and post publication.",
    features: [
      "Sed ut perspiciatis unde omnis iste natus",
      "Quis autem vel eum iure reprehenderit",
      "Consequuntur magni dolores eos qui ratione",
    ],
    image: "/images/features/m9.svg",
    gallery: [
      "/images/features/login.jpg",
      "/images/features/register.jpg",
      "/images/features/email.jpg",
      "/images/features/acc1.jpg",
      "/images/features/acc2.jpg",
      "/images/features/acc3.jpg",
      "/images/features/notes.jpg",
      "/images/features/pdf1.jpg",
      "/images/features/pdf2.jpg",
      "/images/features/profil.jpg",

    ],
    order: false,
    gitUrl: "https://www.flutterflow.io/",
    category: ["Mobile"],
  },  
  {
    title: "React Native Application - Connecti -",
    description:
      "Designed and implemented a mobile application for e-learning, incorporating features such as course sharing, post updates, and interactive engagement tools to improve the learning experience for both teachers and students.",
    features: [
      "Sed ut perspiciatis unde omnis iste natus",
      "Quis autem vel eum iure reprehenderit",
      "Consequuntur magni dolores eos qui ratione",
    ],
       gallery: [
      "/images/features/p1.jpg",
      "/images/features/p2.jpg",
      "/images/features/p3.jpg",
      "/images/features/p4.jpg",
            "/images/features/p5.jpg",

    ],
    image: "/images/features/m14.svg",
    order: true,
    gitUrl: "https://github.com/hachem-dhawadi/Connecti",
    category: ["Mobile"],
  },

  {
    title: "Line Follower Robot",
    description:
      "Designed and implemented a Line Follower Robot equipped with PID (Proportional-Integral-Derivative) control to achieve accurate path tracking, improve stability, and optimize response to varying track conditions.",
    features: [
      "Sed ut perspiciatis unde omnis iste natus",
      "Quis autem vel eum iure reprehenderit",
      "Consequuntur magni dolores eos qui ratione",
    ],
           gallery: [
      "/images/features/pid.jpg",


    ],
    image: "/images/features/pid.svg",
    order: false,
    gitUrl: "https://github.com/hachem-dhawadi/LineFollowerPid",
    category: ["Robotics"],
  },
  {
    title: "RC Robot",
    description:
      "Developed a four-wheel-drive remote-controlled car robot with universal remote control compatibility. The project included integration of motor drivers, remote communication protocols, and control logic to ensure smooth and accurate navigation across various terrains.",
    features: [
      "Sed ut perspiciatis unde omnis iste natus",
      "Quis autem vel eum iure reprehenderit",
      "Consequuntur magni dolores eos qui ratione",
    ],
           gallery: [
      "/images/features/rc1.jpg",

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
  const [showGitHubModal, setShowGitHubModal] = useState(false);
  const [githubModalProject, setGithubModalProject] = useState<any | null>(null);
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

    const scrollAmount = 300;
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

  const handleViewProject = (project: any) => {
    if (!project.gitUrl) {
      setGithubModalProject(project);
      setShowGitHubModal(true);
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
                {content.gitUrl ? (
                  <Link href={content.gitUrl} target="_blank">
                    <button className="bg-[#2563EB] text-white px-5 py-2 rounded-lg shadow-md hover:bg-[#1d4ed8] transition-transform transform hover:scale-105">
                      View Project
                    </button>
                  </Link>
                ) : (
                  <button 
                    onClick={() => handleViewProject(content)}
                    className="bg-[#2563EB] text-white px-5 py-2 rounded-lg shadow-md hover:bg-[#1d4ed8] transition-transform transform hover:scale-105"
                  >
                    View Project
                  </button>
                )}

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

        {/* Demo Modal */}
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

                  {/* Media Carousel (Video + Images) */}
                  {(selectedProject.videoUrl || selectedProject.gallery?.length) ? (
                    <div className="relative w-full mb-6 overflow-hidden rounded-2xl">
                      <div className="relative aspect-video bg-black/20 rounded-2xl flex items-center justify-center">
                        {/* Video first (index 0) */}
                        {selectedProject.videoUrl && currentImageIndex === 0 ? (
                          <iframe
                            src={selectedProject.videoUrl}
                            title={selectedProject.title}
                            className="w-full h-full rounded-2xl"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        ) : (
                          // Otherwise show images (offset index by 1 if there's a video)
                          selectedProject.gallery && (
                            <Image
                              src={
                                selectedProject.videoUrl
                                  ? selectedProject.gallery[currentImageIndex - 1]
                                  : selectedProject.gallery[currentImageIndex]
                              }
                              alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                              width={800}
                              height={450}
                              className="object-contain rounded-2xl max-h-[400px]"
                            />
                          )
                        )}

                        {/* Navigation Arrows */}
                        {(() => {
                          const totalSlides =
                            (selectedProject.videoUrl ? 1 : 0) +
                            (selectedProject.gallery?.length || 0);
                          return totalSlides > 1 ? (
                            <>
                              {currentImageIndex > 0 && (
                                <button
                                  onClick={() => setCurrentImageIndex((prev) => prev - 1)}
                                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                                >
                                  <ChevronLeftIcon className="h-6 w-6" />
                                </button>
                              )}
                              {currentImageIndex < totalSlides - 1 && (
                                <button
                                  onClick={() => setCurrentImageIndex((prev) => prev + 1)}
                                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                                >
                                  <ChevronRightIcon className="h-6 w-6" />
                                </button>
                              )}
                              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                                {currentImageIndex + 1} / {totalSlides}
                              </div>
                            </>
                          ) : null;
                        })()}
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-400 mb-6">No demo available.</p>
                  )}

                  <div className="mt-8 flex flex-wrap justify-center gap-3">
                    {selectedProject.gitUrl ? (
                      <Link href={selectedProject.gitUrl} target="_blank">
                        <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-5 py-2 rounded-xl shadow-md hover:scale-105 transition-transform">
                          View Source Code
                        </button>
                      </Link>
                    ) : (
                      <button 
                        onClick={() => {
                          setSelectedProject(null);
                          setGithubModalProject(selectedProject);
                          setShowGitHubModal(true);
                        }}
                        className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-5 py-2 rounded-xl shadow-md hover:scale-105 transition-transform"
                      >
                        View Source Code
                      </button>
                    )}
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

        {/* GitHub Private Repository Modal */}
        <AnimatePresence>
          {showGitHubModal && githubModalProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
              onClick={() => setShowGitHubModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="relative bg-white/10 dark:bg-neutral-900/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-10 max-w-2xl w-full border border-gray-200/20 dark:border-neutral-700/30 overflow-hidden"
                onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowGitHubModal(false)}
                  className="absolute top-5 right-5 text-gray-400 hover:text-white z-10"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>

                <div className="flex flex-col items-center text-center">
                  {/* Security Icon */}
                  <div className="mb-6 p-4 bg-yellow-500/20 rounded-full">
                    <svg className="h-12 w-12 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>

                  <h2 className="text-3xl font-bold mb-4 text-white">Private Repository</h2>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                      {githubModalProject.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      This repository is kept private due to confidentiality and intellectual property protection.
                    </p>
                    <div className="bg-black/30 rounded-xl p-4 border border-yellow-500/30">
                      <p className="text-yellow-200 text-xs">
                        The source code contains proprietary algorithms, sensitive implementation details, 
                        and confidential project information that cannot be publicly shared.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={() => setShowGitHubModal(false)}
                      className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-xl shadow-md hover:scale-105 transition-transform"
                    >
                      Understood
                    </button>
                    <button
                      onClick={() => setShowGitHubModal(false)}
                      className="bg-white/10 border border-gray-400/20 text-white px-6 py-3 rounded-xl hover:bg-white/20 transition-transform hover:scale-105"
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