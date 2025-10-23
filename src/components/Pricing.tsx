'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckIcon, AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/outline";

const Table = [
  {
    title: "ESPRIT, Tunis, Ghazela — Engineering Program (2023    –2026)",
    frecuency: "month",
    mostPopular: false,
  },
    {
    title: "Synhive.com France (Remote) 01/07/2025 to 01/10/2025",
    frecuency: "year",
    mostPopular: false,
  },
  {
    title: "Industrial Space EL Azib Bizerte-Tunisia. 01/08/2024 to 15/09/2024",
    frecuency: "year",
    mostPopular: false,
  },
  {
    title: "Institute of Technological Studies of Bizerte 2022 - 2nd/3rd year System Development in Computer Science.",
    frecuency: "month",
    mostPopular: false,
  },
  {
    title: "Technopark El Ghazela 2088 Ariana 06/02/2023 to 27/05/2023",
    frecuency: "year",
    mostPopular: false,
  },
  {
    title: "Institute of Technological Studies of Bizerte 2021 - 1st year Information Technology.",
    frecuency: "month",
    mostPopular: false,
  },
  {
    title: "Cement Bizerte Jan. 2022",
    frecuency: "year",
    mostPopular: false,
  },
  {
    title: "Menzel Jemil High School, Bizerte Baccalaureate in Technical Sciences (with Honors)",
    frecuency: "month",
    mostPopular: false,
  },
  {
    title: "STIR of Bizerte July 2021",
    frecuency: "year",
    mostPopular: false,
  },
];

type DateInterval = "year" | "month";

export default function Timeline() {
  const [activeType, setActiveType] = useState<DateInterval>("month");
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  // Split items into education and experience
  const educationItems = Table.filter(item => item.frecuency === "month");
  const experienceItems = Table.filter(item => item.frecuency === "year");

  return (
    <div className="bg-white dark:bg-neutral-900 w-full px-4 pt-16 pb-16" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-8">
            Education & Experience
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <motion.div
            className="lg:w-64 space-y-2 sticky top-20 h-fit"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <button
              onClick={() => setActiveType("month")}
              className={`w-full flex items-center gap-3 px-6 py-3 rounded-xl transition-all ${
                activeType === "month" 
                  ? "bg-white dark:bg-neutral-800 shadow-lg text-blue-600 dark:text-blue-400"
                  : "hover:bg-gray-100 dark:hover:bg-neutral-800"
              }`}
            >
              <AcademicCapIcon className="w-5 h-5" />
              Education
            </button>
            <button
              onClick={() => setActiveType("year")}
              className={`w-full flex items-center gap-3 px-6 py-3 rounded-xl transition-all ${
                activeType === "year" 
                  ? "bg-white dark:bg-neutral-800 shadow-lg text-blue-600 dark:text-blue-400"
                  : "hover:bg-gray-100 dark:hover:bg-neutral-800"
              }`}
            >
              <BriefcaseIcon className="w-5 h-5" />
              Experience
            </button>
          </motion.div>

          {/* Timeline Items */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeType}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {(activeType === "month" ? educationItems : experienceItems).map((item, idx) => (
                  <motion.div
                    key={item.title}
                    className="group relative bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-l-full" />
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                        {activeType === "month" ? (
                          <AcademicCapIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        ) : (
                          <BriefcaseIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <div className="mt-2 flex items-center gap-2">
                          <span className="px-2 py-1 text-sm bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-full">
                            {item.frecuency === "month" ? "Education" : "Experience"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}